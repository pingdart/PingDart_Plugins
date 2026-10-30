module.exports = [
"[project]/src/services/diagnosticsApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diagnosticsApi",
    ()=>diagnosticsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const diagnosticsApi = {
    // Step 1: DNS
    checkDns: async (domain)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/diagnostics/dns?domain=${encodeURIComponent(domain)}`, {
            timeout: 30000
        });
        return res.data;
    },
    // Step 2: Ports & SSL
    checkPorts: async (host)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/diagnostics/ports${host ? `?host=${encodeURIComponent(host)}` : ''}`, {
            timeout: 45000
        });
        return res.data;
    },
    // Step 3: Inbound Test
    testInbound: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/diagnostics/inbound-test', payload, {
            timeout: 60000
        });
        return res.data;
    },
    // Step 4: Outbound Test
    testOutbound: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/diagnostics/outbound-test', payload, {
            timeout: 60000
        });
        return res.data;
    },
    // Step 5: Mailbox Auth & IMAP Fetch
    testMailboxAuth: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/diagnostics/mailbox-test', payload, {
            timeout: 45000
        });
        return res.data;
    }
};
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
"[project]/src/services/couponApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "couponApi",
    ()=>couponApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const couponApi = {
    // Validate a coupon for checkout
    validateCoupon: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/coupons/validate", payload);
        return res.data;
    },
    // Admin: list coupons with query filters
    listCoupons: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin", {
            params
        });
        return res.data;
    },
    // Admin: create single coupon
    createCoupon: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/coupons/admin", data);
        return res.data;
    },
    // Admin: update coupon
    updateCoupon: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/coupons/admin/${id}`, data);
        return res.data;
    },
    // Admin: delete coupon
    deleteCoupon: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/coupons/admin/${id}`);
        return res.data;
    },
    // Admin: bulk generate coupons
    bulkGenerate: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/coupons/admin/bulk", payload);
        return res.data;
    },
    // Admin: analytics summary
    getAnalytics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin/analytics");
        return res.data;
    },
    // Admin: usage logs
    getUsageLogs: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin/logs", {
            params
        });
        return res.data;
    },
    // Alias for listCoupons
    getAll: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin", {
            params
        });
        return res.data?.data?.coupons || res.data?.coupons || res.data?.data || res.data;
    }
};
}),
"[project]/src/services/storageApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN_LIMITS",
    ()=>PLAN_LIMITS,
    "storageApi",
    ()=>storageApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
