module.exports = [
"[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadsScreen",
    ()=>LeadsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Note01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$NoteFollowUpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/NoteFollowUpModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function LeadsScreen({ leads, onConvertLead, onUpdateLeadStatus, onUpdateLead, onOpenAddModal, activeSubTab: activeSubTabProp, onSubTabChange }) {
    const { currencySymbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Note & Follow-up Modal State
    const [modalLead, setModalLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalTab, setModalTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("followup");
    const openNoteFollowUp = (lead, tab)=>{
        setModalLead(lead);
        setModalTab(tab);
        setIsModalOpen(true);
    };
    const resolveFilterStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        if (!val) return "all";
        const norm = val.toLowerCase().trim();
        if (norm === "new") return "New";
        if (norm === "contacted") return "Contacted";
        if (norm === "qualified") return "Qualified";
        if (norm === "converted") return "Converted";
        return "all";
    }, []);
    const [filterStatus, setFilterStatusState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (activeSubTabProp) return resolveFilterStatus(activeSubTabProp);
        const fromUrl = searchParams?.get("crm_subtab") || searchParams?.get("status");
        return resolveFilterStatus(fromUrl);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeSubTabProp) {
            const resolved = resolveFilterStatus(activeSubTabProp);
            setFilterStatusState(resolved);
        }
    }, [
        activeSubTabProp,
        resolveFilterStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fromUrl = searchParams?.get("crm_subtab") || searchParams?.get("status");
        if (fromUrl) {
            const resolved = resolveFilterStatus(fromUrl);
            setFilterStatusState(resolved);
        }
    }, [
        searchParams,
        resolveFilterStatus
    ]);
    const handleFilterStatusChange = (st)=>{
        setFilterStatusState(st);
        onSubTabChange?.(st);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            crm_tab: "leads",
            crm_subtab: st === "all" ? null : st.toLowerCase()
        });
    };
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredLeads = leads.filter((lead)=>{
        if (filterStatus !== "all" && lead.leadStatus !== filterStatus) return false;
        if (search.trim()) {
            const q = search.toLowerCase();
            return lead.title.toLowerCase().includes(q) || lead.companyName && lead.companyName.toLowerCase().includes(q) || lead.email && lead.email.toLowerCase().includes(q);
        }
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 animate-in fade-in duration-150",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-[#111827] p-4 rounded-[10px]  border border-slate-200/80 dark:border-[#2d3139] shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-1.5",
                        children: [
                            "all",
                            "New",
                            "Contacted",
                            "Qualified",
                            "Converted"
                        ].map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleFilterStatusChange(st),
                                className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer capitalize ${filterStatus === st ? "bg-indigo-600 text-white shadow-xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                children: st
                            }, st, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 sm:w-56",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 14,
                                        className: "absolute left-2.5 top-2.5 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        placeholder: "Filter leads...",
                                        className: "w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenAddModal,
                                className: "px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center gap-1.5 shrink-0 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Lead"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filteredLeads.map((lead)=>{
                    const isConverted = lead.leadStatus === "Converted" || lead.isConverted;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-5 rounded-[10px]  bg-white dark:bg-[#111827] border shadow-xs space-y-3 transition ${isConverted ? "border-emerald-200 dark:border-emerald-900/40 opacity-80" : "border-slate-200 dark:border-[#2d3139] hover:border-indigo-300"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${lead.rating === "Hot" ? "bg-rose-500/10 text-rose-600 border border-rose-500/20" : "bg-amber-500/10 text-amber-600 border border-amber-500/20"}`,
                                                        children: [
                                                            lead.rating,
                                                            " Lead"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60",
                                                        children: [
                                                            "AI Score: ",
                                                            lead.aiScore,
                                                            "/100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: [
                                                            "Source: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: lead.leadSource
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-black text-slate-900 dark:text-white mt-1.5",
                                                children: lead.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                children: [
                                                    lead.companyName,
                                                    " • Contact: ",
                                                    lead.firstName,
                                                    " ",
                                                    lead.lastName,
                                                    " ",
                                                    lead.email && `(${lead.email})`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 self-end md:self-auto shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-black text-slate-900 dark:text-white block",
                                                        children: [
                                                            currencySymbol,
                                                            lead.estimatedValue.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 block",
                                                        children: lead.currency
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: lead.leadStatus,
                                                disabled: isConverted,
                                                onChange: (e)=>onUpdateLeadStatus(lead.id, e.target.value),
                                                className: "px-2.5 py-1 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#161f2e] text-slate-900 dark:text-white font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "New",
                                                        children: "New"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Contacted",
                                                        children: "Contacted"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Qualified",
                                                        children: "Qualified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Unqualified",
                                                        children: "Unqualified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Converted",
                                                        children: "Converted"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            !isConverted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onConvertLead(lead.id),
                                                className: "px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white transition flex items-center gap-1.5 cursor-pointer shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Convert to Client"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 215,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Client & Project Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            lead.nextFollowUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-2.5 rounded-[8px] bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold truncate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                size: 14,
                                                className: "text-indigo-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: [
                                                    "Follow-up scheduled: ",
                                                    lead.nextFollowUp,
                                                    " ",
                                                    lead.followUpTime ? `@ ${lead.followUpTime}` : "",
                                                    lead.followUpType ? ` (${lead.followUpType.toUpperCase()})` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 234,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openNoteFollowUp(lead, "followup"),
                                        className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 ml-2 cursor-pointer",
                                        children: "Reschedule →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 241,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 233,
                                columnNumber: 17
                            }, this),
                            lead.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>openNoteFollowUp(lead, "notes"),
                                className: "text-xs text-slate-600 dark:text-slate-300 bg-slate-50/80 dark:bg-[#161f2e] p-2.5 rounded-[8px] border border-slate-200/70 dark:border-slate-800 line-clamp-2 cursor-pointer hover:border-indigo-300 transition",
                                title: "Click to view/add notes",
                                children: [
                                    "💬 ",
                                    lead.notes
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 253,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800 text-xs flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>openNoteFollowUp(lead, "notes"),
                                                className: "px-3 h-8 rounded-[8px] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#161f2e] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition flex items-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Note01Icon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Notes ",
                                                            lead.notesList?.length ? `(${lead.notesList.length})` : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>openNoteFollowUp(lead, "followup"),
                                                className: "px-3 h-8 rounded-[8px] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#161f2e] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition flex items-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: lead.nextFollowUp ? "Reschedule Follow-up" : "+ Schedule Follow-up"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10.5px] text-slate-400 font-medium",
                                        children: [
                                            "Created: ",
                                            new Date(lead.createdAt).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this)
                        ]
                    }, lead.id, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$NoteFollowUpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteFollowUpModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                itemType: "lead",
                item: modalLead,
                initialTab: modalTab,
                onSaveLead: onUpdateLead
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/LeadsScreen.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DealsScreen",
    ()=>DealsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Coins01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FilterIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Note01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Edit01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$NoteFollowUpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/NoteFollowUpModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$EditDealModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/EditDealModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const STAGES = [
    {
        id: "lead",
        label: "Discovery",
        badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/60",
        dotColor: "bg-blue-500 shadow-blue-500/40",
        borderHover: "hover:border-blue-400",
        barColor: "bg-blue-500"
    },
    {
        id: "proposal",
        label: "Proposal Sent",
        badgeBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/60",
        dotColor: "bg-indigo-500 shadow-indigo-500/40",
        borderHover: "hover:border-indigo-400",
        barColor: "bg-indigo-500"
    },
    {
        id: "negotiation",
        label: "Negotiation",
        badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/60",
        dotColor: "bg-amber-500 shadow-amber-500/40",
        borderHover: "hover:border-amber-400",
        barColor: "bg-amber-500"
    },
    {
        id: "won",
        label: "Won Deals",
        badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60",
        dotColor: "bg-emerald-500 shadow-emerald-500/40",
        borderHover: "hover:border-emerald-400",
        barColor: "bg-emerald-500"
    },
    {
        id: "lost",
        label: "Lost",
        badgeBg: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800",
        dotColor: "bg-slate-400 shadow-slate-400/40",
        borderHover: "hover:border-slate-400",
        barColor: "bg-slate-400"
    }
];
function DealsScreen({ deals, onUpdateDealStage, onUpdateDeal, onOpenAddModal }) {
    const { currencySymbol, formatCompact } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPriority, setSelectedPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [draggedDealId, setDraggedDealId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverStage, setDragOverStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Note & Follow-up Modal State
    const [modalDeal, setModalDeal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalTab, setModalTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("followup");
    // Edit Deal Modal State
    const [editDeal, setEditDeal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openNoteFollowUp = (deal, tab)=>{
        setModalDeal(deal);
        setModalTab(tab);
        setIsModalOpen(true);
    };
    const openEditDeal = (deal)=>{
        setEditDeal(deal);
        setIsEditModalOpen(true);
    };
    // Filter deals by search and priority
    const filteredDeals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return deals.filter((deal)=>{
            const matchesSearch = !searchQuery.trim() || deal.title.toLowerCase().includes(searchQuery.toLowerCase()) || deal.companyName && deal.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || deal.customerName && deal.customerName.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPriority = selectedPriority === "all" || deal.priority === selectedPriority;
            return matchesSearch && matchesPriority;
        });
    }, [
        deals,
        searchQuery,
        selectedPriority
    ]);
    // Overall pipeline metrics
    const { totalPipeline, weightedPipeline, wonTotal, openCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let pipeline = 0;
        let weighted = 0;
        let won = 0;
        let open = 0;
        deals.forEach((d)=>{
            const val = Number(d.dealValue) || 0;
            if (d.stage === "won" || d.isWon) {
                won += val;
            } else if (d.stage !== "lost") {
                pipeline += val;
                weighted += val * ((d.winProbability || 50) / 100);
                open += 1;
            }
        });
        return {
            totalPipeline: pipeline,
            weightedPipeline: Math.round(weighted),
            wonTotal: won,
            openCount: open
        };
    }, [
        deals
    ]);
    // Native HTML5 Drag and Drop handlers
    const handleDragStart = (e, dealId)=>{
        e.dataTransfer.setData("text/plain", String(dealId));
        setDraggedDealId(dealId);
    };
    const handleDragEnd = ()=>{
        setDraggedDealId(null);
        setDragOverStage(null);
    };
    const handleDrop = (e, targetStage)=>{
        e.preventDefault();
        const dealId = e.dataTransfer.getData("text/plain") || draggedDealId;
        if (dealId) {
            onUpdateDealStage(dealId, targetStage);
            const stageObj = STAGES.find((s)=>s.id === targetStage);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Deal moved to ${stageObj?.label || targetStage}`);
        }
        setDraggedDealId(null);
        setDragOverStage(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 animate-in fade-in duration-150",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] p-4 sm:p-5 rounded-[10px] border border-slate-200/80 dark:border-[#2d3139] shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                                        size: 20,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Visual Deal Pipeline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300",
                                                children: [
                                                    filteredDeals.length,
                                                    " Deals"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-1",
                                        children: "Drag and drop or click stage actions to advance opportunities. Moving to “Won Deals” automatically initializes Client Workspace & Delivery Projects."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onOpenAddModal,
                                className: "h-11 px-4 rounded-[10px] text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-xs shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Create Deal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 border-t border-slate-100 dark:border-slate-800 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/70 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 block",
                                        children: "Open Pipeline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400 font-mono",
                                        children: [
                                            currencySymbol,
                                            totalPipeline.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 ml-1.5 font-medium",
                                        children: [
                                            "(",
                                            openCount,
                                            " active)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/70 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 block",
                                        children: "Weighted Forecast"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm sm:text-base font-extrabold text-purple-600 dark:text-purple-400 font-mono",
                                        children: [
                                            currencySymbol,
                                            weightedPipeline.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-purple-500 ml-1.5 font-medium",
                                        children: "ML probability"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/70 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 block",
                                        children: "Closed Won"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono",
                                        children: [
                                            currencySymbol,
                                            wonTotal.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-emerald-500 ml-1.5 font-medium",
                                        children: "Revenue booked"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200/70 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 block",
                                        children: "Win Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm sm:text-base font-extrabold text-slate-900 dark:text-white",
                                        children: deals.length > 0 ? `${Math.round(deals.filter((d)=>d.stage === "won" || d.isWon).length / deals.length * 100)}%` : "0%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-400 ml-1.5 font-medium",
                                        children: "Historical ratio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 16,
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search deals by title, company or contact...",
                                        className: "w-full h-10 pl-9.5 pr-8 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSearchQuery(""),
                                        className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1 shrink-0 mr-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Priority:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        "all",
                                        "urgent",
                                        "high",
                                        "medium",
                                        "low"
                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedPriority(p),
                                            className: `h-8 px-2.5 rounded-[8px] text-[11px] font-bold capitalize transition-all cursor-pointer shrink-0 ${selectedPriority === p ? "bg-indigo-600 text-white shadow-xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"}`,
                                            children: p
                                        }, p, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto pb-6 pt-1 items-start select-none scrollbar-thin",
                children: STAGES.map((col)=>{
                    const colDeals = filteredDeals.filter((d)=>d.stage === col.id);
                    const colValue = colDeals.reduce((acc, d)=>acc + (Number(d.dealValue) || 0), 0);
                    const isOver = dragOverStage === col.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onDragOver: (e)=>{
                            e.preventDefault();
                            setDragOverStage(col.id);
                        },
                        onDragLeave: ()=>{
                            if (dragOverStage === col.id) setDragOverStage(null);
                        },
                        onDrop: (e)=>handleDrop(e, col.id),
                        className: `w-[290px] sm:w-[310px] min-w-[290px] shrink-0 rounded-[10px] p-3.5 bg-slate-100/75 dark:bg-[#161f2e]/70 border transition-all flex flex-col space-y-3 ${isOver ? "border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-50/20 dark:bg-indigo-950/20" : "border-slate-200/80 dark:border-[#2d3139]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2 border-b border-slate-200/70 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-2.5 h-2.5 rounded-full shadow-xs ${col.dotColor}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-slate-900 dark:text-white",
                                                children: col.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px] font-extrabold px-1.5 py-0.2 rounded-full bg-white dark:bg-black/30 border border-slate-200/70 dark:border-slate-800 text-slate-600 dark:text-slate-300",
                                                children: colDeals.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black text-slate-900 dark:text-white font-mono",
                                        children: [
                                            currencySymbol,
                                            colValue.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 318,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 flex-1 min-h-[140px]",
                                children: colDeals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-[10px] border-2 border-dashed border-slate-200 dark:border-slate-800/80 text-center flex flex-col items-center justify-center gap-1.5 py-8 text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 338,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                            lineNumber: 337,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-slate-600 dark:text-slate-400",
                                            children: [
                                                "No deals in ",
                                                col.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                            lineNumber: 340,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-400",
                                            children: "Drag here or create new deal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                            lineNumber: 343,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                    lineNumber: 336,
                                    columnNumber: 19
                                }, this) : colDeals.map((deal)=>{
                                    const isDragging = String(draggedDealId) === String(deal.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        draggable: true,
                                        onDragStart: (e)=>handleDragStart(e, deal.id),
                                        onDragEnd: handleDragEnd,
                                        className: `p-3.5 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-[#2d3139] shadow-2xs space-y-2.5 transition-all cursor-grab active:cursor-grabbing hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md ${isDragging ? "opacity-40 scale-95 border-indigo-400" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 flex-1",
                                                        children: deal.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[6px] border ${deal.priority === "urgent" ? "bg-rose-500/10 text-rose-600 border-rose-500/20" : deal.priority === "high" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : deal.priority === "medium" ? "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" : "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700"}`,
                                                                children: deal.priority
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    openEditDeal(deal);
                                                                },
                                                                title: "Edit deal cost, requirements & scope",
                                                                className: "w-6 h-6 rounded-[6px] flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition cursor-pointer border border-transparent hover:border-amber-200 dark:hover:border-amber-800",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Edit01Icon"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 362,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                        size: 13,
                                                        className: "text-slate-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate font-medium",
                                                        children: deal.companyName || deal.customerName || "Independent Prospect"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 396,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pt-1 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-black text-sm text-indigo-600 dark:text-indigo-400 font-mono",
                                                        children: [
                                                            currencySymbol,
                                                            Number(deal.dealValue || 0).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-[6px] border border-emerald-200 dark:border-emerald-900/60",
                                                        children: [
                                                            deal.winProbability,
                                                            "% Win"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 404,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-full rounded-full transition-all ${deal.winProbability >= 70 ? "bg-emerald-500" : deal.winProbability >= 40 ? "bg-amber-500" : "bg-blue-500"}`,
                                                    style: {
                                                        width: `${deal.winProbability}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 414,
                                                columnNumber: 25
                                            }, this),
                                            deal.nextFollowUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-2 rounded-[8px] bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200/70 dark:border-indigo-900/60 text-[10.5px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300 font-bold truncate",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                                size: 12,
                                                                className: "text-indigo-500 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate",
                                                                children: [
                                                                    deal.nextFollowUp,
                                                                    " ",
                                                                    deal.followUpTime ? `@ ${deal.followUpTime}` : "",
                                                                    deal.followUpType ? ` (${deal.followUpType})` : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            openNoteFollowUp(deal, "followup");
                                                        },
                                                        className: "text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 ml-1 cursor-pointer",
                                                        children: "Reschedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 429,
                                                columnNumber: 27
                                            }, this),
                                            deal.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>openNoteFollowUp(deal, "notes"),
                                                className: "text-[10.5px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#161f2e] p-2 rounded-[6px] border border-slate-200/60 dark:border-slate-800 line-clamp-2 cursor-pointer hover:border-indigo-300 transition",
                                                title: "Click to view/add notes",
                                                children: [
                                                    "💬 ",
                                                    deal.notes
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 452,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 pt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>openNoteFollowUp(deal, "notes"),
                                                        className: "flex-1 h-6.5 px-2 rounded-[6px] text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition cursor-pointer flex items-center justify-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Note01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Note ",
                                                                    deal.notesList?.length ? `(${deal.notesList.length})` : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>openNoteFollowUp(deal, "followup"),
                                                        className: "flex-1 h-6.5 px-2 rounded-[6px] text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition cursor-pointer flex items-center justify-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: deal.nextFollowUp ? "Follow-up ✓" : "+ Follow-up"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 462,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5 text-xs",
                                                children: col.id === "won" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full py-1 rounded-[6px] bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-[10.5px] font-bold flex items-center justify-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Closed Won • Client Created"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 29
                                                }, this) : col.id === "lost" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>onUpdateDealStage(deal.id, "lead"),
                                                    className: "w-full py-1 text-[10px] font-bold rounded-[6px] bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition cursor-pointer",
                                                    children: "↺ Reopen Deal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 29
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        col.id === "proposal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onUpdateDealStage(deal.id, "lead"),
                                                            className: "h-7 px-2 rounded-[6px] text-[10px] font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-0.5",
                                                            title: "Move back to Discovery",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Back"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 33
                                                        }, this),
                                                        col.id === "negotiation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onUpdateDealStage(deal.id, "proposal"),
                                                            className: "h-7 px-2 rounded-[6px] text-[10px] font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-0.5",
                                                            title: "Move back to Proposal",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Back"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 33
                                                        }, this),
                                                        col.id === "lead" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onUpdateDealStage(deal.id, "proposal"),
                                                            className: "flex-1 h-7 text-[10px] font-bold rounded-[6px] bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 transition cursor-pointer flex items-center justify-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Send Proposal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 33
                                                        }, this),
                                                        col.id === "proposal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onUpdateDealStage(deal.id, "negotiation"),
                                                            className: "flex-1 h-7 text-[10px] font-bold rounded-[6px] bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 transition cursor-pointer flex items-center justify-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Negotiate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 540,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 33
                                                        }, this),
                                                        col.id === "negotiation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onUpdateDealStage(deal.id, "won"),
                                                            className: "flex-1 h-7 text-[10.5px] font-black rounded-[6px] bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center justify-center gap-1 cursor-pointer shadow-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Mark Won!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: deal.stage,
                                                            onChange: (e)=>onUpdateDealStage(deal.id, e.target.value),
                                                            className: "h-7 px-1 text-[9.5px] font-semibold rounded-[6px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#161f2e] text-slate-600 dark:text-slate-400 focus:outline-hidden cursor-pointer",
                                                            title: "Change Stage",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "lead",
                                                                    children: "Discovery"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "proposal",
                                                                    children: "Proposal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "negotiation",
                                                                    children: "Negotiation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 564,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "won",
                                                                    children: "Won"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "lost",
                                                                    children: "Lost"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                                lineNumber: 483,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, deal.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                        lineNumber: 352,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                                lineNumber: 334,
                                columnNumber: 15
                            }, this)
                        ]
                    }, col.id, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$NoteFollowUpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteFollowUpModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                itemType: "deal",
                item: modalDeal,
                initialTab: modalTab,
                onSaveDeal: onUpdateDeal
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$EditDealModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditDealModal"], {
                isOpen: isEditModalOpen,
                onClose: ()=>{
                    setIsEditModalOpen(false);
                    setEditDeal(null);
                },
                deal: editDeal,
                onUpdateDeal: (dealId, updates)=>{
                    onUpdateDeal?.(dealId, updates);
                    // If stage changed, also sync stage handler for kanban
                    if (updates.stage) {
                        onUpdateDealStage(dealId, updates.stage);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/DealsScreen.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgreementsScreen",
    ()=>AgreementsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementMetricsCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/agreements/AgreementMetricsCards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementListView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/agreements/AgreementListView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementDetailHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/agreements/AgreementDetailHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementDetailTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/agreements/AgreementDetailTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/agreements/AgreementModals.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/agreements/types.ts [app-ssr] (ecmascript)");
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
function AgreementsScreen({ clients = [] } = {}) {
    const { currencySymbol, formatAmount, formatCompact } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Persistence State
    const [agreements, setAgreements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Selected Agreement Detail View (null = list view)
    const [selectedAgreementId, setSelectedAgreementId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Active Tab within Detail View
    const [detailTab, setDetailTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    // Filtering & Search
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    // Modals
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSignModalOpen, setIsSignModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCertificateModalOpen, setIsCertificateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form States
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [signerForm, setSignerForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        role: "",
        email: "",
        consent: false
    });
    const [taskForm, setTaskForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        taskType: "deliverable",
        assignedTo: "",
        dueDate: "",
        isClientAction: false
    });
    // Discussion state
    const [messageInput, setMessageInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // AI Assistant state
    const [aiQuestion, setAiQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [aiAnswer, setAiAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Toast Notification
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (msg)=>{
        setToastMessage(msg);
        setTimeout(()=>setToastMessage(null), 3500);
    };
    // Load from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"]);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setAgreements(parsed);
                }
            }
        } catch (e) {
            console.error("Failed to load agreements from localStorage:", e);
        }
    }, []);
    // Save to localStorage
    const saveAgreements = (updated)=>{
        setAgreements(updated);
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"], JSON.stringify(updated));
        } catch (e) {
            console.error("Failed to save agreements to localStorage:", e);
        }
    };
    // Selected Agreement Object
    const selectedAgreement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return agreements.find((a)=>a.id === selectedAgreementId) || null;
    }, [
        agreements,
        selectedAgreementId
    ]);
    // Filtered Agreements List
    const filteredAgreements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return agreements.filter((item)=>{
            const q = searchQuery.toLowerCase().trim();
            const matchSearch = !q || item.title.toLowerCase().includes(q) || item.agreementNumber.toLowerCase().includes(q) || item.clientName.toLowerCase().includes(q) || item.notes.toLowerCase().includes(q);
            const matchStatus = statusFilter === "all" || item.status === statusFilter;
            const matchType = typeFilter === "all" || item.agreementType === typeFilter;
            return matchSearch && matchStatus && matchType;
        });
    }, [
        agreements,
        searchQuery,
        statusFilter,
        typeFilter
    ]);
    // Summary Metrics
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const total = agreements.length;
        const active = agreements.filter((a)=>a.status === "Active" || a.status === "Executed");
        const totalValue = active.reduce((sum, a)=>sum + (Number(a.value) || 0), 0);
        const pendingSignatures = agreements.filter((a)=>a.status === "Pending Signature").length;
        // Renewals in < 90 days
        const now = new Date();
        const renewalsSoon = agreements.filter((a)=>{
            if (!a.endDate) return false;
            const diffDays = Math.ceil((new Date(a.endDate).getTime() - now.getTime()) / (1000 * 3600 * 24));
            return diffDays >= 0 && diffDays <= 90;
        }).length;
        return {
            total,
            totalValue,
            pendingSignatures,
            renewalsSoon
        };
    }, [
        agreements
    ]);
    // Open Add Modal with clean defaults
    const handleOpenNewModal = ()=>{
        setFormData({
            agreementType: "MSA",
            autoRenewal: true,
            escalationPercent: 5,
            governingLaw: "Delaware, USA",
            liabilityCap: "1x Annual Contract Value",
            paymentTerms: "Net 30",
            slaUptime: "99.9%"
        });
        setIsAddModalOpen(true);
    };
    // Quick Preset Helper for Fast Creation
    const handleQuickPreset = (preset)=>{
        const today = new Date().toISOString().split("T")[0];
        const oneYearLater = new Date(Date.now() + 365 * 24 * 3600 * 1000).toISOString().split("T")[0];
        if (preset === "saas_msa") {
            setFormData({
                title: "Enterprise Master Services & Cloud AI Agreement",
                agreementType: "MSA",
                value: 50000,
                startDate: today,
                endDate: oneYearLater,
                autoRenewal: true,
                escalationPercent: 5,
                governingLaw: "Delaware, USA",
                liabilityCap: "$500,000 (Mutual Bilateral)",
                paymentTerms: "Net 30 Advance",
                slaUptime: "99.9% High Availability",
                notes: "Includes Standard Data Processing Addendum and 15% SLA service credit policy."
            });
        } else if (preset === "client_nda") {
            setFormData({
                title: "Mutual Confidentiality & Non-Disclosure Agreement (Bilateral)",
                agreementType: "NDA",
                value: 0,
                startDate: today,
                endDate: new Date(Date.now() + 730 * 24 * 3600 * 1000).toISOString().split("T")[0],
                autoRenewal: false,
                escalationPercent: 0,
                governingLaw: "State of New York, USA",
                liabilityCap: "Standard Injunctive Relief",
                paymentTerms: "N/A",
                slaUptime: "N/A",
                notes: "Strict 2-year mutual non-disclosure covering proprietary algorithms and trade secrets."
            });
        } else if (preset === "sow") {
            setFormData({
                title: "Statement of Work #1 — Infrastructure & AI Integration",
                agreementType: "SOW",
                value: 25000,
                startDate: today,
                endDate: new Date(Date.now() + 90 * 24 * 3600 * 1000).toISOString().split("T")[0],
                autoRenewal: false,
                escalationPercent: 0,
                governingLaw: "Delaware, USA",
                liabilityCap: "1x SOW Value",
                paymentTerms: "50% Advance / 50% Milestone Sign-off",
                slaUptime: "99.9%",
                notes: "Deliverable scope: Architecture audit, API gateway setup, and staff enablement."
            });
        }
    };
    // Create Agreement Handler
    const handleCreateAgreement = ()=>{
        if (!formData.title?.trim()) {
            showToast("Please enter an agreement title");
            return;
        }
        const clientName = formData.clientName?.trim() || "Independent Client";
        const agreementNumber = formData.agreementNumber?.trim() || `AGR-${new Date().getFullYear()}-${String(agreements.length + 1).padStart(3, "0")}`;
        const value = Number(formData.value) || 0;
        const newAgreement = {
            id: `agr-${Date.now()}`,
            agreementNumber,
            title: formData.title.trim(),
            clientName,
            clientId: formData.clientId,
            dealId: formData.dealId,
            agreementType: formData.agreementType || "MSA",
            value,
            status: formData.status || "Draft",
            startDate: formData.startDate || new Date().toISOString().split("T")[0],
            endDate: formData.endDate || new Date(Date.now() + 365 * 24 * 3600 * 1000).toISOString().split("T")[0],
            autoRenewal: formData.autoRenewal ?? true,
            escalationPercent: Number(formData.escalationPercent) || 5,
            governingLaw: formData.governingLaw || "Delaware, USA",
            liabilityCap: formData.liabilityCap || "1x Annual Value",
            paymentTerms: formData.paymentTerms || "Net 30",
            slaUptime: formData.slaUptime || "99.9%",
            notes: formData.notes || "",
            signatories: [
                {
                    id: `sig-1-${Date.now()}`,
                    name: "Workspace Lead",
                    role: "Authorized Representative",
                    email: "legal@company.com",
                    status: "Pending"
                },
                {
                    id: `sig-2-${Date.now()}`,
                    name: clientName,
                    role: "Client Authorized Signatory",
                    email: "procurement@client.com",
                    status: "Pending"
                }
            ],
            documents: [
                {
                    id: `doc-${Date.now()}`,
                    name: `${formData.agreementType || "MSA"} Main Instrument.pdf`,
                    type: "Official Instrument",
                    size: "420 KB",
                    uploadedAt: new Date().toLocaleDateString()
                }
            ],
            tasks: [
                {
                    id: `tsk-1-${Date.now()}`,
                    title: "Initial legal & commercial term alignment",
                    taskType: "deliverable",
                    assignedTo: "Contract Owner",
                    dueDate: formData.startDate || new Date().toISOString().split("T")[0],
                    status: "completed",
                    isClientAction: false
                }
            ],
            messages: [
                {
                    id: `msg-${Date.now()}`,
                    author: "System",
                    role: "Audit Log",
                    time: "Just now",
                    text: `Agreement ${agreementNumber} initialized in status Draft.`
                }
            ],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        saveAgreements([
            newAgreement,
            ...agreements
        ]);
        setIsAddModalOpen(false);
        setFormData({});
        setSelectedAgreementId(newAgreement.id);
        showToast(`✅ Agreement ${newAgreement.agreementNumber} created successfully!`);
    };
    // Update Status Handler
    const handleUpdateStatus = (newStatus)=>{
        if (!selectedAgreement) return;
        const updated = agreements.map((a)=>{
            if (a.id === selectedAgreement.id) {
                return {
                    ...a,
                    status: newStatus,
                    updatedAt: new Date().toISOString(),
                    messages: [
                        ...a.messages,
                        {
                            id: `msg-${Date.now()}`,
                            author: "System",
                            role: "Audit Log",
                            time: "Just now",
                            text: `Status changed from ${a.status} to ${newStatus}.`
                        }
                    ]
                };
            }
            return a;
        });
        saveAgreements(updated);
        showToast(`Status updated to: ${newStatus}`);
    };
    // Delete Agreement Handler
    const handleDeleteAgreement = (id)=>{
        if (!confirm("Are you sure you want to delete this agreement? This action cannot be undone.")) return;
        const updated = agreements.filter((a)=>a.id !== id);
        saveAgreements(updated);
        if (selectedAgreementId === id) {
            setSelectedAgreementId(null);
        }
        showToast("Agreement deleted successfully.");
    };
    // Toggle Task Status
    const handleToggleTask = (taskId)=>{
        if (!selectedAgreement) return;
        const updated = agreements.map((a)=>{
            if (a.id === selectedAgreement.id) {
                const nextTasks = a.tasks.map((t)=>{
                    if (t.id === taskId) {
                        return {
                            ...t,
                            status: t.status === "completed" ? "todo" : "completed"
                        };
                    }
                    return t;
                });
                return {
                    ...a,
                    tasks: nextTasks,
                    updatedAt: new Date().toISOString()
                };
            }
            return a;
        });
        saveAgreements(updated);
    };
    // Add Task Handler
    const handleAddTask = ()=>{
        if (!selectedAgreement || !taskForm.title.trim()) return;
        const newTask = {
            id: `task-${Date.now()}`,
            title: taskForm.title.trim(),
            taskType: taskForm.taskType,
            assignedTo: taskForm.assignedTo.trim() || "Contract Team",
            dueDate: taskForm.dueDate || new Date().toISOString().split("T")[0],
            status: "todo",
            isClientAction: taskForm.isClientAction
        };
        const updated = agreements.map((a)=>{
            if (a.id === selectedAgreement.id) {
                return {
                    ...a,
                    tasks: [
                        ...a.tasks,
                        newTask
                    ],
                    updatedAt: new Date().toISOString()
                };
            }
            return a;
        });
        saveAgreements(updated);
        setTaskForm({
            title: "",
            taskType: "deliverable",
            assignedTo: "",
            dueDate: "",
            isClientAction: false
        });
        setIsAddTaskModalOpen(false);
        showToast("Obligation task added.");
    };
    // Document Upload Simulator (captures real file meta)
    const handleFileUpload = (e)=>{
        if (!selectedAgreement || !e.target.files?.length) return;
        const file = e.target.files[0];
        const newDoc = {
            id: `doc-${Date.now()}`,
            name: file.name,
            type: file.type || "Document",
            size: `${(file.size / 1024).toFixed(1)} KB`,
            uploadedAt: new Date().toLocaleDateString()
        };
        const updated = agreements.map((a)=>{
            if (a.id === selectedAgreement.id) {
                return {
                    ...a,
                    documents: [
                        newDoc,
                        ...a.documents
                    ],
                    updatedAt: new Date().toISOString()
                };
            }
            return a;
        });
        saveAgreements(updated);
        showToast(`Attached document: ${file.name}`);
        e.target.value = "";
    };
    // Sign Document Handler
    const handleSignDocument = ()=>{
        if (!selectedAgreement || !signerForm.name.trim() || !signerForm.consent) {
            showToast("Please provide signer name and agree to consent.");
            return;
        }
        const hexChars = "0123456789abcdef";
        let genHash = "sha256-";
        for(let i = 0; i < 32; i++)genHash += hexChars[Math.floor(Math.random() * hexChars.length)];
        const updated = agreements.map((a)=>{
            if (a.id === selectedAgreement.id) {
                const nextSigners = a.signatories.map((sig, idx)=>{
                    if (idx === 0) {
                        return {
                            ...sig,
                            name: signerForm.name,
                            role: signerForm.role || sig.role,
                            email: signerForm.email || sig.email,
                            status: "Signed",
                            signedAt: new Date().toLocaleString(),
                            ip: "106.51.72.18",
                            securityCode: genHash
                        };
                    }
                    return sig;
                });
                const isFullySigned = nextSigners.every((s)=>s.status === "Signed");
                return {
                    ...a,
                    status: isFullySigned ? "Executed" : "Pending Signature",
                    signatories: nextSigners,
                    updatedAt: new Date().toISOString(),
                    messages: [
                        ...a.messages,
                        {
                            id: `msg-${Date.now()}`,
                            author: signerForm.name,
                            role: "Signatory",
                            time: "Just now",
                            text: `Digitally signed document under PKI seal (${genHash.slice(0, 16)}...).`
                        }
                    ]
                };
            }
            return a;
        });
        saveAgreements(updated);
        setIsSignModalOpen(false);
        setSignerForm({
            name: "",
            role: "",
            email: "",
            consent: false
        });
        showToast("Document digitally signed & stamped with SHA-256 seal!");
    };
    // Send Message Handler
    const handleSendMessage = ()=>{
        if (!selectedAgreement || !messageInput.trim()) return;
        const newMsg = {
            id: `msg-${Date.now()}`,
            author: "You",
            role: "Team",
            time: "Just now",
            text: messageInput.trim()
        };
        const updated = agreements.map((a)=>{
            if (a.id === selectedAgreement.id) {
                return {
                    ...a,
                    messages: [
                        ...a.messages,
                        newMsg
                    ],
                    updatedAt: new Date().toISOString()
                };
            }
            return a;
        });
        saveAgreements(updated);
        setMessageInput("");
    };
    // AI Assistant Query Handler
    const handleAiQuestion = (queryText)=>{
        if (!selectedAgreement) return;
        const q = queryText.toLowerCase();
        let answer = "";
        if (q.includes("payment") || q.includes("term")) {
            answer = `Payment terms for ${selectedAgreement.clientName} are strictly "${selectedAgreement.paymentTerms}". Standard quarterly invoices apply.`;
        } else if (q.includes("liability") || q.includes("cap")) {
            answer = `The negotiated liability cap is "${selectedAgreement.liabilityCap}". Mutual bilateral limitation excluding gross negligence.`;
        } else if (q.includes("sla") || q.includes("uptime")) {
            answer = `Service availability commitment is guaranteed at ${selectedAgreement.slaUptime} with standard service credits on breach.`;
        } else if (q.includes("sign") || q.includes("who signed")) {
            const signedCount = selectedAgreement.signatories.filter((s)=>s.status === "Signed").length;
            answer = `${signedCount} of ${selectedAgreement.signatories.length} signatories have signed. Current status is ${selectedAgreement.status}.`;
        } else if (q.includes("renewal") || q.includes("end date")) {
            answer = `Contract end date is ${selectedAgreement.endDate}. Auto-renewal is ${selectedAgreement.autoRenewal ? "ACTIVE" : "DISABLED"} with an annual indexation rate of ${selectedAgreement.escalationPercent}%.`;
        } else {
            answer = `Contract "${selectedAgreement.title}" with ${selectedAgreement.clientName} is currently ${selectedAgreement.status}. Governed under ${selectedAgreement.governingLaw} with total value of ${formatAmount(selectedAgreement.value)}.`;
        }
        setAiAnswer({
            query: queryText,
            answer
        });
    };
    // Download Printable Agreement Summary
    const handleDownloadAgreementSlip = (agr)=>{
        const content = `
========================================================================
             PINGDART CRM — OFFICIAL AGREEMENT SLIP
========================================================================

Agreement Number : ${agr.agreementNumber}
Title            : ${agr.title}
Client Name      : ${agr.clientName}
Contract Type    : ${agr.agreementType}
Current Status   : ${agr.status.toUpperCase()}
Total Value      : ${currencySymbol} ${agr.value.toLocaleString()}
Term Period      : ${agr.startDate} to ${agr.endDate}
Auto-Renewal     : ${agr.autoRenewal ? "Active (+5% Escalation)" : "Disabled"}
Governing Law    : ${agr.governingLaw}
Liability Cap    : ${agr.liabilityCap}
Payment Terms    : ${agr.paymentTerms}
SLA Commitment   : ${agr.slaUptime}

------------------------------------------------------------------------
SIGNATORIES AUDIT TRAIL:
${agr.signatories.map((s, i)=>`[${i + 1}] ${s.name} (${s.role}) — Status: ${s.status}${s.signedAt ? ` on ${s.signedAt} (Hash: ${s.securityCode || "Verified"})` : ""}`).join("\n")}

------------------------------------------------------------------------
OBLIGATIONS & MILESTONES:
${agr.tasks.map((t, i)=>`• [${t.status === "completed" ? "X" : " "}] ${t.title} (Assigned: ${t.assignedTo}, Due: ${t.dueDate})`).join("\n")}

------------------------------------------------------------------------
Generated from PingDart CLM Engine on ${new Date().toLocaleString()}
SHA-256 Stamp: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
========================================================================
    `.trim();
        const blob = new Blob([
            content
        ], {
            type: "text/plain;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${agr.agreementNumber}_Executed_Summary.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        showToast(`📄 Downloaded official agreement slip for ${agr.agreementNumber}`);
    };
    // Edit Agreement Handler
    const handleEditAgreement = ()=>{
        if (!selectedAgreement) return;
        const updated = agreements.map((a)=>{
            if (a.id !== selectedAgreement.id) return a;
            const merged = {
                ...a,
                title: (formData.title ?? a.title).trim() || a.title,
                clientName: (formData.clientName ?? a.clientName).trim() || a.clientName,
                agreementType: formData.agreementType ?? a.agreementType,
                value: Number(formData.value ?? a.value),
                status: formData.status ?? a.status,
                startDate: formData.startDate ?? a.startDate,
                endDate: formData.endDate ?? a.endDate,
                autoRenewal: formData.autoRenewal ?? a.autoRenewal,
                escalationPercent: Number(formData.escalationPercent ?? a.escalationPercent),
                governingLaw: (formData.governingLaw ?? a.governingLaw).trim() || a.governingLaw,
                liabilityCap: (formData.liabilityCap ?? a.liabilityCap).trim() || a.liabilityCap,
                paymentTerms: (formData.paymentTerms ?? a.paymentTerms).trim() || a.paymentTerms,
                slaUptime: (formData.slaUptime ?? a.slaUptime).trim() || a.slaUptime,
                notes: formData.notes ?? a.notes,
                updatedAt: new Date().toISOString(),
                messages: [
                    ...a.messages,
                    {
                        id: `msg-${Date.now()}`,
                        author: "System",
                        role: "Audit Log",
                        time: "Just now",
                        text: `Agreement fields updated — edited via Document Editor on ${new Date().toLocaleString()}.`
                    }
                ]
            };
            return merged;
        });
        saveAgreements(updated);
        setIsEditModalOpen(false);
        setFormData({});
        showToast(`✏️ Agreement updated and saved successfully!`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in duration-150",
        children: [
            toastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-3 rounded-[10px] shadow-xl border border-slate-700 flex items-center gap-3 text-xs font-bold animate-in slide-in-from-bottom-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                        size: 16,
                        className: "text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toastMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 665,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setToastMessage(null),
                        className: "ml-2 text-slate-400 hover:text-white cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                            lineNumber: 670,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 666,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 663,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleFileUpload,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this),
            !selectedAgreement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementMetricsCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgreementMetricsCards"], {
                        metrics: metrics,
                        formatCompact: formatCompact
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 686,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementListView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgreementListView"], {
                        filteredAgreements: filteredAgreements,
                        searchQuery: searchQuery,
                        statusFilter: statusFilter,
                        typeFilter: typeFilter,
                        onSearchChange: setSearchQuery,
                        onStatusFilterChange: setStatusFilter,
                        onTypeFilterChange: setTypeFilter,
                        onViewAgreement: setSelectedAgreementId,
                        onDeleteAgreement: handleDeleteAgreement,
                        onDownloadSlip: handleDownloadAgreementSlip,
                        onNewAgreement: handleOpenNewModal,
                        onQuickPreset: (preset)=>{
                            handleQuickPreset(preset);
                            setIsAddModalOpen(true);
                        },
                        formatAmount: formatAmount
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 687,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 685,
                columnNumber: 9
            }, this) : /* VIEW 2: Agreement Detail View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementDetailHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgreementDetailHeader"], {
                        agreement: selectedAgreement,
                        formatAmount: formatAmount,
                        onBack: ()=>setSelectedAgreementId(null),
                        onEdit: ()=>{
                            setFormData({
                                ...selectedAgreement
                            });
                            setIsEditModalOpen(true);
                        },
                        onDownload: ()=>handleDownloadAgreementSlip(selectedAgreement),
                        onDelete: ()=>handleDeleteAgreement(selectedAgreement.id),
                        onSign: ()=>{
                            setSignerForm({
                                name: "Authorized Signer",
                                role: "Account Executive",
                                email: "legal@pingdart.com",
                                consent: false
                            });
                            setIsSignModalOpen(true);
                        },
                        onUpdateStatus: handleUpdateStatus
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 709,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementDetailTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgreementDetailTabs"], {
                        agreement: selectedAgreement,
                        activeTab: detailTab,
                        onTabChange: setDetailTab,
                        messageInput: messageInput,
                        aiQuestion: aiQuestion,
                        aiAnswer: aiAnswer,
                        onMessageInputChange: setMessageInput,
                        onSendMessage: handleSendMessage,
                        onAiQuestionChange: setAiQuestion,
                        onAskAi: handleAiQuestion,
                        onClearAiAnswer: ()=>setAiAnswer(null),
                        onToggleTask: handleToggleTask,
                        onAddTask: ()=>setIsAddTaskModalOpen(true),
                        onUploadDocument: ()=>fileInputRef.current?.click(),
                        onDownloadSlip: ()=>handleDownloadAgreementSlip(selectedAgreement),
                        onViewCertificate: ()=>setIsCertificateModalOpen(true),
                        onSignNow: ()=>{
                            setSignerForm({
                                name: "Authorized Signer",
                                role: "Account Executive",
                                email: "legal@pingdart.com",
                                consent: false
                            });
                            setIsSignModalOpen(true);
                        },
                        currencySymbol: currencySymbol,
                        formatAmount: formatAmount
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                        lineNumber: 731,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 708,
                columnNumber: 9
            }, this),
            isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewAgreementModal"], {
                formData: formData,
                clients: clients,
                currencySymbol: currencySymbol,
                onFormChange: setFormData,
                onQuickPreset: handleQuickPreset,
                onCreate: handleCreateAgreement,
                onClose: ()=>setIsAddModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 765,
                columnNumber: 9
            }, this),
            isSignModalOpen && selectedAgreement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ESignModal"], {
                agreement: selectedAgreement,
                signerForm: signerForm,
                onSignerFormChange: setSignerForm,
                onSign: handleSignDocument,
                onClose: ()=>setIsSignModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 777,
                columnNumber: 9
            }, this),
            isCertificateModalOpen && selectedAgreement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CertificateModal"], {
                agreement: selectedAgreement,
                formatAmount: formatAmount,
                onDownload: ()=>handleDownloadAgreementSlip(selectedAgreement),
                onClose: ()=>setIsCertificateModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 787,
                columnNumber: 9
            }, this),
            isAddTaskModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddTaskModal"], {
                taskForm: taskForm,
                onTaskFormChange: setTaskForm,
                onAdd: handleAddTask,
                onClose: ()=>setIsAddTaskModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 796,
                columnNumber: 9
            }, this),
            isEditModalOpen && selectedAgreement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$agreements$2f$AgreementModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditAgreementModal"], {
                agreement: selectedAgreement,
                formData: formData,
                currencySymbol: currencySymbol,
                onFormChange: setFormData,
                onSave: handleEditAgreement,
                onClose: ()=>{
                    setIsEditModalOpen(false);
                    setFormData({});
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
                lineNumber: 805,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/AgreementsScreen.tsx",
        lineNumber: 660,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_user_components_modules_crm_screens_4861b499._.js.map