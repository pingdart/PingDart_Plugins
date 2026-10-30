(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BillingScreen",
    ()=>BillingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Invoice01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Download01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Wallet01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Analytics01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AlertCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowDown01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Coins01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CloudUploadIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CloudUploadIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Clock01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Package01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Package01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$RecordPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/RecordPaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/ViewInvoiceModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateInvoicePdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/generateInvoicePdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ProductsServicesScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/ProductsServicesScreen.tsx [app-client] (ecmascript)");
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
const STORAGE_SUBS_KEY = "pingdart_crm_subscriptions";
const INITIAL_TAX_PROFILES = [
    {
        id: "tax-1",
        taxName: "India Integrated GST (IGST)",
        taxRate: 18.0,
        country: "India",
        taxCode: "IN-IGST-18",
        isActive: true
    },
    {
        id: "tax-2",
        taxName: "India Central & State GST (CGST + SGST)",
        taxRate: 18.0,
        country: "India",
        taxCode: "IN-CGST-SGST-18",
        isActive: true
    },
    {
        id: "tax-3",
        taxName: "US State & Local Sales Tax",
        taxRate: 7.25,
        country: "United States",
        state: "CA",
        taxCode: "US-CA-GEN",
        isActive: true
    },
    {
        id: "tax-4",
        taxName: "EU Digital Services VAT (OSS)",
        taxRate: 20.0,
        country: "European Union",
        taxCode: "EU-OSS-DIGITAL",
        isActive: true
    }
];
function BillingScreen({ invoices: initialInvoices = [], clients = [], projects = [], deals = [], teamMembers = [], activeSubTab: activeSubTabProp, onSubTabChange, isClientViewOnly = false, clientName, clientId, onAddInvoice, onDeleteInvoice, onRecordPayment, onAddProject }) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { currencySymbol, currency, formatAmount, formatCompact } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const VALID_BILLING_SUBTABS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[VALID_BILLING_SUBTABS]": ()=>[
                "overview",
                "invoices",
                "products_services",
                "subscriptions",
                "collections",
                "usage_billing",
                "revenue_recognition",
                "taxes_commissions",
                "accounting_sync",
                "ai_revenue_copilot"
            ]
    }["BillingScreen.useMemo[VALID_BILLING_SUBTABS]"], []);
    const initialSubTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[initialSubTab]": ()=>{
            const raw = activeSubTabProp || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab"));
            if (raw && VALID_BILLING_SUBTABS.includes(raw.toLowerCase())) {
                return raw.toLowerCase();
            }
            return "overview";
        }
    }["BillingScreen.useMemo[initialSubTab]"], [
        activeSubTabProp,
        searchParams,
        VALID_BILLING_SUBTABS
    ]);
    const [activeTab, setActiveTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSubTab);
    const setActiveTab = (tab)=>{
        setActiveTabState(tab);
        onSubTabChange === null || onSubTabChange === void 0 ? void 0 : onSubTabChange(tab);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            tab: "crm",
            crm_tab: "billing",
            crm_subtab: tab
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BillingScreen.useEffect": ()=>{
            const raw = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab"));
            if (raw && VALID_BILLING_SUBTABS.includes(raw.toLowerCase())) {
                setActiveTabState(raw.toLowerCase());
            }
        }
    }["BillingScreen.useEffect"], [
        searchParams,
        VALID_BILLING_SUBTABS
    ]);
    const [viewPerspective, setViewPerspective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isClientViewOnly ? "client_portal" : "revops");
    const [paymentModalInvoice, setPaymentModalInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewingInvoice, setViewingInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const moreMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showNotification = (msg)=>{
        setToastMessage(msg);
        setTimeout(()=>setToastMessage(null), 4000);
    };
    // Close more menu on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BillingScreen.useEffect": ()=>{
            const handleClickOutside = {
                "BillingScreen.useEffect.handleClickOutside": (e)=>{
                    if (moreMenuRef.current && !moreMenuRef.current.contains(e.target)) {
                        setIsMoreMenuOpen(false);
                    }
                }
            }["BillingScreen.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "BillingScreen.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["BillingScreen.useEffect"];
        }
    }["BillingScreen.useEffect"], []);
    // ── 1. CONNECTED REAL DATA: INVOICES ──────────────────────────────────
    const invoices = initialInvoices;
    // ── 2. CONNECTED REAL DATA: SUBSCRIPTIONS ─────────────────────────────
    const [subscriptions, setSubscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "BillingScreen.useState": ()=>{
            try {
                const saved = localStorage.getItem(STORAGE_SUBS_KEY);
                if (saved) return JSON.parse(saved);
            } catch (e) {}
            return [];
        }
    }["BillingScreen.useState"]);
    const persistSubscriptions = (subs)=>{
        setSubscriptions(subs);
        try {
            localStorage.setItem(STORAGE_SUBS_KEY, JSON.stringify(subs));
        } catch (e) {}
    };
    // ── 2B. CONNECTED REAL DATA: PRODUCTS & SERVICES CATALOG ─────────────
    const [productsServices, setProductsServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "BillingScreen.useState": ()=>{
            try {
                const saved = localStorage.getItem("pingdart_crm_products_services");
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed)) {
                        return parsed.filter({
                            "BillingScreen.useState": (item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ProductsServicesScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDemoProductService"])(item)
                        }["BillingScreen.useState"]);
                    }
                }
            } catch (e) {}
            return [];
        }
    }["BillingScreen.useState"]);
    const persistProductsServices = (items)=>{
        setProductsServices(items);
        try {
            localStorage.setItem("pingdart_crm_products_services", JSON.stringify(items));
        } catch (e) {}
    };
    // Listen for storage events to sync catalog across tabs/windows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BillingScreen.useEffect": ()=>{
            const handleStorage = {
                "BillingScreen.useEffect.handleStorage": (e)=>{
                    if (e.key === "pingdart_crm_products_services" && e.newValue) {
                        try {
                            setProductsServices(JSON.parse(e.newValue));
                        } catch (e) {}
                    }
                }
            }["BillingScreen.useEffect.handleStorage"];
            window.addEventListener("storage", handleStorage);
            return ({
                "BillingScreen.useEffect": ()=>window.removeEventListener("storage", handleStorage)
            })["BillingScreen.useEffect"];
        }
    }["BillingScreen.useEffect"], []);
    // ── 3. CONNECTED REAL DATA: COLLECTIONS (Derived dynamically from real invoices) ───
    const collections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[collections]": ()=>{
            return invoices.filter({
                "BillingScreen.useMemo[collections]": (inv)=>{
                    if (inv.status === "Overdue") return true;
                    if (inv.status !== "Paid" && inv.dueDate) {
                        const dueTimestamp = new Date(inv.dueDate).getTime();
                        if (!isNaN(dueTimestamp) && dueTimestamp < Date.now()) {
                            return true;
                        }
                    }
                    return false;
                }
            }["BillingScreen.useMemo[collections]"]).map({
                "BillingScreen.useMemo[collections]": (inv, idx)=>{
                    let diffDays = 14;
                    if (inv.dueDate) {
                        const due = new Date(inv.dueDate).getTime();
                        if (!isNaN(due)) {
                            diffDays = Math.max(1, Math.floor((Date.now() - due) / (1000 * 60 * 60 * 24)));
                        }
                    }
                    return {
                        id: `col-${inv.id}`,
                        caseNumber: `DUN-${String(inv.invoiceNumber).replace(/[^0-9]/g, "").slice(-4) || String(idx + 1).padStart(3, "0")}`,
                        clientName: inv.clientName || "Client Account",
                        invoiceNumber: inv.invoiceNumber,
                        overdueAmount: Number(inv.total) || Number(inv.amount) || 0,
                        daysOverdue: diffDays,
                        riskScore: Math.min(98, 45 + diffDays * 2),
                        status: "open",
                        assignedAgent: "RevOps Lead",
                        lastContactDate: "Pending Notice"
                    };
                }
            }["BillingScreen.useMemo[collections]"]);
        }
    }["BillingScreen.useMemo[collections]"], [
        invoices
    ]);
    // ── 4. CONNECTED REAL DATA: USAGE METERS (Derived from real workspace state) ───
    const usageMeters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[usageMeters]": ()=>{
            return [
                {
                    id: "meter-1",
                    meterName: "Active Team Seats",
                    meterCode: "active_seats",
                    currentUsage: teamMembers.length || 1,
                    limit: 50,
                    unit: "Seats",
                    overageRate: 2500,
                    overageAmount: teamMembers.length > 50 ? (teamMembers.length - 50) * 2500 : 0
                },
                {
                    id: "meter-2",
                    meterName: "Client Workspaces Storage",
                    meterCode: "storage_gb",
                    currentUsage: (clients.length || 1) * 2,
                    limit: 100,
                    unit: "GB",
                    overageRate: 150,
                    overageAmount: 0
                },
                {
                    id: "meter-3",
                    meterName: "Production API Requests",
                    meterCode: "api_calls",
                    currentUsage: (projects.length || 1) * 15000,
                    limit: 5000000,
                    unit: "Requests",
                    overageRate: 0.05,
                    overageAmount: 0
                },
                {
                    id: "meter-4",
                    meterName: "AI Tokens Consumed",
                    meterCode: "ai_tokens",
                    currentUsage: 420000,
                    limit: 5000000,
                    unit: "Tokens",
                    overageRate: 0.05,
                    overageAmount: 0
                }
            ];
        }
    }["BillingScreen.useMemo[usageMeters]"], [
        teamMembers.length,
        clients.length,
        projects.length
    ]);
    // ── 5. CONNECTED REAL DATA: ASC 606 REVENUE RECOGNITION (Derived from real projects & deals) ───
    const revRecList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[revRecList]": ()=>{
            const list = [];
            projects.forEach({
                "BillingScreen.useMemo[revRecList]": (p)=>{
                    const budget = Number(p.budget) || 0;
                    const progress = p.milestonesCount ? (p.completedMilestonesCount || 0) / p.milestonesCount : p.status === "completed" ? 1 : 0.5;
                    list.push({
                        id: `rr-prj-${p.id}`,
                        clientName: `${p.clientName || "Client"} — ${p.name}`,
                        period: "Current Quarter",
                        recognizedAmount: Math.round(budget * progress),
                        deferredAmount: Math.round(budget * (1 - progress)),
                        ruleType: "milestone_delivery"
                    });
                }
            }["BillingScreen.useMemo[revRecList]"]);
            deals.filter({
                "BillingScreen.useMemo[revRecList]": (d)=>d.stage === "won" || d.isWon
            }["BillingScreen.useMemo[revRecList]"]).forEach({
                "BillingScreen.useMemo[revRecList]": (d)=>{
                    list.push({
                        id: `rr-deal-${d.id}`,
                        clientName: `${d.companyName || d.title} (Won Deal)`,
                        period: "Current Quarter",
                        recognizedAmount: Math.round(Number(d.dealValue) || 0),
                        deferredAmount: 0,
                        ruleType: "immediate"
                    });
                }
            }["BillingScreen.useMemo[revRecList]"]);
            return list;
        }
    }["BillingScreen.useMemo[revRecList]"], [
        projects,
        deals
    ]);
    // ── 6. CONNECTED REAL DATA: COMMISSIONS (Derived from real won deals & team members) ───
    const commissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[commissions]": ()=>{
            const wonDeals = deals.filter({
                "BillingScreen.useMemo[commissions].wonDeals": (d)=>d.stage === "won" || d.isWon
            }["BillingScreen.useMemo[commissions].wonDeals"]);
            return wonDeals.map({
                "BillingScreen.useMemo[commissions]": (deal, idx)=>{
                    const rep = teamMembers.length > 0 ? teamMembers[idx % teamMembers.length].name : "Sales Lead";
                    const val = Number(deal.dealValue) || 0;
                    return {
                        id: `comm-${deal.id}`,
                        repName: rep,
                        dealName: deal.title,
                        amount: Math.round(val * 0.1),
                        commissionType: "one_time_acv",
                        period: "Current Period",
                        status: "approved"
                    };
                }
            }["BillingScreen.useMemo[commissions]"]);
        }
    }["BillingScreen.useMemo[commissions]"], [
        deals,
        teamMembers
    ]);
    const [taxProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_TAX_PROFILES);
    // Modals state
    const [isNewInvoiceModalOpen, setIsNewInvoiceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreateSubModalOpen, setIsCreateSubModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Search and filter states
    const [invoiceSearch, setInvoiceSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [invoiceStatusFilter, setInvoiceStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [subSearch, setSubSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subStatusFilter, setSubStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    // Selected Copilot Question
    const [selectedCopilotQuestion, setSelectedCopilotQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("What is our current active revenue run-rate?");
    const companyProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[companyProfile]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_company_profile");
                    if (saved) return JSON.parse(saved);
                } catch (_) {}
            }
            return null;
        }
    }["BillingScreen.useMemo[companyProfile]"], [
        isNewInvoiceModalOpen
    ]);
    const billingConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[billingConfig]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_gst_billing_config");
                    if (saved) return JSON.parse(saved);
                } catch (_) {}
            }
            return {
                bankAccountName: "PingDart Technologies Pvt Ltd",
                bankName: "HDFC Bank Ltd",
                bankAccountNumber: "50200012345678",
                bankIfscCode: "HDFC0000123",
                bankBranch: "Hitech City Branch, Madhapur, Hyderabad",
                bankUpiId: "pingdart@hdfcbank"
            };
        }
    }["BillingScreen.useMemo[billingConfig]"], [
        isNewInvoiceModalOpen
    ]);
    const [newInvoiceForm, setNewInvoiceForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        clientId: "",
        clientName: "",
        customerGstin: "",
        billingAddress: "",
        placeOfSupply: "36 - Telangana",
        contactEmail: "",
        contactPhone: "",
        purchaseOrderNumber: "",
        projectId: "",
        dueDate: "",
        notes: ""
    });
    const [invoiceLineItems, setInvoiceLineItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "item-1",
            productId: "",
            name: "",
            description: "",
            quantity: 1,
            unitPrice: 0
        }
    ]);
    const [applyGstTax, setApplyGstTax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Line items calculations
    const invoiceSubtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[invoiceSubtotal]": ()=>{
            return invoiceLineItems.reduce({
                "BillingScreen.useMemo[invoiceSubtotal]": (sum, item)=>sum + (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0)
            }["BillingScreen.useMemo[invoiceSubtotal]"], 0);
        }
    }["BillingScreen.useMemo[invoiceSubtotal]"], [
        invoiceLineItems
    ]);
    const isIntraState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[isIntraState]": ()=>{
            return (newInvoiceForm.placeOfSupply || "").startsWith("36");
        }
    }["BillingScreen.useMemo[isIntraState]"], [
        newInvoiceForm.placeOfSupply
    ]);
    const invoiceCgstAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[invoiceCgstAmount]": ()=>{
            if (!applyGstTax || !isIntraState) return 0;
            return Math.round(invoiceSubtotal * 0.09 * 100) / 100;
        }
    }["BillingScreen.useMemo[invoiceCgstAmount]"], [
        invoiceSubtotal,
        applyGstTax,
        isIntraState
    ]);
    const invoiceSgstAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[invoiceSgstAmount]": ()=>{
            if (!applyGstTax || !isIntraState) return 0;
            return Math.round(invoiceSubtotal * 0.09 * 100) / 100;
        }
    }["BillingScreen.useMemo[invoiceSgstAmount]"], [
        invoiceSubtotal,
        applyGstTax,
        isIntraState
    ]);
    const invoiceIgstAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[invoiceIgstAmount]": ()=>{
            if (!applyGstTax || isIntraState) return 0;
            return Math.round(invoiceSubtotal * 0.18 * 100) / 100;
        }
    }["BillingScreen.useMemo[invoiceIgstAmount]"], [
        invoiceSubtotal,
        applyGstTax,
        isIntraState
    ]);
    const invoiceTaxAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[invoiceTaxAmount]": ()=>{
            if (!applyGstTax) return 0;
            return isIntraState ? invoiceCgstAmount + invoiceSgstAmount : invoiceIgstAmount;
        }
    }["BillingScreen.useMemo[invoiceTaxAmount]"], [
        applyGstTax,
        isIntraState,
        invoiceCgstAmount,
        invoiceSgstAmount,
        invoiceIgstAmount
    ]);
    const invoiceGrandTotal = invoiceSubtotal + invoiceTaxAmount;
    // Intelligent project filtering for the selected client in the invoice modal
    const { clientProjects, otherProjects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo": ()=>{
            const isMatchingClient = {
                "BillingScreen.useMemo.isMatchingClient": (p)=>{
                    var _client_company, _client;
                    if (!newInvoiceForm.clientId && !newInvoiceForm.clientName) return true;
                    const formClientId = String(newInvoiceForm.clientId || "").trim().toLowerCase();
                    const formClientName = String(newInvoiceForm.clientName || "").trim().toLowerCase();
                    const pClientId = String(p.clientId || "").trim().toLowerCase();
                    const pClientName = String(p.clientName || ((_client = p.client) === null || _client === void 0 ? void 0 : (_client_company = _client.company) === null || _client_company === void 0 ? void 0 : _client_company.name) || "").trim().toLowerCase();
                    // Direct ID match or numeric match (e.g. "CLI-614" vs "614")
                    if (formClientId && pClientId) {
                        if (formClientId === pClientId) return true;
                        const formNum = formClientId.replace(/\D/g, "");
                        const pNum = pClientId.replace(/\D/g, "");
                        if (formNum && pNum && formNum === pNum) return true;
                    }
                    // Name match
                    if (formClientName && pClientName) {
                        if (formClientName.includes(pClientName) || pClientName.includes(formClientName)) return true;
                    }
                    return false;
                }
            }["BillingScreen.useMemo.isMatchingClient"];
            const matched = projects.filter(isMatchingClient);
            const others = projects.filter({
                "BillingScreen.useMemo.others": (p)=>!isMatchingClient(p)
            }["BillingScreen.useMemo.others"]);
            return {
                clientProjects: matched,
                otherProjects: others
            };
        }
    }["BillingScreen.useMemo"], [
        projects,
        newInvoiceForm.clientId,
        newInvoiceForm.clientName
    ]);
    const handleQuickCreateProjectForClient = (targetClientName, targetClientId)=>{
        const cName = targetClientName || newInvoiceForm.clientName;
        const cId = targetClientId || newInvoiceForm.clientId;
        if (!cName) {
            showNotification("⚠️ Please select a customer/client first to create a related project.");
            return;
        }
        const clientObj = clients.find((c)=>String(c.id) === String(cId));
        const cleanPrefix = ((clientObj === null || clientObj === void 0 ? void 0 : clientObj.clientCode) || cName.slice(0, 4)).replace(/[^a-zA-Z0-9]/g, "").toUpperCase() || "PRJ";
        const newProjCode = `PRJ-${cleanPrefix}-${Date.now().toString().slice(-4)}`;
        const newProjName = `${cName} — Implementation & Delivery`;
        const tempProjId = `prj-${Date.now()}`;
        const newProj = {
            id: tempProjId,
            name: newProjName,
            code: newProjCode,
            clientId: cId || (clientObj ? clientObj.id : undefined),
            clientName: cName,
            status: "in_progress",
            priority: "medium",
            budget: 50000,
            spent: 0,
            currency: billingConfig.currency || "INR",
            startDate: new Date().toISOString().split("T")[0],
            targetEndDate: new Date(Date.now() + 90 * 86400000).toISOString().split("T")[0],
            milestonesCount: 3,
            completedMilestonesCount: 0,
            healthScore: 98,
            scheduleStatus: "green",
            budgetStatus: "green",
            resourceStatus: "green",
            clientSentimentStatus: "green"
        };
        if (onAddProject) {
            onAddProject(newProj);
        }
        setNewInvoiceForm((prev)=>({
                ...prev,
                projectId: tempProjId
            }));
        showNotification(`⚡ Quick-created and linked project: "${newProjName}"!`);
    };
    const handleAddLineItem = ()=>{
        setInvoiceLineItems((prev)=>[
                ...prev,
                {
                    id: `line-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
                    productId: "",
                    name: "",
                    description: "",
                    quantity: 1,
                    unitPrice: 0
                }
            ]);
    };
    const handleRemoveLineItem = (id)=>{
        if (invoiceLineItems.length <= 1) {
            setInvoiceLineItems([
                {
                    id: `line-${Date.now()}`,
                    productId: "",
                    name: "",
                    description: "",
                    quantity: 1,
                    unitPrice: 0
                }
            ]);
            return;
        }
        setInvoiceLineItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const handleSelectProductForLineItem = (lineId, productId)=>{
        const prod = productsServices.find((p)=>p.id === productId);
        if (!prod) {
            setInvoiceLineItems((prev)=>prev.map((item)=>item.id === lineId ? {
                        ...item,
                        productId: "",
                        name: "",
                        unitPrice: 0
                    } : item));
            return;
        }
        setInvoiceLineItems((prev)=>prev.map((item)=>item.id === lineId ? {
                    ...item,
                    productId: prod.id,
                    name: prod.name,
                    description: prod.description || "",
                    unitPrice: prod.unitPrice,
                    hsnSacCode: prod.hsnSacCode || (prod.type === "service" ? "998314" : "997331")
                } : item));
    };
    const handleUpdateLineItem = (lineId, field, value)=>{
        setInvoiceLineItems((prev)=>prev.map((item)=>item.id === lineId ? {
                    ...item,
                    [field]: value
                } : item));
    };
    // New Subscription Form
    const [newSubForm, setNewSubForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        clientId: "",
        clientName: "",
        planName: "",
        subscriptionType: "Annual SaaS",
        mrr: "",
        paymentMethod: "Bank NEFT / Net 30"
    });
    const isClientView = viewPerspective === "client_portal";
    // Financial calculations
    const totalBilled = invoices.reduce((sum, inv)=>sum + (Number(inv.total) || 0), 0);
    const totalPaid = invoices.filter((inv)=>inv.status === "Paid").reduce((sum, inv)=>sum + (Number(inv.total) || 0), 0);
    const totalOverdue = invoices.filter((inv)=>inv.status === "Overdue").reduce((sum, inv)=>sum + (Number(inv.total) || 0), 0);
    const activeSubs = subscriptions.filter((s)=>s.status === "active");
    const computedMrr = activeSubs.reduce((sum, s)=>sum + s.mrr, 0);
    const computedArr = computedMrr * 12;
    const overdueRisk = collections.reduce((sum, c)=>sum + c.overdueAmount, 0);
    // Filtered invoices
    const filteredInvoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[filteredInvoices]": ()=>{
            return invoices.filter({
                "BillingScreen.useMemo[filteredInvoices]": (inv)=>{
                    var _inv_clientName;
                    if ((isClientView || isClientViewOnly) && clientName) {
                        var _inv_clientName1;
                        const matchesClient = ((_inv_clientName1 = inv.clientName) === null || _inv_clientName1 === void 0 ? void 0 : _inv_clientName1.toLowerCase()) === clientName.toLowerCase() || String(inv.clientId) === String(clientId);
                        if (!matchesClient) return false;
                    }
                    const matchSearch = !invoiceSearch || ((_inv_clientName = inv.clientName) === null || _inv_clientName === void 0 ? void 0 : _inv_clientName.toLowerCase().includes(invoiceSearch.toLowerCase())) || inv.invoiceNumber.toLowerCase().includes(invoiceSearch.toLowerCase());
                    const matchStatus = invoiceStatusFilter === "All" ? true : inv.status === invoiceStatusFilter;
                    return matchSearch && matchStatus;
                }
            }["BillingScreen.useMemo[filteredInvoices]"]);
        }
    }["BillingScreen.useMemo[filteredInvoices]"], [
        invoices,
        invoiceSearch,
        invoiceStatusFilter,
        isClientView,
        isClientViewOnly,
        clientName,
        clientId
    ]);
    // Filtered subscriptions
    const filteredSubscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BillingScreen.useMemo[filteredSubscriptions]": ()=>{
            return subscriptions.filter({
                "BillingScreen.useMemo[filteredSubscriptions]": (sub)=>{
                    const matchSearch = !subSearch || sub.clientName.toLowerCase().includes(subSearch.toLowerCase()) || sub.planName.toLowerCase().includes(subSearch.toLowerCase()) || sub.subscriptionNumber.toLowerCase().includes(subSearch.toLowerCase());
                    const matchStatus = subStatusFilter === "All" ? true : sub.status === subStatusFilter;
                    return matchSearch && matchStatus;
                }
            }["BillingScreen.useMemo[filteredSubscriptions]"]);
        }
    }["BillingScreen.useMemo[filteredSubscriptions]"], [
        subscriptions,
        subSearch,
        subStatusFilter
    ]);
    // Handlers
    const handleCreateInvoice = (e)=>{
        e.preventDefault();
        if (!newInvoiceForm.clientName) {
            showNotification("Please select or enter a client name.");
            return;
        }
        if (invoiceLineItems.length === 0 || invoiceGrandTotal <= 0) {
            showNotification("Please add at least one line item with a valid price.");
            return;
        }
        let invoicePrefix = `PD/${new Date().getFullYear()}-${(new Date().getFullYear() + 1).toString().slice(-2)}/`;
        let seq = invoices.length + 1;
        try {
            const savedConfig = localStorage.getItem("crm_gst_billing_config");
            if (savedConfig) {
                const parsed = JSON.parse(savedConfig);
                if (parsed.invoicePrefix) invoicePrefix = parsed.invoicePrefix;
                if (parsed.startingInvoiceNumber) seq = Number(parsed.startingInvoiceNumber) + invoices.length;
            }
        } catch (_) {}
        const num = `${invoicePrefix}${String(seq).padStart(4, "0")}`;
        const selectedProj = projects.find((p)=>String(p.id) === String(newInvoiceForm.projectId));
        const formattedItems = invoiceLineItems.map((item)=>({
                id: item.id,
                productId: item.productId || undefined,
                name: item.name || "Software & Technology Services",
                description: item.description || "",
                quantity: Number(item.quantity) || 1,
                unitPrice: Number(item.unitPrice) || 0,
                taxRate: applyGstTax ? 18 : 0,
                amount: (Number(item.quantity) || 1) * (Number(item.unitPrice) || 0),
                hsnSacCode: item.hsnSacCode || "998314"
            }));
        const newInv = {
            invoiceNumber: num,
            clientId: newInvoiceForm.clientId || undefined,
            clientName: newInvoiceForm.clientName,
            projectId: newInvoiceForm.projectId || undefined,
            projectName: selectedProj === null || selectedProj === void 0 ? void 0 : selectedProj.name,
            amount: invoiceGrandTotal,
            subtotal: invoiceSubtotal,
            taxAmount: invoiceTaxAmount,
            gstRate: applyGstTax ? 18 : 0,
            gstAmount: invoiceTaxAmount,
            total: invoiceGrandTotal,
            currency: currency,
            issueDate: new Date().toISOString().split("T")[0],
            status: "Sent",
            dueDate: newInvoiceForm.dueDate || "Next 14 Days",
            paymentNotes: newInvoiceForm.notes || undefined,
            items: formattedItems,
            customFields: {
                customerGstin: newInvoiceForm.customerGstin || undefined,
                billingAddress: newInvoiceForm.billingAddress || undefined,
                placeOfSupply: newInvoiceForm.placeOfSupply || undefined,
                contactPhone: newInvoiceForm.contactPhone || undefined,
                contactEmail: newInvoiceForm.contactEmail || undefined,
                purchaseOrderNumber: newInvoiceForm.purchaseOrderNumber || undefined,
                isIntraState: isIntraState,
                cgstAmount: isIntraState ? invoiceCgstAmount : 0,
                sgstAmount: isIntraState ? invoiceSgstAmount : 0,
                igstAmount: !isIntraState ? invoiceIgstAmount : 0
            }
        };
        onAddInvoice === null || onAddInvoice === void 0 ? void 0 : onAddInvoice(newInv);
        setIsNewInvoiceModalOpen(false);
        setNewInvoiceForm({
            clientId: "",
            clientName: "",
            customerGstin: "",
            billingAddress: "",
            placeOfSupply: "36 - Telangana",
            contactEmail: "",
            contactPhone: "",
            purchaseOrderNumber: "",
            projectId: "",
            dueDate: "",
            notes: ""
        });
        setInvoiceLineItems([
            {
                id: `item-${Date.now()}`,
                productId: "",
                name: "",
                description: "",
                quantity: 1,
                unitPrice: 0
            }
        ]);
        showNotification(`Invoice ${num} generated for ${newInvoiceForm.clientName} (${formatAmount(invoiceGrandTotal)}).`);
    };
    const handleToggleAutoRenew = (subId)=>{
        const updated = subscriptions.map((s)=>s.id === subId ? {
                ...s,
                autoRenew: !s.autoRenew
            } : s);
        persistSubscriptions(updated);
        showNotification(`Auto-renewal preference updated.`);
    };
    const handleCreateSubscription = (e)=>{
        e.preventDefault();
        if (!newSubForm.clientName || !newSubForm.mrr) return;
        const mrrVal = Number(newSubForm.mrr) || 0;
        const num = `SUB-${new Date().getFullYear()}-${String(subscriptions.length + 1).padStart(3, "0")}`;
        const newSub = {
            id: `sub-${Date.now()}`,
            subscriptionNumber: num,
            clientName: newSubForm.clientName,
            planName: newSubForm.planName || "Custom Contract",
            subscriptionType: newSubForm.subscriptionType,
            status: "active",
            mrr: mrrVal,
            arr: mrrVal * 12,
            currentPeriodEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }),
            autoRenew: true,
            paymentMethod: newSubForm.paymentMethod
        };
        persistSubscriptions([
            newSub,
            ...subscriptions
        ]);
        setIsCreateSubModalOpen(false);
        setNewSubForm({
            clientId: "",
            clientName: "",
            planName: "",
            subscriptionType: "Annual SaaS",
            mrr: "",
            paymentMethod: "Bank NEFT / Net 30"
        });
        showNotification(`Subscription contract ${num} activated.`);
    };
    const handleTriggerAccountingSync = (platform)=>{
        showNotification(`Sync initiated with ${platform}: ${invoices.length} invoices and ${revRecList.length} schedules reconciled.`);
    };
    const handleTriggerDunning = (targetClientName)=>{
        showNotification(`Automated dunning alert & payment reminder dispatched to ${targetClientName}.`);
    };
    const handleDownloadInvoice = (invNum)=>{
        showNotification(`Preparing PDF export for invoice ${invNum}... Download ready.`);
    };
    // Main primary tabs (Always visible and clean)
    const PRIMARY_TABS = [
        {
            id: "overview",
            label: "Overview",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics01Icon"]
        },
        {
            id: "invoices",
            label: "Invoices",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"],
            count: invoices.length
        },
        {
            id: "products_services",
            label: "Products & Services",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Package01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Package01Icon"],
            count: productsServices.length
        },
        {
            id: "subscriptions",
            label: "Subscriptions",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"],
            count: subscriptions.length
        },
        {
            id: "collections",
            label: "Collections",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"],
            count: collections.length,
            isAlert: overdueRisk > 0,
            adminOnly: true
        },
        {
            id: "usage_billing",
            label: "Usage",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics01Icon"],
            count: usageMeters.length
        },
        {
            id: "ai_revenue_copilot",
            label: "AI Copilot",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"],
            highlight: true
        }
    ];
    // Secondary tabs inside "More" dropdown
    const MORE_TABS = [
        {
            id: "revenue_recognition",
            label: "Rev Rec (ASC 606)",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"]
        },
        {
            id: "taxes_commissions",
            label: "Taxes & Payouts",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"]
        },
        {
            id: "accounting_sync",
            label: "GL & ERP Sync",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CloudUploadIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudUploadIcon"]
        }
    ];
    const visiblePrimaryTabs = isClientView ? PRIMARY_TABS.filter((t)=>!t.adminOnly) : PRIMARY_TABS;
    const isMoreActive = MORE_TABS.some((t)=>t.id === activeTab);
    const activeMoreTab = MORE_TABS.find((t)=>t.id === activeTab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 animate-fade-in select-none",
        children: [
            toastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-3 rounded-[10px] shadow-2xl border border-slate-700/60 dark:border-slate-300 flex items-center gap-3 text-xs font-semibold animate-in slide-in-from-bottom-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                        size: 16,
                        className: "text-emerald-400 dark:text-emerald-600 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 895,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toastMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 896,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setToastMessage(null),
                        className: "ml-2 text-slate-400 hover:text-white dark:hover:text-slate-950 cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 901,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 897,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 894,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-[#111827] p-2 sm:p-2.5 rounded-[10px]  border border-slate-200/80 dark:border-slate-800 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5",
                        children: [
                            visiblePrimaryTabs.map((tab)=>{
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    className: `px-3 py-1.5 rounded-[50px] text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${isActive ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: `w-3.5 h-3.5 ${isActive ? "text-white" : tab.highlight ? "text-purple-500" : "text-slate-400"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 922,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 930,
                                            columnNumber: 17
                                        }, this),
                                        tab.count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] px-1.5 py-0.2 rounded-full font-mono font-medium ${isActive ? "bg-indigo-700 text-indigo-100" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`,
                                            children: tab.count
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 932,
                                            columnNumber: 19
                                        }, this),
                                        tab.isAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 942,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 914,
                                    columnNumber: 15
                                }, this);
                            }),
                            !isClientView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative shrink-0",
                                ref: moreMenuRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMoreMenuOpen(!isMoreMenuOpen),
                                        className: `px-2.5 py-1.5 rounded-[10px] text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${isMoreActive ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isMoreActive ? activeMoreTab === null || activeMoreTab === void 0 ? void 0 : activeMoreTab.label : "More"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 958,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDown01Icon"], {
                                                className: "w-3.5 h-3.5 opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 951,
                                        columnNumber: 15
                                    }, this),
                                    isMoreMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 mt-1.5 w-48 bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 rounded-[10px] shadow-xl z-50 p-1 animate-in fade-in zoom-in-95 duration-100",
                                        children: MORE_TABS.map((tab)=>{
                                            const Icon = tab.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveTab(tab.id);
                                                    setIsMoreMenuOpen(false);
                                                },
                                                className: `w-full px-3 py-2 rounded-lg text-xs font-medium text-left flex items-center gap-2 cursor-pointer transition ${activeTab === tab.id ? "bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-3.5 h-3.5 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 978,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tab.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, tab.id, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 967,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 963,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 950,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 909,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                                        tab: "crm",
                                        crm_tab: "settings",
                                        crm_subtab: "billing"
                                    });
                                    window.dispatchEvent(new Event("popstate"));
                                },
                                className: "h-10 px-3.5 rounded-[5px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-2xs active:scale-95",
                                title: "Configure Bank Remittance Details & GST Defaults",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                        className: "w-4 h-4 text-indigo-600 dark:text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Bank & GST Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1024,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1015,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsNewInvoiceModalOpen(true),
                                className: "h-10 px-4 rounded-[5px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm transition active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1031,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "New Invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1027,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 990,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 907,
                columnNumber: 7
            }, this),
            !isClientView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[10px] p-3.5 sm:p-4 shadow-xs flex items-center gap-3.5 hover:shadow-sm transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1042,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide block truncate",
                                        children: "Total Invoiced"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[17px] font-bold text-slate-900 dark:text-white leading-tight mt-0.5",
                                        children: formatCompact(totalBilled)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate block",
                                        children: [
                                            invoices.length,
                                            " ",
                                            invoices.length === 1 ? "invoice" : "invoices",
                                            " issued"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1045,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1041,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[10px] p-3.5 sm:p-4 shadow-xs flex items-center gap-3.5 hover:shadow-sm transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1058,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide block truncate",
                                        children: "Settled Collections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[17px] font-bold text-emerald-600 dark:text-emerald-400 leading-tight mt-0.5",
                                        children: formatCompact(totalPaid)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-medium text-emerald-600/90 dark:text-emerald-400/90 truncate block",
                                        children: [
                                            invoices.filter((i)=>i.status === "Paid").length,
                                            " settled payments"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1061,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1057,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[10px] p-3.5 sm:p-4 shadow-xs flex items-center gap-3.5 hover:shadow-sm transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1074,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide block truncate",
                                        children: "Pending / Sent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1078,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[17px] font-bold text-amber-600 dark:text-amber-400 leading-tight mt-0.5",
                                        children: formatCompact(totalBilled - totalPaid > 0 ? totalBilled - totalPaid : 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-medium text-amber-600/90 dark:text-amber-400/90 truncate block",
                                        children: [
                                            invoices.filter((i)=>i.status === "Sent").length,
                                            " awaiting payment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1082,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1077,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1073,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[10px] p-3.5 sm:p-4 shadow-xs flex items-center gap-3.5 hover:shadow-sm transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1091,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1090,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide block truncate",
                                        children: "Overdue at Risk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1094,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[17px] font-bold text-rose-600 dark:text-rose-400 leading-tight mt-0.5",
                                        children: formatCompact(overdueRisk)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1095,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-medium text-rose-600/90 dark:text-rose-400/90 truncate block",
                                        children: [
                                            invoices.filter((i)=>i.status === "Overdue").length,
                                            " overdue invoices"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1098,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1093,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1089,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1039,
                columnNumber: 9
            }, this),
            activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 rounded-[10px]  bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics01Icon"], {
                                                    className: "w-4 h-4 text-indigo-600 dark:text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 19
                                                }, this),
                                                "Revenue Model Breakdown"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold text-slate-400",
                                            children: "MRR Share"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1112,
                                    columnNumber: 15
                                }, this),
                                subscriptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-8 text-center text-xs text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600 dark:text-slate-300",
                                            children: "No active contracts yet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] mt-1 text-slate-400",
                                            children: "Add client contracts to see recurring model splits."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1120,
                                    columnNumber: 17
                                }, this) : (()=>{
                                    const totalSubMrr = subscriptions.reduce((s, sub)=>s + sub.mrr, 0) || 1;
                                    const groups = {};
                                    subscriptions.forEach((sub)=>{
                                        groups[sub.subscriptionType] = (groups[sub.subscriptionType] || 0) + sub.mrr;
                                    });
                                    const colors = [
                                        "bg-indigo-500",
                                        "bg-emerald-500",
                                        "bg-cyan-500",
                                        "bg-purple-500",
                                        "bg-amber-500"
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2.5 text-xs pt-1",
                                        children: Object.entries(groups).map(([type, mrr], i)=>{
                                            const pct = (mrr / totalSubMrr * 100).toFixed(1);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-slate-700 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-[11px]",
                                                                children: type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1144,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-slate-900 dark:text-white font-mono text-[11px]",
                                                                children: [
                                                                    formatAmount(mrr),
                                                                    " (",
                                                                    pct,
                                                                    "%)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1143,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${colors[i % colors.length]} h-full rounded-full transition-all duration-500`,
                                                            style: {
                                                                width: `${pct}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1150,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, type, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1138,
                                        columnNumber: 19
                                    }, this);
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 rounded-[10px]  bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                    className: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1167,
                                                    columnNumber: 19
                                                }, this),
                                                "Upcoming Renewals"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full",
                                            children: "Retention Tracking"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1165,
                                    columnNumber: 15
                                }, this),
                                subscriptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-8 text-center text-xs text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-600 dark:text-slate-300",
                                            children: "No upcoming renewals"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] mt-1 text-slate-400",
                                            children: "Contracts will appear here as terms approach expiry."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1175,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 pt-1 text-xs",
                                    children: subscriptions.filter((s)=>s.status === "active").slice(0, 3).map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 rounded-[10px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-900 dark:text-white text-xs block truncate max-w-[160px]",
                                                            children: sub.clientName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1190,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: [
                                                                formatAmount(sub.arr),
                                                                " ARR • Due ",
                                                                sub.currentPeriodEnd
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1193,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1189,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md shrink-0",
                                                    children: sub.autoRenew ? "Auto-Renew ✓" : "Manual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, sub.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1185,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 rounded-[10px]  bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                                    className: "w-4 h-4 text-rose-600 dark:text-rose-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 19
                                                }, this),
                                                "Dunning Risk Summary"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-semibold px-2 py-0.5 rounded-full ${collections.length > 0 ? "text-rose-600 bg-rose-50 dark:bg-rose-950/60" : "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60"}`,
                                            children: [
                                                collections.length,
                                                " Cases"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1208,
                                    columnNumber: 15
                                }, this),
                                collections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-8 text-center text-xs text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                            className: "w-6 h-6 text-emerald-500 mx-auto mb-1.5 opacity-80"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-700 dark:text-slate-300",
                                            children: "All Accounts in Good Standing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1221,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-400 mt-0.5",
                                            children: "Zero overdue invoices across all client accounts."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1222,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1219,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 pt-1 text-xs",
                                    children: collections.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 rounded-[10px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-900 dark:text-white text-xs block truncate max-w-[150px]",
                                                            children: col.clientName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-rose-600 dark:text-rose-400",
                                                            children: [
                                                                col.daysOverdue,
                                                                "d overdue • ",
                                                                formatAmount(col.overdueAmount)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1235,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1231,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleTriggerDunning(col.clientName),
                                                    className: "px-2.5 py-1 rounded-lg bg-slate-200/80 hover:bg-rose-600 hover:text-white dark:bg-slate-700 dark:hover:bg-rose-600 text-slate-700 dark:text-slate-200 text-[10px] font-semibold cursor-pointer transition shrink-0",
                                                    children: "Remind"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, col.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1225,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1207,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                    lineNumber: 1109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1108,
                columnNumber: 9
            }, this),
            activeTab === "invoices" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[10px] p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-800/40 p-2 rounded-[10px] border border-slate-200/70 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        className: "w-4 h-4 text-slate-400 absolute left-3.5 top-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: invoiceSearch,
                                        onChange: (e)=>setInvoiceSearch(e.target.value),
                                        placeholder: "Search invoices by client or #...",
                                        className: "w-full h-10 pl-10 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1262,
                                        columnNumber: 15
                                    }, this),
                                    invoiceSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setInvoiceSearch(""),
                                        className: "absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar",
                                children: [
                                    "All",
                                    "Paid",
                                    "Sent",
                                    "Overdue"
                                ].map((st)=>{
                                    const count = st === "All" ? invoices.length : invoices.filter((i)=>i.status === st).length;
                                    const isSelected = invoiceStatusFilter === st;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setInvoiceStatusFilter(st),
                                        className: `h-10 px-3.5 rounded-[10px] text-xs font-semibold transition cursor-pointer shrink-0 flex items-center gap-1.5 ${isSelected ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-750 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: st
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1293,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isSelected ? "bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`,
                                                children: count
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1294,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, st, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1285,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1258,
                        columnNumber: 11
                    }, this),
                    filteredInvoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-[10px] p-6 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"], {
                                className: "w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1311,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-slate-700 dark:text-slate-300",
                                children: "No invoices found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1312,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 max-w-xs mx-auto",
                                children: 'Generate an invoice using the "+ New Invoice" button above, or convert a lead/project to issue an invoice.'
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1315,
                                columnNumber: 15
                            }, this),
                            invoiceSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setInvoiceSearch("");
                                    setInvoiceStatusFilter("All");
                                },
                                className: "text-xs font-semibold text-indigo-600 hover:underline cursor-pointer pt-1",
                                children: "Clear search filters"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1319,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1310,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: filteredInvoices.map((inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-4.5 rounded-[10px] bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800/70 hover:shadow-md transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3.5 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 border ${inv.status === "Paid" ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400" : inv.status === "Overdue" ? "bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800/60 text-rose-600 dark:text-rose-400" : "bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1347,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1339,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-bold text-slate-900 dark:text-white truncate",
                                                                children: inv.clientName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1353,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${inv.status === "Paid" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800" : inv.status === "Overdue" ? "bg-rose-50 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border-rose-200 dark:border-rose-800" : "bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-1.5 h-1.5 rounded-full ${inv.status === "Paid" ? "bg-emerald-500" : inv.status === "Overdue" ? "bg-rose-500" : "bg-amber-500"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 1364,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    inv.status
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1356,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1352,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 flex-wrap text-xs text-slate-500 dark:text-slate-400 mt-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setViewingInvoice(inv),
                                                                className: "font-mono font-bold text-indigo-600 dark:text-indigo-400 hover:underline bg-indigo-50/70 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-200/60 dark:border-indigo-800/50 cursor-pointer",
                                                                title: "Click to preview tax invoice",
                                                                children: [
                                                                    "#",
                                                                    inv.invoiceNumber
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1378,
                                                                columnNumber: 25
                                                            }, this),
                                                            inv.projectName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-medium max-w-[280px] truncate",
                                                                title: inv.projectName,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "opacity-60",
                                                                        children: "📁"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 1392,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: inv.projectName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 1393,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1388,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1397,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Due: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-700 dark:text-slate-300 font-medium",
                                                                        children: inv.dueDate
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 32
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1398,
                                                                columnNumber: 25
                                                            }, this),
                                                            inv.items && inv.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 1404,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            inv.items.length,
                                                                            " ",
                                                                            inv.items.length === 1 ? "item" : "items"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 1405,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1377,
                                                        columnNumber: 23
                                                    }, this),
                                                    inv.status === "Paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "✓ Paid on ",
                                                                    inv.paidDate || "Recent"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1413,
                                                                columnNumber: 27
                                                            }, this),
                                                            inv.paymentMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "• via ",
                                                                    inv.paymentMethod
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1414,
                                                                columnNumber: 49
                                                            }, this),
                                                            inv.transactionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300",
                                                                children: [
                                                                    "Ref: ",
                                                                    inv.transactionId
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 1416,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1412,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1350,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1338,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left lg:text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-black text-slate-900 dark:text-white font-mono tracking-tight",
                                                        children: formatAmount(inv.total)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1429,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-medium text-slate-400 dark:text-slate-500",
                                                        children: inv.status === "Paid" ? "Fully Settled" : "Incl. 18% GST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1432,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1428,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setViewingInvoice(inv),
                                                        className: "h-10 px-3.5 rounded-[10px] bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-2xs active:scale-95",
                                                        title: "View & Print Official GST Tax Invoice",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                            className: "w-4 h-4 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1446,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1440,
                                                        columnNumber: 23
                                                    }, this),
                                                    inv.status !== "Paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setPaymentModalInvoice(inv);
                                                            setIsPaymentModalOpen(true);
                                                        },
                                                        className: "h-10 px-3.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer transition shadow-sm flex items-center gap-1.5 active:scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1459,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 25
                                                    }, this),
                                                    inv.status === "Overdue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleTriggerDunning(inv.clientName || "Client"),
                                                        className: "h-10 px-3 rounded-[10px] bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-800 cursor-pointer transition flex items-center gap-1 active:scale-95",
                                                        children: "Remind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1465,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: async ()=>{
                                                            try {
                                                                const compProfile = (()=>{
                                                                    try {
                                                                        const s = localStorage.getItem("crm_company_profile");
                                                                        return s ? JSON.parse(s) : undefined;
                                                                    } catch (e) {
                                                                        return undefined;
                                                                    }
                                                                })();
                                                                const billConf = (()=>{
                                                                    try {
                                                                        const s = localStorage.getItem("crm_gst_billing_config");
                                                                        return s ? JSON.parse(s) : undefined;
                                                                    } catch (e) {
                                                                        return undefined;
                                                                    }
                                                                })();
                                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateInvoicePdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadInvoicePdf"])({
                                                                    invoice: inv,
                                                                    companyProfile: compProfile,
                                                                    billingConfig: billConf
                                                                });
                                                            } catch (err) {
                                                                console.error("PDF download error:", err);
                                                                setViewingInvoice(inv);
                                                            }
                                                        },
                                                        className: "w-10 h-10 rounded-[10px] bg-white dark:bg-slate-800 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition cursor-pointer shadow-2xs flex items-center justify-center active:scale-95",
                                                        title: "Download official PDF invoice directly",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1508,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1475,
                                                        columnNumber: 23
                                                    }, this),
                                                    onDeleteInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onDeleteInvoice(inv.id),
                                                        className: "w-10 h-10 rounded-[10px] bg-white dark:bg-slate-800 text-slate-400 hover:text-rose-600 hover:bg-rose-50/50 dark:hover:bg-rose-950/30 border border-slate-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-900 transition cursor-pointer shadow-2xs flex items-center justify-center active:scale-95",
                                                        title: "Delete Invoice",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1519,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1513,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1438,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, inv.id, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1333,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1331,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1256,
                columnNumber: 9
            }, this),
            activeTab === "products_services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ProductsServicesScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsServicesScreen"], {
                onItemsChange: (items)=>persistProductsServices(items)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1533,
                columnNumber: 9
            }, this),
            activeTab === "subscriptions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        className: "w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1543,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: subSearch,
                                        onChange: (e)=>setSubSearch(e.target.value),
                                        placeholder: "Search contracts...",
                                        className: "w-full h-10 pl-8.5 pr-8 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1544,
                                        columnNumber: 15
                                    }, this),
                                    subSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSubSearch(""),
                                        className: "absolute right-2.5 top-3 text-slate-400 hover:text-slate-600 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1556,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1552,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1542,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-xs",
                                        children: [
                                            "All",
                                            "active",
                                            "past_due"
                                        ].map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSubStatusFilter(st),
                                                className: `h-10 px-3 rounded-[10px] font-semibold transition cursor-pointer flex items-center ${subStatusFilter === st ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"}`,
                                                children: st === "All" ? "All" : st === "active" ? "Active" : "Past Due"
                                            }, st, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1564,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1562,
                                        columnNumber: 15
                                    }, this),
                                    !isClientView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsCreateSubModalOpen(true),
                                        className: "h-10 px-3.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1582,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "New Contract"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1583,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1578,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1561,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1541,
                        columnNumber: 11
                    }, this),
                    filteredSubscriptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-[10px]  p-6 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                className: "w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1592,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-slate-700 dark:text-slate-300",
                                children: "No active subscription contracts"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1593,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 max-w-xs mx-auto",
                                children: "Create recurring SaaS, Retainer, or Usage-based contracts for your clients using the button below."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1596,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCreateSubModalOpen(true),
                                className: "px-3 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1603,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Create Contract"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1604,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1599,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1591,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Contract #"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1613,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1614,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1615,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-right",
                                                children: "MRR / ARR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1616,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1617,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Auto-Renew"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1618,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-right",
                                                children: "Period End"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1619,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1611,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1610,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300",
                                    children: filteredSubscriptions.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50 dark:hover:bg-slate-800/40 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                    children: sub.subscriptionNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1625,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-semibold text-slate-900 dark:text-white",
                                                    children: sub.clientName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1628,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-slate-600 dark:text-slate-300",
                                                    children: sub.planName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1631,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700",
                                                        children: sub.subscriptionType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1635,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1634,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right font-mono",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-slate-900 dark:text-white",
                                                            children: formatAmount(sub.mrr)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1640,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400 block font-normal",
                                                            children: [
                                                                "(",
                                                                formatCompact(sub.arr),
                                                                " ARR)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 1643,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1639,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.2 rounded-full text-[10px] font-bold uppercase ${sub.status === "active" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800" : "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400 border border-rose-200 dark:border-rose-800"}`,
                                                        children: sub.status.replace("_", " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1648,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1647,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleToggleAutoRenew(sub.id),
                                                        className: `text-[11px] font-medium px-2 py-0.5 rounded-md cursor-pointer transition ${sub.autoRenew ? "text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950" : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                                        children: sub.autoRenew ? "Enabled ✓" : "Off ✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1658,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1657,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right font-mono text-slate-500 dark:text-slate-400",
                                                    children: sub.currentPeriodEnd
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1668,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, sub.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1624,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1622,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1609,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1608,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1540,
                columnNumber: 9
            }, this),
            activeTab === "collections" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                                className: "w-4 h-4 text-rose-600 dark:text-rose-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1686,
                                                columnNumber: 17
                                            }, this),
                                            "Automated Dunning & Collections"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1685,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                        children: "Automated cadence: Day 1 (Notice) → Day 7 (Reminder) → Day 14 (Service Pause) → Day 30 (Legal Escalation)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1689,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1684,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800 shrink-0",
                                children: [
                                    formatCompact(overdueRisk),
                                    " Total at Risk"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1693,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1683,
                        columnNumber: 11
                    }, this),
                    collections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 border border-dashed border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/20 dark:bg-emerald-950/10 rounded-[10px]  p-6 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                className: "w-10 h-10 text-emerald-500 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1701,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-slate-900 dark:text-white",
                                children: "Zero Accounts at Risk"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1702,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto",
                                children: "All client invoices are paid or currently within their active payment terms."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1705,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1700,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Case #"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1714,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1715,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Invoice #"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1716,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-right",
                                                children: "Overdue Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1717,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-center",
                                                children: "Days Overdue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1718,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-center",
                                                children: "Risk Score"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1719,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1720,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2.5 px-3 text-right",
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1721,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1713,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1712,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                                    children: collections.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50 dark:hover:bg-slate-800/40 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-mono font-bold text-rose-600 dark:text-rose-400",
                                                    children: c.caseNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1727,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-semibold text-slate-900 dark:text-white",
                                                    children: c.clientName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1728,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-mono text-slate-500 dark:text-slate-400",
                                                    children: c.invoiceNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1729,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right font-mono font-bold text-rose-600 dark:text-rose-400",
                                                    children: formatAmount(c.overdueAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1730,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-center font-mono font-bold text-slate-700 dark:text-slate-300",
                                                    children: [
                                                        c.daysOverdue,
                                                        "d"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1733,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.2 rounded-full text-[10px] font-bold ${c.riskScore >= 80 ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400" : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"}`,
                                                        children: [
                                                            c.riskScore,
                                                            "/100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1737,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1736,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold uppercase",
                                                        children: c.status.replace("_", " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1745,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1744,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleTriggerDunning(c.clientName),
                                                        className: "px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-semibold cursor-pointer transition shadow-xs",
                                                        children: "Dispatch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1750,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1749,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1726,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1724,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1711,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1710,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1682,
                columnNumber: 9
            }, this),
            activeTab === "usage_billing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Analytics01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics01Icon"], {
                                className: "w-4 h-4 text-cyan-600 dark:text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1770,
                                columnNumber: 13
                            }, this),
                            "Usage-Based Metering & Overage Engine"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1769,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3.5",
                        children: usageMeters.map((meter)=>{
                            const isOver = meter.currentUsage > meter.limit;
                            const percent = Math.min(Math.round(meter.currentUsage / meter.limit * 100), 100);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 space-y-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-xs text-slate-900 dark:text-white",
                                                        children: meter.meterName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1783,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-slate-400 block",
                                                        children: meter.meterCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1784,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1782,
                                                columnNumber: 21
                                            }, this),
                                            isOver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-0.2 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800",
                                                children: "Overage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1787,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800",
                                                children: "Within Limit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1791,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1781,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            meter.currentUsage.toLocaleString(),
                                                            " ",
                                                            meter.unit
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1799,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Limit: ",
                                                            meter.limit.toLocaleString(),
                                                            " ",
                                                            meter.unit
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1800,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1798,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-full rounded-full transition-all duration-300 ${isOver ? "bg-rose-500" : "bg-cyan-500"}`,
                                                    style: {
                                                        width: `${percent}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1803,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1802,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1797,
                                        columnNumber: 19
                                    }, this),
                                    meter.overageAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1.5 border-t border-slate-200 dark:border-slate-700 flex justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 text-[11px]",
                                                children: "Pending Overage:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1812,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-rose-600 dark:text-rose-400 font-mono",
                                                children: [
                                                    "+",
                                                    formatAmount(meter.overageAmount)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1813,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1811,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, meter.id, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1780,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1774,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1768,
                columnNumber: 9
            }, this),
            activeTab === "ai_revenue_copilot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                className: "w-4 h-4 text-purple-600 dark:text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1827,
                                columnNumber: 13
                            }, this),
                            "AI Revenue Intelligence Copilot"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1826,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold text-purple-600 uppercase tracking-wider block",
                                        children: "Select Analysis Query"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1834,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        "What is our current active revenue run-rate?",
                                        "Which clients are likely to churn?",
                                        "What revenue is at risk in collections?",
                                        "Who has overdue invoices right now?",
                                        "Which accounts should receive expansion proposals?",
                                        "How much revenue has been collected vs billed?"
                                    ].map((prompt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedCopilotQuestion(prompt);
                                                showNotification(`Copilot analyzing: "${prompt}"`);
                                            },
                                            className: `w-full p-2.5 rounded-[10px] border text-left text-xs transition flex items-center justify-between cursor-pointer ${selectedCopilotQuestion === prompt ? "bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-200 font-semibold" : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: prompt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1856,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                    className: "w-3.5 h-3.5 opacity-60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1857,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1845,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1833,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-800/50 space-y-3 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-mono text-purple-600 font-bold block",
                                                children: [
                                                    "Q: ",
                                                    selectedCopilotQuestion
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1865,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-700 dark:text-slate-300 leading-relaxed",
                                                children: selectedCopilotQuestion.includes("run-rate") ? `Active ARR run-rate is currently ${formatCompact(computedArr)} based on ${activeSubs.length} active recurring subscription(s) totaling ${formatAmount(computedMrr)}/month MRR. Total lifetime billed receivables across all clients stand at ${formatAmount(totalBilled)}.` : selectedCopilotQuestion.includes("churn") ? clients.filter((c)=>(c.healthScore || 100) < 80).length > 0 ? `Attention required for ${clients.filter((c)=>(c.healthScore || 100) < 80).map((c)=>`${c.companyName} (Health: ${c.healthScore}%)`).join(", ")}. Recommendation: Trigger executive follow-up and service review.` : "All client health scores are currently strong (>80%). Churn propensity across the client portfolio is nominal." : selectedCopilotQuestion.includes("collections") || selectedCopilotQuestion.includes("at risk") ? collections.length > 0 ? `Total revenue at risk is ${formatAmount(overdueRisk)} across ${collections.length} overdue invoice(s). Top overdue account: ${collections[0].clientName} with ${formatAmount(collections[0].overdueAmount)} (${collections[0].daysOverdue} days past due).` : "Collections health is optimal. Zero overdue receivables are currently flagged at risk." : selectedCopilotQuestion.includes("overdue invoices") ? collections.length > 0 ? `${collections.length} overdue invoice(s) detected: ${collections.map((c)=>`${c.clientName} (${c.invoiceNumber}: ${formatAmount(c.overdueAmount)})`).join(", ")}.` : "Zero overdue invoices. All accounts have settled their invoices or are within active payment windows." : selectedCopilotQuestion.includes("expansion") ? clients.length > 0 ? `Key accounts recommended for expansion proposals: ${clients.slice(0, 2).map((c)=>c.companyName).join(", ")}. Usage patterns and milestone completion indicate readiness for tier upselling.` : "Add more clients and projects to unlock autonomous upsell propensity scoring." : `Settled collections stand at ${formatAmount(totalPaid)} (${totalBilled > 0 ? (totalPaid / totalBilled * 100).toFixed(1) : "100"}% collection velocity) against ${formatAmount(totalBilled)} total billed receivables.`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1868,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1864,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>showNotification("Copilot recommendation executed and queued for review."),
                                        className: "w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold cursor-pointer transition shadow-xs",
                                        children: "Apply AI Recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1891,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1863,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1831,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1825,
                columnNumber: 9
            }, this),
            activeTab === "revenue_recognition" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"], {
                                        className: "w-4 h-4 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1907,
                                        columnNumber: 15
                                    }, this),
                                    " ASC 606 Revenue Recognition Schedules"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1906,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-0.5",
                                children: "Ratable daily SaaS amortization vs milestone deliverable recognition dynamically derived from active projects and won deals."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1909,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1905,
                        columnNumber: 11
                    }, this),
                    revRecList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-[10px]  p-6 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"], {
                                className: "w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1916,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-slate-700 dark:text-slate-300",
                                children: "No revenue recognition schedules yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1917,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 max-w-xs mx-auto",
                                children: "Schedules generate automatically when deals are won and delivery projects with milestones are activated."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1920,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1915,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[10px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3",
                                                children: "Contract / Project"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1929,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3",
                                                children: "Period"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1930,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3",
                                                children: "Rule Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1931,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3 text-right",
                                                children: "Recognized"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1932,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3 text-right",
                                                children: "Deferred"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1933,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1928,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1927,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                                    children: revRecList.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-semibold text-slate-900 dark:text-white",
                                                    children: r.clientName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1939,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-mono text-indigo-600 dark:text-indigo-400",
                                                    children: r.period
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1940,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 font-mono",
                                                        children: r.ruleType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 1942,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1941,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400",
                                                    children: formatAmount(r.recognizedAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1946,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right font-mono text-slate-400",
                                                    children: formatAmount(r.deferredAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1949,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, r.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1938,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1936,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1926,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1925,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1904,
                columnNumber: 9
            }, this),
            activeTab === "taxes_commissions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                className: "w-4 h-4 text-indigo-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1965,
                                columnNumber: 13
                            }, this),
                            " Sales Rep Commissions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1964,
                        columnNumber: 11
                    }, this),
                    commissions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-[10px]  p-6 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                className: "w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1970,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-slate-700 dark:text-slate-300",
                                children: "No commissions recorded yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1971,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 max-w-xs mx-auto",
                                children: 'Commissions calculate automatically when deals in your CRM pipeline are converted to "Won".'
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 1974,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1969,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[10px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3",
                                                children: "Rep Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1983,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3",
                                                children: "Deal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1984,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3",
                                                children: "Period"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1985,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3 text-right",
                                                children: "Earned"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1986,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-3 text-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 1987,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 1982,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1981,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                                    children: commissions.map((comm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-semibold text-slate-900 dark:text-white",
                                                    children: comm.repName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1993,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3",
                                                    children: comm.dealName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1994,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 font-mono text-slate-400",
                                                    children: comm.period
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1995,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400",
                                                    children: formatAmount(comm.amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1996,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 px-3 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.2 rounded-full font-bold uppercase bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
                                                        children: comm.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2000,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 1999,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, comm.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 1992,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 1990,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 1980,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 1979,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 1963,
                columnNumber: 9
            }, this),
            activeTab === "accounting_sync" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px]  p-4 sm:p-5 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CloudUploadIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudUploadIcon"], {
                                className: "w-4 h-4 text-indigo-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 2017,
                                columnNumber: 13
                            }, this),
                            " General Ledger & ERP Sync"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 2016,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                        children: [
                            "Tally Prime / Zoho Books",
                            "QuickBooks Online",
                            "Oracle NetSuite ERP"
                        ].map((plat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-xs",
                                                children: plat
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 2024,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 font-bold",
                                                children: "Connected"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 2025,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 2023,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Automated invoices, GST ledgers, and payment receipts reconciliation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 2029,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTriggerAccountingSync(plat),
                                        className: "w-full py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition",
                                        children: "Sync Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 2030,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, plat, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                lineNumber: 2022,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                        lineNumber: 2020,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 2015,
                columnNumber: 9
            }, this),
            isNewInvoiceModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-[10px] p-5 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.logoUrl) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-9 max-w-[120px] px-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(companyProfile.logoUrl),
                                                alt: "Company Logo",
                                                className: "max-h-7 max-w-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 2051,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2050,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"], {
                                                className: "w-4.5 h-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 2059,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2058,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Generate GST Tax Invoice"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2064,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold",
                                                            children: "Rule 46 Compliant"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2065,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2063,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: [
                                                        (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.companyDisplayName) || "PingDart",
                                                        " • Dual Place-of-Supply GST Tax Calculation Engine"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2069,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2062,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2048,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsNewInvoiceModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 2078,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2074,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 2047,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateInvoice,
                            className: "flex-1 overflow-y-auto space-y-4 pt-3 pr-1 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Select Customer / Client ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2088,
                                                            columnNumber: 46
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2087,
                                                    columnNumber: 19
                                                }, this),
                                                clients.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    required: true,
                                                    value: newInvoiceForm.clientId,
                                                    onChange: (e)=>{
                                                        const sel = clients.find((c)=>String(c.id) === e.target.value);
                                                        const matchedGstin = (sel === null || sel === void 0 ? void 0 : sel.gstin) || (sel === null || sel === void 0 ? void 0 : sel.taxId) || "";
                                                        const matchedAddress = sel ? [
                                                            sel.address,
                                                            sel.city,
                                                            sel.state,
                                                            sel.postalCode
                                                        ].filter(Boolean).join(", ") : newInvoiceForm.billingAddress;
                                                        const matchedPos = (sel === null || sel === void 0 ? void 0 : sel.placeOfSupply) ? sel.placeOfSupply : (sel === null || sel === void 0 ? void 0 : sel.state) && sel.state.toLowerCase().includes("telangana") ? "36 - Telangana" : newInvoiceForm.placeOfSupply;
                                                        // Check if any projects match this client
                                                        const matchingProjects = projects.filter((p)=>{
                                                            const formClientId = String(e.target.value).trim().toLowerCase();
                                                            const pClientId = String(p.clientId || "").trim().toLowerCase();
                                                            if (formClientId && pClientId && (formClientId === pClientId || formClientId.replace(/\D/g, "") === pClientId.replace(/\D/g, ""))) return true;
                                                            if (sel && p.clientName && (p.clientName.toLowerCase().includes(sel.companyName.toLowerCase()) || sel.companyName.toLowerCase().includes(p.clientName.toLowerCase()))) return true;
                                                            return false;
                                                        });
                                                        setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            clientId: e.target.value,
                                                            clientName: sel ? sel.companyName : "",
                                                            customerGstin: matchedGstin || newInvoiceForm.customerGstin,
                                                            billingAddress: matchedAddress,
                                                            contactEmail: (sel === null || sel === void 0 ? void 0 : sel.email) || newInvoiceForm.contactEmail,
                                                            contactPhone: (sel === null || sel === void 0 ? void 0 : sel.phone) || newInvoiceForm.contactPhone,
                                                            placeOfSupply: matchedPos,
                                                            projectId: matchingProjects.length > 0 ? String(matchingProjects[0].id) : ""
                                                        });
                                                    },
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs font-medium cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "-- Choose a registered client --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2129,
                                                            columnNumber: 23
                                                        }, this),
                                                        clients.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.id,
                                                                children: [
                                                                    c.companyName,
                                                                    " (",
                                                                    c.clientCode || "Client",
                                                                    ")"
                                                                ]
                                                            }, c.id, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2131,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2091,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Acme Technologies Pvt Ltd",
                                                    value: newInvoiceForm.clientName,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            clientName: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2137,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2086,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center gap-1.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Related Project (Optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2151,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2150,
                                                            columnNumber: 21
                                                        }, this),
                                                        newInvoiceForm.clientName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleQuickCreateProjectForClient(),
                                                            className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer transition active:scale-95",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                                    size: 11
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2159,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "+ New Project for Client"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2160,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2154,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newInvoiceForm.projectId,
                                                    onChange: (e)=>{
                                                        const val = e.target.value;
                                                        if (val === "__create_new__") {
                                                            handleQuickCreateProjectForClient();
                                                            return;
                                                        }
                                                        setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            projectId: val
                                                        });
                                                    },
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs font-medium cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "-- None / General Retainer (No Project) --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2176,
                                                            columnNumber: 21
                                                        }, this),
                                                        newInvoiceForm.clientName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "__create_new__",
                                                            className: "text-indigo-600 dark:text-indigo-400 font-bold",
                                                            children: [
                                                                "⚡ + Quick-Create New Project for ",
                                                                newInvoiceForm.clientName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2178,
                                                            columnNumber: 23
                                                        }, this),
                                                        clientProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                            label: `Projects for ${newInvoiceForm.clientName || "Selected Client"} (${clientProjects.length})`,
                                                            children: clientProjects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.id,
                                                                    children: [
                                                                        p.name,
                                                                        " (",
                                                                        p.code || "PRJ",
                                                                        ") • ",
                                                                        p.status || "active"
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2185,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2183,
                                                            columnNumber: 23
                                                        }, this),
                                                        otherProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                            label: `All Other Projects across CRM (${otherProjects.length})`,
                                                            children: otherProjects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.id,
                                                                    children: [
                                                                        p.name,
                                                                        " (",
                                                                        p.code || "PRJ",
                                                                        ") — ",
                                                                        p.clientName || "General"
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2194,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2192,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2164,
                                                    columnNumber: 19
                                                }, this),
                                                newInvoiceForm.clientName && clientProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-1 text-[11px] text-amber-600 dark:text-amber-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "No linked project yet for this client"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2203,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleQuickCreateProjectForClient(),
                                                            className: "font-bold underline text-indigo-600 dark:text-indigo-400 cursor-pointer",
                                                            children: "Create Project Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2204,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2202,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2085,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50/70 dark:bg-slate-900/60 p-3 rounded-[10px] border border-slate-200/80 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Customer GSTIN (Rule 46)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    maxLength: 15,
                                                    placeholder: "e.g. 36AAACB1234F1Z5 (Unregistered if blank)",
                                                    value: newInvoiceForm.customerGstin,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            customerGstin: e.target.value.toUpperCase()
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono uppercase focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "Place of Supply (State & Code) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2234,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newInvoiceForm.placeOfSupply,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            placeOfSupply: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "36 - Telangana",
                                                            children: "36 - Telangana (Intra-State: CGST 9% + SGST 9%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2241,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "29 - Karnataka",
                                                            children: "29 - Karnataka (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2242,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "27 - Maharashtra",
                                                            children: "27 - Maharashtra (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2243,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "33 - Tamil Nadu",
                                                            children: "33 - Tamil Nadu (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2244,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "07 - Delhi",
                                                            children: "07 - Delhi (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2245,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "24 - Gujarat",
                                                            children: "24 - Gujarat (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2246,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "37 - Andhra Pradesh",
                                                            children: "37 - Andhra Pradesh (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2247,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "19 - West Bengal",
                                                            children: "19 - West Bengal (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2248,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "06 - Haryana",
                                                            children: "06 - Haryana (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2249,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "09 - Uttar Pradesh",
                                                            children: "09 - Uttar Pradesh (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2250,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "32 - Kerala",
                                                            children: "32 - Kerala (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2251,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "23 - Madhya Pradesh",
                                                            children: "23 - Madhya Pradesh (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2252,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "08 - Rajasthan",
                                                            children: "08 - Rajasthan (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2253,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "21 - Odisha",
                                                            children: "21 - Odisha (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "03 - Punjab",
                                                            children: "03 - Punjab (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2255,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "10 - Bihar",
                                                            children: "10 - Bihar (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2256,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "99 - Other Territory",
                                                            children: "99 - Other Territory (Inter-State: IGST 18%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2257,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2236,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Customer Full Registered Billing Address & PIN Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Unit 4B, Cyber Gateway, HITEC City, Hyderabad - 500081",
                                                    value: newInvoiceForm.billingAddress,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            billingAddress: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Billing Contact Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "accounts@client.com",
                                                    value: newInvoiceForm.contactEmail,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            contactEmail: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2281,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Billing Phone Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2290,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    placeholder: "+91 98765 43210",
                                                    value: newInvoiceForm.contactPhone,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            contactPhone: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2289,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "PO Number / Client Ref"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. PO-2026-9812",
                                                    value: newInvoiceForm.purchaseOrderNumber,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            purchaseOrderNumber: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2305,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2276,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Payment Due Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2318,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: newInvoiceForm.dueDate,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            dueDate: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2321,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2317,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Invoice Notes / Statutory Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2329,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Net 15, Subject to Hyderabad jurisdiction",
                                                    value: newInvoiceForm.notes,
                                                    onChange: (e)=>setNewInvoiceForm({
                                                            ...newInvoiceForm,
                                                            notes: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2332,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Package01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Package01Icon"], {
                                                            className: "w-4 h-4 text-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-900 dark:text-white text-xs",
                                                            children: [
                                                                "Invoice Line Items (",
                                                                invoiceLineItems.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2347,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setIsNewInvoiceModalOpen(false);
                                                                setActiveTab("products_services");
                                                            },
                                                            className: "text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline font-medium cursor-pointer",
                                                            children: "Manage Products/Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2352,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleAddLineItem,
                                                            className: "h-10 px-3.5 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1.5 cursor-pointer transition text-xs border border-indigo-200 dark:border-indigo-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2367,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Add Item"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2368,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2362,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2351,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2344,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2.5",
                                            children: invoiceLineItems.map((item, idx)=>{
                                                const lineTotal = (Number(item.quantity) || 1) * (Number(item.unitPrice) || 0);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3.5 rounded-[8px] bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                                    children: [
                                                                        "Line #",
                                                                        idx + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2382,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 max-w-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: item.productId || "",
                                                                        onChange: (e)=>handleSelectProductForLineItem(item.id, e.target.value),
                                                                        className: "w-full h-11 px-3 text-xs font-medium rounded-[8px] border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 focus:outline-hidden focus:border-indigo-500 transition cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "⚡ Select from Products & Services Catalog..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                                lineNumber: 2393,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "💼 Billable Services",
                                                                                children: productsServices.filter((p)=>p.type === "service" && p.isActive).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: p.id,
                                                                                        children: [
                                                                                            p.name,
                                                                                            " • ",
                                                                                            formatAmount(p.unitPrice),
                                                                                            " / ",
                                                                                            p.unit
                                                                                        ]
                                                                                    }, p.id, true, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                                        lineNumber: 2398,
                                                                                        columnNumber: 37
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                                lineNumber: 2394,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                                label: "📦 Software & Tech Products",
                                                                                children: productsServices.filter((p)=>p.type === "product" && p.isActive).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: p.id,
                                                                                        children: [
                                                                                            p.name,
                                                                                            " • ",
                                                                                            formatAmount(p.unitPrice),
                                                                                            " / ",
                                                                                            p.unit
                                                                                        ]
                                                                                    }, p.id, true, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                                        lineNumber: 2407,
                                                                                        columnNumber: 37
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                                lineNumber: 2403,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 2388,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2387,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleRemoveLineItem(item.id),
                                                                    className: "p-1.5 text-slate-400 hover:text-rose-500 rounded-[8px] hover:bg-rose-50 dark:hover:bg-rose-950/30 cursor-pointer transition",
                                                                    title: "Remove Line Item",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 2421,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2415,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2381,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    required: true,
                                                                    placeholder: "Item name / service title *",
                                                                    value: item.name,
                                                                    onChange: (e)=>handleUpdateLineItem(item.id, "name", e.target.value),
                                                                    className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 font-medium text-xs transition"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2427,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "Brief description or deliverable scope (optional)",
                                                                    value: item.description,
                                                                    onChange: (e)=>handleUpdateLineItem(item.id, "description", e.target.value),
                                                                    className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 text-xs transition"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2435,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2426,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-28",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] text-slate-400 font-semibold mb-0.5",
                                                                            children: "HSN / SAC"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2447,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            placeholder: "998314",
                                                                            value: item.hsnSacCode || "",
                                                                            onChange: (e)=>handleUpdateLineItem(item.id, "hsnSacCode", e.target.value),
                                                                            className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono focus:outline-hidden focus:border-indigo-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2450,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2446,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-24",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] text-slate-400 font-semibold mb-0.5",
                                                                            children: "Quantity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2460,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "1",
                                                                            required: true,
                                                                            value: item.quantity,
                                                                            onChange: (e)=>handleUpdateLineItem(item.id, "quantity", Math.max(1, Number(e.target.value))),
                                                                            className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono focus:outline-hidden focus:border-indigo-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2463,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2459,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] text-slate-400 font-semibold mb-0.5",
                                                                            children: [
                                                                                "Rate / Unit Price (",
                                                                                currencySymbol,
                                                                                ") *"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2474,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "0",
                                                                            required: true,
                                                                            placeholder: "0",
                                                                            value: item.unitPrice,
                                                                            onChange: (e)=>handleUpdateLineItem(item.id, "unitPrice", Number(e.target.value)),
                                                                            className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono font-bold focus:outline-hidden focus:border-indigo-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2477,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2473,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right pl-2 shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "block text-[10px] text-slate-400 font-semibold mb-0.5",
                                                                            children: "Line Total"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2489,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-black font-mono text-slate-900 dark:text-white",
                                                                            children: formatAmount(lineTotal)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                            lineNumber: 2492,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                    lineNumber: 2488,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2445,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2377,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2373,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2343,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs text-slate-600 dark:text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Taxable Subtotal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2506,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-semibold text-slate-900 dark:text-white",
                                                    children: formatAmount(invoiceSubtotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2507,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2505,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs text-slate-600 dark:text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 cursor-pointer select-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: applyGstTax,
                                                            onChange: (e)=>setApplyGstTax(e.target.checked),
                                                            className: "w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2514,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800 dark:text-slate-200",
                                                            children: "Apply GST 18% (Rule 46 Tax Invoice)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2520,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-bold text-slate-900 dark:text-white",
                                                    children: applyGstTax ? formatAmount(invoiceTaxAmount) : `${currencySymbol}0`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2524,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2512,
                                            columnNumber: 17
                                        }, this),
                                        applyGstTax && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-6 pt-1 space-y-1.5 border-l-2 border-indigo-500/40 text-[11px]",
                                            children: isIntraState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 2535,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "CGST @ 9% (Intra-State Telangana)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2534,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-medium text-slate-900 dark:text-white",
                                                                children: formatAmount(invoiceCgstAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2538,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2533,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 2544,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "SGST @ 9% (Intra-State Telangana)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2543,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-medium text-slate-900 dark:text-white",
                                                                children: formatAmount(invoiceSgstAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2547,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2542,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium",
                                                        children: "Supplier (36-Telangana) = Place of Supply (36-Telangana) → Dual Tax Split"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2551,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                        lineNumber: 2559,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "IGST @ 18% (Inter-State Supply)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2558,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-medium text-slate-900 dark:text-white",
                                                                children: formatAmount(invoiceIgstAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2562,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2557,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-blue-600 dark:text-blue-400 font-medium",
                                                        children: [
                                                            "Supplier (36-Telangana) ≠ Place of Supply (",
                                                            newInvoiceForm.placeOfSupply,
                                                            ") → Integrated GST"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2566,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2530,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-900 dark:text-white block",
                                                            children: "Total Invoice Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2576,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400 font-medium",
                                                            children: "Inclusive of all taxes & statutory levies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2579,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2575,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black font-mono text-base text-indigo-600 dark:text-indigo-400",
                                                    children: formatAmount(invoiceGrandTotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2583,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2574,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2504,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-[10px] bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Supplier: ",
                                                                (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.legalEntityName) || "PingDart Technologies Pvt Ltd"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2593,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-mono text-indigo-600 dark:text-indigo-400",
                                                            children: [
                                                                "(GSTIN: ",
                                                                (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.gstVatNumber) || "36ABCDE1234F1Z5",
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2594,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2592,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-500 dark:text-slate-400",
                                                    children: [
                                                        "Signatory: ",
                                                        (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.authorizedSignatoryName) || "Malle Ravindra",
                                                        " • ",
                                                        (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.authorizedSignatoryDesignation) || "Director & Authorized Signatory"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2598,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-500 dark:text-slate-400 flex items-center flex-wrap gap-1 mt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-700 dark:text-slate-300",
                                                            children: "Bank Remittance:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2602,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                (billingConfig === null || billingConfig === void 0 ? void 0 : billingConfig.bankName) || "HDFC Bank Ltd",
                                                                " • A/C: ",
                                                                (billingConfig === null || billingConfig === void 0 ? void 0 : billingConfig.bankAccountNumber) || "50200012345678",
                                                                " (IFSC: ",
                                                                (billingConfig === null || billingConfig === void 0 ? void 0 : billingConfig.bankIfscCode) || "HDFC0000123",
                                                                ") • UPI: ",
                                                                (billingConfig === null || billingConfig === void 0 ? void 0 : billingConfig.bankUpiId) || "pingdart@hdfcbank"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2603,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setIsNewInvoiceModalOpen(false);
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                                                                    tab: "crm",
                                                                    crm_tab: "settings",
                                                                    crm_subtab: "billing"
                                                                });
                                                                window.dispatchEvent(new Event("popstate"));
                                                            },
                                                            className: "text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer ml-1",
                                                            children: "(Edit in Settings →)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2604,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2601,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 shrink-0",
                                            children: (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.authorizedSignatorySignature) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-2.5 py-1 rounded-[8px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: companyProfile.authorizedSignatorySignature,
                                                        alt: "Authorized Signatory",
                                                        className: "h-7 max-w-[80px] object-contain filter contrast-125"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2621,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                size: 11,
                                                                className: "text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                                lineNumber: 2627,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Signed"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2626,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 2620,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-serif italic text-slate-400 border border-dashed border-slate-300 dark:border-slate-700 px-2.5 py-1 rounded-[6px] bg-white dark:bg-slate-800/80",
                                                children: (companyProfile === null || companyProfile === void 0 ? void 0 : companyProfile.authorizedSignatoryName) || "Malle Ravindra"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                lineNumber: 2631,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2618,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2590,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsNewInvoiceModalOpen(false),
                                            className: "h-11 px-4 rounded-[8px] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold cursor-pointer transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: invoiceGrandTotal <= 0,
                                            className: "h-11 px-5 rounded-[8px] bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold cursor-pointer shadow-xs transition flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2652,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Create Invoice • ",
                                                        formatAmount(invoiceGrandTotal)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2653,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2647,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2639,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 2083,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                    lineNumber: 2045,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 2044,
                columnNumber: 9
            }, this),
            isCreateSubModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-[10px]  p-5 max-w-md w-full space-y-4 shadow-2xl animate-in zoom-in-95 duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                            className: "w-4 h-4 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2667,
                                            columnNumber: 17
                                        }, this),
                                        " New Recurring Contract"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCreateSubModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                        lineNumber: 2673,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2669,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 2665,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateSubscription,
                            className: "space-y-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                            children: "Select Client *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2679,
                                            columnNumber: 17
                                        }, this),
                                        clients.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            value: newSubForm.clientId,
                                            onChange: (e)=>{
                                                const sel = clients.find((c)=>String(c.id) === e.target.value);
                                                setNewSubForm({
                                                    ...newSubForm,
                                                    clientId: e.target.value,
                                                    clientName: sel ? sel.companyName : ""
                                                });
                                            },
                                            className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Choose a registered client --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2696,
                                                    columnNumber: 21
                                                }, this),
                                                clients.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.id,
                                                        children: [
                                                            c.companyName,
                                                            " (",
                                                            c.clientCode || "Client",
                                                            ")"
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                        lineNumber: 2698,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2683,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "e.g. Apex Corporation",
                                            value: newSubForm.clientName,
                                            onChange: (e)=>setNewSubForm({
                                                    ...newSubForm,
                                                    clientName: e.target.value
                                                }),
                                            className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2704,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2678,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                            children: "Plan Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2716,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Enterprise Tier 100",
                                            value: newSubForm.planName,
                                            onChange: (e)=>setNewSubForm({
                                                    ...newSubForm,
                                                    planName: e.target.value
                                                }),
                                            className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2719,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2715,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: "Model"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2730,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newSubForm.subscriptionType,
                                                    onChange: (e)=>setNewSubForm({
                                                            ...newSubForm,
                                                            subscriptionType: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Annual SaaS",
                                                            children: "Annual SaaS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2738,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Monthly SaaS",
                                                            children: "Monthly SaaS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2739,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Usage Based",
                                                            children: "Usage Based"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2740,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Seat Based",
                                                            children: "Seat Based"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2741,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Hybrid",
                                                            children: "Hybrid"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2742,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Retainer",
                                                            children: "Retainer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                            lineNumber: 2743,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2733,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2729,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-slate-700 dark:text-slate-300 font-semibold mb-1",
                                                    children: [
                                                        "MRR (",
                                                        currencySymbol,
                                                        ") *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2747,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    required: true,
                                                    min: "1",
                                                    placeholder: "15000",
                                                    value: newSubForm.mrr,
                                                    onChange: (e)=>setNewSubForm({
                                                            ...newSubForm,
                                                            mrr: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 transition font-mono text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                                    lineNumber: 2750,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2746,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2728,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsCreateSubModalOpen(false),
                                            className: "h-11 px-4 rounded-[8px] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold cursor-pointer transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2763,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "h-11 px-5 rounded-[8px] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold cursor-pointer shadow-xs transition",
                                            children: "Activate Contract"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                            lineNumber: 2770,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                                    lineNumber: 2762,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                            lineNumber: 2677,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                    lineNumber: 2664,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 2663,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$RecordPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordPaymentModal"], {
                isOpen: isPaymentModalOpen,
                onClose: ()=>setIsPaymentModalOpen(false),
                invoice: paymentModalInvoice,
                onRecordPayment: (id, data)=>{
                    onRecordPayment === null || onRecordPayment === void 0 ? void 0 : onRecordPayment(id, data);
                    showNotification(`Payment recorded for Invoice! Status updated to Paid.`);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 2783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewInvoiceModal"], {
                invoice: viewingInvoice,
                isOpen: !!viewingInvoice,
                onClose: ()=>setViewingInvoice(null),
                onRecordPayment: (inv)=>{
                    setViewingInvoice(null);
                    setPaymentModalInvoice(inv);
                    setIsPaymentModalOpen(true);
                },
                companyProfile: companyProfile,
                billingConfig: billingConfig
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
                lineNumber: 2794,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx",
        lineNumber: 891,
        columnNumber: 5
    }, this);
}
_s(BillingScreen, "6+WTozFQQaU/G2WiYleuNHFVbws=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"]
    ];
});
_c = BillingScreen;
var _c;
__turbopack_context__.k.register(_c, "BillingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_crm_screens_BillingScreen_tsx_c2046740._.js.map