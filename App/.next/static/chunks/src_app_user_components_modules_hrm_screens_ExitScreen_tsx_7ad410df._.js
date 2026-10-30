(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExitScreen",
    ()=>ExitScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.mjs [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.mjs [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.mjs [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hrmApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ExitScreen({ employees, departments, branches, userRole = "Admin", canAccessAdmin = true }) {
    var _selectedResignationForAction_employee, _selectedResignationForAction_employee1, _selectedClearance_employee, _selectedClearance_employee1, _clearanceModalData_autoAudit_assignedAssets, _clearanceModalData_autoAudit_assignedAssets1, _clearanceModalData_autoAudit_activeLoans, _clearanceModalData_autoAudit_activeLoans1, _selectedResignationForFnf_employee, _selectedResignationForFnf_employee1, _selectedResignationForFnf_employee2, _selectedSettlementToPay_employee, _selectedSettlementToPay_employee1, _selectedSettlementToPay_employee2, _docResignation_employee, _docResignation_employee1, _docResignation_employee2, _this, _docResignation_employee3, _this1, _docResignation_employee4, _docResignation_employee_department, _docResignation_employee5, _docResignation_employee6, _docResignation_employee7, _docResignation_employee8, _this2, _docResignation_employee9, _this3, _docResignation_employee10, _docResignation_employee_department1, _docResignation_employee11, _docResignation_employee12, _docResignation_employee13, _docResignation_employee14, _docResignation_employee15, _docResignation_fnfSettlement, _docResignation_fnfSettlement1, _docResignation_fnfSettlement2, _docResignation_fnfSettlement3, _docResignation_fnfSettlement4, _docResignation_fnfSettlement5, _docResignation_fnfSettlement6, _docResignation_fnfSettlement7, _docResignation_fnfSettlement8, _docResignation_fnfSettlement9, _docResignation_employee16, _docResignation_employee17;
    _s();
    // State
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("resignations");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pendingResignations: 0,
        inNoticePeriod: 0,
        clearancePending: 0,
        settlementReady: 0,
        completedExits: 0
    });
    const [resignations, setResignations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clearances, setClearances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [settlements, setSettlements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Filters
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedDeptId, setSelectedDeptId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // Modals
    const [isSubmitModalOpen, setIsSubmitModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedResignationForAction, setSelectedResignationForAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [approvalModalAction, setApprovalModalAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [approvalComments, setApprovalComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [approvalLwd, setApprovalLwd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Clearance Details Modal
    const [selectedClearance, setSelectedClearance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clearanceModalData, setClearanceModalData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClearanceModalOpen, setIsClearanceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clearanceLoading, setClearanceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deptToUpdate, setDeptToUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deptStatusInput, setDeptStatusInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("approved");
    const [deptNotesInput, setDeptNotesInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // FNF Calculation & Settle Modal
    const [selectedResignationForFnf, setSelectedResignationForFnf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fnfCalcData, setFnfCalcData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFnfModalOpen, setIsFnfModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fnfLoading, setFnfLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fnfForm, setFnfForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        monthlySalary: 0,
        workingDaysInFinalMonth: 30,
        pendingSalary: 0,
        leaveEncashmentDays: 0,
        leaveEncashment: 0,
        bonusAmount: 0,
        commissionAmount: 0,
        gratuityAmount: 0,
        otherEarnings: 0,
        grossPayable: 0,
        loanRecovery: 0,
        assetRecovery: 0,
        noticeShortfallDays: 0,
        noticeShortfallRecovery: 0,
        taxDeduction: 0,
        otherDeductions: 0,
        totalRecovery: 0,
        netSettlement: 0,
        remarks: ""
    });
    // Finalize / Pay FNF Modal
    const [isPayModalOpen, setIsPayModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSettlementToPay, setSelectedSettlementToPay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("bank_transfer");
    const [paymentReference, setPaymentReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paymentDate, setPaymentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split("T")[0]);
    // Document Viewer Modal
    const [documentModalType, setDocumentModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [docResignation, setDocResignation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // New Resignation Form
    const [submitForm, setSubmitForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        employeeId: "",
        resignationDate: new Date().toISOString().split("T")[0],
        noticePeriodDays: 30,
        reason: "",
        remarks: "",
        exitType: "resignation"
    });
    // Load Initial Data
    const loadExitData = async ()=>{
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].getResignations();
            if (res && res.success) {
                setResignations(res.data || []);
                setClearances(res.clearances || []);
                setSettlements(res.settlements || []);
                if (res.stats) {
                    setStats(res.stats);
                }
            }
        } catch (err) {
            console.error("Error loading exit records:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load exit management data");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExitScreen.useEffect": ()=>{
            loadExitData();
        }
    }["ExitScreen.useEffect"], []);
    // Compute stats if backend returned empty
    const activeStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExitScreen.useMemo[activeStats]": ()=>{
            return {
                pendingResignations: stats.pendingResignations || resignations.filter({
                    "ExitScreen.useMemo[activeStats]": (r)=>r.status === "pending"
                }["ExitScreen.useMemo[activeStats]"]).length,
                inNoticePeriod: stats.inNoticePeriod || resignations.filter({
                    "ExitScreen.useMemo[activeStats]": (r)=>r.status === "approved"
                }["ExitScreen.useMemo[activeStats]"]).length,
                clearancePending: stats.clearancePending || clearances.filter({
                    "ExitScreen.useMemo[activeStats]": (c)=>c.status === "pending" || c.status === "in_progress"
                }["ExitScreen.useMemo[activeStats]"]).length,
                settlementReady: stats.settlementReady || settlements.filter({
                    "ExitScreen.useMemo[activeStats]": (s)=>s.status === "draft" || s.status === "pending_approval"
                }["ExitScreen.useMemo[activeStats]"]).length,
                completedExits: stats.completedExits || resignations.filter({
                    "ExitScreen.useMemo[activeStats]": (r)=>r.status === "completed"
                }["ExitScreen.useMemo[activeStats]"]).length
            };
        }
    }["ExitScreen.useMemo[activeStats]"], [
        stats,
        resignations,
        clearances,
        settlements
    ]);
    // Filtered Resignations
    const filteredResignations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExitScreen.useMemo[filteredResignations]": ()=>{
            return resignations.filter({
                "ExitScreen.useMemo[filteredResignations]": (r)=>{
                    var _r_employee, _r_employee1, _r_employee2, _r_employee3;
                    const empName = `${((_r_employee = r.employee) === null || _r_employee === void 0 ? void 0 : _r_employee.firstName) || ""} ${((_r_employee1 = r.employee) === null || _r_employee1 === void 0 ? void 0 : _r_employee1.lastName) || ""}`.toLowerCase();
                    const empCode = (((_r_employee2 = r.employee) === null || _r_employee2 === void 0 ? void 0 : _r_employee2.empCode) || "").toLowerCase();
                    const q = searchQuery.toLowerCase();
                    const matchesSearch = !q || empName.includes(q) || empCode.includes(q) || (r.reason || "").toLowerCase().includes(q);
                    const matchesStatus = statusFilter === "all" || r.status === statusFilter;
                    const matchesDept = selectedDeptId === "all" || ((_r_employee3 = r.employee) === null || _r_employee3 === void 0 ? void 0 : _r_employee3.departmentId) === selectedDeptId;
                    return matchesSearch && matchesStatus && matchesDept;
                }
            }["ExitScreen.useMemo[filteredResignations]"]);
        }
    }["ExitScreen.useMemo[filteredResignations]"], [
        resignations,
        searchQuery,
        statusFilter,
        selectedDeptId
    ]);
    // Handle Resignation Submission
    const handleSubmitResignation = async (e)=>{
        e.preventDefault();
        if (!submitForm.employeeId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select an employee");
            return;
        }
        if (!submitForm.reason) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please provide a reason for resignation");
            return;
        }
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].submitResignation(submitForm);
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Resignation submitted successfully and clearance initiated");
                setIsSubmitModalOpen(false);
                setSubmitForm({
                    employeeId: "",
                    resignationDate: new Date().toISOString().split("T")[0],
                    noticePeriodDays: 30,
                    reason: "",
                    remarks: "",
                    exitType: "resignation"
                });
                loadExitData();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to submit resignation");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to submit resignation");
        } finally{
            setLoading(false);
        }
    };
    // Handle Approve / Reject Resignation
    const handleUpdateResignationStatus = async ()=>{
        if (!selectedResignationForAction || !approvalModalAction) return;
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].updateResignationStatus(selectedResignationForAction.id, {
                status: approvalModalAction === "approve" ? "approved" : "rejected",
                rejectionReason: approvalModalAction === "reject" ? approvalComments : undefined,
                lastWorkingDate: approvalLwd || selectedResignationForAction.tentativeLastWorkingDate || undefined,
                remarks: approvalComments
            });
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Resignation ${approvalModalAction === "approve" ? "approved" : "rejected"}`);
                setSelectedResignationForAction(null);
                setApprovalModalAction(null);
                setApprovalComments("");
                setApprovalLwd("");
                loadExitData();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to update resignation");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Error updating resignation");
        } finally{
            setLoading(false);
        }
    };
    // Open Clearance Inspection Modal
    const handleOpenClearance = async (clearance)=>{
        setSelectedClearance(clearance);
        setIsClearanceModalOpen(true);
        setClearanceLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].getExitClearance(clearance.id);
            if (res.success && res.data) {
                setClearanceModalData(res.data);
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load clearance audit data");
        } finally{
            setClearanceLoading(false);
        }
    };
    // Update Individual Department Clearance
    const handleUpdateDepartmentStatus = async ()=>{
        if (!selectedClearance || !deptToUpdate) return;
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].updateDepartmentClearance(selectedClearance.id, {
                department: deptToUpdate,
                status: deptStatusInput,
                notes: deptNotesInput
            });
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${deptToUpdate.toUpperCase()} clearance marked as ${deptStatusInput}`);
                setDeptToUpdate(null);
                setDeptNotesInput("");
                // Reload modal data
                const refreshClearance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].getExitClearance(selectedClearance.id);
                if (refreshClearance.success) {
                    setClearanceModalData(refreshClearance.data);
                }
                loadExitData();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to update clearance");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update department clearance");
        } finally{
            setLoading(false);
        }
    };
    // Open FNF Calculator Modal
    const handleOpenFnfCalculator = async (resignation)=>{
        setSelectedResignationForFnf(resignation);
        setIsFnfModalOpen(true);
        setFnfLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].calculateFnf(resignation.employeeId, resignation.id);
            if (res.success && res.data) {
                const c = res.data;
                setFnfCalcData(c);
                setFnfForm({
                    monthlySalary: c.monthlySalary,
                    workingDaysInFinalMonth: c.workingDaysInFinalMonth,
                    pendingSalary: c.pendingSalary,
                    leaveEncashmentDays: c.leaveEncashmentDays,
                    leaveEncashment: c.leaveEncashment,
                    bonusAmount: c.bonusAmount || 0,
                    commissionAmount: c.commissionAmount || 0,
                    gratuityAmount: c.gratuityAmount || 0,
                    otherEarnings: c.otherEarnings || 0,
                    grossPayable: c.grossPayable || 0,
                    loanRecovery: c.loanRecovery || 0,
                    assetRecovery: c.assetRecovery || 0,
                    noticeShortfallDays: c.noticeShortfallDays || 0,
                    noticeShortfallRecovery: c.noticeShortfallRecovery || 0,
                    taxDeduction: c.taxDeduction || 0,
                    otherDeductions: c.otherDeductions || 0,
                    totalRecovery: c.totalRecovery || 0,
                    netSettlement: c.netSettlement || 0,
                    remarks: "Calculated with automated cross-module audit checks"
                });
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to run automated FNF calculation");
        } finally{
            setFnfLoading(false);
        }
    };
    // Recalculate Live Net in FNF Modal
    const handleFormChange = (field, val)=>{
        const updated = {
            ...fnfForm,
            [field]: val
        };
        // Gross = pendingSalary + leaveEncashment + bonus + commission + gratuity + otherEarnings
        const gross = Number(updated.pendingSalary || 0) + Number(updated.leaveEncashment || 0) + Number(updated.bonusAmount || 0) + Number(updated.commissionAmount || 0) + Number(updated.gratuityAmount || 0) + Number(updated.otherEarnings || 0);
        // Total Recovery = loanRecovery + assetRecovery + noticeShortfallRecovery + taxDeduction + otherDeductions
        const recovery = Number(updated.loanRecovery || 0) + Number(updated.assetRecovery || 0) + Number(updated.noticeShortfallRecovery || 0) + Number(updated.taxDeduction || 0) + Number(updated.otherDeductions || 0);
        const net = gross - recovery;
        setFnfForm({
            ...updated,
            grossPayable: gross,
            totalRecovery: recovery,
            netSettlement: net
        });
    };
    // Save / Update FNF Draft
    const handleSaveFnf = async ()=>{
        if (!selectedResignationForFnf) return;
        try {
            var _selectedResignationForFnf_clearance;
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].createOrUpdateFnf({
                employeeId: selectedResignationForFnf.employeeId,
                resignationId: selectedResignationForFnf.id,
                clearanceId: (_selectedResignationForFnf_clearance = selectedResignationForFnf.clearance) === null || _selectedResignationForFnf_clearance === void 0 ? void 0 : _selectedResignationForFnf_clearance.id,
                ...fnfForm
            });
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("FNF settlement statement generated and saved");
                setIsFnfModalOpen(false);
                loadExitData();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to save FNF settlement");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to save FNF statement");
        } finally{
            setLoading(false);
        }
    };
    // Finalize & Pay Settlement
    const handleFinalizeAndSettle = async ()=>{
        if (!selectedSettlementToPay) return;
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].finalizeAndSettleFnf(selectedSettlementToPay.id, {
                paymentMethod,
                paymentReference,
                paymentDate,
                remarks: "Final settlement disbursed. Employee status marked Exited and user access revoked."
            });
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("FNF finalized! Employee transitioned to 'Exited' and system access disabled.");
                setIsPayModalOpen(false);
                setSelectedSettlementToPay(null);
                loadExitData();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to finalize FNF settlement");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to finalize settlement");
        } finally{
            setLoading(false);
        }
    };
    // Format Helpers
    const fmtCurrency = (val)=>{
        const num = Number(val || 0);
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(num);
    };
    const getStatusBadge = (status)=>{
        switch(status){
            case "approved":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        " Approved / In Notice"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 450,
                    columnNumber: 11
                }, this);
            case "pending":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this),
                        " Pending Review"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 456,
                    columnNumber: 11
                }, this);
            case "completed":
            case "settled":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 464,
                            columnNumber: 13
                        }, this),
                        " Completed & Exited"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 463,
                    columnNumber: 11
                }, this);
            case "rejected":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 470,
                            columnNumber: 13
                        }, this),
                        " Rejected"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 469,
                    columnNumber: 11
                }, this);
            case "withdrawn":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20",
                    children: "Withdrawn"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 475,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
                    children: status
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 481,
                    columnNumber: 11
                }, this);
        }
    };
    const getClearanceBadge = (status)=>{
        switch(status){
            case "approved":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-2.5 h-2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 493,
                            columnNumber: 13
                        }, this),
                        " Cleared"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 492,
                    columnNumber: 11
                }, this);
            case "rejected":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200 dark:border-rose-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-2.5 h-2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this),
                        " Blocked"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 498,
                    columnNumber: 11
                }, this);
            case "waived":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
                    children: "Waived"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 504,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-2.5 h-2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 511,
                            columnNumber: 13
                        }, this),
                        " Pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 510,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/30 transition-all flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                        children: "Pending Resignations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 527,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
                                        children: activeStats.pendingResignations
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-amber-500 font-medium",
                                        children: "Needs Review"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 534,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/30 transition-all flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                        children: "In Notice Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
                                        children: activeStats.inNoticePeriod
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-indigo-500 font-medium",
                                        children: "Active Handover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/30 transition-all flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                        children: "Clearance Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
                                        children: activeStats.clearancePending
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-rose-500 font-medium",
                                        children: "IT / Loans / HR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/30 transition-all flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                        children: "Settlement Ready"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 573,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
                                        children: activeStats.settlementReady
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-emerald-500 font-medium",
                                        children: "Ready for Payout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 572,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/30 transition-all flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                        children: "Completed Exits"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 591,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 594,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
                                        children: activeStats.completedExits
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 599,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-blue-500 font-medium",
                                        children: "Lifetime Exited"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 598,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveSubTab("resignations"),
                                className: `px-3 py-1.5 rounded-[8px] text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeSubTab === "resignations" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    " Resignations & Notice Period"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveSubTab("clearances"),
                                className: `px-3 py-1.5 rounded-[8px] text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeSubTab === "clearances" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 630,
                                        columnNumber: 13
                                    }, this),
                                    " Department Clearances"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveSubTab("fnf"),
                                className: `px-3 py-1.5 rounded-[8px] text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeSubTab === "fnf" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, this),
                                    " FNF Settlement Engine"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 633,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveSubTab("documents"),
                                className: `px-3 py-1.5 rounded-[8px] text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeSubTab === "documents" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    " Exit Documents & Letters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 self-end md:self-auto shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: loadExitData,
                                disabled: loading,
                                className: "h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium transition-all flex items-center gap-1.5",
                                title: "Refresh data",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 658,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsSubmitModalOpen(true),
                                className: "h-8 px-3 rounded-[8px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-xs transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 672,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Submit Resignation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 681,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by employee name, code, designation, or reason...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full h-9 pl-9 pr-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 682,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 w-full sm:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-3.5 h-3.5 text-slate-400 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 693,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: statusFilter,
                                        onChange: (e)=>setStatusFilter(e.target.value),
                                        className: "h-9 px-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 focus:outline-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "All Statuses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 699,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "pending",
                                                children: "Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 700,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "approved",
                                                children: "Approved / In Notice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 701,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "completed",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 702,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "rejected",
                                                children: "Rejected"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 703,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "withdrawn",
                                                children: "Withdrawn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 704,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 692,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedDeptId,
                                onChange: (e)=>setSelectedDeptId(e.target.value),
                                className: "h-9 px-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 focus:outline-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Departments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 713,
                                        columnNumber: 13
                                    }, this),
                                    departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d.id,
                                            children: d.name
                                        }, d.id, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 715,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            activeSubTab === "resignations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-semibold text-slate-500 uppercase tracking-wider",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4",
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 732,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4",
                                            children: "Department & Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 733,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4",
                                            children: "Resignation Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 734,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4",
                                            children: "Notice Period"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 735,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4",
                                            children: "Last Working Day"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 736,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4",
                                            children: "Reason & Remarks"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 737,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 738,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-right",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 739,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 731,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 730,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-slate-100 dark:divide-slate-800/60 text-xs",
                                children: filteredResignations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 8,
                                        className: "py-12 text-center text-slate-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "w-8 h-8 text-slate-300 dark:text-slate-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-xs",
                                                    children: "No resignation records found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Submit a resignation to initiate the exit & full and final lifecycle."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 746,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 745,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 744,
                                    columnNumber: 19
                                }, this) : filteredResignations.map((item)=>{
                                    var _emp_firstName, _this, _this1, _emp_department;
                                    const emp = item.employee;
                                    const daysRemaining = item.lastWorkingDate ? Math.ceil((new Date(item.lastWorkingDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-xs flex items-center justify-center shrink-0",
                                                            children: ((emp === null || emp === void 0 ? void 0 : (_emp_firstName = emp.firstName) === null || _emp_firstName === void 0 ? void 0 : _emp_firstName[0]) || "E").toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-slate-900 dark:text-white",
                                                                    children: [
                                                                        emp === null || emp === void 0 ? void 0 : emp.firstName,
                                                                        " ",
                                                                        emp === null || emp === void 0 ? void 0 : emp.lastName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 776,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-slate-400 font-mono",
                                                                    children: (emp === null || emp === void 0 ? void 0 : emp.empCode) || "EMP-N/A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 770,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-800 dark:text-slate-200 font-medium",
                                                        children: ((_this = emp === null || emp === void 0 ? void 0 : emp.designation) === null || _this === void 0 ? void 0 : _this.title) || ((_this1 = emp === null || emp === void 0 ? void 0 : emp.designation) === null || _this1 === void 0 ? void 0 : _this1.name) || "Team Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-slate-400",
                                                        children: (emp === null || emp === void 0 ? void 0 : (_emp_department = emp.department) === null || _emp_department === void 0 ? void 0 : _emp_department.name) || "General"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 786,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4 text-slate-600 dark:text-slate-300",
                                                children: item.resignationDate || "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 795,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
                                                    children: [
                                                        item.noticePeriodDays,
                                                        " Days"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 800,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 799,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-slate-900 dark:text-white",
                                                        children: item.lastWorkingDate || item.tentativeLastWorkingDate || "Pending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 27
                                                    }, this),
                                                    daysRemaining !== null && item.status === "approved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-[10px] font-medium ${daysRemaining <= 5 ? "text-rose-500" : daysRemaining <= 15 ? "text-amber-500" : "text-indigo-500"}`,
                                                        children: daysRemaining > 0 ? `${daysRemaining} days left` : "Last Day / Overdue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 805,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4 max-w-[200px] truncate",
                                                title: item.reason,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-700 dark:text-slate-300 font-medium",
                                                        children: item.reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 27
                                                    }, this),
                                                    item.remarks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-slate-400 truncate",
                                                        children: item.remarks
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 824,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4 text-center",
                                                children: getStatusBadge(item.status)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 833,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-4 text-right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-1.5",
                                                    children: [
                                                        item.status === "pending" && canAccessAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedResignationForAction(item);
                                                                        setApprovalModalAction("approve");
                                                                        setApprovalLwd(item.tentativeLastWorkingDate || item.resignationDate);
                                                                    },
                                                                    className: "h-7 px-2.5 rounded-[6px] bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-medium transition-all",
                                                                    children: "Approve"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedResignationForAction(item);
                                                                        setApprovalModalAction("reject");
                                                                    },
                                                                    className: "h-7 px-2 rounded-[6px] bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-[11px] font-medium transition-all",
                                                                    children: "Reject"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 849,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        item.clearance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleOpenClearance(item.clearance),
                                                            className: "h-7 px-2 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium flex items-center gap-1 transition-all",
                                                            title: "Inspect Department Clearances",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                    className: "w-3 h-3 text-indigo-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Clearance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 862,
                                                            columnNumber: 31
                                                        }, this),
                                                        canAccessAdmin && (item.status === "approved" || item.status === "completed") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleOpenFnfCalculator(item),
                                                            className: "h-7 px-2 rounded-[6px] bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 text-[11px] font-medium flex items-center gap-1 transition-all",
                                                            title: "Compute / Review FNF",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 878,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "FNF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 873,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setDocResignation(item);
                                                                setDocumentModalType("relieving");
                                                            },
                                                            className: "h-7 px-1.5 rounded-[6px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200",
                                                            title: "Generate Relieving Letter",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 892,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 835,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 766,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 742,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 729,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 728,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 727,
                columnNumber: 9
            }, this),
            activeSubTab === "clearances" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 rounded-[10px] bg-indigo-500/5 border border-indigo-500/20 text-xs text-indigo-900 dark:text-indigo-200 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-4 h-4 text-indigo-500 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Multi-Department Clearance Matrix:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this),
                                        " Tracks 4 mandatory sign-offs (HR, IT, Finance, Reporting Manager). IT auto-audits assigned assets; Finance auto-audits active loans."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 910,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 909,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: clearances.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-full py-12 text-center text-slate-400 bg-white dark:bg-[#111c24] rounded-[10px] border border-slate-200/80 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-8 h-8 mx-auto text-slate-300 dark:text-slate-600 mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 921,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-xs",
                                    children: "No active department clearances"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 922,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 920,
                            columnNumber: 15
                        }, this) : clearances.map((c)=>{
                            var _emp_firstName, _emp_department;
                            const emp = c.employee;
                            const isAllCleared = c.hrClearance === "approved" && c.itClearance === "approved" && c.financeClearance === "approved" && c.managerClearance === "approved";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/30 transition-all flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-bold text-xs flex items-center justify-center shrink-0",
                                                                children: ((emp === null || emp === void 0 ? void 0 : (_emp_firstName = emp.firstName) === null || _emp_firstName === void 0 ? void 0 : _emp_firstName[0]) || "E").toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 942,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-xs text-slate-900 dark:text-white",
                                                                        children: [
                                                                            emp === null || emp === void 0 ? void 0 : emp.firstName,
                                                                            " ",
                                                                            emp === null || emp === void 0 ? void 0 : emp.lastName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 946,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-slate-400 font-mono",
                                                                        children: [
                                                                            emp === null || emp === void 0 ? void 0 : emp.empCode,
                                                                            " • ",
                                                                            (emp === null || emp === void 0 ? void 0 : (_emp_department = emp.department) === null || _emp_department === void 0 ? void 0 : _emp_department.name) || "General"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 949,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 945,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded-full text-[10px] font-bold ${isAllCleared ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border border-amber-500/20"}`,
                                                        children: isAllCleared ? "Ready for FNF" : "Clearance In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 940,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 mt-3 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold text-slate-500 flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                                className: "w-3 h-3 text-indigo-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                lineNumber: 971,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " HR Dept"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 970,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    getClearanceBadge(c.hrClearance)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 969,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 mt-1 truncate",
                                                                children: c.hrNotes || "Handover & documents"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 968,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold text-slate-500 flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
                                                                                className: "w-3 h-3 text-blue-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                lineNumber: 984,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " IT & Hardware"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    getClearanceBadge(c.itClearance)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 982,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 mt-1 truncate",
                                                                children: c.itNotes || "Laptop & SIM return"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 988,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold text-slate-500 flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                                className: "w-3 h-3 text-emerald-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                lineNumber: 997,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " Finance / Loans"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 996,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    getClearanceBadge(c.financeClearance)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 995,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 mt-1 truncate",
                                                                children: c.financeNotes || "Loans & expense recovery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold text-slate-500 flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                                className: "w-3 h-3 text-purple-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                lineNumber: 1010,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " Manager"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 1009,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    getClearanceBadge(c.managerClearance)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1008,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 mt-1 truncate",
                                                                children: c.managerNotes || "KT & project transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1014,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1007,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 966,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 938,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400",
                                                children: [
                                                    "Status: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "uppercase",
                                                        children: c.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleOpenClearance(c),
                                                className: "h-7 px-3 rounded-[6px] bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-medium flex items-center gap-1 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Audit & Approve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1030,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1031,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1026,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 934,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 918,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 908,
                columnNumber: 9
            }, this),
            activeSubTab === "fnf" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 text-emerald-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 17
                                        }, this),
                                        "Full and Final (FNF) Statement Registry"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-400 mt-0.5",
                                    children: "Computed net earnings, gratuity, leave encashment, asset damage deductions, and active loan recoveries."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1051,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1046,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 1045,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-[11px] font-semibold text-slate-500 uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Employee"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Settlement Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1062,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Gross Earnings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1063,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Loan & Asset Recovery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Net Payable / (Recoverable)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Settlement Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 dark:divide-slate-800/60 text-xs",
                                    children: settlements.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 7,
                                            className: "py-12 text-center text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-8 h-8 mx-auto text-slate-300 dark:text-slate-600 mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1074,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-xs",
                                                    children: "No FNF settlements generated yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 19
                                    }, this) : settlements.map((s)=>{
                                        var _emp_department;
                                        const emp = s.employee;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-slate-900 dark:text-white",
                                                            children: [
                                                                emp === null || emp === void 0 ? void 0 : emp.firstName,
                                                                " ",
                                                                emp === null || emp === void 0 ? void 0 : emp.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-400 font-mono",
                                                            children: [
                                                                emp === null || emp === void 0 ? void 0 : emp.empCode,
                                                                " • ",
                                                                (emp === null || emp === void 0 ? void 0 : (_emp_department = emp.department) === null || _emp_department === void 0 ? void 0 : _emp_department.name) || "General"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-slate-600 dark:text-slate-300",
                                                    children: s.settlementDate || "Pending"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-medium text-emerald-600 dark:text-emerald-400",
                                                    children: fmtCurrency(s.grossPayable)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1099,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right font-medium text-rose-500",
                                                    children: fmtCurrency(s.totalRecovery)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1103,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-bold text-sm ${Number(s.netSettlement) >= 0 ? "text-slate-900 dark:text-white" : "text-rose-600"}`,
                                                        children: fmtCurrency(s.netSettlement)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1108,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: s.status === "paid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1122,
                                                                columnNumber: 31
                                                            }, this),
                                                            " Disbursed & Exited"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1121,
                                                        columnNumber: 29
                                                    }, this) : s.status === "approved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-600 border border-blue-500/20",
                                                        children: "Approved"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1125,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20",
                                                        children: "Draft / Calculated"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1129,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-end gap-1.5",
                                                        children: [
                                                            s.status !== "paid" && canAccessAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedSettlementToPay(s);
                                                                    setIsPayModalOpen(true);
                                                                },
                                                                className: "h-7 px-2.5 rounded-[6px] bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-medium transition-all",
                                                                children: "Disburse & Settle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1138,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    // Find matching resignation
                                                                    const matchedResignation = resignations.find((r)=>r.id === s.resignationId);
                                                                    if (matchedResignation) {
                                                                        setDocResignation(matchedResignation);
                                                                        setDocumentModalType("fnf_statement");
                                                                    } else {
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Could not find linked resignation");
                                                                    }
                                                                },
                                                                className: "h-7 px-2 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium flex items-center gap-1 transition-all",
                                                                title: "Print FNF Statement",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                        className: "w-3 h-3 text-slate-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 1164,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Statement"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                        lineNumber: 1165,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1135,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, s.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1070,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1058,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 1057,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 1044,
                columnNumber: 9
            }, this),
            activeSubTab === "documents" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-4 h-4 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xs text-slate-900 dark:text-white",
                                        children: "Automated Official Exit Documentation Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-400",
                                children: "Select an employee to instantly preview and print official letters."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 1182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-indigo-500/40 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1199,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-xs text-slate-900 dark:text-white",
                                                children: "Resignation Acceptance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                children: "Formal acknowledgement of resignation with accepted Last Working Day and notice period terms."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-indigo-500 font-semibold uppercase tracking-wider",
                                            children: "Automated Generation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-emerald-500/40 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-xs text-slate-900 dark:text-white",
                                                children: "Relieving Letter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                children: "Certifies that all company assets and obligations were handed over in full and relieves the employee."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-emerald-500 font-semibold uppercase tracking-wider",
                                            children: "Includes Company Seal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-purple-500/40 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1237,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-xs text-slate-900 dark:text-white",
                                                children: "Experience Certificate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                children: "Detailed tenure, designation progression, responsibilities, and professional conduct summary."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-purple-500 font-semibold uppercase tracking-wider",
                                            children: "Verified Service Record"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1247,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-blue-500/40 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1257,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-xs text-slate-900 dark:text-white",
                                                children: "Full & Final Statement"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                children: "Complete line-by-line financial breakdown of earnings, deductions, bank transfer UTR, and signatures."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1262,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-blue-500 font-semibold uppercase tracking-wider",
                                            children: "Audit Grade Breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1267,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1266,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 1194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-2xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-800 dark:text-slate-200",
                                children: "Select Exited Employee to Generate Document"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-slate-100 dark:divide-slate-800",
                                children: resignations.map((r)=>{
                                    var _r_employee_firstName, _r_employee, _r_employee1, _r_employee2, _this, _r_employee3, _this1, _r_employee4;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center",
                                                        children: (((_r_employee = r.employee) === null || _r_employee === void 0 ? void 0 : (_r_employee_firstName = _r_employee.firstName) === null || _r_employee_firstName === void 0 ? void 0 : _r_employee_firstName[0]) || "E").toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-xs text-slate-900 dark:text-white",
                                                                children: [
                                                                    (_r_employee1 = r.employee) === null || _r_employee1 === void 0 ? void 0 : _r_employee1.firstName,
                                                                    " ",
                                                                    (_r_employee2 = r.employee) === null || _r_employee2 === void 0 ? void 0 : _r_employee2.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: [
                                                                    ((_this = (_r_employee3 = r.employee) === null || _r_employee3 === void 0 ? void 0 : _r_employee3.designation) === null || _this === void 0 ? void 0 : _this.title) || ((_this1 = (_r_employee4 = r.employee) === null || _r_employee4 === void 0 ? void 0 : _r_employee4.designation) === null || _this1 === void 0 ? void 0 : _this1.name) || "Team Member",
                                                                    " • Last Day: ",
                                                                    r.lastWorkingDate || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setDocResignation(r);
                                                            setDocumentModalType("acceptance");
                                                        },
                                                        className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "w-3 h-3 text-indigo-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1307,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Acceptance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1308,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1300,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setDocResignation(r);
                                                            setDocumentModalType("relieving");
                                                        },
                                                        className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                className: "w-3 h-3 text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1318,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Relieving"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1319,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setDocResignation(r);
                                                            setDocumentModalType("experience");
                                                        },
                                                        className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                className: "w-3 h-3 text-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1329,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Experience"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1330,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setDocResignation(r);
                                                            setDocumentModalType("fnf_statement");
                                                        },
                                                        className: "h-7 px-2.5 rounded-[6px] bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-medium flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1340,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "FNF Sheet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                lineNumber: 1341,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1333,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1299,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1281,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                lineNumber: 1279,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                        lineNumber: 1275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 1181,
                columnNumber: 9
            }, this),
            isSubmitModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-[12px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1358,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm text-slate-900 dark:text-white",
                                                    children: "Submit Resignation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Initiates notice period tracking and departmental clearance checklist."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1364,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1356,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsSubmitModalOpen(false),
                                    className: "w-7 h-7 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1373,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1369,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1355,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmitResignation,
                            className: "space-y-3.5 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Select Employee *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: submitForm.employeeId,
                                            onChange: (e)=>{
                                                const emp = employees.find((emp)=>emp.id === e.target.value);
                                                setSubmitForm({
                                                    ...submitForm,
                                                    employeeId: e.target.value,
                                                    noticePeriodDays: (emp === null || emp === void 0 ? void 0 : emp.noticePeriodDays) || 30
                                                });
                                            },
                                            required: true,
                                            className: "w-full h-9 px-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Choose Employee --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1395,
                                                    columnNumber: 19
                                                }, this),
                                                employees.filter((emp)=>emp.status !== "exited").map((emp)=>{
                                                    var _this, _this1;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: emp.id,
                                                        children: [
                                                            emp.firstName,
                                                            " ",
                                                            emp.lastName,
                                                            " (",
                                                            emp.empCode,
                                                            ") - ",
                                                            ((_this = emp.designation) === null || _this === void 0 ? void 0 : _this.title) || ((_this1 = emp.designation) === null || _this1 === void 0 ? void 0 : _this1.name) || "Member"
                                                        ]
                                                    }, emp.id, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1382,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                                    children: "Resignation Date *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: submitForm.resignationDate,
                                                    onChange: (e)=>setSubmitForm({
                                                            ...submitForm,
                                                            resignationDate: e.target.value
                                                        }),
                                                    required: true,
                                                    className: "w-full h-9 px-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1407,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                                    children: "Notice Period (Days) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1421,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    max: "180",
                                                    value: submitForm.noticePeriodDays,
                                                    onChange: (e)=>setSubmitForm({
                                                            ...submitForm,
                                                            noticePeriodDays: parseInt(e.target.value) || 0
                                                        }),
                                                    required: true,
                                                    className: "w-full h-9 px-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1424,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1420,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1406,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Exit Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1439,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: submitForm.exitType,
                                            onChange: (e)=>setSubmitForm({
                                                    ...submitForm,
                                                    exitType: e.target.value
                                                }),
                                            className: "w-full h-9 px-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "resignation",
                                                    children: "Voluntary Resignation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1449,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "termination",
                                                    children: "Termination"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1450,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "contract_end",
                                                    children: "Contract End"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "retirement",
                                                    children: "Retirement"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1442,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1438,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Primary Reason *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. Better Opportunity, Relocation, Higher Studies, Personal",
                                            value: submitForm.reason,
                                            onChange: (e)=>setSubmitForm({
                                                    ...submitForm,
                                                    reason: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full h-9 px-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1456,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Remarks / Handover Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1471,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 2,
                                            placeholder: "Additional transition notes or project handover status...",
                                            value: submitForm.remarks,
                                            onChange: (e)=>setSubmitForm({
                                                    ...submitForm,
                                                    remarks: e.target.value
                                                }),
                                            className: "w-full p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1474,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsSubmitModalOpen(false),
                                            className: "h-8 px-3 rounded-[8px] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 text-xs font-medium",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1484,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "h-8 px-4 rounded-[8px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-xs",
                                            children: loading ? "Submitting..." : "Submit & Start Notice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1491,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1377,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 1354,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 1353,
                columnNumber: 9
            }, this),
            selectedResignationForAction && approvalModalAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-[12px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm text-slate-900 dark:text-white",
                                    children: approvalModalAction === "approve" ? "Approve Resignation" : "Reject Resignation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1509,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedResignationForAction(null);
                                        setApprovalModalAction(null);
                                    },
                                    className: "w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1519,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1512,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1508,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-slate-900 dark:text-white",
                                            children: [
                                                (_selectedResignationForAction_employee = selectedResignationForAction.employee) === null || _selectedResignationForAction_employee === void 0 ? void 0 : _selectedResignationForAction_employee.firstName,
                                                " ",
                                                (_selectedResignationForAction_employee1 = selectedResignationForAction.employee) === null || _selectedResignationForAction_employee1 === void 0 ? void 0 : _selectedResignationForAction_employee1.lastName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1525,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-slate-400",
                                            children: [
                                                "Resignation Date: ",
                                                selectedResignationForAction.resignationDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1529,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-slate-400 mt-1",
                                            children: [
                                                "Reason: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: [
                                                        '"',
                                                        selectedResignationForAction.reason,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1533,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1532,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1524,
                                    columnNumber: 15
                                }, this),
                                approvalModalAction === "approve" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Confirmed Last Working Day *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1539,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: approvalLwd,
                                            onChange: (e)=>setApprovalLwd(e.target.value),
                                            className: "w-full h-9 px-3 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1542,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400",
                                            children: "Adjust if notice period is being waived or extended."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1548,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: approvalModalAction === "approve" ? "Approval Remarks" : "Rejection Reason *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1555,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: approvalComments,
                                            onChange: (e)=>setApprovalComments(e.target.value),
                                            placeholder: approvalModalAction === "approve" ? "Add approval instructions or transition notes..." : "State the reason for rejecting the resignation...",
                                            className: "w-full p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-hidden resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1558,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1554,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedResignationForAction(null);
                                                setApprovalModalAction(null);
                                            },
                                            className: "h-8 px-3 rounded-[8px] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1572,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleUpdateResignationStatus,
                                            disabled: loading,
                                            className: `h-8 px-4 rounded-[8px] text-white text-xs font-medium shadow-xs ${approvalModalAction === "approve" ? "bg-emerald-600 hover:bg-emerald-500" : "bg-rose-600 hover:bg-rose-500"}`,
                                            children: loading ? "Saving..." : approvalModalAction === "approve" ? "Confirm Approval" : "Confirm Rejection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1523,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 1507,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 1506,
                columnNumber: 9
            }, this),
            isClearanceModalOpen && selectedClearance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl rounded-[12px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-5 space-y-4 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1611,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm text-slate-900 dark:text-white",
                                                    children: [
                                                        "Clearance Audit: ",
                                                        (_selectedClearance_employee = selectedClearance.employee) === null || _selectedClearance_employee === void 0 ? void 0 : _selectedClearance_employee.firstName,
                                                        " ",
                                                        (_selectedClearance_employee1 = selectedClearance.employee) === null || _selectedClearance_employee1 === void 0 ? void 0 : _selectedClearance_employee1.lastName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1614,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Verify assets, loans, and department sign-offs before full and final settlement."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1618,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1613,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1609,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsClearanceModalOpen(false),
                                    className: "w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1627,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1623,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1608,
                            columnNumber: 13
                        }, this),
                        clearanceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12 flex flex-col items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-6 h-6 animate-spin text-indigo-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1633,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400",
                                    children: "Running automated cross-module audit..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1634,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1632,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-xs",
                            children: [
                                (clearanceModalData === null || clearanceModalData === void 0 ? void 0 : clearanceModalData.autoAudit) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-[10px] bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
                                                            className: "w-3.5 h-3.5 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1644,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Hardware Assets Assigned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1645,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-1.5 py-0.2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 font-mono",
                                                            children: ((_clearanceModalData_autoAudit_assignedAssets = clearanceModalData.autoAudit.assignedAssets) === null || _clearanceModalData_autoAudit_assignedAssets === void 0 ? void 0 : _clearanceModalData_autoAudit_assignedAssets.length) || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1646,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 23
                                                }, this),
                                                ((_clearanceModalData_autoAudit_assignedAssets1 = clearanceModalData.autoAudit.assignedAssets) === null || _clearanceModalData_autoAudit_assignedAssets1 === void 0 ? void 0 : _clearanceModalData_autoAudit_assignedAssets1.length) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: clearanceModalData.autoAudit.assignedAssets.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] flex items-center justify-between text-slate-600 dark:text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        a.name,
                                                                        " (",
                                                                        a.category,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1657,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[10px] text-slate-400",
                                                                    children: a.serialNumber || a.assetCode
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1660,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, a.id, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1653,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1651,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-emerald-600 font-medium flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1668,
                                                            columnNumber: 27
                                                        }, this),
                                                        " No pending assets assigned"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1667,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1642,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                            className: "w-3.5 h-3.5 text-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1676,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Active Loans & Advances"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1677,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 font-mono",
                                                            children: ((_clearanceModalData_autoAudit_activeLoans = clearanceModalData.autoAudit.activeLoans) === null || _clearanceModalData_autoAudit_activeLoans === void 0 ? void 0 : _clearanceModalData_autoAudit_activeLoans.length) || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1675,
                                                    columnNumber: 23
                                                }, this),
                                                ((_clearanceModalData_autoAudit_activeLoans1 = clearanceModalData.autoAudit.activeLoans) === null || _clearanceModalData_autoAudit_activeLoans1 === void 0 ? void 0 : _clearanceModalData_autoAudit_activeLoans1.length) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: clearanceModalData.autoAudit.activeLoans.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] flex items-center justify-between text-slate-600 dark:text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: l.loanType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1689,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-rose-500 font-mono",
                                                                    children: [
                                                                        fmtCurrency(l.remainingBalance),
                                                                        " remaining"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1690,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, l.id, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1685,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1683,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-emerald-600 font-medium flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1698,
                                                            columnNumber: 27
                                                        }, this),
                                                        " No outstanding active loans"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1697,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1674,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1640,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-xs text-slate-800 dark:text-slate-200",
                                            children: "Department Sign-Off Controls"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1707,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-slate-900 dark:text-white flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Human Resources (HR)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1715,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getClearanceBadge(selectedClearance.hrClearance)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1714,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 mt-0.5",
                                                            children: selectedClearance.hrNotes || "Handover documents, ID Card surrender"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1718,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1713,
                                                    columnNumber: 21
                                                }, this),
                                                canAccessAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setDeptToUpdate("hr");
                                                        setDeptStatusInput("approved");
                                                    },
                                                    className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-medium",
                                                    children: "Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1723,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1712,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-slate-900 dark:text-white flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "IT & Systems (Hardware & Access)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1739,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getClearanceBadge(selectedClearance.itClearance)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1738,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 mt-0.5",
                                                            children: selectedClearance.itNotes || "Laptop, email, CRM & VPN access revocation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1742,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1737,
                                                    columnNumber: 21
                                                }, this),
                                                canAccessAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setDeptToUpdate("it");
                                                        setDeptStatusInput("approved");
                                                    },
                                                    className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-medium",
                                                    children: "Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1747,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1736,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-slate-900 dark:text-white flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Finance & Accounts"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1763,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getClearanceBadge(selectedClearance.financeClearance)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1762,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 mt-0.5",
                                                            children: selectedClearance.financeNotes || "Travel advances, loans, corporate credit card"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1766,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1761,
                                                    columnNumber: 21
                                                }, this),
                                                canAccessAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setDeptToUpdate("finance");
                                                        setDeptStatusInput("approved");
                                                    },
                                                    className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-medium",
                                                    children: "Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1771,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1760,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-slate-900 dark:text-white flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Reporting Manager"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1787,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getClearanceBadge(selectedClearance.managerClearance)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1786,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 mt-0.5",
                                                            children: selectedClearance.managerNotes || "Knowledge transfer, client handoff, credentials"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1790,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1785,
                                                    columnNumber: 21
                                                }, this),
                                                canAccessAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setDeptToUpdate("manager");
                                                        setDeptStatusInput("approved");
                                                    },
                                                    className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-medium",
                                                    children: "Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1795,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1784,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1706,
                                    columnNumber: 17
                                }, this),
                                deptToUpdate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-bold text-xs text-indigo-900 dark:text-indigo-200",
                                            children: [
                                                "Update ",
                                                deptToUpdate.toUpperCase(),
                                                " Clearance"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1811,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: deptStatusInput,
                                                    onChange: (e)=>setDeptStatusInput(e.target.value),
                                                    className: "h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "approved",
                                                            children: "Approved (Cleared)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1820,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "rejected",
                                                            children: "Rejected (Blocked / Pending Return)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1821,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "waived",
                                                            children: "Waived"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1822,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1815,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Add remarks or missing items...",
                                                    value: deptNotesInput,
                                                    onChange: (e)=>setDeptNotesInput(e.target.value),
                                                    className: "h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1824,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1814,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-end gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDeptToUpdate(null),
                                                    className: "h-7 px-2.5 rounded-[6px] text-slate-500 text-xs",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1833,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleUpdateDepartmentStatus,
                                                    className: "h-7 px-3 rounded-[6px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium",
                                                    children: "Save Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1839,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1832,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1810,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1637,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 1607,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 1606,
                columnNumber: 9
            }, this),
            isFnfModalOpen && selectedResignationForFnf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl rounded-[12px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-5 space-y-4 max-h-[92vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 1861,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1860,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm text-slate-900 dark:text-white",
                                                    children: "Full and Final (FNF) Statement Generator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1864,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: [
                                                        "Employee: ",
                                                        (_selectedResignationForFnf_employee = selectedResignationForFnf.employee) === null || _selectedResignationForFnf_employee === void 0 ? void 0 : _selectedResignationForFnf_employee.firstName,
                                                        " ",
                                                        (_selectedResignationForFnf_employee1 = selectedResignationForFnf.employee) === null || _selectedResignationForFnf_employee1 === void 0 ? void 0 : _selectedResignationForFnf_employee1.lastName,
                                                        " (",
                                                        (_selectedResignationForFnf_employee2 = selectedResignationForFnf.employee) === null || _selectedResignationForFnf_employee2 === void 0 ? void 0 : _selectedResignationForFnf_employee2.empCode,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1867,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1863,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1859,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsFnfModalOpen(false),
                                    className: "w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 1878,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1874,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1858,
                            columnNumber: 13
                        }, this),
                        fnfLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12 flex flex-col items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-6 h-6 animate-spin text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1884,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400",
                                    children: "Calculating pro-rata salaries, leave encashment & recoveries..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1885,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1883,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-[10px] bg-emerald-500/5 border border-emerald-500/20 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 border-b border-emerald-500/20 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1896,
                                                            columnNumber: 23
                                                        }, this),
                                                        " A. Gross Earnings & Entitlements"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1895,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Pending Month Salary (Pro-rata)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1902,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-800 dark:text-slate-200",
                                                                            children: fmtCurrency(fnfForm.pendingSalary)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1905,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1901,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.pendingSalary,
                                                                    onChange: (e)=>handleFormChange("pendingSalary", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1909,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1900,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: [
                                                                                "Leave Encashment (",
                                                                                fnfForm.leaveEncashmentDays,
                                                                                " Earned Leaves)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1919,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-800 dark:text-slate-200",
                                                                            children: fmtCurrency(fnfForm.leaveEncashment)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1922,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1918,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.leaveEncashment,
                                                                    onChange: (e)=>handleFormChange("leaveEncashment", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1926,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1917,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "CRM Won Deals Commission"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1936,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-800 dark:text-slate-200",
                                                                            children: fmtCurrency(fnfForm.commissionAmount)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1939,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1935,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.commissionAmount,
                                                                    onChange: (e)=>handleFormChange("commissionAmount", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1943,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1934,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Gratuity Amount"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1953,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-800 dark:text-slate-200",
                                                                            children: fmtCurrency(fnfForm.gratuityAmount)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1954,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1952,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.gratuityAmount,
                                                                    onChange: (e)=>handleFormChange("gratuityAmount", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1958,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1951,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Bonus & Other Earnings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1968,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-800 dark:text-slate-200",
                                                                            children: fmtCurrency(fnfForm.bonusAmount + fnfForm.otherEarnings)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 1969,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1967,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.bonusAmount,
                                                                    onChange: (e)=>handleFormChange("bonusAmount", parseFloat(e.target.value) || 0),
                                                                    placeholder: "Bonus amount",
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 1973,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1966,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2 border-t border-emerald-500/20 flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-emerald-800 dark:text-emerald-300",
                                                            children: "Total Gross Earnings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1984,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-sm text-emerald-600 dark:text-emerald-400 font-mono",
                                                            children: fmtCurrency(fnfForm.grossPayable)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1987,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1983,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1894,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-[10px] bg-rose-500/5 border border-rose-500/20 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-xs text-rose-800 dark:text-rose-300 flex items-center gap-1.5 border-b border-rose-500/20 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 1996,
                                                            columnNumber: 23
                                                        }, this),
                                                        " B. Deductions & Recoveries"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1995,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Active Loan Outstanding Balance"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2002,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-rose-500",
                                                                            children: fmtCurrency(fnfForm.loanRecovery)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2005,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2001,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.loanRecovery,
                                                                    onChange: (e)=>handleFormChange("loanRecovery", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2009,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2000,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Asset Damage / Non-return Penalty"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2019,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-rose-500",
                                                                            children: fmtCurrency(fnfForm.assetRecovery)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2022,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2018,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.assetRecovery,
                                                                    onChange: (e)=>handleFormChange("assetRecovery", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2026,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2017,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Notice Shortfall Recovery"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2036,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-rose-500",
                                                                            children: fmtCurrency(fnfForm.noticeShortfallRecovery)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2039,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2035,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.noticeShortfallRecovery,
                                                                    onChange: (e)=>handleFormChange("noticeShortfallRecovery", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2043,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2034,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "TDS / Income Tax Deduction"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2055,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-rose-500",
                                                                            children: fmtCurrency(fnfForm.taxDeduction)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2058,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2054,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.taxDeduction,
                                                                    onChange: (e)=>handleFormChange("taxDeduction", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2062,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2053,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-[11px] mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 dark:text-slate-400",
                                                                            children: "Other Deductions"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2072,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-rose-500",
                                                                            children: fmtCurrency(fnfForm.otherDeductions)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2073,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2071,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: fnfForm.otherDeductions,
                                                                    onChange: (e)=>handleFormChange("otherDeductions", parseFloat(e.target.value) || 0),
                                                                    className: "w-full h-8 px-2.5 rounded-[6px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2077,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2070,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 1999,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2 border-t border-rose-500/20 flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-rose-800 dark:text-rose-300",
                                                            children: "Total Recoveries"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2089,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-sm text-rose-600 font-mono",
                                                            children: fmtCurrency(fnfForm.totalRecovery)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2092,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2088,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 1994,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 1892,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-[10px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 border border-indigo-500/20 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-slate-600 dark:text-slate-300",
                                                    children: "NET FULL & FINAL SETTLEMENT (A - B)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: fnfForm.netSettlement >= 0 ? "Amount payable by organization to employee" : "Negative balance: Amount recoverable from employee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-2xl font-black font-mono tracking-tight ${fnfForm.netSettlement >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600"}`,
                                                children: fmtCurrency(fnfForm.netSettlement)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 2112,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2111,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsFnfModalOpen(false),
                                            className: "h-8 px-3 rounded-[8px] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSaveFnf,
                                            disabled: loading,
                                            className: "h-8 px-4 rounded-[8px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-xs",
                                            children: loading ? "Saving..." : "Save Statement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2132,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2124,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 1890,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 1857,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 1856,
                columnNumber: 9
            }, this),
            isPayModalOpen && selectedSettlementToPay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-[12px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 2154,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-sm text-slate-900 dark:text-white",
                                                    children: "Disburse Final Settlement"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Disburses net amount and automatically revokes system login access."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2156,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsPayModalOpen(false),
                                    className: "w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 2169,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 2151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-[8px] bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-slate-900 dark:text-white",
                                                    children: [
                                                        (_selectedSettlementToPay_employee = selectedSettlementToPay.employee) === null || _selectedSettlementToPay_employee === void 0 ? void 0 : _selectedSettlementToPay_employee.firstName,
                                                        " ",
                                                        (_selectedSettlementToPay_employee1 = selectedSettlementToPay.employee) === null || _selectedSettlementToPay_employee1 === void 0 ? void 0 : _selectedSettlementToPay_employee1.lastName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: (_selectedSettlementToPay_employee2 = selectedSettlementToPay.employee) === null || _selectedSettlementToPay_employee2 === void 0 ? void 0 : _selectedSettlementToPay_employee2.empCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2180,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-emerald-600 font-mono",
                                            children: fmtCurrency(selectedSettlementToPay.netSettlement)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Payment Method *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: paymentMethod,
                                            onChange: (e)=>setPaymentMethod(e.target.value),
                                            className: "w-full h-8 px-2.5 rounded-[6px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "bank_transfer",
                                                    children: "Direct Bank Transfer (NEFT/RTGS/IMPS)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "cheque",
                                                    children: "Company Cheque"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "upi",
                                                    children: "Corporate UPI"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Bank Reference / UTR / Cheque No. *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. UTR-20260928091823",
                                            value: paymentReference,
                                            onChange: (e)=>setPaymentReference(e.target.value),
                                            className: "w-full h-8 px-2.5 rounded-[6px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1",
                                            children: "Disbursement Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: paymentDate,
                                            onChange: (e)=>setPaymentDate(e.target.value),
                                            className: "w-full h-8 px-2.5 rounded-[6px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2.5 rounded-[8px] bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-700 dark:text-rose-300 flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-4 h-4 shrink-0 mt-0.5 text-rose-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Automated Exit Trigger:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2233,
                                                    columnNumber: 19
                                                }, this),
                                                " Confirming this payment will immediately mark the employee status as ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Exited"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2233,
                                                    columnNumber: 129
                                                }, this),
                                                " and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "disable central single sign-on / CRM login access"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2233,
                                                    columnNumber: 157
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsPayModalOpen(false),
                                            className: "h-8 px-3 rounded-[8px] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleFinalizeAndSettle,
                                            disabled: loading,
                                            className: "h-8 px-4 rounded-[8px] bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium shadow-xs",
                                            children: loading ? "Processing..." : "Confirm & Revoke Access"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2245,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 2173,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 2150,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 2149,
                columnNumber: 9
            }, this),
            documentModalType && docResignation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl rounded-[12px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 space-y-4 max-h-[92vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-4 h-4 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-sm text-slate-900 dark:text-white capitalize",
                                            children: [
                                                documentModalType.replace("_", " "),
                                                " Preview"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>window.print(),
                                            className: "h-8 px-3 rounded-[6px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2276,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Print Document"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2277,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setDocumentModalType(null);
                                                setDocResignation(null);
                                            },
                                            className: "w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 2286,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2279,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2271,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 2264,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 rounded-[8px] bg-white text-slate-900 border border-slate-200 shadow-inner font-serif text-sm leading-relaxed space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b-2 border-slate-900 pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl font-bold tracking-tight text-slate-950 uppercase",
                                                    children: "PINGDART TECHNOLOGIES PVT. LTD."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2296,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 font-sans mt-0.5",
                                                    children: "Corporate Identity: HRM-FNF-SYS-2026 • Bangalore, India"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2299,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right text-xs font-sans text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "Date: ",
                                                        new Date().toLocaleDateString("en-IN")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2304,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "Ref: PD/HR/EXIT/",
                                                        String(docResignation.id).substring(0, 8).toUpperCase()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2305,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold uppercase tracking-wider underline underline-offset-4",
                                        children: documentModalType === "relieving" ? "RELIEVING LETTER" : documentModalType === "experience" ? "EXPERIENCE & SERVICE CERTIFICATE" : documentModalType === "acceptance" ? "ACCEPTANCE OF RESIGNATION" : "FULL AND FINAL SETTLEMENT STATEMENT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                        lineNumber: 2311,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "To Whom It May Concern,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                lineNumber: 2325,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2324,
                                            columnNumber: 17
                                        }, this),
                                        documentModalType === "relieving" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "This is to certify that ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (_docResignation_employee = docResignation.employee) === null || _docResignation_employee === void 0 ? void 0 : _docResignation_employee.firstName,
                                                                " ",
                                                                (_docResignation_employee1 = docResignation.employee) === null || _docResignation_employee1 === void 0 ? void 0 : _docResignation_employee1.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2331,
                                                            columnNumber: 47
                                                        }, this),
                                                        " (Employee ID: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: (_docResignation_employee2 = docResignation.employee) === null || _docResignation_employee2 === void 0 ? void 0 : _docResignation_employee2.empCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2331,
                                                            columnNumber: 151
                                                        }, this),
                                                        ") has been relieved from their duties as ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: ((_this = (_docResignation_employee3 = docResignation.employee) === null || _docResignation_employee3 === void 0 ? void 0 : _docResignation_employee3.designation) === null || _this === void 0 ? void 0 : _this.title) || ((_this1 = (_docResignation_employee4 = docResignation.employee) === null || _docResignation_employee4 === void 0 ? void 0 : _docResignation_employee4.designation) === null || _this1 === void 0 ? void 0 : _this1.name) || "Team Member"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2331,
                                                            columnNumber: 243
                                                        }, this),
                                                        " in the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: ((_docResignation_employee5 = docResignation.employee) === null || _docResignation_employee5 === void 0 ? void 0 : (_docResignation_employee_department = _docResignation_employee5.department) === null || _docResignation_employee_department === void 0 ? void 0 : _docResignation_employee_department.name) || "General"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2331,
                                                            columnNumber: 394
                                                        }, this),
                                                        " Department at PingDart Technologies Pvt. Ltd. at the close of business hours on ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: docResignation.lastWorkingDate || docResignation.tentativeLastWorkingDate || "the designated date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2331,
                                                            columnNumber: 548
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2330,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "We confirm that all company assets, credentials, and responsibilities entrusted to them have been satisfactorily handed over, and there are no outstanding liabilities or clearances pending against them."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2333,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "We appreciate their contributions to our organization and wish them the very best in all their future endeavors."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2336,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        documentModalType === "experience" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "This is to certify that ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (_docResignation_employee6 = docResignation.employee) === null || _docResignation_employee6 === void 0 ? void 0 : _docResignation_employee6.firstName,
                                                                " ",
                                                                (_docResignation_employee7 = docResignation.employee) === null || _docResignation_employee7 === void 0 ? void 0 : _docResignation_employee7.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 47
                                                        }, this),
                                                        " was employed with PingDart Technologies Pvt. Ltd. from ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: ((_docResignation_employee8 = docResignation.employee) === null || _docResignation_employee8 === void 0 ? void 0 : _docResignation_employee8.dateOfJoining) || "the date of joining"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 192
                                                        }, this),
                                                        " to ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: docResignation.lastWorkingDate || docResignation.tentativeLastWorkingDate || "the last working day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 278
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2344,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "During their tenure, they held the position of ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: ((_this2 = (_docResignation_employee9 = docResignation.employee) === null || _docResignation_employee9 === void 0 ? void 0 : _docResignation_employee9.designation) === null || _this2 === void 0 ? void 0 : _this2.title) || ((_this3 = (_docResignation_employee10 = docResignation.employee) === null || _docResignation_employee10 === void 0 ? void 0 : _docResignation_employee10.designation) === null || _this3 === void 0 ? void 0 : _this3.name) || "Team Member"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2348,
                                                            columnNumber: 70
                                                        }, this),
                                                        " in the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: ((_docResignation_employee11 = docResignation.employee) === null || _docResignation_employee11 === void 0 ? void 0 : (_docResignation_employee_department1 = _docResignation_employee11.department) === null || _docResignation_employee_department1 === void 0 ? void 0 : _docResignation_employee_department1.name) || "General"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2348,
                                                            columnNumber: 221
                                                        }, this),
                                                        " department. Their conduct was professional, and their job performance was exemplary."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2347,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "We take this opportunity to thank them for their dedicated service and wish them continued success in their career."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2350,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        documentModalType === "acceptance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Dear ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (_docResignation_employee12 = docResignation.employee) === null || _docResignation_employee12 === void 0 ? void 0 : _docResignation_employee12.firstName,
                                                                " ",
                                                                (_docResignation_employee13 = docResignation.employee) === null || _docResignation_employee13 === void 0 ? void 0 : _docResignation_employee13.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2359,
                                                            columnNumber: 28
                                                        }, this),
                                                        ","
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2358,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "With reference to your resignation letter dated ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: docResignation.resignationDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2362,
                                                            columnNumber: 71
                                                        }, this),
                                                        ", we wish to inform you that your resignation has been accepted by the management."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2361,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "As per the contractual terms and agreed notice period of ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                docResignation.noticePeriodDays,
                                                                " days"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2365,
                                                            columnNumber: 80
                                                        }, this),
                                                        ", your last working day with PingDart Technologies will be ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: docResignation.lastWorkingDate || docResignation.tentativeLastWorkingDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2365,
                                                            columnNumber: 194
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2364,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "You are requested to complete all handover formalities with your reporting manager, IT department, and finance team before the last working day."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2367,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        documentModalType === "fnf_statement" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Below is the verified Full and Final Statement for ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (_docResignation_employee14 = docResignation.employee) === null || _docResignation_employee14 === void 0 ? void 0 : _docResignation_employee14.firstName,
                                                                " ",
                                                                (_docResignation_employee15 = docResignation.employee) === null || _docResignation_employee15 === void 0 ? void 0 : _docResignation_employee15.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2376,
                                                            columnNumber: 74
                                                        }, this),
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2375,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-slate-300 rounded text-xs font-sans",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 divide-x divide-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-slate-800",
                                                                            children: "Earnings & Dues:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2381,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Pending Month Salary:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2382,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement === void 0 ? void 0 : _docResignation_fnfSettlement.pendingSalary) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2382,
                                                                                    columnNumber: 100
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2382,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Leave Encashment:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2383,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement1 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement1 === void 0 ? void 0 : _docResignation_fnfSettlement1.leaveEncashment) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2383,
                                                                                    columnNumber: 96
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2383,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Commissions & Bonus:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2384,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency((((_docResignation_fnfSettlement2 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement2 === void 0 ? void 0 : _docResignation_fnfSettlement2.commissionAmount) || 0) + (((_docResignation_fnfSettlement3 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement3 === void 0 ? void 0 : _docResignation_fnfSettlement3.bonusAmount) || 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2384,
                                                                                    columnNumber: 99
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2384,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between font-bold border-t pt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Total Gross (A):"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2385,
                                                                                    columnNumber: 89
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement4 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement4 === void 0 ? void 0 : _docResignation_fnfSettlement4.grossPayable) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2385,
                                                                                    columnNumber: 119
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2385,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2380,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-slate-800",
                                                                            children: "Recoveries & Deductions:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2389,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Loan Recovery:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2390,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement5 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement5 === void 0 ? void 0 : _docResignation_fnfSettlement5.loanRecovery) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2390,
                                                                                    columnNumber: 93
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2390,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Asset Recovery:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2391,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement6 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement6 === void 0 ? void 0 : _docResignation_fnfSettlement6.assetRecovery) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2391,
                                                                                    columnNumber: 94
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2391,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Notice Shortfall:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2392,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement7 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement7 === void 0 ? void 0 : _docResignation_fnfSettlement7.noticeShortfallRecovery) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2392,
                                                                                    columnNumber: 96
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2392,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between font-bold border-t pt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Total Recovery (B):"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2393,
                                                                                    columnNumber: 89
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: fmtCurrency(((_docResignation_fnfSettlement8 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement8 === void 0 ? void 0 : _docResignation_fnfSettlement8.totalRecovery) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                                    lineNumber: 2393,
                                                                                    columnNumber: 122
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                            lineNumber: 2393,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2388,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2379,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-slate-100 border-t border-slate-300 flex justify-between items-center text-sm font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "NET SETTLEMENT AMOUNT (A - B):"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2397,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-base font-mono",
                                                                    children: fmtCurrency(((_docResignation_fnfSettlement9 = docResignation.fnfSettlement) === null || _docResignation_fnfSettlement9 === void 0 ? void 0 : _docResignation_fnfSettlement9.netSettlement) || 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                                    lineNumber: 2398,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                            lineNumber: 2396,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2378,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2374,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-12 flex items-center justify-between font-sans text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-slate-400 w-44 pt-1 font-bold",
                                                    children: "Authorized Signatory"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: "Human Resources Department"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2411,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "PingDart Technologies Pvt. Ltd."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2412,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2407,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-slate-400 w-44 pt-1 font-bold",
                                                    children: "Employee Signature"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2416,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: [
                                                        (_docResignation_employee16 = docResignation.employee) === null || _docResignation_employee16 === void 0 ? void 0 : _docResignation_employee16.firstName,
                                                        " ",
                                                        (_docResignation_employee17 = docResignation.employee) === null || _docResignation_employee17 === void 0 ? void 0 : _docResignation_employee17.lastName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2419,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Acknowledged & Accepted"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                                    lineNumber: 2422,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                            lineNumber: 2415,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                                    lineNumber: 2406,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                            lineNumber: 2292,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                    lineNumber: 2262,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
                lineNumber: 2261,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx",
        lineNumber: 518,
        columnNumber: 5
    }, this);
}
_s(ExitScreen, "VUBfzeIGVFQb0IlSHnTWUvoEcXw=");
_c = ExitScreen;
var _c;
__turbopack_context__.k.register(_c, "ExitScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_hrm_screens_ExitScreen_tsx_7ad410df._.js.map