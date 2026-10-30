module.exports = [
"[project]/src/utils/currencyUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    return match?.symbol || "$";
}
/**
 * Reads cached live exchange rates from localStorage if valid
 */ function readStorageRates() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
/**
 * Initializes in-memory rates from storage on client load
 */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
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
                if (data?.rates && typeof data.rates === "object") {
                    const merged = {
                        ...FALLBACK_FX_RATES,
                        ...data.rates
                    };
                    inMemoryRates = merged;
                    inMemoryLastUpdated = now;
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
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
                if (backupData?.rates && typeof backupData.rates === "object") {
                    const merged = {
                        ...FALLBACK_FX_RATES,
                        ...backupData.rates
                    };
                    inMemoryRates = merged;
                    inMemoryLastUpdated = now;
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
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
        const formatted = num.toLocaleString(match.locale || "en-US", {
            minimumFractionDigits: options?.minimumFractionDigits ?? 2,
            maximumFractionDigits: options?.maximumFractionDigits ?? 2,
            ...options
        });
        return `${match.symbol}${formatted}`;
    } catch  {
        return `${match.symbol}${num.toFixed(2)}`;
    }
}
}),
"[project]/src/hooks/useUserCurrency.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/currencyService.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currencyUtils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PREFERRED_CURRENCY_KEY = "pingdart_preferred_currency";
const CRM_CURRENCY_STORAGE_KEY = "pingdart_crm_currency_mode";
const FX_RATES_FROM_USD = new Proxy({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FALLBACK_FX_RATES"]
}, {
    get (_target, prop) {
        const rates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])();
        return rates[prop] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FALLBACK_FX_RATES"][prop] ?? 1;
    },
    has (_target, prop) {
        const rates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])();
        return prop in rates || prop in __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FALLBACK_FX_RATES"];
    },
    ownKeys () {
        return Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])());
    },
    getOwnPropertyDescriptor (_target, prop) {
        return {
            enumerable: true,
            configurable: true,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])()[prop]
        };
    }
});
function convertCurrency(amount, fromCurrency = "INR", toCurrency = "USD") {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertCurrencySync"])(amount, fromCurrency, toCurrency);
}
function resolveUserCurrencyCode(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Check authenticated user object
    const userCurr = user?.currency_code || user?.currencyCode || user?.currency;
    if (userCurr && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][userCurr]) {
        return userCurr;
    }
    // Fallback to intelligent country detection (India -> INR, all other countries -> USD)
    const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectCountryCurrency"])(user);
    return detected.code || "USD";
}
function useUserCurrency() {
    const { user, updateUser, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [currencyCode, setCurrencyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>resolveUserCurrencyCode(user));
    // Sync state whenever storage or custom events fire
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleCurrencyUpdate = ()=>{
            const resolved = resolveUserCurrencyCode(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user);
            setCurrencyCode(resolved);
        };
        // Initial check on mount & fetch latest live exchange rates
        handleCurrencyUpdate();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchLiveExchangeRates"])().then(()=>{
            handleCurrencyUpdate();
        });
        const handleRatesUpdate = ()=>{
            setCurrencyCode((prev)=>prev);
        };
        window.addEventListener("pingdart_rates_updated", handleRatesUpdate);
        window.addEventListener("pingdart_currency_changed", handleCurrencyUpdate);
        window.addEventListener("crm:currency_change", handleCurrencyUpdate);
        window.addEventListener("storage", handleCurrencyUpdate);
        // Also subscribe to authStore user changes
        const unsubAuth = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].subscribe((state)=>{
            const uCurr = state.user?.currency_code || state.user?.currencyCode || state.user?.currency;
            if (uCurr && uCurr !== currencyCode && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][uCurr]) {
                setCurrencyCode(uCurr);
            }
        });
        return ()=>{
            window.removeEventListener("pingdart_rates_updated", handleRatesUpdate);
            window.removeEventListener("pingdart_currency_changed", handleCurrencyUpdate);
            window.removeEventListener("crm:currency_change", handleCurrencyUpdate);
            window.removeEventListener("storage", handleCurrencyUpdate);
            unsubAuth();
        };
    }, [
        currencyCode
    ]);
    const activeCurrencyItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][currencyCode] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"]["INR"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"][0];
    const currencySymbol = activeCurrencyItem.symbol;
    const isCreatedByMeddylistAdmin = Boolean(user?.createdByAdmin === "admin@meddylist.com" || user?.created_by_admin === "admin@meddylist.com" || user?.email && user.email.toLowerCase().endsWith("@meddylist.com") && user.email.toLowerCase() !== "admin@meddylist.com");
    const isCurrencyLocked = Boolean(user?.isCurrencyLocked || user?.is_currency_locked || isCreatedByMeddylistAdmin || "undefined" !== "undefined" && localStorage.getItem("pingdart_currency_locked") === "true");
    const lockedReason = isCreatedByMeddylistAdmin ? "Fixed by Organization Admin (admin@meddylist.com)" : user?.currencyLockedReason || user?.currency_locked_reason || (isCurrencyLocked ? "Configured during registration (one-time choice)" : null);
    /**
   * Sets currency globally (one-time lock):
   * 1. Checks if currency is already locked
   * 2. Updates localStorage and locks further modifications
   * 3. Updates local Zustand authStore
   * 4. Syncs with backend user profile if logged in
   * 5. Broadcasts custom event to re-render all subscribers immediately
   */ const setCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (newCode, force = false)=>{
        if (!newCode || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][newCode]) return false;
        // Prevent modification if already locked or fixed by admin@meddylist.com
        if (isCurrencyLocked && !force) {
            return false;
        }
        const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][newCode];
        setCurrencyCode(newCode);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Update auth store user if available
        const currentU = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setUserPreferredCurrency"])(newCode, currentU?.id || "guest");
        // Broadcast to all reactive listeners
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Persist to backend user profile if authenticated
        const token = accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken;
        if (token) {
            try {
                await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/api/users/profile`, {
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
    }, [
        updateUser,
        accessToken,
        isCurrencyLocked
    ]);
    /**
   * Formats a monetary value with currency symbol and appropriate locale.
   * If overrideCurrency is provided (e.g. from a specific CRM deal/quote), uses that instead.
   */ const formatAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((val, overrideCurrency)=>{
        const num = Number(val) || 0;
        const targetCode = overrideCurrency && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][overrideCurrency] ? overrideCurrency : currencyCode;
        const targetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][targetCode] || activeCurrencyItem;
        try {
            return `${targetItem.symbol}${num.toLocaleString(targetItem.locale || "en-US", {
                minimumFractionDigits: num % 1 !== 0 ? 2 : 0,
                maximumFractionDigits: 2
            })}`;
        } catch  {
            return `${targetItem.symbol}${num.toLocaleString()}`;
        }
    }, [
        currencyCode,
        activeCurrencyItem
    ]);
    /**
   * Formats a large monetary value into compact notation (e.g. ₹50L, ₹2.5Cr, $1.2M, €800K).
   */ const formatCompact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((val, overrideCurrency)=>{
        const num = Number(val) || 0;
        const targetCode = overrideCurrency && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][overrideCurrency] ? overrideCurrency : currencyCode;
        const targetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][targetCode] || activeCurrencyItem;
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
    }, [
        currencyCode,
        activeCurrencyItem
    ]);
    /**
   * Helper to retrieve symbol for any given currency code.
   */ const getSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((code)=>{
        if (!code) return currencySymbol;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][code]?.symbol || code;
    }, [
        currencySymbol
    ]);
    /**
   * Converts a base system USD amount into the target currency using standard FX rates.
   */ const convertFromUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((usdAmount, targetCurrency)=>{
        if (!usdAmount || usdAmount === 0) return 0;
        const target = targetCurrency || currencyCode;
        const rate = FX_RATES_FROM_USD[target] || 1;
        return Math.round(usdAmount * rate);
    }, [
        currencyCode
    ]);
    /**
   * Converts and formats a base system USD amount into the user's localized currency string.
   * e.g. formatFromUSD(250) -> "$250" when user is USD, "₹20,875" when user is INR, "€230" when EUR.
   */ const formatFromUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((usdAmount, targetCurrency)=>{
        const target = targetCurrency || currencyCode;
        const targetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][target] || activeCurrencyItem;
        if (!usdAmount || usdAmount === 0) {
            return `${targetItem.symbol}0`;
        }
        const converted = convertFromUSD(usdAmount, target);
        try {
            return `${targetItem.symbol}${converted.toLocaleString(targetItem.locale || "en-US")}`;
        } catch  {
            return `${targetItem.symbol}${converted.toLocaleString()}`;
        }
    }, [
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
        supportedCurrencies: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"],
        currencyMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"],
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
        convertFromINR: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((inrAmount, targetCurrency)=>{
            return convertCurrency(inrAmount, "INR", targetCurrency || currencyCode);
        }, [
            currencyCode
        ])
    };
}
const __TURBOPACK__default__export__ = useUserCurrency;
}),
"[project]/src/services/currencyService.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserCurrency.ts [app-ssr] (ecmascript)");
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
const CURRENCY_MAP = SUPPORTED_CURRENCIES.reduce((acc, curr)=>{
    acc[curr.code] = curr;
    return acc;
}, {});
const CURRENCY_SYMBOLS = SUPPORTED_CURRENCIES.reduce((acc, curr)=>{
    acc[curr.code] = curr.symbol;
    return acc;
}, {});
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
    if (user?.countryCode) {
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
    if (user?.dialCode) {
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
    if (user?.phone) {
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
    const loc = `${user?.location || ""} ${user?.country || ""}`.toLowerCase();
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
    if ("TURBOPACK compile-time truthy", 1) return "USD";
    //TURBOPACK unreachable
    ;
}
function setUserPreferredCurrency(code, userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function formatCurrencyAmount(amount, currencyCode = "INR") {
    const item = CURRENCY_MAP[currencyCode] || {
        symbol: "₹",
        locale: "en-IN"
    };
    try {
        return `${item.symbol}${amount.toLocaleString(item.locale || "en-IN")}`;
    } catch  {
        return `${item.symbol}${amount.toLocaleString()}`;
    }
}
;
}),
"[project]/src/services/simService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPhoneNumberWithCountry",
    ()=>formatPhoneNumberWithCountry,
    "getSimCardsInfo",
    ()=>getSimCardsInfo,
    "requestSimPermission",
    ()=>requestSimPermission,
    "requestSimPhoneNumberHint",
    ()=>requestSimPhoneNumberHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneInput.tsx [app-ssr] (ecmascript)");
;
;
const SimCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerPlugin"])("SimCard");
function formatPhoneNumberWithCountry(raw, fallbackCountryIso = "IN") {
    if (!raw) return "";
    const trimmed = raw.trim();
    const sortedCountries = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"]
    ].sort((a, b)=>b.dial_code.length - a.dial_code.length);
    // 1. Direct match with dial code (e.g. +919876543210 or +15551234567)
    for (const c of sortedCountries){
        if (trimmed.startsWith(c.dial_code)) {
            const digits = trimmed.slice(c.dial_code.length).replace(/\D/g, "");
            return `${c.dial_code} ${digits}`.trim();
        }
        // Also handle 919876543210 without plus if country code matches
        const codeNoPlus = c.dial_code.replace("+", "");
        if (trimmed.startsWith(codeNoPlus) && trimmed.length > codeNoPlus.length + 6) {
            const digits = trimmed.slice(codeNoPlus.length).replace(/\D/g, "");
            return `${c.dial_code} ${digits}`.trim();
        }
    }
    // 2. Fallback to country ISO (e.g. Indian 10-digit number like 9876543210 or 09876543210)
    const country = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"].find((c)=>c.code.toUpperCase() === fallbackCountryIso.toUpperCase()) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"].find((c)=>c.code === "IN");
    let digits = trimmed.replace(/\D/g, "");
    if (digits.startsWith("0")) {
        digits = digits.slice(1);
    }
    return `${country.dial_code} ${digits}`.trim();
}
async function getSimCardsInfo() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        return {
            hasPermission: false,
            simCards: []
        };
    }
    try {
        const res = await SimCard.getSimInfo();
        const countryIso = res.countryIso || "IN";
        const simCards = (res.simCards || []).map((card)=>{
            const formatted = card.number ? formatPhoneNumberWithCountry(card.number, card.countryIso || countryIso) : "";
            return {
                ...card,
                formatted
            };
        });
        const primaryNumber = res.phoneNumber ? formatPhoneNumberWithCountry(res.phoneNumber, countryIso) : simCards.find((c)=>Boolean(c.formatted))?.formatted || "";
        return {
            hasPermission: res.hasPermission,
            phoneNumber: res.phoneNumber,
            countryIso,
            simCards,
            formattedNumber: primaryNumber
        };
    } catch (err) {
        console.warn("[SimService] getSimInfo error:", err);
        return {
            hasPermission: false,
            simCards: []
        };
    }
}
async function requestSimPhoneNumberHint(fallbackCountryIso = "IN") {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        return null;
    }
    try {
        const res = await SimCard.getPhoneNumberHint();
        if (res?.phoneNumber) {
            return formatPhoneNumberWithCountry(res.phoneNumber, fallbackCountryIso);
        }
    } catch (err) {
        console.warn("[SimService] getPhoneNumberHint cancelled or unavailable:", err);
    }
    return null;
}
async function requestSimPermission() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return false;
    try {
        const res = await SimCard.requestSimPermission();
        return Boolean(res?.granted);
    } catch  {
        return false;
    }
}
}),
"[project]/src/components/PhoneInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTRIES",
    ()=>COUNTRIES,
    "PhoneInput",
    ()=>PhoneInput,
    "getCountryFlag",
    ()=>getCountryFlag,
    "getPhoneDetails",
    ()=>getPhoneDetails,
    "getRequiredDigits",
    ()=>getRequiredDigits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowDown01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.mjs [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$simService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/simService.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const COUNTRIES = [
    {
        name: "Afghanistan",
        code: "AF",
        dial_code: "+93"
    },
    {
        name: "Albania",
        code: "AL",
        dial_code: "+355"
    },
    {
        name: "Algeria",
        code: "DZ",
        dial_code: "+213"
    },
    {
        name: "Andorra",
        code: "AD",
        dial_code: "+376"
    },
    {
        name: "Angola",
        code: "AO",
        dial_code: "+244"
    },
    {
        name: "Argentina",
        code: "AR",
        dial_code: "+54"
    },
    {
        name: "Armenia",
        code: "AM",
        dial_code: "+374"
    },
    {
        name: "Australia",
        code: "AU",
        dial_code: "+61"
    },
    {
        name: "Austria",
        code: "AT",
        dial_code: "+43"
    },
    {
        name: "Azerbaijan",
        code: "AZ",
        dial_code: "+994"
    },
    {
        name: "Bahamas",
        code: "BS",
        dial_code: "+1242"
    },
    {
        name: "Bahrain",
        code: "BH",
        dial_code: "+973"
    },
    {
        name: "Bangladesh",
        code: "BD",
        dial_code: "+880"
    },
    {
        name: "Belarus",
        code: "BY",
        dial_code: "+375"
    },
    {
        name: "Belgium",
        code: "BE",
        dial_code: "+32"
    },
    {
        name: "Bolivia",
        code: "BO",
        dial_code: "+591"
    },
    {
        name: "Bosnia and Herzegovina",
        code: "BA",
        dial_code: "+387"
    },
    {
        name: "Brazil",
        code: "BR",
        dial_code: "+55"
    },
    {
        name: "Bulgaria",
        code: "BG",
        dial_code: "+359"
    },
    {
        name: "Cambodia",
        code: "KH",
        dial_code: "+855"
    },
    {
        name: "Cameroon",
        code: "CM",
        dial_code: "+237"
    },
    {
        name: "Canada",
        code: "CA",
        dial_code: "+1"
    },
    {
        name: "Chile",
        code: "CL",
        dial_code: "+56"
    },
    {
        name: "China",
        code: "CN",
        dial_code: "+86"
    },
    {
        name: "Colombia",
        code: "CO",
        dial_code: "+57"
    },
    {
        name: "Costa Rica",
        code: "CR",
        dial_code: "+506"
    },
    {
        name: "Croatia",
        code: "HR",
        dial_code: "+385"
    },
    {
        name: "Cuba",
        code: "CU",
        dial_code: "+53"
    },
    {
        name: "Cyprus",
        code: "CY",
        dial_code: "+357"
    },
    {
        name: "Czech Republic",
        code: "CZ",
        dial_code: "+420"
    },
    {
        name: "Denmark",
        code: "DK",
        dial_code: "+45"
    },
    {
        name: "Dominican Republic",
        code: "DO",
        dial_code: "+1809"
    },
    {
        name: "Ecuador",
        code: "EC",
        dial_code: "+593"
    },
    {
        name: "Egypt",
        code: "EG",
        dial_code: "+20"
    },
    {
        name: "El Salvador",
        code: "SV",
        dial_code: "+503"
    },
    {
        name: "Estonia",
        code: "EE",
        dial_code: "+372"
    },
    {
        name: "Ethiopia",
        code: "ET",
        dial_code: "+251"
    },
    {
        name: "Finland",
        code: "FI",
        dial_code: "+358"
    },
    {
        name: "France",
        code: "FR",
        dial_code: "+33"
    },
    {
        name: "Georgia",
        code: "GE",
        dial_code: "+995"
    },
    {
        name: "Germany",
        code: "DE",
        dial_code: "+49"
    },
    {
        name: "Ghana",
        code: "GH",
        dial_code: "+233"
    },
    {
        name: "Greece",
        code: "GR",
        dial_code: "+30"
    },
    {
        name: "Guatemala",
        code: "GT",
        dial_code: "+502"
    },
    {
        name: "Honduras",
        code: "HN",
        dial_code: "+504"
    },
    {
        name: "Hong Kong",
        code: "HK",
        dial_code: "+852"
    },
    {
        name: "Hungary",
        code: "HU",
        dial_code: "+36"
    },
    {
        name: "Iceland",
        code: "IS",
        dial_code: "+354"
    },
    {
        name: "India",
        code: "IN",
        dial_code: "+91"
    },
    {
        name: "Indonesia",
        code: "ID",
        dial_code: "+62"
    },
    {
        name: "Iran",
        code: "IR",
        dial_code: "+98"
    },
    {
        name: "Iraq",
        code: "IQ",
        dial_code: "+964"
    },
    {
        name: "Ireland",
        code: "IE",
        dial_code: "+353"
    },
    {
        name: "Israel",
        code: "IL",
        dial_code: "+972"
    },
    {
        name: "Italy",
        code: "IT",
        dial_code: "+39"
    },
    {
        name: "Jamaica",
        code: "JM",
        dial_code: "+1876"
    },
    {
        name: "Japan",
        code: "JP",
        dial_code: "+81"
    },
    {
        name: "Jordan",
        code: "JO",
        dial_code: "+962"
    },
    {
        name: "Kazakhstan",
        code: "KZ",
        dial_code: "+7"
    },
    {
        name: "Kenya",
        code: "KE",
        dial_code: "+254"
    },
    {
        name: "Kuwait",
        code: "KW",
        dial_code: "+965"
    },
    {
        name: "Latvia",
        code: "LV",
        dial_code: "+371"
    },
    {
        name: "Lebanon",
        code: "LB",
        dial_code: "+961"
    },
    {
        name: "Libya",
        code: "LY",
        dial_code: "+218"
    },
    {
        name: "Lithuania",
        code: "LT",
        dial_code: "+370"
    },
    {
        name: "Luxembourg",
        code: "LU",
        dial_code: "+352"
    },
    {
        name: "Malaysia",
        code: "MY",
        dial_code: "+60"
    },
    {
        name: "Malta",
        code: "MT",
        dial_code: "+356"
    },
    {
        name: "Mexico",
        code: "MX",
        dial_code: "+52"
    },
    {
        name: "Moldova",
        code: "MD",
        dial_code: "+373"
    },
    {
        name: "Monaco",
        code: "MC",
        dial_code: "+377"
    },
    {
        name: "Mongolia",
        code: "MN",
        dial_code: "+976"
    },
    {
        name: "Montenegro",
        code: "ME",
        dial_code: "+382"
    },
    {
        name: "Morocco",
        code: "MA",
        dial_code: "+212"
    },
    {
        name: "Nepal",
        code: "NP",
        dial_code: "+977"
    },
    {
        name: "Netherlands",
        code: "NL",
        dial_code: "+31"
    },
    {
        name: "New Zealand",
        code: "NZ",
        dial_code: "+64"
    },
    {
        name: "Nicaragua",
        code: "NI",
        dial_code: "+505"
    },
    {
        name: "Nigeria",
        code: "NG",
        dial_code: "+234"
    },
    {
        name: "North Korea",
        code: "KP",
        dial_code: "+850"
    },
    {
        name: "Norway",
        code: "NO",
        dial_code: "+47"
    },
    {
        name: "Oman",
        code: "OM",
        dial_code: "+968"
    },
    {
        name: "Pakistan",
        code: "PK",
        dial_code: "+92"
    },
    {
        name: "Palestine",
        code: "PS",
        dial_code: "+970"
    },
    {
        name: "Panama",
        code: "PA",
        dial_code: "+507"
    },
    {
        name: "Paraguay",
        code: "PY",
        dial_code: "+595"
    },
    {
        name: "Peru",
        code: "PE",
        dial_code: "+51"
    },
    {
        name: "Philippines",
        code: "PH",
        dial_code: "+63"
    },
    {
        name: "Poland",
        code: "PL",
        dial_code: "+48"
    },
    {
        name: "Portugal",
        code: "PT",
        dial_code: "+351"
    },
    {
        name: "Qatar",
        code: "QA",
        dial_code: "+974"
    },
    {
        name: "Romania",
        code: "RO",
        dial_code: "+40"
    },
    {
        name: "Russia",
        code: "RU",
        dial_code: "+7"
    },
    {
        name: "Saudi Arabia",
        code: "SA",
        dial_code: "+966"
    },
    {
        name: "Senegal",
        code: "SN",
        dial_code: "+221"
    },
    {
        name: "Serbia",
        code: "RS",
        dial_code: "+381"
    },
    {
        name: "Singapore",
        code: "SG",
        dial_code: "+65"
    },
    {
        name: "Slovakia",
        code: "SK",
        dial_code: "+421"
    },
    {
        name: "Slovenia",
        code: "SI",
        dial_code: "+386"
    },
    {
        name: "Somalia",
        code: "SO",
        dial_code: "+252"
    },
    {
        name: "South Africa",
        code: "ZA",
        dial_code: "+27"
    },
    {
        name: "South Korea",
        code: "KR",
        dial_code: "+82"
    },
    {
        name: "Spain",
        code: "ES",
        dial_code: "+34"
    },
    {
        name: "Sri Lanka",
        code: "LK",
        dial_code: "+94"
    },
    {
        name: "Sudan",
        code: "SD",
        dial_code: "+249"
    },
    {
        name: "Sweden",
        code: "SE",
        dial_code: "+46"
    },
    {
        name: "Switzerland",
        code: "CH",
        dial_code: "+41"
    },
    {
        name: "Syria",
        code: "SY",
        dial_code: "+963"
    },
    {
        name: "Taiwan",
        code: "TW",
        dial_code: "+886"
    },
    {
        name: "Tajikistan",
        code: "TJ",
        dial_code: "+992"
    },
    {
        name: "Tanzania",
        code: "TZ",
        dial_code: "+255"
    },
    {
        name: "Thailand",
        code: "TH",
        dial_code: "+66"
    },
    {
        name: "Tunisia",
        code: "TN",
        dial_code: "+216"
    },
    {
        name: "Turkey",
        code: "TR",
        dial_code: "+90"
    },
    {
        name: "Turkmenistan",
        code: "TM",
        dial_code: "+993"
    },
    {
        name: "Uganda",
        code: "UG",
        dial_code: "+256"
    },
    {
        name: "Ukraine",
        code: "UA",
        dial_code: "+380"
    },
    {
        name: "United Arab Emirates",
        code: "AE",
        dial_code: "+971"
    },
    {
        name: "United Kingdom",
        code: "GB",
        dial_code: "+44"
    },
    {
        name: "United States",
        code: "US",
        dial_code: "+1"
    },
    {
        name: "Uruguay",
        code: "UY",
        dial_code: "+598"
    },
    {
        name: "Uzbekistan",
        code: "UZ",
        dial_code: "+998"
    },
    {
        name: "Venezuela",
        code: "VE",
        dial_code: "+58"
    },
    {
        name: "Vietnam",
        code: "VN",
        dial_code: "+84"
    },
    {
        name: "Yemen",
        code: "YE",
        dial_code: "+967"
    },
    {
        name: "Zambia",
        code: "ZM",
        dial_code: "+260"
    },
    {
        name: "Zimbabwe",
        code: "ZW",
        dial_code: "+263"
    }
];
const getPlaceholder = (code)=>{
    switch(code){
        case 'US':
        case 'CA':
            return '(555) 000-0000';
        case 'GB':
            return '07700 900000';
        case 'IN':
            return '98765 43210';
        case 'AU':
            return '0412 345 678';
        case 'FR':
            return '06 12 34 56 78';
        case 'DE':
            return '0151 12345678';
        case 'JP':
            return '090-1234-5678';
        case 'CN':
            return '139 1234 5678';
        case 'BR':
            return '(11) 91234-5678';
        case 'MX':
            return '55 1234 5678';
        case 'ZA':
            return '082 123 4567';
        case 'NG':
            return '0803 123 4567';
        case 'RU':
            return '(912) 345-67-89';
        default:
            return '12345 67890';
    }
};
const getRequiredDigits = (code)=>{
    switch(code){
        case 'CN':
        case 'BR':
            return 11;
        case 'FR':
        case 'AU':
        case 'ES':
        case 'SG':
        case 'HK':
            return 9;
        case 'IN':
        case 'US':
        case 'CA':
        case 'RU':
        case 'MX':
        case 'ZA':
        case 'JP':
        case 'NG':
        case 'GB':
        case 'DE':
        default:
            return 10;
    }
};
function getPhoneDetails(value) {
    const sortedCountries = [
        ...COUNTRIES
    ].sort((a, b)=>b.dial_code.length - a.dial_code.length);
    const matched = sortedCountries.find((c)=>value.startsWith(c.dial_code)) || COUNTRIES.find((c)=>c.code === 'IN');
    let rawNumber = value;
    if (value.startsWith(matched.dial_code)) {
        rawNumber = value.slice(matched.dial_code.length);
    }
    const digits = rawNumber.replace(/\D/g, '');
    const requiredDigits = getRequiredDigits(matched.code);
    return {
        country: matched,
        digits,
        requiredDigits,
        isValid: digits.length === requiredDigits,
        isShort: digits.length > 0 && digits.length < requiredDigits,
        isOver: digits.length > requiredDigits
    };
}
function getCountryFlag(countryCode) {
    if (!countryCode || countryCode.length !== 2) return "🌐";
    const codePoints = countryCode.toUpperCase().split("").map((char)=>127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}
function PhoneInput({ value, onChange, onCountryChange, required = false, status = null }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [defaultCountryCode, setDefaultCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('IN');
    const [detectedSims, setDetectedSims] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDetectingSim, setIsDetectingSim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAutoPromptedHint, setHasAutoPromptedHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [
        isOpen
    ]);
    // Auto-detect SIM card info and phone number on mobile hardware
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const runSimDetection = async ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return;
            try {
                const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$simService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSimCardsInfo"])();
                if (!isMounted) return;
                if (info.countryIso) {
                    setDefaultCountryCode(info.countryIso);
                }
                if (info.simCards && info.simCards.length > 0) {
                    setDetectedSims(info.simCards);
                }
                // If phone field is empty and hardware provided a number, auto-fill immediately
                if (!value && info.formattedNumber) {
                    onChange(info.formattedNumber);
                }
            } catch (err) {
                console.warn("[PhoneInput] SIM auto-detection note:", err);
            }
        };
        runSimDetection();
        return ()=>{
            isMounted = false;
        };
    }, []);
    const handleLaunchSimHint = async ()=>{
        setIsDetectingSim(true);
        try {
            const hintNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$simService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestSimPhoneNumberHint"])(defaultCountryCode);
            if (hintNumber) {
                onChange(hintNumber);
            }
        } finally{
            setIsDetectingSim(false);
        }
    };
    const handleInputFocus = ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() && !value && !hasAutoPromptedHint && detectedSims.every((s)=>!s.formatted)) {
            setHasAutoPromptedHint(true);
            handleLaunchSimHint();
        }
    };
    const defaultCountry = COUNTRIES.find((c)=>c.code === defaultCountryCode) || COUNTRIES.find((c)=>c.code === 'IN');
    let currentCountry = defaultCountry;
    let phoneNumber = value;
    if (value) {
        // Sort by length descending to match +1809 before +1
        const sortedCountries = [
            ...COUNTRIES
        ].sort((a, b)=>b.dial_code.length - a.dial_code.length);
        const matched = sortedCountries.find((c)=>value.startsWith(c.dial_code));
        if (matched) {
            currentCountry = matched;
            phoneNumber = value.slice(matched.dial_code.length).trim();
        }
    }
    // Notify parent of country changes (mount, SIM detection, or user selection)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentCountry && onCountryChange) {
            onCountryChange(currentCountry);
        }
    }, [
        currentCountry.code,
        currentCountry.dial_code,
        onCountryChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const filteredCountries = COUNTRIES.filter((c)=>c.name.toLowerCase().includes(search.toLowerCase()) || c.dial_code.includes(search) || c.code.toLowerCase().includes(search.toLowerCase()));
    const isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        ref: wrapperRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "flex items-center gap-1.5 px-3 py-3 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all h-[50px] text-xs font-semibold cursor-pointer shadow-2xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: getCountryFlag(currentCountry.code)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white",
                                        children: currentCountry.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500",
                                        children: currentCountry.dial_code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowDown01Icon"], {
                                        size: 14,
                                        className: "text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute z-50 top-full mt-1.5 left-0 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col max-h-80 animate-in fade-in zoom-in-95 duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 border-b border-gray-100 dark:border-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                    size: 14,
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: searchInputRef,
                                                    type: "text",
                                                    placeholder: "Search country or code...",
                                                    value: search,
                                                    onChange: (e)=>setSearch(e.target.value),
                                                    className: "w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-xs text-xs--line-height text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors",
                                                    onClick: (e)=>e.stopPropagation()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PhoneInput.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-y-auto p-1 flex-1",
                                        children: filteredCountries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 text-center text-xs text-gray-500",
                                            children: "No countries found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PhoneInput.tsx",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this) : filteredCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    onChange(`${country.dial_code} ${phoneNumber}`);
                                                    onCountryChange?.(country);
                                                    setIsOpen(false);
                                                    setSearch('');
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])("w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-xs--line-height text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer", currentCountry.code === country.code ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-semibold" : "text-gray-700 dark:text-gray-300"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate pr-2",
                                                        children: country.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 shrink-0",
                                                        children: country.dial_code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, country.code, true, {
                                                fileName: "[project]/src/components/PhoneInput.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PhoneInput.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneInput.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallIcon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "phone",
                                autoComplete: "tel",
                                inputMode: "tel",
                                autoCapitalize: "off",
                                autoCorrect: "off",
                                spellCheck: false,
                                required: required,
                                value: phoneNumber,
                                onFocus: handleInputFocus,
                                onChange: (e)=>{
                                    const rawDigits = e.target.value.replace(/\D/g, '');
                                    const maxDigits = getRequiredDigits(currentCountry.code);
                                    const truncated = rawDigits.slice(0, maxDigits);
                                    onChange(`${currentCountry.dial_code} ${truncated}`);
                                },
                                placeholder: getPlaceholder(currentCountry.code),
                                className: `w-full h-[50px] pl-11 pr-11 rounded-2xl border outline-none transition-all text-xs font-semibold placeholder:text-slate-400 ${status === "available" ? "border-green-500 bg-green-50/10 text-slate-900 dark:text-white" : status === "taken" || status === "invalid" ? "border-red-500 bg-red-50/10 text-slate-900 dark:text-white" : "border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-2xs"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleLaunchSimHint,
                                disabled: isDetectingSim,
                                title: "Auto-detect SIM phone number",
                                className: "absolute inset-y-0 right-2 my-auto h-8 w-8 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 hover:bg-blue-100 transition-colors border border-blue-100 dark:border-blue-900/40",
                                children: isDetectingSim ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-3.5 h-3.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                    lineNumber: 451,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            status === "available" && !isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                    size: 18,
                                    className: "text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            (status === "taken" || status === "invalid") && !isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 18,
                                    className: "text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PhoneInput.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneInput.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PhoneInput.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 pt-1 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-black shrink-0 shadow-2xs",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Auto SIM:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneInput.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleLaunchSimHint,
                        disabled: isDetectingSim,
                        className: "text-xs px-3 py-1 rounded-full font-bold bg-[#EFF6FF] dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400 border border-[#BFDBFE] dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDetectingSim ? "Reading..." : "Pick from SIM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PhoneInput.tsx",
                        lineNumber: 479,
                        columnNumber: 11
                    }, this),
                    detectedSims.filter((s)=>s.formatted).map((sim)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onChange(sim.formatted),
                            className: "text-xs px-2.5 py-1 rounded-lg font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 flex items-center gap-1 transition-all cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "SIM ",
                                    sim.slot,
                                    ": ",
                                    sim.formatted
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PhoneInput.tsx",
                                lineNumber: 496,
                                columnNumber: 15
                            }, this)
                        }, sim.slot, false, {
                            fileName: "[project]/src/components/PhoneInput.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PhoneInput.tsx",
                lineNumber: 471,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PhoneInput.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/e2ee/keyStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * keyStore.ts
 * Low-level IndexedDB persistence for E2EE keys using the `idb` library.
 * All data stored here is per-user (namespaced by userId).
 */ __turbopack_context__.s([
    "clearAllKeys",
    ()=>clearAllKeys,
    "deletePreKey",
    ()=>deletePreKey,
    "deleteSession",
    ()=>deleteSession,
    "getOrCreateUserMasterKey",
    ()=>getOrCreateUserMasterKey,
    "hasSession",
    ()=>hasSession,
    "loadDhKeyPair",
    ()=>loadDhKeyPair,
    "loadIdentityKeyPair",
    ()=>loadIdentityKeyPair,
    "loadPreKey",
    ()=>loadPreKey,
    "loadRegistrationId",
    ()=>loadRegistrationId,
    "loadRotationMetadata",
    ()=>loadRotationMetadata,
    "loadSession",
    ()=>loadSession,
    "loadSignedPreKey",
    ()=>loadSignedPreKey,
    "loadUserMasterKey",
    ()=>loadUserMasterKey,
    "saveDhKeyPair",
    ()=>saveDhKeyPair,
    "saveIdentityKeyPair",
    ()=>saveIdentityKeyPair,
    "savePreKey",
    ()=>savePreKey,
    "saveRegistrationId",
    ()=>saveRegistrationId,
    "saveRotationMetadata",
    ()=>saveRotationMetadata,
    "saveSession",
    ()=>saveSession,
    "saveSignedPreKey",
    ()=>saveSignedPreKey,
    "saveUserMasterKey",
    ()=>saveUserMasterKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
;
;
const DB_NAME = 'pingdart_e2ee_v2';
const DB_VERSION = 2; // Upgraded to v2 for random userMasterKey & rotationMetadata
const DEBUG_KEYSTORE = false; // Toggle to true for verbose keyStore debugging logs
function logDebug(...args) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
let db = null;
async function getDb() {
    if (db) return db;
    db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openDB"])(DB_NAME, DB_VERSION, {
        upgrade (database, oldVersion) {
            // Identity Key Pair: { pubKey: ArrayBuffer, privKey: ArrayBuffer }
            if (!database.objectStoreNames.contains('identityKeyPair')) {
                database.createObjectStore('identityKeyPair');
            }
            // Local registration ID (per Signal spec)
            if (!database.objectStoreNames.contains('registrationId')) {
                database.createObjectStore('registrationId');
            }
            // Pre-Keys: indexed by keyId (number)
            if (!database.objectStoreNames.contains('preKeys')) {
                database.createObjectStore('preKeys');
            }
            // Signed Pre-Keys
            if (!database.objectStoreNames.contains('signedPreKeys')) {
                database.createObjectStore('signedPreKeys');
            }
            // Sessions: keyed by address string (e.g. "userId.deviceId")
            if (!database.objectStoreNames.contains('sessions')) {
                database.createObjectStore('sessions');
            }
            // P-256 ECDH key pair for deterministic shared-key encryption (v2)
            if (!database.objectStoreNames.contains('dhKeyPair')) {
                database.createObjectStore('dhKeyPair');
            }
            // Cryptographically random 256-bit AES user master key (v2 migration)
            if (!database.objectStoreNames.contains('userMasterKey')) {
                database.createObjectStore('userMasterKey');
            }
            // Key rotation metadata (v2 migration)
            if (!database.objectStoreNames.contains('rotationMetadata')) {
                database.createObjectStore('rotationMetadata');
            }
        }
    });
    return db;
}
function getPrefix() {
    if ("TURBOPACK compile-time truthy", 1) return 'global:';
    //TURBOPACK unreachable
    ;
    let userId;
}
async function saveIdentityKeyPair(keyPair) {
    const d = await getDb();
    await d.put('identityKeyPair', keyPair, getPrefix() + 'keyPair');
}
async function loadIdentityKeyPair() {
    const d = await getDb();
    let key = await d.get('identityKeyPair', getPrefix() + 'keyPair');
    if (!key && getPrefix().startsWith('user:')) {
        const anonKey = await d.get('identityKeyPair', 'anonymous:keyPair');
        if (anonKey) {
            logDebug('[E2EE] Migrating anonymous identity key pair to user scope...');
            await d.put('identityKeyPair', anonKey, getPrefix() + 'keyPair');
            key = anonKey;
        }
    }
    return key;
}
async function saveRegistrationId(id) {
    const d = await getDb();
    await d.put('registrationId', id, getPrefix() + 'id');
}
async function loadRegistrationId() {
    const d = await getDb();
    return d.get('registrationId', getPrefix() + 'id');
}
async function savePreKey(keyId, keyPair) {
    const d = await getDb();
    await d.put('preKeys', keyPair, getPrefix() + keyId);
}
async function loadPreKey(keyId) {
    const d = await getDb();
    return d.get('preKeys', getPrefix() + keyId);
}
async function deletePreKey(keyId) {
    const d = await getDb();
    await d.delete('preKeys', getPrefix() + keyId);
}
async function saveSignedPreKey(keyId, keyPair) {
    const d = await getDb();
    await d.put('signedPreKeys', keyPair, getPrefix() + keyId);
}
async function loadSignedPreKey(keyId) {
    const d = await getDb();
    return d.get('signedPreKeys', getPrefix() + keyId);
}
async function saveSession(address, record) {
    const d = await getDb();
    await d.put('sessions', record, getPrefix() + address);
}
async function loadSession(address) {
    const d = await getDb();
    return d.get('sessions', getPrefix() + address);
}
async function deleteSession(address) {
    const d = await getDb();
    await d.delete('sessions', getPrefix() + address);
}
async function hasSession(address) {
    const d = await getDb();
    const val = await d.get('sessions', getPrefix() + address);
    return val !== undefined;
}
async function saveDhKeyPair(pair) {
    const d = await getDb();
    await d.put('dhKeyPair', pair, getPrefix() + 'dhKeyPair');
}
async function loadDhKeyPair() {
    const d = await getDb();
    let pair = await d.get('dhKeyPair', getPrefix() + 'dhKeyPair');
    if (!pair && getPrefix().startsWith('user:')) {
        const anonPair = await d.get('dhKeyPair', 'anonymous:dhKeyPair');
        if (anonPair) {
            logDebug('[E2EE] Migrating anonymous DH key pair to user scope...');
            await d.put('dhKeyPair', anonPair, getPrefix() + 'dhKeyPair');
            pair = anonPair;
        }
    }
    return pair;
}
async function saveUserMasterKey(rawKey) {
    const d = await getDb();
    await d.put('userMasterKey', rawKey, getPrefix() + 'masterKey');
}
async function loadUserMasterKey() {
    const d = await getDb();
    let raw = await d.get('userMasterKey', getPrefix() + 'masterKey');
    if (!raw && getPrefix().startsWith('user:')) {
        const anonRaw = await d.get('userMasterKey', 'anonymous:masterKey');
        if (anonRaw) {
            logDebug('[E2EE] Migrating anonymous master key to user scope...');
            await d.put('userMasterKey', anonRaw, getPrefix() + 'masterKey');
            raw = anonRaw;
        }
    }
    return raw;
}
async function getOrCreateUserMasterKey() {
    let raw = await loadUserMasterKey();
    if (!raw) {
        logDebug('[E2EE] Generating fresh 256-bit cryptographically random master key...');
        const bytes = window.crypto.getRandomValues(new Uint8Array(32));
        raw = bytes.buffer;
        await saveUserMasterKey(raw);
    }
    return window.crypto.subtle.importKey('raw', raw, {
        name: 'AES-GCM'
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function saveRotationMetadata(meta) {
    const d = await getDb();
    await d.put('rotationMetadata', meta, getPrefix() + 'metadata');
}
async function loadRotationMetadata() {
    const d = await getDb();
    return d.get('rotationMetadata', getPrefix() + 'metadata');
}
async function clearAllKeys() {
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const d = undefined;
    const prefix = undefined;
    const range = undefined;
    const tx = undefined;
}
}),
"[project]/src/lib/e2ee/signalStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * signalStore.ts
 * Implements the Signal Protocol StorageType interface, backed by IndexedDB
 * (via keyStore.ts). This is the bridge between @privacyresearch/libsignal-protocol-typescript
 * and our persistent storage layer.
 */ __turbopack_context__.s([
    "SignalProtocolStore",
    ()=>SignalProtocolStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/keyStore.ts [app-ssr] (ecmascript)");
;
class SignalProtocolStore {
    // ─────────────── Direction enum compatibility ─────────────────
    Direction = {
        SENDING: 1,
        RECEIVING: 2
    };
    // ─────────────── Identity Key ──────────────────────────────────
    async getIdentityKeyPair() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    }
    async getLocalRegistrationId() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
    }
    async saveIdentity(name, key) {
        // Normalize to user ID only (exclude device ID)
        const userId = name.split('.')[0];
        const existing = await this.loadIdentityKey(userId);
        if (existing) {
            // Check if key has changed
            const existingBytes = new Uint8Array(existing);
            const newBytes = new Uint8Array(key);
            if (existingBytes.length !== newBytes.length || existingBytes.some((b, i)=>b !== newBytes[i])) {
                // Key changed — update and signal replacement
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSession"](`identity:${userId}`, key);
                return true;
            }
            return false;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSession"](`identity:${userId}`, key);
        return false;
    }
    async isTrustedIdentity(name, key) {
        // Auto-trust new identity keys to support seamless key regeneration/updates
        return true;
    }
    async loadIdentityKey(identifier) {
        const userId = identifier.split('.')[0];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSession"](`identity:${userId}`);
    }
    // ─────────────── Pre-Keys ─────────────────────────────────────
    async loadPreKey(keyId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadPreKey"](Number(keyId));
    }
    async storePreKey(keyId, keyPair) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savePreKey"](Number(keyId), keyPair);
    }
    async removePreKey(keyId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deletePreKey"](Number(keyId));
    }
    // ─────────────── Signed Pre-Keys ──────────────────────────────
    async loadSignedPreKey(keyId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSignedPreKey"](Number(keyId));
    }
    async storeSignedPreKey(keyId, keyPair) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSignedPreKey"](Number(keyId), keyPair);
    }
    async removeSignedPreKey(keyId) {
    // We never delete signed pre-keys (they may be needed for ongoing sessions)
    }
    // ─────────────── Sessions ─────────────────────────────────────
    async loadSession(identifier) {
        const buf = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSession"](`session:${identifier}`);
        if (!buf) return undefined;
        // Convert buffer back to binary string
        let binaryStr = '';
        const bytes = new Uint8Array(buf);
        for(let i = 0; i < bytes.length; i++){
            binaryStr += String.fromCharCode(bytes[i]);
        }
        // Legacy support: if the string stored in IndexedDB is actually a base64 
        // string (e.g. from an older buggy version that used btoa), it will start 
        // with 'eyJ' (base64 for '{"'). We must decode it so libsignal can parse it.
        if (binaryStr.startsWith('eyJ')) {
            try {
                binaryStr = atob(binaryStr);
            } catch (e) {
                console.warn('Failed to decode legacy base64 session', e);
            }
        }
        return binaryStr;
    }
    async storeSession(identifier, record) {
        // record is a binary string, NOT base64
        const bytes = new Uint8Array(record.length);
        for(let i = 0; i < record.length; i++){
            bytes[i] = record.charCodeAt(i);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSession"](`session:${identifier}`, bytes.buffer);
    }
    async removeSession(identifier) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSession"](`session:${identifier}`);
    }
    async removeAllSessions(identifier) {
        // For now we just remove the specific device 1 session
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSession"](`session:${identifier}.1`);
    }
}
}),
"[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * e2eeService.ts
 * High-level E2EE service using the Signal Protocol.
 * ─ Generates and uploads keys on first login
 * ─ Establishes sessions via X3DH
 * ─ Encrypts outgoing messages
 * ─ Decrypts incoming messages
 *
 * Only 1:1 (direct) chats are encrypted.
 * Group chats remain plaintext (Sender Keys not implemented yet).
 */ __turbopack_context__.s([
    "E2EELinkRequiredError",
    ()=>E2EELinkRequiredError,
    "E2EERecoveryRequiredError",
    ()=>E2EERecoveryRequiredError,
    "buildSession",
    ()=>buildSession,
    "changeBackupPassword",
    ()=>changeBackupPassword,
    "clearDhSharedKeyCache",
    ()=>clearDhSharedKeyCache,
    "clearSessionWithUser",
    ()=>clearSessionWithUser,
    "decryptDeviceLinkPayload",
    ()=>decryptDeviceLinkPayload,
    "decryptMessage",
    ()=>decryptMessage,
    "encryptDeviceLinkPayload",
    ()=>encryptDeviceLinkPayload,
    "encryptMessage",
    ()=>encryptMessage,
    "ensureE2EEReady",
    ()=>ensureE2EEReady,
    "exportDeviceKeys",
    ()=>exportDeviceKeys,
    "generateAndSetRecoveryKey",
    ()=>generateAndSetRecoveryKey,
    "generateEphemeralKeys",
    ()=>generateEphemeralKeys,
    "getCachedPreview",
    ()=>getCachedPreview,
    "getSessionRebuildInfo",
    ()=>getSessionRebuildInfo,
    "hasSessionWith",
    ()=>hasSessionWith,
    "importDeviceKeys",
    ()=>importDeviceKeys,
    "initializeKeys",
    ()=>initializeKeys,
    "isE2EEInitialized",
    ()=>isE2EEInitialized,
    "isE2EEReady",
    ()=>isE2EEReady,
    "isEncryptedPayload",
    ()=>isEncryptedPayload,
    "markSessionForRebuild",
    ()=>markSessionForRebuild,
    "resetE2EEState",
    ()=>resetE2EEState,
    "setCachedPreview",
    ()=>setCachedPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$signalStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/signalStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/keyStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
async function getLibSignal() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error('[E2EE] libsignal cannot be loaded on server');
    }
    const target = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : typeof globalThis !== 'undefined' ? globalThis : {};
    if (target && !target.msrCrypto) {
        target.msrCrypto = {};
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return await __turbopack_context__.A("[project]/node_modules/@privacyresearch/libsignal-protocol-typescript/lib/index.js [app-ssr] (ecmascript, async loader)");
}
;
;
;
;
class E2EELinkRequiredError extends Error {
    constructor(){
        super('E2EE keys must be transferred from your primary device via QR code');
        this.name = 'E2EELinkRequiredError';
    }
}
class E2EERecoveryRequiredError extends Error {
    constructor(){
        super('Server key backup decryption failed or missing. Backup recovery password required.');
        this.name = 'E2EERecoveryRequiredError';
    }
}
const DEBUG_E2EE = false; // Toggle to true for verbose E2EE debugging logs
function logDebug(...args) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
// ── Helpers: ArrayBuffer <-> base64 ────────────────────────────
function ab2b64(buf) {
    return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
function isValidBase64(str) {
    if (!str || typeof str !== 'string') return false;
    try {
        // Base64 strings should only contain A-Z, a-z, 0-9, +, /, and = for padding
        if (!/^[A-Za-z0-9+/]*={0,2}$/.test(str)) return false;
        // Check if length is valid (multiple of 4)
        if (str.length % 4 !== 0) return false;
        // Try to decode
        atob(str);
        return true;
    } catch  {
        return false;
    }
}
function b642ab(b64) {
    if (!b64 || typeof b64 !== 'string') {
        throw new Error(`[E2EE] Invalid base64 string provided to b642ab: ${b64}`);
    }
    try {
        const binaryStr = atob(b64);
        const bytes = new Uint8Array(binaryStr.length);
        for(let i = 0; i < binaryStr.length; i++){
            bytes[i] = binaryStr.charCodeAt(i);
        }
        return bytes.buffer;
    } catch (e) {
        throw new Error(`[E2EE] Failed to decode base64 string: ${e.message}. Input was: ${b64.substring(0, 20)}...`);
    }
}
// ── Singleton store instance ─────────────────────────────────────
let storeInstance = null;
// Cache for derived ECDH shared keys — TTL-aware to handle peer key rotations
// Entries expire after 5 minutes so stale keys from peer key changes don't persist
const DH_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const dhSharedKeyCache = new Map();
function getStore() {
    if (!storeInstance) storeInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$signalStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignalProtocolStore"]();
    return storeInstance;
}
function resetE2EEState() {
    storeInstance = null;
    initPromise = null;
    initResolved = false;
    dhSharedKeyCache.clear();
    sessionNeedsRebuild.clear();
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } catch (_) {}
    logDebug('[E2EE] State reset — ready for next user session.');
}
// ── Constants ───────────────────────────────────────────────────
const DEVICE_ID = 1; // We only support single device per user
const SIGNED_PREKEY_ID = 1;
const NUM_ONE_TIME_PREKEYS = 100;
const PREKEY_LOW_WATERMARK = 20;
const sessionNeedsRebuild = new Map();
function markSessionForRebuild(userId, protocol = 'signal', reason = 'Decryption failure') {
    const info = {
        protocol,
        reason,
        timestamp: Date.now()
    };
    sessionNeedsRebuild.set(userId, info);
    console.warn(`[E2EE] Session with user ${userId} marked for rebuild on next send. Protocol: ${protocol}, Reason: ${reason}`);
}
function getSessionRebuildInfo(userId) {
    return sessionNeedsRebuild.get(userId);
}
// ── API helpers (lazy-loaded to avoid circular imports) ──────────
async function getChatApi() {
    const mod = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
    return mod.chatApi;
}
// ── Key Backup (Escrow) Utilities ────────────────────────────────
async function deriveMasterKey(password, salt = 'pingdart_e2ee_salt', iterations = 100000) {
    const encoder = new TextEncoder();
    let saltBuffer;
    if (typeof salt === 'string') {
        saltBuffer = encoder.encode(salt);
    } else {
        saltBuffer = salt;
    }
    const keyMaterial = await window.crypto.subtle.importKey('raw', encoder.encode(password), {
        name: 'PBKDF2'
    }, false, [
        'deriveBits',
        'deriveKey'
    ]);
    return window.crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: saltBuffer,
        iterations: iterations,
        hash: 'SHA-256'
    }, keyMaterial, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function encryptBackup(password, privateKeys) {
    const salt = window.crypto.getRandomValues(new Uint8Array(32));
    const masterKey = await deriveMasterKey(password, salt, 600000);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const data = new TextEncoder().encode(JSON.stringify(privateKeys));
    const ciphertext = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, masterKey, data);
    return JSON.stringify({
        version: 2,
        algorithm: 'AES-256-GCM',
        backupType: 'primary',
        identityVersion: 1,
        dhVersion: 1,
        masterKeyVersion: 1,
        createdAt: Date.now(),
        salt: ab2b64(salt.buffer),
        iv: ab2b64(iv.buffer),
        ciphertext: ab2b64(ciphertext)
    });
}
async function decryptBackup(password, encryptedBackupStr) {
    try {
        const backup = JSON.parse(encryptedBackupStr);
        let masterKey;
        let encryptedData;
        if (backup.version === 2 || backup.version === 1) {
            const saltBuffer = b642ab(backup.salt);
            masterKey = await deriveMasterKey(password, new Uint8Array(saltBuffer), 600000);
            encryptedData = b642ab(backup.ciphertext);
        } else {
            // Legacy V0 backup
            masterKey = await deriveMasterKey(password, 'pingdart_e2ee_salt', 100000);
            encryptedData = b642ab(backup.data);
        }
        const decrypted = await window.crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv: b642ab(backup.iv)
        }, masterKey, encryptedData);
        const restored = JSON.parse(new TextDecoder().decode(decrypted));
        // Clear stale in-memory caches on backup restoration
        dhSharedKeyCache.clear();
        sessionNeedsRebuild.clear();
        return restored;
    } catch (err) {
        //console.warn('[E2EE] Backup decryption failed:', err);
        return null;
    }
}
async function changeBackupPassword(oldPassword, newPassword) {
    const api = await getChatApi();
    const res = await api.checkMyKeyBundle();
    if (res.exists && res.data?.encryptedBackup) {
        const privateKeys = await decryptBackup(oldPassword, res.data.encryptedBackup);
        if (!privateKeys) {
            throw new Error("Failed to decrypt current backup with old password");
        }
        const newEncryptedBackup = await encryptBackup(newPassword, privateKeys);
        await api.updateBackup(newEncryptedBackup);
        return true;
    }
    return false;
}
async function generateAndSetRecoveryKey(currentPassword) {
    const rawKey = window.crypto.getRandomValues(new Uint8Array(32));
    const recoveryKeyHex = Array.from(rawKey).map((b)=>b.toString(16).padStart(2, '0')).join('');
    const success = await changeBackupPassword(currentPassword, recoveryKeyHex);
    if (!success) {
        throw new Error("Failed to set recovery key");
    }
    return recoveryKeyHex;
}
/**
 * Check remaining local and server one-time prekeys and auto-replenish to server if count drops below low-watermark.
 */ async function replenishPrekeysIfNeeded(serverOtkCount) {
    try {
        const store = getStore();
        const { KeyHelper, setWebCrypto } = await getLibSignal();
        setWebCrypto(window.crypto);
        let count = 0;
        for(let i = 1; i <= NUM_ONE_TIME_PREKEYS; i++){
            const pk = await store.loadPreKey(i);
            if (pk) count++;
        }
        const effectiveCount = serverOtkCount !== undefined ? Math.min(count, serverOtkCount) : count;
        if (effectiveCount < PREKEY_LOW_WATERMARK) {
            console.log(`[E2EE] Prekey count low (local: ${count}, server: ${serverOtkCount ?? 'N/A'}, threshold: ${PREKEY_LOW_WATERMARK}). Auto-replenishing to ${NUM_ONE_TIME_PREKEYS}...`);
            const oneTimePreKeys = await Promise.all(Array.from({
                length: NUM_ONE_TIME_PREKEYS
            }, (_, i)=>KeyHelper.generatePreKey(i + 1)));
            for (const otp of oneTimePreKeys){
                await store.storePreKey(otp.keyId, otp.keyPair);
            }
            const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            if (identityKeyPair) {
                const signedPreKey = await KeyHelper.generateSignedPreKey(identityKeyPair, SIGNED_PREKEY_ID);
                await store.storeSignedPreKey(SIGNED_PREKEY_ID, signedPreKey.keyPair);
                const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
                const api = await getChatApi();
                await api.uploadKeyBundle({
                    identityKey: ab2b64(identityKeyPair.pubKey),
                    signedPreKeyId: SIGNED_PREKEY_ID,
                    signedPreKey: ab2b64(signedPreKey.keyPair.pubKey),
                    signedPreKeySignature: ab2b64(signedPreKey.signature),
                    oneTimePreKeys: oneTimePreKeys.map((otp)=>({
                            keyId: otp.keyId,
                            publicKey: ab2b64(otp.keyPair.pubKey)
                        })),
                    dhPublicKey: dhKeyPair ? JSON.stringify(dhKeyPair.pubJwk) : undefined
                });
            //console.log('[E2EE] Prekey pool replenished and uploaded ✓');
            }
        }
    } catch (e) {
    //console.warn('[E2EE] Failed to check/replenish prekeys:', e);
    }
}
// ── Key Generation & Upload ──────────────────────────────────────
/**
 * Generate a full Signal Protocol key bundle and upload public keys to the server.
 * Private keys are saved to IndexedDB only — the server never sees them.
 */ async function generateAndUploadKeys() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const KeyHelper = undefined, setWebCrypto = undefined;
    const store = undefined;
    // 1. Generate identity key pair
    const identityKeyPair = undefined;
    // 2. Registration ID
    const registrationId = undefined;
    // 3. Signed Pre-Key
    const signedPreKey = undefined;
    // 4. One-time Pre-Keys (batch of 10)
    const oneTimePreKeys = undefined;
    const otp = undefined;
    // 5. Generate P-256 ECDH key pair for deterministic shared-key encryption (v2)
    const dhKeyPair = undefined;
    const dhPrivRaw = undefined;
    const dhPubJwk = undefined;
    // 6. Get or generate random user master key
    const userMasterKeyObj = undefined;
    const rawMasterKey = undefined;
    // 7. Encrypt private keys for backup if password is available
    let encryptedBackup;
    const transientPassword = undefined;
    // 7. Upload public key bundle to server (includes P-256 ECDH and backup)
    const api = undefined;
}
/**
 * Re-uploads the existing local identity/DH keys to the server without
 * generating new key material. Use when the server bundle is missing but
 * the device already has a valid identity (e.g. after a server DB reset).
 */ async function reUploadExistingKeys() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const KeyHelper = undefined, setWebCrypto = undefined;
    const identityKeyPair = undefined;
    const store = undefined;
    const registrationId = undefined;
    // Re-generate signed prekey (must be signed with current identity)
    const signedPreKey = undefined;
    // Re-generate one-time prekeys
    const oneTimePreKeys = undefined;
    const otp = undefined;
    // Reuse existing DH key pair if present, otherwise generate a new one
    let dhKeyPair;
    // Rebuild backup if password is available
    let encryptedBackup;
    const transientPassword = undefined;
    const rawMasterKeyForBackup = undefined;
    const api = undefined;
}
let initPromise = null;
let initResolved = false;
function isE2EEInitialized() {
    return initResolved;
}
/**
 * Wait until the auth store has a valid user ID.
 * On page reload, Zustand needs a tick to rehydrate from localStorage.
 * Without this, getPrefix() returns 'anonymous:' and keys are not found.
 */ async function waitForAuthUser(timeoutMs = 3000) {
    const start = Date.now();
    while(!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id){
        if (Date.now() - start > timeoutMs) {
            //console.warn('[E2EE] Timed out waiting for auth user — proceeding with anonymous prefix.');
            return;
        }
        await new Promise((r)=>setTimeout(r, 50));
    }
}
async function initializeKeys() {
    if ("TURBOPACK compile-time truthy", 1) {
        //console.log('[E2EE INIT] SSR mode - skipping');
        return;
    }
    //TURBOPACK unreachable
    ;
}
async function ensureE2EEReady() {
    if ("TURBOPACK compile-time truthy", 1) {
        //console.error('[E2EE INIT] SSR environment detected - returning false');
        return false;
    }
    //TURBOPACK unreachable
    ;
}
async function buildSession(recipientUserId) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const SignalProtocolAddress = undefined, SessionBuilder = undefined, setWebCrypto = undefined;
    const store = undefined;
    const api = undefined;
    // Fetch the recipient's public key bundle
    const res = undefined;
    const bundle = undefined;
    // Construct the PreKeyBundle in the format the Signal library expects
    const preKeyBundle = undefined;
    const address = undefined;
    const sessionBuilder = undefined;
}
async function hasSessionWith(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasSession"](`session:${userId}.${DEVICE_ID}`);
}
async function encryptMessage(recipientUserId, plaintext) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
// ── ECDH-based encryption (type: 5) ─────────────────────────────
// Deterministic shared key: ECDH(our_priv, their_pub) → AES-GCM
// No session state — both sides independently derive the same key.
// Eliminates the simultaneous-send session desync bug.
async function _getDhSharedKey(theirUserId, forceRefresh = false) {
    const cached = dhSharedKeyCache.get(theirUserId);
    // Use cache only if not forced, not expired, and promise exists
    if (!forceRefresh && cached && Date.now() - cached.ts < DH_CACHE_TTL_MS) {
        logDebug('[E2EE DH] Using cached shared key for user:', theirUserId);
        return cached.promise;
    }
    if (forceRefresh) {
        logDebug('[E2EE DH] Cache refresh forced for user:', theirUserId);
    }
    const promise = (async ()=>{
        logDebug('[E2EE DH] Computing shared key for user:', theirUserId);
        // Load our P-256 private key (auto-generate if missing)
        let ourDhPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
        if (!ourDhPair || !ourDhPair.privJwk) {
            console.warn('[E2EE DH] No local P-256 key pair found — auto-generating fresh local DH key pair...');
            const rawDhPair = await window.crypto.subtle.generateKey({
                name: 'ECDH',
                namedCurve: 'P-256'
            }, true, [
                'deriveKey',
                'deriveBits'
            ]);
            const dhPrivJwk = await window.crypto.subtle.exportKey('jwk', rawDhPair.privateKey);
            const dhPubJwk = await window.crypto.subtle.exportKey('jwk', rawDhPair.publicKey);
            ourDhPair = {
                privJwk: dhPrivJwk,
                pubJwk: dhPubJwk
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDhKeyPair"](ourDhPair);
            // Re-upload key bundle (including identity and signed prekeys) to server
            await reUploadExistingKeys().catch(()=>{});
        }
        logDebug('[E2EE DH] Local DH key pair loaded');
        const ourPrivKey = await window.crypto.subtle.importKey('jwk', ourDhPair.privJwk, {
            name: 'ECDH',
            namedCurve: 'P-256'
        }, false, [
            'deriveBits'
        ]);
        logDebug('[E2EE DH] Local DH private key imported');
        // Fetch their P-256 public key from server
        const api = await getChatApi();
        logDebug('[E2EE DH] Fetching P-256 public key for user', theirUserId, 'from server...');
        let res = await api.fetchDhPublicKey(theirUserId);
        if (!res || !res.success || !res.data?.dhPublicKey) {
            console.warn(`[E2EE DH] fetchDhPublicKey missing for user ${theirUserId}, trying full key bundle...`);
            const bundleRes = await api.fetchKeyBundle(theirUserId);
            if (bundleRes?.success && bundleRes.data?.dhPublicKey) {
                res = {
                    success: true,
                    data: {
                        userId: theirUserId,
                        dhPublicKey: bundleRes.data.dhPublicKey
                    }
                };
            } else {
                throw new Error(`[E2EE DH] CRITICAL: No P-256 DH key available on server for user ${theirUserId}`);
            }
        }
        logDebug('[E2EE DH] Server returned public key for user:', theirUserId);
        const theirPubJwk = typeof res.data.dhPublicKey === 'string' ? JSON.parse(res.data.dhPublicKey) : res.data.dhPublicKey;
        const theirPubKey = await window.crypto.subtle.importKey('jwk', theirPubJwk, {
            name: 'ECDH',
            namedCurve: 'P-256'
        }, false, []);
        logDebug('[E2EE DH] Remote DH public key imported');
        // ECDH → 256-bit shared secret → AES-GCM key
        logDebug('[E2EE DH] Performing ECDH key derivation...');
        const sharedBits = await window.crypto.subtle.deriveBits({
            name: 'ECDH',
            public: theirPubKey
        }, ourPrivKey, 256);
        logDebug('[E2EE DH] ECDH shared secret derived, importing as AES-GCM key...');
        const aesKey = await window.crypto.subtle.importKey('raw', sharedBits, {
            name: 'AES-GCM'
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        logDebug('[E2EE DH] ✅ Shared AES-GCM key ready for user:', theirUserId);
        return aesKey;
        //TURBOPACK unreachable
        ;
    })();
    dhSharedKeyCache.set(theirUserId, {
        promise,
        ts: Date.now()
    });
    return promise.catch((err)=>{
        console.error('[E2EE DH] Shared key derivation failed:', {
            theirUserId,
            errorName: err?.name,
            errorMessage: err?.message
        });
        dhSharedKeyCache.delete(theirUserId);
        throw err;
    });
}
async function getUserMasterAesKey(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUserMasterKey"]();
}
/**
 * Fallback master key derivation for legacy messages encrypted with deterministic keys.
 */ async function getLegacyUserMasterAesKey(userId, email) {
    const authState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
    const userEmail = email || authState.user?.email || '';
    const seed = `pingdart_master_e2ee_key_v2_${userId}_${userEmail}`;
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey('raw', encoder.encode(seed), {
        name: 'PBKDF2'
    }, false, [
        'deriveBits',
        'deriveKey'
    ]);
    const salt = encoder.encode(`pingdart_e2ee_salt_${userId}`);
    return window.crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256'
    }, keyMaterial, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
/**
 * Derives a per-message AES-256-GCM key from the static ECDH shared key using HKDF-SHA256
 * and a 32-byte per-message random salt.
 */ async function deriveMessageKeyViaHkdf(dhSharedKey, saltBytes) {
    const rawBits = await window.crypto.subtle.exportKey('raw', dhSharedKey);
    const hkdfKeyMaterial = await window.crypto.subtle.importKey('raw', rawBits, {
        name: 'HKDF'
    }, false, [
        'deriveKey'
    ]);
    return window.crypto.subtle.deriveKey({
        name: 'HKDF',
        hash: 'SHA-256',
        salt: saltBytes,
        info: new TextEncoder().encode('pingdart_e2ee_v1_msg_key')
    }, hkdfKeyMaterial, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function _getSenderAesKey(privKey) {
    let keyBytes = new Uint8Array(privKey);
    if (keyBytes.length === 33) {
        keyBytes = keyBytes.subarray(1);
    } else if (keyBytes.length > 32) {
        keyBytes = keyBytes.subarray(0, 32);
    }
    return window.crypto.subtle.importKey('raw', keyBytes, {
        name: 'AES-GCM'
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function _encryptEcdh(recipientUserId, plaintext) {
    const { setWebCrypto } = await getLibSignal();
    setWebCrypto(window.crypto);
    const sharedKey = await _getDhSharedKey(recipientUserId);
    const plaintextBytes = new TextEncoder().encode(plaintext);
    // Generate 32-byte per-message HKDF salt for forward secrecy
    const saltBytes = window.crypto.getRandomValues(new Uint8Array(32));
    const messageKey = await deriveMessageKeyViaHkdf(sharedKey, saltBytes);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, messageKey, plaintextBytes);
    // Encrypt a copy for sender self-read (using random user master key)
    let senderIv;
    let senderBody;
    try {
        const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
        if (currentUserId) {
            const masterKey = await getUserMasterAesKey(currentUserId);
            const sIv = window.crypto.getRandomValues(new Uint8Array(12));
            const sCiphertext = await window.crypto.subtle.encrypt({
                name: 'AES-GCM',
                iv: sIv
            }, masterKey, plaintextBytes);
            senderIv = ab2b64(sIv.buffer);
            senderBody = ab2b64(sCiphertext);
        } else {
            const ourIdentity = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            if (ourIdentity && ourIdentity.privKey) {
                const senderKey = await _getSenderAesKey(ourIdentity.privKey);
                const sIv = window.crypto.getRandomValues(new Uint8Array(12));
                const sCiphertext = await window.crypto.subtle.encrypt({
                    name: 'AES-GCM',
                    iv: sIv
                }, senderKey, plaintextBytes);
                senderIv = ab2b64(sIv.buffer);
                senderBody = ab2b64(sCiphertext);
            }
        }
    } catch (e) {
    //console.warn('[E2EE] senderBody encryption failed:', e);
    }
    return JSON.stringify({
        __e2ee: true,
        version: 1,
        algorithm: 'ECDH-HKDF-AES256-GCM',
        type: 5,
        messageKeyVersion: 1,
        senderKeyVersion: 1,
        createdAt: Date.now(),
        salt: ab2b64(saltBytes.buffer),
        iv: ab2b64(iv.buffer),
        body: ab2b64(ciphertext),
        recipientUserId,
        senderIv,
        senderBody
    });
}
async function _encryptOnce(recipientUserId, plaintext, isRetry) {
    try {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const SignalProtocolAddress = undefined, SessionCipher = undefined, setWebCrypto = undefined;
        const store = undefined;
        const address = undefined;
        const cipher = undefined;
        const plaintextBytes = undefined;
        const encrypted = undefined;
        // Encrypt a copy for the sender using the sender's own identity private key (AES-GCM)
        let senderIv;
        let senderBody;
    } catch (err) {
        if (!isRetry) {
            // Auto-heal: wipe session, rebuild, and retry once — exactly like WhatsApp.
            //console.warn('[E2EE] Encryption failed, auto-rebuilding session and retrying...');
            try {
                const store = getStore();
                await store.removeAllSessions(String(recipientUserId));
                const rebuilt = await buildSession(recipientUserId);
                if (!rebuilt) {
                    throw new Error(`[E2EE] Cannot rebuild session for user ${recipientUserId}`);
                }
            } catch (rebuildErr) {
                console.warn(`[E2EE] Session rebuild failed during auto-heal: ${rebuildErr.message}`);
                return null;
            }
            return _encryptOnce(recipientUserId, plaintext, true);
        }
        console.warn(`[E2EE] Encryption failed after retry: ${err.message}`);
        return null;
    }
}
function clearDhSharedKeyCache() {
    dhSharedKeyCache.clear();
    console.log('[E2EE] Shared key cache cleared.');
}
async function isE2EEReady() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
async function decryptMessage(senderUserId, encryptedPayload, clearSessionOnFail = false, roomId, messageId) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    // 1. Race condition guard: Ensure E2EE key initialization completes before decrypting
    const isReady = undefined;
    let payload;
    const payloadVersion = undefined;
}
function isEncryptedPayload(text) {
    if (!text || !text.startsWith('{')) return false;
    try {
        const obj = JSON.parse(text);
        return obj.__e2ee === true;
    } catch  {
        return false;
    }
}
async function clearSessionWithUser(userId) {
    try {
        const store = getStore();
        await store.removeAllSessions(String(userId));
    //console.warn('[E2EE] Cleared session with user', userId);
    } catch (err) {
    //console.error('[E2EE] Failed to clear session with user', userId, 'error:', err);
    }
}
// ── Decrypted Preview Cache ──────────────────────────────────────
// Signal messages can only be decrypted ONCE (ratchet advances).
// We cache the last decrypted plaintext per room so the chat list
// can show the actual message text without re-decrypting.
const _previewCache = new Map();
function setCachedPreview(roomId, text, msgId) {
    _previewCache.set(Number(roomId), {
        text,
        msgId
    });
}
function getCachedPreview(roomId, msgId) {
    const cached = _previewCache.get(Number(roomId));
    if (!cached) return undefined;
    if (msgId !== undefined && String(cached.msgId) !== String(msgId)) {
        return undefined; // Cache miss: the cached preview is for a different/older message
    }
    return cached.text;
}
async function generateEphemeralKeys() {
    const keyPair = await window.crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256'
    }, true, [
        'deriveKey',
        'deriveBits'
    ]);
    const publicKeyRaw = await window.crypto.subtle.exportKey('raw', keyPair.publicKey);
    const publicKeyArray = new Uint8Array(publicKeyRaw);
    const publicKeyBase64 = btoa(String.fromCharCode(...publicKeyArray));
    return {
        keyPair,
        publicKeyBase64
    };
}
/**
 * Derives a shared AES-GCM key from our private ECDH key and their public ECDH key.
 */ async function deriveSharedSecret(privateKey, publicKeyBase64) {
    const binaryString = atob(publicKeyBase64);
    const publicKeyRaw = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++){
        publicKeyRaw[i] = binaryString.charCodeAt(i);
    }
    const importedPublicKey = await window.crypto.subtle.importKey('raw', publicKeyRaw, {
        name: 'ECDH',
        namedCurve: 'P-256'
    }, true, []);
    return window.crypto.subtle.deriveKey({
        name: 'ECDH',
        public: importedPublicKey
    }, privateKey, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function encryptDeviceLinkPayload(theirPublicKeyBase64, authToken, refreshToken, localE2EKeys// Registration object
) {
    // Generate our own ephemeral keys
    const { keyPair, publicKeyBase64 } = await generateEphemeralKeys();
    const sharedKey = await deriveSharedSecret(keyPair.privateKey, theirPublicKeyBase64);
    const payloadObj = {
        authToken,
        refreshToken,
        e2eKeys: localE2EKeys,
        issuedAt: Date.now(),
        expiresAt: Date.now() + 5 * 60 * 1000
    };
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encodedPayload = new TextEncoder().encode(JSON.stringify(payloadObj));
    const encrypted = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, sharedKey, encodedPayload);
    const ivBase64 = btoa(String.fromCharCode(...iv));
    const encryptedArray = new Uint8Array(encrypted);
    const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray));
    return {
        payload: `${ivBase64}:${encryptedBase64}`,
        senderPublicKeyBase64: publicKeyBase64
    };
}
async function decryptDeviceLinkPayload(ourPrivateKey, theirPublicKeyBase64, encryptedPayload) {
    const sharedKey = await deriveSharedSecret(ourPrivateKey, theirPublicKeyBase64);
    const [ivBase64, dataBase64] = encryptedPayload.split(':');
    const ivBinary = atob(ivBase64);
    const iv = new Uint8Array(ivBinary.length);
    for(let i = 0; i < ivBinary.length; i++){
        iv[i] = ivBinary.charCodeAt(i);
    }
    const dataBinary = atob(dataBase64);
    const encryptedData = new Uint8Array(dataBinary.length);
    for(let i = 0; i < dataBinary.length; i++){
        encryptedData[i] = dataBinary.charCodeAt(i);
    }
    const decrypted = await window.crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, sharedKey, encryptedData);
    const decoded = new TextDecoder().decode(decrypted);
    const payloadObj = JSON.parse(decoded);
    if (payloadObj.expiresAt && Date.now() > payloadObj.expiresAt) {
        throw new Error('QR session expired. Please scan the QR code again.');
    }
    return payloadObj;
}
async function exportDeviceKeys() {
    await ensureE2EEReady().catch(()=>{});
    const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    const registrationId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
    const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
    const rawMasterKey = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadUserMasterKey"]();
    if (!identityKeyPair || !registrationId || !dhKeyPair) {
        return null;
    }
    return {
        version: 2,
        identityKeyPair: {
            pubKey: ab2b64(identityKeyPair.pubKey),
            privKey: ab2b64(identityKeyPair.privKey)
        },
        registrationId,
        dhKeyPair: {
            privJwk: dhKeyPair.privJwk,
            pubJwk: dhKeyPair.pubJwk
        },
        masterKey: rawMasterKey ? ab2b64(rawMasterKey) : undefined
    };
}
async function importDeviceKeys(restoredKeys) {
    if (restoredKeys) {
        console.log('[E2EE LINK] Importing device keys, version:', restoredKeys.version || 0);
        if (restoredKeys.identityKeyPair) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveIdentityKeyPair"]({
                pubKey: b642ab(restoredKeys.identityKeyPair.pubKey),
                privKey: b642ab(restoredKeys.identityKeyPair.privKey)
            });
        }
        if (restoredKeys.registrationId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRegistrationId"](restoredKeys.registrationId);
        }
        if (restoredKeys.dhKeyPair) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDhKeyPair"](restoredKeys.dhKeyPair);
        }
        if (restoredKeys.masterKey) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserMasterKey"](b642ab(restoredKeys.masterKey));
        }
        dhSharedKeyCache.clear();
        sessionNeedsRebuild.clear();
        console.log('[E2EE LINK] ✅ Device keys successfully imported from primary device.');
    }
}
}),
"[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPERADMIN_WEB_ONLY_MESSAGE",
    ()=>SUPERADMIN_WEB_ONLY_MESSAGE,
    "clearSessionTokens",
    ()=>clearSessionTokens,
    "getClientDeviceInfo",
    ()=>getClientDeviceInfo,
    "isSuperadminWebOnly",
    ()=>isSuperadminWebOnly,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const SUPERADMIN_WEB_ONLY_MESSAGE = 'Superadmin accounts can only log in on the web. Please log in using a web browser.';
