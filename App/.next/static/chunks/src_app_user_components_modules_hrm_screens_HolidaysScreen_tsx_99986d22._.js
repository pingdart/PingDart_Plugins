(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HolidaysScreen",
    ()=>HolidaysScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FloppyDiskIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FloppyDiskIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkBadge01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Clock01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Edit02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hrmApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/utils/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/utils/holidayUtils.ts [app-client] (ecmascript)");
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
const HOLIDAY_TYPE_STYLES = {
    public: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    restricted: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    company: "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800"
};
const HOLIDAY_TYPE_DOT = {
    public: "bg-emerald-500",
    restricted: "bg-amber-500",
    company: "bg-sky-500"
};
const HOLIDAY_TYPE_LABELS = {
    public: "National / Public",
    restricted: "Restricted",
    company: "Company / Weekend"
};
const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const MONTH_FULL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function HolidaysScreen({ holidays = [], branches = [], roles = [], employees = [], onRefresh, userRole = "Employee", canAccessAdmin = false }) {
    var _branches_find, _branches_find1;
    _s();
    const { user: authUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const perms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[perms]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHrmPermissions"])({
                authUser,
                userRole,
                roles,
                employees
            });
        }
    }["HolidaysScreen.useMemo[perms]"], [
        authUser,
        userRole,
        roles,
        employees
    ]);
    const canCreateHoliday = perms.canCreateHoliday && canAccessAdmin;
    const canEditHoliday = perms.canEditHoliday && canAccessAdmin;
    const canDeleteHoliday = perms.canDeleteHoliday && canAccessAdmin;
    const canBulkManage = perms.canBulkManageHolidays && canAccessAdmin;
    const canBulkDelete = perms.canBulkDeleteHolidays && canAccessAdmin;
    const isSuperAdminOrAdmin = canCreateHoliday || canEditHoliday || canDeleteHoliday || canBulkManage;
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentYear);
    const [selectedBranchId, setSelectedBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    // ── Manual Add Form State ──
    const [isAddOpen, setIsAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        date: "",
        holidayType: "public",
        description: "",
        branchId: "all"
    });
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── Auto-Generate Weekends Modal State ──
    const [isWeekendModalOpen, setIsWeekendModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [weekendYear, setWeekendYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentYear);
    const [weekendMonth, setWeekendMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [weekendRule, setWeekendRule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all_sundays_and_2nd_4th_saturdays");
    const [weekendBranchId, setWeekendBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [weekendHolidayType, setWeekendHolidayType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("company");
    const [stagedWeekends, setStagedWeekends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isGeneratingWeekends, setIsGeneratingWeekends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Google Calendar Public Holidays Modal State ──
    const [isGoogleModalOpen, setIsGoogleModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [googleYear, setGoogleYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentYear);
    const [googleMonth, setGoogleMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [googleBranchId, setGoogleBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [googleTypeFilter, setGoogleTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [stagedGoogleHolidays, setStagedGoogleHolidays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isImportingGoogle, setIsImportingGoogle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 25th of Month Routine Modal State ──
    const cutoffInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[cutoffInfo]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthlyCutoffStatus"])()
    }["HolidaysScreen.useMemo[cutoffInfo]"], []);
    const [isMonthlyRoutineModalOpen, setIsMonthlyRoutineModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [routineYear, setRoutineYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cutoffInfo.upcomingMonthYear);
    const [routineMonth, setRoutineMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cutoffInfo.upcomingMonth);
    const [routineRule, setRoutineRule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all_sundays_and_2nd_4th_saturdays");
    const [routineIncludeGoogle, setRoutineIncludeGoogle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [routineBranchId, setRoutineBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [stagedRoutineItems, setStagedRoutineItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isApprovingRoutine, setIsApprovingRoutine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Company Policy Settings State ──
    const [companyPolicy, setCompanyPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COMPANY_POLICY"]);
    const [isPolicyModalOpen, setIsPolicyModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [policyForm, setPolicyForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COMPANY_POLICY"]);
    const [policyGenYear, setPolicyGenYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentYear);
    const [policyGenMonth, setPolicyGenMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isPolicyGenerating, setIsPolicyGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load persisted policy on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HolidaysScreen.useEffect": ()=>{
            const loaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadCompanyHolidayPolicy"])();
            setCompanyPolicy(loaded);
            setPolicyForm(loaded);
        }
    }["HolidaysScreen.useEffect"], []);
    // ── Edit Holiday Modal State ──
    const [isEditOpen, setIsEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        title: "",
        date: "",
        holidayType: "company",
        description: "",
        branchId: "all"
    });
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Month-Wise Deletion & Management State ──
    const [deletingMonth, setDeletingMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [monthManagerOpen, setMonthManagerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedManagerMonth, setSelectedManagerMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [monthManagerItems, setMonthManagerItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ── In-App Deletion Confirmation Modal State (Popup) ──
    const [deleteConfirmState, setDeleteConfirmState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        type: "single",
        title: "",
        subtitle: ""
    });
    const [isExecutingDelete, setIsExecutingDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Set of existing date strings for quick check
    const existingDateMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[existingDateMap]": ()=>{
            const map = new Map();
            holidays.forEach({
                "HolidaysScreen.useMemo[existingDateMap]": (h)=>{
                    const list = map.get(h.date) || [];
                    list.push(h);
                    map.set(h.date, list);
                }
            }["HolidaysScreen.useMemo[existingDateMap]"]);
            return map;
        }
    }["HolidaysScreen.useMemo[existingDateMap]"], [
        holidays
    ]);
    // Conflict check for the manual form
    const existingOnSelectedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[existingOnSelectedDate]": ()=>{
            if (!form.date) return [];
            return existingDateMap.get(form.date) || [];
        }
    }["HolidaysScreen.useMemo[existingOnSelectedDate]"], [
        form.date,
        existingDateMap
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[filtered]": ()=>{
            return holidays.filter({
                "HolidaysScreen.useMemo[filtered]": (h)=>{
                    const hYear = new Date(h.date).getFullYear();
                    if (hYear !== selectedYear) return false;
                    if (selectedType !== "all" && h.holidayType !== selectedType) return false;
                    if (selectedBranchId !== "all") {
                        const hBranch = h.branchId;
                        if (hBranch && String(hBranch) !== selectedBranchId) return false;
                    }
                    return true;
                }
            }["HolidaysScreen.useMemo[filtered]"]);
        }
    }["HolidaysScreen.useMemo[filtered]"], [
        holidays,
        selectedYear,
        selectedType,
        selectedBranchId
    ]);
    const upcoming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[upcoming]": ()=>{
            const withDate = filtered.map({
                "HolidaysScreen.useMemo[upcoming].withDate": (h)=>({
                        ...h,
                        _date: new Date(h.date)
                    })
            }["HolidaysScreen.useMemo[upcoming].withDate"]).filter({
                "HolidaysScreen.useMemo[upcoming].withDate": (h)=>{
                    h._date.setHours(0, 0, 0, 0);
                    return h._date >= today;
                }
            }["HolidaysScreen.useMemo[upcoming].withDate"]).sort({
                "HolidaysScreen.useMemo[upcoming].withDate": (a, b)=>a._date.getTime() - b._date.getTime()
            }["HolidaysScreen.useMemo[upcoming].withDate"]);
            var _withDate_;
            return (_withDate_ = withDate[0]) !== null && _withDate_ !== void 0 ? _withDate_ : null;
        }
    }["HolidaysScreen.useMemo[upcoming]"], [
        filtered,
        today
    ]);
    const daysUntil = upcoming ? Math.round((upcoming._date.getTime() - today.getTime()) / 86400000) : null;
    const byMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HolidaysScreen.useMemo[byMonth]": ()=>{
            const map = {};
            filtered.forEach({
                "HolidaysScreen.useMemo[byMonth]": (h)=>{
                    const m = new Date(h.date).getMonth();
                    if (!map[m]) map[m] = [];
                    map[m].push(h);
                }
            }["HolidaysScreen.useMemo[byMonth]"]);
            return map;
        }
    }["HolidaysScreen.useMemo[byMonth]"], [
        filtered
    ]);
    // ── Sync Staged Weekends when modal inputs change ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HolidaysScreen.useEffect": ()=>{
            if (!isWeekendModalOpen) return;
            const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWeekends"])({
                year: weekendYear,
                month: weekendMonth,
                rule: weekendRule,
                titleFormat: "descriptive",
                holidayType: weekendHolidayType,
                branchId: weekendBranchId
            });
            const initialized = generated.map({
                "HolidaysScreen.useEffect.initialized": (item)=>{
                    const exists = existingDateMap.has(item.date);
                    return {
                        ...item,
                        selected: !exists
                    };
                }
            }["HolidaysScreen.useEffect.initialized"]);
            setStagedWeekends(initialized);
        }
    }["HolidaysScreen.useEffect"], [
        isWeekendModalOpen,
        weekendYear,
        weekendMonth,
        weekendRule,
        weekendHolidayType,
        weekendBranchId,
        existingDateMap
    ]);
    // ── Sync Staged Google Holidays when modal inputs change ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HolidaysScreen.useEffect": ()=>{
            if (!isGoogleModalOpen) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGooglePublicHolidays"])(googleYear, googleMonth).then({
                "HolidaysScreen.useEffect": (list)=>{
                    const filteredList = list.filter({
                        "HolidaysScreen.useEffect.filteredList": (item)=>{
                            if (googleTypeFilter !== "all" && item.holidayType !== googleTypeFilter) return false;
                            return true;
                        }
                    }["HolidaysScreen.useEffect.filteredList"]);
                    const initialized = filteredList.map({
                        "HolidaysScreen.useEffect.initialized": (item)=>{
                            const exists = existingDateMap.has(item.date);
                            return {
                                ...item,
                                branchId: googleBranchId !== "all" ? Number(googleBranchId) : null,
                                selected: !exists
                            };
                        }
                    }["HolidaysScreen.useEffect.initialized"]);
                    setStagedGoogleHolidays(initialized);
                }
            }["HolidaysScreen.useEffect"]);
        }
    }["HolidaysScreen.useEffect"], [
        isGoogleModalOpen,
        googleYear,
        googleMonth,
        googleTypeFilter,
        googleBranchId,
        existingDateMap
    ]);
    // ── Sync Staged 25th Routine Items when modal inputs change ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HolidaysScreen.useEffect": ()=>{
            if (!isMonthlyRoutineModalOpen) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateMonthlyRoutinePackage"])({
                year: routineYear,
                month: routineMonth,
                rule: routineRule,
                includeGooglePublicHolidays: routineIncludeGoogle,
                branchId: routineBranchId
            }).then({
                "HolidaysScreen.useEffect": (list)=>{
                    const initialized = list.map({
                        "HolidaysScreen.useEffect.initialized": (item)=>{
                            const exists = existingDateMap.has(item.date);
                            return {
                                ...item,
                                selected: !exists
                            };
                        }
                    }["HolidaysScreen.useEffect.initialized"]);
                    setStagedRoutineItems(initialized);
                }
            }["HolidaysScreen.useEffect"]);
        }
    }["HolidaysScreen.useEffect"], [
        isMonthlyRoutineModalOpen,
        routineYear,
        routineMonth,
        routineRule,
        routineIncludeGoogle,
        routineBranchId,
        existingDateMap
    ]);
    // ── Bulk Save Handler ──
    const handleBulkSave = async (items, targetBranchId, onSuccessText, closeModalFn, setLoadingFn)=>{
        if (!canBulkManage) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Permission Denied: Your assigned role does not permit bulk holiday generation or imports.");
            return;
        }
        const selectedItems = items.filter((i)=>i.selected);
        if (selectedItems.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select at least one holiday to approve and generate.");
            return;
        }
        setLoadingFn(true);
        try {
            const payload = selectedItems.map((item)=>({
                    title: item.title.trim(),
                    date: item.date,
                    year: item.year,
                    holidayType: item.holidayType,
                    description: item.description || undefined,
                    branchId: targetBranchId !== "all" ? Number(targetBranchId) : null
                }));
            let success = false;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].createBulkHolidays(payload);
                if (res === null || res === void 0 ? void 0 : res.success) {
                    success = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message || onSuccessText);
                }
            } catch (bulkErr) {
                let addedCount = 0;
                for (const p of payload){
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].createHoliday(p);
                        addedCount++;
                    } catch (e) {}
                }
                if (addedCount > 0) {
                    success = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Generated ${addedCount} holiday(s) successfully!`);
                }
            }
            if (success) {
                closeModalFn();
                onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to generate holidays.");
        } finally{
            setLoadingFn(false);
        }
    };
    const handleSave = async (e)=>{
        e.preventDefault();
        if (!form.title.trim() || !form.date) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Title and date are required.");
            return;
        }
        if (!canCreateHoliday) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Permission Denied: Your assigned role does not permit creating custom holidays.");
            return;
        }
        setIsSaving(true);
        try {
            const payload = {
                title: form.title.trim(),
                date: form.date,
                holidayType: form.holidayType,
                description: form.description.trim() || undefined,
                year: new Date(form.date).getFullYear()
            };
            if (form.branchId !== "all") payload.branchId = Number(form.branchId);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].createHoliday(payload);
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Holiday added successfully!");
                setIsAddOpen(false);
                setForm({
                    title: "",
                    date: "",
                    holidayType: "public",
                    description: "",
                    branchId: "all"
                });
                onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to add holiday.");
        } finally{
            setIsSaving(false);
        }
    };
    // ── Confirmation-Based Deletion Handlers (Popup) ──
    const handleRequestDeleteSingle = (id, title, date)=>{
        if (!canDeleteHoliday) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Permission Denied: Your assigned role does not permit deleting holidays.");
            return;
        }
        setDeleteConfirmState({
            isOpen: true,
            type: "single",
            id,
            title: title ? `Delete "${title}"?` : "Delete Holiday?",
            subtitle: date ? `Are you sure you want to delete this holiday on ${date}? This action cannot be undone.` : "Are you sure you want to delete this holiday? This action cannot be undone.",
            warningNote: "This will remove the holiday from the scheduled calendar and attendance cycles."
        });
    };
    const handleRequestDeleteMonth = (monthIndex, monthName, items)=>{
        if (!items || items.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No holidays found in this month to delete.");
            return;
        }
        setDeleteConfirmState({
            isOpen: true,
            type: "month",
            monthIndex,
            monthName,
            items,
            title: `Delete All ${monthName} ${selectedYear} Holidays?`,
            subtitle: `Are you sure you want to delete all ${items.length} holiday(s) in ${monthName} ${selectedYear}?`,
            warningNote: `This will permanently remove ${items.length} holiday records (Sundays, Saturdays, and public holidays) for ${monthName}.`
        });
    };
    const handleExecuteConfirmedDelete = async ()=>{
        setIsExecutingDelete(true);
        try {
            if (deleteConfirmState.type === "single" && deleteConfirmState.id) {
                const idToDelete = deleteConfirmState.id;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].deleteHoliday(idToDelete);
                if (res === null || res === void 0 ? void 0 : res.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Holiday removed successfully.");
                    setMonthManagerItems((prev)=>prev.filter((i)=>i.id !== idToDelete));
                    setDeleteConfirmState((p)=>({
                            ...p,
                            isOpen: false
                        }));
                    onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
                }
            } else if (deleteConfirmState.type === "month" && deleteConfirmState.items) {
                const ids = deleteConfirmState.items.map((h)=>h.id);
                let success = false;
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].bulkDeleteHolidays(ids);
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        success = true;
                        var _res_count;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Deleted ${(_res_count = res.count) !== null && _res_count !== void 0 ? _res_count : ids.length} holiday(s) in ${deleteConfirmState.monthName} ${selectedYear}!`);
                    }
                } catch (bulkErr) {
                    let deleted = 0;
                    for (const id of ids){
                        try {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].deleteHoliday(id);
                            deleted++;
                        } catch (e) {}
                    }
                    if (deleted > 0) {
                        success = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Deleted ${deleted} holiday(s) in ${deleteConfirmState.monthName} ${selectedYear}!`);
                    }
                }
                if (success) {
                    setDeleteConfirmState((p)=>({
                            ...p,
                            isOpen: false
                        }));
                    setMonthManagerOpen(false);
                    onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
                }
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete.");
        } finally{
            setIsExecutingDelete(false);
        }
    };
    const handleDelete = async (id)=>{
        const item = holidays.find((h)=>h.id === id) || monthManagerItems.find((h)=>h.id === id);
        handleRequestDeleteSingle(id, item === null || item === void 0 ? void 0 : item.title, item === null || item === void 0 ? void 0 : item.date);
    };
    // ── Company Policy Handlers ──
    const handleOpenPolicyModal = ()=>{
        try {
            const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadCompanyHolidayPolicy"])();
            const merged = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COMPANY_POLICY"],
                ...companyPolicy,
                ...current
            };
            setCompanyPolicy(merged);
            setPolicyForm(merged);
        } catch (e) {
            setPolicyForm({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COMPANY_POLICY"]
            });
        }
        setIsPolicyModalOpen(true);
    };
    const handleSavePolicy = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyHolidayPolicy"])(policyForm);
        setCompanyPolicy({
            ...policyForm
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Company weekend & holiday policy saved successfully!");
    };
    const handleGenerateFromPolicy = async ()=>{
        // Save policy first
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyHolidayPolicy"])(policyForm);
        setCompanyPolicy({
            ...policyForm
        });
        setIsPolicyGenerating(true);
        try {
            const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWeekendsFromPolicy"])({
                year: policyGenYear,
                month: policyGenMonth,
                policy: policyForm,
                holidayType: "company",
                branchId: policyForm.branchId
            });
            // Filter out existing dates
            const newItems = generated.filter((item)=>!existingDateMap.has(item.date));
            if (newItems.length === 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("All policy dates are already in the calendar!", {
                    icon: "ℹ️"
                });
                setIsPolicyGenerating(false);
                return;
            }
            await handleBulkSave(newItems, policyForm.branchId, `Generated ${newItems.length} holiday(s) based on company policy!`, ()=>setIsPolicyModalOpen(false), setIsPolicyGenerating);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Failed to generate from company policy.");
            setIsPolicyGenerating(false);
        }
    };
    // ── Edit Holiday Handlers ──
    const handleStartEdit = (h)=>{
        setEditForm({
            id: h.id,
            title: h.title,
            date: h.date,
            holidayType: h.holidayType || "company",
            description: h.description || "",
            branchId: h.branchId ? String(h.branchId) : "all"
        });
        setIsEditOpen(true);
    };
    const handleUpdateHoliday = async (e)=>{
        e.preventDefault();
        if (!editForm.title.trim() || !editForm.date) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Title and date are required.");
            return;
        }
        setIsUpdating(true);
        try {
            const payload = {
                title: editForm.title.trim(),
                date: editForm.date,
                holidayType: editForm.holidayType,
                description: editForm.description.trim() || undefined,
                year: new Date(editForm.date).getFullYear(),
                branchId: editForm.branchId !== "all" ? Number(editForm.branchId) : null
            };
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].updateHoliday(editForm.id, payload);
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message || "Holiday updated successfully!");
                setIsEditOpen(false);
                setMonthManagerItems((prev)=>prev.map((item)=>item.id === editForm.id ? {
                            ...item,
                            ...payload
                        } : item));
                onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update holiday.");
        } finally{
            setIsUpdating(false);
        }
    };
    // ── Month-Wise Deletion & Management Handlers ──
    const handleDeleteMonthHolidays = (monthIndex, monthName, items)=>{
        handleRequestDeleteMonth(monthIndex, monthName, items);
    };
    const handleOpenMonthManager = (monthIndex, items)=>{
        setSelectedManagerMonth(monthIndex);
        setMonthManagerItems(items);
        setMonthManagerOpen(true);
    };
    const CalendarMonth = ({ month, monthHolidays })=>{
        if (monthHolidays.length === 0) return null;
        const firstDay = new Date(selectedYear, month, 1).getDay();
        const daysInMonth = new Date(selectedYear, month + 1, 0).getDate();
        const holidayDates = new Set(monthHolidays.map((h)=>new Date(h.date).getDate()));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-extrabold text-slate-800 dark:text-slate-200",
                                    children: [
                                        MONTH_FULL[month],
                                        " ",
                                        selectedYear
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
                                    children: [
                                        monthHolidays.length,
                                        " day",
                                        monthHolidays.length !== 1 ? "s" : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 643,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 gap-0.5 text-center mb-1",
                            children: [
                                "Su",
                                "Mo",
                                "Tu",
                                "We",
                                "Th",
                                "Fr",
                                "Sa"
                            ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] font-bold text-slate-400 py-1",
                                    children: d
                                }, d, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 655,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 gap-0.5 text-center",
                            children: [
                                Array.from({
                                    length: firstDay
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `e-${i}`, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 661,
                                        columnNumber: 57
                                    }, this)),
                                Array.from({
                                    length: daysInMonth
                                }, (_, i)=>{
                                    const day = i + 1;
                                    const isHol = holidayDates.has(day);
                                    const isTod = today.getFullYear() === selectedYear && today.getMonth() === month && today.getDate() === day;
                                    const holidayObj = isHol ? monthHolidays.find((h)=>new Date(h.date).getDate() === day) : null;
                                    const isWeekendOff = (holidayObj === null || holidayObj === void 0 ? void 0 : holidayObj.title.toLowerCase().includes("sunday")) || (holidayObj === null || holidayObj === void 0 ? void 0 : holidayObj.title.toLowerCase().includes("saturday"));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>holidayObj && canEditHoliday && handleStartEdit(holidayObj),
                                        title: holidayObj ? `${holidayObj.title} (${HOLIDAY_TYPE_LABELS[holidayObj.holidayType]})${canEditHoliday ? " — Click to edit" : ""}` : undefined,
                                        className: `h-7 w-7 mx-auto flex items-center justify-center rounded-md text-[11px] font-semibold transition-all select-none ${isHol ? isWeekendOff ? `bg-sky-500 text-white font-bold shadow-xs ${canEditHoliday ? "hover:scale-110 cursor-pointer ring-offset-1 hover:ring-2 hover:ring-sky-400" : ""}` : `bg-emerald-500 text-white font-black shadow-xs ${canEditHoliday ? "hover:scale-110 cursor-pointer ring-offset-1 hover:ring-2 hover:ring-emerald-400" : ""}` : isTod ? "ring-2 ring-emerald-500 text-emerald-600 font-bold" : "text-slate-600 dark:text-slate-400"}`,
                                        children: day
                                    }, day, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 670,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-1 max-h-40 overflow-y-auto pr-1 divide-y divide-slate-100 dark:divide-slate-800/60",
                            children: monthHolidays.sort((a, b)=>new Date(a.date).getDate() - new Date(b.date).getDate()).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-1.5 py-1 px-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/60 group transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleStartEdit(h),
                                            className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer",
                                            title: "Click to edit this holiday",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-1.5 h-1.5 rounded-full shrink-0 ${h.holidayType === 'public' ? 'bg-emerald-500' : h.holidayType === 'restricted' ? 'bg-amber-500' : 'bg-sky-500'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-700 dark:text-slate-300 w-5 text-right shrink-0 text-[11px]",
                                                    children: new Date(h.date).getDate()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-600 dark:text-slate-400 truncate text-[11px] font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors",
                                                    children: h.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        (canEditHoliday || canDeleteHoliday) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
                                            children: [
                                                canEditHoliday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleStartEdit(h);
                                                    },
                                                    className: "p-1 rounded text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 cursor-pointer transition",
                                                    title: "Edit this holiday",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit02Icon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 23
                                                }, this),
                                                canDeleteHoliday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleRequestDeleteSingle(h.id, h.title, h.date);
                                                    },
                                                    className: "p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/60 cursor-pointer transition",
                                                    title: "Delete this holiday",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 708,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, h.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 641,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-slate-400 font-medium",
                            children: [
                                monthHolidays.length,
                                " scheduled"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 742,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleOpenMonthManager(month, monthHolidays),
                                    className: "h-[30px] px-2.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 transition cursor-pointer",
                                    title: `Edit & manage ${MONTH_FULL[month]} holidays`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit02Icon"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        "Edit Month"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 746,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleDeleteMonthHolidays(month, MONTH_FULL[month], monthHolidays),
                                    disabled: deletingMonth === month,
                                    className: "h-[30px] px-2.5 rounded-md bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 text-[10px] font-bold flex items-center gap-1 transition cursor-pointer disabled:opacity-50",
                                    title: `Delete all holidays for ${MONTH_FULL[month]} ${selectedYear}`,
                                    children: [
                                        deletingMonth === month ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 border-2 border-red-500 border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 763,
                                            columnNumber: 17
                                        }, this),
                                        "Delete Month"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 754,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 745,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 741,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
            lineNumber: 640,
            columnNumber: 7
        }, this);
    };
    // ── Unified Design System Tokens ──
    const inputCls = "w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 outline-none transition-all focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-emerald-500 placeholder:text-slate-400";
    const selectCls = `${inputCls} font-medium cursor-pointer`;
    const primaryActionCls = "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 active:scale-[0.97] disabled:opacity-50 cursor-pointer";
    const secondaryActionCls = "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer";
    const btnGhost = "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-3.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition cursor-pointer";
    const labelCls = "block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            cutoffInfo.is25thCutoffActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-700/30 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 786,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start sm:items-center gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-900/40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                            size: 20,
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 790,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 789,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 795,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Monthly Routine Active"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-slate-400",
                                                        children: [
                                                            "Day ",
                                                            cutoffInfo.currentDay,
                                                            " of Month"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 793,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-white",
                                                children: [
                                                    "Generate & Approve ",
                                                    cutoffInfo.upcomingMonthName,
                                                    " ",
                                                    cutoffInfo.upcomingMonthYear,
                                                    " Calendar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 mt-0.5 max-w-lg",
                                                children: "Verify upcoming month weekends and public holidays before finalizing attendance & payroll."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 802,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 792,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 788,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMonthlyRoutineModalOpen(true),
                                className: "inline-flex h-9 items-center gap-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-all active:scale-95 shadow-sm shrink-0 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    "Review & Approve ",
                                    cutoffInfo.upcomingMonthName,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 813,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 807,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 787,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 785,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 823,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 822,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-900 dark:text-white",
                                        children: "Holiday & Weekend Calendar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 826,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                        children: [
                                            filtered.length,
                                            " scheduled · ",
                                            selectedYear,
                                            isSuperAdminOrAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1.5 text-emerald-600 dark:text-emerald-400 font-medium",
                                                children: "· Admin Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 831,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 829,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 825,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 821,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 overflow-hidden p-0.5 gap-0.5",
                                children: [
                                    "list",
                                    "calendar"
                                ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setViewMode(v),
                                        className: `px-3 h-full rounded-md text-xs font-semibold capitalize transition-all ${viewMode === v ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,
                                        children: v
                                    }, v, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 840,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this),
                            (canBulkManage || canCreateHoliday) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleOpenPolicyModal,
                                className: "inline-flex h-9 items-center gap-1.5 px-3.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition cursor-pointer",
                                title: "Company weekend policy settings",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 860,
                                        columnNumber: 15
                                    }, this),
                                    "Policy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 855,
                                columnNumber: 13
                            }, this),
                            canBulkManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsWeekendModalOpen(true),
                                className: "inline-flex h-9 items-center gap-1.5 px-3.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold hover:bg-sky-100 dark:hover:bg-sky-900/50 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 870,
                                        columnNumber: 15
                                    }, this),
                                    "Weekends"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 866,
                                columnNumber: 13
                            }, this),
                            canBulkManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsGoogleModalOpen(true),
                                className: "inline-flex h-9 items-center gap-1.5 px-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold hover:bg-amber-100 dark:hover:bg-amber-900/50 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 880,
                                        columnNumber: 15
                                    }, this),
                                    "Google"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 876,
                                columnNumber: 13
                            }, this),
                            canCreateHoliday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsAddOpen((p)=>!p),
                                className: `inline-flex h-9 items-center gap-1.5 px-4 rounded-lg text-xs font-semibold transition-all cursor-pointer ${isAddOpen ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20"}`,
                                children: [
                                    isAddOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 894,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 894,
                                        columnNumber: 54
                                    }, this),
                                    isAddOpen ? "Cancel" : "Add Holiday"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 886,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this),
            isAddOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-amber-200/70 dark:border-amber-800/50 bg-amber-50/60 dark:bg-amber-950/20 shadow-sm p-4 sm:p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 906,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-amber-900 dark:text-amber-300",
                                        children: "Add Holiday Manually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 909,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 905,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-400",
                                children: "Overlap detection enabled"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 904,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSave,
                        className: "space-y-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelCls,
                                                children: "Holiday Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 917,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                placeholder: "e.g. Diwali, Company Annual Day",
                                                value: form.title,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            title: e.target.value
                                                        })),
                                                className: inputCls
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 916,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelCls,
                                                children: "Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 929,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                required: true,
                                                value: form.date,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            date: e.target.value
                                                        })),
                                                className: inputCls
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 930,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 928,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelCls,
                                                children: "Holiday Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.holidayType,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            holidayType: e.target.value
                                                        })),
                                                className: selectCls,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "public",
                                                        children: "National / Public"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "company",
                                                        children: "Company Holiday"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "restricted",
                                                        children: "Restricted (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 941,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 939,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelCls,
                                                children: "Applies to Branch"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.branchId,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            branchId: e.target.value
                                                        })),
                                                className: selectCls,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Branches (Company-Wide)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 19
                                                    }, this),
                                                    branches.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: b.id,
                                                            children: [
                                                                b.name,
                                                                b.city ? ` (${b.city})` : ""
                                                            ]
                                                        }, b.id, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 953,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 951,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: labelCls,
                                                children: "Description (optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 967,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "e.g. Festival celebration note",
                                                value: form.description,
                                                onChange: (e)=>setForm((p)=>({
                                                            ...p,
                                                            description: e.target.value
                                                        })),
                                                className: inputCls
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 968,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 966,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, this),
                            existingOnSelectedDate.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2.5 p-3 rounded-lg bg-amber-100/70 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                        size: 15,
                                        className: "text-amber-600 shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 981,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold mb-0.5",
                                                children: "Holiday already exists on this date:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 983,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside space-y-0.5 text-[11px]",
                                                children: existingOnSelectedDate.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: h.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 987,
                                                                columnNumber: 25
                                                            }, this),
                                                            " · ",
                                                            HOLIDAY_TYPE_LABELS[h.holidayType]
                                                        ]
                                                    }, h.id, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 986,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 984,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 982,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 980,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsAddOpen(false),
                                        className: btnGhost,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 996,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSaving,
                                        className: primaryActionCls,
                                        children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 21
                                                }, this),
                                                " Saving..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FloppyDiskIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloppyDiskIcon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 21
                                                }, this),
                                                " Save Holiday"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 995,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 914,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 903,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-9 items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedYear((y)=>y - 1),
                                className: "h-full px-3 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 text-sm font-bold text-slate-800 dark:text-white min-w-[52px] text-center",
                                children: selectedYear
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1027,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedYear((y)=>y + 1),
                                className: "h-full px-3 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1030,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1020,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedBranchId,
                        onChange: (e)=>setSelectedBranchId(e.target.value),
                        className: `${selectCls} min-w-[140px] w-auto`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Branches"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1042,
                                columnNumber: 11
                            }, this),
                            branches.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: b.id,
                                    children: [
                                        b.name,
                                        b.city ? ` (${b.city})` : ""
                                    ]
                                }, b.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1038,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedType,
                        onChange: (e)=>setSelectedType(e.target.value),
                        className: `${selectCls} min-w-[140px] w-auto`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Types"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1054,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "public",
                                children: "National / Public"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1055,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "company",
                                children: "Company / Weekends"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1056,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "restricted",
                                children: "Restricted"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1057,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1050,
                        columnNumber: 9
                    }, this),
                    selectedYear !== currentYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSelectedYear(currentYear),
                        className: "inline-flex h-9 items-center px-3.5 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition cursor-pointer",
                        children: [
                            "Today · ",
                            currentYear
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1061,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1018,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    "public",
                    "company",
                    "restricted"
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold ${HOLIDAY_TYPE_STYLES[t]}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-1.5 h-1.5 rounded-full ${HOLIDAY_TYPE_DOT[t]}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1076,
                                columnNumber: 13
                            }, this),
                            HOLIDAY_TYPE_LABELS[t]
                        ]
                    }, t, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1073,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1071,
                columnNumber: 7
            }, this),
            upcoming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-amber-200/60 dark:border-amber-800/50 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 p-4 flex items-center justify-between gap-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1086,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-0.5",
                                        children: "Next Upcoming Holiday"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white truncate",
                                        children: upcoming.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1093,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                        children: [
                                            new Date(upcoming.date).toLocaleDateString("en-IN", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long"
                                            }),
                                            upcoming.branchId && branches.find((b)=>String(b.id) === String(upcoming.branchId)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1.5 text-emerald-600 dark:text-emerald-400 font-medium",
                                                children: [
                                                    "· ",
                                                    (_branches_find = branches.find((b)=>String(b.id) === String(upcoming.branchId))) === null || _branches_find === void 0 ? void 0 : _branches_find.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1094,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1089,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1085,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black text-amber-600 dark:text-amber-400 tabular-nums",
                                children: daysUntil === 0 ? "Today!" : `${daysUntil}d`
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400",
                                children: daysUntil === 0 ? "Holiday today" : "days away"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1084,
                columnNumber: 9
            }, this),
            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16 px-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center bg-slate-50/40 dark:bg-slate-900/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                            size: 28,
                            className: "text-slate-300 dark:text-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1",
                        children: [
                            "No holidays found for ",
                            selectedYear
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 max-w-md mx-auto mb-5",
                        children: selectedBranchId !== "all" || selectedType !== "all" ? "Try clearing the branch or type filters to see all holidays." : isSuperAdminOrAdmin ? "Use 'Weekends' to fill Sundays & Saturdays, or 'Google' to import national festivals." : "Holidays scheduled by HR will appear here."
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1126,
                        columnNumber: 11
                    }, this),
                    canBulkManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2.5 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsWeekendModalOpen(true),
                                className: "inline-flex h-9 items-center gap-1.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-sm transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 17
                                    }, this),
                                    " Auto-Generate Weekends"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsGoogleModalOpen(true),
                                className: "inline-flex h-9 items-center gap-1.5 px-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 17
                                    }, this),
                                    " Sync Google Holidays"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1141,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1134,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1119,
                columnNumber: 9
            }, this),
            viewMode === "list" && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: MONTHS.map((_, monthIdx)=>{
                    const monthItems = (byMonth[monthIdx] || []).sort((a, b)=>new Date(a.date).getDate() - new Date(b.date).getDate());
                    if (monthItems.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2 px-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest",
                                                children: MONTH_FULL[monthIdx]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-px w-6 bg-slate-200 dark:bg-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1167,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-slate-400 font-medium",
                                        children: [
                                            monthItems.length,
                                            " day",
                                            monthItems.length !== 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1169,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1162,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800",
                                children: monthItems.map((h)=>{
                                    var _branches_find;
                                    const hDate = new Date(h.date);
                                    hDate.setHours(0, 0, 0, 0);
                                    const isPast = hDate < today;
                                    const isTodayH = hDate.getTime() === today.getTime();
                                    const branchLabel = h.branchId ? (_branches_find = branches.find((b)=>String(b.id) === String(h.branchId))) === null || _branches_find === void 0 ? void 0 : _branches_find.name : null;
                                    const isWeekend = h.title.toLowerCase().includes("sunday") || h.title.toLowerCase().includes("saturday");
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-3 px-4 py-3 transition-colors group ${isTodayH ? "bg-emerald-50/80 dark:bg-emerald-950/30" : isPast ? "opacity-55 hover:opacity-75" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-11 h-11 rounded-xl flex flex-col items-center justify-center shrink-0 ${isTodayH ? "bg-emerald-600 text-white shadow-sm" : isPast ? "bg-slate-100 dark:bg-slate-800 text-slate-400" : isWeekend ? "bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-400" : "bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-bold uppercase leading-none opacity-70",
                                                        children: MONTHS[hDate.getMonth()]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1206,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-black leading-tight",
                                                        children: hDate.getDate()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1197,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-slate-900 dark:text-white truncate",
                                                                children: h.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 29
                                                            }, this),
                                                            isTodayH && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                                        size: 9
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                        lineNumber: 1218,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    " Today"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1217,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-1 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-semibold ${HOLIDAY_TYPE_STYLES[h.holidayType] || HOLIDAY_TYPE_STYLES.company}`,
                                                                children: HOLIDAY_TYPE_LABELS[h.holidayType] || h.holidayType
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1223,
                                                                columnNumber: 29
                                                            }, this),
                                                            branchLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                        lineNumber: 1230,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    " ",
                                                                    branchLabel
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1229,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-400",
                                                                children: "All Branches"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1233,
                                                                columnNumber: 31
                                                            }, this),
                                                            h.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-400 truncate max-w-[200px]",
                                                                children: [
                                                                    "· ",
                                                                    h.description
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1236,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1222,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium text-slate-400 uppercase hidden sm:block shrink-0",
                                                children: hDate.toLocaleDateString("en-IN", {
                                                    weekday: "short"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1244,
                                                columnNumber: 25
                                            }, this),
                                            (canEditHoliday || canDeleteHoliday) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                                children: [
                                                    canEditHoliday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleStartEdit(h),
                                                        className: "p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition cursor-pointer",
                                                        title: "Edit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit02Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1257,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 31
                                                    }, this),
                                                    canDeleteHoliday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleRequestDeleteSingle(h.id, h.title, h.date),
                                                        className: "p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer",
                                                        title: "Delete",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1266,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1261,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, h.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1174,
                                columnNumber: 17
                            }, this)
                        ]
                    }, monthIdx, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1161,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1154,
                columnNumber: 9
            }, this),
            viewMode === "calendar" && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: MONTHS.map((_, monthIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarMonth, {
                        month: monthIdx,
                        monthHolidays: byMonth[monthIdx] || []
                    }, monthIdx, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1285,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1283,
                columnNumber: 9
            }, this),
            filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-slate-600 dark:text-slate-300",
                                children: filtered.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1294,
                                columnNumber: 13
                            }, this),
                            " total holidays in ",
                            selectedYear,
                            selectedBranchId !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    " · ",
                                    (_branches_find1 = branches.find((b)=>String(b.id) === selectedBranchId)) === null || _branches_find1 === void 0 ? void 0 : _branches_find1.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1296,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: Object.entries(HOLIDAY_TYPE_LABELS).map(([k, v])=>{
                            const count = filtered.filter((h)=>h.holidayType === k).length;
                            return count > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-1.5 h-1.5 rounded-full ${HOLIDAY_TYPE_DOT[k]}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1304,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-600 dark:text-slate-300",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1305,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    v
                                ]
                            }, k, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 1303,
                                columnNumber: 17
                            }, this) : null;
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                        lineNumber: 1299,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1292,
                columnNumber: 9
            }, this),
            isWeekendModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-sky-50/50 dark:bg-sky-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-300 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1324,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                                    children: "Auto-Generate Weekends (Sundays & Saturdays)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "Preview and batch generate weekly off-days based on company attendance policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1326,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsWeekendModalOpen(false),
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1340,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1335,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 overflow-y-auto space-y-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Year"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1349,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: weekendYear,
                                                    onChange: (e)=>setWeekendYear(Number(e.target.value)),
                                                    className: selectCls,
                                                    children: [
                                                        currentYear - 1,
                                                        currentYear,
                                                        currentYear + 1,
                                                        currentYear + 2
                                                    ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: y,
                                                            children: y
                                                        }, y, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1355,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1350,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Month Scope"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1362,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: weekendMonth,
                                                    onChange: (e)=>setWeekendMonth(e.target.value === "all" ? "all" : Number(e.target.value)),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "Full Year (All 12 Months)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1367,
                                                            columnNumber: 21
                                                        }, this),
                                                        MONTH_FULL.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: idx,
                                                                children: name
                                                            }, idx, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1369,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1363,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Branch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1376,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: weekendBranchId,
                                                    onChange: (e)=>setWeekendBranchId(e.target.value),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Branches"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1381,
                                                            columnNumber: 21
                                                        }, this),
                                                        branches.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: b.id,
                                                                children: b.name
                                                            }, b.id, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1377,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-2 lg:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Weekend Schedule Rule *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1390,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: weekendRule,
                                                    onChange: (e)=>setWeekendRule(e.target.value),
                                                    className: selectCls,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKEND_RULE_LABELS"]).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: k,
                                                            children: [
                                                                v.label,
                                                                " — ",
                                                                v.desc
                                                            ]
                                                        }, k, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1389,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-slate-700 dark:text-slate-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                            size: 14,
                                                            className: "text-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1410,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Generated Preview (",
                                                        stagedWeekends.filter((i)=>i.selected).length,
                                                        " selected of ",
                                                        stagedWeekends.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStagedWeekends((prev)=>prev.map((item)=>({
                                                                            ...item,
                                                                            selected: true
                                                                        }))),
                                                            className: "text-emerald-600 font-bold hover:underline cursor-pointer",
                                                            children: "Select All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1414,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "·"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1420,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStagedWeekends((prev)=>prev.map((item)=>({
                                                                            ...item,
                                                                            selected: false
                                                                        }))),
                                                            className: "text-slate-500 font-bold hover:underline cursor-pointer",
                                                            children: "Deselect All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1421,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800",
                                            children: stagedWeekends.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "p-6 text-center text-slate-400",
                                                children: "No dates generated for current criteria."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1432,
                                                columnNumber: 21
                                            }, this) : stagedWeekends.map((item, idx)=>{
                                                const alreadyInCalendar = existingDateMap.has(item.date);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2.5 flex items-center justify-between gap-3 text-xs transition ${alreadyInCalendar ? "bg-slate-50/50 dark:bg-slate-900/30 opacity-70" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2.5 cursor-pointer flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: item.selected,
                                                                    onChange: (e)=>{
                                                                        const checked = e.target.checked;
                                                                        setStagedWeekends((prev)=>prev.map((it, i)=>i === idx ? {
                                                                                    ...it,
                                                                                    selected: checked
                                                                                } : it));
                                                                    },
                                                                    className: "rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1443,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-slate-800 dark:text-slate-200",
                                                                    children: item.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1454,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 dark:text-slate-400 font-medium",
                                                                    children: [
                                                                        "(",
                                                                        item.dayOfWeek,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1457,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-slate-700 dark:text-slate-300 truncate",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1460,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1442,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 flex items-center gap-2",
                                                            children: alreadyInCalendar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800",
                                                                children: "Already in Calendar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800",
                                                                children: "Ready to add"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1465,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1437,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1407,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1345,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: [
                                        stagedWeekends.filter((i)=>i.selected).length,
                                        " weekend day(s) will be created."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsWeekendModalOpen(false),
                                            className: secondaryActionCls,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isGeneratingWeekends || stagedWeekends.filter((i)=>i.selected).length === 0,
                                            onClick: ()=>handleBulkSave(stagedWeekends, weekendBranchId, "Weekends generated successfully!", ()=>setIsWeekendModalOpen(false), setIsGeneratingWeekends),
                                            className: `${primaryActionCls} bg-sky-600 hover:bg-sky-500`,
                                            children: isGeneratingWeekends ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1513,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Generating..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1518,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Approve & Generate ",
                                                    stagedWeekends.filter((i)=>i.selected).length,
                                                    " Weekends"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1489,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1485,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 1319,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1318,
                columnNumber: 9
            }, this),
            isGoogleModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-50/60 dark:bg-amber-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1540,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1539,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5",
                                                    children: "Google Calendar Public Holidays Sync"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1543,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "Official National & Gazetted Google Calendar Holidays for India"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1546,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1542,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsGoogleModalOpen(false),
                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1555,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1551,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1537,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 overflow-y-auto space-y-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Year"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1564,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: googleYear,
                                                    onChange: (e)=>setGoogleYear(Number(e.target.value)),
                                                    className: selectCls,
                                                    children: [
                                                        2024,
                                                        2025,
                                                        2026,
                                                        2027
                                                    ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: y,
                                                            children: y
                                                        }, y, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1570,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1565,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1577,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: googleMonth,
                                                    onChange: (e)=>setGoogleMonth(e.target.value === "all" ? "all" : Number(e.target.value)),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "Full Year (All Months)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1582,
                                                            columnNumber: 21
                                                        }, this),
                                                        MONTH_FULL.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: idx,
                                                                children: name
                                                            }, idx, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1584,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1578,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: googleTypeFilter,
                                                    onChange: (e)=>setGoogleTypeFilter(e.target.value),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All (Gazetted & Restricted)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1596,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "public",
                                                            children: "Gazetted Public Only"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1597,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "restricted",
                                                            children: "Restricted Only"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1598,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1592,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1590,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-slate-700 dark:text-slate-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                            size: 14,
                                                            className: "text-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1607,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Google Holidays (",
                                                        stagedGoogleHolidays.filter((i)=>i.selected).length,
                                                        " selected of ",
                                                        stagedGoogleHolidays.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1606,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStagedGoogleHolidays((prev)=>prev.map((item)=>({
                                                                            ...item,
                                                                            selected: true
                                                                        }))),
                                                            className: "text-amber-600 font-bold hover:underline cursor-pointer",
                                                            children: "Select All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1611,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "·"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1617,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStagedGoogleHolidays((prev)=>prev.map((item)=>({
                                                                            ...item,
                                                                            selected: false
                                                                        }))),
                                                            className: "text-slate-500 font-bold hover:underline cursor-pointer",
                                                            children: "Deselect All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1618,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1610,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1605,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800",
                                            children: stagedGoogleHolidays.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "p-6 text-center text-slate-400",
                                                children: "No Google holidays found for this selection."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1629,
                                                columnNumber: 21
                                            }, this) : stagedGoogleHolidays.map((item, idx)=>{
                                                const alreadyInCalendar = existingDateMap.has(item.date);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2.5 flex items-center justify-between gap-3 text-xs transition ${alreadyInCalendar ? "bg-slate-50/50 dark:bg-slate-900/30 opacity-70" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2.5 cursor-pointer flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: item.selected,
                                                                    onChange: (e)=>{
                                                                        const checked = e.target.checked;
                                                                        setStagedGoogleHolidays((prev)=>prev.map((it, i)=>i === idx ? {
                                                                                    ...it,
                                                                                    selected: checked
                                                                                } : it));
                                                                    },
                                                                    className: "rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1640,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-slate-800 dark:text-slate-200",
                                                                    children: item.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1651,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 dark:text-slate-400 font-medium",
                                                                    children: [
                                                                        "(",
                                                                        item.dayOfWeek,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1654,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-slate-900 dark:text-white truncate",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1657,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1639,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded-md text-[9px] font-bold uppercase ${HOLIDAY_TYPE_STYLES[item.holidayType]}`,
                                                                    children: item.holidayType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1663,
                                                                    columnNumber: 29
                                                                }, this),
                                                                alreadyInCalendar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300",
                                                                    children: "Exists"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1667,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300",
                                                                    children: "New"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1671,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1662,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1634,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1627,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1604,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1560,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: [
                                        stagedGoogleHolidays.filter((i)=>i.selected).length,
                                        " Google holiday(s) selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1686,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsGoogleModalOpen(false),
                                            className: "h-9 px-4 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1690,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isImportingGoogle || stagedGoogleHolidays.filter((i)=>i.selected).length === 0,
                                            onClick: ()=>handleBulkSave(stagedGoogleHolidays, googleBranchId, "Google Public Holidays imported successfully!", ()=>setIsGoogleModalOpen(false), setIsImportingGoogle),
                                            className: "h-9 px-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs transition disabled:opacity-50 flex items-center gap-1.5 cursor-pointer",
                                            children: isImportingGoogle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1711,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Importing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1716,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Approve & Import ",
                                                    stagedGoogleHolidays.filter((i)=>i.selected).length,
                                                    " Holidays"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1696,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1685,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 1535,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1534,
                columnNumber: 9
            }, this),
            isMonthlyRoutineModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1738,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1737,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-black text-slate-900 dark:text-white",
                                                            children: [
                                                                "Permission-Based Monthly Approval: ",
                                                                MONTH_FULL[routineMonth],
                                                                " ",
                                                                routineYear
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1742,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300",
                                                            children: "SuperAdmin / HR Only"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1745,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1741,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "25th of month routine: Review auto-generated Sundays, Saturdays, and Google Public Holidays before publishing."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1749,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1740,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1736,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsMonthlyRoutineModalOpen(false),
                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1758,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1735,
                            columnNumber: 13
                        }, this),
                        !isSuperAdminOrAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-red-50 dark:bg-red-950/40 border-b border-red-200 dark:border-red-800/50 flex items-center gap-3 text-red-700 dark:text-red-300 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 18,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1765,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Permission Restricted:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1767,
                                            columnNumber: 19
                                        }, this),
                                        " You need SuperAdmin, TenantAdmin, or DomainAdmin privileges to approve and publish auto-generated monthly calendars."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1766,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1764,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 overflow-y-auto space-y-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Target Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1776,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: routineMonth,
                                                    onChange: (e)=>setRoutineMonth(Number(e.target.value)),
                                                    className: selectCls,
                                                    children: MONTH_FULL.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: idx,
                                                            children: name
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1782,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1777,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1775,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Weekend Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1788,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: routineRule,
                                                    onChange: (e)=>setRoutineRule(e.target.value),
                                                    className: selectCls,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKEND_RULE_LABELS"]).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: k,
                                                            children: v.label
                                                        }, k, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1794,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1789,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1787,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Branch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1800,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: routineBranchId,
                                                    onChange: (e)=>setRoutineBranchId(e.target.value),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Branches (Company-Wide)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1805,
                                                            columnNumber: 21
                                                        }, this),
                                                        branches.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: b.id,
                                                                children: b.name
                                                            }, b.id, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 1807,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1801,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1799,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1774,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-slate-100/70 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-slate-700 dark:text-slate-300",
                                                    children: [
                                                        "Staged Monthly Schedule (",
                                                        stagedRoutineItems.filter((i)=>i.selected).length,
                                                        " of ",
                                                        stagedRoutineItems.length,
                                                        " approved)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1816,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStagedRoutineItems((prev)=>prev.map((item)=>({
                                                                            ...item,
                                                                            selected: true
                                                                        }))),
                                                            className: "text-emerald-600 font-bold hover:underline cursor-pointer",
                                                            children: "Select All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1820,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "·"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1826,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStagedRoutineItems((prev)=>prev.map((item)=>({
                                                                            ...item,
                                                                            selected: false
                                                                        }))),
                                                            className: "text-slate-500 font-bold hover:underline cursor-pointer",
                                                            children: "Deselect All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1827,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1819,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1815,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800",
                                            children: stagedRoutineItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "p-6 text-center text-slate-400",
                                                children: "No items staged for this month."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1838,
                                                columnNumber: 21
                                            }, this) : stagedRoutineItems.map((item, idx)=>{
                                                const alreadyInCalendar = existingDateMap.has(item.date);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 flex items-center justify-between gap-3 text-xs transition ${alreadyInCalendar ? "bg-slate-50/50 dark:bg-slate-900/30 opacity-70" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: item.selected,
                                                                    onChange: (e)=>{
                                                                        const checked = e.target.checked;
                                                                        setStagedRoutineItems((prev)=>prev.map((it, i)=>i === idx ? {
                                                                                    ...it,
                                                                                    selected: checked
                                                                                } : it));
                                                                    },
                                                                    className: "rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1849,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-11 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex flex-col items-center justify-center font-extrabold text-[10px] shrink-0 border border-emerald-200 dark:border-emerald-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: item.dayOfWeek.slice(0, 3)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                            lineNumber: 1861,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs leading-none",
                                                                            children: new Date(item.date).getDate()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                            lineNumber: 1862,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1860,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-extrabold text-slate-900 dark:text-white truncate",
                                                                            children: item.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                            lineNumber: 1865,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 truncate",
                                                                            children: [
                                                                                item.date,
                                                                                " · ",
                                                                                item.description || "Routine monthly schedule"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                            lineNumber: 1868,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1864,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1848,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded-md text-[9px] font-bold uppercase ${HOLIDAY_TYPE_STYLES[item.holidayType]}`,
                                                                    children: item.holidayType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1875,
                                                                    columnNumber: 29
                                                                }, this),
                                                                alreadyInCalendar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300",
                                                                    children: "Exists"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1879,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300",
                                                                    children: "Pending Approval"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 1883,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1874,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1843,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1836,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1814,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-[11px] text-sky-800 dark:text-sky-300 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "💡 Need to add festival or company-specific days? You can also manually add holidays anytime."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1897,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsMonthlyRoutineModalOpen(false);
                                                setIsAddOpen(true);
                                            },
                                            className: "font-bold underline hover:text-sky-900 dark:hover:text-white cursor-pointer shrink-0 ml-2",
                                            children: "Manually Add Holiday →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1900,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1896,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1773,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: [
                                        "Approving ",
                                        stagedRoutineItems.filter((i)=>i.selected).length,
                                        " days for ",
                                        MONTH_FULL[routineMonth],
                                        " ",
                                        routineYear
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1914,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsMonthlyRoutineModalOpen(false),
                                            className: "h-9 px-4 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1918,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: !isSuperAdminOrAdmin || isApprovingRoutine || stagedRoutineItems.filter((i)=>i.selected).length === 0,
                                            onClick: ()=>handleBulkSave(stagedRoutineItems, routineBranchId, `Approved & published ${MONTH_FULL[routineMonth]} ${routineYear} schedule!`, ()=>setIsMonthlyRoutineModalOpen(false), setIsApprovingRoutine),
                                            className: "h-9 px-5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-xs transition disabled:opacity-50 flex items-center gap-2 cursor-pointer",
                                            children: isApprovingRoutine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1943,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Publishing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 1948,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Approve & Publish to Holiday Calendar"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1924,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1917,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1913,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 1733,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1732,
                columnNumber: 9
            }, this),
            isPolicyModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-indigo-50/60 to-purple-50/40 dark:from-indigo-950/30 dark:to-purple-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center shadow-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 1970,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1969,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-black text-slate-900 dark:text-white flex items-center gap-2",
                                                    children: [
                                                        "Company Weekend & Holiday Settings",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/70 dark:text-indigo-300",
                                                            children: "HR Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 1975,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1973,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "Configure Sunday/Saturday full-day or half-day weekly rules and automatic holiday generation."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 1979,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1972,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1968,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsPolicyModalOpen(false),
                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 1988,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1984,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1967,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 overflow-y-auto space-y-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300",
                                            children: "1. Sunday Company Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1996,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUNDAY_POLICY_OPTIONS"].map((opt)=>{
                                                const isSelected = policyForm.sundayPolicy === opt.value;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setPolicyForm((prev)=>({
                                                                ...prev,
                                                                sundayPolicy: opt.value
                                                            })),
                                                    className: `p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${isSelected ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-400/20" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-bold ${isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-slate-800 dark:text-slate-200"}`,
                                                                    children: opt.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2012,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "sunday_policy",
                                                                    checked: isSelected,
                                                                    onChange: ()=>setPolicyForm((prev)=>({
                                                                                ...prev,
                                                                                sundayPolicy: opt.value
                                                                            })),
                                                                    className: "text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2015,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2011,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500 dark:text-slate-400",
                                                            children: opt.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2023,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, opt.value, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2003,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 1999,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 1995,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300",
                                            children: "2. Saturday Company Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2034,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SATURDAY_POLICY_OPTIONS"].map((opt)=>{
                                                const isSelected = policyForm.saturdayPolicy === opt.value;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setPolicyForm((prev)=>({
                                                                ...prev,
                                                                saturdayPolicy: opt.value
                                                            })),
                                                    className: `p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${isSelected ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-400/20" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-bold ${isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-slate-800 dark:text-slate-200"}`,
                                                                    children: opt.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2050,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "saturday_policy",
                                                                    checked: isSelected,
                                                                    onChange: ()=>setPolicyForm((prev)=>({
                                                                                ...prev,
                                                                                saturdayPolicy: opt.value
                                                                            })),
                                                                    className: "text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2053,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2049,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500 dark:text-slate-400",
                                                            children: opt.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2061,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, opt.value, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2041,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2037,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2033,
                                    columnNumber: 15
                                }, this),
                                (policyForm.sundayPolicy === "half_day" || policyForm.saturdayPolicy === "all_half_day" || policyForm.saturdayPolicy === "2nd_4th_off_others_half_day") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"], {
                                                    size: 16,
                                                    className: "text-amber-600 dark:text-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2076,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300",
                                                    children: "Half-Day Working Shift Timing"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2077,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2075,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-amber-800/80 dark:text-amber-400/80",
                                            children: "Specify which working session applies to half-day Saturdays or Sundays:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2081,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    onClick: ()=>setPolicyForm((prev)=>({
                                                                ...prev,
                                                                halfDaySession: "first_half"
                                                            })),
                                                    className: `p-2.5 rounded-lg border cursor-pointer flex items-center justify-between ${policyForm.halfDaySession === "first_half" ? "bg-amber-100 dark:bg-amber-900/60 border-amber-400 text-amber-950 dark:text-amber-200 font-bold" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold",
                                                                    children: "First Half (Morning)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2093,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-slate-500 dark:text-slate-400",
                                                                    children: "09:00 AM – 01:30 PM (Working)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2094,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2092,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            checked: policyForm.halfDaySession === "first_half",
                                                            onChange: ()=>setPolicyForm((prev)=>({
                                                                        ...prev,
                                                                        halfDaySession: "first_half"
                                                                    })),
                                                            className: "text-amber-600 focus:ring-amber-500 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2096,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2085,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    onClick: ()=>setPolicyForm((prev)=>({
                                                                ...prev,
                                                                halfDaySession: "second_half"
                                                            })),
                                                    className: `p-2.5 rounded-lg border cursor-pointer flex items-center justify-between ${policyForm.halfDaySession === "second_half" ? "bg-amber-100 dark:bg-amber-900/60 border-amber-400 text-amber-950 dark:text-amber-200 font-bold" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold",
                                                                    children: "Second Half (Afternoon)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2112,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-slate-500 dark:text-slate-400",
                                                                    children: "01:30 PM – 06:00 PM (Working)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2113,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2111,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            checked: policyForm.halfDaySession === "second_half",
                                                            onChange: ()=>setPolicyForm((prev)=>({
                                                                        ...prev,
                                                                        halfDaySession: "second_half"
                                                                    })),
                                                            className: "text-amber-600 focus:ring-amber-500 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2115,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2104,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2084,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2074,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Applies to Branch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: policyForm.branchId,
                                                    onChange: (e)=>setPolicyForm((prev)=>({
                                                                ...prev,
                                                                branchId: e.target.value
                                                            })),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Branches (Company-Wide)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2136,
                                                            columnNumber: 21
                                                        }, this),
                                                        (branches || []).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: b.id,
                                                                children: [
                                                                    b.name,
                                                                    b.city ? ` (${b.city})` : ""
                                                                ]
                                                            }, b.id, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                lineNumber: 2138,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                    children: "Monthly Auto-Routine Cutoff Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: policyForm.cutoffDay,
                                                    onChange: (e)=>setPolicyForm((prev)=>({
                                                                ...prev,
                                                                cutoffDay: Number(e.target.value)
                                                            })),
                                                    className: selectCls,
                                                    children: [
                                                        20,
                                                        21,
                                                        22,
                                                        23,
                                                        24,
                                                        25,
                                                        26,
                                                        27,
                                                        28
                                                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: d,
                                                            children: [
                                                                "Day ",
                                                                d,
                                                                " of Month (Prepare Next Month)"
                                                            ]
                                                        }, d, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2154,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-extrabold uppercase text-slate-700 dark:text-slate-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                            size: 14,
                                                            className: "text-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2166,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Auto-Generate Calendar from this Policy"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Instantly creates holidays & half-days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                            children: "Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2176,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: policyGenYear,
                                                            onChange: (e)=>setPolicyGenYear(Number(e.target.value)),
                                                            className: selectCls,
                                                            children: [
                                                                currentYear - 1,
                                                                currentYear,
                                                                currentYear + 1,
                                                                currentYear + 2
                                                            ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: y,
                                                                    children: y
                                                                }, y, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2182,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2177,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[10px] font-bold text-slate-500 uppercase mb-1",
                                                            children: "Month Scope"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2187,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: policyGenMonth,
                                                            onChange: (e)=>setPolicyGenMonth(e.target.value === "all" ? "all" : Number(e.target.value)),
                                                            className: selectCls,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "Full Year (All 12 Months)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2192,
                                                                    columnNumber: 23
                                                                }, this),
                                                                MONTH_FULL.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: idx,
                                                                        children: name
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                        lineNumber: 2194,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2188,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isPolicyGenerating,
                                            onClick: handleGenerateFromPolicy,
                                            className: "w-full h-9 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                                            children: isPolicyGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 2207,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Generating from Company Policy..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 2212,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Save Policy & Generate ",
                                                    policyGenMonth === "all" ? `Full Year ${policyGenYear}` : `${MONTH_FULL[Number(policyGenMonth)]} ${policyGenYear}`
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 1993,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPolicyForm(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$holidayUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COMPANY_POLICY"]),
                                    className: "text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-bold underline cursor-pointer",
                                    children: "Reset to Defaults"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsPolicyModalOpen(false),
                                            className: "h-9 px-4 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg cursor-pointer",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                handleSavePolicy();
                                                setIsPolicyModalOpen(false);
                                            },
                                            className: "h-9 px-5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FloppyDiskIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloppyDiskIcon"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2243,
                                                    columnNumber: 19
                                                }, this),
                                                "Save Company Policy"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2229,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 1965,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 1964,
                columnNumber: 9
            }, this),
            isEditOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[65] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shadow-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit02Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 2263,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-black text-slate-900 dark:text-white",
                                                    children: "Edit Scheduled Holiday"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "Modify title, date, holiday type, or branch assignment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2269,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2261,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsEditOpen(false),
                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 2278,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2260,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUpdateHoliday,
                            className: "p-4 sm:p-5 space-y-3.5 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Holiday Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2285,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: editForm.title,
                                            onChange: (e)=>setEditForm((p)=>({
                                                        ...p,
                                                        title: e.target.value
                                                    })),
                                            placeholder: "e.g. Sunday Off, Saturday (Half Day), Festival",
                                            className: inputCls
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2284,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                                    children: "Date *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    required: true,
                                                    value: editForm.date,
                                                    onChange: (e)=>setEditForm((p)=>({
                                                                ...p,
                                                                date: e.target.value
                                                            })),
                                                    className: inputCls
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                                    children: "Holiday Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editForm.holidayType,
                                                    onChange: (e)=>setEditForm((p)=>({
                                                                ...p,
                                                                holidayType: e.target.value
                                                            })),
                                                    className: selectCls,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "company",
                                                            children: "Company / Weekend"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2320,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "public",
                                                            children: "National / Public"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2321,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "restricted",
                                                            children: "Restricted (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2322,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2316,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Branch Applicability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editForm.branchId,
                                            onChange: (e)=>setEditForm((p)=>({
                                                        ...p,
                                                        branchId: e.target.value
                                                    })),
                                            className: selectCls,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All Branches (Company-Wide)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2335,
                                                    columnNumber: 19
                                                }, this),
                                                (branches || []).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: b.id,
                                                        children: [
                                                            b.name,
                                                            b.city ? ` (${b.city})` : ""
                                                        ]
                                                    }, b.id, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 2337,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Remarks / Description (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editForm.description,
                                            onChange: (e)=>setEditForm((p)=>({
                                                        ...p,
                                                        description: e.target.value
                                                    })),
                                            placeholder: "e.g. Half-day timing, special event note",
                                            className: inputCls
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2348,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2344,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsEditOpen(false),
                                            className: "h-9 px-4 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isUpdating,
                                            className: "h-9 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                                            children: isUpdating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 2371,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Updating..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FloppyDiskIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloppyDiskIcon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                        lineNumber: 2376,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Save Changes"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2365,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2358,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2283,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 2258,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 2257,
                columnNumber: 9
            }, this),
            monthManagerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-50/60 to-teal-50/40 dark:from-emerald-950/30 dark:to-teal-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shadow-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 2398,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2397,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-black text-slate-900 dark:text-white flex items-center gap-2",
                                                    children: [
                                                        "Manage ",
                                                        MONTH_FULL[selectedManagerMonth],
                                                        " ",
                                                        selectedYear,
                                                        " Holidays",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-300",
                                                            children: [
                                                                monthManagerItems.length,
                                                                " day",
                                                                monthManagerItems.length !== 1 ? "s" : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2403,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2401,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                    children: "Edit individual holiday titles/dates or clear all holidays for this month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2407,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2400,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2396,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMonthManagerOpen(false),
                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 2416,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2412,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2395,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 overflow-y-auto space-y-2 text-xs flex-1 max-h-[60vh]",
                            children: monthManagerItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-slate-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold",
                                    children: [
                                        "No holidays in ",
                                        MONTH_FULL[selectedManagerMonth],
                                        " ",
                                        selectedYear,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2424,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                lineNumber: 2423,
                                columnNumber: 17
                            }, this) : monthManagerItems.slice().sort((a, b)=>new Date(a.date).getDate() - new Date(b.date).getDate()).map((h)=>{
                                const hDate = new Date(h.date);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-3 shadow-2xs hover:border-emerald-300 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center font-bold text-slate-700 dark:text-slate-300 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] uppercase leading-none",
                                                            children: MONTHS[selectedManagerMonth]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2438,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs leading-none font-black mt-0.5",
                                                            children: hDate.getDate()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2439,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2437,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-slate-900 dark:text-white truncate",
                                                                    children: h.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2443,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase ${HOLIDAY_TYPE_STYLES[h.holidayType] || HOLIDAY_TYPE_STYLES.company}`,
                                                                    children: HOLIDAY_TYPE_LABELS[h.holidayType] || h.holidayType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                                    lineNumber: 2446,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2442,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400 mt-0.5 truncate",
                                                            children: [
                                                                h.date,
                                                                " · ",
                                                                hDate.toLocaleDateString("en-IN", {
                                                                    weekday: "long"
                                                                }),
                                                                h.description ? ` · ${h.description}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2450,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2441,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2436,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        handleStartEdit(h);
                                                    },
                                                    className: "h-[36px] px-3 rounded-md bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1 transition cursor-pointer",
                                                    title: "Edit this holiday",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit02Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2466,
                                                            columnNumber: 29
                                                        }, this),
                                                        "Edit"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2459,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        handleRequestDeleteSingle(h.id, h.title, h.date);
                                                    },
                                                    className: "h-[36px] px-3 rounded-md bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 text-xs font-bold flex items-center gap-1 transition cursor-pointer",
                                                    title: "Delete this holiday",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                            lineNumber: 2476,
                                                            columnNumber: 29
                                                        }, this),
                                                        "Delete"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                    lineNumber: 2469,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2458,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, h.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2433,
                                    columnNumber: 23
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                canBulkDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isExecutingDelete || monthManagerItems.length === 0,
                                    onClick: ()=>handleRequestDeleteMonth(selectedManagerMonth, MONTH_FULL[selectedManagerMonth], monthManagerItems),
                                    className: "h-9 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2494,
                                            columnNumber: 19
                                        }, this),
                                        "Delete All ",
                                        monthManagerItems.length,
                                        " Holidays in ",
                                        MONTH_FULL[selectedManagerMonth]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2489,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2498,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMonthManagerOpen(false),
                                    className: "h-9 px-5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2501,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2487,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 2393,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 2392,
                columnNumber: 9
            }, this),
            deleteConfirmState.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[75] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white dark:bg-[#111c24] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 border-b border-slate-200 dark:border-slate-800 flex items-start gap-3.5 bg-red-50/50 dark:bg-red-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-11 h-11 rounded-lg bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 shadow-xs ring-4 ring-red-500/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                        lineNumber: 2522,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2521,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-black text-slate-900 dark:text-white leading-snug",
                                            children: deleteConfirmState.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2525,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                            children: deleteConfirmState.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                            lineNumber: 2528,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2524,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2520,
                            columnNumber: 13
                        }, this),
                        deleteConfirmState.warningNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-amber-50/70 dark:bg-amber-950/30 border-b border-amber-200/60 dark:border-amber-800/40 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 16,
                                    className: "text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2537,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-relaxed font-medium",
                                    children: deleteConfirmState.warningNote
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2538,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2536,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 flex items-center justify-end gap-2.5 bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isExecutingDelete,
                                    onClick: ()=>setDeleteConfirmState((p)=>({
                                                ...p,
                                                isOpen: false
                                            })),
                                    className: "h-9 px-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isExecutingDelete,
                                    onClick: handleExecuteConfirmedDelete,
                                    className: "h-9 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-2 cursor-pointer disabled:opacity-50",
                                    children: isExecutingDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 2560,
                                                columnNumber: 21
                                            }, this),
                                            "Deleting..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                                lineNumber: 2565,
                                                columnNumber: 21
                                            }, this),
                                            "Yes, Delete"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                                    lineNumber: 2553,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                            lineNumber: 2545,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                    lineNumber: 2518,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
                lineNumber: 2517,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx",
        lineNumber: 782,
        columnNumber: 5
    }, this);
}
_s(HolidaysScreen, "JUbXaZAM5G4vsMjCkjaBO/b/iJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = HolidaysScreen;
var _c;
__turbopack_context__.k.register(_c, "HolidaysScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_hrm_screens_HolidaysScreen_tsx_99986d22._.js.map