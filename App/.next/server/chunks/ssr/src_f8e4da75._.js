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
"[project]/src/utils/imageUploadHelper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processCatalogImageUploads",
    ()=>processCatalogImageUploads,
    "uploadImageOrUrlToBackend",
    ()=>uploadImageOrUrlToBackend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
async function uploadImageOrUrlToBackend(imageUrl) {
    if (!imageUrl || typeof imageUrl !== "string") return imageUrl;
    const trimmed = imageUrl.trim();
    if (!trimmed) return trimmed;
    // Already hosted on backend
    if (trimmed.startsWith("/uploads/")) return trimmed;
    // Upload external image URL or base64 data URL to backend
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("data:image/")) {
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/user/upload-media", {
                imageUrl: trimmed
            });
            if (res.data?.success && res.data?.url) {
                return res.data.url;
            }
        } catch (err) {
            console.warn("[imageUploadHelper] Upload image URL to backend failed:", err?.message || err);
        }
    }
    return trimmed;
}
async function processCatalogImageUploads(items) {
    const processed = await Promise.all(items.map(async (item)=>{
        const updatedItem = {
            ...item
        };
        if (updatedItem.imageUrl) {
            updatedItem.imageUrl = await uploadImageOrUrlToBackend(updatedItem.imageUrl);
        }
        if (updatedItem.icon && (updatedItem.icon.startsWith("http") || updatedItem.icon.startsWith("data:image"))) {
            updatedItem.icon = await uploadImageOrUrlToBackend(updatedItem.icon);
        }
        return updatedItem;
    }));
    return processed;
}
}),
"[project]/src/utils/excelCsvImporter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATALOG_EXCEL_HEADERS",
    ()=>CATALOG_EXCEL_HEADERS,
    "SAMPLE_EXCEL_ROWS",
    ()=>SAMPLE_EXCEL_ROWS,
    "downloadSampleExcelSheet",
    ()=>downloadSampleExcelSheet,
    "exportCatalogToExcelSheet",
    ()=>exportCatalogToExcelSheet,
    "parseCSVString",
    ()=>parseCSVString,
    "parseImportedCatalogFile",
    ()=>parseImportedCatalogFile
]);
const CATALOG_EXCEL_HEADERS = [
    "Type",
    "Category",
    "Product Name",
    "Price",
    "Currency",
    "BillingCycle",
    "Description",
    "Purchase Link",
    "SKU",
    "Tags",
    "Availability",
    "Image URL"
];
const SAMPLE_EXCEL_ROWS = [
    [
        "service",
        "Patient Growth & SEO",
        "Doctor Google Maps Local SEO & GMB Optimization",
        "14999",
        "INR",
        "1month",
        "Rank clinic #1 on Google Maps for local patient searches like 'best doctor near me'. Includes Google Business Profile optimization and review management.",
        "https://tech2day.co.in/doctor-seo",
        "MED-SEO-01",
        "doctor seo, gmb, clinic ranking",
        "in_stock",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80"
    ],
    [
        "product",
        "Doctor Websites & Branding",
        "Custom Medical & Clinic Website Development",
        "35000",
        "INR",
        "onetime",
        "HIPAA-compliant, fast-loading responsive website tailored for doctors and specialty clinics. Features online appointment booking and doctor profiles.",
        "https://tech2day.co.in/doctor-websites",
        "MED-WEB-02",
        "doctor website, clinic web design",
        "in_stock",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80"
    ],
    [
        "service",
        "Social Media & Ads",
        "High-Converting Patient Lead Ads (Meta & Google)",
        "24999",
        "INR",
        "1month",
        "Targeted Facebook, Instagram, and Google Search ad campaigns designed to acquire high-value private consultation and surgical leads.",
        "https://tech2day.co.in/doctor-ads",
        "MED-ADS-03",
        "facebook ads, google ads, patient leads",
        "in_stock",
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80"
    ],
    [
        "service",
        "Doctor Websites & Branding",
        "Doctor Personal Branding & Video Reels Suite",
        "19999",
        "INR",
        "1month",
        "Professional medical reel creation, health tips video editing, scriptwriting, and personal brand building on Instagram Reels & YouTube Shorts.",
        "https://tech2day.co.in/doctor-branding",
        "MED-VID-04",
        "reels, doctor branding, medical videos",
        "in_stock",
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80"
    ],
    [
        "service",
        "Clinic Automation & CRM",
        "Automated WhatsApp Clinic Appointment & Reminder System",
        "9999",
        "INR",
        "1month",
        "Automated WhatsApp bot for 24/7 appointment scheduling, automated patient reminder alerts to reduce no-shows, and lab report delivery.",
        "https://tech2day.co.in/clinic-whatsapp",
        "MED-AUTO-05",
        "whatsapp bot, appointment reminder",
        "in_stock",
        "https://images.unsplash.com/photo-1616587896595-51352538155b?w=500&q=80"
    ]
];
// Helper to escape CSV field value
const escapeCSV = (val)=>{
    if (val === null || val === undefined) return '""';
    const str = String(val);
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
};
function downloadSampleExcelSheet() {
    const csvLines = [
        CATALOG_EXCEL_HEADERS.map(escapeCSV).join(","),
        ...SAMPLE_EXCEL_ROWS.map((row)=>row.map(escapeCSV).join(","))
    ];
    const csvContent = csvLines.join("\n");
    const blob = new Blob([
        "\uFEFF" + csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "catalog_products_sample_template.csv";
    a.click();
    URL.revokeObjectURL(url);
}
function exportCatalogToExcelSheet(catalog, categories) {
    const csvLines = [
        CATALOG_EXCEL_HEADERS.map(escapeCSV).join(",")
    ];
    catalog.forEach((item)=>{
        const row = [
            item.itemType || "product",
            item.category || "General",
            item.name || "",
            item.price || "0",
            item.currency || "USD",
            item.billingCycle || "onetime",
            item.description || "",
            item.link || "",
            item.sku || "",
            (item.tags || []).join(", "),
            item.availability || "in_stock",
            item.imageUrl || ""
        ];
        csvLines.push(row.map(escapeCSV).join(","));
    });
    const csvContent = csvLines.join("\n");
    const blob = new Blob([
        "\uFEFF" + csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `catalog_export_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}
function parseCSVString(csvText) {
    const lines = [];
    let curRow = [];
    let curVal = "";
    let inQuotes = false;
    // Clean BOM header if present
    const text = csvText.startsWith("\uFEFF") ? csvText.slice(1) : csvText;
    for(let i = 0; i < text.length; i++){
        const char = text[i];
        const nextChar = text[i + 1];
        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                curVal += '"';
                i++; // skip escaped quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === "," && !inQuotes) {
            curRow.push(curVal.trim());
            curVal = "";
        } else if ((char === "\r" || char === "\n") && !inQuotes) {
            if (char === "\r" && nextChar === "\n") {
                i++;
            }
            curRow.push(curVal.trim());
            if (curRow.some((cell)=>cell.length > 0)) {
                lines.push(curRow);
            }
            curRow = [];
            curVal = "";
        } else {
            curVal += char;
        }
    }
    if (curVal.length > 0 || curRow.length > 0) {
        curRow.push(curVal.trim());
        if (curRow.some((cell)=>cell.length > 0)) {
            lines.push(curRow);
        }
    }
    return lines;
}
function parseImportedCatalogFile(fileContent, fileName) {
    const isJson = fileName.endsWith(".json") || fileContent.trim().startsWith("[") || fileContent.trim().startsWith("{");
    if (isJson) {
        const parsed = JSON.parse(fileContent);
        let rawItems = [];
        if (Array.isArray(parsed)) {
            rawItems = parsed;
        } else if (parsed && Array.isArray(parsed.items)) {
            rawItems = parsed.items;
        } else if (parsed && Array.isArray(parsed.products)) {
            rawItems = parsed.products;
        } else if (parsed && Array.isArray(parsed.catalog)) {
            rawItems = parsed.catalog;
        }
        const items = [];
        const catMap = new Map();
        rawItems.forEach((it, idx)=>{
            if (!it || !it.name) return;
            const catName = it.category || "General";
            if (!catMap.has(catName)) {
                catMap.set(catName, {
                    id: `cat_parsed_${Date.now()}_${idx}`,
                    name: catName,
                    icon: it.categoryIcon || "📁",
                    description: `Items under ${catName}`
                });
            }
            items.push({
                id: it.id || `item_import_${Date.now()}_${idx}`,
                name: String(it.name).trim(),
                itemType: it.itemType === "service" ? "service" : "product",
                category: catName,
                price: String(it.price || "0").trim(),
                currency: String(it.currency || "USD").trim().toUpperCase(),
                billingCycle: it.billingCycle || "onetime",
                description: String(it.description || "").trim(),
                link: String(it.link || "").trim(),
                sku: it.sku ? String(it.sku).trim() : undefined,
                tags: Array.isArray(it.tags) ? it.tags : it.tags ? String(it.tags).split(",").map((t)=>t.trim()) : undefined,
                availability: it.availability || "in_stock",
                imageUrl: it.imageUrl || it.image || undefined
            });
        });
        return {
            items,
            detectedCategories: Array.from(catMap.values())
        };
    }
    // Parse CSV format
    const rows = parseCSVString(fileContent);
    if (rows.length < 2) {
        throw new Error("File contains no data rows.");
    }
    const headerRow = rows[0].map((h)=>h.toLowerCase());
    // Find column indices
    const getColIdx = (names)=>{
        return headerRow.findIndex((h)=>names.some((n)=>h.includes(n)));
    };
    const typeIdx = getColIdx([
        "type",
        "offering"
    ]);
    const catIdx = getColIdx([
        "category",
        "cat"
    ]);
    const nameIdx = getColIdx([
        "name",
        "product",
        "title"
    ]);
    const priceIdx = getColIdx([
        "price",
        "rate",
        "cost",
        "amount"
    ]);
    const currencyIdx = getColIdx([
        "currency",
        "curr"
    ]);
    const billingIdx = getColIdx([
        "billing",
        "cycle",
        "duration"
    ]);
    const descIdx = getColIdx([
        "description",
        "desc",
        "details"
    ]);
    const linkIdx = getColIdx([
        "link",
        "url",
        "checkout"
    ]);
    const skuIdx = getColIdx([
        "sku",
        "code"
    ]);
    const tagsIdx = getColIdx([
        "tags",
        "keywords"
    ]);
    const availIdx = getColIdx([
        "availability",
        "stock"
    ]);
    const imgIdx = getColIdx([
        "image",
        "img",
        "photo"
    ]);
    const items = [];
    const catMap = new Map();
    for(let r = 1; r < rows.length; r++){
        const row = rows[r];
        const name = nameIdx >= 0 ? row[nameIdx] : row[2] || row[0];
        if (!name || !name.trim()) continue;
        const catName = (catIdx >= 0 ? row[catIdx] : row[1]) || "General";
        if (!catMap.has(catName)) {
            catMap.set(catName, {
                id: `cat_csv_${Date.now()}_${r}`,
                name: catName,
                icon: "📁",
                description: `Category for ${catName}`
            });
        }
        const typeStr = (typeIdx >= 0 ? row[typeIdx] : "").toLowerCase();
        const itemType = typeStr.includes("service") ? "service" : "product";
        const tagsStr = tagsIdx >= 0 ? row[tagsIdx] : "";
        const parsedTags = tagsStr ? tagsStr.split(/[,;]/).map((t)=>t.trim()).filter(Boolean) : undefined;
        items.push({
            id: `item_csv_${Date.now()}_${r}`,
            name: name.trim(),
            itemType,
            category: catName,
            price: (priceIdx >= 0 ? row[priceIdx] : "0").replace(/[^0-9.]/g, "") || "0",
            currency: (currencyIdx >= 0 ? row[currencyIdx] : "USD").toUpperCase() || "USD",
            billingCycle: billingIdx >= 0 ? row[billingIdx] : "onetime",
            description: descIdx >= 0 ? row[descIdx] : "",
            link: linkIdx >= 0 ? row[linkIdx] : "",
            sku: skuIdx >= 0 && row[skuIdx] ? row[skuIdx] : undefined,
            tags: parsedTags,
            availability: availIdx >= 0 && row[availIdx] ? row[availIdx] : "in_stock",
            imageUrl: imgIdx >= 0 && row[imgIdx] ? row[imgIdx] : undefined
        });
    }
    return {
        items,
        detectedCategories: Array.from(catMap.values())
    };
}
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
"[project]/src/services/pluginRegistry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginApi",
    ()=>pluginApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const pluginApi = {
    // Fetch available App Store catalog
    getCatalog: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/modules/catalog");
        return res.data?.success ? res.data : {
            modules: [],
            installedMap: {}
        };
    },
    // Fetch current user's installed/active modules
    getMyModules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/modules/my-modules");
        return res.data?.success ? res.data.installed || [] : [];
    },
    // Install or activate module
    installModule: async (moduleId, settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/install", {
            moduleId,
            settings
        });
        return res.data;
    },
    // Uninstall or deactivate module
    uninstallModule: async (moduleId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/uninstall", {
            moduleId
        });
        return res.data;
    },
    // Update module settings
    updateSettings: async (moduleId, settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/modules/${moduleId}/settings`, {
            settings
        });
        return res.data;
    },
    // Entity records (Appointments, Patients, Treatments, Tables, Prescriptions, etc.)
    getRecords: async (moduleId, entityType, params)=>{
        const query = new URLSearchParams();
        if (params?.chatId) query.set("chatId", params.chatId);
        if (params?.customerId) query.set("customerId", String(params.customerId));
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/modules/${moduleId}/records/${entityType}?${query.toString()}`);
        return res.data?.success ? res.data.records || [] : [];
    },
    createRecord: async (moduleId, entityType, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/modules/${moduleId}/records/${entityType}`, payload);
        return res.data;
    },
    updateRecord: async (moduleId, entityType, recordId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/modules/${moduleId}/records/${entityType}/${recordId}`, {
            data
        });
        return res.data;
    },
    deleteRecord: async (moduleId, entityType, recordId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/modules/${moduleId}/records/${entityType}/${recordId}`);
        return res.data;
    },
    // 3rd-Party Developer Publishing to App Store Portal
    publishModule: async (moduleData)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/publish", moduleData);
        return res.data;
    }
};
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
"[project]/src/lib/plugins/native/KillSwitchCache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Kill Switch Cache
 * 30-second TTL cache for platform-level emergency kill switches.
 */ __turbopack_context__.s([
    "clearKillSwitchCache",
    ()=>clearKillSwitchCache,
    "isPermissionGloballyEnabled",
    ()=>isPermissionGloballyEnabled
]);
let killSwitchState = {};
let lastFetchedTime = 0;
const CACHE_TTL_MS = 30000; // 30 seconds
async function isPermissionGloballyEnabled(permission, apiUrl = '/api/v1/plugins') {
    const now = Date.now();
    if (now - lastFetchedTime > CACHE_TTL_MS) {
        try {
            const res = await fetch(`${apiUrl}/native/kill-switches`);
            if (res.ok) {
                const json = await res.json();
                if (json.success && json.data) {
                    killSwitchState = json.data;
                    lastFetchedTime = now;
                }
            }
        } catch (e) {
            console.warn('[KillSwitchCache] Failed fetching kill switches:', e);
        }
    }
    // Default to enabled if not found
    return killSwitchState[permission] !== false;
}
function clearKillSwitchCache() {
    lastFetchedTime = 0;
}
}),
"[project]/src/lib/plugins/native/RateLimiter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Rate Limiter
 * Sliding window rate limiter per plugin per native capability.
 */ __turbopack_context__.s([
    "checkRateLimit",
    ()=>checkRateLimit
]);
const DEFAULT_RATE_LIMITS = {
    'native.camera': 10,
    'native.geolocation': 60,
    'native.filesystem': 100,
    'native.push': 5,
    'native.biometrics': 20,
    'native.contacts': 10,
    'native.device': 120,
    'native.haptics': 300
};
// Map key: `${pluginId}:${permission}` -> array of timestamps
const callTimestampsMap = new Map();
function checkRateLimit(pluginId, permission) {
    const limit = DEFAULT_RATE_LIMITS[permission] || 60;
    const windowMs = 60000; // 1 minute
    const now = Date.now();
    const key = `${pluginId}:${permission}`;
    let timestamps = callTimestampsMap.get(key) || [];
    // Filter out timestamps older than window
    timestamps = timestamps.filter((t)=>now - t < windowMs);
    if (timestamps.length >= limit) {
        callTimestampsMap.set(key, timestamps);
        return {
            allowed: false,
            limit,
            remaining: 0
        };
    }
    timestamps.push(now);
    callTimestampsMap.set(key, timestamps);
    return {
        allowed: true,
        limit,
        remaining: limit - timestamps.length
    };
}
}),
"[project]/src/lib/plugins/native/PermissionManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Permission Manager
 * Manages user approval prompts and saves user permission choices ('once', 'always', 'denied').
 */ __turbopack_context__.s([
    "promptUserForPermission",
    ()=>promptUserForPermission,
    "registerPermissionPromptHandler",
    ()=>registerPermissionPromptHandler,
    "saveUserPermissionChoice",
    ()=>saveUserPermissionChoice
]);
let activePromptHandler = null;
function registerPermissionPromptHandler(handler) {
    activePromptHandler = handler;
    return ()=>{
        activePromptHandler = null;
    };
}
async function promptUserForPermission(req) {
    if (!activePromptHandler) {
        console.warn('[PermissionManager] No prompt handler registered! Defaulting to denied.');
        return 'denied';
    }
    return await activePromptHandler(req);
}
async function saveUserPermissionChoice(tenantId, pluginId, permission, granted, apiUrl = '/api/v1/plugins') {
    try {
        await fetch(`${apiUrl}/native/permission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tenantId,
                pluginId,
                permission,
                granted,
                grantedBy: 'user'
            })
        });
    } catch (e) {
        console.warn('[PermissionManager] Failed saving user permission choice:', e);
    }
}
}),
"[project]/src/lib/plugins/native/TenantPolicyEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Tenant Policy Engine
 * Implements 5-level priority chain:
 * 1. Platform Kill Switch
 * 2. Tenant Policy
 * 3. Manifest Permission Declaration
 * 4. User Runtime Approval
 * 5. Native Execution
 */ __turbopack_context__.s([
    "evaluatePolicyChain",
    ()=>evaluatePolicyChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$KillSwitchCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/KillSwitchCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$RateLimiter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/RateLimiter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/PermissionManager.ts [app-ssr] (ecmascript)");
;
;
;
async function evaluatePolicyChain(tenantId, pluginId, pluginName, permission, manifest, apiUrl = '/api/v1/plugins') {
    // ──── Priority 1: Platform Emergency Kill Switch ───────────────────────────
    const globallyEnabled = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$KillSwitchCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPermissionGloballyEnabled"])(permission, apiUrl);
    if (!globallyEnabled) {
        return {
            allowed: false,
            reason: 'kill_switch_blocked',
            message: `Native permission '${permission}' is globally disabled by platform administrators.`
        };
    }
    // ──── Priority 2: Manifest Declaration ──────────────────────────────────────
    if (manifest) {
        const permissions = manifest.permissions || [];
        const hasDeclared = permissions.includes(permission) || permissions.includes(permission.replace('native.', ''));
        if (!hasDeclared) {
            return {
                allowed: false,
                reason: 'manifest_missing',
                message: `Plugin '${pluginName}' did not declare permission '${permission}' in its manifest.json.`
            };
        }
    }
    // ──── Priority 3: Rate Limiter ───────────────────────────────────────────────
    const rate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$RateLimiter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkRateLimit"])(pluginId, permission);
    if (!rate.allowed) {
        return {
            allowed: false,
            reason: 'rate_limited',
            message: `Rate limit exceeded for permission '${permission}'. Allowed: ${rate.limit}/min.`
        };
    }
    // ──── Priority 4: Backend Evaluation (Tenant Policy & User History) ───────
    try {
        const res = await fetch(`${apiUrl}/native/evaluate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tenantId,
                pluginId,
                permission
            })
        });
        if (res.ok) {
            const evalData = await res.json();
            if (!evalData.allowed && evalData.reason === 'tenant_policy_denied') {
                return {
                    allowed: false,
                    reason: 'tenant_policy_denied',
                    message: evalData.message || 'Denied by tenant organization policy.'
                };
            }
            if (evalData.allowed && !evalData.requiresApprovalDialog) {
                return {
                    allowed: true,
                    reason: 'allowed'
                };
            }
        }
    } catch (e) {
        console.warn('[TenantPolicyEngine] Backend eval check failed, falling back to prompt:', e);
    }
    // ──── Priority 5: User Runtime Approval Dialog ─────────────────────────────
    const userChoice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promptUserForPermission"])({
        pluginId,
        pluginName,
        permission,
        actionLabel: getActionLabel(permission)
    });
    if (userChoice === 'denied') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserPermissionChoice"])(tenantId, pluginId, permission, 'denied', apiUrl);
        return {
            allowed: false,
            reason: 'user_denied',
            message: 'User denied permission request.'
        };
    }
    if (userChoice === 'always') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserPermissionChoice"])(tenantId, pluginId, permission, 'always', apiUrl);
    }
    return {
        allowed: true,
        reason: 'allowed'
    };
}
function getActionLabel(permission) {
    switch(permission){
        case 'native.camera':
            return '📷 Camera Access';
        case 'native.geolocation':
            return '📍 Location Access';
        case 'native.filesystem':
            return '📂 Filesystem Access';
        case 'native.push':
            return '🔔 Push Notifications';
        case 'native.biometrics':
            return '👆 Biometric Authentication';
        case 'native.contacts':
            return '📇 Contacts Access';
        case 'native.device':
            return '📱 Device Info';
        case 'native.haptics':
            return '📳 Haptics';
        default:
            return `⚡ ${permission}`;
    }
}
}),
"[project]/src/lib/plugins/native/AuditLogger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Audit Logger
 * Flushes native invocation log entries to the backend API for enterprise compliance (HIPAA / GDPR).
 */ __turbopack_context__.s([
    "logNativeCall",
    ()=>logNativeCall
]);
async function logNativeCall(entry, apiUrl = '/api/v1/plugins') {
    try {
        // Sanitize payload (remove huge base64 strings if any)
        const sanitizedPayload = {
            ...entry.payload
        };
        if (sanitizedPayload.base64) sanitizedPayload.base64 = '[base64_truncated]';
        if (sanitizedPayload.data && typeof sanitizedPayload.data === 'string' && sanitizedPayload.data.length > 500) {
            sanitizedPayload.data = sanitizedPayload.data.substring(0, 500) + '...[truncated]';
        }
        await fetch(`${apiUrl}/native/audit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tenantId: entry.tenantId || 'default',
                pluginId: entry.pluginId,
                userId: entry.userId || 'current_user',
                action: entry.action,
                permission: entry.permission,
                payload: sanitizedPayload,
                result: entry.result,
                durationMs: entry.durationMs
            })
        });
    } catch (e) {
        console.warn('[AuditLogger] Failed sending native audit log:', e);
    }
}
}),
"[project]/src/lib/plugins/native/CapabilityDetector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Capability Detector
 * Detects device / browser native capabilities dynamically.
 */ __turbopack_context__.s([
    "detectNativeCapabilities",
    ()=>detectNativeCapabilities
]);
function detectNativeCapabilities() {
    const isBrowser = "undefined" !== 'undefined';
    const hasCapacitor = isBrowser && Boolean(window.Capacitor);
    const nav = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
    return {
        camera: hasCapacitor || Boolean(nav.mediaDevices?.getUserMedia),
        geolocation: hasCapacitor || Boolean(nav.geolocation),
        filesystem: hasCapacitor || Boolean(isBrowser && (window.storage || nav.storage || window.indexedDB)),
        push: hasCapacitor || Boolean(isBrowser && 'Notification' in window),
        device: true,
        haptics: hasCapacitor || Boolean(nav.vibrate),
        biometrics: hasCapacitor || Boolean(isBrowser && window.PublicKeyCredential),
        contacts: hasCapacitor || Boolean(nav.contacts),
        bluetooth: hasCapacitor || Boolean(nav.bluetooth),
        nfc: hasCapacitor || Boolean(window.NDEFReader),
        barcode: hasCapacitor || Boolean(window.BarcodeDetector),
        share: hasCapacitor || Boolean(nav.share)
    };
}
}),
"[project]/src/lib/plugins/native/NativeBridgeGateway.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge Gateway
 * Host-side postMessage listener & dispatcher with origin validation, policy evaluation, audit logging, and native API execution.
 */ __turbopack_context__.s([
    "NativeBridgeGateway",
    ()=>NativeBridgeGateway
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$TenantPolicyEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/TenantPolicyEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$AuditLogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/AuditLogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$CapabilityDetector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/CapabilityDetector.ts [app-ssr] (ecmascript)");
;
;
;
class NativeBridgeGateway {
    tenantId;
    pluginId;
    pluginName;
    manifest;
    apiUrl;
    messageListener = null;
    constructor(options){
        this.tenantId = options.tenantId || 'default';
        this.pluginId = options.pluginId;
        this.pluginName = options.pluginName;
        this.manifest = options.manifest;
        this.apiUrl = options.apiUrl || '/api/v1/plugins';
    }
    mount() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    unmount() {
        if ("undefined" !== 'undefined' && this.messageListener) //TURBOPACK unreachable
        ;
    }
    getPermissionKey(apiName) {
        const mainModule = apiName.split('.')[0].toLowerCase();
        switch(mainModule){
            case 'camera':
                return 'native.camera';
            case 'geolocation':
            case 'location':
                return 'native.geolocation';
            case 'filesystem':
            case 'files':
                return 'native.filesystem';
            case 'push':
                return 'native.push';
            case 'biometrics':
            case 'biometric':
                return 'native.biometrics';
            case 'contacts':
                return 'native.contacts';
            case 'device':
                return 'native.device';
            case 'haptics':
                return 'native.haptics';
            default:
                return `native.${mainModule}`;
        }
    }
    async executeNativeMethod(apiName, args) {
        const isCapacitor = "undefined" !== 'undefined' && Boolean(window.Capacitor);
        const cap = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        switch(apiName){
            // ─── Camera ────────────────────────────────────────────────────────────
            case 'camera.getPhoto':
            case 'camera.open':
                if (cap?.Camera) {
                    return await cap.Camera.getPhoto(args || {
                        quality: 90,
                        allowEditing: true
                    });
                }
                // Browser fallback / demo mode
                return {
                    photoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
                    format: 'jpeg',
                    timestamp: Date.now()
                };
            case 'camera.pickImages':
                if (cap?.Camera) return await cap.Camera.pickImages(args);
                return [
                    {
                        photoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
                    }
                ];
            // ─── Geolocation ───────────────────────────────────────────────────────
            case 'geolocation.getCurrentPosition':
            case 'location.current':
                if (cap?.Geolocation) return await cap.Geolocation.getCurrentPosition(args);
                if (typeof navigator !== 'undefined' && navigator.geolocation) {
                    return new Promise((resolve, reject)=>{
                        navigator.geolocation.getCurrentPosition((pos)=>resolve({
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                                accuracy: pos.coords.accuracy,
                                timestamp: pos.timestamp
                            }), (err)=>reject(new Error(err.message)));
                    });
                }
                return {
                    latitude: 37.7749,
                    longitude: -122.4194,
                    accuracy: 10,
                    timestamp: Date.now()
                };
            // ─── Filesystem ────────────────────────────────────────────────────────
            case 'filesystem.readFile':
            case 'files.read':
                if (cap?.Filesystem) return await cap.Filesystem.readFile(args);
                return {
                    data: `[File Content for ${args.path || 'document.pdf'}]`,
                    encoding: 'utf8'
                };
            case 'filesystem.writeFile':
            case 'files.write':
                if (cap?.Filesystem) return await cap.Filesystem.writeFile(args);
                return {
                    path: args.path || 'doc.pdf',
                    bytesWritten: (args.data || '').length,
                    success: true
                };
            case 'filesystem.deleteFile':
            case 'files.delete':
                if (cap?.Filesystem) return await cap.Filesystem.deleteFile(args);
                return {
                    success: true
                };
            // ─── Push Notifications ────────────────────────────────────────────────
            case 'push.register':
                if (cap?.PushNotifications) return await cap.PushNotifications.register();
                return {
                    token: `push_token_${this.pluginId}_${Date.now()}`
                };
            // ─── Device ────────────────────────────────────────────────────────────
            case 'device.getInfo':
                if (cap?.Device) return await cap.Device.getInfo();
                return {
                    platform: 'web',
                    osVersion: '1.0',
                    model: 'Browser',
                    manufacturer: 'Generic'
                };
            // ─── Haptics ───────────────────────────────────────────────────────────
            case 'haptics.impact':
                if (cap?.Haptics) return await cap.Haptics.impact(args);
                if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(50);
                return {
                    success: true
                };
            // ─── Biometrics ────────────────────────────────────────────────────────
            case 'biometrics.authenticate':
            case 'biometric.authenticate':
                if (cap?.Biometric) return await cap.Biometric.authenticate(args);
                return {
                    success: true,
                    timestamp: Date.now()
                };
            // ─── Contacts ──────────────────────────────────────────────────────────
            case 'contacts.getContacts':
            case 'contacts.list':
                if (cap?.Contacts) return await cap.Contacts.getContacts(args);
                return [
                    {
                        id: 'c1',
                        displayName: 'Dr. Sarah Connor',
                        phone: '+1 555-0192'
                    },
                    {
                        id: 'c2',
                        displayName: 'Dr. Marcus Vance',
                        phone: '+1 555-0144'
                    }
                ];
            default:
                throw new Error(`Unsupported native capability method '${apiName}'`);
        }
    }
    respondSuccess(target, targetOrigin, id, result) {
        if (!target) return;
        const origin = targetOrigin && targetOrigin !== 'null' ? targetOrigin : '*';
        target.postMessage({
            id,
            requestId: id,
            type: 'PINGDART_NATIVE_RESPONSE',
            __pingdart_native_result__: id,
            success: true,
            result
        }, origin);
    }
    respondError(target, targetOrigin, id, code, message) {
        if (!target) return;
        const origin = targetOrigin && targetOrigin !== 'null' ? targetOrigin : '*';
        target.postMessage({
            id,
            requestId: id,
            type: 'PINGDART_NATIVE_RESPONSE',
            __pingdart_native_result__: id,
            success: false,
            error: {
                code,
                message
            }
        }, origin);
    }
}
}),
];

//# sourceMappingURL=src_f8e4da75._.js.map