function isSuperadminWebOnly(user) {
    if ((user?.role || '').toLowerCase() !== 'superadmin') return false;
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatform"])();
    return platform.isNative || platform.isElectron;
}
let isFetchingLiveUser = false;
let hasFetchedLiveUser = false;
/**
 * Safely extracts error messages from API calls or native exceptions.
 */ function extractErrorMessage(err, fallbackMessage) {
    if (err && typeof err === 'object') {
        const axiosErr = err;
        const apiMsg = axiosErr.response?.data?.message || axiosErr.response?.data?.error;
        if (apiMsg) return apiMsg;
        if ('message' in err && typeof err.message === 'string') {
            return err.message;
        }
    }
    return fallbackMessage;
}
/**
 * Determines client-side route target based on role.
 */ function getRoleRedirectTarget(user) {
    const role = user?.role?.toLowerCase() || '';
    if ([
        'superadmin'
    ].includes(role)) return '/admin';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const host = ("TURBOPACK compile-time truthy", 1) ? '' : "TURBOPACK unreachable";
    if (host === 'ai.localhost' || host.startsWith('ai.')) return '/ai';
    if (host === 'chat.localhost' || host.startsWith('chat.')) return '/chat';
    return '/user';
}
function getClientDeviceInfo() {
    const isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    let deviceId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const platform = isNative ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() || 'mobile' : ua.includes('Win') ? 'windows' : ua.includes('Mac') ? 'macos' : ua.includes('Linux') ? 'linux' : 'web';
    const deviceType = isNative ? 'mobile' : 'web';
    return {
        deviceId: deviceId || (isNative ? 'mobile_device' : 'web_device'),
        platform,
        deviceType
    };
}
/**
 * Safe localStorage setter with automatic quota exhaustion recovery.
 */ function safeSetLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (err) {
        console.warn(`[safeStorage] Quota warning for "${key}". Purging bloated caches and retrying...`, err?.message);
        try {
            localStorage.removeItem('pingdart_site_settings');
            Object.keys(localStorage).forEach((k)=>{
                if (k.startsWith('prefetch_') || k.includes('cache') || k.includes('draft') || k.startsWith('temp_') || k.startsWith('face_') || k.includes('blob') || k.startsWith('media_')) {
                    localStorage.removeItem(k);
                }
            });
            localStorage.setItem(key, value);
        } catch (retryErr) {
            console.error(`[safeStorage] Critical: could not save "${key}" even after cache cleanup:`, retryErr);
        }
    }
}
/**
 * Synchronously stores session tokens & user info in localStorage & Capacitor Preferences.
 */ function persistSessionTokens(user, accessToken, refreshToken, deviceMailToken, transientPassword, deviceId) {
    localStorage.removeItem('pingdart-auth');
    hasFetchedLiveUser = false;
    isFetchingLiveUser = false;
    safeSetLocalStorage('access_token', accessToken);
    safeSetLocalStorage('refresh_token', refreshToken);
    safeSetLocalStorage('hasSeenIntro', 'true');
    if (deviceMailToken) {
        safeSetLocalStorage('device_mail_token', deviceMailToken);
    }
    if (deviceId) {
        safeSetLocalStorage('pingdart_device_id', deviceId);
    }
    const userForStorage = {
        ...user
    };
    delete userForStorage.avatar;
    delete userForStorage.banner;
    delete userForStorage.faceVector;
    delete userForStorage.face_vector;
    safeSetLocalStorage('user', JSON.stringify(userForStorage));
    // Reset the in-memory Zustand state ONLY (not localStorage, which we just set above)
    // to eliminate any stale role from a previous admin session before writing the new session.
    // This prevents the login page auto-redirect from briefly seeing the old admin role.
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].setState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        transientPassword: undefined,
        deviceMailToken: null
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setAuth(user, accessToken, refreshToken, transientPassword, deviceMailToken || undefined);
    try {
        Object.keys(localStorage).forEach((key)=>{
            if (key.startsWith('prefetch_chat_rooms_') && !key.endsWith(`_${user.id}`)) {
                localStorage.removeItem(key);
            }
        });
    } catch (_) {}
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('hasSeenIntro', 'true').catch(()=>{});
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('access_token', accessToken).catch((e)=>console.error('[Capacitor] Token save error:', e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('refresh_token', refreshToken).catch((e)=>console.error('[Capacitor] Refresh token save error:', e));
        try {
            const { getApiV1Url } = __turbopack_context__.r("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('api_base_url', getApiV1Url()).catch(()=>{});
        } catch (_) {}
        if (deviceMailToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('device_mail_token', deviceMailToken).catch((e)=>console.error('[Capacitor] Mail token save error:', e));
        }
        if (deviceId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('pingdart_device_id', deviceId).catch(()=>{});
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('user', JSON.stringify(userForStorage)).catch((e)=>console.error('[Capacitor] User save error:', e));
    }
}
function clearSessionTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('python_access_token');
    localStorage.removeItem('python_tenant_id');
    localStorage.removeItem('user');
    localStorage.removeItem('device_mail_token');
    localStorage.removeItem('pingdart-auth');
    localStorage.removeItem('pingdart_device_id');
    try {
        Object.keys(localStorage).forEach((key)=>{
            if (key.startsWith('prefetch_chat_rooms')) {
                localStorage.removeItem(key);
            }
        });
    } catch (_) {}
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
    hasFetchedLiveUser = false;
    isFetchingLiveUser = false;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('access_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('refresh_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('user').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('device_mail_token').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('pingdart-auth').catch((e)=>console.error(e));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].removeItem('pingdart_device_id').catch((e)=>console.error(e));
    }
}
/**
 * Non-blocking initialization of post-login background services (E2EE keys, FCM Push Token & Linked Device Sync).
 */ function initBackgroundAuthTasks() {
    const { deviceId, platform, deviceType } = getClientDeviceInfo();
    if (deviceId) {
        __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
            chatApi.deviceLinking.registerDevice(deviceId, platform, deviceType).catch(()=>{});
        }).catch(()=>{});
    }
    __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)").then(({ initializeKeys })=>{
        initializeKeys().catch((err)=>console.warn('[E2EE] Key init failed (non-fatal):', err));
    }).catch((err)=>console.warn('[E2EE] Failed to load e2eeService chunk during login:', err));
    __turbopack_context__.A("[project]/src/notifications/index.ts [app-ssr] (ecmascript, async loader)").then(({ registerDeviceFcmToken })=>{
        registerDeviceFcmToken().catch((err)=>console.warn('[FCM] Token register failed:', err));
    }).catch((err)=>console.warn('[FCM] Failed to load firebaseTokenService:', err));
}
/**
 * Non-blocking cleanup of background services on logout.
 */ function cleanupBackgroundAuthTasks() {
    __turbopack_context__.A("[project]/src/notifications/index.ts [app-ssr] (ecmascript, async loader)").then(({ unregisterDeviceFcmToken })=>{
        unregisterDeviceFcmToken().catch((err)=>console.warn('[FCM] Token unregister failed:', err));
    }).catch((err)=>console.warn('[FCM] Failed to load firebaseTokenService:', err));
    __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)").then(({ resetE2EEState })=>{
        resetE2EEState();
    }).catch((err)=>console.warn('[E2EE] Failed to load e2eeService chunk during logout:', err));
}
function useAuth() {
    const storeUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.user);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // 1. LOGIN
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password, options)=>{
        setIsLoading(true);
        setError(null);
        try {
            clearSessionTokens();
            const isBypassMode = process.env.NEXT_PUBLIC_BYPASS_LOGIN === 'true';
            let user;
            let access_token;
            let refresh_token;
            let deviceMailToken = null;
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            if (isBypassMode) {
                user = {
                    id: 999,
                    email: email || 'dev@pingdart.local',
                    username: 'dev_user',
                    role: options?.requireAdmin ? 'superadmin' : 'user',
                    tenant_id: 1,
                    domain_id: 1,
                    full_name: 'Developer Bypass'
                };
                access_token = 'dummy_access_token';
                refresh_token = 'dummy_refresh_token';
                await new Promise((resolve)=>setTimeout(resolve, 500));
            } else {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/login', {
                    email,
                    password,
                    deviceId,
                    platform,
                    deviceType,
                    requireSuperAdmin: options?.requireAdmin || false
                });
                if (response.data.requiresTwoStep) {
                    return {
                        requiresTwoStep: true,
                        twoStepMethod: response.data.twoStepMethod || 'pin',
                        target: response.data.target,
                        credential: response.data.credential,
                        userId: response.data.userId
                    };
                }
                user = response.data.user;
                access_token = response.data.accessToken;
                refresh_token = response.data.refreshToken;
                deviceMailToken = response.data.deviceMailToken || null;
                if (response.data.deviceId) {
                    localStorage.setItem('pingdart_device_id', response.data.deviceId);
                }
            }
            if (options?.requireAdmin) {
                const isSuperAdmin = (user.role || '').toLowerCase() === 'superadmin';
                if (!isSuperAdmin) {
                    throw new Error('Access denied. Super Admin privileges required.');
                }
            }
            if (isSuperadminWebOnly(user)) {
                throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
            }
            const finalDeviceId = localStorage.getItem('pingdart_device_id') || deviceId;
            persistSessionTokens(user, access_token, refresh_token, deviceMailToken, password, finalDeviceId);
            initBackgroundAuthTasks();
            return {
                success: true,
                user,
                role: user?.role
            };
        } catch (err) {
            const msg = extractErrorMessage(err, 'Login failed. Please check your credentials.');
            const axiosErr = err;
            const errorType = axiosErr?.response?.data?.errorType;
            const field = axiosErr?.response?.data?.field;
            setError(msg);
            return {
                success: false,
                error: msg,
                errorType,
                field
            };
        } finally{
            setIsLoading(false);
        }
    }, [
        router
    ]);
    // 2. REGISTER
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (full_name, domain, email, password, phone, contactEmail, location, extra)=>{
        setIsLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/register', {
                full_name,
                domain,
                email,
                password,
                phone,
                contactEmail,
                location,
                ...extra
            });
            return true;
        } catch (err) {
            const msg = extractErrorMessage(err, 'Registration failed. Please try again.');
            setError(msg);
            return false;
        } finally{
            setIsLoading(false);
        }
    }, []);
    // 3. SEND OTP
    const sendOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (medium, credential)=>{
        setIsLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/send-otp', {
                medium,
                credential
            });
            return true;
        } catch (err) {
            const msg = extractErrorMessage(err, 'Failed to send OTP. Please try again.');
            setError(msg);
            return false;
        } finally{
            setIsLoading(false);
        }
    }, []);
    // 4. VERIFY OTP
    const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (credential, code, newPassword)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-otp', {
                credential,
                code,
                newPassword,
                deviceId,
                platform,
                deviceType
            });
            const { user, accessToken, refreshToken } = response.data;
            const finalDeviceId = response.data.deviceId || deviceId;
            if (isSuperadminWebOnly(user)) {
                throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
            }
            persistSessionTokens(user, accessToken, refreshToken, null, undefined, finalDeviceId);
            initBackgroundAuthTasks();
            router.replace(getRoleRedirectTarget(user));
            return true;
        } catch (err) {
            const msg = extractErrorMessage(err, 'Invalid or expired OTP.');
            setError(msg);
            return false;
        } finally{
            setIsLoading(false);
        }
    }, [
        router
    ]);
    // 5. VERIFY TWO STEP
    const verifyTwoStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId, code, method, credential)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-two-step', {
                userId,
                code,
                method,
                credential,
                deviceId,
                platform,
                deviceType
            });
            const { user, accessToken, refreshToken } = response.data;
            const finalDeviceId = response.data.deviceId || deviceId;
            if (isSuperadminWebOnly(user)) {
                throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
            }
            persistSessionTokens(user, accessToken, refreshToken, null, undefined, finalDeviceId);
            initBackgroundAuthTasks();
            return true;
        } catch (err) {
            const msg = extractErrorMessage(err, 'Invalid or expired verification code / PIN.');
            setError(msg);
            return false;
        } finally{
            setIsLoading(false);
        }
    }, []);
    // 6. LOGIN WITH PIN
    const loginWithPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (identifier, pin)=>{
        setIsLoading(true);
        setError(null);
        try {
            localStorage.removeItem('pingdart-auth');
            hasFetchedLiveUser = false;
            isFetchingLiveUser = false;
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/login-pin', {
                identifier,
                pin,
                deviceId,
                platform,
                deviceType
            });
            const { user, accessToken, refreshToken, deviceMailToken } = response.data;
            const finalDeviceId = response.data.deviceId || deviceId;
            if (isSuperadminWebOnly(user)) {
                throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
            }
            persistSessionTokens(user, accessToken, refreshToken, deviceMailToken, undefined, finalDeviceId);
            initBackgroundAuthTasks();
            return {
                success: true,
                user,
                role: user?.role
            };
        } catch (err) {
            const msg = extractErrorMessage(err, 'PIN Login failed. Please check your PIN.');
            setError(msg);
            return {
                success: false,
                error: msg
            };
        } finally{
            setIsLoading(false);
        }
    }, []);
    // 7. LOGIN WITH FACE
    const loginWithFace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (vector, pin)=>{
        setIsLoading(true);
        setError(null);
        try {
            const { deviceId, platform, deviceType } = getClientDeviceInfo();
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/login-face', {
                vector,
                pin,
                deviceId,
                platform,
                deviceType
            });
            if (response.data.requiresPin) {
                return {
                    success: true,
                    requiresPin: true,
                    matchedUser: response.data.matchedUser
                };
            }
            const { user, accessToken, refreshToken, deviceMailToken } = response.data;
            const finalDeviceId = response.data.deviceId || deviceId;
            if (isSuperadminWebOnly(user)) {
                throw new Error(SUPERADMIN_WEB_ONLY_MESSAGE);
            }
            persistSessionTokens(user, accessToken, refreshToken, deviceMailToken, undefined, finalDeviceId);
            initBackgroundAuthTasks();
            return {
                success: true,
                user
            };
        } catch (err) {
            const msg = extractErrorMessage(err, 'Face authentication failed.');
            setError(msg);
            return {
                success: false,
                error: msg
            };
        } finally{
            setIsLoading(false);
        }
    }, []);
    // 8. LOGIN WITH HARDWARE BIOMETRICS (TOUCH ID / FACE ID)
    const loginWithSavedBiometrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const { getBiometricLoginCredentials } = await __turbopack_context__.A("[project]/src/utils/biometrics.ts [app-ssr] (ecmascript, async loader)");
            const creds = await getBiometricLoginCredentials();
            if (!creds || !creds.username) {
                return {
                    success: false,
                    error: 'Biometric scan was cancelled or not recognized.'
                };
            }
            if (creds.password) {
                return await login(creds.username, creds.password);
            }
            return {
                success: false,
                error: 'No saved credentials found for biometric unlock.'
            };
        } catch (err) {
            const msg = extractErrorMessage(err, 'Biometric authentication failed.');
            setError(msg);
            return {
                success: false,
                error: msg
            };
        } finally{
            setIsLoading(false);
        }
    }, [
        login
    ]);
    // 6. LOGOUT
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((redirectTarget)=>{
        // Clear E2EE in-memory state FIRST so next login re-initializes cleanly
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetE2EEState"])();
        } catch (_) {}
        const deviceId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().refreshToken || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null);
        // Notify backend to invalidate refresh token and unregister secondary/linked device
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/logout', {
            refreshToken,
            deviceId
        }).catch(()=>{});
        clearSessionTokens();
        cleanupBackgroundAuthTasks();
        const currentPath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
        const isTargetAdmin = redirectTarget?.startsWith('/admin') || currentPath.startsWith('/admin');
        const target = redirectTarget || (isTargetAdmin ? '/admin/login' : '/login');
        router.replace(target);
    }, [
        router
    ]);
    // 7. REFRESH PROFILE (New Addition)
    const refreshProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/user/profile');
            if (res.data && res.data.success) {
                const liveUser = res.data.user;
                const userForStorage = {
                    ...liveUser
                };
                delete userForStorage.avatar;
                delete userForStorage.banner;
                localStorage.setItem('user', JSON.stringify(userForStorage));
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem('user', JSON.stringify(userForStorage)).catch((e)=>console.error(e));
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(liveUser);
                return liveUser;
            }
        } catch (err) {
            console.error('Failed to fetch live user profile', err);
        }
        return null;
    }, []);
    // 8. GET USER
    const getUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (storeUser) return storeUser;
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const userStr = undefined;
    }, [
        storeUser,
        refreshProfile
    ]);
    return {
        login,
        loginWithPin,
        loginWithFace,
        loginWithSavedBiometrics,
        register,
        sendOtp,
        verifyOtp,
        verifyTwoStep,
        refreshProfile,
        logout,
        getUser,
        isLoading,
        error
    };
}
}),
"[project]/src/hooks/useSiteSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_BOTTOM_LINKS",
    ()=>DEFAULT_BOTTOM_LINKS,
    "DEFAULT_FOOTER_SECTIONS",
    ()=>DEFAULT_FOOTER_SECTIONS,
    "useSiteSettings",
    ()=>useSiteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
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
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return DEFAULT_SITE_SETTINGS;
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchSettings() {
            try {
                const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
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
                        setSettings((prev)=>({
                                ...prev,
                                ...updated
                            }));
                        try {
                            const forStorage = {
                                ...updated
                            };
                            if (forStorage.appLogoImage?.startsWith('data:') || (forStorage.appLogoImage?.length || 0) > 500) {
                                delete forStorage.appLogoImage;
                            }
                            if (forStorage.appLogoDark?.startsWith('data:') || (forStorage.appLogoDark?.length || 0) > 500) {
                                delete forStorage.appLogoDark;
                            }
                            if (forStorage.appLogoDarkImage?.startsWith('data:') || (forStorage.appLogoDarkImage?.length || 0) > 500) {
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
    }, []);
    const updateSettings = async (newSettings)=>{
        try {
            const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
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
}),
"[project]/src/services/deferredReferralService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearStoredReferralCode",
    ()=>clearStoredReferralCode,
    "getStoredReferralCode",
    ()=>getStoredReferralCode,
    "resolveDeferredReferral",
    ()=>resolveDeferredReferral,
    "setStoredReferralCode",
    ()=>setStoredReferralCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
;
;
const STORAGE_KEY = "pending_referral_code";
function getStoredReferralCode() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setStoredReferralCode(code) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function clearStoredReferralCode() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
let hasResolvedDeferred = false;
async function resolveDeferredReferral() {
    // Already has a stored code? Return it
    const existing = getStoredReferralCode();
    if (existing) return existing;
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/services/exploreApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * exploreApi.ts — Typed API service for Ping Explore Map Discovery
 */ __turbopack_context__.s([
    "exploreApi",
    ()=>exploreApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const exploreApi = {
    // Update user's ephemeral obfuscated location
    updateLocation: async (latitude, longitude)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/location/update', {
            latitude,
            longitude
        });
        return res.data;
    },
    // Discover nearby users
    getNearbyUsers: async (params = {})=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/nearby', {
            params
        });
        return res.data;
    },
    // Send a connection request
    sendConnectionRequest: async (receiverId, message)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/connection/request', {
            receiverId,
            message
        });
        return res.data;
    },
    // Respond to a connection request (accept/reject/block)
    respondConnectionRequest: async (requestId, action)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/connection/respond', {
            requestId,
            action
        });
        return res.data;
    },
    // Get list of pending requests
    getConnectionRequests: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/connection/requests');
        return res.data;
    },
    // Get user's explore settings
    getSettings: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/settings');
        return res.data;
    },
    // Update user's explore settings
    updateSettings: async (settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put('/explore/settings', settings);
        return res.data;
    },
    // ── Face Match & People Discovery Endpoints ─────────────────
    getFaceStatus: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/explore/face/status');
        return res.data;
    },
    recordFaceConsent: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/face/consent', params);
        return res.data;
    },
    enrollFaceBiometric: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/face/enroll', params);
        return res.data;
    },
    matchFace: async (vector)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/explore/face/match', {
            vector
        });
        return res.data;
    },
    purgeFaceBiometrics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete('/explore/face/biometrics');
        return res.data;
    }
};
}),
"[project]/src/utils/faceBiometrics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * faceBiometrics.ts
 * Computes 3D rotation-, scale-, and translation-invariant 128-dimensional
 * facial biometric geometry vectors from MediaPipe 478 3D landmarks.
 * 
 * Supports all head poses (pitch up/down, yaw left/right, roll tilt) and
 * all screen positions (top, bottom, left, right, center).
 */ __turbopack_context__.s([
    "align3DCanonical",
    ()=>align3DCanonical,
    "dist3D",
    ()=>dist3D,
    "extractFaceBiometricVector",
    ()=>extractFaceBiometricVector,
    "extractFaceDescriptorFromImage",
    ()=>extractFaceDescriptorFromImage,
    "getFacePoseAndBounds",
    ()=>getFacePoseAndBounds,
    "triangleArea",
    ()=>triangleArea
]);
function dist3D(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = (p1.z || 0) - (p2.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function triangleArea(p1, p2, p3) {
    const ax = p2.x - p1.x;
    const ay = p2.y - p1.y;
    const az = p2.z - p1.z;
    const bx = p3.x - p1.x;
    const dy = p3.y - p1.y;
    const bz = p3.z - p1.z;
    const cx = ay * bz - az * dy;
    const cy = az * bx - ax * bz;
    const cz = ax * dy - ay * bx;
    return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}
function align3DCanonical(landmarks) {
    // Left eye pupil: 468 (fallback to 33 if missing), Right eye pupil: 473 (fallback to 263)
    const leftEyeRaw = landmarks[468] || landmarks[33] || landmarks[133];
    const rightEyeRaw = landmarks[473] || landmarks[263] || landmarks[362];
    const chinRaw = landmarks[152] || landmarks[175] || landmarks[148];
    const pLeft = {
        x: leftEyeRaw.x,
        y: leftEyeRaw.y,
        z: leftEyeRaw.z || 0
    };
    const pRight = {
        x: rightEyeRaw.x,
        y: rightEyeRaw.y,
        z: rightEyeRaw.z || 0
    };
    const pChin = {
        x: chinRaw.x,
        y: chinRaw.y,
        z: chinRaw.z || 0
    };
    // Midpoint between eyes as coordinate origin
    const midX = (pLeft.x + pRight.x) / 2;
    const midY = (pLeft.y + pRight.y) / 2;
    const midZ = (pLeft.z + pRight.z) / 2;
    // 1. Vector X: Left eye to Right eye (lateral axis across face)
    const vx = {
        x: pRight.x - pLeft.x,
        y: pRight.y - pLeft.y,
        z: pRight.z - pLeft.z
    };
    const lenX = Math.sqrt(vx.x * vx.x + vx.y * vx.y + vx.z * vx.z) || 0.001;
    const ux = {
        x: vx.x / lenX,
        y: vx.y / lenX,
        z: vx.z / lenX
    };
    // 2. Vector Down: Eye midpoint to chin tip
    const vDown = {
        x: pChin.x - midX,
        y: pChin.y - midY,
        z: pChin.z - midZ
    };
    // 3. Vector Z: Normal to face plane (pointing outwards towards camera) = ux x vDown
    const vz = {
        x: ux.y * vDown.z - ux.z * vDown.y,
        y: ux.z * vDown.x - ux.x * vDown.z,
        z: ux.x * vDown.y - ux.y * vDown.x
    };
    const lenZ = Math.sqrt(vz.x * vz.x + vz.y * vz.y + vz.z * vz.z) || 0.001;
    const uz = {
        x: vz.x / lenZ,
        y: vz.y / lenZ,
        z: vz.z / lenZ
    };
    // 4. Vector Y: True orthogonal downward axis (along facial midline) = uz x ux
    const uy = {
        x: uz.y * ux.z - uz.z * ux.y,
        y: uz.z * ux.x - uz.x * uz.z,
        z: uz.x * ux.y - uz.y * ux.x
    };
    // 5. Canonical 3D Scale factor (geometric mean of width and facial height)
    const lenDown = Math.sqrt(vDown.x * vDown.x + vDown.y * vDown.y + vDown.z * vDown.z) || 0.001;
    const scale = Math.sqrt(lenX * lenDown) || 0.001;
    // Transform all points onto the canonical 3D orthonormal basis
    return landmarks.map((lm)=>{
        const rawZ = lm.z || 0;
        const dx = lm.x - midX;
        const dy = lm.y - midY;
        const dz = rawZ - midZ;
        const rx = (dx * ux.x + dy * ux.y + dz * ux.z) / scale;
        const ry = (dx * uy.x + dy * uy.y + dz * uy.z) / scale;
        const rz = (dx * uz.x + dy * uz.y + dz * uz.z) / scale;
        return {
            x: rx,
            y: ry,
            z: rz
        };
    });
}
function getFacePoseAndBounds(landmarks) {
    let minX = 1;
    let maxX = 0;
    let minY = 1;
    let maxY = 0;
    for(let i = 0; i < landmarks.length; i++){
        const lm = landmarks[i];
        if (lm.x < minX) minX = lm.x;
        if (lm.x > maxX) maxX = lm.x;
        if (lm.y < minY) minY = lm.y;
        if (lm.y > maxY) maxY = lm.y;
    }
    const rawWidth = Math.max(0.005, maxX - minX);
    const rawHeight = Math.max(0.005, maxY - minY);
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    // Add margin around face for HUD reticle (expand slightly for distant faces)
    const isLongRange = rawWidth < 0.16;
    const padX = rawWidth * (isLongRange ? 0.45 : 0.22);
    const padY = rawHeight * (isLongRange ? 0.45 : 0.22);
    const boxLeft = Math.max(0.02, minX - padX);
    const boxTop = Math.max(0.02, minY - padY);
    const boxWidth = Math.max(isLongRange ? 0.14 : 0.10, Math.min(0.96 - boxLeft, rawWidth + padX * 2));
    const boxHeight = Math.max(isLongRange ? 0.18 : 0.12, Math.min(0.96 - boxTop, rawHeight + padY * 2));
    // Estimate Pose: Roll, Pitch, Yaw
    const pLeft = landmarks[468] || landmarks[33];
    const pRight = landmarks[473] || landmarks[263];
    const pNose = landmarks[1];
    const pChin = landmarks[152];
    const roll = Math.atan2(pRight.y - pLeft.y, pRight.x - pLeft.x) * (180 / Math.PI);
    const ipd = Math.max(0.005, Math.sqrt((pRight.x - pLeft.x) ** 2 + (pRight.y - pLeft.y) ** 2));
    // Yaw: asymmetry of nose between eyes
    const distLeft = Math.sqrt((pNose.x - pLeft.x) ** 2 + (pNose.y - pLeft.y) ** 2);
    const distRight = Math.sqrt((pNose.x - pRight.x) ** 2 + (pNose.y - pRight.y) ** 2);
    const yaw = (distRight - distLeft) / ipd * 60; // in degrees approx
    // Pitch: vertical offset of nose relative to eye-chin midpoint
    const eyeY = (pLeft.y + pRight.y) / 2;
    const faceHeight = Math.max(0.005, pChin.y - eyeY);
    const noseRelY = (pNose.y - eyeY) / faceHeight; // normally ~0.35 - 0.40
    const pitch = (noseRelY - 0.38) * 90;
    // Determine Position Label
    let posH = "Center";
    if (centerX < 0.38) posH = "Left Side";
    else if (centerX > 0.62) posH = "Right Side";
    let posV = "";
    if (centerY < 0.35) posV = "Top";
    else if (centerY > 0.65) posV = "Bottom";
    let positionLabel = posV ? posH === "Center" ? posV : `${posV} ${posH}` : posH;
    if (isLongRange) {
        positionLabel = `${positionLabel} • Long Range`;
    }
    // Determine Angle Label
    let angleLabel = "Front";
    if (yaw > 16) angleLabel = "Turned Right";
    else if (yaw < -16) angleLabel = "Turned Left";
    else if (pitch > 16) angleLabel = "Tilted Down";
    else if (pitch < -16) angleLabel = "Tilted Up";
    return {
        left: Math.round(boxLeft * 100),
        top: Math.round(boxTop * 100),
        width: Math.round(boxWidth * 100),
        height: Math.round(boxHeight * 100),
        centerX,
        centerY,
        yaw: Math.round(yaw),
        pitch: Math.round(pitch),
        roll: Math.round(roll),
        positionLabel,
        angleLabel
    };
}
function extractFaceBiometricVector(landmarks) {
    if (!landmarks || landmarks.length < 400) {
        throw new Error('Insufficient face landmarks detected (expected 468+ points).');
    }
    const pts = align3DCanonical(landmarks);
    const vector = [];
    // Key landmark indices
    const NOSE_TIP = 1;
    const SUBNASALE = 2;
    const GLABELLA = 9;
    const FOREHEAD = 10;
    const CHIN_TIP = 152;
    const CHIN_MENTON = 175;
    const CHEEK_L = 234;
    const CHEEK_R = 454;
    const MOUTH_L = 61;
    const MOUTH_R = 291;
    const LIP_UPPER = 0;
    const LIP_LOWER = 17;
    const EYE_L_OUTER = 33;
    const EYE_L_INNER = 133;
    const EYE_R_INNER = 362;
    const EYE_R_OUTER = 263;
    const BROW_L_INNER = 70;
    const BROW_L_PEAK = 105;
    const BROW_R_PEAK = 334;
    const BROW_R_INNER = 300;
    // 1. Core Anatomical Metric Ratios (32 features)
    const corePairs = [
        [
            NOSE_TIP,
            CHIN_TIP
        ],
        [
            NOSE_TIP,
            FOREHEAD
        ],
        [
            SUBNASALE,
            LIP_UPPER
        ],
        [
            LIP_LOWER,
            CHIN_TIP
        ],
        [
            CHEEK_L,
            CHEEK_R
        ],
        [
            MOUTH_L,
            MOUTH_R
        ],
        [
            EYE_L_OUTER,
            EYE_R_OUTER
        ],
        [
            EYE_L_INNER,
            EYE_R_INNER
        ],
        [
            BROW_L_INNER,
            BROW_R_INNER
        ],
        [
            BROW_L_PEAK,
            BROW_R_PEAK
        ],
        [
            NOSE_TIP,
            MOUTH_L
        ],
        [
            NOSE_TIP,
            MOUTH_R
        ],
        [
            CHIN_TIP,
            MOUTH_L
        ],
        [
            CHIN_TIP,
            MOUTH_R
        ],
        [
            GLABELLA,
            NOSE_TIP
        ],
        [
            GLABELLA,
            CHIN_TIP
        ],
        [
            CHEEK_L,
            NOSE_TIP
        ],
        [
            CHEEK_R,
            NOSE_TIP
        ],
        [
            CHEEK_L,
            CHIN_TIP
        ],
        [
            CHEEK_R,
            CHIN_TIP
        ],
        [
            EYE_L_OUTER,
            MOUTH_L
        ],
        [
            EYE_R_OUTER,
            MOUTH_R
        ],
        [
            EYE_L_INNER,
            NOSE_TIP
        ],
        [
            EYE_R_INNER,
            NOSE_TIP
        ],
        [
            BROW_L_PEAK,
            EYE_L_OUTER
        ],
        [
            BROW_R_PEAK,
            EYE_R_OUTER
        ],
        [
            SUBNASALE,
            CHIN_MENTON
        ],
        [
            FOREHEAD,
            CHIN_MENTON
        ],
        [
            CHEEK_L,
            MOUTH_L
        ],
        [
            CHEEK_R,
            MOUTH_R
        ],
        [
            NOSE_TIP,
            LIP_UPPER
        ],
        [
            LIP_UPPER,
            LIP_LOWER
        ]
    ];
    for (const [i1, i2] of corePairs){
        vector.push(dist3D(pts[i1], pts[i2]));
    }
    // 2. Jawline Contour in Canonical 3D Head Frame (32 features: 16 points x & y)
    const jawlineIndices = [
        58,
        172,
        136,
        150,
        149,
        176,
        148,
        152,
        377,
        400,
        378,
        379,
        365,
        397,
        288,
        361
    ];
    for (const idx of jawlineIndices){
        const p = pts[idx];
        vector.push(p.x);
        vector.push(p.y);
    }
    // 3. Eye & Brow Structural Depth & Height (24 features)
    const eyeBrowIndices = [
        33,
        160,
        158,
        133,
        153,
        144,
        362,
        385,
        387,
        263,
        373,
        380,
        70,
        63,
        105,
        66,
        107,
        300,
        293,
        334,
        296,
        336 // Right eyebrow
    ];
    for(let i = 0; i < 24; i++){
        const idx = eyeBrowIndices[i % eyeBrowIndices.length];
        vector.push(pts[idx].y);
    }
    // 4. Sagittal 3D Profile Projections (Z-depths) (20 features)
    const depthIndices = [
        1,
        2,
        9,
        10,
        152,
        175,
        234,
        454,
        61,
        291,
        0,
        17,
        33,
        263,
        105,
        334,
        168,
        6,
        197,
        195
    ];
    for (const idx of depthIndices){
        vector.push(pts[idx].z);
    }
    // 5. Triangular Area Proportions & Symmetry (20 features)
    const a1 = triangleArea(pts[EYE_L_OUTER], pts[EYE_R_OUTER], pts[CHIN_TIP]);
    const a2 = triangleArea(pts[EYE_L_OUTER], pts[EYE_R_OUTER], pts[NOSE_TIP]);
    const a3 = triangleArea(pts[NOSE_TIP], pts[MOUTH_L], pts[MOUTH_R]);
    const a4 = triangleArea(pts[CHEEK_L], pts[CHEEK_R], pts[CHIN_TIP]);
    const aLeft = triangleArea(pts[FOREHEAD], pts[CHEEK_L], pts[CHIN_TIP]);
    const aRight = triangleArea(pts[FOREHEAD], pts[CHEEK_R], pts[CHIN_TIP]);
    vector.push(a1, a2, a3, a4, aLeft, aRight);
    vector.push(a2 / Math.max(0.001, a1));
    vector.push(a3 / Math.max(0.001, a1));
    vector.push(aLeft / Math.max(0.001, aRight)); // symmetry balance
    // Fill up exactly to 128 dimensions with calibrated distance-to-origin checks
    const extraLandmarks = [
        19,
        94,
        168,
        5,
        4,
        45,
        275,
        130,
        359,
        21,
        251
    ];
    for(let i = vector.length; i < 128; i++){
        const lmIdx = extraLandmarks[(i - vector.length) % extraLandmarks.length];
        const p = pts[lmIdx];
        vector.push(Math.sqrt(p.x * p.x + p.y * p.y));
    }
    // 6. Final L2 Normalization
    let norm = 0;
    for(let i = 0; i < 128; i++){
        norm += vector[i] * vector[i];
    }
    norm = Math.sqrt(norm);
    if (norm > 0) {
        for(let i = 0; i < 128; i++){
            vector[i] = parseFloat((vector[i] / norm).toFixed(6));
        }
    }
    return vector.slice(0, 128);
}
async function extractFaceDescriptorFromImage(imageUrl) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/utils/biometrics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateBiometric",
    ()=>authenticateBiometric,
    "deleteBiometricLoginCredentials",
    ()=>deleteBiometricLoginCredentials,
    "getBiometricLoginCredentials",
    ()=>getBiometricLoginCredentials,
    "getSavedLoginUser",
    ()=>getSavedLoginUser,
    "isBiometricLoginEnabled",
    ()=>isBiometricLoginEnabled,
    "isBiometricsAvailable",
    ()=>isBiometricsAvailable,
    "saveBiometricLoginCredentials",
    ()=>saveBiometricLoginCredentials,
    "setBiometricLoginEnabled",
    ()=>setBiometricLoginEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
async function authenticateBiometric(reason = "Verify fingerprint, Face ID, or device PIN to unlock") {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].isAvailable({
                useFallback: true
            });
            if (result.isAvailable) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].verifyIdentity({
                    reason,
                    title: "PingDart App Lock",
                    subtitle: "Authentication Required",
                    description: reason,
                    useFallback: true,
                    maxAttempts: 3
                });
                return true;
            }
        } catch (err) {
            console.warn("[NativeBiometric] Authentication failed or cancelled:", err);
            return false;
        }
    }
    // Web fallback using WebAuthn (if available)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return true;
}
const BIOMETRIC_SERVER_NAME = "pingdart_login";
const BIOMETRIC_ENABLED_KEY = "pingdart_biometric_login_enabled";
const LAST_LOGIN_USER_KEY = "pingdart_saved_login_user";
async function isBiometricsAvailable() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].isAvailable({
                useFallback: true
            });
            return {
                available: Boolean(result?.isAvailable),
                biometryType: result?.biometryType ? String(result.biometryType) : undefined
            };
        } catch  {
            return {
                available: false
            };
        }
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        available: false
    };
}
function isBiometricLoginEnabled() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function setBiometricLoginEnabled(enabled, username) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getSavedLoginUser() {
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
}
async function saveBiometricLoginCredentials(username, passwordOrToken) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].setCredentials({
                username,
                password: passwordOrToken,
                server: BIOMETRIC_SERVER_NAME
            });
            return true;
        } catch (err) {
            console.warn("[NativeBiometric] Failed to save credentials to keystore:", err);
            return false;
        }
    }
    return true;
}
async function getBiometricLoginCredentials() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const creds = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].getCredentials({
                server: BIOMETRIC_SERVER_NAME
            });
            if (creds && creds.username) {
                return {
                    username: creds.username,
                    password: creds.password
                };
            }
        } catch (err) {
            console.warn("[NativeBiometric] getCredentials failed or user cancelled:", err);
            return null;
        }
    }
    // Web fallback: verify identity
    const ok = await authenticateBiometric("Sign in to PingDart with Face ID / Biometrics");
    if (ok) {
        const savedUser = getSavedLoginUser();
        if (savedUser) {
            return {
                username: savedUser
            };
        }
    }
    return null;
}
async function deleteBiometricLoginCredentials() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].deleteCredentials({
                server: BIOMETRIC_SERVER_NAME
            });
            return true;
        } catch (err) {
            console.warn("[NativeBiometric] Failed to delete credentials:", err);
            return false;
        }
    }
    return true;
}
}),
"[project]/src/components/auth/SecurityOnboardingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecurityOnboardingModal",
    ()=>SecurityOnboardingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Key01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/exploreApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/faceBiometrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/biometrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
