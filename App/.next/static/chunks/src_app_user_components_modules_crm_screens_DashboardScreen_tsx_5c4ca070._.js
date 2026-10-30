(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardScreen",
    ()=>DashboardScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Notification01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmPermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSiteSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
function DashboardScreen({ metrics, leads, deals, clients, projects, userRole, workspaceName, workspaceTier, department, onNavigateTab, onConvertLead }) {
    _s();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const effectiveRole = userRole || ((user === null || user === void 0 ? void 0 : user.role) ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Owner");
    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmPermissions"])(effectiveRole);
    const { currencySymbol, formatCompact } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const brandName = workspaceName || (settings === null || settings === void 0 ? void 0 : settings.appName) || "PingDart";
    const brandInitial = brandName.charAt(0).toUpperCase() || "P";
    const logoSrc = (settings === null || settings === void 0 ? void 0 : settings.appLogoDark) || (settings === null || settings === void 0 ? void 0 : settings.appLogoImage) || "/logo_light.png";
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(effectiveRole === "Manager" ? "sales_manager" : effectiveRole === "Member" ? "sales_rep" : "executive_default");
    const [aiQuestion, setAiQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aiResponse, setAiResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFunnelStage, setSelectedFunnelStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Executive AI Alerts — computed from real data
    const EXECUTIVE_ALERTS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardScreen.useMemo[EXECUTIVE_ALERTS]": ()=>{
            const alerts = [];
            const now = Date.now();
            // Deals with no expected close date and high value
            deals.filter({
                "DashboardScreen.useMemo[EXECUTIVE_ALERTS]": (d)=>d.stage !== "won" && d.stage !== "lost" && d.priority === "urgent"
            }["DashboardScreen.useMemo[EXECUTIVE_ALERTS]"]).slice(0, 1).forEach({
                "DashboardScreen.useMemo[EXECUTIVE_ALERTS]": (d, i)=>{
                    alerts.push({
                        id: i + 1,
                        type: "deal",
                        title: "Urgent Deal Needs Attention",
                        desc: `"${d.title}" (${currencySymbol}${Number(d.dealValue).toLocaleString()}) is marked urgent — review and advance stage.`,
                        severity: "warning"
                    });
                }
            }["DashboardScreen.useMemo[EXECUTIVE_ALERTS]"]);
            // Clients with low health score
            clients.filter({
                "DashboardScreen.useMemo[EXECUTIVE_ALERTS]": (c)=>(c.healthScore || 100) < 70
            }["DashboardScreen.useMemo[EXECUTIVE_ALERTS]"]).slice(0, 1).forEach({
                "DashboardScreen.useMemo[EXECUTIVE_ALERTS]": (c, i)=>{
                    alerts.push({
                        id: alerts.length + i + 1,
                        type: "health",
                        title: "Client Health Risk Detected",
                        desc: `${c.companyName} health score is ${c.healthScore} — schedule an executive check-in.`,
                        severity: "danger"
                    });
                }
            }["DashboardScreen.useMemo[EXECUTIVE_ALERTS]"]);
            // Leads with high AI score not yet converted
            const hotLeads = leads.filter({
                "DashboardScreen.useMemo[EXECUTIVE_ALERTS].hotLeads": (l)=>(l.aiScore || 0) >= 85 && l.leadStatus !== "Converted"
            }["DashboardScreen.useMemo[EXECUTIVE_ALERTS].hotLeads"]);
            if (hotLeads.length > 0) {
                alerts.push({
                    id: alerts.length + 1,
                    type: "lead",
                    title: `${hotLeads.length} High-Score Lead${hotLeads.length > 1 ? "s" : ""} Ready`,
                    desc: `${hotLeads[0].title} (AI ${hotLeads[0].aiScore}/100) — 1-click convert to unlock client workspace.`,
                    severity: "warning"
                });
            }
            return alerts;
        }
    }["DashboardScreen.useMemo[EXECUTIVE_ALERTS]"], [
        deals,
        clients,
        leads,
        currencySymbol
    ]);
    // Lead source performance — computed from real lead data
    const LEAD_SOURCES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardScreen.useMemo[LEAD_SOURCES]": ()=>{
            const sourceMap = {};
            leads.forEach({
                "DashboardScreen.useMemo[LEAD_SOURCES]": (l)=>{
                    const src = l.leadSource || "Other";
                    if (!sourceMap[src]) sourceMap[src] = {
                        count: 0,
                        converted: 0,
                        totalValue: 0
                    };
                    sourceMap[src].count++;
                    if (l.leadStatus === "Converted") sourceMap[src].converted++;
                    sourceMap[src].totalValue += Number(l.estimatedValue) || 0;
                }
            }["DashboardScreen.useMemo[LEAD_SOURCES]"]);
            return Object.entries(sourceMap).map({
                "DashboardScreen.useMemo[LEAD_SOURCES]": ([source, d])=>({
                        source,
                        count: d.count,
                        convRate: d.count > 0 ? `${(d.converted / d.count * 100).toFixed(1)}%` : "0%",
                        revenue: d.converted > 0 ? `${currencySymbol}${d.totalValue.toLocaleString()}` : "—",
                        cac: "—"
                    })
            }["DashboardScreen.useMemo[LEAD_SOURCES]"]);
        }
    }["DashboardScreen.useMemo[LEAD_SOURCES]"], [
        leads,
        currencySymbol
    ]);
    // Pipeline funnel stages — computed from real deals
    const stagesFunnel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardScreen.useMemo[stagesFunnel]": ()=>{
            const totalLeadCount = leads.length;
            const leadValue = leads.reduce({
                "DashboardScreen.useMemo[stagesFunnel].leadValue": (s, l)=>s + (Number(l.estimatedValue) || 0)
            }["DashboardScreen.useMemo[stagesFunnel].leadValue"], 0);
            const proposalDeals = deals.filter({
                "DashboardScreen.useMemo[stagesFunnel].proposalDeals": (d)=>d.stage === "proposal"
            }["DashboardScreen.useMemo[stagesFunnel].proposalDeals"]);
            const negotiationDeals = deals.filter({
                "DashboardScreen.useMemo[stagesFunnel].negotiationDeals": (d)=>d.stage === "negotiation"
            }["DashboardScreen.useMemo[stagesFunnel].negotiationDeals"]);
            const wonDeals = deals.filter({
                "DashboardScreen.useMemo[stagesFunnel].wonDeals": (d)=>d.stage === "won" || d.isWon
            }["DashboardScreen.useMemo[stagesFunnel].wonDeals"]);
            const totalDealValue = deals.reduce({
                "DashboardScreen.useMemo[stagesFunnel].totalDealValue": (s, d)=>s + (Number(d.dealValue) || 0)
            }["DashboardScreen.useMemo[stagesFunnel].totalDealValue"], 0);
            const fmt = {
                "DashboardScreen.useMemo[stagesFunnel].fmt": (n)=>formatCompact(n)
            }["DashboardScreen.useMemo[stagesFunnel].fmt"];
            return [
                {
                    label: "Prospection / Lead In",
                    count: totalLeadCount,
                    val: fmt(leadValue),
                    pct: "100%"
                },
                {
                    label: "Proposal Sent",
                    count: proposalDeals.length,
                    val: fmt(proposalDeals.reduce({
                        "DashboardScreen.useMemo[stagesFunnel]": (s, d)=>s + Number(d.dealValue || 0)
                    }["DashboardScreen.useMemo[stagesFunnel]"], 0)),
                    pct: totalLeadCount > 0 ? `${Math.round(proposalDeals.length / Math.max(totalLeadCount, 1) * 100)}%` : "0%"
                },
                {
                    label: "Negotiation",
                    count: negotiationDeals.length,
                    val: fmt(negotiationDeals.reduce({
                        "DashboardScreen.useMemo[stagesFunnel]": (s, d)=>s + Number(d.dealValue || 0)
                    }["DashboardScreen.useMemo[stagesFunnel]"], 0)),
                    pct: totalLeadCount > 0 ? `${Math.round(negotiationDeals.length / Math.max(totalLeadCount, 1) * 100)}%` : "0%"
                },
                {
                    label: "Closed Won",
                    count: wonDeals.length,
                    val: fmt(wonDeals.reduce({
                        "DashboardScreen.useMemo[stagesFunnel]": (s, d)=>s + Number(d.dealValue || 0)
                    }["DashboardScreen.useMemo[stagesFunnel]"], 0)),
                    pct: totalLeadCount > 0 ? `${Math.round(wonDeals.length / Math.max(totalLeadCount, 1) * 100)}%` : "0%"
                }
            ];
        }
    }["DashboardScreen.useMemo[stagesFunnel]"], [
        leads,
        deals,
        formatCompact
    ]);
    const handleAskAi = (promptText)=>{
        const q = promptText || aiQuestion;
        if (!q) return;
        setAiQuestion(q);
        const hotLeadNames = leads.filter((l)=>(l.aiScore || 0) >= 85 && l.leadStatus !== "Converted").map((l)=>l.title).slice(0, 2).join(", ") || "none identified";
        const urgentDeals = deals.filter((d)=>d.priority === "urgent" && d.stage !== "won").length;
        if (q.includes("churn") || q.includes("risk")) {
            const atRisk = clients.filter((c)=>(c.healthScore || 100) < 75);
            setAiResponse(atRisk.length > 0 ? `AI Churn Radar: ${atRisk.map((c)=>c.companyName).join(", ")} show risk signals. Recommend scheduling executive touchpoints immediately.` : "AI Churn Radar: No high-risk churn signals detected across active client accounts. All health scores are strong.");
        } else if (q.includes("attention") || q.includes("deals")) {
            setAiResponse(urgentDeals > 0 ? `AI Deal Radar: ${urgentDeals} urgent deal(s) require immediate action. Review and update next steps to maintain win probability.` : "AI Deal Radar: Pipeline is healthy. No deals flagged as urgent. Continue follow-up cadence.");
        } else if (q.includes("overdue") || q.includes("invoice")) {
            setAiResponse("AI Billing Radar: Check the Billing tab for overdue invoice details and automated dunning campaign status.");
        } else {
            setAiResponse(`AI Executive Summary: You have ${leads.length} leads, ${deals.filter((d)=>d.stage !== 'won' && d.stage !== 'lost').length} open deals, and ${clients.length} active clients. Hot leads ready to convert: ${hotLeadNames}.`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in duration-150 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-[#111827] p-3.5 rounded-[10px] border border-slate-200 dark:border-slate-800 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-[10px] bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-600/25 shrink-0 overflow-hidden ring-1 ring-white/20 p-1",
                                children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: logoSrc,
                                    alt: brandName,
                                    width: 24,
                                    height: 24,
                                    className: "object-contain w-full h-full",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-extrabold text-slate-900 dark:text-white leading-tight flex items-center gap-1.5 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    brandName,
                                                    " Command Center"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            workspaceTier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 uppercase",
                                                children: workspaceTier
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 font-medium",
                                        children: [
                                            "Role: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-indigo-600 dark:text-indigo-400",
                                                children: effectiveRole
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this),
                                            " • Layout: ",
                                            selectedTemplate.replace("_", " ").toUpperCase(),
                                            department ? ` • Dept: ${department}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-400 font-bold hidden md:inline",
                                children: "Department View:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedTemplate,
                                onChange: (e)=>setSelectedTemplate(e.target.value),
                                className: "px-2.5 py-1.5 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#161f2e] text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "executive_default",
                                        children: "Executive Default (All KPIs)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sales_manager",
                                        children: "Sales Manager (Team & Approvals)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sales_rep",
                                        children: "Sales Rep (My Pipeline & Tasks)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "finance_manager",
                                        children: "Finance Manager (Invoices & MRR)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "project_manager",
                                        children: "Project Manager (Delivery & SLA)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                                        size: 13,
                                        className: "text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    "Executive Alerts & AI Telemetry"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-indigo-600 dark:text-indigo-400 font-bold font-mono",
                                children: "4 Active Triggers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",
                        children: EXECUTIVE_ALERTS.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-[10px] border text-xs flex items-start gap-2.5 transition ${alert.severity === "danger" ? "bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 text-rose-900 dark:text-rose-200" : "bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert02Icon"], {
                                        size: 16,
                                        className: alert.severity === "danger" ? "text-rose-500 shrink-0" : "text-amber-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-extrabold text-[11px] leading-tight truncate",
                                                children: alert.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] opacity-80 mt-0.5 line-clamp-2",
                                                children: alert.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, alert.id, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onNavigateTab("deals"),
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-[#2d3139] shadow-xs space-y-1 cursor-pointer hover:border-indigo-400 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                        children: permissions.dealScope === "own" ? "My Pipeline" : "Open Pipeline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-black text-indigo-600 dark:text-indigo-400",
                                        children: permissions.fieldSecurity.hideDealValue ? "••••••" : `${currencySymbol}${metrics.pipelineValue.toLocaleString()}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400",
                                        children: [
                                            metrics.openDealsCount,
                                            " opportunities"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>permissions.financial.canViewRevenue && onNavigateTab("billing"),
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-[#2d3139] shadow-xs space-y-1 cursor-pointer hover:border-indigo-400 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                        children: "Closed Revenue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-black text-emerald-600 dark:text-emerald-400",
                                        children: permissions.financial.canViewRevenue ? `${currencySymbol}${metrics.wonRevenue.toLocaleString()}` : "Restricted (FLS)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-emerald-500 font-bold",
                                        children: "+18% vs target"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-[#2d3139] shadow-xs space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                        children: "Win Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-black text-slate-900 dark:text-white",
                                        children: deals.length > 0 ? `${(deals.filter((d)=>d.stage === "won" || d.isWon).length / deals.length * 100).toFixed(1)}%` : "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-purple-600 dark:text-purple-400 font-bold",
                                        children: [
                                            deals.filter((d)=>d.stage === "won" || d.isWon).length,
                                            " deals closed won"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onNavigateTab("clients"),
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-[#2d3139] shadow-xs space-y-1 cursor-pointer hover:border-indigo-400 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                        children: "Client 360 Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-black text-slate-900 dark:text-white",
                                        children: metrics.activeClientsCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-blue-500 font-bold",
                                        children: "15 Workspaces active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-[10px] p-4.5 space-y-3 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black uppercase tracking-wider text-indigo-200 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                size: 14,
                                                className: "text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            "Revenue Forecast (Pipeline)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-bold bg-white/20 px-2 py-0.5 rounded-full",
                                        children: "Weighted ML"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: (()=>{
                                    const openDeals = deals.filter((d)=>d.stage !== "lost");
                                    const likelyRev = openDeals.reduce((s, d)=>s + (Number(d.dealValue) || 0) * ((d.winProbability || 50) / 100), 0);
                                    const bestCase = openDeals.reduce((s, d)=>s + (Number(d.dealValue) || 0), 0);
                                    const worstCase = openDeals.filter((d)=>(d.winProbability || 50) >= 70).reduce((s, d)=>s + (Number(d.dealValue) || 0) * ((d.winProbability || 50) / 100), 0);
                                    const fmt = (n)=>n >= 1000 ? `${currencySymbol}${n.toLocaleString()}` : `${currencySymbol}${n}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-indigo-200",
                                                        children: "Likely Revenue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-black text-white font-mono",
                                                        children: fmt(Math.round(likelyRev))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-300",
                                                        children: "Best Case Upside"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-emerald-200 font-mono",
                                                        children: fmt(Math.round(bestCase))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-amber-300",
                                                        children: "Commit (≥70% Win Prob)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-amber-200 font-mono",
                                                        children: fmt(Math.round(worstCase))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true);
                                })()
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9.5px] text-indigo-200/80 pt-1 border-t border-white/10",
                                children: "Calculated via: Deal Value × Win Probability × Rep Close Velocity"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-[#2d3139] p-5 space-y-4 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                                children: "Pipeline Stage Velocity & Funnel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Click any stage for multi-level drill-down"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded",
                                        children: "Drilldown"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5 pt-1",
                                children: stagesFunnel.map((stg, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedFunnelStage(stg),
                                        className: "space-y-1 p-2 rounded-[10px] hover:bg-slate-50 dark:hover:bg-slate-800/60 transition cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 transition",
                                                        children: stg.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 font-mono text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: stg.val
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400",
                                                                children: [
                                                                    "(",
                                                                    stg.pct,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 388,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600",
                                                    style: {
                                                        width: stg.pct
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, sIdx, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-[#2d3139] p-5 space-y-4 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                                children: "AI Hot Leads Propensity Radar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 412,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9.5px] font-extrabold px-2 py-0.2 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300",
                                                children: "Grounded ML"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigateTab("leads"),
                                        className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer",
                                        children: "All Leads →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-h-[290px] overflow-y-auto",
                                children: leads.slice(0, 4).map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-[10px] border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#161f2e]/60 flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-[10px] bg-purple-600/10 text-purple-600 dark:text-purple-400 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-purple-200 dark:border-purple-900/40",
                                                        children: lead.aiScore
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                                children: lead.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 truncate",
                                                                children: [
                                                                    lead.companyName || "Direct Prospect",
                                                                    " • ",
                                                                    currencySymbol,
                                                                    lead.estimatedValue.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 shrink-0",
                                                children: permissions.canConvertLead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onConvertLead(lead.id),
                                                    className: "px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition cursor-pointer shadow-xs",
                                                    children: "1-Click Convert"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 italic",
                                                    children: "Approval Needed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 447,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, lead.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-[#2d3139] p-5 space-y-3 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                size: 16,
                                                className: "text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Today's Focus & Action Items"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400",
                                        children: "12 Pending Items"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black text-indigo-600 dark:text-indigo-400",
                                                children: deals.filter((d)=>d.stage !== "won" && d.stage !== "lost").length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 479,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-slate-500",
                                                children: "Open Deals"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 482,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black text-purple-600 dark:text-purple-400",
                                                children: leads.filter((l)=>l.leadStatus !== "Converted").length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 485,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-slate-500",
                                                children: "Active Leads"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black text-emerald-600 dark:text-emerald-400",
                                                children: clients.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-slate-500",
                                                children: "Active Clients"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black text-amber-600 dark:text-amber-400",
                                                children: projects.filter((p)=>p.status === "in_progress" || p.status === "planning").length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 495,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-slate-500",
                                                children: "Live Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-[#2d3139] p-5 space-y-3 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                size: 16,
                                                className: "text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Renewal Risk Center (Next 90 Days)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400",
                                        children: "7 Client Renewals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 505,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-xs",
                                children: (()=>{
                                    const atRisk = clients.filter((c)=>(c.healthScore || 100) < 75);
                                    const healthy = clients.filter((c)=>(c.healthScore || 100) >= 75);
                                    const atRiskArr = clients.filter((c)=>c.renewalDate && new Date(c.renewalDate) < new Date(Date.now() + 90 * 86400000) && (c.healthScore || 100) < 75);
                                    const healthyArr = clients.filter((c)=>c.renewalDate && new Date(c.renewalDate) < new Date(Date.now() + 90 * 86400000) && (c.healthScore || 100) >= 75);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            atRiskArr.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-2.5 rounded-[10px] bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-rose-900 dark:text-rose-200",
                                                                children: [
                                                                    atRiskArr.length,
                                                                    " Account",
                                                                    atRiskArr.length > 1 ? "s" : "",
                                                                    " High Risk"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-rose-700 dark:text-rose-400",
                                                                children: [
                                                                    atRiskArr.map((c)=>c.companyName).join(" & "),
                                                                    " — low health score"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigateTab("clients"),
                                                        className: "px-2 py-1 rounded text-[10.5px] font-bold bg-rose-600 text-white cursor-pointer",
                                                        children: "Intervene"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 522,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 dark:text-white",
                                                        children: "No At-Risk Renewals in Next 90 Days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-emerald-500 font-mono",
                                                        children: "All Clear ✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 530,
                                                columnNumber: 21
                                            }, this),
                                            healthyArr.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/60 dark:border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: [
                                                                    healthyArr.length,
                                                                    " Account",
                                                                    healthyArr.length > 1 ? "s" : "",
                                                                    " Healthy / On Track"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: healthyArr.map((c)=>c.companyName).join(", ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-emerald-500 font-mono",
                                                        children: healthyArr.length > 0 ? "Strong" : "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 536,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true);
                                })()
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-[#2d3139] p-5 space-y-3 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                        children: "Lead Source Performance & CAC Attribution"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Growth team channel conversion efficiency"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 558,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono font-bold text-slate-400",
                                children: "Q3 Attribution"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 553,
                        columnNumber: 9
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
                                                children: "Acquisition Channel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Leads Generated"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 568,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Conversion %"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Closed Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pb-2",
                                                children: "Est. CAC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800/60",
                                    children: LEAD_SOURCES.map((ls, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50/50 dark:hover:bg-slate-800/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-bold text-slate-900 dark:text-white",
                                                    children: ls.source
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-mono text-slate-600 dark:text-slate-300",
                                                    children: ls.count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400",
                                                    children: ls.convRate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                    children: ls.revenue
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2.5 font-mono text-slate-500",
                                                    children: ls.cac
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 576,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 574,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            permissions.ai.canUseAi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 rounded-[10px] bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-900/50 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                size: 16,
                                className: "text-purple-600 dark:text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 593,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider",
                                children: "Ask PingDart CRM AI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            "Which deals need attention?",
                            "Which clients may churn?",
                            "Show invoices overdue >30 days",
                            "Which rep is closing fastest?"
                        ].map((p, pIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAskAi(p),
                                className: "px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white dark:bg-slate-800 border border-indigo-100 dark:border-indigo-900/40 text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition cursor-pointer shadow-2xs",
                                children: p
                            }, pIdx, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 606,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 599,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: aiQuestion,
                                onChange: (e)=>setAiQuestion(e.target.value),
                                onKeyDown: (e)=>e.key === "Enter" && handleAskAi(),
                                placeholder: "Ask anything about your pipeline, churn risks, reps, or receivables...",
                                className: "flex-1 px-3 py-2 rounded-[10px] text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 617,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAskAi(),
                                className: "px-4 py-2 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer transition shadow-xs",
                                children: "Analyze"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 616,
                        columnNumber: 11
                    }, this),
                    aiResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-[10px] bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-900 text-xs text-slate-800 dark:text-slate-200 space-y-1 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-purple-600 dark:text-purple-400 block text-[11px]",
                                children: "🤖 CRM AI Insight:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 635,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "leading-relaxed",
                                children: aiResponse
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                lineNumber: 638,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                        lineNumber: 634,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 591,
                columnNumber: 9
            }, this),
            selectedFunnelStage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150",
                onClick: ()=>setSelectedFunnelStage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white dark:bg-[#111827] rounded-[10px] p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                            children: [
                                                "Stage: ",
                                                selectedFunnelStage.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-slate-400 font-mono",
                                            children: [
                                                selectedFunnelStage.count,
                                                " Opportunities • ",
                                                selectedFunnelStage.val,
                                                " Total Value"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 655,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedFunnelStage(null),
                                    className: "text-slate-400 hover:text-slate-600 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                        lineNumber: 667,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedFunnelStage(null);
                                        onNavigateTab("deals");
                                    },
                                    className: "w-full flex items-center justify-between p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition cursor-pointer text-left group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-slate-900 dark:text-white group-hover:text-indigo-600",
                                                    children: [
                                                        "View Deals in ",
                                                        selectedFunnelStage.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10.5px] text-slate-400",
                                                    children: "Filter deals list by this stage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 16,
                                            className: "text-slate-400 group-hover:text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 685,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 672,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedFunnelStage(null);
                                        onNavigateTab("deals");
                                    },
                                    className: "w-full flex items-center justify-between p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition cursor-pointer text-left group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-slate-900 dark:text-white group-hover:text-indigo-600",
                                                    children: "Open Kanban Board"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 696,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10.5px] text-slate-400",
                                                    children: "Drag & drop opportunities across columns"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 16,
                                            className: "text-slate-400 group-hover:text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 701,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedFunnelStage(null);
                                        handleAskAi(`Analyze stage drop-off and conversion risk for ${selectedFunnelStage.label}`);
                                    },
                                    className: "w-full flex items-center justify-between p-3 rounded-[10px] bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 transition cursor-pointer text-left group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-purple-900 dark:text-purple-200",
                                                    children: "AI Stage Drop-Off Analysis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10.5px] text-purple-700/80 dark:text-purple-400",
                                                    children: "Identify bottlenecks and reasons deals stall in this stage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 711,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                            size: 16,
                                            className: "text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                            lineNumber: 719,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                                    lineNumber: 704,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                            lineNumber: 671,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
                lineNumber: 646,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/DashboardScreen.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(DashboardScreen, "ggsFqfxPYPkcwRGpkRlPtpFwBHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmPermissions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"]
    ];
});
_c = DashboardScreen;
var _c;
__turbopack_context__.k.register(_c, "DashboardScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_crm_screens_DashboardScreen_tsx_5c4ca070._.js.map