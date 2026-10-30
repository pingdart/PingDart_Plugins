(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/settings/BusinessProfileSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusinessProfileSettings",
    ()=>BusinessProfileSettings,
    "CATEGORY_TO_BUSINESS_TYPE",
    ()=>CATEGORY_TO_BUSINESS_TYPE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ShoppingBag01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ShoppingBag01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Analytics01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Briefcase01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowDown01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/businessMenuConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currencyUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CatalogItemModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/CatalogItemModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CurrencyConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/CurrencyConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CrmDealModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/CrmDealModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$BulkImportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/BulkImportModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$FrontCmsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/FrontCmsSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CrmSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/CrmSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$OrdersSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/OrdersSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$EnquiriesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/EnquiriesSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$IdentitySubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/IdentitySubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$HoursSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/HoursSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CatalogSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/CatalogSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$MessagesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/MessagesSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$QuickRepliesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/QuickRepliesSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$LabelsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/LabelsSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ShortlinkSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/ShortlinkSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$LegalsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/LegalsSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$AnalyticsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/AnalyticsSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$TeamSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/TeamSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$AiSuiteSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/AiSuiteSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$SubscriptionSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/SubscriptionSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ReferralSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/ReferralSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$MeetingBookingSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/MeetingBookingSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ServicesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/ServicesSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CustomerDirectorySubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/CustomerDirectorySubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ReviewsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/ReviewsSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$BranchesAndGallerySubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/BranchesAndGallerySubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$GrowthHubSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/GrowthHubSubTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ChatWidgetSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BusinessComponents/ChatWidgetSubTab.tsx [app-client] (ecmascript)");
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
const sanitizeCatalogCategories = (cats)=>{
    if (!Array.isArray(cats) || cats.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_CATEGORIES"];
    return cats.map((cat, idx)=>{
        let name = (typeof (cat === null || cat === void 0 ? void 0 : cat.name) === "string" ? cat.name.trim() : "") || `Category ${idx + 1}`;
        let icon = (cat === null || cat === void 0 ? void 0 : cat.icon) || "📦";
        if (name.startsWith("data:image")) {
            if (!icon || icon === "📦" || icon === "📁") {
                icon = name;
            }
            name = `Custom Category ${idx + 1}`;
        }
        return {
            id: (cat === null || cat === void 0 ? void 0 : cat.id) || `cat_${Date.now()}_${idx}`,
            name,
            icon,
            description: (cat === null || cat === void 0 ? void 0 : cat.description) || ""
        };
    });
};
const BUSINESS_CATEGORIES = [
    "IT & Software Services",
    "Retail & E-commerce",
    "Restaurant, Cafe & Food",
    "Health, Beauty & Spa",
    "Fitness, Gym & Sports",
    "Education & Coaching",
    "Automobile & Rentals",
    "Real Estate & Construction",
    "Financial & Legal Consulting",
    "Marketing & Creative Agency",
    "Hospitality & Tourism",
    "Other Enterprise"
];
const CATEGORY_TO_BUSINESS_TYPE = {
    "IT & Software Services": "agency",
    "Marketing & Creative Agency": "agency",
    "Financial & Legal Consulting": "freelancer",
    "Retail & E-commerce": "shop",
    "Restaurant, Cafe & Food": "restaurant",
    "Health, Beauty & Spa": "clinic",
    "Fitness, Gym & Sports": "clinic",
    "Education & Coaching": "education",
    "Real Estate & Construction": "real_estate",
    "Automobile & Rentals": "shop",
    "Hospitality & Tourism": "restaurant",
    "Other Enterprise": "other"
};
const DAYS_OF_WEEK = [
    {
        key: "mon",
        label: "Monday"
    },
    {
        key: "tue",
        label: "Tuesday"
    },
    {
        key: "wed",
        label: "Wednesday"
    },
    {
        key: "thu",
        label: "Thursday"
    },
    {
        key: "fri",
        label: "Friday"
    },
    {
        key: "sat",
        label: "Saturday"
    },
    {
        key: "sun",
        label: "Sunday"
    }
];
const DEFAULT_SCHEDULE = {
    mon: {
        enabled: true,
        open: "09:00",
        close: "18:00"
    },
    tue: {
        enabled: true,
        open: "09:00",
        close: "18:00"
    },
    wed: {
        enabled: true,
        open: "09:00",
        close: "18:00"
    },
    thu: {
        enabled: true,
        open: "09:00",
        close: "18:00"
    },
    fri: {
        enabled: true,
        open: "09:00",
        close: "18:00"
    },
    sat: {
        enabled: true,
        open: "10:00",
        close: "16:00"
    },
    sun: {
        enabled: false,
        open: "09:00",
        close: "18:00"
    }
};
function BusinessProfileSettings({ onBack, initialSubTab, onSubTabChange }) {
    var _this, _this1, _this2, _this3, _this4, _this5;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "BusinessProfileSettings.useAuthStore[user]": (state)=>state.user
    }["BusinessProfileSettings.useAuthStore[user]"]);
    const updateUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "BusinessProfileSettings.useAuthStore[updateUser]": (state)=>state.updateUser
    }["BusinessProfileSettings.useAuthStore[updateUser]"]);
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSubTab || "hub");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessProfileSettings.useEffect": ()=>{
            if (initialSubTab && initialSubTab !== activeSubTab) {
                setActiveSubTab(initialSubTab);
            }
        }
    }["BusinessProfileSettings.useEffect"], [
        initialSubTab
    ]);
    const handleSubTabSwitch = (st)=>{
        setActiveSubTab(st);
        if (onSubTabChange) onSubTabChange(st);
        const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
        newParams.set("tab", "Settings");
        newParams.set("section", "business");
        newParams.set("subtab", st);
        if ("TURBOPACK compile-time truthy", 1) {
            window.history.replaceState(null, "", `/user?${newParams.toString()}`);
        }
    };
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Business Category & Module Workspace State
    const [businessType, setBusinessType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("other");
    const [showAllModules, setShowAllModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentCategoryMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[currentCategoryMeta]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryMeta"])(businessType)
    }["BusinessProfileSettings.useMemo[currentCategoryMeta]"], [
        businessType
    ]);
    const activeBusinessMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[activeBusinessMenu]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuByBusinessType"])(businessType, showAllModules)
    }["BusinessProfileSettings.useMemo[activeBusinessMenu]"], [
        businessType,
        showAllModules
    ]);
    const primaryMobileMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[primaryMobileMenu]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryMobileTabs"])(businessType)
    }["BusinessProfileSettings.useMemo[primaryMobileMenu]"], [
        businessType
    ]);
    const activeTabConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[activeTabConfig]": ()=>{
            const found = activeBusinessMenu.find({
                "BusinessProfileSettings.useMemo[activeTabConfig].found": (m)=>m.id === activeSubTab
            }["BusinessProfileSettings.useMemo[activeTabConfig].found"]);
            if (found) return found;
            const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_BUSINESS_MODULES"].find({
                "BusinessProfileSettings.useMemo[activeTabConfig].base": (m)=>m.id === activeSubTab
            }["BusinessProfileSettings.useMemo[activeTabConfig].base"]);
            if (base) return base;
            return {
                id: activeSubTab,
                label: "Business Suite",
                desc: "Manage your business profile, customer workflows, and tools.",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"],
                emoji: "🏢"
            };
        }
    }["BusinessProfileSettings.useMemo[activeTabConfig]"], [
        activeBusinessMenu,
        activeSubTab
    ]);
    // CRM State
    const [deals, setDeals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [crmStats, setCrmStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalPipelineValue: 0,
        totalWonValue: 0,
        activeDealsCount: 0,
        wonCount: 0,
        lostCount: 0,
        winRate: 0
    });
    const [isDealModalOpen, setIsDealModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Identity State (Loaded from DB)
    const [businessName, setBusinessName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessCategory, setBusinessCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(BUSINESS_CATEGORIES[0]);
    const [businessDescription, setBusinessDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessWebsite, setBusinessWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessAddress, setBusinessAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessPhone, setBusinessPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [businessEmail, setBusinessEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [instagram, setInstagram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [linkedin, setLinkedin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [twitter, setTwitter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [facebook, setFacebook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Standard Business Currency State (Auto-detected from Registration Phone or loaded from DB)
    const [businessCurrency, setBusinessCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("USD");
    const [isCurrencyLocked, setIsCurrencyLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChangingCurrency, setIsChangingCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCurrencyConfirmModal, setShowCurrencyConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currencySymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrencySymbol"])(businessCurrency);
    // Operating Hours State
    const [scheduleMode, setScheduleMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("selected_hours");
    const [weeklySchedule, setWeeklySchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SCHEDULE);
    // Catalog State
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [catalogCategories, setCatalogCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_CATEGORIES"]);
    const [isCatalogModalOpen, setIsCatalogModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCategoryManageOpen, setIsCategoryManageOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBulkImportOpen, setIsBulkImportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCategoryFilter, setSelectedCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [productViewMode, setProductViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    const [categoryViewMode, setCategoryViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tabs");
    // Catalog Search & Pagination State
    const [catalogSearchQuery, setCatalogSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [catalogPage, setCatalogPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [catalogItemsPerPage, setCatalogItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const filteredCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[filteredCatalog]": ()=>{
            return catalog.filter({
                "BusinessProfileSettings.useMemo[filteredCatalog]": (item)=>{
                    var _item_name, _item_description, _item_sku, _item_category, _item_tags;
                    const matchesCategory = selectedCategoryFilter === "all" || item.category === selectedCategoryFilter;
                    const q = catalogSearchQuery.toLowerCase().trim();
                    const matchesSearch = !q || ((_item_name = item.name) === null || _item_name === void 0 ? void 0 : _item_name.toLowerCase().includes(q)) || ((_item_description = item.description) === null || _item_description === void 0 ? void 0 : _item_description.toLowerCase().includes(q)) || ((_item_sku = item.sku) === null || _item_sku === void 0 ? void 0 : _item_sku.toLowerCase().includes(q)) || ((_item_category = item.category) === null || _item_category === void 0 ? void 0 : _item_category.toLowerCase().includes(q)) || ((_item_tags = item.tags) === null || _item_tags === void 0 ? void 0 : _item_tags.some({
                        "BusinessProfileSettings.useMemo[filteredCatalog]": (t)=>t.toLowerCase().includes(q)
                    }["BusinessProfileSettings.useMemo[filteredCatalog]"]));
                    return matchesCategory && matchesSearch;
                }
            }["BusinessProfileSettings.useMemo[filteredCatalog]"]);
        }
    }["BusinessProfileSettings.useMemo[filteredCatalog]"], [
        catalog,
        selectedCategoryFilter,
        catalogSearchQuery
    ]);
    const totalCatalogPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[totalCatalogPages]": ()=>{
            return Math.max(1, Math.ceil(filteredCatalog.length / catalogItemsPerPage));
        }
    }["BusinessProfileSettings.useMemo[totalCatalogPages]"], [
        filteredCatalog.length,
        catalogItemsPerPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessProfileSettings.useEffect": ()=>{
            setCatalogPage(1);
        }
    }["BusinessProfileSettings.useEffect"], [
        selectedCategoryFilter,
        catalogSearchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessProfileSettings.useEffect": ()=>{
            if (catalogPage > totalCatalogPages) {
                setCatalogPage(totalCatalogPages);
            }
        }
    }["BusinessProfileSettings.useEffect"], [
        totalCatalogPages,
        catalogPage
    ]);
    const paginatedCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[paginatedCatalog]": ()=>{
            const startIndex = (catalogPage - 1) * catalogItemsPerPage;
            return filteredCatalog.slice(startIndex, startIndex + catalogItemsPerPage);
        }
    }["BusinessProfileSettings.useMemo[paginatedCatalog]"], [
        filteredCatalog,
        catalogPage,
        catalogItemsPerPage
    ]);
    // Automated Messaging State
    const [greetingEnabled, setGreetingEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [greetingMessage, setGreetingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [awayEnabled, setAwayEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [awayMessage, setAwayMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Quick Replies & Labels State
    const [quickReplies, setQuickReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newShortcut, setNewShortcut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newReplyMessage, setNewReplyMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customerLabels, setCustomerLabels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newLabelName, setNewLabelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newLabelColor, setNewLabelColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("bg-indigo-600 text-white");
    // Legal & Compliance Policies State
    const [termsEnabled, setTermsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [termsText, setTermsText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [termsUrl, setTermsUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [privacyEnabled, setPrivacyEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [privacyText, setPrivacyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [privacyUrl, setPrivacyUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [refundEnabled, setRefundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refundText, setRefundText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [refundUrl, setRefundUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Customer Orders State
    const [customerOrders, setCustomerOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORDERS"]);
    const [orderFilter, setOrderFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [orderSearchQuery, setOrderSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Customer Enquiries State
    const [customerEnquiries, setCustomerEnquiries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ENQUIRIES"]);
    const [enquiryFilter, setEnquiryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [enquirySearchQuery, setEnquirySearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Front CMS & Business Website State
    const [frontCms, setFrontCms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRONT_CMS"]);
    const [aiDesignPrompt, setAiDesignPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAiGenerating, setIsAiGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cmsPreviewDevice, setCmsPreviewDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desktop");
    // Digital Storefront & Booking State
    const [businessServices, setBusinessServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"]);
    const [businessMeetings, setBusinessMeetings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PERSONAL_MEETINGS"]);
    const [businessBookings, setBusinessBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOKINGS"]);
    const [businessDirectory, setBusinessDirectory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DIRECTORY"]);
    const [businessReviews, setBusinessReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_REVIEWS"]);
    const [businessBranches, setBusinessBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BRANCHES"]);
    const [businessGallery, setBusinessGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_GALLERY"]);
    const [isMobileMoreOpen, setIsMobileMoreOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openAddProduct = ()=>{
        handleSubTabSwitch("catalog");
        setEditingItem(null);
        setIsCatalogModalOpen(true);
    };
    const openAddService = ()=>{
        handleSubTabSwitch("services");
    };
    const openAddLead = ()=>{
        handleSubTabSwitch("crm");
        setIsDealModalOpen(true);
    };
    const openAddBooking = ()=>{
        handleSubTabSwitch("meetings");
    };
    // Load CRM Deals
    const fetchDeals = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/crm/deals").then((res)=>{
            var _res_data;
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                setDeals(res.data.deals || []);
                if (res.data.stats) setCrmStats(res.data.stats);
            }
        }).catch((err)=>console.warn("[CRM] fetch deals error:", err));
    };
    // Fast pre-computed catalog count map for instant category item count lookups
    const catalogCountMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[catalogCountMap]": ()=>{
            const map = {};
            for(let i = 0; i < catalog.length; i++){
                const catName = catalog[i].category;
                if (catName) {
                    map[catName] = (map[catName] || 0) + 1;
                }
            }
            return map;
        }
    }["BusinessProfileSettings.useMemo[catalogCountMap]"], [
        catalog
    ]);
    // Immediate synchronous hydration from auth store to eliminate initial data loading delay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessProfileSettings.useEffect": ()=>{
            if (user) {
                var _businessProfile;
                if (user.business_name || user.businessName || user.full_name) {
                    setBusinessName(user.business_name || user.businessName || user.full_name || "");
                }
                const bCategory = user.business_category || user.businessCategory;
                if (bCategory) setBusinessCategory(bCategory);
                const bDesc = user.business_description || user.businessDescription;
                if (bDesc) setBusinessDescription(bDesc);
                const bWeb = user.business_website || user.businessWebsite;
                if (bWeb) setBusinessWebsite(bWeb);
                if (user.business_address || user.businessAddress || user.location) {
                    setBusinessAddress(user.business_address || user.businessAddress || user.location || "");
                }
                if (user.phone) setBusinessPhone(user.phone);
                if (user.email) setBusinessEmail(user.email);
                const details = user.business_details || user.businessDetails || ((_businessProfile = user.businessProfile) === null || _businessProfile === void 0 ? void 0 : _businessProfile.details) || {};
                if (details.businessType) {
                    setBusinessType(details.businessType);
                } else if (user.business_category || user.businessCategory) {
                    const catStr = String(user.business_category || user.businessCategory);
                    const mapped = CATEGORY_TO_BUSINESS_TYPE[catStr];
                    if (mapped) setBusinessType(mapped);
                }
                if (details.showAllModules !== undefined) {
                    setShowAllModules(Boolean(details.showAllModules));
                }
                if (details.currency) {
                    setBusinessCurrency(details.currency);
                    setIsCurrencyLocked(true);
                } else {
                    const autoCurr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectDefaultCurrency"])(user.phone);
                    setBusinessCurrency(autoCurr);
                }
                if (details.scheduleMode) setScheduleMode(details.scheduleMode);
                if (details.weeklySchedule) setWeeklySchedule({
                    ...DEFAULT_SCHEDULE,
                    ...details.weeklySchedule
                });
                if (details.socialLinks) {
                    setInstagram(details.socialLinks.instagram || "");
                    setLinkedin(details.socialLinks.linkedin || "");
                    setTwitter(details.socialLinks.twitter || "");
                    setFacebook(details.socialLinks.facebook || "");
                }
                if (Array.isArray(details.catalog)) {
                    setCatalog(details.catalog);
                } else {
                    setCatalog([]);
                }
                if (Array.isArray(details.catalogCategories) && details.catalogCategories.length > 0) {
                    setCatalogCategories(sanitizeCatalogCategories(details.catalogCategories));
                } else if (!details.catalogCategories || details.catalogCategories.length === 0) {
                    setCatalogCategories(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_CATEGORIES"]);
                } else if (Array.isArray(details.catalogCategories)) {
                    setCatalogCategories(sanitizeCatalogCategories(details.catalogCategories));
                }
                if (Array.isArray(details.quickReplies)) {
                    setQuickReplies(details.quickReplies);
                }
                if (Array.isArray(details.customerLabels)) {
                    setCustomerLabels(details.customerLabels);
                }
                if (details.autoReplies) {
                    var _details_autoReplies_greetingEnabled;
                    setGreetingEnabled((_details_autoReplies_greetingEnabled = details.autoReplies.greetingEnabled) !== null && _details_autoReplies_greetingEnabled !== void 0 ? _details_autoReplies_greetingEnabled : false);
                    if (details.autoReplies.greetingMessage) setGreetingMessage(details.autoReplies.greetingMessage);
                    var _details_autoReplies_awayEnabled;
                    setAwayEnabled((_details_autoReplies_awayEnabled = details.autoReplies.awayEnabled) !== null && _details_autoReplies_awayEnabled !== void 0 ? _details_autoReplies_awayEnabled : false);
                    if (details.autoReplies.awayMessage) setAwayMessage(details.autoReplies.awayMessage);
                }
                if (details.legals || details.legalPolicies) {
                    const leg = details.legals || details.legalPolicies;
                    if (leg.termsEnabled !== undefined) setTermsEnabled(leg.termsEnabled);
                    if (leg.termsText) setTermsText(leg.termsText);
                    if (leg.termsUrl) setTermsUrl(leg.termsUrl);
                    if (leg.privacyEnabled !== undefined) setPrivacyEnabled(leg.privacyEnabled);
                    if (leg.privacyText) setPrivacyText(leg.privacyText);
                    if (leg.privacyUrl) setPrivacyUrl(leg.privacyUrl);
                    if (leg.refundEnabled !== undefined) setRefundEnabled(leg.refundEnabled);
                    if (leg.refundText) setRefundText(leg.refundText);
                    if (leg.refundUrl) setRefundUrl(leg.refundUrl);
                }
                if (Array.isArray(details.orders)) setCustomerOrders(details.orders);
                if (Array.isArray(details.enquiries)) setCustomerEnquiries(details.enquiries);
                if (details.frontCms || details.frontCmsConfig) {
                    setFrontCms({
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRONT_CMS"],
                        ...details.frontCms || details.frontCmsConfig
                    });
                }
                if (Array.isArray(details.services)) setBusinessServices(details.services);
                if (Array.isArray(details.meetings)) setBusinessMeetings(details.meetings);
                if (Array.isArray(details.bookings)) setBusinessBookings(details.bookings);
                if (Array.isArray(details.directory)) setBusinessDirectory(details.directory);
                if (Array.isArray(details.reviews)) setBusinessReviews(details.reviews);
                if (Array.isArray(details.branches)) setBusinessBranches(details.branches);
                if (Array.isArray(details.gallery)) setBusinessGallery(details.gallery);
                if (Array.isArray(details.catalog)) setCatalog(details.catalog);
            }
        }
    }["BusinessProfileSettings.useEffect"], [
        user
    ]);
    // Fetch live profile details & CRM in background on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessProfileSettings.useEffect": ()=>{
            fetchDeals();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/user/profile").then({
                "BusinessProfileSettings.useEffect": (res)=>{
                    var _res_data;
                    if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.user) {
                        const u = res.data.user;
                        updateUser(u);
                        setBusinessName(u.business_name || u.businessName || u.full_name || "");
                        setBusinessCategory(u.business_category || u.businessCategory || BUSINESS_CATEGORIES[0]);
                        setBusinessDescription(u.business_description || u.businessDescription || "");
                        setBusinessWebsite(u.business_website || u.businessWebsite || "");
                        setBusinessAddress(u.business_address || u.businessAddress || u.location || "");
                        setBusinessPhone(u.phone || "");
                        setBusinessEmail(u.email || "");
                        const details = u.business_details || u.businessDetails || {};
                        if (details.businessType) {
                            setBusinessType(details.businessType);
                        } else if (u.business_category || u.businessCategory) {
                            const catStr = String(u.business_category || u.businessCategory);
                            const mapped = CATEGORY_TO_BUSINESS_TYPE[catStr];
                            if (mapped) setBusinessType(mapped);
                        }
                        if (details.currency) {
                            setBusinessCurrency(details.currency);
                            setIsCurrencyLocked(true);
                        } else {
                            const autoCurr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectDefaultCurrency"])(u.phone || (user === null || user === void 0 ? void 0 : user.phone));
                            setBusinessCurrency(autoCurr);
                        }
                        if (details.scheduleMode) setScheduleMode(details.scheduleMode);
                        if (details.weeklySchedule) setWeeklySchedule({
                            ...DEFAULT_SCHEDULE,
                            ...details.weeklySchedule
                        });
                        if (details.socialLinks) {
                            setInstagram(details.socialLinks.instagram || "");
                            setLinkedin(details.socialLinks.linkedin || "");
                            setTwitter(details.socialLinks.twitter || "");
                            setFacebook(details.socialLinks.facebook || "");
                        }
                        if (Array.isArray(details.catalog)) {
                            setCatalog(details.catalog);
                        } else {
                            setCatalog([]);
                        }
                        if (Array.isArray(details.catalogCategories) && details.catalogCategories.length > 0) {
                            setCatalogCategories(sanitizeCatalogCategories(details.catalogCategories));
                        } else if (!details.catalogCategories || details.catalogCategories.length === 0) {
                            setCatalogCategories(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_CATEGORIES"]);
                        } else if (Array.isArray(details.catalogCategories)) {
                            setCatalogCategories(sanitizeCatalogCategories(details.catalogCategories));
                        }
                        if (Array.isArray(details.quickReplies)) {
                            setQuickReplies(details.quickReplies);
                        }
                        if (Array.isArray(details.customerLabels)) {
                            setCustomerLabels(details.customerLabels);
                        }
                        if (details.autoReplies) {
                            var _details_autoReplies_greetingEnabled;
                            setGreetingEnabled((_details_autoReplies_greetingEnabled = details.autoReplies.greetingEnabled) !== null && _details_autoReplies_greetingEnabled !== void 0 ? _details_autoReplies_greetingEnabled : false);
                            if (details.autoReplies.greetingMessage) setGreetingMessage(details.autoReplies.greetingMessage);
                            var _details_autoReplies_awayEnabled;
                            setAwayEnabled((_details_autoReplies_awayEnabled = details.autoReplies.awayEnabled) !== null && _details_autoReplies_awayEnabled !== void 0 ? _details_autoReplies_awayEnabled : false);
                            if (details.autoReplies.awayMessage) setAwayMessage(details.autoReplies.awayMessage);
                        }
                        if (details.legals || details.legalPolicies) {
                            const leg = details.legals || details.legalPolicies;
                            if (leg.termsEnabled !== undefined) setTermsEnabled(leg.termsEnabled);
                            if (leg.termsText) setTermsText(leg.termsText);
                            if (leg.termsUrl) setTermsUrl(leg.termsUrl);
                            if (leg.privacyEnabled !== undefined) setPrivacyEnabled(leg.privacyEnabled);
                            if (leg.privacyText) setPrivacyText(leg.privacyText);
                            if (leg.privacyUrl) setPrivacyUrl(leg.privacyUrl);
                            if (leg.refundEnabled !== undefined) setRefundEnabled(leg.refundEnabled);
                            if (leg.refundText) setRefundText(leg.refundText);
                            if (leg.refundUrl) setRefundUrl(leg.refundUrl);
                        }
                        if (Array.isArray(details.orders)) setCustomerOrders(details.orders);
                        if (Array.isArray(details.enquiries)) setCustomerEnquiries(details.enquiries);
                        if (details.frontCms || details.frontCmsConfig) {
                            setFrontCms({
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRONT_CMS"],
                                ...details.frontCms || details.frontCmsConfig
                            });
                        }
                        if (Array.isArray(details.services)) setBusinessServices(details.services);
                        if (Array.isArray(details.meetings)) setBusinessMeetings(details.meetings);
                        if (Array.isArray(details.bookings)) setBusinessBookings(details.bookings);
                        if (Array.isArray(details.directory)) setBusinessDirectory(details.directory);
                        if (Array.isArray(details.reviews)) setBusinessReviews(details.reviews);
                        if (Array.isArray(details.branches)) setBusinessBranches(details.branches);
                        if (Array.isArray(details.gallery)) setBusinessGallery(details.gallery);
                        if (Array.isArray(details.catalog)) setCatalog(details.catalog);
                    }
                }
            }["BusinessProfileSettings.useEffect"]).catch({
                "BusinessProfileSettings.useEffect": (err)=>console.warn("[BusinessProfile] fetch error:", err)
            }["BusinessProfileSettings.useEffect"]);
        }
    }["BusinessProfileSettings.useEffect"], []);
    // Compute live Open/Closed badge
    const liveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[liveStatus]": ()=>{
            if (scheduleMode === "always_open") return {
                isOpen: true,
                label: "Open 24/7",
                color: "bg-emerald-500 text-white"
            };
            if (scheduleMode === "temporarily_closed") return {
                isOpen: false,
                label: "Temporarily Closed",
                color: "bg-rose-500 text-white"
            };
            if (scheduleMode === "by_appointment") return {
                isOpen: true,
                label: "By Appointment",
                color: "bg-amber-500 text-white"
            };
            const now = new Date();
            const dayKeys = [
                "sun",
                "mon",
                "tue",
                "wed",
                "thu",
                "fri",
                "sat"
            ];
            const currentDayKey = dayKeys[now.getDay()];
            const dayConfig = weeklySchedule[currentDayKey];
            if (!dayConfig || !dayConfig.enabled) {
                return {
                    isOpen: false,
                    label: "Closed Today",
                    color: "bg-rose-500 text-white"
                };
            }
            const currentMinutes = now.getHours() * 60 + now.getMinutes();
            const [openH, openM] = (dayConfig.open || "09:00").split(":").map(Number);
            const [closeH, closeM] = (dayConfig.close || "18:00").split(":").map(Number);
            const openMinutes = (openH || 0) * 60 + (openM || 0);
            const closeMinutes = (closeH || 0) * 60 + (closeM || 0);
            if (currentMinutes >= openMinutes && currentMinutes <= closeMinutes) {
                return {
                    isOpen: true,
                    label: "Open Now",
                    color: "bg-emerald-500 text-white"
                };
            } else {
                return {
                    isOpen: false,
                    label: "Closed Now",
                    color: "bg-rose-500 text-white"
                };
            }
        }
    }["BusinessProfileSettings.useMemo[liveStatus]"], [
        scheduleMode,
        weeklySchedule
    ]);
    // Business Short Link
    const businessShortLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[businessShortLink]": ()=>{
            var _this, _this1;
            const key = ((_this = user) === null || _this === void 0 ? void 0 : _this.pingdart_id) || ((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.pingdartId) || (user === null || user === void 0 ? void 0 : user.username) || ((user === null || user === void 0 ? void 0 : user.email) ? user.email.split("@")[0] : "business");
            const host = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
            return `${host}/join/${key}`;
        }
    }["BusinessProfileSettings.useMemo[businessShortLink]"], [
        user
    ]);
    // Filtered Orders & Enquiries
    const filteredOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[filteredOrders]": ()=>{
            return customerOrders.filter({
                "BusinessProfileSettings.useMemo[filteredOrders]": (ord)=>{
                    const matchesFilter = orderFilter === "all" || ord.orderStatus === orderFilter;
                    const q = orderSearchQuery.toLowerCase().trim();
                    const matchesQuery = !q || ord.orderNumber.toLowerCase().includes(q) || ord.customerName.toLowerCase().includes(q) || ord.customerPhone && ord.customerPhone.toLowerCase().includes(q) || ord.customerEmail && ord.customerEmail.toLowerCase().includes(q);
                    return matchesFilter && matchesQuery;
                }
            }["BusinessProfileSettings.useMemo[filteredOrders]"]);
        }
    }["BusinessProfileSettings.useMemo[filteredOrders]"], [
        customerOrders,
        orderFilter,
        orderSearchQuery
    ]);
    const filteredEnquiries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BusinessProfileSettings.useMemo[filteredEnquiries]": ()=>{
            return customerEnquiries.filter({
                "BusinessProfileSettings.useMemo[filteredEnquiries]": (enq)=>{
                    const matchesFilter = enquiryFilter === "all" || enq.status === enquiryFilter;
                    const q = enquirySearchQuery.toLowerCase().trim();
                    const matchesQuery = !q || enq.enquiryNumber.toLowerCase().includes(q) || enq.customerName.toLowerCase().includes(q) || enq.subject.toLowerCase().includes(q) || enq.message.toLowerCase().includes(q);
                    return matchesFilter && matchesQuery;
                }
            }["BusinessProfileSettings.useMemo[filteredEnquiries]"]);
        }
    }["BusinessProfileSettings.useMemo[filteredEnquiries]"], [
        customerEnquiries,
        enquiryFilter,
        enquirySearchQuery
    ]);
    // AI Theme & Styling Generator for Front CMS
    const handleAiGenerateCmsStyle = (promptText)=>{
        const prompt = (promptText || aiDesignPrompt).toLowerCase().trim();
        if (!prompt) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a style prompt (e.g. 'Healthcare Glassmorphism' or 'Dark Luxury Studio')");
            return;
        }
        setIsAiGenerating(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("AI generating website design & styling...", {
            id: "ai_cms"
        });
        setTimeout(()=>{
            let updated = {};
            if (prompt.includes("dark") || prompt.includes("studio") || prompt.includes("black")) {
                updated = {
                    templateId: "dark_studio",
                    themeColor: "#6366f1",
                    stylePreset: "glassmorphism",
                    fontFamily: "Outfit",
                    heroTitle: "Cutting-Edge AI Studio & Next-Gen Enterprise Solutions",
                    heroSubtitle: "Empowering visionary brands with state-of-the-art AI automation, high-converting digital assets, and enterprise scalability."
                };
            } else if (prompt.includes("store") || prompt.includes("shop") || prompt.includes("boutique") || prompt.includes("retail")) {
                updated = {
                    templateId: "store",
                    themeColor: "#ec4899",
                    stylePreset: "neumorphism",
                    fontFamily: "Plus Jakarta Sans",
                    heroTitle: "Curated Premium Products & Express Global Delivery",
                    heroSubtitle: "Discover our exclusive catalog, verified customer reviews, and instant WhatsApp 1-click checkout."
                };
            } else if (prompt.includes("agency") || prompt.includes("corporate") || prompt.includes("business")) {
                updated = {
                    templateId: "agency",
                    themeColor: "#2563eb",
                    stylePreset: "flat_modern",
                    fontFamily: "Inter",
                    heroTitle: "Transforming Businesses with Scalable Digital Systems",
                    heroSubtitle: "End-to-end consulting, automated CRM pipelines, and revenue growth strategies built for high-performance teams."
                };
            } else {
                // Medical / Healthcare Default
                updated = {
                    templateId: "medical",
                    themeColor: "#059669",
                    stylePreset: "glassmorphism",
                    fontFamily: "Inter",
                    heroTitle: "World-Class Healthcare & Dedicated Patient Care",
                    heroSubtitle: "HIPAA-compliant online consultations, instant appointment booking, and specialist medical care."
                };
            }
            setFrontCms((prev)=>({
                    ...prev,
                    ...updated
                }));
            setIsAiGenerating(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss("ai_cms");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("AI generated new website theme & layout successfully!");
        }, 800);
    };
    // Save all business settings
    const handleSave = async ()=>{
        setIsSaving(true);
        try {
            var _weeklySchedule_mon, _weeklySchedule_mon1, _res_data;
            const payload = {
                accountType: "business",
                account_type: "business",
                businessName: businessName.trim(),
                business_name: businessName.trim(),
                businessCategory,
                business_category: businessCategory,
                businessDescription: businessDescription.trim(),
                business_description: businessDescription.trim(),
                businessWebsite: businessWebsite.trim(),
                business_website: businessWebsite.trim(),
                businessAddress: businessAddress.trim(),
                business_address: businessAddress.trim(),
                businessTimings: scheduleMode === "always_open" ? "24/7 Always Open" : `${((_weeklySchedule_mon = weeklySchedule.mon) === null || _weeklySchedule_mon === void 0 ? void 0 : _weeklySchedule_mon.open) || "09:00"} - ${((_weeklySchedule_mon1 = weeklySchedule.mon) === null || _weeklySchedule_mon1 === void 0 ? void 0 : _weeklySchedule_mon1.close) || "18:00"}`,
                businessType,
                business_type: businessType,
                industry: currentCategoryMeta.industry,
                showAllModules,
                show_all_modules: showAllModules,
                businessDetails: {
                    businessType,
                    industry: currentCategoryMeta.industry,
                    showAllModules,
                    customModules: [],
                    currency: businessCurrency,
                    scheduleMode,
                    weeklySchedule,
                    socialLinks: {
                        instagram,
                        linkedin,
                        twitter,
                        facebook
                    },
                    catalog,
                    catalogCategories,
                    quickReplies,
                    customerLabels,
                    autoReplies: {
                        greetingEnabled,
                        greetingMessage,
                        awayEnabled,
                        awayMessage
                    },
                    legals: {
                        termsEnabled,
                        termsText,
                        termsUrl,
                        privacyEnabled,
                        privacyText,
                        privacyUrl,
                        refundEnabled,
                        refundText,
                        refundUrl
                    },
                    orders: customerOrders,
                    enquiries: customerEnquiries,
                    services: businessServices,
                    meetings: businessMeetings,
                    bookings: businessBookings,
                    directory: businessDirectory,
                    reviews: businessReviews,
                    branches: businessBranches,
                    gallery: businessGallery
                }
            };
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", payload);
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Business profile saved successfully! ✓");
                updateUser({
                    ...user,
                    account_type: "business",
                    accountType: "business",
                    business_name: businessName,
                    businessName: businessName,
                    business_category: businessCategory,
                    businessCategory: businessCategory,
                    business_description: businessDescription,
                    business_website: businessWebsite,
                    business_details: {
                        ...(user === null || user === void 0 ? void 0 : user.business_details) || {},
                        ...payload.businessDetails
                    },
                    businessDetails: {
                        ...(user === null || user === void 0 ? void 0 : user.businessDetails) || {},
                        ...payload.businessDetails
                    }
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save changes.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("[BusinessProfile] save error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Error saving business profile.");
        } finally{
            setIsSaving(false);
        }
    };
    const handleSelectCategory = async (catId)=>{
        setBusinessType(catId);
        setIsCategoryModalOpen(false);
        const cat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryMeta"])(catId);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Workspace customized for ${cat.label}`);
        // If current activeSubTab is not part of the new category and showAllModules is false, switch safely
        if (!showAllModules && catId !== "other" && !cat.defaultTabs.includes(activeSubTab)) {
            handleSubTabSwitch(cat.defaultTabs[0] || "identity");
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                businessType: catId,
                business_type: catId,
                industry: cat.industry,
                showAllModules,
                businessDetails: {
                    businessType: catId,
                    industry: cat.industry,
                    showAllModules
                }
            });
            updateUser({
                ...user,
                business_details: {
                    ...(user === null || user === void 0 ? void 0 : user.business_details) || {},
                    businessType: catId,
                    industry: cat.industry,
                    showAllModules
                },
                businessDetails: {
                    ...(user === null || user === void 0 ? void 0 : user.businessDetails) || {},
                    businessType: catId,
                    industry: cat.industry,
                    showAllModules
                }
            });
        } catch (err) {
            console.warn("[BusinessProfile] category auto-sync error:", err);
        }
    };
    const handleCategoryChange = (newCat)=>{
        setBusinessCategory(newCat);
        const mapped = CATEGORY_TO_BUSINESS_TYPE[newCat];
        if (mapped && mapped !== businessType) {
            handleSelectCategory(mapped);
        }
    };
    const handleToggleShowAll = async (val)=>{
        setShowAllModules(val);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(val ? "Showing all 18 modules" : `Showing ${currentCategoryMeta.badge} modules`);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                showAllModules: val,
                show_all_modules: val,
                businessDetails: {
                    businessType,
                    industry: currentCategoryMeta.industry,
                    showAllModules: val
                }
            });
            updateUser({
                ...user,
                business_details: {
                    ...(user === null || user === void 0 ? void 0 : user.business_details) || {},
                    showAllModules: val
                },
                businessDetails: {
                    ...(user === null || user === void 0 ? void 0 : user.businessDetails) || {},
                    showAllModules: val
                }
            });
        } catch (err) {
            console.warn("[BusinessProfile] showAllModules auto-sync error:", err);
        }
    };
    // Update Deal Stage
    const handleUpdateDealStage = async (dealId, newStage)=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/crm/deals/${dealId}`, {
                stage: newStage
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Deal moved to ${newStage.replace("_", " ").toUpperCase()}`);
                fetchDeals();
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update deal stage.");
        }
    };
    // Delete Deal
    const handleDeleteDeal = async (dealId)=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/crm/deals/${dealId}`);
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Deal removed.");
                fetchDeals();
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete deal.");
        }
    };
    // Day toggle and time handlers
    const handleDayToggle = (dayKey)=>{
        setWeeklySchedule((prev)=>{
            var _prev_dayKey;
            return {
                ...prev,
                [dayKey]: {
                    ...prev[dayKey],
                    enabled: !((_prev_dayKey = prev[dayKey]) === null || _prev_dayKey === void 0 ? void 0 : _prev_dayKey.enabled)
                }
            };
        });
    };
    const handleTimeChange = (dayKey, field, val)=>{
        setWeeklySchedule((prev)=>({
                ...prev,
                [dayKey]: {
                    ...prev[dayKey],
                    [field]: val
                }
            }));
    };
    const copyMondayToWeekdays = ()=>{
        const mon = weeklySchedule.mon || {
            enabled: true,
            open: "09:00",
            close: "18:00"
        };
        setWeeklySchedule((prev)=>({
                ...prev,
                tue: {
                    ...mon
                },
                wed: {
                    ...mon
                },
                thu: {
                    ...mon
                },
                fri: {
                    ...mon
                }
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Copied Monday hours to Tue–Fri!");
    };
    // Auto-persist catalog and categories to backend
    const persistCatalogData = async (newCatalog, newCategories)=>{
        try {
            var _this, _this1, _res_data;
            const currentDetails = ((_this = user) === null || _this === void 0 ? void 0 : _this.business_details) || ((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.businessDetails) || {};
            const payload = {
                accountType: "business",
                account_type: "business",
                businessName: businessName.trim(),
                business_name: businessName.trim(),
                businessCategory,
                business_category: businessCategory,
                businessDetails: {
                    ...currentDetails,
                    businessType,
                    currency: businessCurrency,
                    catalog: newCatalog,
                    catalogCategories: newCategories
                }
            };
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", payload);
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                updateUser({
                    ...user,
                    account_type: "business",
                    accountType: "business",
                    business_details: {
                        ...currentDetails,
                        catalog: newCatalog,
                        catalogCategories: newCategories
                    },
                    businessDetails: {
                        ...currentDetails,
                        catalog: newCatalog,
                        catalogCategories: newCategories
                    }
                });
            }
        } catch (err) {
            console.error("[BusinessProfile] persistCatalogData error:", err);
        }
    };
    const handleSaveCategories = async (updatedCats)=>{
        setCatalogCategories(updatedCats);
        await persistCatalogData(catalog, updatedCats);
    };
    const handleSaveCatalog = async (updatedCatalog)=>{
        setCatalog(updatedCatalog);
        await persistCatalogData(updatedCatalog, catalogCategories);
    };
    // Catalog Item handlers
    const openAddCatalogItem = ()=>{
        setEditingItem(null);
        setIsCatalogModalOpen(true);
    };
    const openEditCatalogItem = (item)=>{
        setEditingItem(item);
        setIsCatalogModalOpen(true);
    };
    const handleDeleteCatalogItem = async (id)=>{
        const updated = catalog.filter((it)=>it.id !== id);
        setCatalog(updated);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Item removed from catalog.");
        await persistCatalogData(updated, catalogCategories);
    };
    // Quick Reply handler
    const handleAddQuickReply = (e)=>{
        e.preventDefault();
        if (!newShortcut.trim() || !newReplyMessage.trim()) return;
        const shortcutClean = newShortcut.startsWith("/") ? newShortcut.trim() : `/${newShortcut.trim()}`;
        const newQR = {
            id: `qr_${Date.now()}`,
            shortcut: shortcutClean,
            message: newReplyMessage.trim()
        };
        setQuickReplies((prev)=>[
                ...prev,
                newQR
            ]);
        setNewShortcut("");
        setNewReplyMessage("");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Quick reply ${shortcutClean} added!`);
    };
    const handleDeleteQuickReply = (id)=>{
        setQuickReplies((prev)=>prev.filter((q)=>q.id !== id));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Quick reply removed.");
    };
    // Label handler
    const handleAddLabel = (e)=>{
        e.preventDefault();
        if (!newLabelName.trim()) return;
        const newLbl = {
            id: `lbl_${Date.now()}`,
            name: newLabelName.trim(),
            color: newLabelColor
        };
        setCustomerLabels((prev)=>[
                ...prev,
                newLbl
            ]);
        setNewLabelName("");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Customer label created!`);
    };
    const handleDeleteLabel = (id)=>{
        setCustomerLabels((prev)=>prev.filter((l)=>l.id !== id));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Label deleted.");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-slate-100 overflow-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-800 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors md:hidden shrink-0 cursor-pointer",
                                title: "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 truncate",
                                                children: [
                                                    activeTabConfig.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(activeTabConfig.icon, {
                                                        className: "text-indigo-600 dark:text-indigo-400 shrink-0",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: activeTabConfig.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0",
                                                children: "Verified Business"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsCategoryModalOpen(true),
                                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs shrink-0",
                                                title: "Change business category & customize modules",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: currentCategoryMeta.emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1192,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate max-w-[140px] sm:max-w-none",
                                                        children: currentCategoryMeta.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1193,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDown01Icon"], {
                                                        size: 13,
                                                        className: "opacity-70"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1186,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5",
                                        children: activeTabConfig.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1197,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: [
                            activeSubTab === "hub" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/s/${((_this = user) === null || _this === void 0 ? void 0 : _this.username) || ((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.name) || "business"}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/80 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-xs",
                                title: "Open public live storefront",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Live Storefront"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1205,
                                columnNumber: 13
                            }, this) : null,
                            [
                                "identity",
                                "hours",
                                "catalog",
                                "services",
                                "messages",
                                "legals",
                                "quickreplies",
                                "labels",
                                "shortlink"
                            ].includes(activeSubTab) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: isSaving,
                                className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer",
                                children: isSaving ? "Saving..." : "Save Changes ✓"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 md:p-6 pb-32 md:pb-6",
                children: [
                    activeSubTab === "hub" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$GrowthHubSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrowthHubSubTab"], {
                        businessName: businessName,
                        username: ((_this2 = user) === null || _this2 === void 0 ? void 0 : _this2.username) || ((_this3 = user) === null || _this3 === void 0 ? void 0 : _this3.name) || "business",
                        currencySymbol: currencySymbol,
                        onNavigateSubTab: handleSubTabSwitch,
                        catalogCount: catalog.length,
                        servicesCount: businessServices.length,
                        bookingsCount: businessBookings.length,
                        reviewsCount: businessReviews.length,
                        meetingTypesCount: businessMeetings.length,
                        leadsCount: deals.length || crmStats.activeDealsCount || 0,
                        revenueAmount: crmStats.totalWonValue || 0,
                        unreadChatsCount: 0,
                        hasAddress: Boolean(businessAddress.trim()),
                        hasDescription: Boolean(businessDescription.trim())
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1236,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "meetings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$MeetingBookingSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeetingBookingSubTab"], {
                        businessName: businessName,
                        username: ((_this4 = user) === null || _this4 === void 0 ? void 0 : _this4.username) || ((_this5 = user) === null || _this5 === void 0 ? void 0 : _this5.name) || "user",
                        currencySymbol: currencySymbol,
                        meetingTypes: businessMeetings,
                        setMeetingTypes: setBusinessMeetings,
                        bookings: businessBookings,
                        setBookings: setBusinessBookings
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1255,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ServicesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesSubTab"], {
                        services: businessServices,
                        setServices: setBusinessServices,
                        currencySymbol: currencySymbol
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1267,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "directory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CustomerDirectorySubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomerDirectorySubTab"], {
                        currencySymbol: currencySymbol,
                        directory: businessDirectory,
                        setDirectory: setBusinessDirectory
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1275,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "reviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ReviewsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewsSubTab"], {
                        businessName: businessName,
                        reviews: businessReviews,
                        setReviews: setBusinessReviews
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1283,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "branches" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$BranchesAndGallerySubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BranchesAndGallerySubTab"], {
                        businessName: businessName,
                        branches: businessBranches,
                        setBranches: setBusinessBranches,
                        gallery: businessGallery,
                        setGallery: setBusinessGallery
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1291,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "frontcms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$FrontCmsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontCmsSubTab"], {
                        frontCms: frontCms,
                        setFrontCms: setFrontCms,
                        aiDesignPrompt: aiDesignPrompt,
                        setAiDesignPrompt: setAiDesignPrompt,
                        isAiGenerating: isAiGenerating,
                        handleAiGenerateCmsStyle: handleAiGenerateCmsStyle,
                        cmsPreviewDevice: cmsPreviewDevice,
                        setCmsPreviewDevice: setCmsPreviewDevice,
                        businessName: businessName,
                        catalog: catalog,
                        currencySymbol: currencySymbol
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1301,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "crm" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CrmSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrmSubTab"], {
                        currencySymbol: currencySymbol,
                        crmStats: crmStats,
                        deals: deals,
                        CRM_STAGES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRM_STAGES"],
                        setIsDealModalOpen: setIsDealModalOpen,
                        handleUpdateDealStage: handleUpdateDealStage,
                        handleDeleteDeal: handleDeleteDeal
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1317,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$OrdersSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrdersSubTab"], {
                        customerOrders: customerOrders,
                        setCustomerOrders: setCustomerOrders,
                        orderFilter: orderFilter,
                        setOrderFilter: setOrderFilter,
                        orderSearchQuery: orderSearchQuery,
                        setOrderSearchQuery: setOrderSearchQuery,
                        filteredOrders: filteredOrders,
                        currencySymbol: currencySymbol,
                        businessCurrency: businessCurrency
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1329,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "enquiries" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$EnquiriesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnquiriesSubTab"], {
                        customerEnquiries: customerEnquiries,
                        setCustomerEnquiries: setCustomerEnquiries,
                        enquiryFilter: enquiryFilter,
                        setEnquiryFilter: setEnquiryFilter,
                        enquirySearchQuery: enquirySearchQuery,
                        setEnquirySearchQuery: setEnquirySearchQuery,
                        filteredEnquiries: filteredEnquiries,
                        setIsDealModalOpen: setIsDealModalOpen
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1343,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "identity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$IdentitySubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentitySubTab"], {
                        businessName: businessName,
                        setBusinessName: setBusinessName,
                        businessCategory: businessCategory,
                        setBusinessCategory: handleCategoryChange,
                        BUSINESS_CATEGORIES: BUSINESS_CATEGORIES,
                        businessCurrency: businessCurrency,
                        setBusinessCurrency: setBusinessCurrency,
                        currencySymbol: currencySymbol,
                        isCurrencyLocked: isCurrencyLocked,
                        isChangingCurrency: isChangingCurrency,
                        setShowCurrencyConfirmModal: setShowCurrencyConfirmModal,
                        businessDescription: businessDescription,
                        setBusinessDescription: setBusinessDescription,
                        businessWebsite: businessWebsite,
                        setBusinessWebsite: setBusinessWebsite,
                        businessPhone: businessPhone,
                        setBusinessPhone: setBusinessPhone,
                        businessAddress: businessAddress,
                        setBusinessAddress: setBusinessAddress,
                        instagram: instagram,
                        setInstagram: setInstagram,
                        linkedin: linkedin,
                        setLinkedin: setLinkedin,
                        twitter: twitter,
                        setTwitter: setTwitter,
                        facebook: facebook,
                        setFacebook: setFacebook
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1356,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "hours" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$HoursSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoursSubTab"], {
                        liveStatus: liveStatus,
                        copyMondayToWeekdays: copyMondayToWeekdays,
                        scheduleMode: scheduleMode,
                        setScheduleMode: setScheduleMode,
                        weeklySchedule: weeklySchedule,
                        DAYS_OF_WEEK: DAYS_OF_WEEK,
                        handleDayToggle: handleDayToggle,
                        handleTimeChange: handleTimeChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1388,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "catalog" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CatalogSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogSubTab"], {
                        catalog: catalog,
                        setCatalog: setCatalog,
                        catalogCategories: catalogCategories,
                        setCatalogCategories: setCatalogCategories,
                        onSaveCategories: handleSaveCategories,
                        onSaveCatalog: handleSaveCatalog,
                        setIsBulkImportOpen: setIsBulkImportOpen,
                        setBusinessCurrency: setBusinessCurrency,
                        isCategoryManageOpen: isCategoryManageOpen,
                        setIsCategoryManageOpen: setIsCategoryManageOpen,
                        openAddCatalogItem: openAddCatalogItem,
                        openEditCatalogItem: openEditCatalogItem,
                        handleDeleteCatalogItem: handleDeleteCatalogItem,
                        categoryViewMode: categoryViewMode,
                        setCategoryViewMode: setCategoryViewMode,
                        selectedCategoryFilter: selectedCategoryFilter,
                        setSelectedCategoryFilter: setSelectedCategoryFilter,
                        catalogCountMap: catalogCountMap,
                        catalogSearchQuery: catalogSearchQuery,
                        setCatalogSearchQuery: setCatalogSearchQuery,
                        productViewMode: productViewMode,
                        setProductViewMode: setProductViewMode,
                        filteredCatalog: filteredCatalog,
                        paginatedCatalog: paginatedCatalog,
                        catalogPage: catalogPage,
                        setCatalogPage: setCatalogPage,
                        catalogItemsPerPage: catalogItemsPerPage,
                        setCatalogItemsPerPage: setCatalogItemsPerPage,
                        totalCatalogPages: totalCatalogPages,
                        currencySymbol: currencySymbol
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1401,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "messages" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$MessagesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessagesSubTab"], {
                        greetingEnabled: greetingEnabled,
                        setGreetingEnabled: setGreetingEnabled,
                        greetingMessage: greetingMessage,
                        setGreetingMessage: setGreetingMessage,
                        awayEnabled: awayEnabled,
                        setAwayEnabled: setAwayEnabled,
                        awayMessage: awayMessage,
                        setAwayMessage: setAwayMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1436,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "quickreplies" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$QuickRepliesSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickRepliesSubTab"], {
                        handleAddQuickReply: handleAddQuickReply,
                        newShortcut: newShortcut,
                        setNewShortcut: setNewShortcut,
                        newReplyMessage: newReplyMessage,
                        setNewReplyMessage: setNewReplyMessage,
                        quickReplies: quickReplies,
                        handleDeleteQuickReply: handleDeleteQuickReply
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1449,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "labels" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$LabelsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelsSubTab"], {
                        handleAddLabel: handleAddLabel,
                        newLabelName: newLabelName,
                        setNewLabelName: setNewLabelName,
                        newLabelColor: newLabelColor,
                        setNewLabelColor: setNewLabelColor,
                        customerLabels: customerLabels,
                        handleDeleteLabel: handleDeleteLabel
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1461,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "shortlink" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ShortlinkSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShortlinkSubTab"], {
                        businessShortLink: businessShortLink,
                        businessName: businessName
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1473,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "chat_widget" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ChatWidgetSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatWidgetSubTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1480,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "legals" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$LegalsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegalsSubTab"], {
                        termsEnabled: termsEnabled,
                        setTermsEnabled: setTermsEnabled,
                        termsText: termsText,
                        setTermsText: setTermsText,
                        privacyEnabled: privacyEnabled,
                        setPrivacyEnabled: setPrivacyEnabled,
                        privacyText: privacyText,
                        setPrivacyText: setPrivacyText,
                        refundEnabled: refundEnabled,
                        setRefundEnabled: setRefundEnabled,
                        refundText: refundText,
                        setRefundText: setRefundText
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1484,
                        columnNumber: 11
                    }, this),
                    activeSubTab === "analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$AnalyticsSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalyticsSubTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1500,
                        columnNumber: 42
                    }, this),
                    activeSubTab === "team" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$TeamSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamSubTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1502,
                        columnNumber: 37
                    }, this),
                    activeSubTab === "ai_suite" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$AiSuiteSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiSuiteSubTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1504,
                        columnNumber: 41
                    }, this),
                    activeSubTab === "subscription" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$SubscriptionSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionSubTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1506,
                        columnNumber: 45
                    }, this),
                    activeSubTab === "referrals" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$ReferralSubTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferralSubTab"], {}, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1508,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CrmDealModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrmDealModal"], {
                isOpen: isDealModalOpen,
                onClose: ()=>setIsDealModalOpen(false),
                onDealCreated: ()=>fetchDeals(),
                businessCurrency: businessCurrency
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CatalogItemModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogItemModal"], {
                isOpen: isCatalogModalOpen,
                onClose: ()=>setIsCatalogModalOpen(false),
                onSave: async (itemData)=>{
                    let updatedCatalog;
                    if (editingItem) {
                        updatedCatalog = catalog.map((it)=>it.id === editingItem.id ? itemData : it);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product / Service updated!");
                    } else {
                        updatedCatalog = [
                            ...catalog,
                            itemData
                        ];
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product / Service added to catalog!");
                    }
                    setCatalog(updatedCatalog);
                    setIsCatalogModalOpen(false);
                    await persistCatalogData(updatedCatalog, catalogCategories);
                },
                editingItem: editingItem,
                businessCurrency: businessCurrency,
                currencySymbol: currencySymbol,
                categories: catalogCategories,
                onAddCategory: async (newCat)=>{
                    let updatedCats = catalogCategories;
                    if (!catalogCategories.some((c)=>c.name.toLowerCase() === newCat.name.toLowerCase())) {
                        updatedCats = [
                            ...catalogCategories,
                            newCat
                        ];
                        setCatalogCategories(updatedCats);
                        await persistCatalogData(catalog, updatedCats);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$BulkImportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkImportModal"], {
                isOpen: isBulkImportOpen,
                onClose: ()=>setIsBulkImportOpen(false),
                onImport: async (importedItems, importedCats, mode)=>{
                    let finalItems;
                    let finalCats;
                    if (mode === "replace") {
                        finalItems = importedItems;
                        finalCats = importedCats;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Replaced catalog with ${importedItems.length} products & ${importedCats.length} categories!`);
                    } else {
                        const existingItemIds = new Set(catalog.map((i)=>i.id));
                        const newItems = importedItems.filter((i)=>!existingItemIds.has(i.id));
                        const existingCatNames = new Set(catalogCategories.map((c)=>c.name.toLowerCase()));
                        const newCats = importedCats.filter((c)=>!existingCatNames.has(c.name.toLowerCase()));
                        finalItems = [
                            ...catalog,
                            ...newItems
                        ];
                        finalCats = [
                            ...catalogCategories,
                            ...newCats
                        ];
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Merged ${newItems.length} new items & ${newCats.length} new categories!`);
                    }
                    setCatalog(finalItems);
                    setCatalogCategories(finalCats);
                    await persistCatalogData(finalItems, finalCats);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BusinessComponents$2f$CurrencyConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrencyConfirmModal"], {
                isOpen: showCurrencyConfirmModal,
                onClose: ()=>setShowCurrencyConfirmModal(false),
                onConfirm: ()=>{
                    setShowCurrencyConfirmModal(false);
                    setIsChangingCurrency(true);
                    setIsCurrencyLocked(false);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Select your new standard currency and click 'Save Changes'.");
                },
                currentCurrency: businessCurrency
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-14 left-0 right-0 z-30 px-3 py-2 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-700/60 flex items-center justify-between gap-1.5 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openAddProduct,
                        className: "flex-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ShoppingBag01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShoppingBag01Icon"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1597,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+ Product"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1598,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1593,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openAddService,
                        className: "flex-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Briefcase01Icon"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+ Service"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1605,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1600,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openAddLead,
                        className: "flex-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics01Icon"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1611,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+ Lead"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1612,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openAddBooking,
                        className: "flex-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+ Booking"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1619,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1614,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1592,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#1f2937]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-around py-1.5 px-1 shadow-2xl",
                children: [
                    primaryMobileMenu.map((m)=>{
                        const isActive = activeSubTab === m.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSubTabSwitch(m.id),
                            className: `flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${isActive ? "text-indigo-600 dark:text-indigo-400 font-black" : "text-slate-500 dark:text-slate-400"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base",
                                    children: m.emoji || "📁"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1636,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate max-w-[68px] text-center",
                                    children: m.label.split(" ")[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1637,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, m.id, true, {
                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                            lineNumber: 1628,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsMobileMoreOpen(true),
                        className: `flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${isMobileMoreOpen ? "text-indigo-600 dark:text-indigo-400 font-black" : "text-slate-500 dark:text-slate-400"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: "⚙️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1648,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "More"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1649,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1624,
                columnNumber: 7
            }, this),
            isMobileMoreOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0",
                        onClick: ()=>setIsMobileMoreOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1656,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 bg-white dark:bg-[#1f2937] rounded-t-2xl border-t border-slate-200 dark:border-slate-800 p-4 shadow-2xl max-h-[75vh] overflow-y-auto space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "⚙️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1663,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "All Business Modules"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1664,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMobileMoreOpen(false),
                                        className: "p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 text-xs font-bold",
                                        children: "✕ Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1666,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1661,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 text-xs",
                                children: activeBusinessMenu.map((m)=>{
                                    const isCurrent = activeSubTab === m.id;
                                    const subTabCounts = {
                                        catalog: catalog.length,
                                        services: businessServices.length,
                                        meetings: businessMeetings.length,
                                        directory: businessDirectory.length,
                                        reviews: businessReviews.length,
                                        crm: deals.length,
                                        orders: customerOrders.length,
                                        enquiries: customerEnquiries.length
                                    };
                                    const count = subTabCounts[m.id];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleSubTabSwitch(m.id);
                                            setIsMobileMoreOpen(false);
                                        },
                                        className: `flex items-center justify-between p-2.5 rounded-lg border text-left transition-all ${isCurrent ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-700 dark:text-indigo-300 font-bold" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: m.emoji || "📁"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1702,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: m.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1703,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1701,
                                                columnNumber: 21
                                            }, this),
                                            count !== undefined && count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1.5 py-0.2 rounded-full text-[10px] font-black bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
                                                children: count
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                lineNumber: 1706,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1690,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1674,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 font-medium",
                                        children: "Show all 18 modules"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1717,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: showAllModules,
                                        onChange: (e)=>handleToggleShowAll(e.target.checked),
                                        className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                        lineNumber: 1718,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                lineNumber: 1716,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                        lineNumber: 1660,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1655,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isCategoryModalOpen,
                onOpenChange: setIsCategoryModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[700px] max-h-[85vh] overflow-y-auto p-6 bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 rounded-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-lg font-black tracking-tight flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🎯"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                            lineNumber: 1734,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Select Your Business Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                            lineNumber: 1735,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1733,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: "Pick your primary business model. PingDart will adapt its terminology, subtabs, and navigation to only show tools relevant to you."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1737,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                            lineNumber: 1732,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$businessMenuConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUSINESS_CATEGORIES"].map((cat)=>{
                                const isSelected = businessType === cat.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>handleSelectCategory(cat.id),
                                    className: `p-3.5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/50 shadow-sm" : "border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-slate-50 dark:hover:bg-slate-900"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: cat.emoji
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                                lineNumber: 1757,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5",
                                                                        children: [
                                                                            cat.label,
                                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] px-1.5 py-0.2 bg-indigo-600 text-white rounded-full font-bold",
                                                                                children: "Active"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                                                lineNumber: 1762,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                                        lineNumber: 1759,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold",
                                                                        children: cat.subtitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                                        lineNumber: 1767,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                                lineNumber: 1758,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1756,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                    lineNumber: 1755,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed",
                                                    children: cat.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                    lineNumber: 1771,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                            lineNumber: 1754,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-slate-400 font-bold uppercase tracking-wider mr-1",
                                                    children: "Modules:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                    lineNumber: 1775,
                                                    columnNumber: 21
                                                }, this),
                                                cat.defaultTabs.slice(0, 5).map((tid)=>{
                                                    var _cat_tabOverrides_tid, _cat_tabOverrides;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold",
                                                        children: ((_cat_tabOverrides = cat.tabOverrides) === null || _cat_tabOverrides === void 0 ? void 0 : (_cat_tabOverrides_tid = _cat_tabOverrides[tid]) === null || _cat_tabOverrides_tid === void 0 ? void 0 : _cat_tabOverrides_tid.label) || tid
                                                    }, tid, false, {
                                                        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                        lineNumber: 1777,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                cat.defaultTabs.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-slate-400 font-semibold",
                                                    children: [
                                                        "+",
                                                        cat.defaultTabs.length - 5,
                                                        " more"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                                    lineNumber: 1782,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                            lineNumber: 1774,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1746,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                            lineNumber: 1742,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: showAllModules,
                                            onChange: (e)=>handleToggleShowAll(e.target.checked),
                                            className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                            lineNumber: 1792,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Keep all 18 modules visible (Power User mode)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                            lineNumber: 1798,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1791,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCategoryModalOpen(false),
                                    className: "px-4 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-colors",
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                                    lineNumber: 1800,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                            lineNumber: 1790,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                    lineNumber: 1731,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
                lineNumber: 1730,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/settings/BusinessProfileSettings.tsx",
        lineNumber: 1164,
        columnNumber: 5
    }, this);
}
_s(BusinessProfileSettings, "ffNYB2X+LYZUsVg+BaHHsafIWLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = BusinessProfileSettings;
var _c;
__turbopack_context__.k.register(_c, "BusinessProfileSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_settings_BusinessProfileSettings_tsx_f1932629._.js.map