function SecurityOnboardingModal({ isOpen, userEmail, userPassword, avatarUrl, onComplete }) {
    const { updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPin, setConfirmPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [enableFaceId, setEnableFaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [enableFaceDiscovery, setEnableFaceDiscovery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [biometricsType, setBiometricsType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function checkDeviceBiometrics() {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBiometricsAvailable"])();
            if (info.available) {
                setBiometricsType(info.biometryType || "biometrics");
            }
        }
        if (isOpen) {
            checkDeviceBiometrics();
        }
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const handleSaveSecurity = async ()=>{
        // If PIN entered, validate
        if (pin.length > 0) {
            if (pin.length !== 6 || isNaN(Number(pin))) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Security PIN must be exactly 6 digits.");
                return;
            }
            if (pin !== confirmPin) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("PIN and Confirm PIN do not match.");
                return;
            }
        }
        setIsSubmitting(true);
        const loadingToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Saving security settings...");
        try {
            // 1. Save PIN if provided
            if (pin.length === 6) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                    twoStepEnabled: true,
                    twoStepMethod: "pin",
                    twoStepPin: pin
                });
                updateUser({
                    twoStepEnabled: true
                });
            }
            // 2. Save Biometric credentials to hardware keystore / preference
            if (enableFaceId && userEmail) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveBiometricLoginCredentials"])(userEmail, userPassword || pin);
            }
            // 3. Setup Face Discovery if enabled
            if (enableFaceDiscovery) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].recordFaceConsent({
                        consentAgreed: true,
                        discoveryAudience: "public"
                    });
                    updateUser({
                        isFaceDiscoveryEnabled: true,
                        faceDiscoveryAudience: "public"
                    });
                    // If avatar image exists, attempt auto-enrollment
                    if (avatarUrl) {
                        try {
                            const vector = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$faceBiometrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFaceDescriptorFromImage"])(avatarUrl);
                            if (vector && vector.length >= 32) {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exploreApi"].enrollFaceBiometric({
                                    vector,
                                    discoveryAudience: "public"
                                });
                            }
                        } catch (vErr) {
                            console.warn("[Onboarding] Avatar face vector extraction note:", vErr);
                        }
                    }
                } catch (fErr) {
                    console.warn("[Onboarding] Face consent error:", fErr);
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingToast);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Security preferences saved!");
            onComplete();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingToast);
            console.error("[Onboarding] Error saving security preferences:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err?.response?.data?.message || err?.message || "Failed to save security settings.");
            // Still allow proceeding
            onComplete();
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-lg bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 p-6 text-white text-center shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto mb-3 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                size: 28,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-black tracking-tight",
                            children: "Protect Your Account"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-blue-100 mt-1 max-w-sm mx-auto leading-relaxed",
                            children: "Set up 1-tap Face ID and a Security PIN to log in seamlessly without typing passwords."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-5 overflow-y-auto flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Key01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200",
                                                    children: "Set 6-Digit Security PIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "Quick PIN for instant access on any phone or computer."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1",
                                                    children: "6-Digit PIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    inputMode: "numeric",
                                                    pattern: "[0-9]*",
                                                    maxLength: 6,
                                                    value: pin,
                                                    onChange: (e)=>setPin(e.target.value.replace(/\D/g, "")),
                                                    placeholder: "••••••",
                                                    className: "w-full text-center text-lg font-black tracking-[0.3em] py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1",
                                                    children: "Confirm PIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    inputMode: "numeric",
                                                    pattern: "[0-9]*",
                                                    maxLength: 6,
                                                    value: confirmPin,
                                                    onChange: (e)=>setConfirmPin(e.target.value.replace(/\D/g, "")),
                                                    placeholder: "••••••",
                                                    className: "w-full text-center text-lg font-black tracking-[0.3em] py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200",
                                                    children: "Enable Face ID & Biometrics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                biometricsType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
                                                    children: "Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-500 dark:text-slate-400 leading-tight",
                                            children: "Use your device biometric sensor (Face ID / Fingerprint) for 1-tap sign-in."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setEnableFaceId(!enableFaceId),
                                    className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 ${enableFaceId ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${enableFaceId ? "translate-x-6" : "translate-x-0"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                    size: 14,
                                                    className: "text-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200",
                                                    children: "Allow Face Match Discovery"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-500 dark:text-slate-400 leading-tight",
                                            children: "Let contacts find your profile when scanning a photo. Uses your chosen profile photo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setEnableFaceDiscovery(!enableFaceDiscovery),
                                    className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 ${enableFaceDiscovery ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${enableFaceDiscovery ? "translate-x-6" : "translate-x-0"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onComplete,
                            disabled: isSubmitting,
                            className: "flex-1 py-3.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 rounded-full transition-colors text-center",
                            children: "Skip for Now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleSaveSecurity,
                            disabled: isSubmitting,
                            className: "flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Saving..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Save & Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/auth/SecurityOnboardingModal.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(public)/register/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GlobeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/GlobeIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewOffSlashIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Coins01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowDown01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/currencyService.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSiteSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/deferredReferralService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/camera/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/camera/dist/esm/definitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$SecurityOnboardingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/SecurityOnboardingModal.tsx [app-ssr] (ecmascript)");
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
const BUSINESS_CATEGORIES = [
    "IT & Software Services",
    "Retail & E-commerce",
    "Restaurant, Cafe & Food",
    "Healthcare & Clinic",
    "Education & Coaching",
    "Finance & Legal Services",
    "Real Estate & Construction",
    "Manufacturing & Industry",
    "Automotive & Transport",
    "Travel, Hotel & Hospitality",
    "Media, Design & Marketing",
    "Beauty, Spa & Fitness",
    "Other Business"
];
const TIMING_PRESETS = [
    "09:00 AM - 06:00 PM (Mon-Sat)",
    "10:00 AM - 07:00 PM (Mon-Sat)",
    "08:00 AM - 10:00 PM (Everyday)",
    "24/7 Always Open"
];
function RegisterPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSiteSettings"])();
    const appName = settings.appLogoText || ("TURBOPACK compile-time value", "PingDart") || "PingDart";
    const { register, login, isLoading, error: authError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [localError, setLocalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const error = localError || authError;
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Submit stage
    const [isValidatingStep, setIsValidatingStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStage, setSubmitStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [securityModalOpen, setSecurityModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Account Type
    const [accountType, setAccountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("personal");
    // Step 1 State (Personal & Business)
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessName, setBusinessName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessCategory, setBusinessCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("IT & Software Services");
    const [businessTimings, setBusinessTimings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("09:00 AM - 06:00 PM (Mon-Sat)");
    const [businessProducts, setBusinessProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessDescription, setBusinessDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessWebsite, setBusinessWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessAddress, setBusinessAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [referralCode, setReferralCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [referralApplied, setReferralApplied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [domainType, setDomainType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("custom");
    const [domain, setDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [contactEmail, setContactEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("India");
    const [accountCurrency, setAccountCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("INR");
    // Auto-detect and sync currency whenever phone country changes
    const handlePhoneCountryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((c)=>{
        setCountry(c.name);
        const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectCountryCurrency"])({
            countryCode: c.code,
            dialCode: c.dial_code,
            country: c.name,
            phone
        });
        if (detected?.code) {
            setAccountCurrency(detected.code);
        }
    }, [
        phone
    ]);
    // Auto-detect currency from phone dial code upon entering phone
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phone) {
            const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectCountryCurrency"])({
                phone
            });
            if (detected?.code) {
                setAccountCurrency(detected.code);
            }
        }
    }, [
        phone
    ]);
    // Step 2 State
    const [adminUsername, setAdminUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestedPasswords, setSuggestedPasswords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agreeTerms, setAgreeTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Step 3 State: Gender & Display Picture & Photo Cropper
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Male");
    const [dpSource, setDpSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("system_avatar");
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [avatarFile, setAvatarFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [systemAvatars, setSystemAvatars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAvatarUrl, setSelectedAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const galleryInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Avatar Cropper Modal State
    const [cropModalOpen, setCropModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rawImageSrc, setRawImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cropZoom, setCropZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [cropRotation, setCropRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cropOffset, setCropOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isDraggingCrop, setIsDraggingCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragStartPos, setDragStartPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    /** Open dataUrl into the crop modal. Also sets avatarPreview immediately as safety net. */ const openDataUrlForCrop = (dataUrl)=>{
        setRawImageSrc(dataUrl);
        // Safety net: show photo immediately so user always sees it
        setAvatarPreview(dataUrl);
        setDpSource("camera_upload");
        setCropZoom(1);
        setCropRotation(0);
        setCropOffset({
            x: 0,
            y: 0
        });
        setCropModalOpen(true);
    };
    const openFileForCrop = (file)=>{
        setAvatarFile(file);
        const reader = new FileReader();
        reader.onload = (event)=>{
            if (event.target?.result) {
                openDataUrlForCrop(event.target.result);
            }
        };
        reader.readAsDataURL(file);
    };
    const handlePhotoCaptured = (e)=>{
        const file = e.target.files?.[0];
        if (file) openFileForCrop(file);
        // Reset so same file can be re-selected
        e.target.value = "";
    };
    /** Native: uses @capacitor/camera for front-facing selfie */ const openFrontCamera = async ()=>{
        if (isNative) {
            try {
                const photo = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Camera"].getPhoto({
                    quality: 90,
                    allowEditing: false,
                    resultType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraResultType"].DataUrl,
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraSource"].Camera,
                    direction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraDirection"].Front,
                    correctOrientation: true,
                    webUseInput: false
                });
                if (photo.dataUrl) openDataUrlForCrop(photo.dataUrl);
            } catch (err) {
                console.warn("Camera cancelled or failed:", err);
            }
        } else {
            // Web fallback: create a fresh input
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.setAttribute("capture", "user");
            input.style.display = "none";
            document.body.appendChild(input);
            input.onchange = (e)=>{
                const file = e.target.files?.[0];
                if (file) openFileForCrop(file);
                document.body.removeChild(input);
            };
            input.click();
        }
    };
    /** Native: uses @capacitor/camera to open photo gallery */ const openGallery = async ()=>{
        if (isNative) {
            try {
                const photo = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Camera"].getPhoto({
                    quality: 90,
                    allowEditing: false,
                    resultType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraResultType"].DataUrl,
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$camera$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraSource"].Photos,
                    correctOrientation: true,
                    webUseInput: false
                });
                if (photo.dataUrl) openDataUrlForCrop(photo.dataUrl);
            } catch (err) {
                console.warn("Gallery cancelled or failed:", err);
            }
        } else {
            // Web fallback: create input dynamically
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.style.display = "none";
            document.body.appendChild(input);
            input.onchange = (e)=>{
                const file = e.target.files?.[0];
                if (file) openFileForCrop(file);
                document.body.removeChild(input);
            };
            input.click();
        }
    };
    const handleApplyCrop = async ()=>{
        // For data: URLs (from native camera/gallery), img.onload is unreliable in
        // Android WebView with very large base64 strings. Use createImageBitmap
        // (Promise-based) with a graceful fallback to the raw image.
        const applyResult = (dataUrl)=>{
            setAvatarPreview(dataUrl);
            setSelectedAvatarUrl(dataUrl);
            setDpSource("camera_upload");
            setCropModalOpen(false);
        };
        if (rawImageSrc.startsWith("data:")) {
            try {
                const res = await fetch(rawImageSrc);
                const blob = await res.blob();
                const bitmap = await createImageBitmap(blob);
                const canvas = document.createElement("canvas");
                const size = 400;
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.save();
                    ctx.translate(size / 2, size / 2);
                    ctx.rotate(cropRotation * Math.PI / 180);
                    ctx.scale(cropZoom, cropZoom);
                    ctx.translate(cropOffset.x, cropOffset.y);
                    const aspect = bitmap.width / bitmap.height;
                    let drawW = size, drawH = size;
                    if (aspect > 1) drawW = size * aspect;
                    else drawH = size / aspect;
                    ctx.drawImage(bitmap, -drawW / 2, -drawH / 2, drawW, drawH);
                    ctx.restore();
                    const croppedDataUrl = canvas.toDataURL("image/jpeg", 0.9);
                    // canvas.toDataURL returns "data:," on failure — fallback to raw
                    applyResult(croppedDataUrl.length > 100 ? croppedDataUrl : rawImageSrc);
                } else {
                    applyResult(rawImageSrc);
                }
            } catch  {
                // Any failure → use raw dataUrl directly (circle CSS clips it)
                applyResult(rawImageSrc);
            }
            return;
        }
        // Non-data URL: use traditional img.onload + canvas
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.src = rawImageSrc;
        img.onload = ()=>{
            const canvas = document.createElement("canvas");
            const size = 400;
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                applyResult(rawImageSrc);
                return;
            }
            ctx.save();
            ctx.translate(size / 2, size / 2);
            ctx.rotate(cropRotation * Math.PI / 180);
            ctx.scale(cropZoom, cropZoom);
            ctx.translate(cropOffset.x, cropOffset.y);
            const aspect = img.width / img.height;
            let drawW = size, drawH = size;
            if (aspect > 1) drawW = size * aspect;
            else drawH = size / aspect;
            ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
            ctx.restore();
            applyResult(canvas.toDataURL("image/jpeg", 0.9));
        };
        img.onerror = ()=>applyResult(rawImageSrc);
    };
    // Step 4 State: Location & PingDart ID
    const [regCity, setRegCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Hyderabad");
    const [regState, setRegState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Telangana");
    const [regCountry, setRegCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("India");
    const [lat, setLat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lng, setLng] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pingdartId, setPingdartId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cCode, setCCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("91");
    const [sCode, setSCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("40");
    const [ciCode, setCiCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("50");
    const [isGeneratingId, setIsGeneratingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Location Search Modal State
    const [isLocationModalOpen, setIsLocationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationQuery, setLocationQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [availableLocations, setAvailableLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingLocations, setIsLoadingLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // GPS Location Detection State
    const [locationStatus, setLocationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [detectedLocationLabel, setDetectedLocationLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Validation Status State
    const [usernameStatus, setUsernameStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [usernameSuggestions, setUsernameSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [phoneStatus, setPhoneStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emailStatus, setEmailStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [domainStatus, setDomainStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Password Strength Evaluation
    const pwdChecks = {
        minChar: password.length >= 8,
        upperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
    const getPasswordStrength = ()=>{
        if (!password) return {
            label: "",
            color: "bg-gray-200 dark:bg-gray-700",
            textColor: "text-gray-400",
            percentage: "0%"
        };
        let score = 0;
        if (pwdChecks.minChar) score++;
        if (pwdChecks.upperLower) score++;
        if (pwdChecks.number) score++;
        if (pwdChecks.special) score++;
        if (password.length >= 12) score++;
        if (score <= 1) {
            return {
                label: "Weak",
                color: "bg-red-500",
                textColor: "text-red-500 dark:text-red-400",
                percentage: "25%"
            };
        } else if (score === 2 || score === 3) {
            return {
                label: "Fair",
                color: "bg-amber-500",
                textColor: "text-amber-500 dark:text-amber-400",
                percentage: "50%"
            };
        } else if (score === 4) {
            return {
                label: "Strong",
                color: "bg-indigo-600 dark:bg-indigo-500",
                textColor: "text-indigo-600 dark:text-indigo-400",
                percentage: "75%"
            };
        } else {
            return {
                label: "Very Strong",
                color: "bg-emerald-500",
                textColor: "text-emerald-500 dark:text-emerald-400",
                percentage: "100%"
            };
        }
    };
    // Streamlined 3-Step validation
    const isStep1Valid = (accountType === "personal" ? firstName.trim().length > 0 && lastName.trim().length > 0 : businessName.trim().length > 0 && firstName.trim().length > 0 && businessCategory.trim().length > 0) && phone.trim().length > 0 && phoneStatus !== "taken" && phoneStatus !== "invalid" && phoneStatus !== "checking";
    const isStep1Disabled = !isStep1Valid || isValidatingStep;
    const isStep2Valid = contactEmail.trim().length > 0 && emailStatus !== "taken" && emailStatus !== "checking" && (domainType !== "custom" || domain.trim().length > 0 && domainStatus !== "taken" && domainStatus !== "checking") && adminUsername.trim().length > 0 && usernameStatus !== "taken" && usernameStatus !== "checking";
    const isStep2Disabled = !isStep2Valid || isValidatingStep;
    const pwdStrength = getPasswordStrength();
    const isPasswordSecure = pwdChecks.minChar && (pwdChecks.upperLower || pwdChecks.number || pwdChecks.special) && pwdStrength.label !== "Weak";
    const isStep3Valid = password.length >= 8 && isPasswordSecure && agreeTerms;
    const [showExtraBusinessFields, setShowExtraBusinessFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const makeRandomPassword = ()=>{
        const uppercase = "ABCDEFGHJKLMNPQRSTUVWXYZ";
        const lowercase = "abcdefghijkmnopqrstuvwxyz";
        const numbers = "23456789";
        const symbols = "!@#$%^&*";
        const allChars = uppercase + lowercase + numbers + symbols;
        let pwd = "";
        pwd += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        pwd += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        pwd += numbers.charAt(Math.floor(Math.random() * numbers.length));
        pwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
        for(let i = pwd.length; i < 12; i++){
            pwd += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        return pwd.split('').sort(()=>0.5 - Math.random()).join('');
    };
    const generatePassword = ()=>{
        const mainPwd = makeRandomPassword();
        const suggestions = [
            mainPwd,
            makeRandomPassword(),
            makeRandomPassword()
        ];
        setSuggestedPasswords(suggestions);
        setPassword(mainPwd);
        setShowPassword(true);
        setShowSuggestions(true);
    };
    // Load System Avatars when Step 3 or Gender changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step === 3) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/user/system-avatars?gender=${gender}`).then((res)=>{
                if (res.data?.success && Array.isArray(res.data.data)) {
                    setSystemAvatars(res.data.data);
                    if (res.data.data.length > 0) {
                        setSelectedAvatarUrl(res.data.data[0].avatarUrl);
                    }
                }
            }).catch(console.error);
        }
    }, [
        step,
        gender
    ]);
    // Generate 11-digit PingDart ID
    const generatePingdartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (c, s, ci)=>{
        setIsGeneratingId(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/generate-pingdart-id', {
                country: c,
                state: s,
                city: ci
            });
            if (res.data?.success) {
                setPingdartId(res.data.pingdartId);
                setCCode(res.data.countryCode);
                setSCode(res.data.stateCode);
                setCiCode(res.data.cityCode);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setIsGeneratingId(false);
        }
    }, []);
    // Pre-load location & ID in background
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (locationStatus === "idle") {
            detectCurrentLocation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Check for URL referral query parameter, stored referral, or deferred referral resolution
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initReferral = async ()=>{
            let code = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (code) {
                const upper = code.trim().toUpperCase();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStoredReferralCode"])(upper);
                setReferralCode(upper);
                setReferralApplied(true);
                return;
            }
            const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredReferralCode"])();
            if (stored) {
                setReferralCode(stored.trim().toUpperCase());
                setReferralApplied(true);
                return;
            }
            // If on native platform, attempt deferred resolution via IP/device matching
            const resolved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDeferredReferral"])();
            if (resolved) {
                setReferralCode(resolved.trim().toUpperCase());
                setReferralApplied(true);
            }
        };
        initReferral();
    }, []);
    const fetchLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (q)=>{
        setIsLoadingLocations(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/auth/locations?query=${encodeURIComponent(q)}`);
            if (res.data?.success) {
                setAvailableLocations(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching locations:", err);
        } finally{
            setIsLoadingLocations(false);
        }
    }, []);
    const detectCurrentLocation = async ()=>{
        setLocationStatus("detecting");
        let latitude = 17.3850;
        let longitude = 78.4867;
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {
        // Fallback
        }
        setLat(latitude);
        setLng(longitude);
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
                headers: {
                    "Accept-Language": "en"
                }
            });
            const data = await res.json();
            const addr = data.address || {};
            const city = addr.city || addr.town || addr.village || addr.county || addr.suburb || "";
            const state = addr.state || addr.region || "";
            const country = addr.country || "";
            if (city) setRegCity(city);
            if (state) setRegState(state);
            if (country) setRegCountry(country);
            const label = [
                city,
                state,
                country
            ].filter(Boolean).join(", ");
            setDetectedLocationLabel(label || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            generatePingdartId(country || regCountry, state || regState, city || regCity);
        } catch  {
            setDetectedLocationLabel(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
        setLocationStatus("detected");
    };
    const handleSelectLocation = (item)=>{
        setRegCity(item.cityName);
        setRegState(item.stateName);
        setRegCountry(item.countryName);
        if (item.lat) setLat(item.lat);
        if (item.lon) setLng(item.lon);
        generatePingdartId(item.countryName, item.stateName, item.cityName);
        setIsLocationModalOpen(false);
    };
    // Live validation for Domain (Step 2)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step === 2 && domainType === "custom" && domain && domain.includes('.')) {
            const timer = setTimeout(async ()=>{
                setDomainStatus("checking");
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/validate-org', {
                        domain
                    });
                    if (res.data?.valid !== false && res.data?.success !== false) {
                        setDomainStatus("available");
                    } else {
                        setDomainStatus("taken");
                    }
                } catch  {
                    setDomainStatus("taken");
                }
            }, 500);
            return ()=>clearTimeout(timer);
        } else {
            setDomainStatus(null);
        }
    }, [
        domain,
        domainType,
        step
    ]);
    // Live validation for Phone (Step 1)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== 1 || !phone) {
            setPhoneStatus(null);
            return;
        }
        const { digits, requiredDigits, isValid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPhoneDetails"])(phone);
        if (digits.length === 0) {
            setPhoneStatus(null);
            return;
        }
        if (digits.length < requiredDigits) {
            setPhoneStatus("invalid");
            return;
        }
        if (isValid) {
            const timer = setTimeout(async ()=>{
                setPhoneStatus("checking");
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/validate-org', {
                        phone: phone.trim()
                    });
                    if (res.data?.valid !== false && res.data?.success !== false) {
                        setPhoneStatus("available");
                    } else {
                        setPhoneStatus("taken");
                    }
                } catch (err) {
                    const errorMsg = err.response?.data?.error;
                    if (errorMsg && errorMsg.includes('already registered')) {
                        setPhoneStatus("taken");
                    } else {
                        setPhoneStatus("invalid");
                    }
                }
            }, 500);
            return ()=>clearTimeout(timer);
        } else {
            setPhoneStatus("invalid");
        }
    }, [
        phone,
        step
    ]);
    // Sync Country selection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phone) {
            const sortedCountries = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"]
            ].sort((a, b)=>b.dial_code.length - a.dial_code.length);
            const matched = sortedCountries.find((c)=>phone.startsWith(c.dial_code));
            if (matched) {
                setCountry(matched.name);
                setRegCountry(matched.name);
            }
        }
    }, [
        phone
    ]);
    // Live validation for Email (Step 2)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step === 2 && contactEmail && contactEmail.includes('@') && contactEmail.includes('.')) {
            const timer = setTimeout(async ()=>{
                setEmailStatus("checking");
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/validate-org', {
                        contactEmail
                    });
                    if (res.data?.valid !== false && res.data?.success !== false) {
                        setEmailStatus("available");
                    } else {
                        setEmailStatus("taken");
                    }
                } catch  {
                    setEmailStatus("taken");
                }
            }, 500);
            return ()=>clearTimeout(timer);
        } else {
            setEmailStatus(null);
        }
    }, [
        contactEmail,
        step
    ]);
    // Live validation for Username (Step 2)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step === 2 && adminUsername && domain) {
            const timer = setTimeout(async ()=>{
                setUsernameStatus("checking");
                try {
                    const email = `${adminUsername}@${domain}`;
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/auth/check-username?email=${email}`);
                    if (res.data.available) {
                        setUsernameStatus("available");
                        setUsernameSuggestions([]);
                    } else {
                        setUsernameStatus("taken");
                        setUsernameSuggestions(res.data.suggestions || []);
                    }
                } catch  {
                    setUsernameStatus(null);
                }
            }, 500);
            return ()=>clearTimeout(timer);
        }
    }, [
        adminUsername,
        domain,
        step
    ]);
    const handleNextStep1 = async (e)=>{
        e.preventDefault();
        setLocalError(null);
        const { requiredDigits, isValid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPhoneDetails"])(phone);
        if (!isValid) {
            setPhoneStatus("invalid");
            setLocalError(`Please enter a valid ${requiredDigits}-digit phone number for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPhoneDetails"])(phone).country.name}.`);
            return;
        }
        if (phoneStatus === "taken") {
            setLocalError("This phone number is already registered.");
            return;
        }
        setIsValidatingStep(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/validate-org', {
                phone: phone.trim()
            });
            if (res.data?.valid === false || res.data?.success === false) {
                setLocalError(res.data?.error || "Validation failed.");
                return;
            }
            // Auto default domain if empty
            if (!domain) {
                setDomain("pingdart.com");
                setDomainType("pingdart");
            }
            // Auto-suggest username
            if (!adminUsername) {
                let defaultUser = "";
                if (accountType === "business" && businessName) {
                    defaultUser = businessName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15);
                }
                if (!defaultUser) {
                    defaultUser = (firstName + (lastName ? `.${lastName}` : '')).toLowerCase().replace(/[^a-z0-9.]/g, '').slice(0, 15);
                }
                setAdminUsername(defaultUser);
            }
            setStep(2);
        } catch (err) {
            setLocalError(err.response?.data?.error || "Validation failed.");
        } finally{
            setIsValidatingStep(false);
        }
    };
    const handleNextStep2 = async (e)=>{
        e.preventDefault();
        setLocalError(null);
        if (emailStatus === "taken") {
            setLocalError("This contact email is already registered.");
            return;
        }
        if (domainType === "custom" && domainStatus === "taken") {
            setLocalError("This domain is already registered.");
            return;
        }
        if (usernameStatus === "taken") {
            setLocalError("This username is already taken. Please pick another.");
            return;
        }
        setIsValidatingStep(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/auth/validate-org', {
                contactEmail,
                domain: domainType === "custom" ? domain : undefined
            });
            if (res.data?.valid === false || res.data?.success === false) {
                setLocalError(res.data?.error || "Validation failed.");
                return;
            }
            setStep(3);
        } catch (err) {
            setLocalError(err.response?.data?.error || "Validation failed.");
        } finally{
            setIsValidatingStep(false);
        }
    };
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };
    const handleRegister = async (e)=>{
        e.preventDefault();
        setLocalError(null);
        const fullName = accountType === "business" ? businessName ? `${businessName}`.trim() : `${firstName} ${lastName}`.trim() : `${firstName} ${lastName}`.trim();
        const adminEmail = `${adminUsername}@${domain}`;
        const locationStr = businessAddress ? `${businessAddress}, ${regCity}, ${regState}, ${regCountry}` : `${regCity}, ${regState}, ${regCountry}`;
        const isCameraAvatar = dpSource === "camera_upload" && avatarPreview?.startsWith("data:");
        const avatarForRegister = isCameraAvatar ? undefined : dpSource === "system_avatar" ? selectedAvatarUrl : undefined;
        setSubmitStage("creating");
        const success = await register(fullName, domain, adminEmail, password, phone, contactEmail, locationStr, {
            avatar: avatarForRegister,
            gender,
            accountType,
            currencyCode: accountCurrency,
            currencySymbol: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][accountCurrency]?.symbol || "$",
            isCurrencyLocked: true,
            businessName: accountType === "business" ? businessName : undefined,
            businessCategory: accountType === "business" ? businessCategory : undefined,
            businessTimings: accountType === "business" ? businessTimings : undefined,
            businessProducts: accountType === "business" ? businessProducts : undefined,
            businessWebsite: accountType === "business" ? businessWebsite : undefined,
            businessAddress: accountType === "business" ? businessAddress : undefined,
            businessDescription: accountType === "business" ? businessDescription : undefined,
            referralCode: referralCode.trim() ? referralCode.trim().toUpperCase() : undefined
        });
        if (success) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStoredReferralCode"])();
            setSubmitStage("provisioning");
            await new Promise((r)=>setTimeout(r, 600));
            setSubmitStage("logging_in");
            const loginRes = await login(adminEmail, password);
            if (loginRes && 'success' in loginRes && loginRes.success) {
                if (isCameraAvatar && avatarPreview) {
                    setSubmitStage("uploading_avatar");
                    try {
                        const blob = await fetch(avatarPreview).then((r)=>r.blob());
                        const file = new File([
                            blob
                        ], 'avatar.jpg', {
                            type: 'image/jpeg'
                        });
                        const formData = new FormData();
                        formData.append('avatar', file);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/user/avatar', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });
                    } catch (avErr) {
                        console.warn('[Register] Post-login avatar upload note:', avErr);
                    }
                }
                setSubmitStage("success");
                await new Promise((r)=>setTimeout(r, 400));
                setSecurityModalOpen(true);
            } else {
                const queryRedirect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
                router.replace(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/login?registered=true");
            }
        } else {
            setSubmitStage("idle");
        }
    };
    const handleSecurityOnboardingComplete = ()=>{
        setSecurityModalOpen(false);
        let finalTarget = "/user";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        router.replace(finalTarget);
    };
    // ────────────── NATIVE MOBILE APP VIEW (iOS & Android Mockup) ──────────────
    if (isNative) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col min-h-[100dvh] bg-[#F8FAFC] dark:bg-[#0b141a] font-sans select-none transition-colors duration-300 overflow-x-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-md px-4 pt-[calc(0.75rem+env(safe-area-inset-top,12px))] pb-3.5 shrink-0 sticky top-0 z-40 overflow-hidden select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 918,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-black/15 blur-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 919,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 917,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                if (step > 1) {
                                                    setStep(step - 1);
                                                } else {
                                                    router.push("/login");
                                                }
                                            },
                                            className: "w-8 h-8 flex items-center justify-center text-white transition-all cursor-pointer shrink-0",
                                            "aria-label": "Back",
                                            title: "Back",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 938,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-[50px] bg-white/20 backdrop-blur-md border border-white/30 p-1 flex items-center justify-center shadow-xs shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo_light.png",
                                                alt: settings.appLogoText || appName,
                                                width: 22,
                                                height: 22,
                                                style: {
                                                    width: "auto",
                                                    height: "auto"
                                                },
                                                className: "object-contain",
                                                priority: true,
                                                onError: (e)=>{
                                                    e.currentTarget.src = "/logo.png";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-black tracking-wider uppercase leading-none text-white font-sans",
                                                    children: settings.appLogoText || appName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-white/75 font-bold uppercase tracking-wider mt-0.5",
                                                    children: [
                                                        "Step ",
                                                        step,
                                                        " of 3 • Register"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 956,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 924,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>router.push("/login"),
                                    className: "px-3.5 py-1.5 text-white font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md shadow-xs cursor-pointer flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 972,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 973,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 967,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 922,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/register/page.tsx",
                    lineNumber: 915,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative px-6 pt-4 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[230px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[25px] font-black text-slate-900 dark:text-white leading-[1.18] tracking-tight",
                                    children: [
                                        "Create Your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 982,
                                            columnNumber: 26
                                        }, this),
                                        settings.appLogoText || appName,
                                        " Account"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 981,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12.5px] text-slate-400 dark:text-slate-400 mt-1 font-medium",
                                    children: [
                                        "Step ",
                                        step,
                                        " of 3: ",
                                        step === 1 ? "Identity & Phone" : step === 2 ? "Email & Domain" : "Password & Finish"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 985,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 980,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 -top-2 pointer-events-none select-none w-36 h-36",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-full h-full",
                                viewBox: "0 0 160 160",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 130 C 45 145, 80 120, 75 90 C 70 65, 45 75, 55 95 C 65 115, 105 110, 130 55",
                                        stroke: "#818CF8",
                                        strokeWidth: "2",
                                        strokeDasharray: "4 4",
                                        strokeLinecap: "round",
                                        opacity: "0.65"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 993,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M45 42 Q 45 47 40 47 Q 45 47 45 52 Q 45 47 50 47 Q 45 47 45 42 Z",
                                        fill: "#6366F1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M142 85 Q 142 89 138 89 Q 142 89 142 93 Q 142 89 146 89 Q 142 89 142 85 Z",
                                        fill: "#818CF8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1003,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M110 28 Q 110 32 106 32 Q 110 32 110 36 Q 110 32 114 32 Q 110 32 110 28 Z",
                                        fill: "#60A5FA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        transform: "translate(90, 12) rotate(12)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0 35 L48 0 L32 48 L22 36 Z",
                                                fill: "rgba(79, 70, 229, 0.12)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1007,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0 35 L48 0 L22 36 Z",
                                                fill: "url(#planeGrad1_m)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M48 0 L32 48 L22 36 Z",
                                                fill: "url(#planeGrad2_m)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 36 L24 44 L16 38 Z",
                                                fill: "#4338CA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "planeGrad1_m",
                                                x1: "0",
                                                y1: "0",
                                                x2: "48",
                                                y2: "36",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        stopColor: "#93C5FD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1014,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0.6",
                                                        stopColor: "#6366F1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1015,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "1",
                                                        stopColor: "#4F46E5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "planeGrad2_m",
                                                x1: "22",
                                                y1: "0",
                                                x2: "48",
                                                y2: "48",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        stopColor: "#60A5FA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "1",
                                                        stopColor: "#3B82F6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1020,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 992,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 991,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/register/page.tsx",
                    lineNumber: 979,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-6 pb-[calc(1.75rem+env(safe-area-inset-bottom,16px))] overflow-y-auto",
                    children: [
                        step > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setStep(step - 1),
                            className: "mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Back to Step ",
                                        step - 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1031,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-2.5 mb-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 16,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1042,
                            columnNumber: 13
                        }, this),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleNextStep1,
                            className: "space-y-4 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex p-1 bg-slate-100/90 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setAccountType("personal"),
                                            className: `flex-1 py-2.5 text-[13px] font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${accountType === "personal" ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-500/25 scale-[1.01]" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Personal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1062,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1053,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setAccountType("business"),
                                            className: `flex-1 py-2.5 text-[13px] font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${accountType === "business" ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-500/25 scale-[1.01]" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1072,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Business"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1073,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1052,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: openGallery,
                                                    className: "w-13 h-13 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 cursor-pointer overflow-hidden shadow-2xs",
                                                    children: avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: avatarPreview,
                                                        alt: "Avatar",
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1087,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 pr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13.5px] font-bold text-slate-900 dark:text-slate-100 block",
                                                            children: accountType === "business" ? "Business Logo (Optional)" : "Profile Photo (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11.5px] text-slate-400 dark:text-slate-500 block leading-tight mt-0.5",
                                                            children: "Upload a photo to personalize your account."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1094,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1079,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openGallery,
                                            className: "px-4 py-2 rounded-full bg-[#EFF6FF] hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-[#2563EB] dark:text-blue-400 font-bold text-[12px] border border-[#BFDBFE] dark:border-blue-900/40 shrink-0 transition-colors cursor-pointer shadow-2xs",
                                            children: avatarPreview ? "Change Photo" : "Upload Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 15
                                }, this),
                                accountType === "business" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 bg-blue-50/50 dark:bg-blue-950/20 p-3.5 rounded-2xl border border-blue-100 dark:border-blue-900/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12.5px] font-bold text-blue-900 dark:text-blue-300 mb-1 block",
                                                    children: "Business Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: businessName,
                                                    onChange: (e)=>setBusinessName(e.target.value),
                                                    placeholder: "e.g. Acme Technologies",
                                                    className: "w-full h-[50px] px-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1116,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12.5px] font-bold text-blue-900 dark:text-blue-300 mb-1 block",
                                                    children: "Business Category *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: businessCategory,
                                                    onChange: (e)=>setBusinessCategory(e.target.value),
                                                    className: "w-full h-[50px] px-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500/20",
                                                    children: BUSINESS_CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat,
                                                            children: cat
                                                        }, cat, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1135,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1125,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[13px] font-bold text-slate-900 dark:text-slate-100 mb-1.5 block",
                                            children: accountType === "business" ? "Owner / Contact Name *" : "Your Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1149,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: firstName,
                                                            onChange: (e)=>setFirstName(e.target.value),
                                                            placeholder: "First Name",
                                                            className: "w-full h-[50px] pl-10 pr-3 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1152,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1162,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: lastName,
                                                            onChange: (e)=>setLastName(e.target.value),
                                                            placeholder: "Last Name",
                                                            className: "w-full h-[50px] pl-10 pr-3 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1165,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[13px] font-bold text-slate-900 dark:text-slate-100 mb-1.5 block",
                                            children: "Phone Number *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhoneInput"], {
                                            value: phone,
                                            onChange: setPhone,
                                            onCountryChange: handlePhoneCountryChange,
                                            required: true,
                                            status: phoneStatus
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[13px] font-bold text-slate-900 dark:text-slate-100",
                                                    children: "Referral Code (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 19
                                                }, this),
                                                referralCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1193,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Bonus Applied"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1192,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1199,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: referralCode,
                                                    onChange: (e)=>{
                                                        const val = e.target.value.toUpperCase();
                                                        setReferralCode(val);
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStoredReferralCode"])(val);
                                                        setReferralApplied(Boolean(val));
                                                    },
                                                    placeholder: "E.G. P0T1KX92AB",
                                                    className: "w-full h-[50px] pl-10 pr-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider outline-none placeholder:font-sans placeholder:tracking-normal placeholder:font-normal placeholder:text-slate-400 uppercase focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 17
                                        }, this),
                                        referralCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-teal-600 dark:text-teal-400 mt-1 px-1 font-medium",
                                            children: "🎁 Referral bonus active! 50 bonus PingCoins will be credited upon registration."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1186,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[13px] font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5",
                                                    children: "Account Currency *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "ⓘ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1228,
                                                            columnNumber: 21
                                                        }, this),
                                                        " One-Time Choice"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: accountCurrency,
                                                    onChange: (e)=>setAccountCurrency(e.target.value),
                                                    className: "w-full h-[50px] px-4 pr-10 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer appearance-none transition-all shadow-2xs",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c.code,
                                                            children: [
                                                                c.flag,
                                                                " ",
                                                                c.code,
                                                                " (",
                                                                c.symbol,
                                                                ") — ",
                                                                c.name,
                                                                " (",
                                                                c.country,
                                                                ")"
                                                            ]
                                                        }, c.code, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1238,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowDown01Icon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1244,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5 p-3 rounded-2xl bg-[#FFFBEB] dark:bg-amber-950/30 border border-[#FEF3C7] dark:border-amber-900/40 flex items-center gap-2.5 text-[11.5px] text-[#92400E] dark:text-amber-300 font-medium leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base shrink-0",
                                                    children: "🔒"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1250,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Account operating currency is locked permanently upon registration."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isStep1Disabled,
                                    className: "w-full h-[52px] bg-gradient-to-r from-[#5D5FEF] via-[#4F46E5] to-[#3B82F6] hover:opacity-95 disabled:bg-none disabled:bg-[#A5C4FF] dark:disabled:bg-slate-800 disabled:text-white/90 text-white font-bold rounded-full shadow-lg shadow-indigo-500/25 transition-all text-[14px] flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:cursor-not-allowed",
                                    children: isValidatingStep ? "Verifying..." : "Next: Email & Domain →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1050,
                            columnNumber: 13
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleNextStep2,
                            className: "space-y-4 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[13px] font-bold text-slate-900 dark:text-slate-100 mb-1.5 block",
                                            children: "Email Setup"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex p-1 bg-slate-100/90 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setDomainType("pingdart");
                                                        setDomain("pingdart.com");
                                                    },
                                                    className: `flex-1 py-2.5 text-[13px] font-bold rounded-xl transition-all ${domainType === 'pingdart' ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-400'}`,
                                                    children: "@pingdart.com (Free)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setDomainType("custom");
                                                        setDomain("");
                                                        if (!adminUsername || adminUsername === "username") {
                                                            setAdminUsername("admin");
                                                        }
                                                    },
                                                    className: `flex-1 py-2.5 text-[13px] font-bold rounded-xl transition-all ${domainType === 'custom' ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-400'}`,
                                                    children: "Custom Domain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1269,
                                    columnNumber: 15
                                }, this),
                                domainType === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[13px] font-bold text-slate-900 dark:text-slate-100 mb-1.5 block",
                                            children: "Your Domain Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: domain,
                                                    onChange: (e)=>setDomain(e.target.value),
                                                    placeholder: "acme.com",
                                                    className: "w-full h-[50px] px-4 pr-10 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 21
                                                }, this),
                                                domainStatus === "available" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                    size: 18,
                                                    className: "text-green-500 absolute right-3.5 top-1/2 -translate-y-1/2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1316,
                                                    columnNumber: 54
                                                }, this),
                                                domainStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                    size: 18,
                                                    className: "text-red-500 absolute right-3.5 top-1/2 -translate-y-1/2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1317,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 19
                                        }, this),
                                        domainStatus === "available" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 px-1",
                                            children: "✓ Domain available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1319,
                                            columnNumber: 52
                                        }, this),
                                        domainStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-red-500 font-bold mt-1 px-1",
                                            children: "Domain already registered"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1305,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[13px] font-bold text-slate-900 dark:text-slate-100",
                                                    children: "Choose Username / Prefix *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 19
                                                }, this),
                                                domainType === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400",
                                                    children: "Admin Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center w-full h-[50px] px-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: adminUsername,
                                                    onChange: (e)=>setAdminUsername(e.target.value.replace(/@.*$/, '')),
                                                    placeholder: "username",
                                                    className: "bg-transparent text-slate-900 dark:text-white text-xs font-semibold outline-none w-full h-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 dark:text-slate-500 text-xs font-bold shrink-0",
                                                    children: [
                                                        "@",
                                                        domain || 'pingdart.com'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-1.5 mt-2 px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[12px] font-bold text-indigo-600 dark:text-indigo-400",
                                                    children: "⚡ Suggestions:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 19
                                                }, this),
                                                [
                                                    "admin",
                                                    "info",
                                                    "contact",
                                                    "support",
                                                    "hello",
                                                    ...firstName ? [
                                                        firstName.toLowerCase().replace(/[^a-z0-9]/g, '')
                                                    ] : []
                                                ].filter((v, i, a)=>v && a.indexOf(v) === i).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setAdminUsername(preset),
                                                        className: `text-[12px] px-2.5 py-1 rounded-xl font-mono font-bold transition-all ${adminUsername === preset ? "bg-[#4F46E5] text-white shadow-xs" : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800"}`,
                                                        children: preset
                                                    }, preset, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1349,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1344,
                                            columnNumber: 17
                                        }, this),
                                        usernameStatus === "available" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 px-1",
                                            children: "✓ Username available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1363,
                                            columnNumber: 52
                                        }, this),
                                        usernameStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-red-500 font-bold mt-1 px-1",
                                            children: "Username taken. Try another."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1364,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[13px] font-bold text-slate-900 dark:text-slate-100 mb-1.5 block",
                                            children: "Recovery Contact Email *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1368,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    value: contactEmail,
                                                    onChange: (e)=>setContactEmail(e.target.value),
                                                    placeholder: "e.g. yourname@gmail.com",
                                                    className: "w-full h-[50px] pl-10 pr-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1373,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1367,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isStep2Disabled,
                                    className: "w-full h-[52px] bg-gradient-to-r from-[#5D5FEF] via-[#4F46E5] to-[#3B82F6] hover:opacity-95 disabled:bg-none disabled:bg-[#A5C4FF] dark:disabled:bg-slate-800 disabled:text-white/90 text-white font-bold rounded-full shadow-lg shadow-indigo-500/25 transition-all text-[14px] flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:cursor-not-allowed",
                                    children: isValidatingStep ? "Verifying..." : "Next: Password & Setup →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1384,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1268,
                            columnNumber: 13
                        }, this),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleRegister,
                            className: "space-y-4 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[13px] font-bold text-slate-900 dark:text-slate-100",
                                                    children: "Set Password *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1399,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: generatePassword,
                                                    className: "text-[12px] font-bold text-indigo-600 dark:text-indigo-400 underline",
                                                    children: "⚡ Suggest Strong"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1400,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1398,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1406,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    required: true,
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    placeholder: "••••••••",
                                                    className: "w-full h-[50px] pl-10 pr-11 rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-mono outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1421,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1421,
                                                        columnNumber: 70
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1416,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1404,
                                            columnNumber: 17
                                        }, this),
                                        password.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-[11px] font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: "Strength:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1428,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: pwdStrength.textColor,
                                                            children: pwdStrength.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1429,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1427,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full transition-all ${pwdStrength.color}`,
                                                        style: {
                                                            width: pwdStrength.percentage
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1432,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1431,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1426,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1397,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/70 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-800 text-center space-y-1 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block",
                                            children: "Assigned 11-Digit PingDart ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-black text-indigo-700 dark:text-indigo-300 font-mono tracking-widest",
                                            children: pingdartId || "91405000001"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1443,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1.5 text-[11.5px] text-slate-600 dark:text-slate-300 pt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                    size: 14,
                                                    className: "text-indigo-600 dark:text-indigo-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1447,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: detectedLocationLabel || `${regCity}, ${regState}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsLocationModalOpen(true),
                                                    className: "text-indigo-600 dark:text-indigo-400 font-bold underline ml-1 cursor-pointer",
                                                    children: "Change City 📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1449,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-start gap-2.5 cursor-pointer select-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                required: true,
                                                checked: agreeTerms,
                                                onChange: (e)=>setAgreeTerms(e.target.checked),
                                                className: "mt-0.5 w-4 h-4 rounded text-blue-600 border-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1461,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug",
                                                children: "I agree to the Terms of Service & Privacy Policy."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1468,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1460,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !isStep3Valid || isLoading,
                                    className: "w-full h-[52px] bg-gradient-to-r from-[#5D5FEF] via-[#4F46E5] to-[#3B82F6] hover:opacity-95 disabled:bg-none disabled:bg-[#A5C4FF] dark:disabled:bg-slate-800 disabled:text-white/90 text-white font-bold rounded-full shadow-lg shadow-indigo-500/25 transition-all text-[14px] flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:cursor-not-allowed",
                                    children: isLoading ? "Creating Account..." : "Create Account & Launch"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1474,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1396,
                            columnNumber: 13
                        }, this),
                        isLocationModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                        className: "text-indigo-600 dark:text-indigo-400",
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Select City & Location"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1489,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsLocationModalOpen(false),
                                                className: "text-gray-400 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1492,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                    size: 16,
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search city name...",
                                                    value: locationQuery,
                                                    onChange: (e)=>setLocationQuery(e.target.value),
                                                    className: "w-full h-[46px] pl-9 pr-3 bg-white dark:bg-gray-800 rounded-xl text-xs font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1503,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1501,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1500,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-y-auto p-3 flex-1 space-y-1",
                                        children: [
                                            locationQuery.trim().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSelectLocation({
                                                        cityName: locationQuery.trim(),
                                                        stateName: regState || "Telangana",
                                                        countryName: regCountry || "India"
                                                    }),
                                                className: "w-full flex items-center justify-between p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-left cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-xs text-indigo-900 dark:text-indigo-200",
                                                        children: [
                                                            'Use custom city: "',
                                                            locationQuery.trim(),
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-indigo-600",
                                                        children: "Select"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1526,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1514,
                                                columnNumber: 21
                                            }, this),
                                            availableLocations.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleSelectLocation(item),
                                                    className: "w-full flex items-center justify-between p-3 rounded-xl text-left hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold text-xs text-gray-900 dark:text-white",
                                                                    children: item.cityName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1537,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-gray-500",
                                                                    children: [
                                                                        item.stateName,
                                                                        ", ",
                                                                        item.countryName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1538,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1536,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-mono font-bold text-gray-500",
                                                            children: [
                                                                item.countryCode,
                                                                "-",
                                                                item.stateCode,
                                                                "-",
                                                                item.cityCode
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1540,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, item.id || `${item.cityName}-${item.stateName}`, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1530,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1487,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1486,
                            columnNumber: 13
                        }, this),
                        cropModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 z-[150] bg-black/80 backdrop-blur-md flex items-center justify-center p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-sm overflow-hidden flex flex-col items-center p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex items-center justify-between border-b border-slate-100 pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-extrabold text-slate-900",
                                                children: "Crop Avatar Photo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1555,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCropModalOpen(false),
                                                className: "text-slate-400 p-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1557,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1556,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1554,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-64 h-64 rounded-full overflow-hidden bg-slate-900 border-4 border-blue-600 shadow-2xl",
                                        children: rawImageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: rawImageSrc,
                                            alt: "Crop",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1562,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1560,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 w-full pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCropModalOpen(false),
                                                className: "flex-1 py-3 bg-slate-100 text-slate-700 font-extrabold rounded-full text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1566,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleApplyCrop,
                                                className: "flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-full text-xs",
                                                children: "Apply & Crop ✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1565,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1553,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1552,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$SecurityOnboardingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SecurityOnboardingModal"], {
                            isOpen: securityModalOpen,
                            userEmail: contactEmail || `${adminUsername}@${domain}`,
                            userPassword: password,
                            avatarUrl: avatarPreview || selectedAvatarUrl,
                            onComplete: handleSecurityOnboardingComplete
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1585,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/register/page.tsx",
                    lineNumber: 1028,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/register/page.tsx",
            lineNumber: 913,
            columnNumber: 7
        }, this);
    }
    // ────────────── CLEAN, EASY DESKTOP VIEW ──────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex bg-gray-50 dark:bg-gray-950 font-sans selection:bg-indigo-500 selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex flex-col w-[52%] relative overflow-hidden text-white p-8 xl:p-12 justify-between bg-[#0B0F19]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/30 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1603,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[40%] -right-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1605,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/register/page.tsx",
                        lineNumber: 1602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: settings.appLogoDark || settings.appLogoDarkImage || "/logo.png",
                                alt: `${settings.appLogoText || ("TURBOPACK compile-time value", "PingDart") || "PingDart"} Logo`,
                                width: 40,
                                height: 40,
                                style: {
                                    width: "40px",
                                    height: "40px"
                                },
                                className: "h-10 w-auto object-contain",
                                priority: true,
                                onError: (e)=>{
                                    e.currentTarget.src = "/logo.png";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[34px] xl:text-[38px] font-bold text-[#ffffff]",
                                children: settings.appLogoText || ("TURBOPACK compile-time value", "PingDart") || "PingDart"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1619,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/register/page.tsx",
                        lineNumber: 1608,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-indigo-200 mb-4 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                        size: 14,
                                        className: "text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1626,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Fast & Modern Cloud Messaging"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1627,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1625,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl xl:text-5xl font-bold mb-4 leading-[1.15] tracking-tight",
                                children: [
                                    "Take control of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1630,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400",
                                        children: "your communications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1631,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1633,
                                        columnNumber: 21
                                    }, this),
                                    "in minutes."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1629,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-base leading-relaxed mb-6 max-w-lg",
                                children: "Personal chats, business channels, custom domains, and end-to-end encrypted messaging designed for high speed."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1636,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1 p-3.5 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1642,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-white",
                                                children: "Full Privacy Control"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1645,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400",
                                                children: "Advanced 2FA and privacy settings."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1646,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1641,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1 p-3.5 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GlobeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeIcon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1649,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-white",
                                                children: "Custom Domains"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1652,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400",
                                                children: "Connect your custom domain easily."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1653,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1648,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1640,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/register/page.tsx",
                        lineNumber: 1624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between text-xs text-gray-500 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " PingDart. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1659,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "hover:text-gray-300 transition-colors",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1661,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "hover:text-gray-300 transition-colors",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 1662,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 1660,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/register/page.tsx",
                        lineNumber: 1658,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/register/page.tsx",
                lineNumber: 1601,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-[48%] flex flex-col justify-center items-center p-6 sm:p-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[460px] relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden flex items-center justify-between pb-4 mb-3 border-b border-gray-200 dark:border-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold p-1 shadow-md shadow-indigo-500/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: settings.appLogoImage || "/logo.png",
                                                alt: settings.appLogoText || appName,
                                                width: 22,
                                                height: 22,
                                                className: "w-5 h-5 object-contain",
                                                onError: (e)=>{
                                                    e.currentTarget.style.display = 'none';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1678,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1677,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-base tracking-wider text-gray-900 dark:text-white uppercase",
                                            children: settings.appLogoText || appName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1687,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1676,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline",
                                    children: "Sign In →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1691,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1675,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-900 shadow-xl shadow-gray-200/50 dark:shadow-black/50 rounded-3xl p-7 sm:p-8 border border-gray-100 dark:border-gray-800",
                            children: [
                                submitStage === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight",
                                                    children: "Create an account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1703,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                                    children: [
                                                        "Step ",
                                                        step,
                                                        " of 3: ",
                                                        step === 1 ? "Identity & Contact" : step === 2 ? "Email & Domain Setup" : "Password & Finish"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1704,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1.5 mt-2.5",
                                                    children: [
                                                        1,
                                                        2,
                                                        3
                                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `h-1.5 rounded-full transition-all duration-300 ${s === step ? "w-8 bg-indigo-600" : s < step ? "w-4 bg-emerald-500" : "w-4 bg-gray-200 dark:bg-gray-700"}`
                                                        }, s, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1714,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1712,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1702,
                                            columnNumber: 17
                                        }, this),
                                        step > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStep(step - 1),
                                            className: "p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 1727,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1723,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1701,
                                    columnNumber: 15
                                }, this),
                                error && submitStage === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 p-3 rounded-[50px] bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs flex items-center gap-2 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                            size: 16,
                                            className: "shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1735,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1736,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1734,
                                    columnNumber: 15
                                }, this),
                                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleNextStep1,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",
                                                    children: "Account Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1745,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex p-1 bg-gray-100 dark:bg-gray-800 rounded-[50px] border border-gray-200/60 dark:border-gray-700/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setAccountType("personal"),
                                                            className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${accountType === "personal" ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1755,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Personal"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1747,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setAccountType("business"),
                                                            className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${accountType === "business" ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1765,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Business"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1757,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1746,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1744,
                                            columnNumber: 17
                                        }, this),
                                        accountType === "business" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-[10px] bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[11px] font-bold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider mb-1",
                                                            children: "Business Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1774,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: businessName,
                                                            onChange: (e)=>setBusinessName(e.target.value),
                                                            placeholder: "e.g. Acme Technologies",
                                                            className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1775,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1773,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[11px] font-bold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider mb-1",
                                                            children: "Category / Industry *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1785,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: businessCategory,
                                                            onChange: (e)=>setBusinessCategory(e.target.value),
                                                            className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 font-semibold cursor-pointer",
                                                            children: BUSINESS_CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: cat,
                                                                    children: cat
                                                                }, cat, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1792,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1786,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1784,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowExtraBusinessFields(!showExtraBusinessFields),
                                                            className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1",
                                                            children: showExtraBusinessFields ? "− Hide Working Hours & Website" : "+ Add Working Hours & Website (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1799,
                                                            columnNumber: 23
                                                        }, this),
                                                        showExtraBusinessFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-2.5 space-y-2.5 animate-fadeIn",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[14px] font-bold text-gray-500 uppercase tracking-wider mb-1",
                                                                            children: "Working Hours"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                            lineNumber: 1810,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: businessTimings,
                                                                            onChange: (e)=>setBusinessTimings(e.target.value),
                                                                            placeholder: "09:00 AM - 06:00 PM (Mon-Sat)",
                                                                            className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none font-medium"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                            lineNumber: 1811,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1809,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[14px] font-bold text-gray-500 uppercase tracking-wider mb-1",
                                                                            children: "Website"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                            lineNumber: 1820,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "url",
                                                                            value: businessWebsite,
                                                                            onChange: (e)=>setBusinessWebsite(e.target.value),
                                                                            placeholder: "https://acme.com",
                                                                            className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none font-medium"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                            lineNumber: 1821,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1819,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1808,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1798,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1772,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3.5 p-3 rounded-[10px] bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group cursor-pointer",
                                                    onClick: openGallery,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-13 h-13 rounded-full overflow-hidden border-2 border-indigo-500/50 bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center shadow-xs",
                                                            children: avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: avatarPreview,
                                                                alt: "Avatar",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1840,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl font-black text-indigo-600 dark:text-indigo-400",
                                                                children: (firstName[0] || (accountType === 'business' ? businessName[0] : '') || "👤").toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1842,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1838,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1848,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1847,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1837,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-bold text-gray-900 dark:text-white",
                                                            children: accountType === "business" ? "Business Logo / Avatar" : "Profile Photo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1852,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-gray-500 dark:text-gray-400",
                                                            children: avatarPreview ? "Photo ready ✓" : "Upload your picture (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1855,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2.5 mt-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: openGallery,
                                                                    className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline",
                                                                    children: avatarPreview ? "Change Photo" : "Upload Photo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1859,
                                                                    columnNumber: 23
                                                                }, this),
                                                                avatarPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setAvatarPreview("");
                                                                        setSelectedAvatarUrl("");
                                                                    },
                                                                    className: "text-[11px] font-bold text-red-500 hover:underline",
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1867,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1858,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1851,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1836,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5",
                                                    children: accountType === "business" ? "Owner / Contact Name *" : "Your Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1881,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: firstName,
                                                            onChange: (e)=>setFirstName(e.target.value),
                                                            placeholder: "First Name",
                                                            className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none font-medium focus:ring-2 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1885,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: lastName,
                                                            onChange: (e)=>setLastName(e.target.value),
                                                            placeholder: "Last Name",
                                                            className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none font-medium focus:ring-2 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1893,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1884,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1880,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5",
                                                    children: "Phone Number *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1906,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhoneInput"], {
                                                    value: phone,
                                                    onChange: setPhone,
                                                    onCountryChange: handlePhoneCountryChange,
                                                    required: true,
                                                    status: phoneStatus
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1907,
                                                    columnNumber: 19
                                                }, this),
                                                phoneStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-red-500 mt-1 font-medium",
                                                    children: "This phone number is already registered."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1908,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1905,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-1 mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider",
                                                            children: "Referral Code (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1914,
                                                            columnNumber: 21
                                                        }, this),
                                                        referralCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1919,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Bonus Active"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1918,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1913,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1925,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1924,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: referralCode,
                                                            onChange: (e)=>{
                                                                const val = e.target.value.toUpperCase();
                                                                setReferralCode(val);
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$deferredReferralService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStoredReferralCode"])(val);
                                                                setReferralApplied(Boolean(val));
                                                            },
                                                            placeholder: "e.g. PD7KX92AB",
                                                            className: "w-full h-[50px] pl-10 pr-4 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs text-xs--line-height font-mono font-bold tracking-wider outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 uppercase focus:ring-2 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1927,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1923,
                                                    columnNumber: 19
                                                }, this),
                                                referralCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-teal-600 dark:text-teal-400 mt-1 px-1 font-medium",
                                                    children: "🎁 50 bonus PingCoins will be credited to your wallet upon registration."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1941,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1912,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-1 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                                                    size: 14,
                                                                    className: "text-indigo-600 dark:text-indigo-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1951,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Account Currency *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1950,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 1955,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " One-Time Choice"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1954,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1949,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: accountCurrency,
                                                        onChange: (e)=>setAccountCurrency(e.target.value),
                                                        className: "w-full h-[50px] px-4 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs font-semibold outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.code,
                                                                children: [
                                                                    c.flag,
                                                                    " ",
                                                                    c.code,
                                                                    " (",
                                                                    c.symbol,
                                                                    ") — ",
                                                                    c.name,
                                                                    " (",
                                                                    c.country,
                                                                    ")"
                                                                ]
                                                            }, c.code, true, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 1965,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 1959,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1958,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 px-2 mt-1",
                                                    children: "🔒 Business ledger currency is locked permanently upon registration."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1971,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1948,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isStep1Disabled,
                                            className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-[50px] shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider disabled:opacity-50 mt-2",
                                            children: isValidatingStep ? "Verifying..." : "Next: Email & Domain →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1976,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1742,
                                    columnNumber: 15
                                }, this) : step === 2 ? /* STEP 2: DOMAIN & EMAIL SETUP */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleNextStep2,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",
                                                    children: "Email Setup"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1988,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex p-1 bg-gray-100 dark:bg-gray-800 rounded-[50px] border border-gray-200/60 dark:border-gray-700/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setDomainType("pingdart");
                                                                setDomain("pingdart.com");
                                                            },
                                                            className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${domainType === 'pingdart' ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500'}`,
                                                            children: "@pingdart.com (Free)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 1990,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setDomainType("custom");
                                                                setDomain("");
                                                                if (!adminUsername || adminUsername === "username") {
                                                                    setAdminUsername("admin");
                                                                }
                                                            },
                                                            className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${domainType === 'custom' ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500'}`,
                                                            children: "Custom Domain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2000,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 1989,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 1987,
                                            columnNumber: 17
                                        }, this),
                                        domainType === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5",
                                                    children: "Your Domain Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2018,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: domain,
                                                            onChange: (e)=>setDomain(e.target.value),
                                                            placeholder: "acme.com",
                                                            className: "w-full h-[50px] px-4 pr-11 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2020,
                                                            columnNumber: 23
                                                        }, this),
                                                        domainStatus === "available" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                            size: 16,
                                                            className: "text-green-500 absolute right-3 top-1/2 -translate-y-1/2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2028,
                                                            columnNumber: 56
                                                        }, this),
                                                        domainStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                            size: 16,
                                                            className: "text-red-500 absolute right-3 top-1/2 -translate-y-1/2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2029,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2019,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2017,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider",
                                                            children: "Choose Username / Prefix *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2036,
                                                            columnNumber: 21
                                                        }, this),
                                                        domainType === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[14px] text-indigo-600 dark:text-indigo-400 font-bold",
                                                            children: "Admin / Role Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2038,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2035,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center w-full h-[50px] px-4 rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            value: adminUsername,
                                                            onChange: (e)=>setAdminUsername(e.target.value.replace(/@.*$/, '')),
                                                            placeholder: "username",
                                                            className: "bg-transparent text-gray-900 dark:text-white text-xs text-xs--line-height outline-none w-full h-full font-semibold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-xs text-xs--line-height font-bold shrink-0",
                                                            children: [
                                                                "@",
                                                                domain || 'pingdart.com'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2050,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2041,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-1.5 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[14px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "⚡"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 2056,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Suggestions:"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2055,
                                                            columnNumber: 21
                                                        }, this),
                                                        [
                                                            "admin",
                                                            "info",
                                                            "contact",
                                                            "support",
                                                            "hello",
                                                            ...firstName ? [
                                                                firstName.toLowerCase().replace(/[^a-z0-9]/g, '')
                                                            ] : []
                                                        ].filter((v, i, a)=>v && a.indexOf(v) === i).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setAdminUsername(preset),
                                                                className: `text-[14px] px-2 py-0.5 rounded-md font-mono font-bold transition-all ${adminUsername === preset ? "bg-indigo-600 text-white shadow-xs" : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900"}`,
                                                                children: preset
                                                            }, preset, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2061,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2054,
                                                    columnNumber: 19
                                                }, this),
                                                usernameStatus === "available" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-green-600 dark:text-green-400 mt-1 font-medium",
                                                    children: "✓ Username is available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2075,
                                                    columnNumber: 54
                                                }, this),
                                                usernameStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-red-500 mt-1 font-medium",
                                                    children: "Username taken. Try another."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2076,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2034,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1.5",
                                                    children: "Recovery Contact Email (e.g. Gmail) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2080,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    value: contactEmail,
                                                    onChange: (e)=>setContactEmail(e.target.value),
                                                    placeholder: "john@gmail.com",
                                                    className: "w-full h-[50px] px-4 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2081,
                                                    columnNumber: 19
                                                }, this),
                                                emailStatus === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-red-500 mt-1 font-medium",
                                                    children: "This contact email is already registered."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2089,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2079,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isStep2Disabled,
                                            className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-[50px] shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider disabled:opacity-50 mt-2",
                                            children: isValidatingStep ? "Verifying..." : "Next: Password & Setup →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2092,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 1986,
                                    columnNumber: 15
                                }, this) : /* STEP 3: PASSWORD & LAUNCH */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleRegister,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider",
                                                            children: "Set Password *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2105,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: generatePassword,
                                                            className: "text-[14px] text-indigo-600 dark:text-indigo-400 font-bold hover:underline",
                                                            children: "⚡ Suggest Strong"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2106,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: showPassword ? "text" : "password",
                                                            required: true,
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            placeholder: "••••••••",
                                                            className: "w-full h-[50px] px-4 pr-11 text-xs text-xs--line-height rounded-[50px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none font-mono focus:ring-2 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2111,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",
                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2124,
                                                                columnNumber: 39
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2124,
                                                                columnNumber: 72
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2119,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2110,
                                                    columnNumber: 19
                                                }, this),
                                                password.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 pt-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-[14px] font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400",
                                                                    children: "Strength:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 2131,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: pwdStrength.textColor,
                                                                    children: pwdStrength.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                    lineNumber: 2132,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2130,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full transition-all ${pwdStrength.color}`,
                                                                style: {
                                                                    width: pwdStrength.percentage
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2135,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2134,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2129,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-[10px] bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-800 text-center space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[14px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400",
                                                    children: "Assigned 11-Digit PingDart ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-black text-indigo-700 dark:text-indigo-300 font-mono tracking-widest",
                                                    children: pingdartId || "91405000001"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 pt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                            size: 13,
                                                            className: "text-indigo-600 dark:text-indigo-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: detectedLocationLabel || `${regCity}, ${regState}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setIsLocationModalOpen(true),
                                                            className: "text-indigo-600 dark:text-indigo-400 font-bold underline hover:text-indigo-700 ml-1 cursor-pointer",
                                                            children: "Change City 📍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2152,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-start gap-2 cursor-pointer select-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        required: true,
                                                        checked: agreeTerms,
                                                        onChange: (e)=>setAgreeTerms(e.target.checked),
                                                        className: "mt-0.5 w-3.5 h-3.5 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 2164,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            "I agree to the ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/terms",
                                                                className: "text-indigo-600 font-semibold hover:underline",
                                                                children: "Terms of Service"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2172,
                                                                columnNumber: 38
                                                            }, this),
                                                            " & ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/terms",
                                                                className: "text-indigo-600 font-semibold hover:underline",
                                                                children: "Privacy Policy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2172,
                                                                columnNumber: 146
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 2171,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 2163,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: !isStep3Valid || isLoading,
                                            className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-[50px] shadow-lg shadow-indigo-500/25 transition-all text-xs uppercase tracking-wider disabled:opacity-50 mt-2",
                                            children: isLoading ? "Creating Account..." : "Create Account & Launch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 1699,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium",
                                children: [
                                    "Already have an account?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/login"),
                                        className: "text-gray-900 dark:text-white font-bold hover:underline",
                                        children: "Sign in"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 2189,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/register/page.tsx",
                    lineNumber: 1673,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/register/page.tsx",
                lineNumber: 1668,
                columnNumber: 7
            }, this),
            isLocationModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                    className: "text-indigo-600 dark:text-indigo-400",
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2210,
                                                    columnNumber: 19
                                                }, this),
                                                " Select City & Location"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                            children: "Pick a city to instantly update your 11-digit PingDart ID location codes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2212,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsLocationModalOpen(false),
                                    className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2221,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2216,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 18,
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2228,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        autoFocus: true,
                                        placeholder: "Search city name (e.g., Hyderabad, Mumbai, Bengaluru, New York)...",
                                        value: locationQuery,
                                        onChange: (e)=>setLocationQuery(e.target.value),
                                        className: "w-full h-[50px] pl-10 pr-4 bg-white dark:bg-gray-800 rounded-[50px] text-xs text-xs--line-height font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2229,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 2227,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-3 flex-1 space-y-1",
                            children: [
                                locationQuery.trim().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleSelectLocation({
                                            cityName: locationQuery.trim(),
                                            stateName: regState || "Telangana",
                                            countryName: regCountry || "India"
                                        }),
                                    className: "w-full flex items-center justify-between p-3.5 rounded-[10px] text-left bg-indigo-50/90 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800 transition-all cursor-pointer mb-2 group shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-[50px] bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-105 transition-transform",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2253,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-sm text-indigo-900 dark:text-indigo-200",
                                                            children: [
                                                                'Use custom city: "',
                                                                locationQuery.trim(),
                                                                '"'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2257,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-indigo-600 dark:text-indigo-400 font-medium",
                                                            children: [
                                                                'Set city as "',
                                                                locationQuery.trim(),
                                                                '" & recalculate 11-digit PingDart ID'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2260,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2256,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-600 text-white shadow-sm",
                                                children: "Select ⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 2266,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2265,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2243,
                                    columnNumber: 17
                                }, this),
                                isLoadingLocations ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 text-center text-sm text-gray-500 flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-spin text-indigo-600 text-lg",
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2275,
                                            columnNumber: 19
                                        }, this),
                                        " Searching city locations..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2274,
                                    columnNumber: 17
                                }, this) : availableLocations.length === 0 && locationQuery.trim().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 text-center text-sm text-gray-500",
                                    children: "Type a city name above to search or add custom location."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2278,
                                    columnNumber: 17
                                }, this) : availableLocations.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectLocation(item),
                                        className: "w-full flex items-center justify-between p-3.5 rounded-[10px] text-left hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800/60 transition-all group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-[50px] bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                                            lineNumber: 2291,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 2290,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-[280px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5",
                                                                children: [
                                                                    item.cityName,
                                                                    item.source === 'openstreetmap' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded",
                                                                        children: "OpenStreetMap 🗺️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                        lineNumber: 2297,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2294,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium truncate",
                                                                children: [
                                                                    item.stateName ? `${item.stateName}, ` : '',
                                                                    item.countryName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                                lineNumber: 2302,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                                        lineNumber: 2293,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 2289,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block text-[14px] font-mono font-bold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors",
                                                    children: [
                                                        "Codes: ",
                                                        item.countryCode,
                                                        "-",
                                                        item.stateCode,
                                                        "-",
                                                        item.cityCode
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                                    lineNumber: 2308,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                                lineNumber: 2307,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id || `${item.cityName}-${item.stateName}`, true, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2283,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2241,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/register/page.tsx",
                    lineNumber: 2205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/register/page.tsx",
                lineNumber: 2204,
                columnNumber: 9
            }, this),
            cropModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[150] bg-black/80 backdrop-blur-md flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-sm overflow-hidden flex flex-col items-center p-6 space-y-4 animate-in fade-in zoom-in duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex items-center justify-between border-b border-slate-100 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-extrabold text-slate-900 flex items-center gap-2",
                                    children: "✂️ Crop Avatar Photo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setCropModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2335,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2330,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2326,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64 h-64 rounded-full overflow-hidden bg-slate-900 border-4 border-blue-600 shadow-2xl cursor-grab active:cursor-grabbing select-none",
                            onMouseDown: (e)=>{
                                setIsDraggingCrop(true);
                                setDragStartPos({
                                    x: e.clientX - cropOffset.x,
                                    y: e.clientY - cropOffset.y
                                });
                            },
                            onMouseMove: (e)=>{
                                if (isDraggingCrop) {
                                    setCropOffset({
                                        x: e.clientX - dragStartPos.x,
                                        y: e.clientY - dragStartPos.y
                                    });
                                }
                            },
                            onMouseUp: ()=>setIsDraggingCrop(false),
                            onMouseLeave: ()=>setIsDraggingCrop(false),
                            onTouchStart: (e)=>{
                                if (e.touches[0]) {
                                    setIsDraggingCrop(true);
                                    setDragStartPos({
                                        x: e.touches[0].clientX - cropOffset.x,
                                        y: e.touches[0].clientY - cropOffset.y
                                    });
                                }
                            },
                            onTouchMove: (e)=>{
                                if (isDraggingCrop && e.touches[0]) {
                                    setCropOffset({
                                        x: e.touches[0].clientX - dragStartPos.x,
                                        y: e.touches[0].clientY - dragStartPos.y
                                    });
                                }
                            },
                            onTouchEnd: ()=>setIsDraggingCrop(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-75",
                                style: {
                                    transform: `translate(${cropOffset.x}px, ${cropOffset.y}px) scale(${cropZoom}) rotate(${cropRotation}deg)`
                                },
                                children: rawImageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: rawImageSrc,
                                    alt: "Raw Crop",
                                    className: "max-w-none max-h-none w-64 h-64 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2373,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/register/page.tsx",
                                lineNumber: 2366,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-400 font-semibold text-center",
                            children: "Drag photo to adjust position"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-slate-500",
                                            children: "Zoom:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCropZoom(Math.max(0.6, cropZoom - 0.2)),
                                            className: "w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-black text-sm flex items-center justify-center hover:bg-slate-200",
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2390,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0.6",
                                            max: "3",
                                            step: "0.1",
                                            value: cropZoom,
                                            onChange: (e)=>setCropZoom(parseFloat(e.target.value)),
                                            className: "flex-1 accent-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2397,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCropZoom(Math.min(3, cropZoom + 0.2)),
                                            className: "w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-black text-sm flex items-center justify-center hover:bg-slate-200",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/register/page.tsx",
                                            lineNumber: 2406,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2388,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setCropRotation((prev)=>(prev + 90) % 360),
                                        className: "px-4 py-2 bg-slate-100 text-slate-700 font-bold text-xs rounded-full hover:bg-slate-200 transition-all flex items-center gap-1.5",
                                        children: "🔄 Rotate 90°"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/register/page.tsx",
                                        lineNumber: 2416,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2415,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2387,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 w-full pt-3 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setCropModalOpen(false),
                                    className: "flex-1 py-3 bg-slate-100 text-slate-700 font-extrabold rounded-full text-xs hover:bg-slate-200",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2428,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleApplyCrop,
                                    className: "flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-full text-xs shadow-md shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 uppercase tracking-wider",
                                    children: "Apply & Crop ✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/register/page.tsx",
                                    lineNumber: 2435,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/register/page.tsx",
                            lineNumber: 2427,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(public)/register/page.tsx",
                    lineNumber: 2323,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/register/page.tsx",
                lineNumber: 2322,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$SecurityOnboardingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SecurityOnboardingModal"], {
                isOpen: securityModalOpen,
                userEmail: contactEmail || `${adminUsername}@${domain}`,
                userPassword: password,
                avatarUrl: avatarPreview || selectedAvatarUrl,
                onComplete: handleSecurityOnboardingComplete
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/register/page.tsx",
                lineNumber: 2448,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/register/page.tsx",
        lineNumber: 1599,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_9b96aae0._.js.map