;
function getCurrentUserKey() {
    if ("TURBOPACK compile-time truthy", 1) return "guest";
    //TURBOPACK unreachable
    ;
}
const PLAN_LIMITS = {
    Free: 15 * 1024 * 1024 * 1024,
    Basic: 100 * 1024 * 1024 * 1024,
    Standard: 500 * 1024 * 1024 * 1024,
    Pro: 2000 * 1024 * 1024 * 1024,
    Business: 5000 * 1024 * 1024 * 1024 // 5 TB
};
class StorageService {
    files = [];
    folders = [];
    quota = {
        usedBytes: 0,
        limitBytes: PLAN_LIMITS.Free,
        planName: "Free",
        freeLimitBytes: PLAN_LIMITS.Free
    };
    listeners = new Set();
    isSyncing = false;
    currentLoadedUser = "";
    constructor(){
        this.cleanLegacySharedStorage();
        this.loadFromStorage();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    cleanLegacySharedStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    subscribe(cb) {
        this.listeners.add(cb);
        return ()=>this.listeners.delete(cb);
    }
    notify() {
        this.listeners.forEach((cb)=>{
            try {
                cb();
            } catch (e) {}
        });
    }
    /**
   * Synchronizes folders & files with MySQL database backend strictly for the authenticated user
   */ async syncWithServer() {
        if ("undefined" === "undefined" || this.isSyncing) return;
        //TURBOPACK unreachable
        ;
    }
    loadFromStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    saveToStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    getQuota() {
        this.ensureUserContext();
        const totalSize = this.files.filter((f)=>!f.isTrash).reduce((acc, f)=>acc + Number(f.size || 0), 0);
        return {
            ...this.quota,
            usedBytes: totalSize
        };
    }
    ensureUserContext() {
        const userKey = getCurrentUserKey();
        if (userKey !== this.currentLoadedUser) {
            this.loadFromStorage();
        }
    }
    setPlan(plan) {
        this.ensureUserContext();
        this.quota.planName = plan;
        this.quota.limitBytes = PLAN_LIMITS[plan];
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return this.getQuota();
    }
    getFolders(parentId = null) {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash && f.parentId === parentId);
    }
    getAllFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash);
    }
    getFiles(folderId = null) {
        this.ensureUserContext();
        return this.files.filter((f)=>!f.isTrash && f.folderId === folderId);
    }
    getCategoryFiles(category) {
        this.ensureUserContext();
        if (category === "photos") {
            return this.files.filter((f)=>!f.isTrash && (f.category === "image" || f.category === "video"));
        }
        if (category === "documents") {
            return this.files.filter((f)=>!f.isTrash && f.category === "document");
        }
        if (category === "starred") {
            return this.files.filter((f)=>!f.isTrash && f.isStarred);
        }
        if (category === "vault") {
            return this.files.filter((f)=>!f.isTrash && f.isEncrypted);
        }
        if (category === "shared") {
            return this.files.filter((f)=>!f.isTrash && f.sharedWithMe);
        }
        if (category === "trash") {
            return this.files.filter((f)=>f.isTrash);
        }
        if (category === "recent") {
            return [
                ...this.files
            ].filter((f)=>!f.isTrash).sort((a, b)=>new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime());
        }
        return this.getFiles(null);
    }
    createFolder(name, parentId = null, color) {
        this.ensureUserContext();
        const newFolder = {
            id: `folder_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            parentId: parentId || null,
            name,
            color: color || "#2563eb",
            itemCount: 0,
            sizeBytes: 0,
            isStarred: false,
            isTrash: false,
            createdAt: new Date().toISOString()
        };
        this.folders.unshift(newFolder);
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return newFolder;
    }
    addFile(file) {
        this.ensureUserContext();
        const nameLower = (file.name || "").toLowerCase();
        const isImg = file.mimeType?.startsWith("image/") || nameLower.endsWith(".png") || nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || nameLower.endsWith(".webp") || nameLower.endsWith(".gif") || nameLower.endsWith(".svg");
        const category = isImg ? "image" : file.mimeType?.startsWith("video/") || nameLower.endsWith(".mp4") || nameLower.endsWith(".webm") || nameLower.endsWith(".mov") ? "video" : file.mimeType?.startsWith("audio/") || nameLower.endsWith(".mp3") || nameLower.endsWith(".wav") ? "audio" : file.mimeType?.includes("pdf") || file.mimeType?.includes("word") || file.mimeType?.includes("sheet") || file.mimeType?.includes("text") || nameLower.endsWith(".pdf") || nameLower.endsWith(".doc") || nameLower.endsWith(".docx") || nameLower.endsWith(".txt") ? "document" : file.mimeType?.includes("zip") || file.mimeType?.includes("tar") || nameLower.endsWith(".zip") || nameLower.endsWith(".rar") || nameLower.endsWith(".7z") ? "archive" : "other";
        const mediaUrl = file.url || "";
        const thumbUrl = file.thumbnailUrl || (isImg ? mediaUrl : undefined);
        const newFile = {
            id: file.id || `file_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            name: file.name || "Untitled_File",
            size: file.size || 1024,
            mimeType: file.mimeType || (isImg ? "image/png" : "application/octet-stream"),
            folderId: file.folderId || null,
            url: mediaUrl,
            thumbnailUrl: thumbUrl,
            category,
            isEncrypted: Boolean(file.isEncrypted),
            isStarred: Boolean(file.isStarred),
            isTrash: Boolean(file.isTrash),
            createdAt: file.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.files = this.files.filter((f)=>f.id !== newFile.id);
        this.files.unshift(newFile);
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return newFile;
    }
    getFileById(fileId) {
        this.ensureUserContext();
        return this.files.find((f)=>f.id === fileId || fileId.includes(f.id) || f.id.includes(fileId));
    }
    getAllFiles() {
        this.ensureUserContext();
        return this.files.filter((f)=>!f.isTrash);
    }
    getStarredFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash && f.isStarred);
    }
    getTrashFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isTrash);
    }
    toggleFolderStar(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderStar error", e));
        }
    }
    toggleFolderTrash(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderTrash error", e));
        }
    }
    deleteFolderPermanently(folderId) {
        this.ensureUserContext();
        this.folders = this.folders.filter((f)=>f.id !== folderId);
        this.files = this.files.filter((f)=>f.folderId !== folderId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}`).catch((e)=>console.warn("[CloudDrive] deleteFolder error", e));
    }
    emptyTrash() {
        this.ensureUserContext();
        const trashFiles = this.files.filter((f)=>f.isTrash);
        const trashFolders = this.folders.filter((f)=>f.isTrash);
        this.files = this.files.filter((f)=>!f.isTrash);
        this.folders = this.folders.filter((f)=>!f.isTrash);
        this.saveToStorage();
        this.notify();
        trashFiles.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${f.id}`).catch(()=>{});
        });
        trashFolders.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${f.id}`).catch(()=>{});
        });
    }
    toggleStar(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isStarred: f.isStarred
            }).catch((e)=>console.warn("[CloudDrive] toggleStar error", e));
        }
    }
    toggleTrash(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isTrash: f.isTrash
            }).catch((e)=>console.warn("[CloudDrive] toggleTrash error", e));
        }
    }
    deletePermanently(fileId) {
        this.ensureUserContext();
        this.files = this.files.filter((item)=>item.id !== fileId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${fileId}`).catch((e)=>console.warn("[CloudDrive] deletePermanently error", e));
    }
    async updateFileUrl(fileId, url) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.url = url;
            if (f.category === "image") f.thumbnailUrl = url;
            f.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.notify();
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/files", f);
                return true;
            } catch (e) {
                console.warn("[CloudDrive] updateFileUrl error", e);
            }
        }
        return false;
    }
    savePublicShareLink(file, link) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const token = undefined;
    }
    generateShareLink(fileId, password, expiresDays) {
        this.loadFromStorage();
        const f = this.files.find((item)=>item.id === fileId || fileId.startsWith(item.id));
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWebBaseUrl"])();
        const token = `${fileId}_${Math.random().toString(36).substr(2, 8)}`;
        const link = {
            publicUrl: `${baseUrl}/share/${token}`,
            isPasswordProtected: Boolean(password),
            password,
            expiresAt: expiresDays ? new Date(Date.now() + expiresDays * 86400000).toISOString() : undefined,
            accessCount: 0
        };
        if (f) {
            f.shareLink = link;
            this.saveToStorage();
            this.savePublicShareLink(f, link);
            this.notify();
        }
        return link;
    }
    getFileByShareToken(token) {
        this.loadFromStorage();
        if (!token) return null;
        const cleanToken = decodeURIComponent(token).replace(/\/+$/, "").trim();
        let f = this.files.find((item)=>{
            if (item.id === cleanToken) return true;
            if (cleanToken.startsWith(item.id)) return true;
            if (item.id.startsWith(cleanToken)) return true;
            if (item.shareLink) {
                const publicUrl = item.shareLink.publicUrl.replace(/\/+$/, "");
                if (publicUrl.endsWith(cleanToken) || publicUrl.includes(cleanToken)) return true;
            }
            return false;
        });
        if (!f) return null;
        const isExpired = Boolean(f.shareLink?.expiresAt && new Date(f.shareLink.expiresAt).getTime() < Date.now());
        if (f.shareLink) {
            f.shareLink.accessCount = (f.shareLink.accessCount || 0) + 1;
            this.saveToStorage();
            this.savePublicShareLink(f, f.shareLink);
        }
        return {
            file: f,
            isExpired,
            isPasswordProtected: Boolean(f.shareLink?.isPasswordProtected),
            password: f.shareLink?.password
        };
    }
    getSharedFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isShared && !f.isTrash);
    }
    async shareFolder(folderId, email, permission = "write") {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/cloud-drive/folders/${folderId}/share`, {
            email,
            permission
        });
        if (res.data?.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async unshareFolder(folderId, targetUserId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}/share/${targetUserId}`);
        if (res.data?.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async getFolderShares(folderId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/cloud-drive/folders/${folderId}/shares`);
        return res.data?.data || [];
    }
}
const storageApi = new StorageService();
}),
"[project]/src/services/uploadApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * uploadApi.ts
 * Chunked file upload client for PingDart Chat.
 *
 * Protocol:
 *   1. POST /upload/init        → { uploadId, nextChunk }
 *   2. POST /upload/chunk       → { received, remaining }  (repeat per chunk)
 *   3. POST /upload/complete    → { url, mimeType, size }
 *
 * Features:
 *   - Resumes from last successful chunk on reconnect
 *   - Progress callback per chunk
 *   - Cancellation via AbortController
 *   - Automatic retry (3 attempts per chunk, exponential backoff)
 */ __turbopack_context__.s([
    "cancelUpload",
    ()=>cancelUpload,
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const DEFAULT_CHUNK_SIZE = 1 * 1024 * 1024; // 1 MB per chunk
const MAX_CHUNK_RETRIES = 3;
// ─────────────────────────────────────────────────────────────
// Local resume state (in-memory; survives reconnects within session)
// ─────────────────────────────────────────────────────────────
const activeSessions = new Map();
async function uploadFile(file, fileName, mimeType, roomId, opts) {
    const chunkSize = opts?.chunkSize ?? DEFAULT_CHUNK_SIZE;
    const totalChunks = Math.ceil(file.size / chunkSize);
    const onProgress = opts?.onProgress;
    const signal = opts?.signal;
    // 1. Init or resume
    // NOTE: `api` has baseURL = NEXT_PUBLIC_API_URL (e.g. http://host:4025/api/v1)
    //       so all paths here are relative to that — DO NOT include /api/v1 prefix.
    let session;
    if (opts?.resumeUploadId && activeSessions.has(opts.resumeUploadId)) {
        session = activeSessions.get(opts.resumeUploadId);
    } else {
        const initRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/upload/init', {
            fileName,
            mimeType,
            totalChunks,
            chunkSize,
            roomId,
            size: file.size
        });
        if (!initRes.data.success) throw new Error(initRes.data.message || 'Upload init failed');
        // Backend returns uploadId at top level
        const uploadId = initRes.data.uploadId || initRes.data.data?.uploadId;
        const nextChunk = initRes.data.nextChunk ?? initRes.data.data?.nextChunk ?? 0;
        session = {
            uploadId,
            chunkSize,
            totalChunks,
            nextChunk
        };
        activeSessions.set(session.uploadId, session);
    }
    // 2. Upload chunks sequentially from nextChunk
    for(let i = session.nextChunk; i < totalChunks; i++){
        if (signal?.aborted) {
            activeSessions.delete(session.uploadId);
            throw new DOMException('Upload cancelled', 'AbortError');
        }
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunkBlob = file.slice(start, end);
        await uploadChunkWithRetry(session.uploadId, i, totalChunks, chunkBlob, signal);
        // Update resume pointer
        session.nextChunk = i + 1;
        onProgress?.({
            uploadId: session.uploadId,
            chunkIndex: i,
            totalChunks,
            percent: Math.round((i + 1) / totalChunks * 100)
        });
    }
    // 3. Complete the upload
    const completeRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/upload/complete', {
        uploadId: session.uploadId,
        fileName,
        mimeType
    });
    if (!completeRes.data.success) throw new Error(completeRes.data.message || 'Upload complete failed');
    activeSessions.delete(session.uploadId);
    // Backend returns url at top level
    const finalUrl = completeRes.data.url || completeRes.data.data?.url || '';
    return {
        url: finalUrl,
        mimeType,
        size: file.size,
        uploadId: session.uploadId
    };
}
async function cancelUpload(uploadId) {
    activeSessions.delete(uploadId);
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/upload/${uploadId}`);
    } catch  {}
}
// ─────────────────────────────────────────────────────────────
// Internal helpers
// ─────────────────────────────────────────────────────────────
/**
 * Get the backend base URL for raw fetch calls (without /api/v1 suffix).
 * The chunk upload uses fetch (not axios) to send multipart FormData.
 */ function getChunkUploadUrl() {
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])()}/upload/chunk`;
}
/**
 * Get the active auth token from any available source.
 * Checks Zustand store first, then localStorage keys used by the app.
 */ function getAuthToken() {
    if ("TURBOPACK compile-time truthy", 1) return '';
    //TURBOPACK unreachable
    ;
}
async function uploadChunkWithRetry(uploadId, chunkIndex, totalChunks, blob, signal, attempt = 0) {
    try {
        const form = new FormData();
        form.append('uploadId', uploadId);
        form.append('chunkIndex', String(chunkIndex));
        form.append('totalChunks', String(totalChunks));
        form.append('chunk', blob, `chunk_${chunkIndex}`);
        const token = getAuthToken();
        const res = await fetch(getChunkUploadUrl(), {
            method: 'POST',
            body: form,
            signal,
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : {}
        });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Chunk ${chunkIndex} failed: ${res.status} ${text}`);
        }
    } catch (err) {
        if (err.name === 'AbortError') throw err;
        if (attempt < MAX_CHUNK_RETRIES) {
            await sleep(Math.pow(2, attempt) * 500); // 500ms, 1s, 2s
            return uploadChunkWithRetry(uploadId, chunkIndex, totalChunks, blob, signal, attempt + 1);
        }
        throw err;
    }
}
function sleep(ms) {
    return new Promise((r)=>setTimeout(r, ms));
}
}),
"[project]/src/services/domainBillingApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domainBillingApi",
    ()=>domainBillingApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
