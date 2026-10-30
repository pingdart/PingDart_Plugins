(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CRM_AI_PROVIDER_SETTINGS",
    ()=>DEFAULT_CRM_AI_PROVIDER_SETTINGS,
    "SettingsScreen",
    ()=>SettingsScreen,
    "getAutoFinancialYear",
    ()=>getAutoFinancialYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript) <export api as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SecurityCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SecurityCheckIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Note01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Edit01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Chat01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Invoice01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$DocumentValidationIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/DocumentValidationIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PaintBoardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PaintBoardIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AiBrain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AiBrain01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InformationCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Upload01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Image01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewOffSlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmPermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$settings$2f$LocationsTerritoriesSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$settings$2f$CommunicationsSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
const DEFAULT_CRM_AI_PROVIDER_SETTINGS = {
    activeProvider: "ollama",
    ollama: {
        baseUrl: "http://localhost:11434",
        model: "llama3.2",
        temperature: 0.7
    },
    openai: {
        apiKey: "",
        model: "gpt-4o",
        organizationId: ""
    },
    anthropic: {
        apiKey: "",
        model: "claude-3-5-sonnet-20241022"
    },
    gemini: {
        apiKey: "",
        model: "gemini-1.5-pro"
    },
    n8n: {
        webhookUrl: "https://your-workspace.app.n8n.cloud/webhook/crm-ai",
        apiKey: "",
        workflowName: "CRM Copilot Workflow"
    }
};
function getAutoFinancialYear() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 is January, 3 is April
    if (month >= 3) {
        return `${year}-${(year + 1).toString().slice(-2)}`;
    }
    return `${year - 1}-${year.toString().slice(-2)}`;
}
function SettingsScreen({ activeSubTab: activeSubTabProp, onSubTabChange } = {}) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const VALID_SETTINGS_TABS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsScreen.useMemo[VALID_SETTINGS_TABS]": ()=>[
                "company",
                "locations",
                "roles",
                "pipelines",
                "fields",
                "billing",
                "contracts",
                "portal",
                "communications",
                "branding",
                "ai",
                "general"
            ]
    }["SettingsScreen.useMemo[VALID_SETTINGS_TABS]"], []);
    const resolveSettingsTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SettingsScreen.useCallback[resolveSettingsTab]": (val)=>{
            if (!val) return "company";
            const normalized = val.toLowerCase().trim().replace(/_/g, "-");
            const match = VALID_SETTINGS_TABS.find({
                "SettingsScreen.useCallback[resolveSettingsTab].match": (t)=>t === normalized
            }["SettingsScreen.useCallback[resolveSettingsTab].match"]);
            return match || "company";
        }
    }["SettingsScreen.useCallback[resolveSettingsTab]"], [
        VALID_SETTINGS_TABS
    ]);
    const [activeTab, setActiveTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if (activeSubTabProp) return resolveSettingsTab(activeSubTabProp);
            const urlSubTab = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab"));
            return resolveSettingsTab(urlSubTab);
        }
    }["SettingsScreen.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsScreen.useEffect": ()=>{
            if (activeSubTabProp) {
                const resolved = resolveSettingsTab(activeSubTabProp);
                if (resolved !== activeTab) {
                    setActiveTabState(resolved);
                }
            }
        }
    }["SettingsScreen.useEffect"], [
        activeSubTabProp,
        activeTab,
        resolveSettingsTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsScreen.useEffect": ()=>{
            const urlSubTab = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab"));
            if (urlSubTab) {
                const resolved = resolveSettingsTab(urlSubTab);
                setActiveTabState(resolved);
            }
        }
    }["SettingsScreen.useEffect"], [
        searchParams,
        resolveSettingsTab
    ]);
    const handleTabChange = (tabId)=>{
        setActiveTabState(tabId);
        onSubTabChange === null || onSubTabChange === void 0 ? void 0 : onSubTabChange(tabId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            crm_tab: "settings",
            crm_subtab: tabId
        });
    };
    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmPermissions"])("Owner");
    const DEFAULT_COMPANY_PROFILE = {
        companyDisplayName: "PingDart Technologies",
        legalEntityName: "PingDart Technologies Pvt Ltd",
        logoUrl: "",
        authorizedSignatorySignature: "",
        gstVatNumber: "36ABCDE1234F1Z5",
        panTaxId: "AAACP1234F",
        registrationNumber: "U72200TG2026PTC123456",
        industry: "Enterprise Software & SaaS",
        registeredAddress: "Plot No. 42, 4th Floor, Mindspace IT Park, Hitech City, Madhapur",
        city: "Hyderabad",
        state: "Telangana",
        stateCode: "36",
        pincode: "500081",
        country: "India",
        authorizedSignatoryName: "Malle Ravindra",
        authorizedSignatoryDesignation: "Director & Authorized Signatory",
        website: "https://pingdart.com",
        supportEmail: "support@pingdart.com",
        billingEmail: "billing@pingdart.com",
        supportPhone: "+91 40 4859 2900",
        jurisdiction: "Hyderabad, Telangana, India"
    };
    const [companyProfile, setCompanyProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_company_profile");
                    if (saved) return {
                        ...DEFAULT_COMPANY_PROFILE,
                        ...JSON.parse(saved)
                    };
                } catch (_) {}
            }
            return DEFAULT_COMPANY_PROFILE;
        }
    }["SettingsScreen.useState"]);
    const [isEditingCompany, setIsEditingCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [companyForm, setCompanyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(companyProfile);
    const handleStartEditCompany = ()=>{
        setCompanyForm(companyProfile);
        setIsEditingCompany(true);
    };
    const handleCancelEditCompany = ()=>{
        setCompanyForm(companyProfile);
        setIsEditingCompany(false);
    };
    const handleSaveCompanyProfile = ()=>{
        setCompanyProfile(companyForm);
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem("crm_company_profile", JSON.stringify(companyForm));
            } catch (err) {
                console.error("Failed to persist company profile:", err);
            }
        }
        setIsEditingCompany(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Company & Legal Entity Profile updated successfully!");
    };
    const handleLogoUpload = async (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Logo file size must be less than 5MB.");
            return;
        }
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Uploading company logo to storage.pingdart.com...");
        try {
            var _res_data, _res_data1;
            const formData = new FormData();
            formData.append("file", file);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/user/upload-media", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.url)) {
                const uploadedUrl = res.data.url;
                setCompanyForm((p)=>({
                        ...p,
                        logoUrl: uploadedUrl
                    }));
                setCompanyProfile((p)=>{
                    const updated = {
                        ...p,
                        logoUrl: uploadedUrl
                    };
                    try {
                        localStorage.setItem("crm_company_profile", JSON.stringify(updated));
                    } catch (_) {}
                    return updated;
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Company logo uploaded to storage.pingdart.com!", {
                    id: toastId
                });
            } else {
                throw new Error("Upload failed");
            }
        } catch (_) {
            const reader = new FileReader();
            reader.onload = ()=>{
                const result = reader.result;
                setCompanyForm((p)=>({
                        ...p,
                        logoUrl: result
                    }));
                setCompanyProfile((p)=>{
                    const updated = {
                        ...p,
                        logoUrl: result
                    };
                    try {
                        localStorage.setItem("crm_company_profile", JSON.stringify(updated));
                    } catch (_) {}
                    return updated;
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Company logo loaded locally.", {
                    id: toastId
                });
            };
            reader.readAsDataURL(file);
        }
        e.target.value = "";
    };
    const handleRemoveLogo = ()=>{
        setCompanyForm((p)=>({
                ...p,
                logoUrl: ""
            }));
        setCompanyProfile((p)=>{
            const updated = {
                ...p,
                logoUrl: ""
            };
            try {
                localStorage.setItem("crm_company_profile", JSON.stringify(updated));
            } catch (_) {}
            return updated;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Company logo removed.");
    };
    const handleSignatureUpload = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Signature file size must be less than 2MB.");
            return;
        }
        const reader = new FileReader();
        reader.onload = ()=>{
            const result = reader.result;
            setCompanyForm((p)=>({
                    ...p,
                    authorizedSignatorySignature: result
                }));
            setCompanyProfile((p)=>{
                const updated = {
                    ...p,
                    authorizedSignatorySignature: result
                };
                try {
                    localStorage.setItem("crm_company_profile", JSON.stringify(updated));
                } catch (_) {}
                return updated;
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Authorized Signatory PNG signature uploaded successfully!");
        };
        reader.readAsDataURL(file);
        e.target.value = "";
    };
    const handleRemoveSignature = ()=>{
        setCompanyForm((p)=>({
                ...p,
                authorizedSignatorySignature: ""
            }));
        setCompanyProfile((p)=>{
            const updated = {
                ...p,
                authorizedSignatorySignature: ""
            };
            try {
                localStorage.setItem("crm_company_profile", JSON.stringify(updated));
            } catch (_) {}
            return updated;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Authorized Signatory signature removed.");
    };
    // Command Center 2: Billing & GST Tax Invoice Settings
    const DEFAULT_BILLING_CONFIG = {
        invoiceType: "GST Tax Invoice",
        financialYear: getAutoFinancialYear(),
        invoicePrefix: `PD/${getAutoFinancialYear()}/`,
        startingInvoiceNumber: 1,
        currency: "INR",
        supplierState: "Telangana",
        supplierStateCode: "36",
        defaultTaxPercent: 18,
        taxCalculationMode: "auto_pos",
        paymentTerms: "Net 30",
        bankAccountName: "PingDart Technologies Pvt Ltd",
        bankName: "HDFC Bank Ltd",
        bankAccountNumber: "50200012345678",
        bankIfscCode: "HDFC0000123",
        bankBranch: "Hitech City Branch, Hyderabad",
        bankUpiId: "pingdart@hdfcbank",
        invoiceNotes: "Certified that particulars given above are true and correct as per Rule 46 of the CGST Rules, 2017.",
        invoiceTerms: "1. Invoices are payable within the agreed payment terms. 2. Monthly late fee interest of 1.5% applies to balances past due date. 3. Disputes are subject to Hyderabad, Telangana jurisdiction.",
        lateFeePercent: 1.5,
        enableCreditNotes: true,
        creditNotePrefix: `PD/CN/${getAutoFinancialYear()}/`,
        enableEInvoicing: true,
        enableDynamicQr: true
    };
    const [billingConfig, setBillingConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_gst_billing_config");
                    if (saved) return {
                        ...DEFAULT_BILLING_CONFIG,
                        ...JSON.parse(saved)
                    };
                } catch (_) {}
            }
            return DEFAULT_BILLING_CONFIG;
        }
    }["SettingsScreen.useState"]);
    const handleSaveBillingConfig = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem("crm_gst_billing_config", JSON.stringify(billingConfig));
            } catch (err) {
                console.error("Failed to persist GST billing config:", err);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("GST Tax Invoice & Billing configurations saved successfully!");
    };
    const handleResetBillingDefaults = ()=>{
        setBillingConfig(DEFAULT_BILLING_CONFIG);
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem("crm_gst_billing_config", JSON.stringify(DEFAULT_BILLING_CONFIG));
            } catch (_) {}
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Reset to recommended CBIC Rule 46 GST invoice defaults.");
    };
    // Command Center 3: Client Portal State
    const DEFAULT_PORTAL_CONFIG = {
        allowPortal: true,
        allowTickets: true,
        allowInvoices: true,
        allowPayments: true,
        allowChat: true,
        allowProjectVisibility: true
    };
    const [portalConfig, setPortalConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_portal_config");
                    if (saved) return {
                        ...DEFAULT_PORTAL_CONFIG,
                        ...JSON.parse(saved)
                    };
                } catch (_) {}
            }
            return DEFAULT_PORTAL_CONFIG;
        }
    }["SettingsScreen.useState"]);
    const handleSavePortalConfig = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem("crm_portal_config", JSON.stringify(portalConfig));
            } catch (err) {
                console.error("Failed to persist portal config:", err);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Client Portal configuration saved successfully!");
    };
    // Command Center 3b: Contracts & Legal Policies State
    const DEFAULT_CONTRACTS_CONFIG = {
        contractValidityDays: 30,
        requireDigitalSignature: true,
        enableAuditTrail: true,
        autoSendSignedPdf: true,
        msaStandardTerms: "1. SCOPE OF SERVICES: The Service Provider shall deliver the deliverables specified in each statement of work.\n2. INTELLECTUAL PROPERTY: All background IP remains the property of the respective parties. Custom deliverables transfer upon full payment.\n3. LIMITATION OF LIABILITY: Neither party shall be liable for indirect or consequential damages.\n4. TERMINATION: Either party may terminate with 30 days written notice.",
        ndaConfidentialityTerms: "1. CONFIDENTIAL INFORMATION: Both parties agree to protect proprietary data, trade secrets, and non-public customer records.\n2. NON-DISCLOSURE: Information shall only be shared with personnel who have a strict need to know.\n3. TERM: Obligations remain binding for a period of three (3) years from the date of disclosure."
    };
    const [contractsConfig, setContractsConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_contracts_config");
                    if (saved) return {
                        ...DEFAULT_CONTRACTS_CONFIG,
                        ...JSON.parse(saved)
                    };
                } catch (_) {}
            }
            return DEFAULT_CONTRACTS_CONFIG;
        }
    }["SettingsScreen.useState"]);
    const handleSaveContractsConfig = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem("crm_contracts_config", JSON.stringify(contractsConfig));
            } catch (err) {
                console.error("Failed to persist contracts config:", err);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Contracts & Legal policies saved successfully!");
    };
    // Command Center 4: Branding & White-Label State
    const [brandingConfig, setBrandingConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        primaryColor: "#4f46e5",
        secondaryColor: "#06b6d4",
        customDomain: "portal.pingdart.com",
        whiteLabelActive: true
    });
    // Command Center 5: AI Feature Toggles & Provider State
    const [aiConfig, setAiConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_ai_features_config");
                    if (saved) return JSON.parse(saved);
                } catch (err) {
                    console.error("Failed to load AI features config:", err);
                }
            }
            return {
                leadScoring: true,
                dealCoaching: true,
                churnPrediction: true,
                forecasting: true,
                proposalWriter: true
            };
        }
    }["SettingsScreen.useState"]);
    // AI API Provider Configuration State (Only one enabled at a time)
    const [aiProviderSettings, setAiProviderSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem("crm_ai_provider_config");
                    if (saved) {
                        const parsed = JSON.parse(saved);
                        return {
                            ...DEFAULT_CRM_AI_PROVIDER_SETTINGS,
                            ...parsed,
                            ollama: {
                                ...DEFAULT_CRM_AI_PROVIDER_SETTINGS.ollama,
                                ...parsed.ollama || {}
                            },
                            openai: {
                                ...DEFAULT_CRM_AI_PROVIDER_SETTINGS.openai,
                                ...parsed.openai || {}
                            },
                            anthropic: {
                                ...DEFAULT_CRM_AI_PROVIDER_SETTINGS.anthropic,
                                ...parsed.anthropic || {}
                            },
                            gemini: {
                                ...DEFAULT_CRM_AI_PROVIDER_SETTINGS.gemini,
                                ...parsed.gemini || {}
                            },
                            n8n: {
                                ...DEFAULT_CRM_AI_PROVIDER_SETTINGS.n8n,
                                ...parsed.n8n || {}
                            }
                        };
                    }
                } catch (err) {
                    console.error("Failed to load AI provider settings:", err);
                }
            }
            return DEFAULT_CRM_AI_PROVIDER_SETTINGS;
        }
    }["SettingsScreen.useState"]);
    const [showAiSecrets, setShowAiSecrets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isTestingAiConnection, setIsTestingAiConnection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSaveAiSettings = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem("crm_ai_provider_config", JSON.stringify(aiProviderSettings));
                localStorage.setItem("crm_ai_features_config", JSON.stringify(aiConfig));
                // Keep crm_ai_sales_settings in sync for compatibility with other CRM screens
                const existingSalesSettings = localStorage.getItem("crm_ai_sales_settings");
                const parsed = existingSalesSettings ? JSON.parse(existingSalesSettings) : {};
                localStorage.setItem("crm_ai_sales_settings", JSON.stringify({
                    ...parsed,
                    aiProvider: aiProviderSettings.activeProvider,
                    ollamaBaseUrl: aiProviderSettings.ollama.baseUrl,
                    ollamaModel: aiProviderSettings.ollama.model,
                    openaiApiKey: aiProviderSettings.openai.apiKey,
                    openaiModel: aiProviderSettings.openai.model,
                    anthropicApiKey: aiProviderSettings.anthropic.apiKey,
                    geminiApiKey: aiProviderSettings.gemini.apiKey,
                    n8nWebhookUrl: aiProviderSettings.n8n.webhookUrl
                }));
            } catch (err) {
                console.error("Failed to persist AI settings:", err);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("AI API Provider and Copilot settings saved successfully!");
    };
    const handleTestAiConnection = async ()=>{
        setIsTestingAiConnection(true);
        try {
            const provider = aiProviderSettings.activeProvider;
            const res = await fetch("/api/crm/ai/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "test_connection",
                    provider,
                    ollamaBaseUrl: aiProviderSettings.ollama.baseUrl,
                    ollamaModel: aiProviderSettings.ollama.model,
                    openaiApiKey: aiProviderSettings.openai.apiKey,
                    openaiModel: aiProviderSettings.openai.model,
                    anthropicApiKey: aiProviderSettings.anthropic.apiKey,
                    anthropicModel: aiProviderSettings.anthropic.model,
                    geminiApiKey: aiProviderSettings.gemini.apiKey,
                    geminiModel: aiProviderSettings.gemini.model,
                    n8nWebhookUrl: aiProviderSettings.n8n.webhookUrl,
                    n8nApiKey: aiProviderSettings.n8n.apiKey
                })
            });
            const data = await res.json().catch(()=>({}));
            if (res.ok && data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(data.message || `Connected to ${provider.toUpperCase()} successfully!`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.error || `Could not connect to ${provider.toUpperCase()}. Check credentials.`);
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Connection check failed: ${err.message}`);
        } finally{
            setIsTestingAiConnection(false);
        }
    };
    // Multi-Pipeline State
    const PIPELINES = [
        {
            id: "pipe-1",
            name: "Enterprise Direct Sales",
            description: "Multi-stakeholder high ACV complex deals"
        },
        {
            id: "pipe-2",
            name: "Inbound SME / Fast-Track",
            description: "Short cycle inbound marketing leads"
        },
        {
            id: "pipe-3",
            name: "Partner & Channel Resellers",
            description: "Indirect distribution and partner pipeline"
        }
    ];
    const [selectedPipelineId, setSelectedPipelineId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pipe-1");
    const [stages, setStages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "stg-1",
            name: "Qualification & Intake",
            winProb: 20,
            slaDays: 5,
            type: "open",
            color: "bg-blue-500"
        },
        {
            id: "stg-2",
            name: "Discovery & Solution Demo",
            winProb: 40,
            slaDays: 7,
            type: "open",
            color: "bg-indigo-500"
        },
        {
            id: "stg-3",
            name: "Proposal & Business Case",
            winProb: 60,
            slaDays: 10,
            type: "open",
            color: "bg-purple-500"
        },
        {
            id: "stg-4",
            name: "Contract Negotiation & Security",
            winProb: 80,
            slaDays: 14,
            type: "open",
            color: "bg-amber-500"
        },
        {
            id: "stg-5",
            name: "Closed Won",
            winProb: 100,
            slaDays: 0,
            type: "won",
            color: "bg-emerald-500"
        }
    ]);
    // Custom Fields State
    const [customFields, setCustomFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "cf-1",
            name: "Procurement Champion",
            key: "procurement_champion",
            entity: "Deals",
            type: "Text",
            isRequired: true,
            isFlsRestricted: false
        },
        {
            id: "cf-2",
            name: "Deal Margin Target",
            key: "deal_margin_target",
            entity: "Deals",
            type: "Currency",
            isRequired: false,
            isFlsRestricted: true
        },
        {
            id: "cf-3",
            name: "Primary Cloud Provider",
            key: "cloud_provider",
            entity: "Clients",
            type: "Dropdown",
            isRequired: true,
            isFlsRestricted: false
        },
        {
            id: "cf-4",
            name: "Lead Industry Vertical",
            key: "industry_vertical",
            entity: "Leads",
            type: "Dropdown",
            isRequired: true,
            isFlsRestricted: false
        },
        {
            id: "cf-5",
            name: "Target Go-Live Date",
            key: "go_live_date",
            entity: "Projects",
            type: "Date",
            isRequired: false,
            isFlsRestricted: false
        }
    ]);
    const [selectedEntityFilter, setSelectedEntityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    // Approval Policies State
    const [conversionPolicy, setConversionPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("managers_and_admins");
    const [discountThreshold, setDiscountThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const { currency: defaultCurrency, setCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    // Modals
    const [isAddStageOpen, setIsAddStageOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newStageName, setNewStageName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newStageProb, setNewStageProb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [newStageSla, setNewStageSla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7);
    const [isAddFieldOpen, setIsAddFieldOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newFieldName, setNewFieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newFieldEntity, setNewFieldEntity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Deals");
    const [newFieldType, setNewFieldType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Text");
    const [newFieldRequired, setNewFieldRequired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newFieldFls, setNewFieldFls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Team Members State
    const [teamMembers, setTeamMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "m-1",
            name: "Alex Rivera",
            email: "alex.rivera@pingdart.com",
            role: "Owner",
            status: "Active"
        },
        {
            id: "m-2",
            name: "Sarah Chen",
            email: "sarah.chen@pingdart.com",
            role: "Admin",
            status: "Active"
        },
        {
            id: "m-3",
            name: "David Kim",
            email: "david.kim@pingdart.com",
            role: "Manager",
            status: "Active"
        },
        {
            id: "m-4",
            name: "Emily Brown",
            email: "emily.brown@pingdart.com",
            role: "Member",
            status: "Active"
        },
        {
            id: "m-5",
            name: "Chloe Dubois",
            email: "chloe.dubois@pingdart.com",
            role: "Viewer",
            status: "Active"
        }
    ]);
    // Collaborative Invitation Modal State
    const [isInviteModalOpen, setIsInviteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inviteSearch, setInviteSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mounika@company.com");
    const [inviteRole, setInviteRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Manager");
    const [inviteType, setInviteType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("team_member");
    const [inviteDepartment, setInviteDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Sales Operations");
    const [inviteFeedback, setInviteFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sync crm_modal parameter with Settings internal modals
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsScreen.useEffect": ()=>{
            var _searchParams_get;
            const modalParam = searchParams === null || searchParams === void 0 ? void 0 : (_searchParams_get = searchParams.get("crm_modal")) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toLowerCase();
            if (modalParam === "add_stage" || modalParam === "stage") {
                setIsAddStageOpen(true);
            } else if (modalParam === "add_field" || modalParam === "field") {
                setIsAddFieldOpen(true);
            } else if (modalParam === "invite_member" || modalParam === "invite") {
                setIsInviteModalOpen(true);
            }
        }
    }["SettingsScreen.useEffect"], [
        searchParams
    ]);
    const handleOpenSettingsModal = (name, setter)=>{
        setter(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            crm_modal: name
        });
    };
    const handleCloseSettingsModal = (setter)=>{
        setter(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            crm_modal: null
        });
    };
    const handleAddStage = (e)=>{
        e.preventDefault();
        if (!newStageName) return;
        setStages((prev)=>[
                ...prev,
                {
                    id: `stg-${Date.now()}`,
                    name: newStageName,
                    winProb: Number(newStageProb),
                    slaDays: Number(newStageSla),
                    type: "open",
                    color: "bg-indigo-500"
                }
            ]);
        setNewStageName("");
        handleCloseSettingsModal(setIsAddStageOpen);
    };
    const handleAddField = (e)=>{
        e.preventDefault();
        if (!newFieldName) return;
        setCustomFields((prev)=>[
                ...prev,
                {
                    id: `cf-${Date.now()}`,
                    name: newFieldName,
                    key: newFieldName.toLowerCase().replace(/[^a-z0-9]/g, "_"),
                    entity: newFieldEntity,
                    type: newFieldType,
                    isRequired: newFieldRequired,
                    isFlsRestricted: newFieldFls
                }
            ]);
        setNewFieldName("");
        handleCloseSettingsModal(setIsAddFieldOpen);
    };
    const tabsScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const scrollTabs = (direction)=>{
        if (tabsScrollRef.current) {
            const scrollAmount = 240;
            tabsScrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };
    const filteredCustomFields = selectedEntityFilter === "All" ? customFields : customFields.filter((f)=>f.entity === selectedEntityFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 animate-in fade-in duration-150",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center border-b border-slate-200 dark:border-slate-800 pb-1.5 gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>scrollTabs("left"),
                        className: "h-8 w-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center shrink-0 cursor-pointer shadow-xs transition active:scale-95",
                        "aria-label": "Scroll left",
                        title: "Scroll Left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 848,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 841,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: tabsScrollRef,
                        className: "flex items-center gap-1.5 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-1 py-0.5",
                        children: [
                            {
                                id: "company",
                                label: "Company Profile",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"]
                            },
                            {
                                id: "locations",
                                label: "Multi-Entity & Regional",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"]
                            },
                            {
                                id: "roles",
                                label: "Roles & RBAC",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SecurityCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecurityCheckIcon"]
                            },
                            {
                                id: "pipelines",
                                label: "Deal Pipelines",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"]
                            },
                            {
                                id: "fields",
                                label: "Custom Fields",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Note01Icon"]
                            },
                            {
                                id: "billing",
                                label: "Billing & Taxes",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"]
                            },
                            {
                                id: "communications",
                                label: "Email, WhatsApp & SMS",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"]
                            },
                            {
                                id: "contracts",
                                label: "Contracts & Legal",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$DocumentValidationIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentValidationIcon"]
                            },
                            {
                                id: "portal",
                                label: "Client Portal",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"]
                            },
                            {
                                id: "branding",
                                label: "Branding & White-Label",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PaintBoardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaintBoardIcon"]
                            },
                            {
                                id: "ai",
                                label: "AI & Automation",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AiBrain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBrain01Icon"]
                            },
                            {
                                id: "general",
                                label: "Approvals & Policies",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"]
                            }
                        ].map((tab)=>{
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange(tab.id),
                                className: `h-8 px-3 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${isActive ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 880,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 881,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 872,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 851,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>scrollTabs("right"),
                        className: "h-8 w-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center shrink-0 cursor-pointer shadow-xs transition active:scale-95",
                        "aria-label": "Scroll right",
                        title: "Scroll Right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 894,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 887,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            activeTab === "company" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                size: 18,
                                                className: "text-indigo-600 dark:text-indigo-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 904,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Company & Legal Entity Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 905,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 903,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-0.5",
                                        children: "Primary corporate details automatically populated across invoices, contracts, proposals, and tax filings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 907,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 902,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                size: 12,
                                                className: "text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 914,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Verified Legal Entity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 915,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 913,
                                        columnNumber: 15
                                    }, this),
                                    !isEditingCompany ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleStartEditCompany,
                                        className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 924,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Edit Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 925,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 919,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleCancelEditCompany,
                                                className: "h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs transition-all flex items-center gap-1 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 929,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSaveCompanyProfile,
                                                className: "h-10 px-4 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Save Changes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 937,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 928,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 901,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-28 h-16 rounded-[10px] border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0f172a] p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs",
                                                children: (isEditingCompany ? companyForm.logoUrl || companyProfile.logoUrl : companyProfile.logoUrl) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(isEditingCompany ? companyForm.logoUrl || companyProfile.logoUrl : companyProfile.logoUrl),
                                                    alt: "Company Logo",
                                                    className: "max-h-12 max-w-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-black tracking-tight text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center text-[11px] font-black",
                                                            children: "PD"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 963,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "PINGDART"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 964,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 962,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 954,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                                size: 14,
                                                                className: "text-indigo-600 dark:text-indigo-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Company Logo & Tax Invoice Branding"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 max-w-md",
                                                        children: "Displayed at the top of all GST Tax Invoices, proposals, agreements, and client notifications. Transparent PNG or SVG recommended (max 2MB)."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 969,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 953,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "company-logo-input",
                                                type: "file",
                                                accept: "image/png,image/svg+xml,image/jpeg,image/webp",
                                                onChange: handleLogoUpload,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 981,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "company-logo-input",
                                                className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-95 select-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 992,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Upload Logo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 988,
                                                columnNumber: 17
                                            }, this),
                                            (isEditingCompany ? companyForm.logoUrl || companyProfile.logoUrl : companyProfile.logoUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleRemoveLogo,
                                                className: "h-10 px-3 rounded-[10px] border border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1001,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Remove"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 996,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 980,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 952,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "1. Legal Corporate Identity & Tax Registration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1011,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-indigo-600 dark:text-indigo-400 font-bold",
                                                children: "(Rule 46 CGST Supplier Info)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Company Display Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.companyDisplayName : companyProfile.companyDisplayName,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    companyDisplayName: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. PingDart Technologies",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Legal Registered Entity Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "* (As per GST Registration)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1032,
                                                                columnNumber: 50
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1031,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.legalEntityName : companyProfile.legalEntityName,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    legalEntityName: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. PingDart Technologies Pvt Ltd",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "GSTIN / VAT Identification Number ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "* (Required on Tax Invoice)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 55
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.gstVatNumber : companyProfile.gstVatNumber,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    gstVatNumber: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. 36ABCDE1234F1Z5",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-mono font-bold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "PAN / Corporate Tax ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.panTaxId : companyProfile.panTaxId,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    panTaxId: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. AAACP1234F",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-mono font-bold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1066,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Corporate Registration / CIN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1080,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.registrationNumber : companyProfile.registrationNumber,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    registrationNumber: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. U72200TG2026PTC123456",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-mono font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Industry Vertical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.industry : companyProfile.industry,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    industry: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. Enterprise Software & SaaS",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1096,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1094,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1014,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1009,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "2. Registered Business Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-bold",
                                                children: "(Full Address, PIN & State Code Required by Law)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Full Registered Street Address / Building / Tech Park ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1120,
                                                                columnNumber: 75
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.registeredAddress : companyProfile.registeredAddress,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    registeredAddress: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. Plot No. 42, 4th Floor, Mindspace Tech Park, Hitech City, Madhapur",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.city : companyProfile.city,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    city: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. Hyderabad",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "State"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.state : companyProfile.state,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    state: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. Telangana",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1152,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "GST State Code ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "* (Rule 46)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1167,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.stateCode : companyProfile.stateCode,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    stateCode: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. 36",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-mono font-bold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1169,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "PIN / Postal Code ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.pincode : companyProfile.pincode,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    pincode: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. 500081",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-mono font-bold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Country ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-indigo-600 font-semibold",
                                                                children: "(Any Country)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1201,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 19
                                                    }, this),
                                                    isEditingCompany ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: companyForm.country || "India",
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    country: e.target.value
                                                                })),
                                                        className: "w-full h-11 px-3.5 rounded-[10px] border border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-bold transition-all shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden text-xs cursor-pointer",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_COUNTRIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c,
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1210,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: companyProfile.country || "India",
                                                        readOnly: true,
                                                        className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white font-bold cursor-default text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "3. Authorized Signatory & Contact Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-amber-600 dark:text-amber-400 font-bold",
                                                children: "(Invoice Execution)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1231,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Authorized Signatory Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.authorizedSignatoryName : companyProfile.authorizedSignatoryName,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    authorizedSignatoryName: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. Malle Ravindra",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Signatory Designation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.authorizedSignatoryDesignation : companyProfile.authorizedSignatoryDesignation,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    authorizedSignatoryDesignation: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. Director & Authorized Signatory",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1255,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1251,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Support Phone / Hotline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1269,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: isEditingCompany ? companyForm.supportPhone : companyProfile.supportPhone,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    supportPhone: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. +91 40 4859 2900",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1270,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Official Website"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        value: isEditingCompany ? companyForm.website : companyProfile.website,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    website: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. https://pingdart.com",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1285,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Support Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1299,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: isEditingCompany ? companyForm.supportEmail : companyProfile.supportEmail,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    supportEmail: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. support@pingdart.com",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1300,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Billing & Finance Inquiries Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1314,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: isEditingCompany ? companyForm.billingEmail : companyProfile.billingEmail,
                                                        onChange: (e)=>setCompanyForm((p)=>({
                                                                    ...p,
                                                                    billingEmail: e.target.value
                                                                })),
                                                        readOnly: !isEditingCompany,
                                                        placeholder: "e.g. billing@pingdart.com",
                                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1315,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2 p-4 rounded-[10px] bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-slate-900 dark:text-white text-xs",
                                                                                children: "Authorized Signatory Signature PNG / Digital Stamp"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 1333,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30",
                                                                                children: "Rule 46(q) CGST Statutory Requirement"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 1336,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 1332,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 max-w-lg",
                                                                        children: "High-resolution transparent PNG of the authorized signatory’s handwritten signature or digital token seal. Automatically stamped on all generated GST Tax Invoices and client agreements."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 1340,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1331,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "signatory-png-input",
                                                                        type: "file",
                                                                        accept: "image/png,image/webp,image/svg+xml,image/jpeg",
                                                                        onChange: handleSignatureUpload,
                                                                        className: "hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 1346,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "signatory-png-input",
                                                                        className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-95 select-none",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 1357,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Upload Signature PNG"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 1358,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 1353,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    (isEditingCompany ? companyForm.authorizedSignatorySignature || companyProfile.authorizedSignatorySignature : companyProfile.authorizedSignatorySignature) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleRemoveSignature,
                                                                        className: "h-10 px-3.5 rounded-[10px] border border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 1366,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Remove"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 1367,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 1361,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1345,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full sm:w-80 h-24 rounded-[10px] border border-dashed border-amber-300 dark:border-amber-700/60 bg-white dark:bg-[#0b1329] p-3 flex flex-col items-center justify-center relative shadow-2xs",
                                                        children: (isEditingCompany ? companyForm.authorizedSignatorySignature || companyProfile.authorizedSignatorySignature : companyProfile.authorizedSignatorySignature) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center w-full h-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: isEditingCompany ? companyForm.authorizedSignatorySignature || companyProfile.authorizedSignatorySignature : companyProfile.authorizedSignatorySignature,
                                                                    alt: "Authorized Signatory Signature",
                                                                    className: "max-h-14 max-w-full object-contain filter contrast-125"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 1377,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[9px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold flex items-center gap-1 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                            size: 10,
                                                                            className: "text-emerald-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 1383,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Digitally Verified: ",
                                                                                companyProfile.authorizedSignatoryName || "Authorized Signatory",
                                                                                " (",
                                                                                companyProfile.authorizedSignatoryDesignation || "Director",
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 1384,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 1382,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 1376,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center select-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-serif italic text-lg text-slate-400/80 dark:text-slate-500 block tracking-wide",
                                                                    children: companyProfile.authorizedSignatoryName || "Malle Ravindra"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 1389,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400 block mt-0.5",
                                                                    children: "(No signature PNG uploaded • Click above to upload transparent PNG)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 1392,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 1388,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Legal Jurisdiction & Governing Law (Printed on Invoices & Contracts)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: isEditingCompany ? companyForm.jurisdiction : companyProfile.jurisdiction,
                                        onChange: (e)=>setCompanyForm((p)=>({
                                                    ...p,
                                                    jurisdiction: e.target.value
                                                })),
                                        readOnly: !isEditingCompany,
                                        placeholder: "e.g. Hyderabad, Telangana, India",
                                        className: `w-full h-11 px-3.5 rounded-[10px] border text-slate-900 dark:text-white font-semibold transition-all ${isEditingCompany ? "border-indigo-400 dark:border-indigo-600 bg-white dark:bg-[#0f172a] shadow-xs focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] cursor-default"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1403,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 950,
                        columnNumber: 11
                    }, this),
                    isEditingCompany && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3 animate-in fade-in duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert02Icon"], {
                                        size: 15,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1425,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Unsaved changes will apply across all CRM invoices, proposals, and contracts once saved."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1424,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleCancelEditCompany,
                                        className: "h-11 px-5 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all flex items-center justify-center cursor-pointer",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1429,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSaveCompanyProfile,
                                        className: "h-11 px-5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Save Company Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1436,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1428,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1423,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 900,
                columnNumber: 9
            }, this),
            activeTab === "locations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$settings$2f$LocationsTerritoriesSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationsTerritoriesSettings"], {}, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 1451,
                columnNumber: 37
            }, this),
            activeTab === "billing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Invoice01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Invoice01Icon"], {
                                                        size: 18,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1461,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GST Tax Invoice & Financial Defaults"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1462,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1460,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
                                                children: "Rule 46 CGST Compliant"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1464,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1459,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-0.5",
                                        children: "Configure official Indian GST invoice particulars, place-of-supply tax logic, bank remittance, and e-invoicing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1468,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleResetBillingDefaults,
                                        className: "h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs transition cursor-pointer",
                                        children: "Reset to Defaults"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1474,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSaveBillingConfig,
                                        className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1486,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Save GST Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1487,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1481,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1473,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1457,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200/80 dark:border-slate-800 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "1. Invoice Type & Financial-Year Sequential Numbering"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1495,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
                                        children: [
                                            "Active FY: ",
                                            billingConfig.financialYear,
                                            " (Auto-calculated Apr–Mar)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1498,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1494,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "Invoice Type ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1506,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: billingConfig.invoiceType,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            invoiceType: e.target.value
                                                        })),
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-bold cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GST Tax Invoice",
                                                        children: "GST Tax Invoice (Rule 46 Registered Supply)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1513,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Commercial Invoice",
                                                        children: "Commercial Invoice (Non-GST / Export)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bill of Supply",
                                                        children: "Bill of Supply (Composition / Exempted)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1515,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1508,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1504,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "Consecutive Invoice Number Prefix ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1521,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.invoicePrefix,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            invoicePrefix: e.target.value
                                                        })),
                                                placeholder: `PD/${billingConfig.financialYear}/`,
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1523,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Starting Serial Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1533,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1",
                                                        value: billingConfig.startingInvoiceNumber,
                                                        onChange: (e)=>setBillingConfig((b)=>({
                                                                    ...b,
                                                                    startingInvoiceNumber: Math.max(1, Number(e.target.value))
                                                                })),
                                                        className: "w-24 h-11 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold text-center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1537,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 h-11 px-3 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-mono text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] uppercase font-bold text-slate-400",
                                                                children: "Sample:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1545,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-black",
                                                                children: [
                                                                    billingConfig.invoicePrefix,
                                                                    String(billingConfig.startingInvoiceNumber).padStart(4, "0")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1546,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1544,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1536,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1532,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Base Currency"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: billingConfig.currency,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            currency: e.target.value
                                                        })),
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-bold cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "INR",
                                                        children: "INR (₹) — Indian Rupee (Default)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1558,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "USD",
                                                        children: "USD ($) — US Dollar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "EUR",
                                                        children: "EUR (€) — Euro"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1560,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GBP",
                                                        children: "GBP (£) — British Pound"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1561,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "AED",
                                                        children: "AED (د.إ) — UAE Dirham"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1562,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "CAD",
                                                        children: "CAD ($) — Canadian Dollar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1563,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "AUD",
                                                        children: "AUD ($) — Australian Dollar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1564,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SGD",
                                                        children: "SGD ($) — Singapore Dollar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1565,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SAR",
                                                        children: "SAR (﷼) — Saudi Riyal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1566,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "JPY",
                                                        children: "JPY (¥) — Japanese Yen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1567,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1553,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1551,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Default Payment Terms"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1572,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: billingConfig.paymentTerms,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            paymentTerms: e.target.value
                                                        })),
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-bold cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Due on Receipt",
                                                        children: "Due on Receipt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1578,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Net 7",
                                                        children: "Net 7 Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1579,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Net 15",
                                                        children: "Net 15 Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1580,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Net 30",
                                                        children: "Net 30 Days (Standard)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1581,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Net 45",
                                                        children: "Net 45 Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1582,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Net 60",
                                                        children: "Net 60 Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1583,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1571,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Monthly Overdue Late Fee Interest"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "0.1",
                                                        min: "0",
                                                        value: billingConfig.lateFeePercent,
                                                        onChange: (e)=>setBillingConfig((b)=>({
                                                                    ...b,
                                                                    lateFeePercent: Number(e.target.value)
                                                                })),
                                                        className: "w-24 h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1590,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-500",
                                                        children: "% / month interest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1598,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1589,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1587,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1503,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1493,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-gradient-to-br from-indigo-50/60 via-slate-50 to-emerald-50/40 dark:from-indigo-950/20 dark:via-[#161f2e] dark:to-emerald-950/20 border border-indigo-200/80 dark:border-indigo-900/60 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {
                                                        size: 14,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1609,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "2. Place-of-Supply Dual-Tax Engine (CGST + SGST vs IGST)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1610,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                                children: [
                                                    "Supplier location: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-800 dark:text-slate-200",
                                                        children: [
                                                            billingConfig.supplierState,
                                                            " (State Code: ",
                                                            billingConfig.supplierStateCode,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1613,
                                                        columnNumber: 38
                                                    }, this),
                                                    ". Taxes are dynamically determined based on the buyer's Place of Supply."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
                                        children: "18% Standard GST Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1616,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1606,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Automated Tax Rules Simulation (Sample Service: ₹15,000.00 @ 18% GST)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1624,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-indigo-600 dark:text-indigo-400",
                                                children: "Rule 46 Verified"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1625,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1623,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-indigo-600 dark:text-indigo-400",
                                                                children: "Intra-State Supply (Telangana → Telangana)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1632,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono font-bold text-slate-500",
                                                                children: "POS: 36"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1633,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1631,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Base Service Amount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1636,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-semibold",
                                                                children: "₹15,000.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1637,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1635,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "CGST (9%):"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1640,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-semibold text-emerald-600 dark:text-emerald-400",
                                                                children: "+₹1,350.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1641,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1639,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "SGST (9%):"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1644,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-semibold text-emerald-600 dark:text-emerald-400",
                                                                children: "+₹1,350.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1645,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1643,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-1.5 border-t border-slate-200 dark:border-slate-800 flex justify-between font-bold text-slate-900 dark:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Invoice Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1648,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-indigo-600 dark:text-indigo-400 font-black",
                                                                children: "₹17,700.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1649,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1647,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1630,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-purple-600 dark:text-purple-400",
                                                                children: "Inter-State Supply (Telangana → Other States)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1656,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono font-bold text-slate-500",
                                                                children: "POS: Outside 36"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1657,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1655,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Base Service Amount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1660,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-semibold",
                                                                children: "₹15,000.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1661,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1659,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "IGST (18% Integrated Tax):"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1664,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-semibold text-purple-600 dark:text-purple-400",
                                                                children: "+₹2,700.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1665,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1663,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "CGST / SGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1668,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono",
                                                                children: "₹0.00 (Not Applicable)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1669,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1667,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-1.5 border-t border-slate-200 dark:border-slate-800 flex justify-between font-bold text-slate-900 dark:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Invoice Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1672,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-purple-600 dark:text-purple-400 font-black",
                                                                children: "₹17,700.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 1673,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1671,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1654,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1628,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1622,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1605,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200/80 dark:border-slate-800 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider",
                                children: "3. Official Bank & Digital Payment Remittance (Printed on Invoices)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1682,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "Beneficiary / Account Name ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1689,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1688,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.bankAccountName,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            bankAccountName: e.target.value
                                                        })),
                                                placeholder: "e.g. PingDart Technologies Pvt Ltd",
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1691,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1687,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "Bank Name ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1702,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1701,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.bankName,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            bankName: e.target.value
                                                        })),
                                                placeholder: "e.g. HDFC Bank Ltd",
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1704,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1700,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "Bank Account Number ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1715,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1714,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.bankAccountNumber,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            bankAccountNumber: e.target.value
                                                        })),
                                                placeholder: "e.g. 50200012345678",
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1717,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1713,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "IFSC Code ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1728,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1727,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.bankIfscCode,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            bankIfscCode: e.target.value
                                                        })),
                                                placeholder: "e.g. HDFC0000123",
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1730,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1726,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Branch Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1740,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.bankBranch,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            bankBranch: e.target.value
                                                        })),
                                                placeholder: "e.g. Hitech City Branch, Hyderabad",
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1741,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "UPI ID / VPA (For Dynamic QR on Invoice)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1751,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.bankUpiId,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            bankUpiId: e.target.value
                                                        })),
                                                placeholder: "e.g. pingdart@hdfcbank",
                                                className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1754,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1750,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1686,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1681,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200/80 dark:border-slate-800 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider",
                                children: "4. Mandatory Notes, Terms & Declarations (Rule 46 Particulars)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1767,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Mandatory Statutory Declaration (Printed on every Tax Invoice)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1773,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 3,
                                                value: billingConfig.invoiceNotes,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            invoiceNotes: e.target.value
                                                        })),
                                                className: "w-full min-h-[76px] p-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white text-xs leading-relaxed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1776,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1772,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Invoice Terms & Scope of Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1785,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 3,
                                                value: billingConfig.invoiceTerms,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            invoiceTerms: e.target.value
                                                        })),
                                                className: "w-full min-h-[76px] p-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white text-xs leading-relaxed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1788,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1784,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1771,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1766,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200/80 dark:border-slate-800 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-extrabold text-slate-900 dark:text-white text-xs uppercase tracking-wider",
                                children: "5. Credit Notes & E-Invoicing (IRN & QR Code) Readiness"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1800,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 dark:text-white",
                                                        children: "Credit Notes Support"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1808,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: billingConfig.enableCreditNotes,
                                                        onChange: (e)=>setBillingConfig((b)=>({
                                                                    ...b,
                                                                    enableCreditNotes: e.target.checked
                                                                })),
                                                        className: "w-4 h-4 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1809,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1807,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Section 34 CGST Act adjustments & credit notes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1816,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: billingConfig.creditNotePrefix,
                                                onChange: (e)=>setBillingConfig((b)=>({
                                                            ...b,
                                                            creditNotePrefix: e.target.value
                                                        })),
                                                placeholder: `PD/CN/${billingConfig.financialYear}/`,
                                                className: "w-full h-10 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white font-mono text-xs font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1817,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1806,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 dark:text-white",
                                                        children: "E-Invoicing (IRN)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1829,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: billingConfig.enableEInvoicing,
                                                        onChange: (e)=>setBillingConfig((b)=>({
                                                                    ...b,
                                                                    enableEInvoicing: e.target.checked
                                                                })),
                                                        className: "w-4 h-4 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1830,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1828,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Rule 48(4) IRN & Signed QR code for eligible B2B invoices"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1837,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 px-3 rounded-[8px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: "IRN Status:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1839,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-emerald-600 dark:text-emerald-400",
                                                        children: "✓ Ready for IRP Portal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1840,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1838,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1827,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 dark:text-white",
                                                        children: "Dynamic UPI QR Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1847,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: billingConfig.enableDynamicQr,
                                                        onChange: (e)=>setBillingConfig((b)=>({
                                                                    ...b,
                                                                    enableDynamicQr: e.target.checked
                                                                })),
                                                        className: "w-4 h-4 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1848,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1846,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Embed instant UPI scan-to-pay QR on generated invoice PDFs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1855,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 px-3 rounded-[8px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: "QR Engine:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1857,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-indigo-600 dark:text-indigo-400",
                                                        children: "UPI Intent Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1858,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1856,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1845,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1804,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1799,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 flex items-center justify-between flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-400 font-medium",
                                children: "Changes will automatically reflect on all new invoices generated from the Invoices & Billing workspace."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1866,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleResetBillingDefaults,
                                        className: "h-11 px-4 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer",
                                        children: "Reset Defaults"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1870,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSaveBillingConfig,
                                        className: "h-11 px-6 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1882,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Save GST Invoice Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1883,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1877,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1869,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1865,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 1455,
                columnNumber: 9
            }, this),
            activeTab === "communications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$settings$2f$CommunicationsSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommunicationsSettings"], {}, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 1891,
                columnNumber: 42
            }, this),
            activeTab === "contracts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$DocumentValidationIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentValidationIcon"], {
                                                        size: 18,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1900,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Contracts, MSA & Statutory Legal Policies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 1901,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1899,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
                                                children: "E-Sign Ready"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1903,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1898,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-0.5",
                                        children: "Standard Master Services Agreement terms, mutual confidentiality covenants, validity windows, and digital signature audit trails"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1907,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1897,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSaveContractsConfig,
                                    className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 1918,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Save Legal Policies"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 1919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 1913,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1912,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1896,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-slate-900 dark:text-white block",
                                        children: "Standard Proposal / Contract Validity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1926,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                max: "365",
                                                value: contractsConfig.contractValidityDays,
                                                onChange: (e)=>setContractsConfig((c)=>({
                                                            ...c,
                                                            contractValidityDays: Number(e.target.value)
                                                        })),
                                                className: "w-24 h-11 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1928,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-500",
                                                children: "Days from issuance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1938,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1927,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1925,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900 dark:text-white",
                                                children: "Require Digital E-Signature"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1944,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: contractsConfig.requireDigitalSignature,
                                                onChange: (e)=>setContractsConfig((c)=>({
                                                            ...c,
                                                            requireDigitalSignature: e.target.checked
                                                        })),
                                                className: "w-4 h-4 rounded text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1945,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1943,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Rule 46(q) and IT Act 2000 compliant digital verification on all contracts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1954,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1942,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900 dark:text-white",
                                                children: "Audit Trail Logging"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1961,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: contractsConfig.enableAuditTrail,
                                                onChange: (e)=>setContractsConfig((c)=>({
                                                            ...c,
                                                            enableAuditTrail: e.target.checked
                                                        })),
                                                className: "w-4 h-4 rounded text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 1962,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1960,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Capture signatory IP address, timestamp, browser fingerprint, and signer email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1971,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1959,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1924,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Standard Master Services Agreement (MSA) Clauses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1979,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 4,
                                        value: contractsConfig.msaStandardTerms,
                                        onChange: (e)=>setContractsConfig((c)=>({
                                                    ...c,
                                                    msaStandardTerms: e.target.value
                                                })),
                                        className: "w-full p-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono text-xs leading-relaxed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1982,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1978,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Standard Mutual Non-Disclosure Agreement (NDA) Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1991,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        value: contractsConfig.ndaConfidentialityTerms,
                                        onChange: (e)=>setContractsConfig((c)=>({
                                                    ...c,
                                                    ndaConfidentialityTerms: e.target.value
                                                })),
                                        className: "w-full p-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-mono text-xs leading-relaxed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 1994,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 1990,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 1977,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 1895,
                columnNumber: 9
            }, this),
            activeTab === "portal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                                        size: 18,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2014,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Client 360 Portal & Self-Service Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2015,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2013,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
                                                children: portalConfig.allowPortal ? "Portal Active" : "Portal Disabled"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2017,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2012,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-0.5",
                                        children: "Control the self-service capabilities, invoice payment access, project milestone visibility, and support tickets for clients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2021,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2011,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSavePortalConfig,
                                    className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2032,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Save Portal Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2033,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 2027,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2026,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2010,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            {
                                key: "allowPortal",
                                title: "Client Portal Access",
                                desc: "Enable authenticated web login for client champions and procurement contacts."
                            },
                            {
                                key: "allowInvoices",
                                title: "Invoice & Billing Ledger Visibility",
                                desc: "Allow clients to view past GST Tax Invoices, credit notes, and balance statements."
                            },
                            {
                                key: "allowPayments",
                                title: "Online Pay-Now Button",
                                desc: "Enable instant online payment processing (UPI, Netbanking, Cards) within the client portal."
                            },
                            {
                                key: "allowTickets",
                                title: "Support Ticket Desk",
                                desc: "Allow clients to raise helpdesk support requests and track SLA resolution times."
                            },
                            {
                                key: "allowChat",
                                title: "Direct Client 360 Messaging",
                                desc: "Enable real-time chat with the assigned sales manager and project delivery lead."
                            },
                            {
                                key: "allowProjectVisibility",
                                title: "Project Milestones & Deliverables",
                                desc: "Display active project roadmaps, completed milestones, and pending sign-offs."
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "p-4 rounded-[10px] bg-slate-50/70 dark:bg-[#161f2e] border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900 dark:text-white text-xs block",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2076,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2077,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2075,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: portalConfig[item.key],
                                        onChange: (e)=>setPortalConfig((prev)=>({
                                                    ...prev,
                                                    [item.key]: e.target.checked
                                                })),
                                        className: "w-4 h-4 rounded text-indigo-600 shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2079,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2071,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2038,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 2009,
                columnNumber: 9
            }, this),
            activeTab === "branding" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px]  border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-extrabold text-slate-900 dark:text-white",
                                        children: "Branding & White-Label Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2098,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400",
                                        children: "Custom color palettes, client portal domain, and branded proposal styling"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2097,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 border border-indigo-500/20",
                                children: "White-Label Active"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2096,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-28 h-16 rounded-[10px] border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0f172a] p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs",
                                        children: companyProfile.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(companyProfile.logoUrl),
                                            alt: "Company Logo",
                                            className: "max-h-12 max-w-full object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2114,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-black tracking-tight text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center text-[11px] font-black",
                                                    children: "PD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 2121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "PINGDART"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 2122,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-slate-900 dark:text-white text-xs flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                        size: 14,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Primary Company Logo & Identity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                                children: "Appears on customer portal, invoice headers, and email communications."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "branding-logo-input",
                                        type: "file",
                                        accept: "image/png,image/svg+xml,image/jpeg,image/webp",
                                        onChange: handleLogoUpload,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "branding-logo-input",
                                        className: "h-10 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-95 select-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Upload Logo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2146,
                                        columnNumber: 15
                                    }, this),
                                    companyProfile.logoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleRemoveLogo,
                                        className: "h-10 px-3 rounded-[10px] border border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2159,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2160,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Primary Brand Accent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: brandingConfig.primaryColor,
                                                onChange: (e)=>setBrandingConfig((b)=>({
                                                            ...b,
                                                            primaryColor: e.target.value
                                                        })),
                                                className: "w-11 h-11 rounded-[10px] cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold",
                                                children: brandingConfig.primaryColor
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Client Portal Custom Domain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: brandingConfig.customDomain,
                                        onChange: (e)=>setBrandingConfig((b)=>({
                                                    ...b,
                                                    customDomain: e.target.value
                                                })),
                                        className: "w-full h-11 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] font-mono font-bold text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 2095,
                columnNumber: 9
            }, this),
            activeTab === "ai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-[8px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AiBrain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBrain01Icon"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2202,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 2201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "AI API Provider"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 2206,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80",
                                                                    children: "1 Active Engine"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 2207,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2205,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400 mt-0.5",
                                                            children: "Select and configure your primary AI provider. Only one provider can be active across CRM copilots, proposal generation, and lead scoring."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2211,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 2204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2200,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 self-start sm:self-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 2220,
                                                    columnNumber: 19
                                                }, this),
                                                "Active: ",
                                                aiProviderSettings.activeProvider === "ollama" ? "Ollama (Local)" : aiProviderSettings.activeProvider === "openai" ? "OpenAI" : aiProviderSettings.activeProvider === "anthropic" ? "Anthropic Claude" : aiProviderSettings.activeProvider === "gemini" ? "Google Gemini" : "n8n Webhook"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2219,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-3",
                                        children: "Choose Primary AI Provider (Single Selection)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5",
                                        children: [
                                            {
                                                id: "ollama",
                                                name: "Ollama",
                                                subtitle: "Local & Sovereign LLM",
                                                tag: "100% On-Premise",
                                                tagColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/70",
                                                description: "Run local open-weights models (Llama 3.2, Mistral, Qwen 2.5) on localhost:11434 with zero data leaving your server.",
                                                iconColor: "text-amber-600 dark:text-amber-400",
                                                iconBg: "bg-amber-50 dark:bg-amber-950/80"
                                            },
                                            {
                                                id: "openai",
                                                name: "OpenAI",
                                                subtitle: "GPT-4o & Reasoning",
                                                tag: "Cloud Frontier",
                                                tagColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/70",
                                                description: "Industry-standard cloud intelligence using GPT-4o, GPT-4o-mini, and o1 models with OpenAI platform API keys.",
                                                iconColor: "text-emerald-600 dark:text-emerald-400",
                                                iconBg: "bg-emerald-50 dark:bg-emerald-950/80"
                                            },
                                            {
                                                id: "anthropic",
                                                name: "Anthropic Claude",
                                                subtitle: "Claude 3.5 Sonnet & Haiku",
                                                tag: "Deep Context",
                                                tagColor: "bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/70",
                                                description: "Nuanced enterprise reasoning, proposal generation, and strategic deal advice powered by Claude 3.5 models.",
                                                iconColor: "text-orange-600 dark:text-orange-400",
                                                iconBg: "bg-orange-50 dark:bg-orange-950/80"
                                            },
                                            {
                                                id: "gemini",
                                                name: "Google Gemini",
                                                subtitle: "Gemini 1.5 Pro & Flash",
                                                tag: "Multimodal & Fast",
                                                tagColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/70",
                                                description: "High-speed inference and massive context windows powered by Google Gemini 1.5 Pro, Flash, and 2.0 Flash models.",
                                                iconColor: "text-blue-600 dark:text-blue-400",
                                                iconBg: "bg-blue-50 dark:bg-blue-950/80"
                                            },
                                            {
                                                id: "n8n",
                                                name: "n8n Automation",
                                                subtitle: "Workflow & Agent Webhook",
                                                tag: "Autonomous Webhook",
                                                tagColor: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/70",
                                                description: "Route CRM intelligence prompts through your custom n8n webhook workflows, agentic chains, and integrations.",
                                                iconColor: "text-rose-600 dark:text-rose-400",
                                                iconBg: "bg-rose-50 dark:bg-rose-950/80"
                                            }
                                        ].map((prov)=>{
                                            const isActive = aiProviderSettings.activeProvider === prov.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setAiProviderSettings((prev)=>({
                                                            ...prev,
                                                            activeProvider: prov.id
                                                        })),
                                                className: `relative p-4 rounded-[10px] border transition-all cursor-pointer text-left select-none flex flex-col justify-between ${isActive ? "border-indigo-600 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-500/20 shadow-xs" : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#161f2e] hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#1a2436]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-8 h-8 rounded-[8px] flex items-center justify-center font-extrabold text-xs ${prov.iconBg} ${prov.iconColor}`,
                                                                                children: [
                                                                                    prov.id === "ollama" && "🦙",
                                                                                    prov.id === "openai" && "⚡",
                                                                                    prov.id === "anthropic" && "✳️",
                                                                                    prov.id === "gemini" && "✨",
                                                                                    prov.id === "n8n" && "🔄"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 2307,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "font-extrabold text-xs text-slate-900 dark:text-white leading-tight",
                                                                                        children: prov.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                        lineNumber: 2315,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] text-slate-400 font-medium block",
                                                                                        children: prov.subtitle
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                        lineNumber: 2318,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 2314,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 2306,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isActive ? "border-indigo-600 bg-indigo-600 text-white shadow-xs" : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"}`,
                                                                            children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                lineNumber: 2333,
                                                                                columnNumber: 44
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2326,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 2325,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2305,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3",
                                                                children: prov.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2338,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2304,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between pt-2.5 border-t border-slate-200/50 dark:border-slate-800/70",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-bold px-2 py-0.5 rounded-md border ${prov.tagColor}`,
                                                                children: prov.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2344,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-extrabold flex items-center gap-1 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`,
                                                                children: isActive ? "● Enabled" : "Click to Enable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2348,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2343,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, prov.id, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2293,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-[10px] border border-indigo-100 dark:border-indigo-950 bg-indigo-50/20 dark:bg-indigo-950/10 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100/80 dark:border-indigo-950 pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full bg-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-extrabold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider",
                                                        children: [
                                                            aiProviderSettings.activeProvider.toUpperCase(),
                                                            " Credentials & Engine Settings"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2367,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Settings are active for all autonomous copilots across CRM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2373,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2366,
                                        columnNumber: 15
                                    }, this),
                                    aiProviderSettings.activeProvider === "ollama" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Ollama Daemon Base URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2382,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "http://localhost:11434",
                                                                value: aiProviderSettings.ollama.baseUrl,
                                                                onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                            ...prev,
                                                                            ollama: {
                                                                                ...prev.ollama,
                                                                                baseUrl: e.target.value
                                                                            }
                                                                        })),
                                                                className: "flex-1 h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2386,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setAiProviderSettings((prev)=>({
                                                                            ...prev,
                                                                            ollama: {
                                                                                ...prev.ollama,
                                                                                baseUrl: "http://localhost:11434"
                                                                            }
                                                                        })),
                                                                className: "px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-100",
                                                                children: "Reset Localhost"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2398,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2385,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 mt-1",
                                                        children: [
                                                            "Default is ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-indigo-600 dark:text-indigo-400 font-bold",
                                                                children: "http://localhost:11434"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2412,
                                                                columnNumber: 34
                                                            }, this),
                                                            ". Ensure Ollama is running (`ollama serve`)."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2411,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2381,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Active Model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2417,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "llama3.2",
                                                                value: aiProviderSettings.ollama.model,
                                                                onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                            ...prev,
                                                                            ollama: {
                                                                                ...prev.ollama,
                                                                                model: e.target.value
                                                                            }
                                                                        })),
                                                                className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2421,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1.5",
                                                                children: [
                                                                    "llama3.2",
                                                                    "llama3.1",
                                                                    "qwen2.5",
                                                                    "mistral",
                                                                    "deepseek-r1:8b"
                                                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setAiProviderSettings((prev)=>({
                                                                                    ...prev,
                                                                                    ollama: {
                                                                                        ...prev.ollama,
                                                                                        model: m
                                                                                    }
                                                                                })),
                                                                        className: `px-2 py-0.5 rounded-md text-[10px] font-bold border transition-all ${aiProviderSettings.ollama.model === m ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                                        children: m
                                                                    }, m, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 2435,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2433,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2420,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2416,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                                children: "Generation Temperature"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2459,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                                children: aiProviderSettings.ollama.temperature
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2462,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2458,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "1",
                                                        step: "0.05",
                                                        value: aiProviderSettings.ollama.temperature,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    ollama: {
                                                                        ...prev.ollama,
                                                                        temperature: parseFloat(e.target.value)
                                                                    }
                                                                })),
                                                        className: "w-full accent-indigo-600 cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[10px] text-slate-400 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "0.0 (Precise / Deterministic)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2481,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "1.0 (Creative / Exploratory)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2482,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2480,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2457,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2380,
                                        columnNumber: 17
                                    }, this),
                                    aiProviderSettings.activeProvider === "openai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                                children: "OpenAI API Key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2493,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowAiSecrets((prev)=>({
                                                                            ...prev,
                                                                            openai: !prev.openai
                                                                        })),
                                                                className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1",
                                                                children: showAiSecrets.openai ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2505,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Hide Key"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2506,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2510,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Show Key"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2511,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2496,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2492,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showAiSecrets.openai ? "text" : "password",
                                                        placeholder: "sk-proj-...",
                                                        value: aiProviderSettings.openai.apiKey,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    openai: {
                                                                        ...prev.openai,
                                                                        apiKey: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2516,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 mt-1",
                                                        children: "Obtain your API key from the official OpenAI Developer Dashboard."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2528,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2491,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Model Selection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2534,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: aiProviderSettings.openai.model,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    openai: {
                                                                        ...prev.openai,
                                                                        model: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-bold text-slate-900 dark:text-white cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gpt-4o",
                                                                children: "gpt-4o (High-Accuracy & Speed)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2547,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gpt-4o-mini",
                                                                children: "gpt-4o-mini (Cost-Effective & Fast)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2548,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "o1-mini",
                                                                children: "o1-mini (Reasoning & Deep Strategy)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2549,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gpt-4-turbo",
                                                                children: "gpt-4-turbo (Legacy)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2550,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2537,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2533,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Organization ID (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2555,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "org-...",
                                                        value: aiProviderSettings.openai.organizationId || "",
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    openai: {
                                                                        ...prev.openai,
                                                                        organizationId: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2558,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2554,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2490,
                                        columnNumber: 17
                                    }, this),
                                    aiProviderSettings.activeProvider === "anthropic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                                children: "Anthropic API Key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2579,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowAiSecrets((prev)=>({
                                                                            ...prev,
                                                                            anthropic: !prev.anthropic
                                                                        })),
                                                                className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1",
                                                                children: showAiSecrets.anthropic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2591,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Hide Key"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2592,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2596,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Show Key"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2597,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2582,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2578,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showAiSecrets.anthropic ? "text" : "password",
                                                        placeholder: "sk-ant-api03-...",
                                                        value: aiProviderSettings.anthropic.apiKey,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    anthropic: {
                                                                        ...prev.anthropic,
                                                                        apiKey: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2602,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 mt-1",
                                                        children: "Requires an active Anthropic Console account key."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2614,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2577,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Claude Model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2620,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: aiProviderSettings.anthropic.model,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    anthropic: {
                                                                        ...prev.anthropic,
                                                                        model: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-bold text-slate-900 dark:text-white cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "claude-3-5-sonnet-20241022",
                                                                children: "Claude 3.5 Sonnet (Recommended)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2633,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "claude-3-5-haiku-20241022",
                                                                children: "Claude 3.5 Haiku (Ultra-Fast)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2634,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "claude-3-opus-20240229",
                                                                children: "Claude 3 Opus (Deep Analysis)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2635,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2623,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2619,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2576,
                                        columnNumber: 17
                                    }, this),
                                    aiProviderSettings.activeProvider === "gemini" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                                children: "Google Gemini API Key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2646,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowAiSecrets((prev)=>({
                                                                            ...prev,
                                                                            gemini: !prev.gemini
                                                                        })),
                                                                className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1",
                                                                children: showAiSecrets.gemini ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2658,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Hide Key"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2659,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2663,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Show Key"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2664,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2649,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2645,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showAiSecrets.gemini ? "text" : "password",
                                                        placeholder: "AIzaSy...",
                                                        value: aiProviderSettings.gemini.apiKey,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    gemini: {
                                                                        ...prev.gemini,
                                                                        apiKey: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2669,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 mt-1",
                                                        children: "Obtain an API key from Google AI Studio."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2681,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2644,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Gemini Model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2687,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: aiProviderSettings.gemini.model,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    gemini: {
                                                                        ...prev.gemini,
                                                                        model: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-bold text-slate-900 dark:text-white cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gemini-1.5-pro",
                                                                children: "Gemini 1.5 Pro (Multimodal & Deep Reasoning)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2700,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gemini-1.5-flash",
                                                                children: "Gemini 1.5 Flash (Ultra-Low Latency)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2701,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gemini-2.0-flash-exp",
                                                                children: "Gemini 2.0 Flash (Next-Gen Experimental)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2702,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2690,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2686,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2643,
                                        columnNumber: 17
                                    }, this),
                                    aiProviderSettings.activeProvider === "n8n" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "n8n Webhook Endpoint URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2712,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "https://your-workspace.app.n8n.cloud/webhook/crm-ai",
                                                        value: aiProviderSettings.n8n.webhookUrl,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    n8n: {
                                                                        ...prev.n8n,
                                                                        webhookUrl: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2715,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-400 mt-1",
                                                        children: "HTTP POST endpoint triggered for sales proposal scopes, deal insights, and copilot actions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2727,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2711,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-slate-700 dark:text-slate-300",
                                                                children: "Webhook Secret / Bearer Token"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2734,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowAiSecrets((prev)=>({
                                                                            ...prev,
                                                                            n8n: !prev.n8n
                                                                        })),
                                                                className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1",
                                                                children: showAiSecrets.n8n ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2746,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Hide Secret"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2747,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                            size: 13
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2751,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Show Secret"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 2752,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2737,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2733,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showAiSecrets.n8n ? "text" : "password",
                                                        placeholder: "n8n_sec_...",
                                                        value: aiProviderSettings.n8n.apiKey,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    n8n: {
                                                                        ...prev.n8n,
                                                                        apiKey: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-mono text-slate-900 dark:text-white font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2757,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2732,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Workflow Action Identifier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2772,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "CRM Copilot Workflow",
                                                        value: aiProviderSettings.n8n.workflowName,
                                                        onChange: (e)=>setAiProviderSettings((prev)=>({
                                                                    ...prev,
                                                                    n8n: {
                                                                        ...prev.n8n,
                                                                        workflowName: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] font-bold text-slate-900 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2775,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2771,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2710,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-indigo-100/80 dark:border-indigo-950",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleTestAiConnection,
                                                disabled: isTestingAiConnection,
                                                className: "h-10 px-4 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                        size: 14,
                                                        className: "text-amber-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2799,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isTestingAiConnection ? "Testing Connection..." : "Test Connection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2800,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2793,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSaveAiSettings,
                                                className: "h-10 px-5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2808,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Save AI Configuration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2809,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2803,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2792,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2365,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-extrabold text-slate-900 dark:text-white",
                                                children: "AI Intelligence & Autonomous Copilots"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2819,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Enable or disable specific generative and predictive AI capabilities across the workspace"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2822,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2818,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSaveAiSettings,
                                        className: "h-9 px-4 rounded-[10px] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all self-start sm:self-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2832,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Save Feature Toggles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2833,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2827,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2817,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                children: [
                                    {
                                        key: "leadScoring",
                                        label: "AI Lead Propensity Scoring (0-100)",
                                        desc: "Calculates real-time conversion probability based on historical won deals."
                                    },
                                    {
                                        key: "dealCoaching",
                                        label: "AI Deal Coach & Next Best Action",
                                        desc: "Recommends actionable sales moves and objection handling scripts."
                                    },
                                    {
                                        key: "churnPrediction",
                                        label: "Churn Sentinel & Early Warning",
                                        desc: "Alerts account reps when customer sentiment or engagement declines."
                                    },
                                    {
                                        key: "forecasting",
                                        label: "Predictive Revenue Forecasting",
                                        desc: "Simulates pipeline closure rates using multi-quarter historical trends."
                                    },
                                    {
                                        key: "proposalWriter",
                                        label: "Generative Proposal Scope Writer",
                                        desc: "Drafts tailored scopes of work and quotation narratives automatically."
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800 flex items-start justify-between cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pr-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 dark:text-white block",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2850,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-slate-400 block mt-0.5",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2851,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2849,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: aiConfig[item.key],
                                                onChange: (e)=>setAiConfig((prev)=>({
                                                            ...prev,
                                                            [item.key]: e.target.checked
                                                        })),
                                                className: "rounded text-indigo-600 mt-1 cursor-pointer w-4 h-4 accent-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2853,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.key, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2845,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2837,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2816,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 2195,
                columnNumber: 9
            }, this),
            activeTab === "pipelines" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-[10px]  border border-slate-200 dark:border-slate-800 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-[10px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2875,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2874,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block",
                                                children: "Active Sales Pipeline"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2878,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedPipelineId,
                                                onChange: (e)=>setSelectedPipelineId(e.target.value),
                                                className: "text-xs font-bold text-slate-900 dark:text-white bg-transparent border-0 focus:outline-hidden cursor-pointer",
                                                children: PIPELINES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: p.id,
                                                        className: "dark:bg-[#111827]",
                                                        children: p.name
                                                    }, p.id, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2887,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2881,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2877,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2873,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleOpenSettingsModal("add_stage", setIsAddStageOpen),
                                className: "px-3 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2899,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2900,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2895,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2872,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-5 gap-2.5",
                        children: stages.map((stg, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px]  bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5 relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] font-bold text-slate-400",
                                                children: [
                                                    "Step ",
                                                    sIdx + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2912,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2 h-2 rounded-full ${stg.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2913,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2911,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-black text-slate-900 dark:text-white truncate",
                                        children: stg.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2915,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[10.5px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                children: [
                                                    stg.winProb,
                                                    "% Win Prob"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2919,
                                                columnNumber: 19
                                            }, this),
                                            stg.slaDays > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-500 font-bold text-[9.5px]",
                                                children: [
                                                    stg.slaDays,
                                                    "d SLA"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2923,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 2918,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, stg.id, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2907,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2905,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-[10px]  border border-slate-200 dark:border-slate-800 p-5 space-y-3 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                children: "Stage Rules, Stale Thresholds & Actions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2934,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-slate-100 dark:border-slate-800 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-2",
                                                        children: "Order"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2941,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-2",
                                                        children: "Stage Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2942,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-2",
                                                        children: "Win Probability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2943,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-2",
                                                        children: "Stale Deal SLA Alert"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2944,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-2",
                                                        children: "Stage Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2945,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-2 text-right",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 2946,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 2940,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2939,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-100 dark:divide-slate-800/60",
                                            children: stages.map((stg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-slate-50/50 dark:hover:bg-slate-800/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 font-mono text-slate-400",
                                                            children: [
                                                                "#",
                                                                idx + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2952,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-2 h-2 rounded-full ${stg.color}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 2954,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: stg.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 2955,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2953,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                            children: [
                                                                stg.winProb,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2957,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5",
                                                            children: stg.slaDays > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-600 border border-amber-200 dark:border-amber-800",
                                                                children: [
                                                                    "Alert after ",
                                                                    stg.slaDays,
                                                                    " days inactivity"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2962,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: "No SLA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2966,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2960,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
                                                                children: stg.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 2970,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2969,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 text-right space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-slate-400 hover:text-indigo-600 cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit01Icon"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 2976,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 2975,
                                                                    columnNumber: 25
                                                                }, this),
                                                                stg.type === "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setStages((prev)=>prev.filter((s)=>s.id !== stg.id)),
                                                                    className: "text-slate-400 hover:text-rose-500 cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 2983,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 2979,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 2974,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stg.id, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 2951,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 2949,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 2938,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 2937,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2933,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 2870,
                columnNumber: 9
            }, this),
            activeTab === "fields" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px]  border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                        children: "Custom Field Taxonomy Builder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3001,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Attach custom properties, data validation, and field-level security across modules."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3004,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3000,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedEntityFilter,
                                        onChange: (e)=>setSelectedEntityFilter(e.target.value),
                                        className: "px-2.5 py-1.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Entities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3016,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Leads",
                                                children: "Leads Only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3017,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Deals",
                                                children: "Deals Only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3018,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Clients",
                                                children: "Clients Only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3019,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Projects",
                                                children: "Projects Only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3020,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3011,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleOpenSettingsModal("add_field", setIsAddFieldOpen),
                                        className: "px-3 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3027,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Add Field"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3028,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3023,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3009,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 2999,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-slate-100 dark:border-slate-800 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Field Label"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3037,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "API Key"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3038,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Entity Target"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3039,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Data Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3040,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Required"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3041,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Security (FLS)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3042,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3043,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3036,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3035,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800",
                                    children: filteredCustomFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50 dark:hover:bg-slate-800/40 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-bold text-slate-900 dark:text-white flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Note01Icon"], {
                                                            size: 13,
                                                            className: "text-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3050,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: field.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3051,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3049,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-mono text-[11px] text-slate-400",
                                                    children: field.key
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3053,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-extrabold text-slate-700 dark:text-slate-300",
                                                        children: field.entity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3055,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3054,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-semibold text-slate-600 dark:text-slate-400",
                                                    children: field.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3059,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5",
                                                    children: field.isRequired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-500 font-bold flex items-center gap-1 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 3063,
                                                                columnNumber: 27
                                                            }, this),
                                                            " Yes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3062,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 text-[11px]",
                                                        children: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3066,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3060,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5",
                                                    children: field.isFlsRestricted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-[9.5px] font-black text-purple-600 border border-purple-200 dark:border-purple-800",
                                                        children: "Restricted"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3071,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 text-[11px]",
                                                        children: "Public"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3075,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3069,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCustomFields((prev)=>prev.filter((f)=>f.id !== field.id)),
                                                        className: "p-1 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 transition cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3083,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3079,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3078,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, field.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3048,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3046,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3034,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 3033,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 2998,
                columnNumber: 9
            }, this),
            activeTab === "roles" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px]  border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                        children: "Workspace Roles & Team Directory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3099,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Configure user roles, granular access, or invite collaboration partners"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3098,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setInviteFeedback(null);
                                    handleOpenSettingsModal("invite_member", setIsInviteModalOpen);
                                },
                                className: "px-3 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer self-start sm:self-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Invite Member / Client"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 3097,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-xs",
                        children: teamMembers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-xs",
                                                children: m.name.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-slate-900 dark:text-white",
                                                        children: m.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10.5px] text-slate-400",
                                                        children: m.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3131,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3129,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-indigo-600",
                                        children: m.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, m.id, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3121,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 3119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 3096,
                columnNumber: 9
            }, this),
            activeTab === "general" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px]  border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2",
                        children: "Lead Conversion & Approval Policies"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 3147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-900 dark:text-white block",
                                        children: "Lead Conversion Approval Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Determine who is permitted to execute 1-Click Zero-Loss Conversion from Lead to Client 360 Workspace & Project."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 pt-1",
                                        children: [
                                            {
                                                key: "managers_only",
                                                label: "Managers & Admins Only (Strict Verification)"
                                            },
                                            {
                                                key: "managers_and_admins",
                                                label: "Managers + Workspace Admins (Recommended)"
                                            },
                                            {
                                                key: "assigned_sales_rep",
                                                label: "Assigned Sales Rep Directly (High Velocity / No Gate)"
                                            }
                                        ].map((pol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "conversionPolicy",
                                                        checked: conversionPolicy === pol.key,
                                                        onChange: ()=>setConversionPolicy(pol.key),
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-800 dark:text-slate-200 font-semibold",
                                                        children: pol.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3174,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, pol.key, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3166,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900 dark:text-white block",
                                                children: "Deal Discount Approval Threshold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Discounts exceeding this threshold require explicit Manager approval before quotes can be issued."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                max: "100",
                                                value: discountThreshold,
                                                onChange: (e)=>setDiscountThreshold(Number(e.target.value)),
                                                className: "w-16 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-right font-mono font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-500",
                                                children: "%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900 dark:text-white block",
                                                children: "Default Currency"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Base currency for deals, pipelines, projects, and invoices."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: defaultCurrency,
                                        onChange: (e)=>{
                                            setCurrency(e.target.value);
                                        },
                                        className: "px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] font-mono font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "USD",
                                                children: "USD ($)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "EUR",
                                                children: "EUR (€)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "INR",
                                                children: "INR (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "GBP",
                                                children: "GBP (£)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "AED",
                                                children: "AED (AED )"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3224,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CAD",
                                                children: "CAD (C$)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "AUD",
                                                children: "AUD (A$)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "SGD",
                                                children: "SGD (S$)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "SAR",
                                                children: "SAR (SAR )"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                lineNumber: 3204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                        lineNumber: 3151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 3146,
                columnNumber: 9
            }, this),
            isAddStageOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in",
                onClick: ()=>handleCloseSettingsModal(setIsAddStageOpen),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white dark:bg-[#111827] rounded-[10px]  p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                    children: "Add Pipeline Stage"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCloseSettingsModal(setIsAddStageOpen),
                                    className: "text-slate-400 hover:text-slate-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3250,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3249,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3245,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddStage,
                            className: "space-y-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                            children: "Stage Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: newStageName,
                                            onChange: (e)=>setNewStageName(e.target.value),
                                            placeholder: "e.g. Security & Legal Review",
                                            className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white focus:outline-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                    children: "Win Probability (%)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3269,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "number",
                                                    min: "0",
                                                    max: "100",
                                                    value: newStageProb,
                                                    onChange: (e)=>setNewStageProb(Number(e.target.value)),
                                                    className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white focus:outline-hidden font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3270,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                    children: "SLA Limit (Days)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3281,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "number",
                                                    min: "1",
                                                    value: newStageSla,
                                                    onChange: (e)=>setNewStageSla(Number(e.target.value)),
                                                    className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white focus:outline-hidden font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleCloseSettingsModal(setIsAddStageOpen),
                                            className: "px-3 py-1.5 rounded-[10px] border border-slate-200 dark:border-slate-700 font-bold",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold",
                                            children: "Save Stage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3293,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3254,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                    lineNumber: 3241,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 3237,
                columnNumber: 9
            }, this),
            isAddFieldOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in",
                onClick: ()=>setIsAddFieldOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white dark:bg-[#111827] rounded-[10px]  p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                    children: "Add Custom Field"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAddFieldOpen(false),
                                    className: "text-slate-400 hover:text-slate-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3328,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddField,
                            className: "space-y-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                            children: "Field Label *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3334,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            value: newFieldName,
                                            onChange: (e)=>setNewFieldName(e.target.value),
                                            placeholder: "e.g. Target Procurement Date",
                                            className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white focus:outline-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3335,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3333,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                    children: "Entity Target"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newFieldEntity,
                                                    onChange: (e)=>setNewFieldEntity(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Deals",
                                                            children: "Deals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3353,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Leads",
                                                            children: "Leads"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3354,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Clients",
                                                            children: "Clients"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3355,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Contacts",
                                                            children: "Contacts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3356,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Projects",
                                                            children: "Projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3357,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3346,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                    children: "Data Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newFieldType,
                                                    onChange: (e)=>setNewFieldType(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Text",
                                                            children: "Text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3367,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Number",
                                                            children: "Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3368,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Currency",
                                                            children: "Currency ($)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3369,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Date",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3370,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Dropdown",
                                                            children: "Dropdown Single"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3371,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3362,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3345,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: newFieldRequired,
                                                    onChange: (e)=>setNewFieldRequired(e.target.checked),
                                                    className: "rounded text-indigo-600 focus:ring-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300",
                                                    children: "Mandatory / Required Field"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3384,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: newFieldFls,
                                                    onChange: (e)=>setNewFieldFls(e.target.checked),
                                                    className: "rounded text-indigo-600 focus:ring-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3388,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-700 dark:text-slate-300 block",
                                                            children: "Field-Level Security (FLS)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3395,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10.5px] text-slate-400",
                                                            children: "Mask field value for non-Manager/Admin roles"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3396,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3394,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3387,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleCloseSettingsModal(setIsAddFieldOpen),
                                            className: "px-3 py-1.5 rounded-[10px] border border-slate-200 dark:border-slate-700 font-bold",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-1.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold",
                                            children: "Create Field"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3409,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3401,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3332,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                    lineNumber: 3319,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 3315,
                columnNumber: 9
            }, this),
            isInviteModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in",
                onClick: ()=>handleCloseSettingsModal(setIsInviteModalOpen),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Collaborative Workspace Invitation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
                                                    children: "PingDart Native"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3435,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "Invite existing PingDart users or send email/SMS/WhatsApp invites with instant chat delivery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3432,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCloseSettingsModal(setIsInviteModalOpen),
                                    className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-[10px] hover:bg-slate-100 dark:hover:bg-slate-800 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3447,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3443,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3431,
                            columnNumber: 13
                        }, this),
                        inviteFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 rounded-[10px]  bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                    size: 36,
                                    className: "text-emerald-500 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3453,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-black text-slate-900 dark:text-white",
                                    children: inviteFeedback
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3454,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: "A system chat message, in-app notification, and invite email have been dispatched."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3455,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCloseSettingsModal(setIsInviteModalOpen),
                                        className: "px-4 py-2 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold",
                                        children: "Done"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                        lineNumber: 3459,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3458,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3452,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-5 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                    children: "Search User (Email, Ping ID, or Phone)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3472,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                            size: 14,
                                                            className: "absolute left-3 top-3 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3476,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: inviteSearch,
                                                            onChange: (e)=>setInviteSearch(e.target.value),
                                                            placeholder: "e.g. mounika@company.com or @mounika",
                                                            className: "w-full pl-9 pr-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white font-medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3477,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3475,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3471,
                                            columnNumber: 19
                                        }, this),
                                        inviteSearch.toLowerCase().includes("mounika") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-[10px]  bg-indigo-50/70 dark:bg-[#1a2336] border border-indigo-200 dark:border-indigo-800/60 space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-xs",
                                                                children: "M"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 3492,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-emerald-500 absolute bottom-0 right-0 ring-2 ring-white dark:ring-slate-900"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 3495,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3491,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-black text-slate-900 dark:text-white text-sm",
                                                                        children: "Mounika"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 3499,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-emerald-500",
                                                                        children: "● Online"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                        lineNumber: 3500,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 3498,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                                children: "Business Email Team • Hyderabad"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 3502,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold",
                                                                children: "Ping ID: PING-10293"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                lineNumber: 3505,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                        lineNumber: 3497,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3490,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3489,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-[10px]  bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 text-slate-400 text-center py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: 'Type "mounika" or enter a new email to test discovery'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3513,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3512,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                    children: "Invite Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3519,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setInviteType("team_member"),
                                                            className: `py-2 px-3 rounded-[10px] font-bold border transition text-center cursor-pointer ${inviteType === "team_member" ? "bg-indigo-600 text-white border-indigo-600 shadow-xs" : "bg-slate-50 dark:bg-[#161f2e] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"}`,
                                                            children: "Internal Team"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3523,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setInviteType("client_portal"),
                                                            className: `py-2 px-3 rounded-[10px] font-bold border transition text-center cursor-pointer ${inviteType === "client_portal" ? "bg-indigo-600 text-white border-indigo-600 shadow-xs" : "bg-slate-50 dark:bg-[#161f2e] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"}`,
                                                            children: "Client Portal Guest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3533,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3522,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3518,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                            children: "Assigned Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3549,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: inviteRole,
                                                            onChange: (e)=>setInviteRole(e.target.value),
                                                            className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Manager",
                                                                    children: "Sales Manager"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3557,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Member",
                                                                    children: "Sales Rep"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3558,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Admin",
                                                                    children: "Admin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3559,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Viewer",
                                                                    children: "Viewer (Read-Only)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3560,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3552,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3548,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                            children: "Department"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3565,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: inviteDepartment,
                                                            onChange: (e)=>setInviteDepartment(e.target.value),
                                                            className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white font-medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3568,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3564,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3547,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3470,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 block",
                                                    children: "Live PingDart Chat Invite Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3581,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-[10px]  bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 shadow-lg space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Chat01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat01Icon"], {
                                                                    size: 16,
                                                                    className: "text-cyan-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3588,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-black text-xs text-cyan-300",
                                                                    children: "PingDart System Bot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3589,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400 ml-auto",
                                                                    children: "Just now"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3590,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3587,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1.5 text-xs text-slate-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-white",
                                                                    children: "👋 Hello Mounika,"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3594,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        "Ravindra has invited you to join ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "text-indigo-300",
                                                                            children: "PingDart Enterprise CRM"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 3598,
                                                                            columnNumber: 60
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3597,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-[10px] bg-white/10 space-y-1 text-[11px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "Role:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                    lineNumber: 3601,
                                                                                    columnNumber: 30
                                                                                }, this),
                                                                                " ",
                                                                                inviteRole
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 3601,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "Department:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                                    lineNumber: 3602,
                                                                                    columnNumber: 30
                                                                                }, this),
                                                                                " ",
                                                                                inviteDepartment
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 3602,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-300",
                                                                            children: "Access to: Leads, Deals, Clients, Projects"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                            lineNumber: 3603,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3600,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3593,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 pt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "flex-1 py-1.5 rounded-lg bg-emerald-500 text-white font-black text-xs shadow-xs text-center",
                                                                    children: "Accept"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3608,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "flex-1 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-bold text-xs text-center",
                                                                    children: "Decline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                                    lineNumber: 3614,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3607,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3586,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3580,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[11px] text-slate-400 block uppercase tracking-wider",
                                                    children: "Instant Delivery Channels"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3626,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 font-bold",
                                                            children: "✓ PingDart Chat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3630,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 font-bold",
                                                            children: "✓ Notification Center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3631,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 font-bold",
                                                            children: "✓ Email Invite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                            lineNumber: 3632,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                    lineNumber: 3629,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3625,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    const newId = `m-${Date.now()}`;
                                                    setTeamMembers((prev)=>[
                                                            ...prev,
                                                            {
                                                                id: newId,
                                                                name: inviteSearch.includes("mounika") ? "Mounika" : inviteSearch.split("@")[0] || "New Member",
                                                                email: inviteSearch.includes("@") ? inviteSearch : `${inviteSearch}@pingdart.com`,
                                                                role: inviteRole,
                                                                status: "Invited"
                                                            }
                                                        ]);
                                                    setInviteFeedback(`Invitation sent to ${inviteSearch.includes("mounika") ? "Mounika" : inviteSearch}!`);
                                                },
                                                className: "w-full py-2.5 rounded-[10px] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs shadow-md active:scale-[0.99] transition cursor-pointer",
                                                children: "🚀 Send Workspace Invitation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                                lineNumber: 3638,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                            lineNumber: 3637,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                                    lineNumber: 3579,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                            lineNumber: 3468,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                    lineNumber: 3426,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
                lineNumber: 3422,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx",
        lineNumber: 838,
        columnNumber: 5
    }, this);
}
_s(SettingsScreen, "DxFVcKgjODZcoHw5wFUxuXtfpM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmPermissions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"]
    ];
});
_c = SettingsScreen;
var _c;
__turbopack_context__.k.register(_c, "SettingsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_crm_screens_SettingsScreen_tsx_cd5da503._.js.map