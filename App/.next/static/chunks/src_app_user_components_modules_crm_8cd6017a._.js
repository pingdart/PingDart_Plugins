(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/hooks/useCrmPage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCrmPage",
    ()=>useCrmPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript) <export api as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ── Default system roles ──────────────────────────────────────────────────
function makeModules(r, c, e, d) {
    return {
        read: r,
        create: c,
        edit: e,
        delete: d
    };
}
const ALL_M = makeModules(true, true, true, true);
const RO_M = makeModules(true, false, false, false);
const RC_M = makeModules(true, true, false, false);
const NONE_M = makeModules(false, false, false, false);
function buildRole(id, name, slug, description, color, scopes, mods, fin, aiP, fs, isSystem = true) {
    const s = (k)=>scopes[k] || "own";
    const m = (k)=>mods[k] || NONE_M;
    return {
        id,
        name,
        slug,
        description,
        isSystem,
        color,
        recordScopes: {
            leads: s("leads"),
            deals: s("deals"),
            clients: s("clients"),
            projects: s("projects"),
            invoices: s("invoices"),
            agreements: s("agreements"),
            support: s("support"),
            teams: s("teams")
        },
        modules: {
            leads: m("leads"),
            deals: m("deals"),
            clients: m("clients"),
            projects: m("projects"),
            invoices: m("invoices"),
            agreements: m("agreements"),
            support: m("support"),
            teams: m("teams"),
            reports: m("reports"),
            ai: m("ai"),
            settings: m("settings")
        },
        financial: {
            canViewRevenue: !!fin.canViewRevenue,
            canViewInvoices: !!fin.canViewInvoices,
            canCreateInvoice: !!fin.canCreateInvoice,
            canViewPayments: !!fin.canViewPayments,
            canRecordPayments: !!fin.canRecordPayments,
            canExportFinancials: !!fin.canExportFinancials
        },
        ai: {
            canUseAi: !!aiP.canUseAi,
            canViewAiInsights: !!aiP.canViewAiInsights,
            canCreateAiAutomations: !!aiP.canCreateAiAutomations,
            canAccessClientHealthAi: !!aiP.canAccessClientHealthAi,
            canAccessForecasting: !!aiP.canAccessForecasting
        },
        fieldSecurity: {
            hideDealValue: !!fs.hideDealValue,
            hideCommission: !!fs.hideCommission,
            hideProfitMargin: !!fs.hideProfitMargin,
            hideClientRevenue: !!fs.hideClientRevenue
        }
    };
}
const A_SC = {
    leads: "all",
    deals: "all",
    clients: "all",
    projects: "all",
    invoices: "all",
    agreements: "all",
    support: "all",
    teams: "all"
};
const T_SC = {
    leads: "team",
    deals: "team",
    clients: "all",
    projects: "all",
    invoices: "all",
    agreements: "team",
    support: "all",
    teams: "team"
};
const O_SC = {
    leads: "own",
    deals: "own",
    clients: "team",
    projects: "team",
    invoices: "own",
    agreements: "own",
    support: "own",
    teams: "own"
};
const DEFAULT_SYSTEM_ROLES = [
    buildRole("role-owner", "Owner", "owner", "Full access to everything", "#6366f1", A_SC, {
        leads: ALL_M,
        deals: ALL_M,
        clients: ALL_M,
        projects: ALL_M,
        invoices: ALL_M,
        agreements: ALL_M,
        support: ALL_M,
        teams: ALL_M,
        reports: ALL_M,
        ai: ALL_M,
        settings: ALL_M
    }, {
        canViewRevenue: true,
        canViewInvoices: true,
        canCreateInvoice: true,
        canViewPayments: true,
        canRecordPayments: true,
        canExportFinancials: true
    }, {
        canUseAi: true,
        canViewAiInsights: true,
        canCreateAiAutomations: true,
        canAccessClientHealthAi: true,
        canAccessForecasting: true
    }, {}),
    buildRole("role-admin", "Admin", "admin", "Full access except workspace billing", "#8b5cf6", A_SC, {
        leads: ALL_M,
        deals: ALL_M,
        clients: ALL_M,
        projects: ALL_M,
        invoices: ALL_M,
        agreements: ALL_M,
        support: ALL_M,
        teams: ALL_M,
        reports: ALL_M,
        ai: ALL_M,
        settings: makeModules(true, false, true, false)
    }, {
        canViewRevenue: true,
        canViewInvoices: true,
        canCreateInvoice: true,
        canViewPayments: true,
        canRecordPayments: true,
        canExportFinancials: true
    }, {
        canUseAi: true,
        canViewAiInsights: true,
        canCreateAiAutomations: true,
        canAccessClientHealthAi: true,
        canAccessForecasting: true
    }, {}),
    buildRole("role-manager", "Manager", "manager", "Team & project management, limited settings", "#0ea5e9", T_SC, {
        leads: ALL_M,
        deals: ALL_M,
        clients: ALL_M,
        projects: ALL_M,
        invoices: RC_M,
        agreements: RO_M,
        support: ALL_M,
        teams: ALL_M,
        reports: RO_M,
        ai: RO_M,
        settings: NONE_M
    }, {
        canViewRevenue: true,
        canViewInvoices: true,
        canCreateInvoice: true,
        canViewPayments: true,
        canRecordPayments: false,
        canExportFinancials: false
    }, {
        canUseAi: true,
        canViewAiInsights: true,
        canCreateAiAutomations: false,
        canAccessClientHealthAi: true,
        canAccessForecasting: true
    }, {}),
    buildRole("role-member", "Member", "member", "Standard team member access", "#10b981", O_SC, {
        leads: makeModules(true, true, true, false),
        deals: makeModules(true, true, true, false),
        clients: RO_M,
        projects: RO_M,
        invoices: RO_M,
        agreements: RO_M,
        support: makeModules(true, true, true, false),
        teams: RO_M,
        reports: NONE_M,
        ai: RO_M,
        settings: NONE_M
    }, {
        canViewRevenue: false,
        canViewInvoices: true,
        canCreateInvoice: false,
        canViewPayments: false,
        canRecordPayments: false,
        canExportFinancials: false
    }, {
        canUseAi: true,
        canViewAiInsights: true,
        canCreateAiAutomations: false,
        canAccessClientHealthAi: false,
        canAccessForecasting: false
    }, {
        hideCommission: true,
        hideProfitMargin: true,
        hideClientRevenue: true
    }),
    buildRole("role-viewer", "Viewer", "viewer", "Read-only access across CRM", "#64748b", O_SC, {
        leads: RO_M,
        deals: RO_M,
        clients: RO_M,
        projects: RO_M,
        invoices: RO_M,
        agreements: RO_M,
        support: RO_M,
        teams: RO_M,
        reports: NONE_M,
        ai: NONE_M,
        settings: NONE_M
    }, {
        canViewRevenue: false,
        canViewInvoices: true,
        canCreateInvoice: false,
        canViewPayments: false,
        canRecordPayments: false,
        canExportFinancials: false
    }, {
        canUseAi: false,
        canViewAiInsights: false,
        canCreateAiAutomations: false,
        canAccessClientHealthAi: false,
        canAccessForecasting: false
    }, {
        hideDealValue: true,
        hideCommission: true,
        hideProfitMargin: true,
        hideClientRevenue: true
    }),
    buildRole("role-client", "Client", "client", "Client portal access to projects, milestones, tasks, and invoice payments", "#f59e0b", O_SC, {
        leads: NONE_M,
        deals: NONE_M,
        clients: NONE_M,
        projects: makeModules(true, false, false, false),
        invoices: makeModules(true, false, true, false),
        agreements: makeModules(true, false, false, false),
        support: makeModules(true, true, false, false),
        teams: NONE_M,
        reports: NONE_M,
        ai: NONE_M,
        settings: NONE_M
    }, {
        canViewRevenue: false,
        canViewInvoices: true,
        canCreateInvoice: false,
        canViewPayments: true,
        canRecordPayments: true,
        canExportFinancials: false
    }, {
        canUseAi: false,
        canViewAiInsights: false,
        canCreateAiAutomations: false,
        canAccessClientHealthAi: false,
        canAccessForecasting: false
    }, {
        hideDealValue: true,
        hideCommission: true,
        hideProfitMargin: true,
        hideClientRevenue: true
    })
];
const DEFAULT_DEPARTMENTS = [
    {
        id: "dept-sales",
        name: "Sales",
        description: "Inbound/outbound pipeline, client outreach, closures",
        color: "#6366f1",
        createdAt: "2026-01-01"
    },
    {
        id: "dept-delivery",
        name: "Delivery",
        description: "Project milestone execution, client deliverables",
        color: "#0ea5e9",
        createdAt: "2026-01-01"
    },
    {
        id: "dept-finance",
        name: "Finance",
        description: "Billing, invoicing, reconciliations, revenue",
        color: "#10b981",
        createdAt: "2026-01-01"
    },
    {
        id: "dept-operations",
        name: "Operations",
        description: "SLA management, triage desk, internal support",
        color: "#f59e0b",
        createdAt: "2026-01-01"
    },
    {
        id: "dept-engineering",
        name: "Engineering",
        description: "Technical integrations, software, AI systems",
        color: "#8b5cf6",
        createdAt: "2026-01-01"
    },
    {
        id: "dept-marketing",
        name: "Marketing",
        description: "Campaigns, brand collateral, lead generation",
        color: "#ec4899",
        createdAt: "2026-01-01"
    }
];
const DEFAULT_TEAMS = [
    {
        id: "team-enterprise-sales",
        name: "Enterprise Sales Squad",
        departmentId: "dept-sales",
        departmentName: "Sales",
        description: "High-ticket enterprise acquisition",
        color: "#6366f1",
        createdAt: "2026-01-01"
    },
    {
        id: "team-core-delivery",
        name: "Core Delivery Pod",
        departmentId: "dept-delivery",
        departmentName: "Delivery",
        description: "Sprint delivery and milestone deliverables",
        color: "#0ea5e9",
        createdAt: "2026-01-01"
    },
    {
        id: "team-tier1-support",
        name: "Tier-1 Support Pod",
        departmentId: "dept-operations",
        departmentName: "Operations",
        description: "Ticket triage and SLA desk support",
        color: "#f59e0b",
        createdAt: "2026-01-01"
    },
    {
        id: "team-billing-ops",
        name: "Revenue & Billing Team",
        departmentId: "dept-finance",
        departmentName: "Finance",
        description: "Invoices, receivables, and payment tracking",
        color: "#10b981",
        createdAt: "2026-01-01"
    }
];
const VALID_CRM_TABS = {
    "my-work": "my-work",
    "my_work": "my-work",
    "work": "my-work",
    "dashboard": "dashboard",
    "leads": "leads",
    "lead": "leads",
    "deals": "deals",
    "deal": "deals",
    "clients": "clients",
    "client": "clients",
    "agreements": "agreements",
    "agreement": "agreements",
    "contracts": "agreements",
    "projects": "projects",
    "project": "projects",
    "resource-capacity": "resource-capacity",
    "resource_capacity": "resource-capacity",
    "capacity": "resource-capacity",
    "resources": "resource-capacity",
    "billing": "billing",
    "invoices": "billing",
    "support": "support",
    "tickets": "support",
    "team": "team",
    "teams": "team",
    "operators": "team",
    "communication": "communication",
    "chat": "communication",
    "comms": "communication",
    "ai-intelligence": "ai-intelligence",
    "ai_intelligence": "ai-intelligence",
    "ai": "ai-intelligence",
    "intelligence": "ai-intelligence",
    "settings": "settings"
};
function resolveCrmTab(tabParam) {
    if (!tabParam) return "dashboard";
    const normalized = tabParam.toLowerCase().trim();
    return VALID_CRM_TABS[normalized] || "dashboard";
}
function useCrmPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Read initial tab from URL: ?crm_tab=... or ?tab=... or ?subtab=...
    const initialCrmTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCrmPage.useMemo[initialCrmTab]": ()=>{
            const fromCrmTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_tab");
            if (fromCrmTab && VALID_CRM_TABS[fromCrmTab.toLowerCase().trim()]) {
                return resolveCrmTab(fromCrmTab);
            }
            const fromTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("tab");
            if (fromTab && fromTab.toLowerCase() !== "crm" && VALID_CRM_TABS[fromTab.toLowerCase().trim()]) {
                return resolveCrmTab(fromTab);
            }
            const fromSubtab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab");
            if (fromSubtab && VALID_CRM_TABS[fromSubtab.toLowerCase().trim()]) {
                return resolveCrmTab(fromSubtab);
            }
            return "dashboard";
        }
    }["useCrmPage.useMemo[initialCrmTab]"], [
        searchParams
    ]);
    const [activeTab, setActiveTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCrmTab);
    const [activeSubTab, setActiveSubTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCrmPage.useState": ()=>(searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab")) || ""
    }["useCrmPage.useState"]);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Update URL parameters when activeTab changes
    const setActiveTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmPage.useCallback[setActiveTab]": (tab, subTab)=>{
            setActiveTabState(tab);
            if (subTab !== undefined) {
                setActiveSubTabState(subTab);
            }
            const updates = {
                tab: "crm",
                crm_tab: tab,
                crm_subtab: subTab !== undefined ? subTab : null
            };
            // Clean up entity-specific query parameters when navigating away from their owning tab
            if (tab !== "support") {
                updates.ticket_id = null;
                updates.ticket = null;
            }
            if (tab !== "projects") {
                updates.projectId = null;
            }
            if (tab !== "clients") {
                updates.clientId = null;
                updates.client_id = null;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])(updates);
        }
    }["useCrmPage.useCallback[setActiveTab]"], []);
    const setActiveSubTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmPage.useCallback[setActiveSubTab]": (subTab)=>{
            setActiveSubTabState(subTab);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "crm",
                crm_tab: activeTab,
                crm_subtab: subTab || null
            });
        }
    }["useCrmPage.useCallback[setActiveSubTab]"], [
        activeTab
    ]);
    // Sync state when browser Back/Forward navigation occurs (popstate)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCrmPage.useEffect": ()=>{
            const handlePopState = {
                "useCrmPage.useEffect.handlePopState": ()=>{
                    const params = new URLSearchParams(window.location.search);
                    const urlCrmTab = params.get("crm_tab");
                    if (urlCrmTab && VALID_CRM_TABS[urlCrmTab.toLowerCase().trim()]) {
                        setActiveTabState(resolveCrmTab(urlCrmTab));
                    }
                    const urlSubTab = params.get("crm_subtab");
                    if (urlSubTab !== null) {
                        setActiveSubTabState(urlSubTab);
                    }
                }
            }["useCrmPage.useEffect.handlePopState"];
            window.addEventListener("popstate", handlePopState);
            return ({
                "useCrmPage.useEffect": ()=>window.removeEventListener("popstate", handlePopState)
            })["useCrmPage.useEffect"];
        }
    }["useCrmPage.useEffect"], []);
    // Sync state when Next.js searchParams change externally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCrmPage.useEffect": ()=>{
            const urlCrmTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_tab");
            if (urlCrmTab && VALID_CRM_TABS[urlCrmTab.toLowerCase().trim()]) {
                const resolved = resolveCrmTab(urlCrmTab);
                setActiveTabState(resolved);
            }
            const urlSubTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab");
            if (urlSubTab !== undefined) {
                setActiveSubTabState(urlSubTab || "");
            }
        }
    }["useCrmPage.useEffect"], [
        searchParams
    ]);
    // Ensure ?tab=crm and ?crm_tab= are present in URL on mount and clean up orphaned query params
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCrmPage.useEffect": ()=>{
            const currentTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("tab");
            const currentCrmTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_tab");
            const currentSubTab = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_subtab");
            const currentTicketId = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("ticket_id")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("ticket"));
            const updates = {};
            if ((currentTab === null || currentTab === void 0 ? void 0 : currentTab.toLowerCase()) !== "crm") {
                updates.tab = "crm";
            }
            if (!currentCrmTab) {
                updates.crm_tab = activeTab;
            }
            if (activeSubTab && !currentSubTab) {
                updates.crm_subtab = activeSubTab;
            }
            // Clean up orphaned ticket_id if currently on another tab (e.g. billing)
            if (activeTab !== "support" && currentTicketId) {
                updates.ticket_id = null;
                updates.ticket = null;
            }
            // Clean up foreign parameters leaked from other modules (Mail, Settings, Reels, etc.)
            const foreignParams = [
                "subtab",
                "child",
                "chaild",
                "mailId",
                "folder",
                "compose",
                "section",
                "play",
                "reelId",
                "playIndex"
            ];
            foreignParams.forEach({
                "useCrmPage.useEffect": (k)=>{
                    if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.has(k)) {
                        updates[k] = null;
                    }
                }
            }["useCrmPage.useEffect"]);
            if (Object.keys(updates).length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])(updates);
            }
        }
    }["useCrmPage.useEffect"], [
        activeTab
    ]);
    // Clean up CRM parameters when navigating away from CRM.
    // We unconditionally remove them on unmount — the component only unmounts when
    // leaving CRM, so there is no risk of removing params that are still needed.
    // (The previous tab-based guard was unreliable because the URL `tab` value
    //  may still read 'crm' at teardown time if navigation updates the URL async.)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCrmPage.useEffect": ()=>{
            return ({
                "useCrmPage.useEffect": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const search = new URLSearchParams(window.location.search);
                    search.delete("crm_tab");
                    search.delete("crm_subtab");
                    search.delete("crm_modal");
                    search.delete("ticket_id");
                    search.delete("ticket");
                    search.delete("projectId");
                    search.delete("clientId");
                    search.delete("client_id");
                    const qs = search.toString();
                    window.history.replaceState({}, '', qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
                }
            })["useCrmPage.useEffect"];
        }
    }["useCrmPage.useEffect"], []);
    // Data collections — start empty, rehydrated from localStorage on mount, then synced with APIs
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deals, setDeals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [invoices, setInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teamMembers, setTeamMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customRoles, setCustomRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SYSTEM_ROLES);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_DEPARTMENTS);
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_TEAMS);
    const [isLoadingData, setIsLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from local storage cache on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCrmPage.useEffect": ()=>{
            try {
                const savedLeads = localStorage.getItem("pingdart_crm_leads");
                if (savedLeads) setLeads(JSON.parse(savedLeads));
                const savedDeals = localStorage.getItem("pingdart_crm_deals");
                if (savedDeals) setDeals(JSON.parse(savedDeals));
                const savedClients = localStorage.getItem("pingdart_crm_clients");
                if (savedClients) setClients(JSON.parse(savedClients));
                const savedProjects = localStorage.getItem("pingdart_crm_projects");
                if (savedProjects) setProjects(JSON.parse(savedProjects));
                const savedInvoices = localStorage.getItem("pingdart_crm_invoices");
                if (savedInvoices) setInvoices(JSON.parse(savedInvoices));
                const savedTeam = localStorage.getItem("pingdart_crm_team");
                if (savedTeam) setTeamMembers(JSON.parse(savedTeam));
                const savedDepts = localStorage.getItem("pingdart_crm_departments");
                if (savedDepts) setDepartments(JSON.parse(savedDepts));
                const savedTeams = localStorage.getItem("pingdart_crm_teams");
                if (savedTeams) setTeams(JSON.parse(savedTeams));
                const savedRoles = localStorage.getItem("pingdart_crm_roles");
                if (savedRoles) {
                    const parsed = JSON.parse(savedRoles);
                    // Merge: system roles always take precedence for read-only fields, custom roles are stored
                    setCustomRoles(parsed);
                }
            } catch (e) {}
        }
    }["useCrmPage.useEffect"], []);
    // Save changes to local cache
    const persistState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmPage.useCallback[persistState]": (key, value)=>{
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {}
        }
    }["useCrmPage.useCallback[persistState]"], []);
    // Sync with Backend APIs
    const refetchCrmData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmPage.useCallback[refetchCrmData]": async ()=>{
            try {
                var _leadsRes_value_data, _leadsRes_value_data1, _dealsRes_value_data, _dealsRes_value_data1, _clientsRes_value_data, _clientsRes_value_data1, _projectsRes_value_data, _projectsRes_value_data1, _invoicesRes_value_data, _invoicesRes_value_data1, _ticketsRes_value_data, _ticketsRes_value_data1;
                setIsLoadingData(true);
                const [leadsRes, dealsRes, clientsRes, projectsRes, invoicesRes, ticketsRes] = await Promise.allSettled([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/leads"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/deals"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/clients"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/projects"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/invoices"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/tickets")
                ]);
                if (leadsRes.status === "fulfilled" && ((_leadsRes_value_data = leadsRes.value.data) === null || _leadsRes_value_data === void 0 ? void 0 : _leadsRes_value_data.success) && Array.isArray((_leadsRes_value_data1 = leadsRes.value.data) === null || _leadsRes_value_data1 === void 0 ? void 0 : _leadsRes_value_data1.leads)) {
                    const fetchedLeads = leadsRes.value.data.leads;
                    if (fetchedLeads.length > 0 || !localStorage.getItem("pingdart_crm_leads")) {
                        setLeads(fetchedLeads);
                        persistState("pingdart_crm_leads", fetchedLeads);
                    }
                }
                if (dealsRes.status === "fulfilled" && ((_dealsRes_value_data = dealsRes.value.data) === null || _dealsRes_value_data === void 0 ? void 0 : _dealsRes_value_data.success) && Array.isArray((_dealsRes_value_data1 = dealsRes.value.data) === null || _dealsRes_value_data1 === void 0 ? void 0 : _dealsRes_value_data1.deals)) {
                    const fetchedDeals = dealsRes.value.data.deals;
                    if (fetchedDeals.length > 0 || !localStorage.getItem("pingdart_crm_deals")) {
                        setDeals(fetchedDeals);
                        persistState("pingdart_crm_deals", fetchedDeals);
                    }
                }
                let currentClients = [];
                if (clientsRes.status === "fulfilled" && ((_clientsRes_value_data = clientsRes.value.data) === null || _clientsRes_value_data === void 0 ? void 0 : _clientsRes_value_data.success) && Array.isArray((_clientsRes_value_data1 = clientsRes.value.data) === null || _clientsRes_value_data1 === void 0 ? void 0 : _clientsRes_value_data1.clients)) {
                    const fetchedClients = clientsRes.value.data.clients.map({
                        "useCrmPage.useCallback[refetchCrmData].fetchedClients": (c)=>{
                            var _c_company;
                            return {
                                ...c,
                                logoUrl: c.logoUrl || c.logo || ((_c_company = c.company) === null || _c_company === void 0 ? void 0 : _c_company.logoUrl) || undefined
                            };
                        }
                    }["useCrmPage.useCallback[refetchCrmData].fetchedClients"]);
                    if (fetchedClients.length > 0 || !localStorage.getItem("pingdart_crm_clients")) {
                        setClients(fetchedClients);
                        persistState("pingdart_crm_clients", fetchedClients);
                        currentClients = fetchedClients;
                    }
                } else {
                    try {
                        const stored = localStorage.getItem("pingdart_crm_clients");
                        if (stored) currentClients = JSON.parse(stored);
                    } catch (e) {}
                }
                let fetchedProjects = [];
                if (projectsRes.status === "fulfilled" && ((_projectsRes_value_data = projectsRes.value.data) === null || _projectsRes_value_data === void 0 ? void 0 : _projectsRes_value_data.success) && Array.isArray((_projectsRes_value_data1 = projectsRes.value.data) === null || _projectsRes_value_data1 === void 0 ? void 0 : _projectsRes_value_data1.projects)) {
                    fetchedProjects = projectsRes.value.data.projects.map({
                        "useCrmPage.useCallback[refetchCrmData]": (p)=>{
                            var _p_client, _p_client_company, _p_client1, _p_client2;
                            return {
                                ...p,
                                clientId: p.clientId || p.client_id || ((_p_client = p.client) === null || _p_client === void 0 ? void 0 : _p_client.id),
                                clientName: p.clientName || ((_p_client1 = p.client) === null || _p_client1 === void 0 ? void 0 : (_p_client_company = _p_client1.company) === null || _p_client_company === void 0 ? void 0 : _p_client_company.name) || ((_p_client2 = p.client) === null || _p_client2 === void 0 ? void 0 : _p_client2.companyName) || p.client && `${p.client.clientCode || ""}`,
                                code: p.code || p.project_code || `PRJ-${p.id}`
                            };
                        }
                    }["useCrmPage.useCallback[refetchCrmData]"]);
                }
                // Check current project pool
                let activeProjectsList = fetchedProjects.length > 0 ? fetchedProjects : [];
                if (activeProjectsList.length === 0) {
                    try {
                        const cachedProjectsStr = localStorage.getItem("pingdart_crm_projects");
                        if (cachedProjectsStr) activeProjectsList = JSON.parse(cachedProjectsStr);
                    } catch (e) {}
                }
                // If projects list is empty and we have registered clients, auto-seed delivery projects
                if (activeProjectsList.length === 0 && currentClients.length > 0) {
                    activeProjectsList = currentClients.map({
                        "useCrmPage.useCallback[refetchCrmData]": (c)=>({
                                id: `prj-${c.id}`,
                                clientId: c.id,
                                clientName: c.companyName,
                                name: `${c.companyName} — Implementation & Delivery`,
                                code: `PRJ-${(c.clientCode || c.companyName.slice(0, 4)).replace(/[^a-zA-Z0-9]/g, "").toUpperCase() || "CLI"}-01`,
                                status: "in_progress",
                                priority: "medium",
                                budget: 50000,
                                spent: 12500,
                                currency: c.currency || "INR",
                                startDate: new Date().toISOString().split("T")[0],
                                targetEndDate: new Date(Date.now() + 90 * 86400000).toISOString().split("T")[0],
                                milestonesCount: 3,
                                completedMilestonesCount: 1,
                                healthScore: 96,
                                scheduleStatus: "green",
                                budgetStatus: "green",
                                resourceStatus: "green",
                                clientSentimentStatus: "green"
                            })
                    }["useCrmPage.useCallback[refetchCrmData]"]);
                }
                if (activeProjectsList.length > 0) {
                    setProjects(activeProjectsList);
                    persistState("pingdart_crm_projects", activeProjectsList);
                }
                if (invoicesRes.status === "fulfilled" && ((_invoicesRes_value_data = invoicesRes.value.data) === null || _invoicesRes_value_data === void 0 ? void 0 : _invoicesRes_value_data.success) && Array.isArray((_invoicesRes_value_data1 = invoicesRes.value.data) === null || _invoicesRes_value_data1 === void 0 ? void 0 : _invoicesRes_value_data1.invoices)) {
                    const fetchedInvoices = invoicesRes.value.data.invoices;
                    if (fetchedInvoices.length > 0 || !localStorage.getItem("pingdart_crm_invoices")) {
                        setInvoices(fetchedInvoices);
                        persistState("pingdart_crm_invoices", fetchedInvoices);
                    }
                }
                if (ticketsRes.status === "fulfilled" && ((_ticketsRes_value_data = ticketsRes.value.data) === null || _ticketsRes_value_data === void 0 ? void 0 : _ticketsRes_value_data.success) && Array.isArray((_ticketsRes_value_data1 = ticketsRes.value.data) === null || _ticketsRes_value_data1 === void 0 ? void 0 : _ticketsRes_value_data1.tickets)) {
                    const fetchedTickets = ticketsRes.value.data.tickets;
                    if (fetchedTickets.length > 0) {
                        setTickets(fetchedTickets);
                    }
                }
            } catch (err) {
                console.warn("[CRM] API fetch skipped or network offline, using cached CRM data:", err);
            } finally{
                setIsLoadingData(false);
            }
        }
    }["useCrmPage.useCallback[refetchCrmData]"], [
        persistState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCrmPage.useEffect": ()=>{
            refetchCrmData();
        }
    }["useCrmPage.useEffect"], [
        refetchCrmData
    ]);
    // ── Handlers ───────────────────────────────────────────────────────────────
    const handleAddLead = async (lead)=>{
        const tempId = `lead-${Date.now()}`;
        const newLead = {
            ...lead,
            id: tempId,
            createdAt: new Date().toISOString()
        };
        const next = [
            newLead,
            ...leads
        ];
        setLeads(next);
        persistState("pingdart_crm_leads", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added lead: ${newLead.title}`);
        try {
            var _res_data, _res_data1;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/leads", lead);
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.lead)) {
                const serverLead = res.data.lead;
                setLeads((prev)=>prev.map((l)=>l.id === tempId ? {
                            ...l,
                            id: serverLead.id,
                            ...serverLead
                        } : l));
            }
        } catch (err) {
            console.warn("[CRM] createLead backend sync skipped, lead stored locally:", err);
        }
    };
    const handleUpdateLeadStatus = async (leadId, newStatus)=>{
        const next = leads.map((l)=>l.id === leadId ? {
                ...l,
                leadStatus: newStatus
            } : l);
        setLeads(next);
        persistState("pingdart_crm_leads", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Updated lead status to ${newStatus}`);
        if (typeof leadId === "number" || !String(leadId).startsWith("lead-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].put(`/crm/leads/${leadId}`, {
                    leadStatus: newStatus
                });
            } catch (err) {
                console.warn("[CRM] updateLead status sync skipped:", err);
            }
        }
    };
    const handleUpdateLead = async (leadId, updates)=>{
        const next = leads.map((l)=>l.id === leadId ? {
                ...l,
                ...updates
            } : l);
        setLeads(next);
        persistState("pingdart_crm_leads", next);
        if (typeof leadId === "number" || !String(leadId).startsWith("lead-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].put(`/crm/leads/${leadId}`, updates);
            } catch (err) {
                console.warn("[CRM] updateLead backend sync skipped:", err);
            }
        }
    };
    const handleDeleteLead = async (leadId)=>{
        const next = leads.filter((l)=>l.id !== leadId);
        setLeads(next);
        persistState("pingdart_crm_leads", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Lead deleted");
        if (typeof leadId === "number" || !String(leadId).startsWith("lead-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].delete(`/crm/leads/${leadId}`);
            } catch (err) {
                console.warn("[CRM] deleteLead backend sync skipped:", err);
            }
        }
    };
    /**
   * 1-Click Zero-Loss Conversion: Lead → Contact & Company → Deal → Client & Project!
   */ const handleConvertLead = async (leadId)=>{
        const targetLead = leads.find((l)=>l.id === leadId);
        if (!targetLead) return;
        // 1. Create Deal
        const newDeal = {
            id: `deal-${Date.now()}`,
            title: targetLead.title,
            companyName: targetLead.companyName || targetLead.title,
            customerName: `${targetLead.firstName || ""} ${targetLead.lastName || ""}`.trim() || "Primary Contact",
            dealValue: targetLead.estimatedValue || 25000,
            currency: targetLead.currency || "USD",
            stage: "won",
            winProbability: 100,
            priority: targetLead.rating === "Hot" ? "high" : "medium",
            isWon: true
        };
        // 2. Create Client Workspace
        const code = `CLI-${(targetLead.companyName || "CUST").replace(/[^a-zA-Z0-9]/g, "").slice(0, 4).toUpperCase()}-${Date.now().toString().slice(-4)}`;
        const newClient = {
            id: `client-${Date.now()}`,
            clientCode: code,
            companyName: targetLead.companyName || targetLead.title,
            primaryContactName: `${targetLead.firstName || ""} ${targetLead.lastName || ""}`.trim() || "Primary Contact",
            email: targetLead.email,
            phone: targetLead.phone,
            status: "active",
            supportTier: "Standard",
            healthScore: targetLead.aiScore || 95,
            lifetimeValue: targetLead.estimatedValue || 25000,
            projectsCount: 1,
            agreementsCount: 1,
            invoicesCount: 1
        };
        // 3. Create Project
        const newProject = {
            id: `prj-${Date.now()}`,
            clientId: newClient.id,
            clientName: newClient.companyName,
            name: `${targetLead.title} Delivery`,
            code: `PRJ-${code.slice(4)}`,
            status: "planning",
            priority: "high",
            budget: targetLead.estimatedValue || 25000,
            spent: 0,
            currency: targetLead.currency || "USD",
            milestonesCount: 3,
            completedMilestonesCount: 0
        };
        // 4. Create Initial Invoice
        const newInvoice = {
            id: `inv-${Date.now()}`,
            clientId: newClient.id,
            clientName: newClient.companyName,
            invoiceNumber: `INV-${Date.now().toString().slice(-4)}`,
            amount: (targetLead.estimatedValue || 25000) * 0.4,
            total: (targetLead.estimatedValue || 25000) * 0.4,
            currency: targetLead.currency || "USD",
            issueDate: new Date().toISOString().split("T")[0],
            dueDate: new Date(Date.now() + 86400000 * 14).toISOString().split("T")[0],
            status: "Sent"
        };
        // Update States optimistically
        const nextLeads = leads.map((l)=>l.id === leadId ? {
                ...l,
                leadStatus: "Converted",
                isConverted: true
            } : l);
        const nextDeals = [
            newDeal,
            ...deals
        ];
        const nextClients = [
            newClient,
            ...clients
        ];
        const nextProjects = [
            newProject,
            ...projects
        ];
        const nextInvoices = [
            newInvoice,
            ...invoices
        ];
        setLeads(nextLeads);
        setDeals(nextDeals);
        setClients(nextClients);
        setProjects(nextProjects);
        setInvoices(nextInvoices);
        persistState("pingdart_crm_leads", nextLeads);
        persistState("pingdart_crm_deals", nextDeals);
        persistState("pingdart_crm_clients", nextClients);
        persistState("pingdart_crm_projects", nextProjects);
        persistState("pingdart_crm_invoices", nextInvoices);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`⚡ Converted "${targetLead.title}" into Client ${newClient.clientCode} & Project ${newProject.name}!`);
        // Sync conversion with backend API
        if (typeof leadId === "number" || !String(leadId).startsWith("lead-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post(`/crm/leads/${leadId}/convert`, {
                    projectName: newProject.name,
                    projectBudget: newProject.budget
                });
            } catch (err) {
                console.warn("[CRM] convertLead backend sync skipped:", err);
            }
        }
    };
    const handleAddDeal = async (deal)=>{
        const tempId = `deal-${Date.now()}`;
        const newDeal = {
            ...deal,
            id: tempId
        };
        const next = [
            newDeal,
            ...deals
        ];
        setDeals(next);
        persistState("pingdart_crm_deals", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Created deal: ${newDeal.title}`);
        try {
            var _res_data, _res_data1;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/deals", deal);
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.deal)) {
                const serverDeal = res.data.deal;
                setDeals((prev)=>prev.map((d)=>d.id === tempId ? {
                            ...d,
                            id: serverDeal.id,
                            ...serverDeal
                        } : d));
            }
        } catch (err) {
            console.warn("[CRM] createDeal backend sync skipped, deal stored locally:", err);
        }
    };
    const handleUpdateDealStage = async (dealId, stage)=>{
        const next = deals.map((d)=>d.id === dealId ? {
                ...d,
                stage,
                isWon: stage === "won"
            } : d);
        setDeals(next);
        persistState("pingdart_crm_deals", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Moved deal to ${stage}`);
        if (typeof dealId === "number" || !String(dealId).startsWith("deal-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].put(`/crm/deals/${dealId}`, {
                    stage
                });
            } catch (err) {
                console.warn("[CRM] updateDeal stage sync skipped:", err);
            }
        }
    };
    const handleUpdateDeal = async (dealId, updates)=>{
        const next = deals.map((d)=>d.id === dealId ? {
                ...d,
                ...updates
            } : d);
        setDeals(next);
        persistState("pingdart_crm_deals", next);
        if (typeof dealId === "number" || !String(dealId).startsWith("deal-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].put(`/crm/deals/${dealId}`, updates);
            } catch (err) {
                console.warn("[CRM] updateDeal backend sync skipped:", err);
            }
        }
    };
    const handleDeleteDeal = async (dealId)=>{
        const next = deals.filter((d)=>d.id !== dealId);
        setDeals(next);
        persistState("pingdart_crm_deals", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Deal deleted");
        if (typeof dealId === "number" || !String(dealId).startsWith("deal-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].delete(`/crm/deals/${dealId}`);
            } catch (err) {
                console.warn("[CRM] deleteDeal backend sync skipped:", err);
            }
        }
    };
    const handleAddClient = async (clientData)=>{
        const tempId = `cli-${Date.now()}`;
        var _clientData_healthScore, _clientData_lifetimeValue;
        const newClient = {
            id: tempId,
            clientCode: clientData.clientCode || `CLI-${String(Date.now()).slice(-4)}`,
            companyName: clientData.companyName || "New Client",
            primaryContactName: clientData.primaryContactName || "Client Contact",
            email: clientData.email || "",
            phone: clientData.phone || "",
            status: clientData.status || "active",
            supportTier: clientData.supportTier || "Standard Business",
            healthScore: (_clientData_healthScore = clientData.healthScore) !== null && _clientData_healthScore !== void 0 ? _clientData_healthScore : 90,
            lifetimeValue: (_clientData_lifetimeValue = clientData.lifetimeValue) !== null && _clientData_lifetimeValue !== void 0 ? _clientData_lifetimeValue : 0,
            renewalDate: clientData.renewalDate || "",
            projectsCount: 0,
            agreementsCount: 0,
            invoicesCount: 0
        };
        const next = [
            newClient,
            ...clients
        ];
        setClients(next);
        persistState("pingdart_crm_clients", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Client added: ${newClient.companyName}`);
        try {
            var _res_data, _res_data1, _res_data2;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/clients", {
                companyName: newClient.companyName,
                clientCode: newClient.clientCode,
                contactName: newClient.primaryContactName,
                email: newClient.email,
                phone: newClient.phone,
                status: newClient.status,
                supportTier: newClient.supportTier,
                lifetimeValue: newClient.lifetimeValue,
                renewalDate: newClient.renewalDate,
                logoUrl: newClient.logoUrl,
                legalEntityName: newClient.legalEntityName,
                website: newClient.website,
                industry: newClient.industry,
                address: newClient.address,
                city: newClient.city,
                state: newClient.state,
                country: newClient.country,
                postalCode: newClient.postalCode,
                gstin: newClient.gstin,
                pan: newClient.pan,
                taxId: newClient.taxId,
                vatNumber: newClient.vatNumber,
                placeOfSupply: newClient.placeOfSupply
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && (((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.client) || ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.data))) {
                const serverClient = res.data.client || res.data.data;
                setClients((prev)=>{
                    const updated = prev.map((c)=>c.id === tempId ? {
                            ...c,
                            ...serverClient
                        } : c);
                    persistState("pingdart_crm_clients", updated);
                    return updated;
                });
            }
        } catch (err) {
            console.warn("[CRM] createClient backend sync skipped:", err);
        }
    };
    const handleUpdateClient = async (clientId, updates)=>{
        setClients((prev)=>{
            const next = prev.map((c)=>String(c.id) === String(clientId) ? {
                    ...c,
                    ...updates
                } : c);
            persistState("pingdart_crm_clients", next);
            return next;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Client details updated.");
        if (!String(clientId).startsWith("cli-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].put(`/crm/clients/${clientId}`, {
                    companyName: updates.companyName,
                    clientCode: updates.clientCode,
                    contactName: updates.primaryContactName,
                    email: updates.email,
                    phone: updates.phone,
                    status: updates.status,
                    supportTier: updates.supportTier,
                    lifetimeValue: updates.lifetimeValue,
                    renewalDate: updates.renewalDate,
                    healthScore: updates.healthScore,
                    logoUrl: updates.logoUrl,
                    legalEntityName: updates.legalEntityName,
                    website: updates.website,
                    industry: updates.industry,
                    address: updates.address,
                    city: updates.city,
                    state: updates.state,
                    country: updates.country,
                    postalCode: updates.postalCode,
                    gstin: updates.gstin,
                    pan: updates.pan,
                    taxId: updates.taxId,
                    vatNumber: updates.vatNumber,
                    placeOfSupply: updates.placeOfSupply
                });
            } catch (err) {
                console.warn("[CRM] updateClient backend sync skipped:", err);
            }
        }
    };
    const handleDeleteClient = async (clientId)=>{
        const toDelete = clients.find((c)=>String(c.id) === String(clientId));
        setClients((prev)=>{
            const next = prev.filter((c)=>String(c.id) !== String(clientId));
            persistState("pingdart_crm_clients", next);
            return next;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Client removed: ${(toDelete === null || toDelete === void 0 ? void 0 : toDelete.companyName) || "Account"}`);
        if (!String(clientId).startsWith("cli-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].delete(`/crm/clients/${clientId}`);
            } catch (err) {
                console.warn("[CRM] deleteClient backend sync skipped:", err);
            }
        }
    };
    const handleAddProject = async (project)=>{
        const tempId = `prj-${Date.now()}`;
        const newProject = {
            ...project,
            id: tempId
        };
        const next = [
            newProject,
            ...projects
        ];
        setProjects(next);
        persistState("pingdart_crm_projects", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Created project: ${newProject.name}`);
        try {
            var _res_data, _res_data1;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/projects", {
                name: project.name,
                clientId: project.clientId,
                budget: project.budget,
                currency: project.currency,
                startDate: project.startDate,
                targetEndDate: project.targetEndDate,
                status: project.status
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.project)) {
                const serverProj = res.data.project;
                setProjects((prev)=>prev.map((p)=>p.id === tempId ? {
                            ...p,
                            id: serverProj.id,
                            code: serverProj.code
                        } : p));
            }
        } catch (err) {
            console.warn("[CRM] createProject backend sync skipped:", err);
        }
    };
    const handleUpdateProject = async (projectId, updates)=>{
        const next = projects.map((p)=>String(p.id) === String(projectId) ? {
                ...p,
                ...updates
            } : p);
        setProjects(next);
        persistState("pingdart_crm_projects", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project updated");
        if (!String(projectId).startsWith("prj-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].put(`/crm/projects/${projectId}`, updates);
            } catch (err) {
                console.warn("[CRM] updateProject backend sync skipped:", err);
            }
        }
    };
    const handleDeleteProject = async (projectId)=>{
        const next = projects.filter((p)=>String(p.id) !== String(projectId));
        setProjects(next);
        persistState("pingdart_crm_projects", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project removed");
        if (!String(projectId).startsWith("prj-")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].delete(`/crm/projects/${projectId}`);
            } catch (err) {
                console.warn("[CRM] deleteProject backend sync skipped:", err);
            }
        }
    };
    const handleRecordInvoicePayment = (invoiceId, paymentData)=>{
        const nextInvoices = invoices.map((inv)=>{
            if (String(inv.id) === String(invoiceId)) {
                return {
                    ...inv,
                    status: "Paid",
                    paidDate: paymentData.paymentDate || new Date().toISOString().split("T")[0],
                    paymentMethod: paymentData.paymentMethod,
                    transactionId: paymentData.transactionId,
                    paidAmount: paymentData.paidAmount !== undefined ? paymentData.paidAmount : inv.total,
                    paymentNotes: paymentData.notes
                };
            }
            return inv;
        });
        setInvoices(nextInvoices);
        persistState("pingdart_crm_invoices", nextInvoices);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Payment recorded for Invoice! Status updated to Paid.`);
    };
    const handleAddInvoice = (invoiceData)=>{
        const tempId = `inv-${Date.now()}`;
        const newInvoice = {
            ...invoiceData,
            id: tempId
        };
        const nextInvoices = [
            newInvoice,
            ...invoices
        ];
        setInvoices(nextInvoices);
        persistState("pingdart_crm_invoices", nextInvoices);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Generated invoice ${newInvoice.invoiceNumber}`);
    };
    const handleDeleteInvoice = (invoiceId)=>{
        const nextInvoices = invoices.filter((inv)=>String(inv.id) !== String(invoiceId));
        setInvoices(nextInvoices);
        persistState("pingdart_crm_invoices", nextInvoices);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Invoice removed");
    };
    // ── Metrics Calculation ────────────────────────────────────────────────────
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCrmPage.useMemo[metrics]": ()=>{
            const totalLeads = leads.length;
            const activeDeals = deals.filter({
                "useCrmPage.useMemo[metrics].activeDeals": (d)=>d.stage !== "lost"
            }["useCrmPage.useMemo[metrics].activeDeals"]);
            const openDealsCount = deals.filter({
                "useCrmPage.useMemo[metrics]": (d)=>d.stage !== "won" && d.stage !== "lost"
            }["useCrmPage.useMemo[metrics]"]).length;
            const pipelineValue = activeDeals.reduce({
                "useCrmPage.useMemo[metrics].pipelineValue": (sum, d)=>sum + (Number(d.dealValue) || 0)
            }["useCrmPage.useMemo[metrics].pipelineValue"], 0);
            const wonRevenue = deals.filter({
                "useCrmPage.useMemo[metrics].wonRevenue": (d)=>d.stage === "won" || d.isWon
            }["useCrmPage.useMemo[metrics].wonRevenue"]).reduce({
                "useCrmPage.useMemo[metrics].wonRevenue": (sum, d)=>sum + (Number(d.dealValue) || 0)
            }["useCrmPage.useMemo[metrics].wonRevenue"], 0);
            return {
                totalLeads,
                openDealsCount,
                activeClientsCount: clients.length,
                activeProjectsCount: projects.filter({
                    "useCrmPage.useMemo[metrics]": (p)=>p.status === "in_progress" || p.status === "planning"
                }["useCrmPage.useMemo[metrics]"]).length,
                pipelineValue,
                wonRevenue
            };
        }
    }["useCrmPage.useMemo[metrics]"], [
        leads,
        deals,
        clients,
        projects
    ]);
    /** Flush all CRM data from state and localStorage cache. */ const handleClearAllData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmPage.useCallback[handleClearAllData]": ()=>{
            const keys = [
                "pingdart_crm_leads",
                "pingdart_crm_deals",
                "pingdart_crm_clients",
                "pingdart_crm_projects",
                "pingdart_crm_invoices",
                "pingdart_crm_team"
            ];
            keys.forEach({
                "useCrmPage.useCallback[handleClearAllData]": (k)=>{
                    try {
                        localStorage.removeItem(k);
                    } catch (e) {}
                }
            }["useCrmPage.useCallback[handleClearAllData]"]);
            setLeads([]);
            setDeals([]);
            setClients([]);
            setProjects([]);
            setInvoices([]);
            setTickets([]);
            setTeamMembers([]);
            setCustomRoles(DEFAULT_SYSTEM_ROLES);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("All CRM data cleared successfully.");
        }
    }["useCrmPage.useCallback[handleClearAllData]"], []);
    // ── Team Member handlers ────────────────────────────────────────────────
    const AVATAR_COLORS = [
        "bg-indigo-600",
        "bg-emerald-600",
        "bg-blue-600",
        "bg-purple-600",
        "bg-teal-600",
        "bg-rose-600",
        "bg-amber-600"
    ];
    const handleAddTeamMember = (member)=>{
        const initials = member.name.split(" ").map((w)=>w[0]).join("").toUpperCase().slice(0, 2);
        const avatarColor = AVATAR_COLORS[teamMembers.length % AVATAR_COLORS.length];
        const newMember = {
            ...member,
            id: `tm-${Date.now()}`,
            initials,
            avatarColor,
            joinedAt: new Date().toISOString().split("T")[0],
            status: "active"
        };
        const next = [
            ...teamMembers,
            newMember
        ];
        setTeamMembers(next);
        persistState("pingdart_crm_team", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${newMember.name} added to CRM team`);
    };
    const handleUpdateTeamMember = (memberId, updates)=>{
        const next = teamMembers.map((m)=>m.id === memberId ? {
                ...m,
                ...updates
            } : m);
        setTeamMembers(next);
        persistState("pingdart_crm_team", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Team member updated");
    };
    const handleRemoveTeamMember = (memberId)=>{
        const member = teamMembers.find((m)=>m.id === memberId);
        const next = teamMembers.filter((m)=>m.id !== memberId);
        setTeamMembers(next);
        persistState("pingdart_crm_team", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${(member === null || member === void 0 ? void 0 : member.name) || "Member"} removed from CRM team`);
    };
    // ── Role handlers ──────────────────────────────────────────────────────
    const handleAddCustomRole = (name)=>{
        const template = DEFAULT_SYSTEM_ROLES.find((r)=>r.slug === "member");
        const newRole = {
            ...template,
            id: `role-${Date.now()}`,
            name,
            slug: name.toLowerCase().replace(/\s+/g, "-"),
            description: `Custom role: ${name}`,
            isSystem: false,
            color: "#6366f1"
        };
        const next = [
            ...customRoles,
            newRole
        ];
        setCustomRoles(next);
        persistState("pingdart_crm_roles", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Role "${name}" created`);
        return newRole;
    };
    const handleUpdateRole = (roleId, updates)=>{
        const next = customRoles.map((r)=>r.id === roleId ? {
                ...r,
                ...updates
            } : r);
        setCustomRoles(next);
        persistState("pingdart_crm_roles", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Role permissions updated");
    };
    const handleDeleteCustomRole = (roleId)=>{
        const role = customRoles.find((r)=>r.id === roleId);
        if (role === null || role === void 0 ? void 0 : role.isSystem) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("System roles cannot be deleted");
            return;
        }
        const next = customRoles.filter((r)=>r.id !== roleId);
        setCustomRoles(next);
        persistState("pingdart_crm_roles", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Role "${role === null || role === void 0 ? void 0 : role.name}" deleted`);
    };
    // ── Department handlers ────────────────────────────────────────────────
    const handleAddDepartment = (dept)=>{
        const newDept = {
            ...dept,
            id: `dept-${Date.now()}`,
            createdAt: new Date().toISOString().split("T")[0]
        };
        const next = [
            ...departments,
            newDept
        ];
        setDepartments(next);
        persistState("pingdart_crm_departments", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Department "${newDept.name}" created`);
        return newDept;
    };
    const handleUpdateDepartment = (deptId, updates)=>{
        const next = departments.map((d)=>String(d.id) === String(deptId) ? {
                ...d,
                ...updates
            } : d);
        setDepartments(next);
        persistState("pingdart_crm_departments", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Department updated");
    };
    const handleDeleteDepartment = (deptId)=>{
        const dept = departments.find((d)=>String(d.id) === String(deptId));
        const next = departments.filter((d)=>String(d.id) !== String(deptId));
        setDepartments(next);
        persistState("pingdart_crm_departments", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Department "${(dept === null || dept === void 0 ? void 0 : dept.name) || deptId}" deleted`);
    };
    // ── Team Squad handlers ────────────────────────────────────────────────
    const handleAddTeam = (team)=>{
        const newTeam = {
            ...team,
            id: `team-${Date.now()}`,
            createdAt: new Date().toISOString().split("T")[0]
        };
        const next = [
            ...teams,
            newTeam
        ];
        setTeams(next);
        persistState("pingdart_crm_teams", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Team "${newTeam.name}" created`);
        return newTeam;
    };
    const handleUpdateTeam = (teamId, updates)=>{
        const next = teams.map((t)=>String(t.id) === String(teamId) ? {
                ...t,
                ...updates
            } : t);
        setTeams(next);
        persistState("pingdart_crm_teams", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Team updated");
    };
    const handleDeleteTeam = (teamId)=>{
        const team = teams.find((t)=>String(t.id) === String(teamId));
        const next = teams.filter((t)=>String(t.id) !== String(teamId));
        setTeams(next);
        persistState("pingdart_crm_teams", next);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Team "${(team === null || team === void 0 ? void 0 : team.name) || teamId}" deleted`);
    };
    return {
        // Navigation
        activeTab,
        setActiveTab,
        activeSubTab,
        setActiveSubTab,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        searchQuery,
        setSearchQuery,
        // Data
        leads,
        deals,
        clients,
        projects,
        invoices,
        tickets,
        teamMembers,
        customRoles,
        departments,
        teams,
        metrics,
        isLoadingData,
        refetchCrmData,
        // Actions
        handleAddLead,
        handleUpdateLead,
        handleDeleteLead,
        handleUpdateLeadStatus,
        handleConvertLead,
        handleAddDeal,
        handleUpdateDeal,
        handleDeleteDeal,
        handleUpdateDealStage,
        handleAddClient,
        handleUpdateClient,
        handleDeleteClient,
        handleAddProject,
        handleUpdateProject,
        handleDeleteProject,
        handleAddTeamMember,
        handleUpdateTeamMember,
        handleRemoveTeamMember,
        handleAddCustomRole,
        handleUpdateRole,
        handleDeleteCustomRole,
        handleAddDepartment,
        handleUpdateDepartment,
        handleDeleteDepartment,
        handleAddTeam,
        handleUpdateTeam,
        handleDeleteTeam,
        handleAddInvoice,
        handleDeleteInvoice,
        handleRecordInvoicePayment,
        handleClearAllData
    };
}
_s(useCrmPage, "aD46A7SjJwblSMbARYdcJI6V/As=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CRM_CURRENCY_STORAGE_KEY",
    ()=>CRM_CURRENCY_STORAGE_KEY,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCrmCurrency",
    ()=>useCrmCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserCurrency.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CRM_CURRENCY_STORAGE_KEY = "pingdart_crm_currency_mode";
function useCrmCurrency() {
    _s();
    const { currency, symbol: currencySymbol, currencyItem, isIndia, setCurrency, formatAmount: universalFormatAmount, formatCompact: universalFormatCompact, getSymbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"])();
    const setCurrencyMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmCurrency.useCallback[setCurrencyMode]": (mode)=>{
            if (mode === "auto") {
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.removeItem(CRM_CURRENCY_STORAGE_KEY);
                }
                // Fallback to INR or detected
                setCurrency("INR");
            } else {
                setCurrency(mode);
            }
        }
    }["useCrmCurrency.useCallback[setCurrencyMode]"], [
        setCurrency
    ]);
    const formatAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmCurrency.useCallback[formatAmount]": (val, overrideCurrency)=>{
            return universalFormatAmount(val, overrideCurrency);
        }
    }["useCrmCurrency.useCallback[formatAmount]"], [
        universalFormatAmount
    ]);
    const formatCompact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCrmCurrency.useCallback[formatCompact]": (val, overrideCurrency)=>{
            return universalFormatCompact(val, overrideCurrency);
        }
    }["useCrmCurrency.useCallback[formatCompact]"], [
        universalFormatCompact
    ]);
    const info = {
        currency,
        currencySymbol,
        isIndia,
        regionName: currencyItem.country || (isIndia ? "India & South Asia" : "Global Hub"),
        locale: currencyItem.locale || "en-US",
        autoDetected: false,
        detectedCountry: currencyItem.country || "Global",
        detectedTimezone: ("TURBOPACK compile-time truthy", 1) ? Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC" : "TURBOPACK unreachable"
    };
    return {
        ...info,
        currencyItem,
        setCurrencyMode,
        setCurrency,
        formatAmount,
        formatCompact,
        getSymbol
    };
}
_s(useCrmCurrency, "Bg0y3KCRt5pxgaiN9Bq/gycFCsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"]
    ];
});
const __TURBOPACK__default__export__ = useCrmCurrency;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/crm/hooks/useCrmPermissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCrmPermissions",
    ()=>useCrmPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useCrmPermissions(userRole = "Owner", customApprovalRules) {
    _s();
    const approvalRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCrmPermissions.useMemo[approvalRules]": ()=>{
            var _customApprovalRules_dealDiscountThresholdPercent, _customApprovalRules_requireApprovalForBudgetIncrease, _customApprovalRules_requireApprovalForExport;
            return {
                leadConversionPolicy: (customApprovalRules === null || customApprovalRules === void 0 ? void 0 : customApprovalRules.leadConversionPolicy) || "managers_and_admins",
                dealDiscountThresholdPercent: (_customApprovalRules_dealDiscountThresholdPercent = customApprovalRules === null || customApprovalRules === void 0 ? void 0 : customApprovalRules.dealDiscountThresholdPercent) !== null && _customApprovalRules_dealDiscountThresholdPercent !== void 0 ? _customApprovalRules_dealDiscountThresholdPercent : 20,
                requireApprovalForBudgetIncrease: (_customApprovalRules_requireApprovalForBudgetIncrease = customApprovalRules === null || customApprovalRules === void 0 ? void 0 : customApprovalRules.requireApprovalForBudgetIncrease) !== null && _customApprovalRules_requireApprovalForBudgetIncrease !== void 0 ? _customApprovalRules_requireApprovalForBudgetIncrease : true,
                requireApprovalForExport: (_customApprovalRules_requireApprovalForExport = customApprovalRules === null || customApprovalRules === void 0 ? void 0 : customApprovalRules.requireApprovalForExport) !== null && _customApprovalRules_requireApprovalForExport !== void 0 ? _customApprovalRules_requireApprovalForExport : true
            };
        }
    }["useCrmPermissions.useMemo[approvalRules]"], [
        customApprovalRules
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCrmPermissions.useMemo": ()=>{
            switch(userRole){
                case "Owner":
                    return {
                        leadScope: "all",
                        dealScope: "all",
                        clientScope: "all",
                        projectScope: "all",
                        canViewAllLeads: true,
                        canCreateLead: true,
                        canEditLead: true,
                        canDeleteLead: true,
                        canConvertLead: true,
                        canExportLeads: true,
                        canViewAllDeals: true,
                        canCreateDeal: true,
                        canEditDeal: true,
                        canDeleteDeal: true,
                        canChangeDealStage: true,
                        canViewClients: true,
                        canManageClients: true,
                        canCreateAgreements: true,
                        canViewProjects: true,
                        canManageProjects: true,
                        canAssignMembers: true,
                        canManageTickets: true,
                        canSendOmnichannelComms: true,
                        canConfigurePipelines: true,
                        canManageCustomFields: true,
                        canManageMembers: true,
                        canManageRoles: true,
                        canManageSaaSPlan: true,
                        isOwnerOrAdmin: true,
                        financial: {
                            canViewRevenue: true,
                            canViewInvoices: true,
                            canCreateInvoice: true,
                            canViewPayments: true,
                            canRecordPayments: true,
                            canExportFinancials: true
                        },
                        ai: {
                            canUseAi: true,
                            canViewAiInsights: true,
                            canCreateAiAutomations: true,
                            canAccessClientHealthAi: true,
                            canAccessForecasting: true
                        },
                        fieldSecurity: {
                            hideDealValue: false,
                            hideCommission: false,
                            hideProfitMargin: false,
                            hideClientRevenue: false
                        },
                        canConvertDirectly: ({
                            "useCrmPermissions.useMemo": ()=>true
                        })["useCrmPermissions.useMemo"],
                        requiresDiscountApproval: ({
                            "useCrmPermissions.useMemo": ()=>false
                        })["useCrmPermissions.useMemo"],
                        requiresBudgetApproval: ({
                            "useCrmPermissions.useMemo": ()=>false
                        })["useCrmPermissions.useMemo"]
                    };
                case "Admin":
                    return {
                        leadScope: "all",
                        dealScope: "all",
                        clientScope: "all",
                        projectScope: "all",
                        canViewAllLeads: true,
                        canCreateLead: true,
                        canEditLead: true,
                        canDeleteLead: true,
                        canConvertLead: true,
                        canExportLeads: true,
                        canViewAllDeals: true,
                        canCreateDeal: true,
                        canEditDeal: true,
                        canDeleteDeal: true,
                        canChangeDealStage: true,
                        canViewClients: true,
                        canManageClients: true,
                        canCreateAgreements: true,
                        canViewProjects: true,
                        canManageProjects: true,
                        canAssignMembers: true,
                        canManageTickets: true,
                        canSendOmnichannelComms: true,
                        canConfigurePipelines: true,
                        canManageCustomFields: true,
                        canManageMembers: true,
                        canManageRoles: true,
                        canManageSaaSPlan: false,
                        isOwnerOrAdmin: true,
                        financial: {
                            canViewRevenue: true,
                            canViewInvoices: true,
                            canCreateInvoice: true,
                            canViewPayments: true,
                            canRecordPayments: true,
                            canExportFinancials: true
                        },
                        ai: {
                            canUseAi: true,
                            canViewAiInsights: true,
                            canCreateAiAutomations: true,
                            canAccessClientHealthAi: true,
                            canAccessForecasting: true
                        },
                        fieldSecurity: {
                            hideDealValue: false,
                            hideCommission: false,
                            hideProfitMargin: false,
                            hideClientRevenue: false
                        },
                        canConvertDirectly: ({
                            "useCrmPermissions.useMemo": ()=>true
                        })["useCrmPermissions.useMemo"],
                        requiresDiscountApproval: ({
                            "useCrmPermissions.useMemo": (disc)=>disc > approvalRules.dealDiscountThresholdPercent
                        })["useCrmPermissions.useMemo"],
                        requiresBudgetApproval: ({
                            "useCrmPermissions.useMemo": ()=>false
                        })["useCrmPermissions.useMemo"]
                    };
                case "Manager":
                case "Sales Manager":
                    return {
                        leadScope: "all",
                        dealScope: "team",
                        clientScope: "team",
                        projectScope: "team",
                        canViewAllLeads: true,
                        canCreateLead: true,
                        canEditLead: true,
                        canDeleteLead: false,
                        canConvertLead: true,
                        canExportLeads: true,
                        canViewAllDeals: true,
                        canCreateDeal: true,
                        canEditDeal: true,
                        canDeleteDeal: false,
                        canChangeDealStage: true,
                        canViewClients: true,
                        canManageClients: true,
                        canCreateAgreements: true,
                        canViewProjects: true,
                        canManageProjects: true,
                        canAssignMembers: true,
                        canManageTickets: true,
                        canSendOmnichannelComms: true,
                        canConfigurePipelines: false,
                        canManageCustomFields: false,
                        canManageMembers: false,
                        canManageRoles: false,
                        canManageSaaSPlan: false,
                        isOwnerOrAdmin: false,
                        financial: {
                            canViewRevenue: true,
                            canViewInvoices: true,
                            canCreateInvoice: true,
                            canViewPayments: false,
                            canRecordPayments: false,
                            canExportFinancials: false
                        },
                        ai: {
                            canUseAi: true,
                            canViewAiInsights: true,
                            canCreateAiAutomations: false,
                            canAccessClientHealthAi: true,
                            canAccessForecasting: true
                        },
                        fieldSecurity: {
                            hideDealValue: false,
                            hideCommission: false,
                            hideProfitMargin: true,
                            hideClientRevenue: false
                        },
                        canConvertDirectly: ({
                            "useCrmPermissions.useMemo": ()=>true
                        })["useCrmPermissions.useMemo"],
                        requiresDiscountApproval: ({
                            "useCrmPermissions.useMemo": (disc)=>disc > approvalRules.dealDiscountThresholdPercent
                        })["useCrmPermissions.useMemo"],
                        requiresBudgetApproval: ({
                            "useCrmPermissions.useMemo": (inc)=>inc > 5000
                        })["useCrmPermissions.useMemo"]
                    };
                case "Member":
                case "Account Executive":
                default:
                    const isSalesRep = userRole !== "Viewer";
                    return {
                        leadScope: "own",
                        dealScope: "own",
                        clientScope: "own",
                        projectScope: "own",
                        canViewAllLeads: false,
                        canCreateLead: isSalesRep,
                        canEditLead: isSalesRep,
                        canDeleteLead: false,
                        canConvertLead: isSalesRep && approvalRules.leadConversionPolicy === "assigned_sales_rep",
                        canExportLeads: false,
                        canViewAllDeals: false,
                        canCreateDeal: isSalesRep,
                        canEditDeal: isSalesRep,
                        canDeleteDeal: false,
                        canChangeDealStage: isSalesRep,
                        canViewClients: true,
                        canManageClients: false,
                        canCreateAgreements: false,
                        canViewProjects: true,
                        canManageProjects: false,
                        canAssignMembers: false,
                        canManageTickets: isSalesRep,
                        canSendOmnichannelComms: isSalesRep,
                        canConfigurePipelines: false,
                        canManageCustomFields: false,
                        canManageMembers: false,
                        canManageRoles: false,
                        canManageSaaSPlan: false,
                        isOwnerOrAdmin: false,
                        financial: {
                            canViewRevenue: false,
                            canViewInvoices: false,
                            canCreateInvoice: false,
                            canViewPayments: false,
                            canRecordPayments: false,
                            canExportFinancials: false
                        },
                        ai: {
                            canUseAi: isSalesRep,
                            canViewAiInsights: isSalesRep,
                            canCreateAiAutomations: false,
                            canAccessClientHealthAi: false,
                            canAccessForecasting: false
                        },
                        fieldSecurity: {
                            hideDealValue: false,
                            hideCommission: true,
                            hideProfitMargin: true,
                            hideClientRevenue: true
                        },
                        canConvertDirectly: ({
                            "useCrmPermissions.useMemo": (policy)=>(policy || approvalRules.leadConversionPolicy) === "assigned_sales_rep"
                        })["useCrmPermissions.useMemo"],
                        requiresDiscountApproval: ({
                            "useCrmPermissions.useMemo": (disc)=>disc > 0
                        })["useCrmPermissions.useMemo"],
                        requiresBudgetApproval: ({
                            "useCrmPermissions.useMemo": ()=>true
                        })["useCrmPermissions.useMemo"]
                    };
            }
        }
    }["useCrmPermissions.useMemo"], [
        userRole,
        approvalRules
    ]);
}
_s(useCrmPermissions, "mh/qu4iFsBd8onlWu+AKYN1BSD8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/crm/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLIENT_STATUS_CONFIG",
    ()=>CLIENT_STATUS_CONFIG,
    "GLOBAL_COUNTRIES",
    ()=>GLOBAL_COUNTRIES
]);
"use client";
const GLOBAL_COUNTRIES = [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Canada",
    "Australia",
    "Singapore",
    "Germany",
    "France",
    "Saudi Arabia",
    "Japan",
    "Netherlands",
    "Switzerland",
    "South Africa",
    "Brazil",
    "Malaysia",
    "Ireland",
    "New Zealand",
    "Sweden",
    "Spain",
    "Italy",
    "Mexico",
    "Indonesia",
    "Philippines",
    "Qatar",
    "Kuwait",
    "Oman",
    "Bahrain",
    "Hong Kong",
    "South Korea",
    "China",
    "Nigeria",
    "Kenya",
    "Egypt",
    "Israel",
    "Denmark",
    "Norway",
    "Finland",
    "Belgium",
    "Austria",
    "Poland",
    "Portugal",
    "Other"
];
const CLIENT_STATUS_CONFIG = {
    active: {
        label: "Active",
        description: "In operational SLAs & live sprints",
        badgeClasses: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
    },
    onboarding: {
        label: "Onboarding",
        description: "Kickoff & client workspace setup",
        badgeClasses: "bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800"
    },
    lead: {
        label: "Lead",
        description: "Inbound or outbound sales lead",
        badgeClasses: "bg-sky-50 text-sky-700 dark:bg-sky-950/70 dark:text-sky-300 border-sky-200 dark:border-sky-800"
    },
    prospect: {
        label: "Prospect",
        description: "Active commercial discussions & evaluation",
        badgeClasses: "bg-purple-50 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800"
    },
    in_progress: {
        label: "In Progress",
        description: "Contracting, negotiation or delivery",
        badgeClasses: "bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800"
    },
    paused: {
        label: "Paused",
        description: "Account deliverables temporarily frozen",
        badgeClasses: "bg-orange-50 text-orange-700 dark:bg-orange-950/70 dark:text-orange-300 border-orange-200 dark:border-orange-800"
    },
    churned: {
        label: "Churned",
        description: "Contract terminated or discontinued",
        badgeClasses: "bg-rose-50 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border-rose-200 dark:border-rose-800"
    },
    inactive: {
        label: "Inactive",
        description: "Dormant account with no active projects",
        badgeClasses: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700"
    },
    archived: {
        label: "Archived",
        description: "Historical client record kept for audit",
        badgeClasses: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/crm/CrmScreen.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CrmScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmPage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$layout$2f$CrmSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/layout/CrmSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$layout$2f$CrmHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/layout/CrmHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$layout$2f$CrmBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/layout/CrmBottomNav.tsx [app-client] (ecmascript)");
// Screen Tabs
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$DashboardScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$LeadsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$DealsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ClientsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/ClientsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ProjectsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$BillingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/BillingScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$SupportScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/SupportScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$CommunicationScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/CommunicationScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$AgreementsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/SettingsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ResourceCapacityScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/ResourceCapacityScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$TeamScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/TeamScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$DataScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/DataScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$CampaignsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/CampaignsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$TemplatesScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/screens/TemplatesScreen.tsx [app-client] (ecmascript)");
// Common & Modals
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$common$2f$CrmGlobalSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/common/CrmGlobalSearchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$AddLeadModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/AddLeadModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$AddDealModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/AddDealModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$AddProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/AddProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$CommandCenterModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/CommandCenterModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$WorkspaceSwitcherModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/WorkspaceSwitcherModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$UnifiedNotificationsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/UnifiedNotificationsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$OrganizationNetworkModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/OrganizationNetworkModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/types.ts [app-client] (ecmascript)");
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
function CrmScreen(props) {
    _s();
    const { onBack } = props || {};
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const crm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmPage"])();
    const { activeTab, setActiveTab, activeSubTab, setActiveSubTab, isMobileSidebarOpen, setIsMobileSidebarOpen, searchQuery, setSearchQuery, leads, deals, clients, projects, invoices, tickets, teamMembers, customRoles, departments, teams, metrics, handleAddLead, handleUpdateLead, handleUpdateLeadStatus, handleConvertLead, handleAddDeal, handleUpdateDeal, handleUpdateDealStage, handleAddClient, handleUpdateClient, handleDeleteClient, handleAddProject, handleUpdateProject, handleDeleteProject, handleAddTeamMember, handleUpdateTeamMember, handleRemoveTeamMember, handleAddCustomRole, handleUpdateRole, handleDeleteCustomRole, handleAddDepartment, handleUpdateDepartment, handleDeleteDepartment, handleAddTeam, handleUpdateTeam, handleDeleteTeam, handleAddInvoice, handleDeleteInvoice, handleRecordInvoicePayment } = crm;
    // Multi-Workspace Membership — dynamic: internal organization + client portals for all registered clients
    const allWorkspaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CrmScreen.useMemo[allWorkspaces]": ()=>{
            const base = {
                id: "ws-1",
                name: "My Organization",
                tier: "Enterprise",
                seatsUsed: 1,
                seatsTotal: 50,
                storageUsedGb: 0,
                storageTotalGb: 200,
                userRole: "Owner",
                department: "Administration",
                membershipType: "internal_team",
                pingId: ""
            };
            const clientPortals = clients.map({
                "CrmScreen.useMemo[allWorkspaces].clientPortals": (c)=>({
                        id: `ws-client-${c.id}`,
                        name: `${c.companyName} (Client Portal)`,
                        tier: c.supportTier || "Enterprise",
                        seatsUsed: 1,
                        seatsTotal: 10,
                        storageUsedGb: 0,
                        storageTotalGb: 50,
                        userRole: "Client",
                        department: "Client Portal",
                        membershipType: "client_portal_user",
                        isClientViewOnly: true,
                        clientId: c.id,
                        clientName: c.companyName
                    })
            }["CrmScreen.useMemo[allWorkspaces].clientPortals"]);
            return [
                base,
                ...clientPortals
            ];
        }
    }["CrmScreen.useMemo[allWorkspaces]"], [
        clients
    ]);
    const [activeWorkspaceId, setActiveWorkspaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ws-1");
    const activeWorkspace = allWorkspaces.find((w)=>w.id === activeWorkspaceId) || allWorkspaces[0];
    const isClientViewOnly = activeWorkspace.isClientViewOnly === true;
    const handleSwitchToClientPortal = (clientId, clientName)=>{
        setActiveWorkspaceId(`ws-client-${clientId}`);
        setActiveTab("projects");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Connected to Client Portal for ${clientName}`);
    };
    const handleExitClientPortal = ()=>{
        setActiveWorkspaceId("ws-1");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Returned to internal organization CRM");
    };
    // Modal controls
    const [isAddLeadOpen, setIsAddLeadOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddDealOpen, setIsAddDealOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddProjectOpen, setIsAddProjectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCommandCenterOpen, setIsCommandCenterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWorkspaceSwitcherOpen, setIsWorkspaceSwitcherOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNotificationsModalOpen, setIsNotificationsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOrgNetworkModalOpen, setIsOrgNetworkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGlobalSearchOpen, setIsGlobalSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // URL modal sync: ?crm_modal=add_lead | add_deal | add_project | command_center | workspace | notifications | network | search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrmScreen.useEffect": ()=>{
            const modalParam = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("crm_modal")) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("modal"));
            if (modalParam) {
                const m = modalParam.toLowerCase();
                if (m === "add_lead" || m === "lead") setIsAddLeadOpen(true);
                else if (m === "add_deal" || m === "deal") setIsAddDealOpen(true);
                else if (m === "add_project" || m === "project") setIsAddProjectOpen(true);
                else if (m === "command_center" || m === "commands") setIsCommandCenterOpen(true);
                else if (m === "workspace" || m === "workspaces") setIsWorkspaceSwitcherOpen(true);
                else if (m === "notifications") setIsNotificationsModalOpen(true);
                else if (m === "search") setIsGlobalSearchOpen(true);
                else if (m === "network") setIsOrgNetworkModalOpen(true);
            }
        }
    }["CrmScreen.useEffect"], [
        searchParams
    ]);
    const handleOpenModal = (modalName, setter)=>{
        setter(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            crm_modal: modalName
        });
    };
    const handleCloseModal = (setter)=>{
        setter(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            crm_modal: null
        });
    };
    // Security Rule: When switched to client portal view, redirect away from internal sales tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrmScreen.useEffect": ()=>{
            if (isClientViewOnly) {
                const restrictedTabs = [
                    "dashboard",
                    "leads",
                    "deals",
                    "settings",
                    "ai-intelligence"
                ];
                if (restrictedTabs.includes(activeTab)) {
                    setActiveTab("projects");
                }
            }
        }
    }["CrmScreen.useEffect"], [
        isClientViewOnly,
        activeTab,
        setActiveTab
    ]);
    // Global ⌘K / Ctrl+K keyboard shortcut listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrmScreen.useEffect": ()=>{
            const handleKeyDown = {
                "CrmScreen.useEffect.handleKeyDown": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                        e.preventDefault();
                        setIsGlobalSearchOpen({
                            "CrmScreen.useEffect.handleKeyDown": (prev)=>{
                                const next = !prev;
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                                    crm_modal: next ? "search" : null
                                });
                                return next;
                            }
                        }["CrmScreen.useEffect.handleKeyDown"]);
                    }
                }
            }["CrmScreen.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "CrmScreen.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["CrmScreen.useEffect"];
        }
    }["CrmScreen.useEffect"], []);
    const handleSelectWorkspace = (wsId)=>{
        setActiveWorkspaceId(wsId);
    };
    const handleOpenAddModal = (type)=>{
        if (type === "lead") {
            setIsAddLeadOpen(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                crm_modal: "add_lead"
            });
        } else if (type === "deal") {
            setIsAddDealOpen(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                crm_modal: "add_deal"
            });
        } else if (type === "project") {
            setIsAddProjectOpen(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                crm_modal: "add_project"
            });
        }
    };
    // Hardware backpress handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrmScreen.useEffect": ()=>{
            const handleAppGoBack = {
                "CrmScreen.useEffect.handleAppGoBack": (e)=>{
                    if (isMobileSidebarOpen) {
                        var _e_preventDefault, _e_detail_markHandled, _e_detail, _e_stopImmediatePropagation;
                        setIsMobileSidebarOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault = e.preventDefault) === null || _e_preventDefault === void 0 ? void 0 : _e_preventDefault.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : (_e_detail_markHandled = _e_detail.markHandled) === null || _e_detail_markHandled === void 0 ? void 0 : _e_detail_markHandled.call(_e_detail);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    } else if (isAddLeadOpen) {
                        var _e_preventDefault1, _e_detail_markHandled1, _e_detail1, _e_stopImmediatePropagation1;
                        handleCloseModal(setIsAddLeadOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault1 = e.preventDefault) === null || _e_preventDefault1 === void 0 ? void 0 : _e_preventDefault1.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail1 = e.detail) === null || _e_detail1 === void 0 ? void 0 : (_e_detail_markHandled1 = _e_detail1.markHandled) === null || _e_detail_markHandled1 === void 0 ? void 0 : _e_detail_markHandled1.call(_e_detail1);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation1 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation1 === void 0 ? void 0 : _e_stopImmediatePropagation1.call(e);
                    } else if (isAddDealOpen) {
                        var _e_preventDefault2, _e_detail_markHandled2, _e_detail2, _e_stopImmediatePropagation2;
                        handleCloseModal(setIsAddDealOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault2 = e.preventDefault) === null || _e_preventDefault2 === void 0 ? void 0 : _e_preventDefault2.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail2 = e.detail) === null || _e_detail2 === void 0 ? void 0 : (_e_detail_markHandled2 = _e_detail2.markHandled) === null || _e_detail_markHandled2 === void 0 ? void 0 : _e_detail_markHandled2.call(_e_detail2);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation2 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation2 === void 0 ? void 0 : _e_stopImmediatePropagation2.call(e);
                    } else if (isAddProjectOpen) {
                        var _e_preventDefault3, _e_detail_markHandled3, _e_detail3, _e_stopImmediatePropagation3;
                        handleCloseModal(setIsAddProjectOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault3 = e.preventDefault) === null || _e_preventDefault3 === void 0 ? void 0 : _e_preventDefault3.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail3 = e.detail) === null || _e_detail3 === void 0 ? void 0 : (_e_detail_markHandled3 = _e_detail3.markHandled) === null || _e_detail_markHandled3 === void 0 ? void 0 : _e_detail_markHandled3.call(_e_detail3);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation3 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation3 === void 0 ? void 0 : _e_stopImmediatePropagation3.call(e);
                    } else if (isCommandCenterOpen) {
                        var _e_preventDefault4, _e_detail_markHandled4, _e_detail4, _e_stopImmediatePropagation4;
                        handleCloseModal(setIsCommandCenterOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault4 = e.preventDefault) === null || _e_preventDefault4 === void 0 ? void 0 : _e_preventDefault4.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail4 = e.detail) === null || _e_detail4 === void 0 ? void 0 : (_e_detail_markHandled4 = _e_detail4.markHandled) === null || _e_detail_markHandled4 === void 0 ? void 0 : _e_detail_markHandled4.call(_e_detail4);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation4 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation4 === void 0 ? void 0 : _e_stopImmediatePropagation4.call(e);
                    } else if (isWorkspaceSwitcherOpen) {
                        var _e_preventDefault5, _e_detail_markHandled5, _e_detail5, _e_stopImmediatePropagation5;
                        handleCloseModal(setIsWorkspaceSwitcherOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault5 = e.preventDefault) === null || _e_preventDefault5 === void 0 ? void 0 : _e_preventDefault5.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail5 = e.detail) === null || _e_detail5 === void 0 ? void 0 : (_e_detail_markHandled5 = _e_detail5.markHandled) === null || _e_detail_markHandled5 === void 0 ? void 0 : _e_detail_markHandled5.call(_e_detail5);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation5 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation5 === void 0 ? void 0 : _e_stopImmediatePropagation5.call(e);
                    } else if (isNotificationsModalOpen) {
                        var _e_preventDefault6, _e_detail_markHandled6, _e_detail6, _e_stopImmediatePropagation6;
                        handleCloseModal(setIsNotificationsModalOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault6 = e.preventDefault) === null || _e_preventDefault6 === void 0 ? void 0 : _e_preventDefault6.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail6 = e.detail) === null || _e_detail6 === void 0 ? void 0 : (_e_detail_markHandled6 = _e_detail6.markHandled) === null || _e_detail_markHandled6 === void 0 ? void 0 : _e_detail_markHandled6.call(_e_detail6);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation6 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation6 === void 0 ? void 0 : _e_stopImmediatePropagation6.call(e);
                    } else if (isOrgNetworkModalOpen) {
                        var _e_preventDefault7, _e_detail_markHandled7, _e_detail7, _e_stopImmediatePropagation7;
                        handleCloseModal(setIsOrgNetworkModalOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault7 = e.preventDefault) === null || _e_preventDefault7 === void 0 ? void 0 : _e_preventDefault7.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail7 = e.detail) === null || _e_detail7 === void 0 ? void 0 : (_e_detail_markHandled7 = _e_detail7.markHandled) === null || _e_detail_markHandled7 === void 0 ? void 0 : _e_detail_markHandled7.call(_e_detail7);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation7 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation7 === void 0 ? void 0 : _e_stopImmediatePropagation7.call(e);
                    } else if (isGlobalSearchOpen) {
                        var _e_preventDefault8, _e_detail_markHandled8, _e_detail8, _e_stopImmediatePropagation8;
                        handleCloseModal(setIsGlobalSearchOpen);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault8 = e.preventDefault) === null || _e_preventDefault8 === void 0 ? void 0 : _e_preventDefault8.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail8 = e.detail) === null || _e_detail8 === void 0 ? void 0 : (_e_detail_markHandled8 = _e_detail8.markHandled) === null || _e_detail_markHandled8 === void 0 ? void 0 : _e_detail_markHandled8.call(_e_detail8);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation8 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation8 === void 0 ? void 0 : _e_stopImmediatePropagation8.call(e);
                    }
                }
            }["CrmScreen.useEffect.handleAppGoBack"];
            window.addEventListener("app:back_press", handleAppGoBack);
            return ({
                "CrmScreen.useEffect": ()=>window.removeEventListener("app:back_press", handleAppGoBack)
            })["CrmScreen.useEffect"];
        }
    }["CrmScreen.useEffect"], [
        isMobileSidebarOpen,
        isAddLeadOpen,
        isAddDealOpen,
        isAddProjectOpen,
        isCommandCenterOpen,
        isWorkspaceSwitcherOpen,
        isNotificationsModalOpen,
        isOrgNetworkModalOpen,
        isGlobalSearchOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$layout$2f$CrmSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrmSidebar"], {
                activeTab: activeTab,
                onTabSelect: setActiveTab,
                isMobileSidebarOpen: isMobileSidebarOpen,
                onCloseMobileSidebar: ()=>setIsMobileSidebarOpen(false),
                onBack: onBack,
                leadsCount: leads.filter((l)=>l.leadStatus !== "Converted").length,
                openDealsCount: metrics.openDealsCount,
                clientsCount: clients.length,
                projectsCount: projects.length,
                invoicesCount: invoices.length,
                ticketsCount: tickets.length,
                userRole: activeWorkspace.userRole,
                workspaces: allWorkspaces,
                activeWorkspaceId: activeWorkspaceId,
                onSelectWorkspace: handleSelectWorkspace,
                onOpenWorkspaceSwitcherModal: ()=>handleOpenModal("workspace", setIsWorkspaceSwitcherOpen),
                onOpenNotificationsModal: ()=>handleOpenModal("notifications", setIsNotificationsModalOpen),
                onOpenOrgNetworkModal: ()=>handleOpenModal("network", setIsOrgNetworkModalOpen),
                onOpenCommandCenter: ()=>handleOpenModal("command_center", setIsCommandCenterOpen),
                onOpenSearch: ()=>handleOpenModal("search", setIsGlobalSearchOpen)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-full min-w-0 overflow-y-auto bg-[#f8fafc] dark:bg-[#0b141a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$layout$2f$CrmHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrmHeader"], {
                        activeTab: activeTab,
                        onOpenMobileSidebar: ()=>setIsMobileSidebarOpen(true),
                        onBack: onBack,
                        pipelineValue: metrics.pipelineValue,
                        wonRevenue: metrics.wonRevenue,
                        searchQuery: searchQuery,
                        onSearchChange: setSearchQuery,
                        onOpenAddModal: handleOpenAddModal,
                        onOpenCommandCenter: ()=>handleOpenModal("command_center", setIsCommandCenterOpen),
                        workspaces: allWorkspaces,
                        activeWorkspaceId: activeWorkspaceId,
                        onSelectWorkspace: handleSelectWorkspace,
                        onOpenWorkspaceSwitcherModal: ()=>handleOpenModal("workspace", setIsWorkspaceSwitcherOpen),
                        onOpenNotificationsModal: ()=>handleOpenModal("notifications", setIsNotificationsModalOpen),
                        onOpenOrgNetworkModal: ()=>handleOpenModal("network", setIsOrgNetworkModalOpen),
                        isClientViewOnly: isClientViewOnly
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    isClientViewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-500/10 border-b border-amber-500/20 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs text-amber-800 dark:text-amber-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: [
                                            "Connected to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: activeWorkspace.clientName || activeWorkspace.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                lineNumber: 343,
                                                columnNumber: 30
                                            }, this),
                                            " as ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Client Portal User"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                lineNumber: 343,
                                                columnNumber: 103
                                            }, this),
                                            ". Internal sales pipelines and settings are locked."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExitClientPortal,
                                className: "text-xs font-bold text-amber-700 dark:text-amber-300 hover:underline cursor-pointer shrink-0 ml-3 bg-amber-100 dark:bg-amber-900/40 px-3 py-1 rounded-md border border-amber-300 dark:border-amber-700",
                                children: "Exit Portal (Return to CRM) →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 sm:p-6 lg:p-8 max-w-8xl mx-auto w-full space-y-5 pb-[calc(7.5rem+env(safe-area-inset-bottom,24px))] md:pb-12",
                        children: [
                            activeTab === "my-work" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#111827] rounded-[10px] p-6 border border-slate-200 dark:border-slate-800 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-extrabold text-slate-900 dark:text-white mb-1",
                                            children: "My Work & Daily Agenda"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mb-5",
                                            children: "Your direct assignments, active tasks, notifications, and scheduled follow-ups."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase",
                                                            children: "Assigned Leads"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-black text-slate-900 dark:text-white mt-1",
                                                            children: leads.filter((l)=>l.leadStatus !== "Converted").length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab("leads"),
                                                            className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-2 hover:underline cursor-pointer block",
                                                            children: "View Assigned Leads →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-[10px] bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase",
                                                            children: "My Deals in Flight"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-black text-slate-900 dark:text-white mt-1",
                                                            children: deals.filter((d)=>d.stage !== "won" && d.stage !== "lost").length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab("deals"),
                                                            className: "text-xs font-bold text-purple-600 dark:text-purple-400 mt-2 hover:underline cursor-pointer block",
                                                            children: "Open Pipeline Deals →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-[10px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase",
                                                            children: "Active Projects Managed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-black text-slate-900 dark:text-white mt-1",
                                                            children: projects.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab("projects"),
                                                            className: "text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-2 hover:underline cursor-pointer block",
                                                            children: "Open Deliverables →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                            lineNumber: 368,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this),
                            activeTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$DashboardScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardScreen"], {
                                metrics: metrics,
                                leads: leads,
                                deals: deals,
                                clients: clients,
                                projects: projects,
                                userRole: activeWorkspace.userRole,
                                workspaceName: activeWorkspace.name,
                                workspaceTier: activeWorkspace.tier,
                                department: activeWorkspace.department,
                                onNavigateTab: setActiveTab,
                                onConvertLead: handleConvertLead
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this),
                            activeTab === "leads" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$LeadsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadsScreen"], {
                                leads: leads,
                                onConvertLead: handleConvertLead,
                                onUpdateLeadStatus: handleUpdateLeadStatus,
                                onUpdateLead: handleUpdateLead,
                                onOpenAddModal: ()=>handleOpenModal("add_lead", setIsAddLeadOpen),
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            activeTab === "deals" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$DealsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DealsScreen"], {
                                deals: deals,
                                onUpdateDealStage: handleUpdateDealStage,
                                onUpdateDeal: handleUpdateDeal,
                                onOpenAddModal: ()=>handleOpenModal("add_deal", setIsAddDealOpen)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            activeTab === "clients" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ClientsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientsScreen"], {
                                clients: clients,
                                projects: projects,
                                invoices: invoices,
                                deals: deals,
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab,
                                onAddClient: handleAddClient,
                                onUpdateClient: handleUpdateClient,
                                onDeleteClient: handleDeleteClient,
                                onOpenAddProjectModal: ()=>handleOpenModal("add_project", setIsAddProjectOpen),
                                onSwitchToClientPortal: handleSwitchToClientPortal
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            activeTab === "data" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$DataScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataScreen"], {}, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 476,
                                columnNumber: 36
                            }, this),
                            activeTab === "campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$CampaignsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignsScreen"], {}, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 479,
                                columnNumber: 41
                            }, this),
                            activeTab === "agreements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$AgreementsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AgreementsScreen"], {
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab,
                                clients: clients,
                                deals: deals,
                                projects: projects
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            activeTab === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ProjectsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsScreen"], {
                                projects: projects,
                                invoices: invoices,
                                teamMembers: teamMembers,
                                onOpenAddModal: ()=>handleOpenModal("add_project", setIsAddProjectOpen),
                                onUpdateProject: handleUpdateProject,
                                onDeleteProject: handleDeleteProject,
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab,
                                isClientViewOnly: isClientViewOnly,
                                clientName: activeWorkspace.clientName,
                                clientId: activeWorkspace.clientId,
                                onRecordPayment: handleRecordInvoicePayment
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 494,
                                columnNumber: 13
                            }, this),
                            activeTab === "resource-capacity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$ResourceCapacityScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceCapacityScreen"], {
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab,
                                teamMembers: teamMembers,
                                projects: projects
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 512,
                                columnNumber: 13
                            }, this),
                            activeTab === "billing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$BillingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BillingScreen"], {
                                invoices: invoices,
                                clients: clients,
                                projects: projects,
                                deals: deals,
                                teamMembers: teamMembers,
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab,
                                isClientViewOnly: isClientViewOnly,
                                clientName: activeWorkspace.clientName,
                                clientId: activeWorkspace.clientId,
                                onAddInvoice: handleAddInvoice,
                                onDeleteInvoice: handleDeleteInvoice,
                                onRecordPayment: handleRecordInvoicePayment,
                                onAddProject: handleAddProject
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this),
                            activeTab === "support" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$SupportScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupportScreen"], {
                                tickets: tickets,
                                onNavigateTab: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 541,
                                columnNumber: 39
                            }, this),
                            activeTab === "team" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$TeamScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamScreen"], {
                                onNavigateTab: setActiveTab,
                                teamMembers: teamMembers,
                                customRoles: customRoles,
                                departments: departments,
                                teams: teams,
                                onAddTeamMember: handleAddTeamMember,
                                onUpdateTeamMember: handleUpdateTeamMember,
                                onRemoveTeamMember: handleRemoveTeamMember,
                                onAddCustomRole: handleAddCustomRole,
                                onUpdateRole: handleUpdateRole,
                                onDeleteCustomRole: handleDeleteCustomRole,
                                onAddDepartment: handleAddDepartment,
                                onUpdateDepartment: handleUpdateDepartment,
                                onDeleteDepartment: handleDeleteDepartment,
                                onAddTeam: handleAddTeam,
                                onUpdateTeam: handleUpdateTeam,
                                onDeleteTeam: handleDeleteTeam
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this),
                            activeTab === "communication" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$CommunicationScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommunicationScreen"], {
                                clients: clients,
                                leads: leads,
                                deals: deals,
                                teamMembers: teamMembers
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 568,
                                columnNumber: 13
                            }, this),
                            activeTab === "templates" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$TemplatesScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TemplatesScreen"], {}, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 577,
                                columnNumber: 41
                            }, this),
                            activeTab === "ai-intelligence" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#111827] rounded-[10px] p-6 border border-slate-200 dark:border-slate-800 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-extrabold text-slate-900 dark:text-white",
                                                    children: "AI Intelligence & Autonomous Forecasts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300",
                                                    children: "Engine Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mb-5",
                                            children: "Autonomous win prediction models, lead propensity scoring, and client health sentiment analysis."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-[10px] border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xs font-bold text-slate-900 dark:text-white",
                                                            children: "High Propensity Conversion Queue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400",
                                                            children: "3 leads show >85% probability to convert based on engagement velocity and budget alignment."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab("leads"),
                                                            className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer block",
                                                            children: "Review High Scoring Leads →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-[10px] border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xs font-bold text-slate-900 dark:text-white",
                                                            children: "Pipeline Velocity & Churn Radar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400",
                                                            children: "Zero high-risk churn signals detected across active client workspaces this month."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab("clients"),
                                                            className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer block",
                                                            children: "Inspect Client Health Records →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            activeTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsScreen"], {
                                activeSubTab: activeSubTab,
                                onSubTabChange: setActiveSubTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                                lineNumber: 632,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$layout$2f$CrmBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrmBottomNav"], {
                activeTab: activeTab,
                onTabSelect: setActiveTab,
                onOpenMenu: ()=>setIsMobileSidebarOpen(true),
                leadsCount: leads.filter((l)=>l.leadStatus !== "Converted").length,
                openDealsCount: metrics.openDealsCount
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 641,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$AddLeadModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddLeadModal"], {
                isOpen: isAddLeadOpen,
                onClose: ()=>handleCloseModal(setIsAddLeadOpen),
                onAddLead: handleAddLead
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$AddDealModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddDealModal"], {
                isOpen: isAddDealOpen,
                onClose: ()=>handleCloseModal(setIsAddDealOpen),
                onAddDeal: handleAddDeal
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$AddProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProjectModal"], {
                isOpen: isAddProjectOpen,
                onClose: ()=>handleCloseModal(setIsAddProjectOpen),
                onAddProject: handleAddProject,
                clients: clients,
                teamMembers: teamMembers
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 662,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$CommandCenterModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandCenterModal"], {
                isOpen: isCommandCenterOpen,
                onClose: ()=>handleCloseModal(setIsCommandCenterOpen),
                onNavigateTab: setActiveTab,
                onOpenAddModal: handleOpenAddModal
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$WorkspaceSwitcherModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceSwitcherModal"], {
                isOpen: isWorkspaceSwitcherOpen,
                onClose: ()=>handleCloseModal(setIsWorkspaceSwitcherOpen),
                workspaces: allWorkspaces,
                activeWorkspaceId: activeWorkspaceId,
                onSelectWorkspace: handleSelectWorkspace,
                userName: "",
                userPingId: ""
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$UnifiedNotificationsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedNotificationsModal"], {
                isOpen: isNotificationsModalOpen,
                onClose: ()=>handleCloseModal(setIsNotificationsModalOpen),
                onNavigateTab: setActiveTab,
                onSwitchWorkspace: handleSelectWorkspace
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$OrganizationNetworkModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationNetworkModal"], {
                isOpen: isOrgNetworkModalOpen,
                onClose: ()=>handleCloseModal(setIsOrgNetworkModalOpen),
                activeWorkspaceName: activeWorkspace.name
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 694,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$common$2f$CrmGlobalSearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrmGlobalSearchModal"], {
                isOpen: isGlobalSearchOpen,
                onClose: ()=>handleCloseModal(setIsGlobalSearchOpen),
                onNavigate: (tab)=>{
                    setActiveTab(tab);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/CrmScreen.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_s(CrmScreen, "KLbt2dXwwSGtqH6nHR4sH9ycyWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmPage"]
    ];
});
_c = CrmScreen;
var _c;
__turbopack_context__.k.register(_c, "CrmScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/crm/CrmScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLIENT_STATUS_CONFIG",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLIENT_STATUS_CONFIG"],
    "GLOBAL_COUNTRIES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_COUNTRIES"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$CrmScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$CrmScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/CrmScreen.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/types.ts [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=src_app_user_components_modules_crm_8cd6017a._.js.map