'use strict';
;
const domainBillingApi = {
    getSubscription: async (domain)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/domain-billing/${encodeURIComponent(domain)}/subscription`);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    checkMailAccess: async (emailOrDomain)=>{
        try {
            const params = {};
            if (emailOrDomain) {
                if (emailOrDomain.includes('@')) {
                    params.email = emailOrDomain;
                } else {
                    params.domain = emailOrDomain;
                }
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/domain-billing/access-check', {
                params
            });
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                allowed: true,
                status: 'active',
                message: err.message
            };
        }
    },
    createCheckoutOrder: async (domain, payload = {})=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/domain-billing/${encodeURIComponent(domain)}/checkout`, payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    },
    renewSubscription: async (domain, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/domain-billing/${encodeURIComponent(domain)}/renew`, payload);
            return res.data;
        } catch (err) {
            return err.response?.data || {
                success: false,
                message: err.message
            };
        }
    }
};
}),
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
"[project]/src/utils/generateDnsPdf.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadDnsPdf",
    ()=>downloadDnsPdf,
    "generateDnsPdf",
    ()=>generateDnsPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
;
;
function generateDnsPdf({ domain, dnsStatus }) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsPDF"]({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    const footerMargin = 16;
    // Color Palette
    const primaryNavy = [
        15,
        23,
        42
    ]; // #0f172a
    const accentIndigo = [
        79,
        70,
        229
    ]; // #4f46e5
    const emeraldGreen = [
        16,
        185,
        129
    ]; // #10b981
    const amberOrange = [
        217,
        119,
        6
    ]; // #d97706
    const redAlert = [
        220,
        38,
        38
    ]; // #dc2626
    const textDark = [
        30,
        41,
        59
    ]; // #1e293b
    const textMuted = [
        100,
        116,
        139
    ]; // #64748b
    const bgLight = [
        248,
        250,
        252
    ]; // #f8fafc
    const borderLight = [
        226,
        232,
        240
    ]; // #e2e8f0
    let currentY = 14;
    const ensureSpace = (neededHeight)=>{
        if (currentY + neededHeight > pageHeight - footerMargin) {
            doc.addPage();
            currentY = 14;
        }
    };
    // ── 1. HEADER BANNER ─────────────────────────────────────────
    const headerHeight = 44;
    // Main dark background
    doc.setFillColor(...primaryNavy);
    doc.roundedRect(margin, currentY, contentWidth, headerHeight, 3, 3, "F");
    // Left accent gradient strip (3 stacked rects for gradient feel)
    doc.setFillColor(99, 102, 241); // indigo-500
    doc.rect(margin, currentY, 5, headerHeight, "F");
    doc.setFillColor(129, 140, 248); // indigo-400 top highlight
    doc.rect(margin, currentY, 5, 14, "F");
    doc.setFillColor(67, 56, 202); // indigo-700 bottom shadow
    doc.rect(margin, currentY + 30, 5, 14, "F");
    // Top-left classification label
    doc.setFillColor(79, 70, 229);
    doc.roundedRect(margin + 10, currentY + 5, 58, 6.5, 1.5, 1.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6);
    doc.setTextColor(255, 255, 255);
    doc.text("✦  ENTERPRISE DNS REPORT", margin + 13, currentY + 9.8);
    // Main Platform Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("PingDart Mail Platform", margin + 10, currentY + 22);
    // Sub-tagline
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(165, 180, 252); // indigo-300
    doc.text("DNS Configuration Details & Complete Authentication Setup Guide", margin + 10, currentY + 29);
    // Right side – vertical separator
    doc.setDrawColor(79, 70, 229);
    doc.setLineWidth(0.4);
    doc.line(pageWidth - margin - 68, currentY + 6, pageWidth - margin - 68, currentY + 38);
    // Domain Pill (right side)
    const domainText = domain.toUpperCase();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    const domainW = doc.getTextWidth(domainText) + 10;
    const pillX = pageWidth - margin - domainW - 5;
    doc.setFillColor(15, 23, 42);
    doc.setDrawColor(99, 102, 241);
    doc.setLineWidth(0.6);
    doc.roundedRect(pillX, currentY + 7, domainW, 12, 2, 2, "FD");
    doc.setTextColor(165, 180, 252);
    doc.text(domainText, pillX + 5, currentY + 15);
    // "DOMAIN" label above pill
    doc.setFont("helvetica", "bold");
    doc.setFontSize(5.5);
    doc.setTextColor(100, 116, 139);
    doc.text("TARGET DOMAIN", pillX + 5, currentY + 5.5);
    // "mail server" below pill
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text("mail.pingdart.com", pillX + 5, currentY + 24);
    // Bottom verification badge
    const allVerified = !!dnsStatus?.verified;
    doc.setFillColor(allVerified ? 16 : 220, allVerified ? 185 : 38, allVerified ? 129 : 38);
    doc.roundedRect(pillX, currentY + 27, domainW, 8, 1.5, 1.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(255, 255, 255);
    const verifyLabel = allVerified ? "✓  DNS VERIFIED" : "⚠  PENDING VERIFICATION";
    doc.text(verifyLabel, pillX + domainW / 2, currentY + 32, {
        align: "center"
    });
    currentY += headerHeight + 2;
    // ── 2. META-INFO STRIP ────────────────────────────────────────
    doc.setFillColor(241, 245, 249); // slate-100
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, currentY, contentWidth, 11, 1.5, 1.5, "FD");
    const dateStr = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
    });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(30, 41, 59);
    doc.text("📋  DNS CONFIG REPORT", margin + 4, currentY + 7.5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    // Centre-right: instruction text
    doc.text(`Point MX → mail.pingdart.com  |  SPF TXT → include:_spf.pingdart.com -all  |  Generated: ${dateStr}`, margin + 40, currentY + 7.5);
    currentY += 16;
    // ── 3. SUMMARY CARDS ─────────────────────────────────────────
    const records = dnsStatus?.records || {};
    const isSecurityComplete = !!(records.spf?.match && records.dkim?.match && records.dmarc?.match);
    const isDeliverabilityHigh = !!records.mx?.match;
    const isDnsVerified = !!dnsStatus?.verified;
    const cardWidth = (contentWidth - 6) / 3;
    const cardHeight = 18;
    // Card 1: Security Status
    doc.setFillColor(...bgLight);
    doc.setDrawColor(...borderLight);
    doc.roundedRect(margin, currentY, cardWidth, cardHeight, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text("SECURITY STATUS", margin + 4, currentY + 6);
    doc.setFontSize(10.5);
    if (isSecurityComplete) {
        doc.setTextColor(...emeraldGreen);
        doc.text("Complete", margin + 4, currentY + 13.5);
    } else {
        doc.setTextColor(...amberOrange);
        doc.text("Incomplete", margin + 4, currentY + 13.5);
    }
    // Card 2: Deliverability
    const card2X = margin + cardWidth + 3;
    doc.setFillColor(...bgLight);
    doc.roundedRect(card2X, currentY, cardWidth, cardHeight, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text("DELIVERABILITY", card2X + 4, currentY + 6);
    doc.setFontSize(10.5);
    if (isDeliverabilityHigh) {
        doc.setTextColor(...textDark);
        doc.text("High (MX OK)", card2X + 4, currentY + 13.5);
    } else {
        doc.setTextColor(...redAlert);
        doc.text("Low (No MX)", card2X + 4, currentY + 13.5);
    }
    // Card 3: DNS Verified
    const card3X = card2X + cardWidth + 3;
    doc.setFillColor(...bgLight);
    doc.roundedRect(card3X, currentY, cardWidth, cardHeight, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...textMuted);
    doc.text("DNS VERIFIED", card3X + 4, currentY + 6);
    doc.setFontSize(10.5);
    if (isDnsVerified) {
        doc.setTextColor(...emeraldGreen);
        doc.text("Yes", card3X + 4, currentY + 13.5);
    } else {
        doc.setTextColor(...redAlert);
        doc.text("No", card3X + 4, currentY + 13.5);
    }
    currentY += cardHeight + 8;
    // ── HELPER TO RENDER A FULL DETAILED RECORD CARD ──────────────
    const renderRecordCard = (opts)=>{
        const typeBg = opts.typeColor || accentIndigo;
        const matchStatusText = opts.matchText || (opts.isMatched ? "MATCHED" : "WRONG");
        const matchColor = opts.isMatched ? emeraldGreen : redAlert;
        // Estimate height
        doc.setFont("courier", "normal");
        doc.setFontSize(8);
        const expectedWrapped = doc.splitTextToSize(opts.expected, contentWidth - 12);
        const expectedHeight = expectedWrapped.length * 4 + 10;
        let errorHeight = 0;
        let actualErrorWrapped = [];
        if (!opts.isMatched && opts.actualError) {
            doc.setFont("courier", "normal");
            doc.setFontSize(7.5);
            actualErrorWrapped = doc.splitTextToSize(opts.actualError, contentWidth - 16);
            errorHeight = actualErrorWrapped.length * 3.8 + 12;
        }
        let calloutHeight = 0;
        let calloutWrapped = [];
        if (opts.callout) {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            calloutWrapped = doc.splitTextToSize(opts.callout.text, contentWidth - 16);
            calloutHeight = calloutWrapped.length * 3.8 + 12;
        }
        const cardTotalHeight = 22 + Math.max(expectedHeight, 18) + (errorHeight ? errorHeight + 3 : 0) + (calloutHeight ? calloutHeight + 3 : 0);
        ensureSpace(cardTotalHeight + 4);
        // Card border & background
        doc.setFillColor(opts.isMatched ? 250 : 254, opts.isMatched ? 253 : 242, opts.isMatched ? 250 : 242);
        doc.setDrawColor(opts.isMatched ? 167 : 254, opts.isMatched ? 243 : 202, opts.isMatched ? 208 : 202);
        doc.roundedRect(margin, currentY, contentWidth, cardTotalHeight, 2, 2, "FD");
        // Top badges
        let badgeCursorX = margin + 4;
        // 1. Type badge (e.g. MX, TXT)
        doc.setFillColor(...typeBg);
        doc.roundedRect(badgeCursorX, currentY + 3.5, 14, 5.5, 1.5, 1.5, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7);
        doc.setTextColor(255, 255, 255);
        doc.text(opts.type, badgeCursorX + 7, currentY + 7.3, {
            align: "center"
        });
        badgeCursorX += 17;
        // 2. Category badge (REQUIRED, DELIVERABILITY, SECURITY, TRUST)
        const catWidth = doc.getTextWidth(opts.badgeText) + 6;
        doc.setFillColor(241, 245, 249);
        doc.roundedRect(badgeCursorX, currentY + 3.5, catWidth, 5.5, 1.5, 1.5, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(...textDark);
        doc.text(opts.badgeText, badgeCursorX + catWidth / 2, currentY + 7.3, {
            align: "center"
        });
        badgeCursorX += catWidth + 3;
        // 3. Status badge (MATCHED / WRONG / RECOMMENDED / OPTIONAL)
        const statusWidth = doc.getTextWidth(matchStatusText) + 6;
        doc.setFillColor(...matchColor);
        doc.roundedRect(badgeCursorX, currentY + 3.5, statusWidth, 5.5, 1.5, 1.5, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(255, 255, 255);
        doc.text(matchStatusText, badgeCursorX + statusWidth / 2, currentY + 7.3, {
            align: "center"
        });
        let innerY = currentY + 12;
        // Two-column or side-by-side: Hostname / Key and Expected Value
        const col1Width = 45;
        const col2Width = contentWidth - col1Width - 10;
        // Column 1: Hostname / Key
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(...textMuted);
        doc.text("HOSTNAME / KEY", margin + 4, innerY);
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(...borderLight);
        doc.roundedRect(margin + 4, innerY + 1.5, col1Width, 9, 1.5, 1.5, "FD");
        doc.setFont("courier", "bold");
        doc.setFontSize(8);
        doc.setTextColor(...textDark);
        doc.text(opts.hostname, margin + 7, innerY + 7);
        // Column 2: Expected Value
        const col2X = margin + col1Width + 7;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(...textMuted);
        doc.text("EXPECTED VALUE", col2X, innerY);
        const valBoxHeight = Math.max(9, expectedWrapped.length * 3.8 + 4.5);
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(...borderLight);
        doc.roundedRect(col2X, innerY + 1.5, col2Width, valBoxHeight, 1.5, 1.5, "FD");
        doc.setFont("courier", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(...textDark);
        doc.text(expectedWrapped, col2X + 3, innerY + 5.5);
        innerY += Math.max(13, valBoxHeight + 4);
        // Callout (if present)
        if (opts.callout) {
            const isRoadmap = opts.callout.type === "roadmap";
            doc.setFillColor(isRoadmap ? 240 : 241, isRoadmap ? 253 : 245, isRoadmap ? 244 : 249);
            doc.setDrawColor(isRoadmap ? 187 : 203, isRoadmap ? 247 : 213, isRoadmap ? 208 : 225);
            doc.roundedRect(margin + 4, innerY, contentWidth - 8, calloutHeight, 1.5, 1.5, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7.5);
            doc.setTextColor(isRoadmap ? 22 : 30, isRoadmap ? 101 : 41, isRoadmap ? 52 : 59);
            doc.text(`${opts.callout.icon} ${opts.callout.title}`, margin + 7, innerY + 4.5);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.setTextColor(...textDark);
            doc.text(calloutWrapped, margin + 7, innerY + 8.5);
            innerY += calloutHeight + 3;
        }
        // DNS Error / Mismatch Box
        if (!opts.isMatched && opts.actualError) {
            doc.setFillColor(254, 242, 242);
            doc.setDrawColor(254, 202, 202);
            doc.roundedRect(margin + 4, innerY, contentWidth - 8, errorHeight, 1.5, 1.5, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.setTextColor(...redAlert);
            doc.text("⚠ DNS Error: Value Mismatch / Missing", margin + 7, innerY + 4.5);
            doc.setFont("courier", "normal");
            doc.setFontSize(7);
            doc.setTextColor(185, 28, 28);
            doc.text(actualErrorWrapped, margin + 7, innerY + 8.5);
            innerY += errorHeight + 3;
        }
        currentY += cardTotalHeight + 4;
    };
    // ── 4. MX RECORD ─────────────────────────────────────────────
    let mxActualStr = "No MX records found.";
    if (records.mx?.actual && Array.isArray(records.mx.actual) && records.mx.actual.length > 0) {
        mxActualStr = records.mx.actual.map((r)=>`${r.priority || 10} ${r.exchange}`).join(" | ");
    } else if (typeof records.mx?.actual === "string" && records.mx.actual) {
        mxActualStr = records.mx.actual;
    }
    renderRecordCard({
        type: "MX",
        typeColor: [
            37,
            99,
            235
        ],
        badgeText: "REQUIRED",
        isMatched: !!records.mx?.match,
        hostname: "@",
        expected: records.mx?.expected || "mail.pingdart.com",
        actualError: !records.mx?.match ? mxActualStr : null
    });
    // ── 5. SPF RECORD ────────────────────────────────────────────
    renderRecordCard({
        type: "TXT",
        typeColor: [
            217,
            119,
            6
        ],
        badgeText: "DELIVERABILITY",
        isMatched: !!records.spf?.match,
        hostname: "@",
        expected: records.spf?.expected || "v=spf1 include:_spf.pingdart.com -all",
        actualError: !records.spf?.match ? records.spf?.actual || "No SPF record found." : null,
        callout: {
            icon: "💡",
            title: "SaaS Benefit:",
            text: "Using include:_spf.pingdart.com ensures that your domain stays authenticated even if PingDart mail server IPs change or scale, requiring zero future DNS maintenance.",
            type: "benefit"
        }
    });
    // ── 6. DKIM RECORD ───────────────────────────────────────────
    const dkimHostname = records.dkim?.selector ? `${records.dkim.selector}._domainkey` : "dkim._domainkey";
    renderRecordCard({
        type: "TXT",
        typeColor: [
            147,
            51,
            234
        ],
        badgeText: "SECURITY",
        isMatched: !!records.dkim?.match,
        hostname: dkimHostname,
        expected: records.dkim?.expected || "DKIM keys not generated yet.",
        actualError: !records.dkim?.match && records.dkim?.expected ? records.dkim?.actual || "No DKIM record found for this selector." : null
    });
    // ── 7. DMARC RECORD ──────────────────────────────────────────
    renderRecordCard({
        type: "TXT",
        typeColor: [
            79,
            70,
            229
        ],
        badgeText: "TRUST",
        isMatched: !!records.dmarc?.match,
        hostname: "_dmarc",
        expected: records.dmarc?.expected || "v=DMARC1; p=none; sp=none;",
        actualError: !records.dmarc?.match ? records.dmarc?.actual || "No DMARC record found." : null,
        callout: {
            icon: "🛡️",
            title: "Policy Roadmap:",
            text: "Start with p=none during onboarding. Once SPF & DKIM are established, upgrade to p=quarantine; pct=100; or p=reject; pct=100; to stop domain spoofing and qualify for BIMI certification in Gmail & Apple Mail.",
            type: "roadmap"
        }
    });
    // ── 8. EXTRA RECORDS LOOP ────────────────────────────────────
    const extraKeys = [
        "cname_mail",
        "mta_sts",
        "mta_sts_cname",
        "tls_rpt",
        "autoconfig",
        "autodiscover",
        "bimi"
    ];
    for (const key of extraKeys){
        const rec = records[key] || (key === "cname_mail" ? records["a_mail"] : null);
        if (!rec) continue;
        const isBimi = key === "bimi";
        const typeColor = isBimi ? [
            107,
            33,
            168
        ] : [
            100,
            116,
            139
        ];
        renderRecordCard({
            type: rec.type || (isBimi ? "TXT" : "CNAME"),
            typeColor,
            badgeText: isBimi ? "OPTIONAL" : "RECOMMENDED",
            isMatched: true,
            matchText: isBimi ? "OPTIONAL" : "RECOMMENDED",
            hostname: rec.key,
            expected: rec.expected
        });
        // If BIMI, render the COMPLETE 7-step guide and Pro-Tip verbatim!
        if (isBimi) {
            const bimiGuideHeight = 74;
            ensureSpace(bimiGuideHeight + 4);
            doc.setFillColor(250, 245, 255); // Purple 50
            doc.setDrawColor(233, 213, 255); // Purple 200
            doc.roundedRect(margin, currentY, contentWidth, bimiGuideHeight, 2, 2, "FD");
            // Title
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            doc.setTextColor(107, 33, 168);
            doc.text("✔ How to show your logo in Gmail (VMC Guide)", margin + 6, currentY + 6);
            // Intro
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            doc.setTextColor(...textDark);
            doc.text("To get a Verified Mark Certificate (VMC) for Gmail and other providers, follow these steps:", margin + 6, currentY + 11.5);
            // 7 Steps verbatim
            const bimiSteps = [
                "1. Register your trademark: Your logo must be a registered trademark (required for VMC).",
                "2. Configure email authentication: Before applying, ensure you have SPF, DKIM, and DMARC with p=quarantine or p=reject.",
                `3. Create an SVG Tiny PS logo: The SVG must meet strict BIMI requirements and be hosted on HTTPS (e.g., https://${domain}/logo.svg).`,
                "4. Buy a VMC: Purchase from an approved issuer like DigiCert, GlobalSign, or SSL.com.",
                "5. Receive the certificate: The CA will verify your company, domain, and trademark.",
                `6. Host the certificate: Host the received PEM file (e.g., https://${domain}/vmc.pem).`,
                "7. Add the BIMI DNS record: Add the TXT record shown above with both the l= (logo) and a= (VMC) tags."
            ];
            let stepY = currentY + 16.5;
            doc.setFontSize(7);
            for (const step of bimiSteps){
                doc.text(step, margin + 6, stepY);
                stepY += 4.5;
            }
            // Pro-Tip box verbatim
            stepY += 2;
            doc.setFillColor(243, 232, 255);
            doc.setDrawColor(216, 180, 254);
            doc.roundedRect(margin + 5, stepY, contentWidth - 10, 13, 1.5, 1.5, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.setTextColor(107, 33, 168);
            doc.text("💡 Pro-Tip (Free Gmail Hack):", margin + 8, stepY + 4.5);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(6.8);
            doc.setTextColor(...textDark);
            const proTipText = "If you don't have a registered trademark yet, you can create a standard Google Account using your custom email address and upload a profile picture. Gmail will often display this profile picture for free when you email other Gmail users.";
            const proTipWrapped = doc.splitTextToSize(proTipText, contentWidth - 16);
            doc.text(proTipWrapped, margin + 8, stepY + 8.5);
            currentY += bimiGuideHeight + 6;
        }
    }
    // ── 9. MASTER CONSOLIDATED DNS TABLE FOR IT ADMINS ──────────
    ensureSpace(45);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...primaryNavy);
    doc.text("Complete DNS Records Summary (Quick Admin Copy Sheet)", margin, currentY);
    currentY += 3;
    const masterTableRows = [
        [
            "MX",
            "@",
            records.mx?.expected || "mail.pingdart.com",
            records.mx?.match ? "MATCHED (OK)" : "ERROR / WRONG",
            "Priority: 10 (Required)"
        ],
        [
            "TXT",
            "@",
            records.spf?.expected || "v=spf1 include:_spf.pingdart.com -all",
            records.spf?.match ? "MATCHED (OK)" : "ERROR / WRONG",
            "SPF Deliverability"
        ],
        [
            "TXT",
            dkimHostname,
            records.dkim?.expected || "DKIM keys not generated yet.",
            records.dkim?.match ? "MATCHED (OK)" : "ERROR / WRONG",
            "DKIM Security Signature"
        ],
        [
            "TXT",
            "_dmarc",
            records.dmarc?.expected || "v=DMARC1; p=none; sp=none;",
            records.dmarc?.match ? "MATCHED (OK)" : "ERROR / WRONG",
            "DMARC Anti-Spoofing"
        ]
    ];
    for (const key of extraKeys){
        const rec = records[key] || (key === "cname_mail" ? records["a_mail"] : null);
        if (!rec) continue;
        masterTableRows.push([
            rec.type || (key === "bimi" ? "TXT" : "CNAME"),
            rec.key,
            rec.expected,
            "CONFIGURED",
            key === "bimi" ? "Optional (BIMI Logo)" : "Recommended"
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: currentY,
        margin: {
            left: margin,
            right: margin
        },
        head: [
            [
                "Type",
                "Host / Key",
                "Expected Value",
                "Status",
                "Notes & Priority"
            ]
        ],
        body: masterTableRows,
        theme: "grid",
        headStyles: {
            fillColor: primaryNavy,
            textColor: [
                255,
                255,
                255
            ],
            fontSize: 8,
            fontStyle: "bold",
            cellPadding: 2.5
        },
        columnStyles: {
            0: {
                cellWidth: 15,
                fontStyle: "bold",
                halign: "center"
            },
            1: {
                cellWidth: 32,
                fontStyle: "bold"
            },
            2: {
                cellWidth: 70,
                fontSize: 7
            },
            3: {
                cellWidth: 28,
                fontSize: 7,
                halign: "center"
            },
            4: {
                cellWidth: 37,
                fontSize: 7
            }
        },
        bodyStyles: {
            fontSize: 7.5,
            cellPadding: 2.5,
            textColor: textDark
        },
        alternateRowStyles: {
            fillColor: [
                248,
                250,
                252
            ]
        },
        didParseCell: (data)=>{
            if (data.section === "body" && data.column.index === 3) {
                const text = String(data.cell.raw);
                if (text.includes("MATCHED") || text.includes("CONFIGURED")) {
                    data.cell.styles.textColor = emeraldGreen;
                    data.cell.styles.fontStyle = "bold";
                } else {
                    data.cell.styles.textColor = redAlert;
                    data.cell.styles.fontStyle = "bold";
                }
            }
        }
    });
    // ── 10. PAGE FOOTERS ON EVERY PAGE ───────────────────────────
    const totalPages = doc.getNumberOfPages();
    for(let i = 1; i <= totalPages; i++){
        doc.setPage(i);
        // Separator line
        doc.setDrawColor(226, 232, 240);
        doc.line(margin, pageHeight - 11, pageWidth - margin, pageHeight - 11);
        // Footer Text
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(...textMuted);
        doc.text(`PingDart Mail Platform • Enterprise DNS Configuration Report (${domain}) • Confidential`, margin, pageHeight - 6.5);
        const pageStr = `Page ${i} of ${totalPages}`;
        const pageStrWidth = doc.getTextWidth(pageStr);
        doc.text(pageStr, pageWidth - margin - pageStrWidth, pageHeight - 6.5);
    }
    return doc;
}
function downloadDnsPdf(domain, dnsStatus) {
    const doc = generateDnsPdf({
        domain,
        dnsStatus
    });
    const sanitizedDomain = domain.toLowerCase().replace(/[^a-z0-9.-]/g, "_");
    doc.save(`${sanitizedDomain}-dns-configuration.pdf`);
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
];

//# sourceMappingURL=src_585af008._.js.map