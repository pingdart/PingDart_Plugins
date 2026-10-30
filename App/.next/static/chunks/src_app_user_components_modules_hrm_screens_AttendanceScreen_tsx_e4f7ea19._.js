(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttendanceScreen",
    ()=>AttendanceScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Time01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Login01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Login01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Logout01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Download01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AlertCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SecurityCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SecurityCheckIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FilterIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$User02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/User02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkBadge01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hrmApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/utils/permissions.ts [app-client] (ecmascript)");
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
function AttendanceScreen({ punchState, onPunchIn, onPunchOut, formatTimer, attendanceList = [], employees = [], departments = [], branches = [], shifts = [], roles = [], holidays = [], onRefresh, userRole = "Employee", canAccessAdmin = false }) {
    _s();
    const { user: authUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const perms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[perms]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$utils$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHrmPermissions"])({
                authUser,
                userRole,
                canAccessAdmin,
                roles,
                employees
            });
        }
    }["AttendanceScreen.useMemo[perms]"], [
        authUser,
        userRole,
        canAccessAdmin,
        roles,
        employees
    ]);
    const todayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[todayStr]": ()=>new Date().toISOString().split("T")[0]
    }["AttendanceScreen.useMemo[todayStr]"], []);
    // ── Sunday / Weekend / Holiday Duty Detection ──
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 6 is Saturday
    const isSunday = dayOfWeek === 0;
    const isWeekend = isSunday || dayOfWeek === 6;
    const holidayToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[holidayToday]": ()=>{
            return (holidays || []).find({
                "AttendanceScreen.useMemo[holidayToday]": (h)=>h.date === todayStr
            }["AttendanceScreen.useMemo[holidayToday]"]);
        }
    }["AttendanceScreen.useMemo[holidayToday]"], [
        holidays,
        todayStr
    ]);
    const isOffDayDutyToday = isWeekend || !!holidayToday;
    const offDayLabel = isSunday ? "Sunday Duty" : holidayToday ? `Holiday Duty (${holidayToday.title})` : dayOfWeek === 6 ? "Saturday Duty" : "Weekend / Off-Day Duty";
    // State for punch note on Sunday
    const [sundayDutyNote, setSundayDutyNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Modal 1: Request Weekend / Sunday Duty (Employee Self-Service)
    const [dutyRequestModalOpen, setDutyRequestModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmittingDutyRequest, setIsSubmittingDutyRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dutyRequestForm, setDutyRequestForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        date: todayStr,
        reason: "",
        preferredCompensation: "leave"
    });
    // Modal 2: Admin / Officer Authorization Modal
    const [adminApproveModalOpen, setAdminApproveModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDutyAttendance, setSelectedDutyAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessingApproval, setIsProcessingApproval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [approvalForm, setApprovalForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        action: "approved",
        compensationType: "leave",
        leaveDays: 1.0,
        bonusAmount: 1000,
        reviewerComments: ""
    });
    const isWeekendOrHolidayRecord = (row)=>{
        const d = new Date(row.date);
        const isSun = d.getDay() === 0;
        const isSat = d.getDay() === 6;
        const isHol = (holidays || []).some((h)=>h.date === row.date);
        const hasDutyNote = !!(row.notes && (row.notes.toLowerCase().includes("sunday") || row.notes.toLowerCase().includes("weekend") || row.notes.toLowerCase().includes("duty")));
        return isSun || isSat || isHol || row.status === "weekend" || hasDutyNote;
    };
    const pendingSundayApprovals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[pendingSundayApprovals]": ()=>{
            return attendanceList.filter({
                "AttendanceScreen.useMemo[pendingSundayApprovals]": (row)=>{
                    var _row_notes;
                    if (!isWeekendOrHolidayRecord(row)) return false;
                    return row.regularizationStatus === "pending" || !row.regularizationStatus && (row.status === "weekend" || ((_row_notes = row.notes) === null || _row_notes === void 0 ? void 0 : _row_notes.includes("Awaiting")));
                }
            }["AttendanceScreen.useMemo[pendingSundayApprovals]"]);
        }
    }["AttendanceScreen.useMemo[pendingSundayApprovals]"], [
        attendanceList,
        holidays
    ]);
    const handlePunchInAction = ()=>{
        if (isOffDayDutyToday && sundayDutyNote.trim()) {
            onPunchIn(`[${offDayLabel}] ${sundayDutyNote.trim()}`);
        } else {
            onPunchIn(isOffDayDutyToday ? `[${offDayLabel}] Awaiting Admin/Officer Approval for Comp-Off or Bonus` : undefined);
        }
    };
    const handleOpenDutyRequest = (dateToSet)=>{
        setDutyRequestForm({
            date: dateToSet || todayStr,
            reason: "",
            preferredCompensation: "leave"
        });
        setDutyRequestModalOpen(true);
    };
    const handleSubmitDutyRequest = async (e)=>{
        e.preventDefault();
        if (!dutyRequestForm.reason.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a reason or task description for weekend duty.");
            return;
        }
        setIsSubmittingDutyRequest(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].requestWeekendDuty({
                date: dutyRequestForm.date,
                reason: dutyRequestForm.reason.trim(),
                preferredCompensation: dutyRequestForm.preferredCompensation
            });
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message || "Sunday duty attendance request submitted!");
                setDutyRequestModalOpen(false);
                onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to submit Sunday duty request.");
        } finally{
            setIsSubmittingDutyRequest(false);
        }
    };
    const handleOpenApproveModal = (record)=>{
        setSelectedDutyAttendance(record);
        setApprovalForm({
            action: "approved",
            compensationType: "leave",
            leaveDays: 1.0,
            bonusAmount: 1000,
            reviewerComments: ""
        });
        setAdminApproveModalOpen(true);
    };
    const handleExecuteApproval = async (actionToTake)=>{
        if (!selectedDutyAttendance) return;
        setIsProcessingApproval(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hrmApi"].approveWeekendDuty({
                attendanceId: selectedDutyAttendance.id,
                action: actionToTake,
                compensationType: approvalForm.compensationType,
                leaveDays: approvalForm.leaveDays,
                bonusAmount: approvalForm.bonusAmount,
                reviewerComments: approvalForm.reviewerComments.trim() || undefined
            });
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message || (actionToTake === "approved" ? "Sunday duty approved & benefits credited!" : "Sunday duty request rejected."));
                setAdminApproveModalOpen(false);
                onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to process duty approval.");
        } finally{
            setIsProcessingApproval(false);
        }
    };
    // Determine if logged-in user has permission to view all staff attendance ledger
    const isSuperAdminOrAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[isSuperAdminOrAdmin]": ()=>{
            return perms.canViewAllAttendance;
        }
    }["AttendanceScreen.useMemo[isSuperAdminOrAdmin]"], [
        perms.canViewAllAttendance
    ]);
    // Tab mode: Default to "my" for personal attendance
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("my");
    // Sync view once permission is computed: lock to "my" if no permission
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendanceScreen.useEffect": ()=>{
            if (!perms.canViewAllAttendance) {
                setActiveView("my");
            } else {
                setActiveView("all");
            }
        }
    }["AttendanceScreen.useEffect"], [
        perms.canViewAllAttendance
    ]);
    // Filters for All Employees Attendance Ledger
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedBranchId, setSelectedBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedDeptId, setSelectedDeptId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(todayStr);
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [mobileFiltersExpanded, setMobileFiltersExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeExtraFiltersCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[activeExtraFiltersCount]": ()=>{
            let count = 0;
            if (selectedBranchId !== "all") count++;
            if (selectedDeptId !== "all") count++;
            if (selectedDate && selectedDate !== todayStr) count++;
            return count;
        }
    }["AttendanceScreen.useMemo[activeExtraFiltersCount]"], [
        selectedBranchId,
        selectedDeptId,
        selectedDate,
        todayStr
    ]);
    // Pagination for All Staff Ledger
    const ATTENDANCE_PAGE_SIZE = 20;
    const [attendancePage, setAttendancePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Reset page when filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendanceScreen.useEffect": ()=>{
            setAttendancePage(1);
        }
    }["AttendanceScreen.useEffect"], [
        searchQuery,
        selectedBranchId,
        selectedDeptId,
        selectedDate,
        selectedStatus
    ]);
    // Filtered list of organization attendance
    const filteredAttendance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[filteredAttendance]": ()=>{
            return attendanceList.filter({
                "AttendanceScreen.useMemo[filteredAttendance]": (item)=>{
                    // 1. Employee Search Filter
                    if (searchQuery.trim()) {
                        var _item_employee, _item_employee1;
                        const query = searchQuery.toLowerCase().trim();
                        const empName = item.employee ? `${item.employee.firstName} ${item.employee.lastName || ""}`.toLowerCase() : (item.employeeName || "").toLowerCase();
                        const empCode = (((_item_employee = item.employee) === null || _item_employee === void 0 ? void 0 : _item_employee.empCode) || item.empCode || "").toLowerCase();
                        const email = (((_item_employee1 = item.employee) === null || _item_employee1 === void 0 ? void 0 : _item_employee1.email) || "").toLowerCase();
                        if (!empName.includes(query) && !empCode.includes(query) && !email.includes(query)) {
                            return false;
                        }
                    }
                    // 2. Branch Filter (Branch-wise)
                    if (selectedBranchId !== "all") {
                        var _this, _branch, _this1, _employees_find;
                        const itemBranchId = ((_this = item.employee) === null || _this === void 0 ? void 0 : _this.branchId) || ((_this1 = item.employee) === null || _this1 === void 0 ? void 0 : (_branch = _this1.branch) === null || _branch === void 0 ? void 0 : _branch.id) || ((_employees_find = employees.find({
                            "AttendanceScreen.useMemo[filteredAttendance]": (e)=>String(e.id) === String(item.employeeId)
                        }["AttendanceScreen.useMemo[filteredAttendance]"])) === null || _employees_find === void 0 ? void 0 : _employees_find.branchId);
                        if (String(itemBranchId) !== String(selectedBranchId)) return false;
                    }
                    // 3. Department Filter
                    if (selectedDeptId !== "all") {
                        var _item_employee2, _this2, _item_employee3;
                        const itemDeptId = ((_item_employee2 = item.employee) === null || _item_employee2 === void 0 ? void 0 : _item_employee2.departmentId) || ((_this2 = (_item_employee3 = item.employee) === null || _item_employee3 === void 0 ? void 0 : _item_employee3.department) === null || _this2 === void 0 ? void 0 : _this2.id);
                        if (String(itemDeptId) !== String(selectedDeptId)) {
                            return false;
                        }
                    }
                    // 4. Date Filter (empty string means all dates)
                    if (selectedDate && item.date !== selectedDate) {
                        return false;
                    }
                    // 5. Status Filter
                    if (selectedStatus !== "all") {
                        if (selectedStatus === "late") {
                            if (!item.isLate && item.status !== "late") return false;
                        } else if (selectedStatus === "sunday_duty") {
                            if (!isWeekendOrHolidayRecord(item)) return false;
                        } else if (selectedStatus === "pending_duty") {
                            if (!isWeekendOrHolidayRecord(item) || item.regularizationStatus !== "pending") return false;
                        } else if (item.status !== selectedStatus) {
                            return false;
                        }
                    }
                    return true;
                }
            }["AttendanceScreen.useMemo[filteredAttendance]"]);
        }
    }["AttendanceScreen.useMemo[filteredAttendance]"], [
        attendanceList,
        searchQuery,
        selectedBranchId,
        selectedDeptId,
        selectedDate,
        selectedStatus,
        employees
    ]);
    // Daily Stats for Organization (based on today)
    const todayStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendanceScreen.useMemo[todayStats]": ()=>{
            const todayItems = attendanceList.filter({
                "AttendanceScreen.useMemo[todayStats].todayItems": (r)=>r.date === todayStr
            }["AttendanceScreen.useMemo[todayStats].todayItems"]);
            const presentCount = todayItems.filter({
                "AttendanceScreen.useMemo[todayStats]": (r)=>r.checkIn || r.punchInTime || r.status === "present"
            }["AttendanceScreen.useMemo[todayStats]"]).length;
            const lateCount = todayItems.filter({
                "AttendanceScreen.useMemo[todayStats]": (r)=>r.isLate || r.status === "late"
            }["AttendanceScreen.useMemo[todayStats]"]).length;
            const currentlyActiveCount = todayItems.filter({
                "AttendanceScreen.useMemo[todayStats]": (r)=>(r.checkIn || r.punchInTime) && !(r.checkOut || r.punchOutTime)
            }["AttendanceScreen.useMemo[todayStats]"]).length;
            const completedShiftCount = todayItems.filter({
                "AttendanceScreen.useMemo[todayStats]": (r)=>r.checkOut || r.punchOutTime
            }["AttendanceScreen.useMemo[todayStats]"]).length;
            return {
                presentCount,
                lateCount,
                currentlyActiveCount,
                completedShiftCount,
                totalEmployees: employees.length || 0
            };
        }
    }["AttendanceScreen.useMemo[todayStats]"], [
        attendanceList,
        todayStr,
        employees.length
    ]);
    // Export filtered attendance to CSV
    const handleExportCSV = ()=>{
        const dataToExport = activeView === "all" ? filteredAttendance : attendanceList;
        if (!dataToExport || dataToExport.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No attendance records to export.");
            return;
        }
        const headers = [
            "Date",
            "Employee Code",
            "Employee Name",
            "Department",
            "Shift",
            "Punch In",
            "Punch Out",
            "Total Work Hours",
            "Overtime Hours",
            "Status"
        ];
        const rows = dataToExport.map((row)=>{
            var _row_employee, _row_employee_department, _row_employee1, _row_shift;
            const empName = row.employee ? `${row.employee.firstName} ${row.employee.lastName || ""}`.trim() : row.employeeName || "—";
            const empCode = ((_row_employee = row.employee) === null || _row_employee === void 0 ? void 0 : _row_employee.empCode) || row.empCode || "—";
            const deptName = ((_row_employee1 = row.employee) === null || _row_employee1 === void 0 ? void 0 : (_row_employee_department = _row_employee1.department) === null || _row_employee_department === void 0 ? void 0 : _row_employee_department.name) || "—";
            const shiftName = ((_row_shift = row.shift) === null || _row_shift === void 0 ? void 0 : _row_shift.name) || "Regular Shift";
            const punchIn = row.punchInTime || (row.checkIn ? new Date(row.checkIn).toLocaleTimeString() : "--:--");
            const punchOut = row.punchOutTime || (row.checkOut ? new Date(row.checkOut).toLocaleTimeString() : "--:--");
            const totalHours = row.totalWorkHours || row.workingHours || 0;
            const overtime = row.overtimeHours || 0;
            const status = row.status || "present";
            return [
                `"${row.date}"`,
                `"${empCode}"`,
                `"${empName}"`,
                `"${deptName}"`,
                `"${shiftName}"`,
                `"${punchIn}"`,
                `"${punchOut}"`,
                `"${totalHours}"`,
                `"${overtime}"`,
                `"${status}"`
            ].join(",");
        });
        const csvContent = "data:text/csv;charset=utf-8," + [
            headers.join(","),
            ...rows
        ].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `hrm_attendance_report_${selectedDate || "all"}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Exported ${dataToExport.length} attendance records to CSV.`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 sm:space-y-6 select-none pb-[max(7rem,calc(env(safe-area-inset-bottom)+5.5rem))] sm:pb-8",
        children: [
            isSuperAdminOrAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SecurityCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecurityCheckIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this),
                                    "Administrative Attendance Ledger"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5",
                                children: "Attendance & Daily Shift Tracking"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full sm:w-auto flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#16222b] border border-slate-200/80 dark:border-slate-800 gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveView("all"),
                                className: `flex-1 sm:flex-none h-10 px-3.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 ${activeView === "all" ? "bg-white dark:bg-[#1c2b36] text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "All Staff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-extrabold",
                                        children: attendanceList.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveView("my"),
                                className: `flex-1 sm:flex-none h-10 px-3.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 ${activeView === "my" ? "bg-white dark:bg-[#1c2b36] text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$User02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["User02Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "My Punch Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this),
                                    punchState.punchedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                lineNumber: 416,
                columnNumber: 9
            }, this),
            isSuperAdminOrAdmin && activeView === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 sm:space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    setSelectedStatus("present");
                                    setSelectedDate(todayStr);
                                },
                                className: `p-3.5 sm:p-4 rounded-[10px] bg-white dark:bg-[#111c24] border shadow-2xs hover:border-emerald-500/50 active:scale-[0.98] transition cursor-pointer flex flex-col justify-between ${selectedStatus === "present" && selectedDate === todayStr ? "border-emerald-500/80 ring-1 ring-emerald-500/40" : "border-slate-200/80 dark:border-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                children: "Present Today"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 482,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded-[6px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono",
                                                children: todayStats.presentCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 490,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-slate-400 truncate",
                                                children: [
                                                    "/ ",
                                                    todayStats.totalEmployees,
                                                    " Staff"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    setSelectedStatus("all");
                                    setSelectedDate(todayStr);
                                },
                                className: "p-3.5 sm:p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-sky-500/50 active:scale-[0.98] transition cursor-pointer flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                children: "Clocked In"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded-[6px] bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400 font-mono",
                                                children: todayStats.currentlyActiveCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-slate-400 truncate",
                                                children: "Active now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    setSelectedStatus("late");
                                    setSelectedDate(todayStr);
                                },
                                className: `p-3.5 sm:p-4 rounded-[10px] bg-white dark:bg-[#111c24] border shadow-2xs hover:border-amber-500/50 active:scale-[0.98] transition cursor-pointer flex flex-col justify-between ${selectedStatus === "late" && selectedDate === todayStr ? "border-amber-500/80 ring-1 ring-amber-500/40" : "border-slate-200/80 dark:border-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                children: "Late Arrivals"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded-[6px] bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono",
                                                children: todayStats.lateCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 542,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-slate-400 truncate",
                                                children: "Grace passed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    setSelectedStatus("present");
                                    setSelectedDate(todayStr);
                                },
                                className: "p-3.5 sm:p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-purple-500/50 active:scale-[0.98] transition cursor-pointer flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 558,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-6 h-6 rounded-[6px] bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 561,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 font-mono",
                                                children: todayStats.completedShiftCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-slate-400 truncate",
                                                children: "Punched out"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 550,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this),
                    pendingSundayApprovals.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-[8px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Sunday & Weekend Duty Approvals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 rounded-[6px] bg-emerald-600 text-white text-[10px] font-black",
                                                        children: [
                                                            pendingSundayApprovals.length,
                                                            " Pending"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 582,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 dark:text-slate-300 mt-0.5",
                                                children: "Staff members worked on Sundays / Holidays. Authorize their attendance to grant Compensatory Leave (+1 Day) or Bonus Allowance."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 577,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0 w-full sm:w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setSelectedStatus("pending_duty");
                                        setSelectedDate("");
                                    },
                                    className: "w-full sm:w-auto h-[42px] px-4 rounded-[8px] bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 601,
                                            columnNumber: 19
                                        }, this),
                                        "View All ",
                                        pendingSundayApprovals.length,
                                        " Requests"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 594,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 576,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 sm:p-4 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                                        size: 16,
                                                        className: "text-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Filter Organization Attendance"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: [
                                                    "Showing ",
                                                    filteredAttendance.length,
                                                    " records matching your filter criteria"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 616,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 611,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 self-start sm:self-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleExportCSV,
                                                className: "h-9 px-3 rounded-lg bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Export CSV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this),
                                            onRefresh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onRefresh,
                                                className: "h-9 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95",
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 631,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 621,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                size: 16,
                                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search by name, code, email...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "w-full h-11 pl-10 pr-9 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this),
                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSearchQuery(""),
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMobileFiltersExpanded(!mobileFiltersExpanded),
                                        className: `md:hidden h-11 px-3 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer active:scale-95 shrink-0 ${mobileFiltersExpanded || activeExtraFiltersCount > 0 ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500/50 text-emerald-600 dark:text-emerald-400" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 678,
                                                columnNumber: 17
                                            }, this),
                                            activeExtraFiltersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center",
                                                children: activeExtraFiltersCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1",
                                children: [
                                    {
                                        id: "all",
                                        label: "All Records"
                                    },
                                    {
                                        id: "present",
                                        label: "Present"
                                    },
                                    {
                                        id: "late",
                                        label: "Late Arrival"
                                    },
                                    {
                                        id: "half_day",
                                        label: "Half Day"
                                    },
                                    {
                                        id: "sunday_duty",
                                        label: "Sunday Duty"
                                    },
                                    {
                                        id: "pending_duty",
                                        label: "Pending Approval"
                                    }
                                ].map((chip)=>{
                                    const isActive = selectedStatus === chip.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSelectedStatus(chip.id),
                                        className: `h-8 px-3 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer active:scale-95 shrink-0 ${isActive ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"}`,
                                        children: chip.label
                                    }, chip.id, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 699,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 688,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${mobileFiltersExpanded ? "grid" : "hidden md:grid"} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-150`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold text-slate-400 uppercase mb-1",
                                                children: "Branch"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 723,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedBranchId,
                                                onChange: (e)=>setSelectedBranchId(e.target.value),
                                                className: "w-full h-10 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-hidden cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Branches"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 19
                                                    }, this),
                                                    branches.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: b.id,
                                                            children: b.name
                                                        }, b.id, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 726,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold text-slate-400 uppercase mb-1",
                                                children: "Department"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 742,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedDeptId,
                                                onChange: (e)=>setSelectedDeptId(e.target.value),
                                                className: "w-full h-10 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-hidden cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Departments"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 19
                                                    }, this),
                                                    departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: d.id,
                                                            children: [
                                                                d.name,
                                                                " (",
                                                                d.code,
                                                                ")"
                                                            ]
                                                        }, d.id, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 741,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold text-slate-400 uppercase mb-1",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 761,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: selectedDate,
                                                        onChange: (e)=>setSelectedDate(e.target.value),
                                                        className: "w-full h-10 px-2.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 19
                                                    }, this),
                                                    selectedDate !== todayStr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSelectedDate(todayStr),
                                                        className: "h-10 px-2 rounded-lg border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold hover:bg-emerald-50 dark:hover:bg-emerald-950/40 shrink-0 cursor-pointer",
                                                        title: "Jump to Today",
                                                        children: "Today"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 21
                                                    }, this),
                                                    selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSelectedDate(""),
                                                        className: "h-10 px-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-[10px] font-bold hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 cursor-pointer",
                                                        title: "View All Dates",
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 764,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 760,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 716,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 609,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111c24] rounded-[10px] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-2xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isNative ? "block p-3 space-y-3" : "block md:hidden p-3 space-y-3",
                                children: filteredAttendance.length > 0 ? filteredAttendance.slice((attendancePage - 1) * ATTENDANCE_PAGE_SIZE, attendancePage * ATTENDANCE_PAGE_SIZE).map((row)=>{
                                    var _row_employee, _row_employee1, _row_employee2, _row_employee3, _row_employee_department, _row_employee4, _departments_find, _row_shift, _this, _row_employee5;
                                    const empName = row.employee ? `${row.employee.firstName} ${row.employee.lastName || ""}`.trim() : row.employeeName || "Employee";
                                    const empCode = ((_row_employee = row.employee) === null || _row_employee === void 0 ? void 0 : _row_employee.empCode) || row.empCode || "—";
                                    const avatarSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(((_row_employee1 = row.employee) === null || _row_employee1 === void 0 ? void 0 : _row_employee1.avatarUrl) || ((_row_employee2 = row.employee) === null || _row_employee2 === void 0 ? void 0 : _row_employee2.avatar) || ((_row_employee3 = row.employee) === null || _row_employee3 === void 0 ? void 0 : _row_employee3.photo));
                                    const deptName = ((_row_employee4 = row.employee) === null || _row_employee4 === void 0 ? void 0 : (_row_employee_department = _row_employee4.department) === null || _row_employee_department === void 0 ? void 0 : _row_employee_department.name) || ((_departments_find = departments.find((d)=>{
                                        var _row_employee;
                                        return String(d.id) === String((_row_employee = row.employee) === null || _row_employee === void 0 ? void 0 : _row_employee.departmentId);
                                    })) === null || _departments_find === void 0 ? void 0 : _departments_find.name) || "—";
                                    const shiftName = ((_row_shift = row.shift) === null || _row_shift === void 0 ? void 0 : _row_shift.name) || ((_this = (_row_employee5 = row.employee) === null || _row_employee5 === void 0 ? void 0 : _row_employee5.shift) === null || _this === void 0 ? void 0 : _this.name) || "General Shift";
                                    const punchInDisplay = row.punchInTime || (row.checkIn ? new Date(row.checkIn).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit"
                                    }) : "--:--");
                                    const punchOutDisplay = row.punchOutTime || (row.checkOut ? new Date(row.checkOut).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit"
                                    }) : null);
                                    const totalHoursDisplay = row.totalWorkHours !== undefined ? `${row.totalWorkHours} hrs` : row.workingHours !== undefined ? `${row.workingHours} hrs` : "--";
                                    const overtimeDisplay = row.overtimeHours ? `${row.overtimeHours} hrs` : "0.0 hrs";
                                    const isCurrentlyActive = (row.checkIn || row.punchInTime) && !row.checkOut && !row.punchOutTime && row.date === todayStr;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[10px] bg-slate-50/70 dark:bg-[#142029] border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-3 shadow-2xs transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 min-w-0 flex-1",
                                                        children: [
                                                            avatarSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: avatarSrc,
                                                                alt: empName,
                                                                className: "w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 871,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-2xs",
                                                                children: empName[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 877,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white truncate",
                                                                                children: empName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 883,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-[10px] px-1.5 py-0.2 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold",
                                                                                children: empCode
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 886,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 882,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 truncate font-medium",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                                                        size: 12,
                                                                                        className: "text-slate-400 shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                        lineNumber: 892,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    deptName
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 891,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 895,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: shiftName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 896,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 881,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shrink-0 flex flex-col items-end gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase tracking-wider inline-block ${row.status === "present" ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400" : row.isLate || row.status === "late" ? "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400" : row.status === "half_day" ? "bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-400" : row.status === "weekend" ? "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                                children: row.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 903,
                                                                columnNumber: 29
                                                            }, this),
                                                            row.date === todayStr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-emerald-50 dark:bg-emerald-950/90 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20",
                                                                children: "Today"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 919,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] text-slate-400",
                                                                children: row.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 923,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 868,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-1.5 p-2 rounded-[8px] bg-white dark:bg-[#111c24] border border-slate-200/70 dark:border-slate-800 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 933,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                children: punchInDisplay
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "Out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-0.5",
                                                                children: punchOutDisplay ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white block truncate",
                                                                    children: punchOutDisplay
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 946,
                                                                    columnNumber: 33
                                                                }, this) : isCurrentlyActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 animate-pulse",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                            lineNumber: 951,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        "Active"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 950,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-xs text-slate-400",
                                                                    children: "--:--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 955,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 944,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 960,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                children: totalHoursDisplay
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 963,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 959,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "Overtime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 block truncate",
                                                                children: overtimeDisplay
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 931,
                                                columnNumber: 25
                                            }, this),
                                            (isWeekendOrHolidayRecord(row) || perms.canApproveWeekendDuty && isWeekendOrHolidayRecord(row)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            row.regularizationStatus === "approved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    " Sunday Duty: Approved"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 982,
                                                                columnNumber: 33
                                                            }, this) : row.regularizationStatus === "rejected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800",
                                                                children: "Sunday Duty: Rejected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 986,
                                                                columnNumber: 33
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10px] font-bold border border-amber-200 dark:border-amber-800 animate-pulse",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 991,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    " Sunday Duty: Needs Review"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 990,
                                                                columnNumber: 33
                                                            }, this),
                                                            row.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400 truncate mt-0.5 max-w-xs",
                                                                children: row.notes
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 995,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 980,
                                                        columnNumber: 29
                                                    }, this),
                                                    perms.canApproveWeekendDuty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleOpenApproveModal(row),
                                                        className: `h-[36px] min-h-[36px] px-3.5 rounded-[8px] text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-xs shrink-0 ${row.regularizationStatus === "approved" ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: row.regularizationStatus === "approved" ? "Update Award" : "Authorize Duty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 979,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, `mob-${row.id}`, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 863,
                                        columnNumber: 23
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-12 text-center text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                            size: 32,
                                            className: "mx-auto mb-2 text-slate-300 dark:text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                            children: "No attendance records found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1023,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-1 max-w-sm mx-auto",
                                            children: "Try adjusting your search query, department, or date filter."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1026,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 799,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isNative ? "hidden" : "hidden md:block overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-xs text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-slate-50/70 dark:bg-slate-900/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800 text-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Employee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Department"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1040,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Shift"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1041,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Punch In"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1042,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Punch Out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1043,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Work Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Overtime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4",
                                                        children: "Status & Sunday Duty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3.5 px-4 text-right",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1037,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                                            children: filteredAttendance.length > 0 ? filteredAttendance.slice((attendancePage - 1) * ATTENDANCE_PAGE_SIZE, attendancePage * ATTENDANCE_PAGE_SIZE).map((row)=>{
                                                var _row_employee, _row_employee1, _row_employee2, _row_employee3, _row_employee_department, _row_employee4, _departments_find, _row_shift, _this, _row_employee5;
                                                const empName = row.employee ? `${row.employee.firstName} ${row.employee.lastName || ""}`.trim() : row.employeeName || "Employee";
                                                const empCode = ((_row_employee = row.employee) === null || _row_employee === void 0 ? void 0 : _row_employee.empCode) || row.empCode || "—";
                                                const avatarSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(((_row_employee1 = row.employee) === null || _row_employee1 === void 0 ? void 0 : _row_employee1.avatarUrl) || ((_row_employee2 = row.employee) === null || _row_employee2 === void 0 ? void 0 : _row_employee2.avatar) || ((_row_employee3 = row.employee) === null || _row_employee3 === void 0 ? void 0 : _row_employee3.photo));
                                                const deptName = ((_row_employee4 = row.employee) === null || _row_employee4 === void 0 ? void 0 : (_row_employee_department = _row_employee4.department) === null || _row_employee_department === void 0 ? void 0 : _row_employee_department.name) || ((_departments_find = departments.find((d)=>{
                                                    var _row_employee;
                                                    return String(d.id) === String((_row_employee = row.employee) === null || _row_employee === void 0 ? void 0 : _row_employee.departmentId);
                                                })) === null || _departments_find === void 0 ? void 0 : _departments_find.name) || "—";
                                                const shiftName = ((_row_shift = row.shift) === null || _row_shift === void 0 ? void 0 : _row_shift.name) || ((_this = (_row_employee5 = row.employee) === null || _row_employee5 === void 0 ? void 0 : _row_employee5.shift) === null || _this === void 0 ? void 0 : _this.name) || "General Shift";
                                                const punchInDisplay = row.punchInTime || (row.checkIn ? new Date(row.checkIn).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    second: "2-digit"
                                                }) : "--:--");
                                                const punchOutDisplay = row.punchOutTime || (row.checkOut ? new Date(row.checkOut).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    second: "2-digit"
                                                }) : null);
                                                const totalHoursDisplay = row.totalWorkHours !== undefined ? `${row.totalWorkHours} hrs` : row.workingHours !== undefined ? `${row.workingHours} hrs` : "--";
                                                const overtimeDisplay = row.overtimeHours ? `${row.overtimeHours} hrs` : "0.0 hrs";
                                                const isCurrentlyActive = (row.checkIn || row.punchInTime) && !row.checkOut && !row.punchOutTime && row.date === todayStr;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    avatarSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: avatarSrc,
                                                                        alt: empName,
                                                                        className: "w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1122,
                                                                        columnNumber: 35
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xs shrink-0",
                                                                        children: empName[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1128,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-slate-900 dark:text-white truncate",
                                                                                children: empName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1133,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-[10px] text-slate-400",
                                                                                children: empCode
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1136,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1132,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1120,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                                        size: 12,
                                                                        className: "text-slate-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1146,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    deptName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1144,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: row.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1154,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    row.date === todayStr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 uppercase",
                                                                        children: "Today"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1156,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1153,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1152,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-medium text-slate-600 dark:text-slate-300",
                                                            children: shiftName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1164,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-bold text-slate-900 dark:text-white",
                                                            children: punchInDisplay
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-bold",
                                                            children: punchOutDisplay ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: punchOutDisplay
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1176,
                                                                columnNumber: 33
                                                            }, this) : isCurrentlyActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 animate-pulse",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1179,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    "On Duty"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1178,
                                                                columnNumber: 33
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 font-normal",
                                                                children: "--:--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1183,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1174,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-semibold",
                                                            children: totalHoursDisplay
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1188,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono text-emerald-600 dark:text-emerald-400 font-semibold",
                                                            children: overtimeDisplay
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1193,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `px-2.5 py-1 rounded-full font-extrabold text-[10px] uppercase tracking-wider inline-block ${row.status === "present" ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400" : row.isLate || row.status === "late" ? "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400" : row.status === "half_day" ? "bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-400" : row.status === "weekend" ? "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                                        children: row.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1200,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isWeekendOrHolidayRecord(row) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            row.regularizationStatus === "approved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                                                        size: 11
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                        lineNumber: 1219,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    " Sunday Duty: Approved"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1218,
                                                                                columnNumber: 39
                                                                            }, this) : row.regularizationStatus === "rejected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800",
                                                                                children: "Sunday Duty: Rejected"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1222,
                                                                                columnNumber: 39
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10px] font-bold border border-amber-200 dark:border-amber-800 animate-pulse",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                                                        size: 11
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                        lineNumber: 1227,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    " Sunday Duty: Needs Approval"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1226,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            row.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-slate-400 truncate max-w-[180px] mt-0.5",
                                                                                title: row.notes,
                                                                                children: row.notes
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1231,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1216,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-right",
                                                            children: isWeekendOrHolidayRecord(row) && perms.canApproveWeekendDuty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleOpenApproveModal(row),
                                                                className: `h-[34px] px-3 rounded-[6px] text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer shadow-2xs ${row.regularizationStatus === "approved" ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700" : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"}`,
                                                                title: "Authorize Sunday/Weekend Duty Benefit",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1252,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: row.regularizationStatus === "approved" ? "Update Award" : "Authorize Duty"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1243,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1241,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, row.id, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 27
                                                }, this);
                                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 10,
                                                    className: "py-12 text-center text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                            size: 32,
                                                            className: "mx-auto mb-2 text-slate-300 dark:text-slate-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                                            children: "No attendance records found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400 mt-1 max-w-sm mx-auto",
                                                            children: "Try adjusting your search query, department, or date filter to see logs."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1267,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1262,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1261,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1050,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1035,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1034,
                                columnNumber: 13
                            }, this),
                            filteredAttendance.length > ATTENDANCE_PAGE_SIZE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                        children: [
                                            "Showing",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-700 dark:text-slate-200",
                                                children: [
                                                    Math.min((attendancePage - 1) * ATTENDANCE_PAGE_SIZE + 1, filteredAttendance.length),
                                                    "–",
                                                    Math.min(attendancePage * ATTENDANCE_PAGE_SIZE, filteredAttendance.length)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "of",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-700 dark:text-slate-200",
                                                children: filteredAttendance.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1287,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "records"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: attendancePage === 1,
                                                onClick: ()=>setAttendancePage((p)=>Math.max(1, p - 1)),
                                                className: "h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold transition cursor-pointer",
                                                children: "‹"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1290,
                                                columnNumber: 19
                                            }, this),
                                            Array.from({
                                                length: Math.ceil(filteredAttendance.length / ATTENDANCE_PAGE_SIZE)
                                            }, (_, i)=>i + 1).filter((p)=>p === 1 || p === Math.ceil(filteredAttendance.length / ATTENDANCE_PAGE_SIZE) || Math.abs(p - attendancePage) <= 1).reduce((acc, p, idx, arr)=>{
                                                if (idx > 0 && arr[idx - 1] + 1 < p) acc.push("...");
                                                acc.push(p);
                                                return acc;
                                            }, []).map((item, idx)=>item === "..." ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-8 px-1 flex items-center text-slate-400 text-xs",
                                                    children: "…"
                                                }, `dots-${idx}`, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1307,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setAttendancePage(item),
                                                    className: `h-8 min-w-8 px-2 flex items-center justify-center rounded-lg border text-xs font-bold transition cursor-pointer ${attendancePage === item ? "bg-emerald-600 border-emerald-600 text-white shadow-xs" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"}`,
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 25
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: attendancePage === Math.ceil(filteredAttendance.length / ATTENDANCE_PAGE_SIZE),
                                                onClick: ()=>setAttendancePage((p)=>Math.min(Math.ceil(filteredAttendance.length / ATTENDANCE_PAGE_SIZE), p + 1)),
                                                className: "h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold transition cursor-pointer",
                                                children: "›"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1289,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1279,
                                columnNumber: 15
                            }, this),
                            filteredAttendance.length <= ATTENDANCE_PAGE_SIZE && filteredAttendance.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2.5 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Showing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-slate-700 dark:text-slate-200",
                                            children: filteredAttendance.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1335,
                                            columnNumber: 31
                                        }, this),
                                        " record",
                                        filteredAttendance.length === 1 ? "" : "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1335,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1334,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 797,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                lineNumber: 466,
                columnNumber: 9
            }, this),
            (!isSuperAdminOrAdmin || activeView === "my") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    isOffDayDutyToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-[8px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1350,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2.5 py-0.5 rounded-[6px] text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
                                                        children: [
                                                            "🌅 ",
                                                            offDayLabel,
                                                            " Active"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1354,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium",
                                                        children: "Comp-Off Leave or Bonus Eligible"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1353,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-extrabold text-slate-900 dark:text-white mt-1",
                                                children: [
                                                    "Working today on ",
                                                    isSunday ? "Sunday" : "Weekend/Holiday",
                                                    "?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1361,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 dark:text-slate-300 mt-0.5 max-w-xl",
                                                children: [
                                                    "Your attendance will be submitted to the Admin / Officer for verification. Once approved, you will be rewarded with ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "+1 Compensatory Off (Extend Leave Balance)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1365,
                                                        columnNumber: 137
                                                    }, this),
                                                    " or a ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Special Overtime / Bonus Allowance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1365,
                                                        columnNumber: 202
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1348,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0 w-full sm:w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleOpenDutyRequest(todayStr),
                                    className: "w-full sm:w-auto h-[42px] px-4 rounded-[8px] border border-emerald-300 dark:border-emerald-700/80 bg-white dark:bg-[#111c24] text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1375,
                                            columnNumber: 19
                                        }, this),
                                        "Request Duty Authorization"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1371,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1370,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 1347,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 sm:p-6 rounded-[10px] bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-center md:text-left flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-center md:justify-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 ${punchState.punchedIn && !punchState.punchedOut ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800" : punchState.punchedOut ? "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 border border-purple-300 dark:border-purple-800" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}`,
                                                children: punchState.punchedIn && !punchState.punchedOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Clocked In • On Duty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1399,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : punchState.punchedOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                            size: 14,
                                                            className: "text-purple-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1403,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Shift Paused • Clocked Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1404,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                            size: 14,
                                                            className: "text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1408,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Ready to Clock In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1409,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1387,
                                                columnNumber: 17
                                            }, this),
                                            isOffDayDutyToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-bold",
                                                children: [
                                                    "🌅 ",
                                                    offDayLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1415,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1386,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl sm:text-2xl font-black text-slate-900 dark:text-white",
                                                children: punchState.punchedIn && !punchState.punchedOut ? isOffDayDutyToday ? `Clocked In on ${offDayLabel}` : "You are currently Clocked In" : punchState.punchedOut ? isOffDayDutyToday ? `${offDayLabel} Shift (Clocked Out)` : "Daily Shift (Clocked Out)" : isOffDayDutyToday ? `Ready to Clock In for ${offDayLabel}` : "Ready to Clock In"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1423,
                                                columnNumber: 17
                                            }, this),
                                            punchState.punchedIn && !punchState.punchedOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-baseline justify-center md:justify-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-3xl sm:text-4xl font-mono font-black tracking-tight text-slate-900 dark:text-white",
                                                        children: formatTimer(punchState.elapsedSeconds)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1439,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400 font-medium",
                                                        children: [
                                                            "Punched in at ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "font-mono text-slate-700 dark:text-slate-300",
                                                                children: punchState.punchInTime || "--:--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1443,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1442,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1438,
                                                columnNumber: 19
                                            }, this),
                                            punchState.punchedOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                                children: [
                                                    "Clocked out at ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "font-mono text-slate-700 dark:text-slate-300",
                                                        children: punchState.punchOutTime
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 36
                                                    }, this),
                                                    " • Total Work: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "font-mono text-emerald-600 dark:text-emerald-400",
                                                        children: formatTimer(punchState.elapsedSeconds)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 150
                                                    }, this),
                                                    ". You can clock in again to resume your shift."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1449,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-slate-500 dark:text-slate-400 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-[11px] font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                        size: 13,
                                                        className: "text-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GPS Geofenced • Office HQ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1457,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-[11px] font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                        size: 13,
                                                        className: "text-sky-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1462,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "General Shift • 09:30 AM – 06:30 PM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1463,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1461,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1456,
                                        columnNumber: 15
                                    }, this),
                                    isOffDayDutyToday && !punchState.punchedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 max-w-md mx-auto md:mx-0 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                                children: [
                                                    offDayLabel,
                                                    " Work Task / Remarks (For Admin/Officer)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1470,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: sundayDutyNote,
                                                onChange: (e)=>setSundayDutyNote(e.target.value),
                                                placeholder: "e.g. Critical bug fixes, server maintenance, client release",
                                                className: "w-full h-[44px] px-3.5 text-xs rounded-[8px] border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1473,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1469,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1384,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-3 shrink-0",
                                children: !perms.canPunchAttendance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full sm:w-auto px-5 py-3 rounded-[10px] bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 text-center",
                                    children: "Punching Not Permitted for Role"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 17
                                }, this) : !punchState.punchedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handlePunchInAction,
                                    className: "w-full sm:w-auto h-[52px] sm:h-[48px] px-8 rounded-xl sm:rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition cursor-pointer touch-manipulation",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Login01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Login01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isOffDayDutyToday ? `Punch In (${offDayLabel})` : "Punch In Now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1497,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1491,
                                    columnNumber: 17
                                }, this) : !punchState.punchedOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onPunchOut,
                                    className: "w-full sm:w-auto h-[52px] sm:h-[48px] px-8 rounded-xl sm:rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-rose-600/25 transition cursor-pointer touch-manipulation",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logout01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1505,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Punch Out (",
                                                formatTimer(punchState.elapsedSeconds),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1506,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2 rounded-[8px] bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 text-center",
                                            children: [
                                                "Punched out at ",
                                                punchState.punchOutTime,
                                                " (",
                                                formatTimer(punchState.elapsedSeconds),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1510,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handlePunchInAction,
                                            className: "w-full sm:w-auto h-[48px] sm:h-[44px] px-6 rounded-xl sm:rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition cursor-pointer touch-manipulation",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Login01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Login01Icon"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1518,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Punch In Again (Resume)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1519,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1513,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1509,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1485,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 1383,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111c24] rounded-[10px] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-2xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-extrabold text-sm text-slate-900 dark:text-white",
                                                children: "My Daily Shift Timesheet Log"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Verified punch records with auto-calculated overtime hours"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1533,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleExportCSV,
                                        className: "text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 font-bold cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1542,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Export CSV"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1543,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1537,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1528,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isNative ? "block p-3.5 space-y-3" : "block md:hidden p-3.5 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[10px] bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/30 p-3.5 space-y-3 shadow-2xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1554,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1553,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-extrabold text-xs text-slate-900 dark:text-white leading-tight",
                                                                        children: "Today's Timesheet"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1557,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-mono text-[10px] text-slate-400",
                                                                        children: [
                                                                            todayStr,
                                                                            " • Regular Shift"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                        lineNumber: 1560,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1556,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase tracking-wider ${punchState.punchedIn ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 animate-pulse" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                        children: punchState.punchedIn ? "On Duty" : "Not Punched"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1566,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-1.5 p-2 rounded-[8px] bg-white/80 dark:bg-[#111c24]/90 border border-emerald-500/20 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1580,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                children: punchState.punchInTime || "--:--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1583,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1579,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "Out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1588,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                children: punchState.punchOutTime || (punchState.punchedIn ? "Active" : "--:--")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1591,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1587,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "Work"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1596,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-extrabold text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 block truncate",
                                                                children: punchState.punchedIn ? `${(punchState.elapsedSeconds / 3600).toFixed(1)} hrs` : "--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1599,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1595,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                children: "Overtime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1606,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-xs text-slate-700 dark:text-slate-300 mt-0.5 block truncate",
                                                                children: punchState.elapsedSeconds > 28800 ? `${((punchState.elapsedSeconds - 28800) / 3600).toFixed(1)} hrs` : "0.0 hrs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1609,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1605,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1578,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1550,
                                        columnNumber: 15
                                    }, this),
                                    attendanceList && attendanceList.length > 0 ? attendanceList.map((row)=>{
                                        var _row_shift;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[10px] bg-slate-50/70 dark:bg-[#142029] border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-2.5 shadow-2xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white",
                                                                    children: row.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1628,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-slate-400",
                                                                    children: ((_row_shift = row.shift) === null || _row_shift === void 0 ? void 0 : _row_shift.name) || "Regular Shift"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1631,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1627,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-end gap-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase tracking-wider ${row.status === "present" ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400" : row.isLate || row.status === "late" ? "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                                children: row.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1637,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1636,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1626,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-1.5 p-2 rounded-[8px] bg-white dark:bg-[#111c24] border border-slate-200/70 dark:border-slate-800 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                    children: "In"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1654,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                    children: row.punchInTime || "--:--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1657,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1653,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                    children: "Out"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1662,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                    children: row.punchOutTime || "--:--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1665,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1661,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                    children: "Hours"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1670,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-extrabold text-xs text-slate-900 dark:text-white mt-0.5 block truncate",
                                                                    children: row.totalWorkHours ? `${row.totalWorkHours} hrs` : row.workingHours ? `${row.workingHours} hrs` : "--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1673,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1669,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block",
                                                                    children: "Overtime"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1682,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 block truncate",
                                                                    children: row.overtimeHours ? `${row.overtimeHours} hrs` : "0.0 hrs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1685,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1681,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1652,
                                                    columnNumber: 21
                                                }, this),
                                                isWeekendOrHolidayRecord(row) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-1.5 border-t border-slate-200/60 dark:border-slate-800",
                                                    children: row.regularizationStatus === "approved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1696,
                                                                columnNumber: 29
                                                            }, this),
                                                            " Comp-Off / Bonus Approved"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1695,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[5px] bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10px] font-bold border border-amber-200 dark:border-amber-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1700,
                                                                columnNumber: 29
                                                            }, this),
                                                            " Sunday Duty: Pending Review"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1699,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1693,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `my-mob-${row.id}`, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1621,
                                            columnNumber: 19
                                        }, this);
                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-8 text-center text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                size: 28,
                                                className: "mx-auto mb-1.5 text-slate-300 dark:text-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-slate-600 dark:text-slate-300",
                                                children: "No historical punch records found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1710,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 mt-0.5",
                                                children: "Your punches for completed work shifts will appear here."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1713,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1708,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isNative ? "hidden" : "hidden md:block overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-xs text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-slate-50/70 dark:bg-slate-900/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800 text-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1725,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Shift Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1726,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Punch In"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1727,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Punch Out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1728,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Total Work"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1729,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Overtime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1730,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 px-4",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1731,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1724,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1723,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-medium",
                                                            children: [
                                                                todayStr,
                                                                " (Today)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1736,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-semibold text-slate-900 dark:text-white",
                                                            children: "Regular Shift"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1739,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-bold",
                                                            children: punchState.punchInTime || "--:--"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1742,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-bold",
                                                            children: punchState.punchOutTime || "--:--"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1745,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono font-bold",
                                                            children: punchState.punchedIn ? `${(punchState.elapsedSeconds / 3600).toFixed(1)} hrs` : "--"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1748,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-mono text-emerald-600 dark:text-emerald-400",
                                                            children: punchState.elapsedSeconds > 28800 ? `${((punchState.elapsedSeconds - 28800) / 3600).toFixed(1)} hrs` : "0.0 hrs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1753,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-0.5 rounded-full font-extrabold text-[10px] ${punchState.punchedIn ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                                children: punchState.punchedIn ? "Present" : "Not Punched"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1759,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1758,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1735,
                                                    columnNumber: 19
                                                }, this),
                                                attendanceList && attendanceList.length > 0 ? attendanceList.map((row)=>{
                                                    var _row_shift;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 font-mono",
                                                                children: row.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1776,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: ((_row_shift = row.shift) === null || _row_shift === void 0 ? void 0 : _row_shift.name) || "Regular Shift"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1777,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 font-mono",
                                                                children: row.punchInTime || "--:--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1778,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 font-mono",
                                                                children: row.punchOutTime || "--:--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1779,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 font-mono",
                                                                children: row.totalWorkHours ? `${row.totalWorkHours} hrs` : row.workingHours ? `${row.workingHours} hrs` : "--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1780,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 font-mono text-emerald-600 dark:text-emerald-400",
                                                                children: row.overtimeHours ? `${row.overtimeHours} hrs` : "0.0 hrs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1787,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `px-2 py-0.5 rounded-full font-bold text-[10px] capitalize ${row.status === "present" ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600" : row.isLate || row.status === "late" ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                                            children: row.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                            lineNumber: 1792,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        isWeekendOrHolidayRecord(row) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: row.regularizationStatus === "approved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                                                        size: 10
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                        lineNumber: 1806,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    " Comp-Off / Bonus Approved"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1805,
                                                                                columnNumber: 35
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                                                        size: 10
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                        lineNumber: 1810,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    " Sunday Duty: Pending Review"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                                lineNumber: 1809,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                            lineNumber: 1803,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1791,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                lineNumber: 1790,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, row.id, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 1772,
                                                        columnNumber: 23
                                                    }, this);
                                                }) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1734,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1722,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                lineNumber: 1721,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                        lineNumber: 1527,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                lineNumber: 1344,
                columnNumber: 9
            }, this),
            adminApproveModalOpen && selectedDutyAttendance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg bg-white dark:bg-[#111c24] rounded-t-[20px] sm:rounded-[10px] shadow-2xl border-t sm:border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-150 max-h-[92vh] pb-[max(0.75rem,env(safe-area-inset-bottom))]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto my-2.5 sm:hidden shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 1835,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-gradient-to-r from-emerald-50/70 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-[8px] bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shadow-xs shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 1841,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1840,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-black text-slate-900 dark:text-white",
                                                    children: "Authorize Sunday / Weekend Duty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1844,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "Grant Compensatory Leave (+1 Day) or Bonus Allowance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1847,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1843,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1839,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setAdminApproveModalOpen(false),
                                    className: "p-1.5 rounded-[8px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 1856,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1852,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 1838,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 space-y-4 text-xs overflow-y-auto max-h-[70vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-[8px] bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-slate-900 dark:text-white text-sm",
                                                    children: selectedDutyAttendance.employee ? `${selectedDutyAttendance.employee.firstName} ${selectedDutyAttendance.employee.lastName || ""}` : selectedDutyAttendance.employeeName || "Employee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1865,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-slate-500 font-bold",
                                                    children: [
                                                        selectedDutyAttendance.date,
                                                        " (Sunday / Weekend)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1870,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1864,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/80 dark:border-slate-800 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 block",
                                                            children: "Punch In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1876,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-slate-700 dark:text-slate-200 font-mono",
                                                            children: selectedDutyAttendance.punchInTime || (selectedDutyAttendance.checkIn ? new Date(selectedDutyAttendance.checkIn).toLocaleTimeString() : "--:--")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1877,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1875,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 block",
                                                            children: "Punch Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1882,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-slate-700 dark:text-slate-200 font-mono",
                                                            children: selectedDutyAttendance.punchOutTime || (selectedDutyAttendance.checkOut ? new Date(selectedDutyAttendance.checkOut).toLocaleTimeString() : "Active")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1883,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1881,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 block",
                                                            children: "Work Hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1888,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-emerald-600 dark:text-emerald-400 font-mono",
                                                            children: [
                                                                selectedDutyAttendance.workingHours || selectedDutyAttendance.totalWorkHours || 0,
                                                                " hrs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1889,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1887,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1874,
                                            columnNumber: 17
                                        }, this),
                                        selectedDutyAttendance.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 pt-1.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-500",
                                                    children: "Employee Remarks: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1896,
                                                    columnNumber: 21
                                                }, this),
                                                selectedDutyAttendance.notes
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1895,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1863,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-2",
                                            children: "Select Compensation / Benefit to Award *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setApprovalForm((p)=>({
                                                                ...p,
                                                                compensationType: "leave"
                                                            })),
                                                    className: `p-3 rounded-[8px] border-2 cursor-pointer transition-all ${approvalForm.compensationType === "leave" ? "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-xs text-slate-900 dark:text-white",
                                                                    children: "Extend Leave"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1917,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
                                                                    children: "+1 Day"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1918,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1916,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500 dark:text-slate-400 leading-snug",
                                                            children: "Adds Compensatory Off to leave balance."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1920,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1909,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setApprovalForm((p)=>({
                                                                ...p,
                                                                compensationType: "bonus"
                                                            })),
                                                    className: `p-3 rounded-[8px] border-2 cursor-pointer transition-all ${approvalForm.compensationType === "bonus" ? "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-xs text-slate-900 dark:text-white",
                                                                    children: "Sunday Bonus"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1934,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
                                                                    children: "Payout"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1935,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1933,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500 dark:text-slate-400 leading-snug",
                                                            children: "Awards monetary bonus / overtime allowance."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1937,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1926,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setApprovalForm((p)=>({
                                                                ...p,
                                                                compensationType: "both"
                                                            })),
                                                    className: `p-3 rounded-[8px] border-2 cursor-pointer transition-all ${approvalForm.compensationType === "both" ? "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-xs text-slate-900 dark:text-white",
                                                                    children: "Leave + Bonus"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1951,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                                                                    children: "Both"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                                    lineNumber: 1952,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1950,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500 dark:text-slate-400 leading-snug",
                                                            children: "Grants both comp-off leave and special bonus."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                            lineNumber: 1954,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 1943,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1907,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1903,
                                    columnNumber: 15
                                }, this),
                                (approvalForm.compensationType === "leave" || approvalForm.compensationType === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Compensatory Leave Days to Credit (Added to Leave Balance) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1964,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            step: "0.5",
                                            min: "0.5",
                                            max: "5",
                                            value: approvalForm.leaveDays,
                                            onChange: (e)=>setApprovalForm((p)=>({
                                                        ...p,
                                                        leaveDays: parseFloat(e.target.value) || 1.0
                                                    })),
                                            className: "w-full h-[44px] px-3.5 text-xs rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1967,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1963,
                                    columnNumber: 17
                                }, this),
                                (approvalForm.compensationType === "bonus" || approvalForm.compensationType === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Sunday Bonus / Allowance Amount (₹) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1981,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            step: "100",
                                            min: "0",
                                            value: approvalForm.bonusAmount,
                                            onChange: (e)=>setApprovalForm((p)=>({
                                                        ...p,
                                                        bonusAmount: parseFloat(e.target.value) || 0
                                                    })),
                                            placeholder: "e.g. 1000",
                                            className: "w-full h-[44px] px-3.5 text-xs rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1984,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1980,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Officer Authorization Comments / Decision Notes (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 1997,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: approvalForm.reviewerComments,
                                            onChange: (e)=>setApprovalForm((p)=>({
                                                        ...p,
                                                        reviewerComments: e.target.value
                                                    })),
                                            placeholder: "e.g. Authorized by Operations Manager: Exceptional Sunday deployment support",
                                            className: "w-full h-[44px] px-3.5 text-xs rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2000,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 1996,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 1861,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isProcessingApproval,
                                    onClick: ()=>handleExecuteApproval("rejected"),
                                    className: "h-[44px] px-4 rounded-[8px] border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs font-bold transition cursor-pointer disabled:opacity-50",
                                    children: "Reject Duty"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2012,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isProcessingApproval,
                                            onClick: ()=>setAdminApproveModalOpen(false),
                                            className: "h-[44px] px-4 rounded-[8px] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2021,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isProcessingApproval,
                                            onClick: ()=>handleExecuteApproval("approved"),
                                            className: "h-[44px] px-5 rounded-[8px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                                            children: isProcessingApproval ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 2035,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 2040,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Approve & Credit Award"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2028,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2020,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 2011,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                    lineNumber: 1833,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                lineNumber: 1832,
                columnNumber: 9
            }, this),
            dutyRequestModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white dark:bg-[#111c24] rounded-t-[20px] sm:rounded-[10px] shadow-2xl border-t sm:border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-150 max-h-[92vh] pb-[max(0.75rem,env(safe-area-inset-bottom))]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto my-2.5 sm:hidden shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 2059,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-white dark:bg-[#111c24]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-[8px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center shadow-xs shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                lineNumber: 2065,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2064,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-black text-slate-900 dark:text-white",
                                                    children: "Request Sunday / Weekend Duty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 2068,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "Submit duty attendance to Admin/Officer for Comp-Off or Bonus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 2071,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2067,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2063,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDutyRequestModalOpen(false),
                                    className: "p-1.5 rounded-[8px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                        lineNumber: 2080,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2076,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 2062,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmitDutyRequest,
                            className: "p-4 sm:p-5 space-y-3.5 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Sunday / Weekend Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2087,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            required: true,
                                            value: dutyRequestForm.date,
                                            onChange: (e)=>setDutyRequestForm((p)=>({
                                                        ...p,
                                                        date: e.target.value
                                                    })),
                                            className: "w-full h-[44px] px-3.5 text-xs rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2090,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2086,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Preferred Reward Option *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: dutyRequestForm.preferredCompensation,
                                            onChange: (e)=>setDutyRequestForm((p)=>({
                                                        ...p,
                                                        preferredCompensation: e.target.value
                                                    })),
                                            className: "w-full h-[44px] px-3.5 text-xs font-semibold rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "leave",
                                                    children: "Compensatory Off (+1 Day Leave Balance)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 2107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "bonus",
                                                    children: "Special Sunday Bonus / Overtime Allowance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 2108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "both",
                                                    children: "Both (Leave Extension + Bonus)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                    lineNumber: 2109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2099,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase mb-1",
                                            children: "Task Description / Work Reason *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 3,
                                            value: dutyRequestForm.reason,
                                            onChange: (e)=>setDutyRequestForm((p)=>({
                                                        ...p,
                                                        reason: e.target.value
                                                    })),
                                            placeholder: "Describe the tasks executed (e.g. Critical release deployment, production server patch, customer escalation)",
                                            className: "w-full p-3 text-xs rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-hidden resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setDutyRequestModalOpen(false),
                                            className: "h-[44px] px-4 rounded-[8px] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmittingDutyRequest,
                                            className: "h-[44px] px-5 rounded-[8px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                                            children: isSubmittingDutyRequest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Submitting..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                                        lineNumber: 2146,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Submit Duty Request"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                            lineNumber: 2135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                                    lineNumber: 2128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                            lineNumber: 2085,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                    lineNumber: 2057,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
                lineNumber: 2056,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_s(AttendanceScreen, "TplKKU8CI/PsQE/VwY5D5BfJ+T0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = AttendanceScreen;
var _c;
__turbopack_context__.k.register(_c, "AttendanceScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_hrm_screens_AttendanceScreen_tsx_e4f7ea19._.js.map