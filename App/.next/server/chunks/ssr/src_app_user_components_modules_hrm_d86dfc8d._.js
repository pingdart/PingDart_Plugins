module.exports = [
"[project]/src/app/user/components/modules/hrm/utils/permissions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_PERMISSION_GROUPS",
    ()=>ALL_PERMISSION_GROUPS,
    "getHrmPermissions",
    ()=>getHrmPermissions,
    "hasPermission",
    ()=>hasPermission
]);
"use client";
const ALL_PERMISSION_GROUPS = [
    {
        category: "Holidays Management",
        permissions: [
            "View Holidays Calendar",
            "Create / Add Holiday",
            "Edit / Update Holiday",
            "Delete Holiday",
            "Auto-Generate Weekends & Import Holidays",
            "Bulk Delete All Holidays"
        ]
    },
    {
        category: "Leaves & Time Off",
        permissions: [
            "Apply Personal Leave Request",
            "View All Staff Leave Applications",
            "Approve / Reject Leave Applications",
            "Configure Leave Types & Allocations"
        ]
    },
    {
        category: "Employee Directory & Profiles",
        permissions: [
            "View All Employees Directory",
            "View Assigned Team Only",
            "Add / Onboard New Employees",
            "Edit Employee Details & KYC",
            "Deactivate / Terminate Employees",
            "View Salary & Banking Details",
            "Upload & Manage Employee Documents"
        ]
    },
    {
        category: "Attendance & Timesheets",
        permissions: [
            "Self-Service Punch In / Out",
            "View All Attendance Timesheets",
            "View Department / Team Timesheets",
            "Approve / Regularize Timesheets",
            "Approve Weekend Duty & Overtime Bonus"
        ]
    },
    {
        category: "Employee Desktop Tracker",
        permissions: [
            "Self-Service Tracker Status",
            "View All Employees Desktop Monitoring",
            "Capture Live Remote Screenshots",
            "Manage Tracking Intervals & Settings"
        ]
    },
    {
        category: "Payroll & Compensation",
        permissions: [
            "Download Personal Payslip PDF",
            "View Organization Payroll Summary",
            "Generate & Process Monthly Payroll",
            "Create & Edit Manual Payslips",
            "Delete Payslips",
            "CRM Deal Commissions Auto-Audit"
        ]
    },
    {
        category: "Loans & Salary Advances",
        permissions: [
            "Apply Advance / Personal Loan",
            "View All Staff Loan Applications",
            "Approve / Reject Loans & Tenures",
            "Record Loan Repayments & Settlements"
        ]
    },
    {
        category: "Performance & OKRs",
        permissions: [
            "View Personal Goals Progress",
            "Assign Goals & OKRs",
            "Review Team Performance & Ratings"
        ]
    },
    {
        category: "Department & Shift Configuration",
        permissions: [
            "Manage Departments & Codes",
            "Manage Designations & Bands",
            "Manage Shifts & Geo-Fence Rules"
        ]
    },
    {
        category: "Organization, Branches & Security",
        permissions: [
            "Manage Organizations & Master Settings",
            "Manage Branches & Office Locations",
            "Manage Roles & Permissions Matrix",
            "Manage Audit Logs & Integrations"
        ]
    }
];
function hasPermission(permissionName, context) {
    const { authUser, userRole = "Employee", canAccessAdmin, roles = [], employees = [] } = context;
    if (!authUser) return false;
    const permLower = permissionName.toLowerCase().trim();
    // 1. Super Admin has unrestricted access to all functions
    if (authUser.role === "superadmin" || authUser.isAdmin === true || userRole === "Super Admin") {
        return true;
    }
    // 2. Identify the active employee record and assigned role
    const currentEmp = employees.find((e)=>String(e.linkedUserId) === String(authUser.id) || e.email && authUser.email && e.email.toLowerCase() === authUser.email.toLowerCase());
    let activeRole;
    if (currentEmp?.role) {
        activeRole = currentEmp.role;
    }
    if (!activeRole && currentEmp?.roleId) {
        activeRole = roles.find((r)=>String(r.id) === String(currentEmp.roleId));
    }
    if (!activeRole && userRole) {
        activeRole = roles.find((r)=>r.code?.toLowerCase() === userRole.toLowerCase() || r.name?.toLowerCase() === userRole.toLowerCase());
    }
    // If role is super_admin
    if (activeRole?.code === "super_admin" || activeRole?.name === "Super Admin") {
        return true;
    }
    // 3. Employee Self-Service Mode
    if (userRole === "Employee") {
        const selfServicePerms = [
            "view holidays calendar",
            "apply personal leave request",
            "self-service punch in / out",
            "download personal payslip pdf",
            "apply advance / personal loan",
            "view personal goals progress",
            "self-service tracker status"
        ];
        return selfServicePerms.includes(permLower);
    }
    // 4. Role-based check against activeRole.permissions array
    if (activeRole && Array.isArray(activeRole.permissions) && activeRole.permissions.length > 0) {
        return activeRole.permissions.some((p)=>{
            const pLower = p.toLowerCase().trim();
            return pLower === permLower || pLower.includes(permLower) || permLower.includes(pLower);
        });
    }
    // 5. Default fallback for Organization Admins (tenantadmin, domainadmin, admin, or hr_admin)
    // If their role has not been customized in the matrix yet, grant administrative access
    const isOrgAdmin = authUser.role === "tenantadmin" || authUser.role === "domainadmin" || authUser.role === "admin" || activeRole?.code === "hr_admin" || userRole === "Admin";
    if (isOrgAdmin) {
        return true;
    }
    return false;
}
function getHrmPermissions(context) {
    return {
        can: (perm)=>hasPermission(perm, context),
        // Holidays
        canViewHolidays: hasPermission("View Holidays Calendar", context),
        canCreateHoliday: hasPermission("Create / Add Holiday", context),
        canEditHoliday: hasPermission("Edit / Update Holiday", context),
        canDeleteHoliday: hasPermission("Delete Holiday", context),
        canBulkManageHolidays: hasPermission("Auto-Generate Weekends & Import Holidays", context),
        canBulkDeleteHolidays: hasPermission("Bulk Delete All Holidays", context),
        // Leaves
        canApplyLeave: hasPermission("Apply Personal Leave Request", context),
        canViewAllLeaves: hasPermission("View All Staff Leave Applications", context),
        canApproveLeave: hasPermission("Approve / Reject Leave Applications", context),
        canManageLeavePolicy: hasPermission("Configure Leave Types & Allocations", context),
        // Employees
        canViewEmployees: hasPermission("View All Employees Directory", context),
        canCreateEmployee: hasPermission("Add / Onboard New Employees", context),
        canEditEmployee: hasPermission("Edit Employee Details & KYC", context),
        canDeleteEmployee: hasPermission("Deactivate / Terminate Employees", context),
        canViewEmployeeSalary: hasPermission("View Salary & Banking Details", context),
        canManageEmployeeDocs: hasPermission("Upload & Manage Employee Documents", context),
        // Attendance
        canPunchAttendance: hasPermission("Self-Service Punch In / Out", context),
        canViewAllAttendance: hasPermission("View All Attendance Timesheets", context),
        canApproveAttendance: hasPermission("Approve / Regularize Timesheets", context),
        canApproveWeekendDuty: hasPermission("Approve Weekend Duty & Overtime Bonus", context),
        // Tracker
        canViewTracker: hasPermission("View All Employees Desktop Monitoring", context),
        canCaptureScreenshot: hasPermission("Capture Live Remote Screenshots", context),
        canManageTracker: hasPermission("Manage Tracking Intervals & Settings", context),
        // Payroll
        canViewPayroll: hasPermission("View Organization Payroll Summary", context),
        canProcessPayroll: hasPermission("Generate & Process Monthly Payroll", context),
        canManagePayslips: hasPermission("Create & Edit Manual Payslips", context),
        canDeletePayslip: hasPermission("Delete Payslips", context),
        // Loans
        canApplyLoan: hasPermission("Apply Advance / Personal Loan", context),
        canViewAllLoans: hasPermission("View All Staff Loan Applications", context),
        canApproveLoan: hasPermission("Approve / Reject Loans & Tenures", context),
        // Performance
        canAssignGoals: hasPermission("Assign Goals & OKRs", context),
        canReviewPerformance: hasPermission("Review Team Performance & Ratings", context),
        // Settings
        canManageSettings: hasPermission("Manage Organizations & Master Settings", context),
        canManageBranches: hasPermission("Manage Branches & Office Locations", context),
        canManageDepartments: hasPermission("Manage Departments & Codes", context),
        canManageDesignations: hasPermission("Manage Designations & Bands", context),
        canManageShifts: hasPermission("Manage Shifts & Geo-Fence Rules", context),
        canManageRoles: hasPermission("Manage Roles & Permissions Matrix", context)
    };
}
}),
"[project]/src/app/user/components/modules/hrm/utils/holidayUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Google Calendar Public Holidays & Auto-Generation Utilities for HRM
__turbopack_context__.s([
    "DEFAULT_COMPANY_POLICY",
    ()=>DEFAULT_COMPANY_POLICY,
    "SATURDAY_POLICY_OPTIONS",
    ()=>SATURDAY_POLICY_OPTIONS,
    "SUNDAY_POLICY_OPTIONS",
    ()=>SUNDAY_POLICY_OPTIONS,
    "WEEKEND_RULE_LABELS",
    ()=>WEEKEND_RULE_LABELS,
    "generateMonthlyRoutinePackage",
    ()=>generateMonthlyRoutinePackage,
    "generateWeekends",
    ()=>generateWeekends,
    "generateWeekendsFromPolicy",
    ()=>generateWeekendsFromPolicy,
    "getGooglePublicHolidays",
    ()=>getGooglePublicHolidays,
    "getMonthlyCutoffStatus",
    ()=>getMonthlyCutoffStatus,
    "loadCompanyHolidayPolicy",
    ()=>loadCompanyHolidayPolicy,
    "saveCompanyHolidayPolicy",
    ()=>saveCompanyHolidayPolicy
]);
const DEFAULT_COMPANY_POLICY = {
    sundayPolicy: "full_day",
    saturdayPolicy: "2nd_4th_off",
    halfDaySession: "first_half",
    branchId: "all",
    cutoffDay: 25,
    autoSyncGoogleHolidays: true
};
const POLICY_STORAGE_KEY = "pingdart_hrm_holiday_company_policy_v1";
function loadCompanyHolidayPolicy() {
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_COMPANY_POLICY;
    //TURBOPACK unreachable
    ;
}
function saveCompanyHolidayPolicy(policy) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const SUNDAY_POLICY_OPTIONS = [
    {
        value: "full_day",
        label: "All Sundays Full Holiday",
        desc: "Every Sunday is a 100% off-day"
    },
    {
        value: "half_day",
        label: "All Sundays Half Day",
        desc: "Every Sunday is a half-day shift"
    },
    {
        value: "working",
        label: "Sundays Working Day",
        desc: "Normal working day for the company"
    }
];
const SATURDAY_POLICY_OPTIONS = [
    {
        value: "all_off",
        label: "All Saturdays Full Holiday",
        desc: "5-day week: All Saturdays 100% off"
    },
    {
        value: "2nd_4th_off",
        label: "2nd & 4th Saturdays Full Off",
        desc: "Standard banking/corporate model: Alternate Saturdays off"
    },
    {
        value: "all_half_day",
        label: "All Saturdays Half Day",
        desc: "5.5-day week: Every Saturday is a half-day"
    },
    {
        value: "2nd_4th_off_others_half_day",
        label: "2nd & 4th Off + 1st, 3rd, 5th Half Day",
        desc: "Alternate full off + remaining Saturdays half day"
    },
    {
        value: "1st_3rd_off",
        label: "1st & 3rd Saturdays Full Off",
        desc: "1st and 3rd Saturdays off"
    },
    {
        value: "working",
        label: "All Saturdays Full Working",
        desc: "6-day week: Saturdays are regular working days"
    }
];
const WEEKEND_RULE_LABELS = {
    all_sundays_and_saturdays: {
        label: "All Sundays & All Saturdays",
        desc: "Standard 5-day work week (Both Saturday & Sunday off)"
    },
    all_sundays_and_2nd_4th_saturdays: {
        label: "All Sundays + 2nd & 4th Saturdays",
        desc: "Indian corporate & banking standard (alternate Saturdays off)"
    },
    all_sundays_only: {
        label: "All Sundays Only",
        desc: "6-day work week (Only Sundays off)"
    },
    all_sundays_and_1st_3rd_saturdays: {
        label: "All Sundays + 1st & 3rd Saturdays",
        desc: "1st & 3rd Saturdays off with all Sundays"
    },
    all_saturdays_only: {
        label: "All Saturdays Only",
        desc: "Only Saturdays off"
    }
};
// ── Google Public Holidays Database (India & Regional standard) ──
// Verified Gazetted & Public Google Calendar holiday entries
const GOOGLE_PUBLIC_HOLIDAYS_DB = {
    2024: [
        {
            date: "2024-01-26",
            title: "Republic Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2024-03-08",
            title: "Maha Shivratri",
            type: "restricted",
            description: "Google Calendar Public Holiday"
        },
        {
            date: "2024-03-25",
            title: "Holi",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-03-29",
            title: "Good Friday",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-04-11",
            title: "Id-ul-Fitr",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-04-21",
            title: "Mahavir Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-05-23",
            title: "Buddha Purnima",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-06-17",
            title: "Id-ul-Zuha (Bakrid)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-07-17",
            title: "Muharram",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-08-15",
            title: "Independence Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2024-08-26",
            title: "Janmashtami",
            type: "restricted",
            description: "Google Calendar Public Holiday"
        },
        {
            date: "2024-09-16",
            title: "Milad-un-Nabi",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-10-02",
            title: "Mahatma Gandhi's Birthday",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2024-10-12",
            title: "Dussehra (Vijay Dashami)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-10-31",
            title: "Diwali (Deepavali)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-11-15",
            title: "Guru Nanak Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2024-12-25",
            title: "Christmas Day",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        }
    ],
    2025: [
        {
            date: "2025-01-01",
            title: "New Year's Day",
            type: "restricted",
            description: "Google Calendar Observance"
        },
        {
            date: "2025-01-14",
            title: "Makar Sankranti / Pongal",
            type: "restricted",
            description: "Google Calendar Regional Holiday"
        },
        {
            date: "2025-01-26",
            title: "Republic Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2025-02-26",
            title: "Maha Shivratri",
            type: "restricted",
            description: "Google Calendar Public Holiday"
        },
        {
            date: "2025-03-14",
            title: "Holi",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-03-31",
            title: "Id-ul-Fitr (Ramzan Id)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-04-10",
            title: "Mahavir Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-04-18",
            title: "Good Friday",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-05-12",
            title: "Buddha Purnima",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-06-07",
            title: "Id-ul-Zuha (Bakrid)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-07-06",
            title: "Muharram",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-08-15",
            title: "Independence Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2025-08-16",
            title: "Janmashtami",
            type: "restricted",
            description: "Google Calendar Public Holiday"
        },
        {
            date: "2025-08-27",
            title: "Ganesh Chaturthi",
            type: "restricted",
            description: "Google Calendar Festival"
        },
        {
            date: "2025-09-05",
            title: "Milad-un-Nabi (Eid-e-Milad)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-10-02",
            title: "Mahatma Gandhi Jayanti",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2025-10-02",
            title: "Dussehra (Vijayadashami)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-10-20",
            title: "Diwali (Deepavali)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-10-22",
            title: "Govardhan Puja / Bhai Duj",
            type: "restricted",
            description: "Google Calendar Observance"
        },
        {
            date: "2025-11-05",
            title: "Guru Nanak Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2025-12-25",
            title: "Christmas Day",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        }
    ],
    2026: [
        {
            date: "2026-01-01",
            title: "New Year's Day",
            type: "restricted",
            description: "Google Calendar Observance"
        },
        {
            date: "2026-01-14",
            title: "Makar Sankranti / Pongal",
            type: "restricted",
            description: "Google Calendar Regional Holiday"
        },
        {
            date: "2026-01-26",
            title: "Republic Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2026-02-15",
            title: "Maha Shivratri",
            type: "restricted",
            description: "Google Calendar Public Holiday"
        },
        {
            date: "2026-03-04",
            title: "Holi",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-03-21",
            title: "Id-ul-Fitr (Ramzan Id)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-03-31",
            title: "Mahavir Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-04-03",
            title: "Good Friday",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-05-01",
            title: "Buddha Purnima / May Day",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-05-27",
            title: "Id-ul-Zuha (Bakrid)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-06-25",
            title: "Muharram",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-08-15",
            title: "Independence Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2026-08-26",
            title: "Milad-un-Nabi (Eid-e-Milad)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-09-04",
            title: "Janmashtami",
            type: "restricted",
            description: "Google Calendar Public Holiday"
        },
        {
            date: "2026-09-14",
            title: "Ganesh Chaturthi",
            type: "restricted",
            description: "Google Calendar Festival"
        },
        {
            date: "2026-10-02",
            title: "Mahatma Gandhi's Birthday",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2026-10-20",
            title: "Dussehra (Vijayadashami)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-11-08",
            title: "Diwali (Deepavali)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-11-09",
            title: "Govardhan Puja",
            type: "restricted",
            description: "Google Calendar Observance"
        },
        {
            date: "2026-11-10",
            title: "Bhai Duj",
            type: "restricted",
            description: "Google Calendar Observance"
        },
        {
            date: "2026-11-24",
            title: "Guru Nanak Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2026-12-25",
            title: "Christmas Day",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        }
    ],
    2027: [
        {
            date: "2027-01-01",
            title: "New Year's Day",
            type: "restricted",
            description: "Google Calendar Observance"
        },
        {
            date: "2027-01-14",
            title: "Makar Sankranti",
            type: "restricted",
            description: "Google Calendar Regional Holiday"
        },
        {
            date: "2027-01-26",
            title: "Republic Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2027-03-10",
            title: "Id-ul-Fitr",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-03-23",
            title: "Holi",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-03-26",
            title: "Good Friday",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-04-20",
            title: "Mahavir Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-05-16",
            title: "Id-ul-Zuha (Bakrid)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-05-20",
            title: "Buddha Purnima",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-06-15",
            title: "Muharram",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-08-15",
            title: "Independence Day",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2027-08-16",
            title: "Milad-un-Nabi",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-10-02",
            title: "Mahatma Gandhi's Birthday",
            type: "public",
            description: "Google Calendar National Holiday"
        },
        {
            date: "2027-10-10",
            title: "Dussehra",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-10-29",
            title: "Diwali (Deepavali)",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-11-14",
            title: "Guru Nanak Jayanti",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        },
        {
            date: "2027-12-25",
            title: "Christmas Day",
            type: "public",
            description: "Google Calendar Gazetted Holiday"
        }
    ]
};
async function getGooglePublicHolidays(year, month) {
    const holidays = GOOGLE_PUBLIC_HOLIDAYS_DB[year] || [];
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const items = holidays.map((h)=>{
        const d = new Date(`${h.date}T00:00:00`);
        return {
            title: h.title,
            date: h.date,
            year,
            month: d.getMonth(),
            dayOfWeek: WEEKDAYS[d.getDay()],
            holidayType: h.type,
            description: h.description,
            source: "google_calendar",
            selected: true
        };
    });
    if (month !== undefined && month !== "all") {
        return items.filter((h)=>h.month === month);
    }
    return items;
}
function generateWeekends(options) {
    const { year, month = "all", rule, titleFormat = "descriptive", holidayType = "company", branchId } = options;
    const result = [];
    const startMonth = month === "all" ? 0 : Number(month);
    const endMonth = month === "all" ? 11 : Number(month);
    for(let m = startMonth; m <= endMonth; m++){
        const daysInMonth = new Date(year, m + 1, 0).getDate();
        let saturdayCounter = 0;
        for(let day = 1; day <= daysInMonth; day++){
            const d = new Date(year, m, day);
            const dayOfWeek = d.getDay(); // 0 = Sunday, 6 = Saturday
            const dateStr = `${year}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            if (dayOfWeek === 6) {
                saturdayCounter++;
            }
            let isIncluded = false;
            let title = "";
            if (dayOfWeek === 0) {
                // Sunday
                if (rule === "all_sundays_and_saturdays" || rule === "all_sundays_and_2nd_4th_saturdays" || rule === "all_sundays_only" || rule === "all_sundays_and_1st_3rd_saturdays") {
                    isIncluded = true;
                    title = titleFormat === "descriptive" ? "Sunday Off" : "Sunday";
                }
            } else if (dayOfWeek === 6) {
                // Saturday
                if (rule === "all_sundays_and_saturdays" || rule === "all_saturdays_only") {
                    isIncluded = true;
                    title = titleFormat === "descriptive" ? "Saturday Off" : "Saturday";
                } else if (rule === "all_sundays_and_2nd_4th_saturdays") {
                    if (saturdayCounter === 2 || saturdayCounter === 4) {
                        isIncluded = true;
                        const ord = saturdayCounter === 2 ? "2nd" : "4th";
                        title = titleFormat === "descriptive" ? `${ord} Saturday Off` : `${ord} Saturday`;
                    }
                } else if (rule === "all_sundays_and_1st_3rd_saturdays") {
                    if (saturdayCounter === 1 || saturdayCounter === 3) {
                        isIncluded = true;
                        const ord = saturdayCounter === 1 ? "1st" : "3rd";
                        title = titleFormat === "descriptive" ? `${ord} Saturday Off` : `${ord} Saturday`;
                    }
                }
            }
            if (isIncluded) {
                result.push({
                    title,
                    date: dateStr,
                    year,
                    month: m,
                    dayOfWeek: dayOfWeek === 0 ? "Sunday" : "Saturday",
                    holidayType,
                    description: `Auto-generated weekend (${rule === "all_sundays_and_2nd_4th_saturdays" ? "Alternate Saturday/Sunday" : "Weekly Off"})`,
                    source: "weekend_auto",
                    selected: true,
                    branchId: branchId && branchId !== "all" ? Number(branchId) : null
                });
            }
        }
    }
    return result;
}
function generateWeekendsFromPolicy(options) {
    const { year, month = "all", policy, holidayType = "company", branchId } = options;
    const result = [];
    const startMonth = month === "all" ? 0 : Number(month);
    const endMonth = month === "all" ? 11 : Number(month);
    const sessionLabel = policy.halfDaySession === "second_half" ? "2nd Half" : "1st Half";
    const sessionTiming = policy.halfDaySession === "second_half" ? "13:30 - 18:00" : "09:00 - 13:30";
    for(let m = startMonth; m <= endMonth; m++){
        const daysInMonth = new Date(year, m + 1, 0).getDate();
        let saturdayCounter = 0;
        for(let day = 1; day <= daysInMonth; day++){
            const d = new Date(year, m, day);
            const dayOfWeek = d.getDay(); // 0 = Sunday, 6 = Saturday
            const dateStr = `${year}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            if (dayOfWeek === 6) {
                saturdayCounter++;
            }
            let isIncluded = false;
            let title = "";
            let description = "";
            if (dayOfWeek === 0) {
                // Sunday
                if (policy.sundayPolicy === "full_day") {
                    isIncluded = true;
                    title = "Sunday Off";
                    description = "Full-day weekly holiday as per company policy";
                } else if (policy.sundayPolicy === "half_day") {
                    isIncluded = true;
                    title = `Sunday (Half Day - ${sessionLabel})`;
                    description = `Company half-day (${sessionTiming})`;
                }
            } else if (dayOfWeek === 6) {
                // Saturday
                const ord = saturdayCounter === 1 ? "1st" : saturdayCounter === 2 ? "2nd" : saturdayCounter === 3 ? "3rd" : saturdayCounter === 4 ? "4th" : "5th";
                if (policy.saturdayPolicy === "all_off") {
                    isIncluded = true;
                    title = "Saturday Off";
                    description = "Full-day Saturday off (5-day work week)";
                } else if (policy.saturdayPolicy === "2nd_4th_off") {
                    if (saturdayCounter === 2 || saturdayCounter === 4) {
                        isIncluded = true;
                        title = `${ord} Saturday Off`;
                        description = `${ord} Saturday full-day holiday (alternate off policy)`;
                    }
                } else if (policy.saturdayPolicy === "all_half_day") {
                    isIncluded = true;
                    title = `Saturday (Half Day - ${sessionLabel})`;
                    description = `Saturday half-day shift (${sessionTiming})`;
                } else if (policy.saturdayPolicy === "2nd_4th_off_others_half_day") {
                    if (saturdayCounter === 2 || saturdayCounter === 4) {
                        isIncluded = true;
                        title = `${ord} Saturday Off`;
                        description = `${ord} Saturday full-day off (alternate off policy)`;
                    } else {
                        isIncluded = true;
                        title = `${ord} Saturday (Half Day - ${sessionLabel})`;
                        description = `${ord} Saturday half-day shift (${sessionTiming})`;
                    }
                } else if (policy.saturdayPolicy === "1st_3rd_off") {
                    if (saturdayCounter === 1 || saturdayCounter === 3) {
                        isIncluded = true;
                        title = `${ord} Saturday Off`;
                        description = `${ord} Saturday full-day holiday`;
                    }
                }
            }
            if (isIncluded) {
                const finalBranch = branchId && branchId !== "all" ? Number(branchId) : policy.branchId && policy.branchId !== "all" ? Number(policy.branchId) : null;
                result.push({
                    title,
                    date: dateStr,
                    year,
                    month: m,
                    dayOfWeek: dayOfWeek === 0 ? "Sunday" : "Saturday",
                    holidayType,
                    description,
                    source: "weekend_auto",
                    selected: true,
                    branchId: finalBranch
                });
            }
        }
    }
    return result;
}
function getMonthlyCutoffStatus() {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    // If on or after the 25th, default target is next month
    // If before the 25th, target is current month
    let upcomingMonth = currentMonth;
    let upcomingMonthYear = currentYear;
    if (currentDay >= 25) {
        if (currentMonth === 11) {
            upcomingMonth = 0;
            upcomingMonthYear = currentYear + 1;
        } else {
            upcomingMonth = currentMonth + 1;
        }
    }
    const MONTH_NAMES = [
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
    return {
        is25thCutoffActive: currentDay >= 25,
        currentDay,
        upcomingMonth,
        upcomingMonthYear,
        upcomingMonthName: MONTH_NAMES[upcomingMonth]
    };
}
async function generateMonthlyRoutinePackage(options) {
    const { year, month, rule = "all_sundays_and_2nd_4th_saturdays", policy, includeGooglePublicHolidays = true, branchId } = options;
    // 1. Generate weekends using policy if provided, or rule
    const weekends = policy ? generateWeekendsFromPolicy({
        year,
        month,
        policy,
        holidayType: "company",
        branchId
    }) : generateWeekends({
        year,
        month,
        rule,
        titleFormat: "descriptive",
        holidayType: "company",
        branchId
    });
    // 2. Fetch Google Public Holidays for this month
    let googleHolidays = [];
    if (includeGooglePublicHolidays) {
        const rawGoogle = await getGooglePublicHolidays(year, month);
        googleHolidays = rawGoogle.map((g)=>({
                ...g,
                source: "monthly_25th_routine",
                branchId: branchId && branchId !== "all" ? Number(branchId) : null
            }));
    }
    // Combine and de-duplicate by date
    // If a Google public holiday falls on a weekend, keep Google public holiday with weekend note!
    const combinedMap = new Map();
    // Add weekends first
    for (const w of weekends){
        combinedMap.set(w.date, w);
    }
    // Overlay Google public holidays
    for (const g of googleHolidays){
        if (combinedMap.has(g.date)) {
            const existing = combinedMap.get(g.date);
            combinedMap.set(g.date, {
                ...g,
                title: `${g.title} (${existing.title})`,
                description: `${g.description || ""} · Falls on ${existing.title}`
            });
        } else {
            combinedMap.set(g.date, g);
        }
    }
    return Array.from(combinedMap.values()).sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime());
}
}),
"[project]/src/app/user/components/modules/hrm/HrmScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HrmScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hrmApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$layout$2f$HrmSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/components/layout/HrmSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$layout$2f$HrmHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/components/layout/HrmHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$layout$2f$HrmBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/components/layout/HrmBottomNav.tsx [app-ssr] (ecmascript)");
// Modular HRM Sub-screens
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$DashboardScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/DashboardScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$EmployeesScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/EmployeesScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$AttendanceScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/AttendanceScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$LeavesScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/LeavesScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$PayrollScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/PayrollScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$LoansScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/LoansScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$ExpensesScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/ExpensesScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$AssetsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/AssetsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$ExitScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/ExitScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$PerformanceScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/PerformanceScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/SettingsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$SubscriptionScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/SubscriptionScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$HolidaysScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/HolidaysScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$EmployeeTrackerScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/EmployeeTrackerScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$modals$2f$AddEmployeeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/components/modals/AddEmployeeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$modals$2f$ApplyLeaveModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/components/modals/ApplyLeaveModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$EmployeeDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/hrm/screens/EmployeeDetailModal.tsx [app-ssr] (ecmascript)");
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
function parseHrmTab(raw) {
    if (!raw) return null;
    const lower = raw.toLowerCase().trim();
    const validTabs = {
        dashboard: "dashboard",
        overview: "dashboard",
        pulse: "dashboard",
        dash: "dashboard",
        employees: "employees",
        employee: "employees",
        directory: "employees",
        "employee-directory": "employees",
        attendance: "attendance",
        attendances: "attendance",
        shifts: "attendance",
        shift: "attendance",
        tracker: "tracker",
        pc: "tracker",
        workstation: "tracker",
        leaves: "leaves",
        leave: "leaves",
        timeoff: "leaves",
        holidays: "holidays",
        holiday: "holidays",
        calendar: "holidays",
        assets: "assets",
        asset: "assets",
        inventory: "assets",
        payroll: "payroll",
        salary: "payroll",
        payslips: "payroll",
        loans: "loans",
        loan: "loans",
        advances: "loans",
        expenses: "expenses",
        expense: "expenses",
        claims: "expenses",
        exit: "exit",
        resignation: "exit",
        fnf: "exit",
        settlement: "exit",
        performance: "performance",
        goals: "performance",
        okrs: "performance",
        okr: "performance",
        settings: "settings",
        setting: "settings",
        company: "settings",
        subscription: "subscription",
        billing: "subscription",
        plan: "subscription",
        seats: "subscription"
    };
    return validTabs[lower] || null;
}
function HrmScreen({ onBack, initialTab = "dashboard", isUserPortal = true }) {
    const { user: authUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const getUrlTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const sp = undefined;
    }, []);
    const [activeTab, setActiveTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        return getUrlTab() || initialTab;
    });
    const handleTabSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tab)=>{
        setActiveTabState(tab);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            subtab: tab,
            subtabes: tab
        });
    }, []);
    // Sync state if browser back/forward is used
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePopState = ()=>{
            const urlTab = getUrlTab();
            if (urlTab) {
                setActiveTabState(urlTab);
            }
        };
        window.addEventListener("popstate", handlePopState);
        return ()=>window.removeEventListener("popstate", handlePopState);
    }, [
        getUrlTab
    ]);
    // Sync state if URL searchParams change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const urlTab = getUrlTab();
        if (urlTab && urlTab !== activeTab) {
            setActiveTabState(urlTab);
        }
    }, [
        searchParams,
        getUrlTab
    ]);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Dynamically determine whether the authenticated user has administrative privileges
    const isUserAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!authUser) return false;
        // 1. Check user table platform/tenant/domain/admin flags
        if (authUser.role === "superadmin" || authUser.role === "tenantadmin" || authUser.role === "domainadmin" || authUser.role === "admin" || Boolean(authUser.isAdmin)) {
            return true;
        }
        // 2. Check linked HRM employee role
        const currentEmp = employees.find((e)=>String(e.linkedUserId) === String(authUser.id) || e.email && authUser.email && e.email.toLowerCase() === authUser.email.toLowerCase());
        if (currentEmp?.role?.code === "super_admin" || currentEmp?.role?.code === "hr_admin" || currentEmp?.role?.code === "admin") {
            return true;
        }
        return false;
    }, [
        authUser,
        employees
    ]);
    const canAccessAdmin = isUserAdmin;
    // When an admin logs in, default them to the Admin Console / Overview.
    // Standard employees are strictly set to "Employee" self-service.
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Employee");
    const [hasInitializedRole, setHasInitializedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasInitializedRole && authUser) {
            if (isUserAdmin) {
                setUserRole("Admin");
                setHasInitializedRole(true);
            } else if (employees.length > 0) {
                setUserRole("Employee");
                setHasInitializedRole(true);
            }
        }
    }, [
        isUserAdmin,
        authUser,
        hasInitializedRole,
        employees.length
    ]);
    const handleRoleChange = (newRole)=>{
        if (!canAccessAdmin && newRole !== "Employee") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Access Denied: Your account does not have administrative permissions.");
            return;
        }
        setUserRole(newRole);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Switched to ${newRole === "Employee" ? "Employee Self-Service Portal" : "HR Admin Console"}`);
    };
    // Protect Admin-only tabs from being accessed when in Employee role
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userRole === "Employee" && (activeTab === "employees" || activeTab === "employee-directory" || activeTab === "settings")) {
            handleTabSelect("dashboard");
        }
    }, [
        userRole,
        activeTab,
        handleTabSelect
    ]);
    // Multi-Branch Scoping State
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedBranchId, setSelectedBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    // State
    const [dashboardData, setDashboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalEmployees: 0,
        activeEmployees: 0,
        presentToday: 0,
        lateToday: 0,
        onHalfDayToday: 0,
        absentToday: 0,
        pendingLeaves: 0,
        upcomingHolidaysCount: 0
    });
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [designations, setDesignations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shifts, setShifts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Selected Employee for Right-Side Detail Drawer
    const [selectedEmployee, setSelectedEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [employeeDetailTab, setEmployeeDetailTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    // When activeTab switches to employee-directory, open drawer for selected or first employee
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTab === "employee-directory" && !selectedEmployee && employees.length > 0) {
            setSelectedEmployee(employees[0]);
        }
    }, [
        activeTab,
        employees,
        selectedEmployee
    ]);
    const [attendanceList, setAttendanceList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leaveBalances, setLeaveBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leaveTypes, setLeaveTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [holidays, setHolidays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [payslips, setPayslips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loans, setLoans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commissions, setCommissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Current user's linked employee record
    const currentEmployee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!authUser) return null;
        return employees.find((e)=>String(e.linkedUserId) === String(authUser.id) || e.email && authUser.email && e.email.toLowerCase() === authUser.email.toLowerCase()) || null;
    }, [
        authUser,
        employees
    ]);
    // Attendance Punch State
    const [punchState, setPunchState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        punchedIn: false,
        punchedOut: false,
        elapsedSeconds: 0,
        workLocation: "office"
    });
    const [isPunching, setIsPunching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Wall-clock refs for live timer to prevent holding/freezing across app switches
    const sessionStartTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const accumulatedSecondsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const trackerSessionIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(`trk_sess_${Date.now()}`);
    const hasInitialCapturedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Modals & Cross-Module Sync
    const [isAddEmployeeOpen, setIsAddEmployeeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isApplyLeaveOpen, setIsApplyLeaveOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddGoalOpen, setIsAddGoalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingCrmUsers, setPendingCrmUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isImportingCrm, setIsImportingCrm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hardware backpress handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleAppGoBack = (e)=>{
            if (isMobileSidebarOpen) {
                setIsMobileSidebarOpen(false);
                e?.preventDefault?.();
                e?.detail?.markHandled?.();
                e?.stopImmediatePropagation?.();
            } else if (isAddEmployeeOpen) {
                setIsAddEmployeeOpen(false);
                e?.preventDefault?.();
                e?.detail?.markHandled?.();
                e?.stopImmediatePropagation?.();
            } else if (isApplyLeaveOpen) {
                setIsApplyLeaveOpen(false);
                e?.preventDefault?.();
                e?.detail?.markHandled?.();
                e?.stopImmediatePropagation?.();
            } else if (isAddGoalOpen) {
                setIsAddGoalOpen(false);
                e?.preventDefault?.();
                e?.detail?.markHandled?.();
                e?.stopImmediatePropagation?.();
            }
        };
        window.addEventListener("app:back_press", handleAppGoBack);
        return ()=>window.removeEventListener("app:back_press", handleAppGoBack);
    }, [
        isMobileSidebarOpen,
        isAddEmployeeOpen,
        isApplyLeaveOpen,
        isAddGoalOpen
    ]);
    // Fast progressive data loader with immediate unblock
    const loadData = async ()=>{
        setIsLoading(true);
        // 1. Critical path for Dashboard & Core Shell (unblocks UI instantly)
        const pDashboard = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getDashboard().then((dashRes)=>{
            if (dashRes?.success && dashRes.stats) {
                setDashboardData(dashRes.stats);
                setIsLoading(false); // Unblock UI as soon as dashboard stats are in
            }
            return dashRes;
        }).catch((err)=>{
            console.error("[HRM getDashboard] error:", err);
            setIsLoading(false);
        });
        const pEmployees = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getEmployees().then((res)=>{
            if (res?.success && res.employees) {
                setEmployees(res.employees);
            }
        }).catch(console.error);
        const pDepartments = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getDepartments().then((res)=>{
            if (res?.success && res.departments) {
                const rawDepts = res.departments || [];
                const seen = new Set();
                const cleanDepts = rawDepts.filter((d)=>{
                    const key = (d.code || d.name || String(d.id)).trim().toUpperCase();
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });
                setDepartments(cleanDepts);
            }
        }).catch(console.error);
        const pAttendance = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getTodayAttendance().then((att)=>{
            if (att?.success) {
                const checkInDate = att.attendance?.checkIn ? new Date(att.attendance.checkIn).getTime() : null;
                const checkOutDate = att.attendance?.checkOut ? new Date(att.attendance.checkOut).getTime() : null;
                let elapsedSec = 0;
                const totalWorkedHours = Number(att.attendance?.workingHours || 0);
                const accumulatedSec = Math.round(totalWorkedHours * 3600);
                if (att.punchedIn && !att.punchedOut) {
                    const sessionCheckIn = att.attendance?.evidence?.currentSessionCheckIn ? new Date(att.attendance.evidence.currentSessionCheckIn).getTime() : checkInDate;
                    sessionStartTimestampRef.current = sessionCheckIn || Date.now();
                    accumulatedSecondsRef.current = accumulatedSec;
                    const currentSessionSec = sessionCheckIn ? Math.max(0, Math.floor((Date.now() - sessionCheckIn) / 1000)) : 0;
                    elapsedSec = accumulatedSec + currentSessionSec;
                } else if (att.punchedOut) {
                    sessionStartTimestampRef.current = null;
                    accumulatedSecondsRef.current = accumulatedSec;
                    elapsedSec = accumulatedSec;
                } else {
                    sessionStartTimestampRef.current = null;
                    accumulatedSecondsRef.current = 0;
                    elapsedSec = 0;
                }
                setPunchState((prev)=>({
                        ...prev,
                        punchedIn: att.punchedIn,
                        punchedOut: att.punchedOut,
                        punchInTime: att.attendance?.punchInTime || (checkInDate ? new Date(checkInDate).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : null),
                        punchOutTime: att.attendance?.punchOutTime || (checkOutDate ? new Date(checkOutDate).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : null),
                        elapsedSeconds: elapsedSec
                    }));
            }
        }).catch(console.error);
        // 2. Background calls for other tabs & forms (non-blocking)
        const pRoles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getRoles().then((res)=>{
            if (res?.success && res.roles) setRoles(res.roles);
        }).catch(console.error);
        const pBranches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getBranches().then((res)=>{
            if (res?.success && res.branches) setBranches(res.branches);
        }).catch(console.error);
        const pShifts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getShifts().then((res)=>{
            if (res?.success && res.shifts) setShifts(res.shifts);
        }).catch(console.error);
        const pDesignations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getDesignations().then((res)=>{
            if (res?.success && res.designations) {
                const rawDesigs = res.designations || [];
                const seen = new Set();
                const cleanDesigs = rawDesigs.filter((ds)=>{
                    const key = (ds.title || String(ds.id)).trim().toLowerCase();
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });
                setDesignations(cleanDesigs);
            }
        }).catch(console.error);
        const pLeaveTypes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getLeaveTypes().then((res)=>{
            if (res?.success && res.leaveTypes) setLeaveTypes(res.leaveTypes);
        }).catch(console.error);
        const pLeaveReqs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getLeaveRequests().then((res)=>{
            if (res?.success && res.requests) setLeaveRequests(res.requests);
        }).catch(console.error);
        const pLeaveBals = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getLeaveBalances().then((res)=>{
            if (res?.success && res.balances) setLeaveBalances(res.balances);
        }).catch(console.error);
        const pHolidays = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getHolidays().then((res)=>{
            if (res?.success && res.holidays) setHolidays(res.holidays);
        }).catch(console.error);
        const pSync = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getCrmPendingSync().then((res)=>{
            if (res?.success && res.pendingUsers) setPendingCrmUsers(res.pendingUsers);
        }).catch(console.error);
        const pAttendanceList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getAttendanceHistory().then((res)=>{
            if (res?.success && res.attendance) setAttendanceList(res.attendance);
        }).catch(console.error);
        const pPayslips = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getPayslips().then((res)=>{
            if (res?.success && res.payslips) setPayslips(res.payslips);
        }).catch(console.error);
        const pLoans = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getLoans().then((res)=>{
            if (res?.success && res.loans) setLoans(res.loans);
        }).catch(console.error);
        const pSubscription = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getSubscription().then((res)=>{
            if (res?.success && res.data) {
                setSubscription(res.data);
            }
        }).catch((err)=>{
            console.warn("[HRM getSubscription] error:", err);
        });
        // Ensure loading indicator is dismissed once core dashboard promises resolve
        try {
            await Promise.allSettled([
                pDashboard,
                pDepartments,
                pEmployees,
                pAttendance,
                pAttendanceList,
                pPayslips,
                pLoans,
                pSubscription
            ]);
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadData();
    }, []);
    const handleEmployeeCreated = async (newEmp)=>{
        if (newEmp) {
            setEmployees((prev)=>[
                    newEmp,
                    ...prev.filter((e)=>String(e.id) !== String(newEmp.id))
                ]);
            setDashboardData((prev)=>({
                    ...prev,
                    totalEmployees: (prev.totalEmployees || 0) + 1,
                    activeEmployees: (prev.activeEmployees || 0) + 1
                }));
        }
        try {
            const empRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].getEmployees();
            if (empRes.success && empRes.employees) {
                setEmployees(empRes.employees);
            }
        } catch (err) {
            console.error("[HrmScreen] Quick employees refresh error:", err);
        }
        loadData();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Timer for live punch clock — calculates real elapsed wall-clock seconds so it NEVER freezes/holds when switching apps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!punchState.punchedIn || punchState.punchedOut) return;
        const syncElapsed = ()=>{
            if (sessionStartTimestampRef.current) {
                const wallClockSec = Math.max(0, Math.floor((Date.now() - sessionStartTimestampRef.current) / 1000));
                const total = accumulatedSecondsRef.current + wallClockSec;
                setPunchState((prev)=>prev.elapsedSeconds !== total ? {
                        ...prev,
                        elapsedSeconds: total
                    } : prev);
            }
        };
        // Immediate sync
        syncElapsed();
        const interval = setInterval(syncElapsed, 1000);
        // Event listeners to instantly resync without waiting for tick when switching back from other apps
        const handleFocus = ()=>syncElapsed();
        const handleVisibility = ()=>{
            if (document.visibilityState === "visible") syncElapsed();
        };
        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleFocus);
        document.addEventListener("visibilitychange", handleVisibility);
        return ()=>{
            clearInterval(interval);
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleFocus);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [
        punchState.punchedIn,
        punchState.punchedOut
    ]);
    // Dynamic screenshot interval state synced across HRM and settings
    const [screenshotIntervalMins, setScreenshotIntervalMins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 2;
    });
    // Listen for policy updates dynamically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePolicyUpdate = (e)=>{
            if (e?.detail?.intervalMinutes) {
                setScreenshotIntervalMins(Number(e.detail.intervalMinutes));
            }
        };
        window.addEventListener("tracker-policy-updated", handlePolicyUpdate);
        return ()=>window.removeEventListener("tracker-policy-updated", handlePolicyUpdate);
    }, []);
    // Top-Level Background Workstation Screenshot & Telemetry Engine (Runs whenever clocked in across any HRM tab or other apps)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!punchState.punchedIn || punchState.punchedOut) return;
        const targetEmpId = currentEmployee?.id;
        if (!targetEmpId) return;
        const electronTracker = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if (!electronTracker?.captureScreenshot) return;
        const intervalMs = Math.max(30000, screenshotIntervalMins * 60 * 1000);
        const captureAndUpload = async ()=>{
            try {
                const dataUrl = await electronTracker.captureScreenshot();
                if (dataUrl && dataUrl.length > 100) {
                    let winInfo = null;
                    if (electronTracker.getActiveWindow) {
                        winInfo = await electronTracker.getActiveWindow().catch(()=>null);
                    }
                    const uploadRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].uploadTrackerScreenshot({
                        employeeId: targetEmpId,
                        sessionId: trackerSessionIdRef.current,
                        windowTitle: winInfo?.windowTitle || (typeof document !== "undefined" ? document.title : "Workstation Screen"),
                        activeApp: winInfo?.appName || winInfo?.processName || "Desktop Application",
                        imageBase64: dataUrl,
                        isBlurred: false,
                        isManual: false
                    });
                    if (uploadRes?.success && "undefined" !== "undefined") //TURBOPACK unreachable
                    ;
                    if (winInfo?.appName || winInfo?.processName) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].recordAppUsage({
                            employeeId: targetEmpId,
                            sessionId: trackerSessionIdRef.current,
                            application: winInfo.appName || winInfo.processName,
                            processName: winInfo.processName || null,
                            durationSeconds: Math.round(intervalMs / 1000)
                        }).catch(()=>{});
                    }
                }
            } catch (err) {
                console.warn("[HRM Top-Level Tracker] Screenshot capture warning:", err);
            }
        };
        // Initial capture after 2.5 seconds only once per clock-in session
        let initialTimer = null;
        if (!hasInitialCapturedRef.current) {
            initialTimer = setTimeout(()=>{
                hasInitialCapturedRef.current = true;
                captureAndUpload();
            }, 2500);
        }
        // Periodic capture dynamically respecting the user's selected gap (e.g. 1m, 5m)
        const periodicTimer = setInterval(captureAndUpload, intervalMs);
        return ()=>{
            if (initialTimer) clearTimeout(initialTimer);
            clearInterval(periodicTimer);
        };
    }, [
        punchState.punchedIn,
        punchState.punchedOut,
        currentEmployee?.id,
        screenshotIntervalMins
    ]);
    // Format seconds to HH:MM:SS
    const formatTimer = (totalSeconds)=>{
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    // Punch actions
    const handlePunchIn = async (notes)=>{
        const cleanNotes = typeof notes === "string" ? notes : undefined;
        setIsPunching(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].clockIn({
                employeeId: currentEmployee?.id,
                workLocation: punchState.workLocation,
                notes: cleanNotes
            });
            const totalWorkedHours = Number(res.attendance?.workingHours || 0);
            const accumulatedSec = Math.round(totalWorkedHours * 3600);
            sessionStartTimestampRef.current = Date.now();
            accumulatedSecondsRef.current = accumulatedSec;
            setPunchState((prev)=>({
                    ...prev,
                    punchedIn: true,
                    punchedOut: false,
                    punchInTime: res.attendance?.punchInTime || prev.punchInTime || new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    punchOutTime: null,
                    elapsedSeconds: accumulatedSec
                }));
            const isSundayOrWeekend = new Date().getDay() === 0 || new Date().getDay() === 6;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(isSundayOrWeekend ? "Weekend / Duty Punch recorded! Awaiting Admin/Officer Comp-Off or Bonus approval." : res.attendance?.checkOut === null && totalWorkedHours > 0 ? "Shift Resumed! Clocked in again." : "Punch In recorded successfully!");
            loadData();
        } catch (err) {
            console.error("[HRM clockIn] Error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err?.response?.data?.message || err?.message || "Failed to clock in");
        } finally{
            setIsPunching(false);
        }
    };
    const handlePunchOut = async ()=>{
        setIsPunching(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].clockOut({
                employeeId: currentEmployee?.id
            });
            const totalWorkedHours = Number(res.attendance?.workingHours || 0);
            const accumulatedSec = Math.round(totalWorkedHours * 3600);
            sessionStartTimestampRef.current = null;
            accumulatedSecondsRef.current = accumulatedSec;
            hasInitialCapturedRef.current = false;
            setPunchState((prev)=>({
                    ...prev,
                    punchedOut: true,
                    punchOutTime: res.attendance?.punchOutTime || new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    elapsedSeconds: accumulatedSec
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Punch Out recorded successfully!");
            loadData();
        } catch (err) {
            console.error("[HRM clockOut] Error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err?.response?.data?.message || err?.message || "Failed to clock out");
        } finally{
            setIsPunching(false);
        }
    };
    const handleImportAllCrmUsers = async ()=>{
        setIsImportingCrm(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hrmApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrmApi"].importCrmUsers();
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Successfully imported ${res.importedCount} CRM users into HRM!`);
                setPendingCrmUsers([]);
                loadData();
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err?.response?.data?.message || "Failed to import CRM users");
        } finally{
            setIsImportingCrm(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$layout$2f$HrmSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HrmSidebar"], {
                activeTab: activeTab,
                onTabSelect: handleTabSelect,
                isMobileSidebarOpen: isMobileSidebarOpen,
                onCloseMobileSidebar: ()=>setIsMobileSidebarOpen(false),
                onBack: onBack,
                totalEmployeesCount: employees.length || dashboardData.totalEmployees,
                pendingLeavesCount: dashboardData.pendingLeaves,
                userRole: userRole,
                onRoleChange: handleRoleChange,
                canAccessAdmin: canAccessAdmin,
                punchState: punchState,
                isPunching: isPunching,
                onPunchIn: handlePunchIn,
                onPunchOut: handlePunchOut,
                formatTimer: formatTimer
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                lineNumber: 794,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$layout$2f$HrmHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HrmHeader"], {
                        activeTab: activeTab,
                        onOpenMobileSidebar: ()=>setIsMobileSidebarOpen(true),
                        onBack: onBack,
                        isLoading: isLoading,
                        onRefresh: loadData,
                        onAddEmployee: canAccessAdmin ? ()=>setIsAddEmployeeOpen(true) : undefined,
                        onApplyLeave: ()=>setIsApplyLeaveOpen(true),
                        onAddGoal: canAccessAdmin ? ()=>setIsAddGoalOpen(true) : undefined,
                        branches: branches,
                        selectedBranchId: selectedBranchId,
                        onSelectBranch: setSelectedBranchId,
                        userRole: userRole,
                        onRoleChange: canAccessAdmin ? handleRoleChange : undefined,
                        canAccessAdmin: canAccessAdmin,
                        subscription: subscription
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                        lineNumber: 815,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-4 sm:p-6 overflow-y-auto space-y-6 pb-[calc(5.5rem+env(safe-area-inset-bottom,20px))] md:pb-8",
                        children: [
                            userRole !== "Employee" && canAccessAdmin && pendingCrmUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs animate-in fade-in duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-2",
                                                        children: [
                                                            "Found ",
                                                            pendingCrmUsers.length,
                                                            " existing CRM team members",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] px-2 py-0.5 rounded-full bg-indigo-500 text-white font-mono",
                                                                children: "Auto-Detect"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                                        children: "Import them directly into HRM with auto-generated employee codes and Central Single Sign-On linking. Zero data loss."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                        lineNumber: 850,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                lineNumber: 843,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                        lineNumber: 839,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 self-end sm:self-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleImportAllCrmUsers,
                                            disabled: isImportingCrm,
                                            className: "px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                                    lineNumber: 861,
                                                    columnNumber: 19
                                                }, this),
                                                isImportingCrm ? "Importing..." : "Import All into HRM"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                            lineNumber: 856,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                        lineNumber: 855,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this),
                            activeTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$DashboardScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardScreen"], {
                                stats: dashboardData,
                                departments: departments,
                                roles: roles,
                                onNavigateTab: handleTabSelect,
                                userRole: userRole,
                                onRoleChange: canAccessAdmin ? handleRoleChange : undefined,
                                punchState: punchState,
                                onPunchIn: handlePunchIn,
                                onPunchOut: handlePunchOut,
                                formatTimer: formatTimer,
                                leaveBalances: leaveBalances,
                                payslips: payslips,
                                attendanceList: attendanceList,
                                holidays: holidays,
                                loans: loans
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 870,
                                columnNumber: 13
                            }, this),
                            (activeTab === "employees" || activeTab === "employee-directory") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$EmployeesScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmployeesScreen"], {
                                employees: employees,
                                departments: departments,
                                designations: designations,
                                roles: roles,
                                branches: branches,
                                selectedBranchId: selectedBranchId,
                                onSelectBranch: setSelectedBranchId,
                                onAddEmployee: ()=>setIsAddEmployeeOpen(true),
                                onRefresh: loadData,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin,
                                onSelectEmployee: (emp, tab)=>{
                                    setSelectedEmployee(emp);
                                    if (tab) setEmployeeDetailTab(tab);
                                },
                                onsetActiveTab: (tab)=>{
                                    if (tab) setEmployeeDetailTab(tab);
                                    if (!selectedEmployee && employees.length > 0) {
                                        setSelectedEmployee(employees[0]);
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 892,
                                columnNumber: 13
                            }, this),
                            activeTab === "attendance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$AttendanceScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttendanceScreen"], {
                                punchState: punchState,
                                onPunchIn: handlePunchIn,
                                onPunchOut: handlePunchOut,
                                formatTimer: formatTimer,
                                attendanceList: attendanceList,
                                employees: employees,
                                departments: departments,
                                branches: branches,
                                shifts: shifts,
                                roles: roles,
                                holidays: holidays,
                                onRefresh: loadData,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 919,
                                columnNumber: 13
                            }, this),
                            activeTab === "tracker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$EmployeeTrackerScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmployeeTrackerScreen"], {
                                employees: employees,
                                departments: departments,
                                branches: branches,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this),
                            activeTab === "leaves" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$LeavesScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeavesScreen"], {
                                leaveRequests: leaveRequests,
                                leaveBalances: leaveBalances,
                                employees: employees,
                                branches: branches,
                                departments: departments,
                                roles: roles,
                                onApplyLeave: ()=>setIsApplyLeaveOpen(true),
                                onRefresh: loadData,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 950,
                                columnNumber: 13
                            }, this),
                            activeTab === "holidays" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$HolidaysScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HolidaysScreen"], {
                                holidays: holidays,
                                branches: branches,
                                roles: roles,
                                employees: employees,
                                onRefresh: loadData,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 966,
                                columnNumber: 13
                            }, this),
                            activeTab === "payroll" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$PayrollScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PayrollScreen"], {
                                payslips: payslips,
                                employees: employees,
                                branches: branches,
                                roles: roles,
                                onRefresh: loadData,
                                onDownloadPayslip: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Downloaded payslip ${id}`),
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 979,
                                columnNumber: 13
                            }, this),
                            activeTab === "loans" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$LoansScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoansScreen"], {
                                employees: employees,
                                branches: branches,
                                departments: departments,
                                roles: roles,
                                onRefresh: loadData,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 993,
                                columnNumber: 13
                            }, this),
                            activeTab === "expenses" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$ExpensesScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExpensesScreen"], {
                                employees: employees,
                                departments: departments,
                                branches: branches,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 1006,
                                columnNumber: 13
                            }, this),
                            activeTab === "assets" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$AssetsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AssetsScreen"], {
                                employees: employees,
                                departments: departments,
                                branches: branches,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 1017,
                                columnNumber: 13
                            }, this),
                            activeTab === "exit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$ExitScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExitScreen"], {
                                employees: employees,
                                departments: departments,
                                branches: branches,
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 1028,
                                columnNumber: 13
                            }, this),
                            activeTab === "performance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$PerformanceScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerformanceScreen"], {
                                goals: goals,
                                onAddGoal: ()=>setIsAddGoalOpen(true),
                                userRole: userRole,
                                canAccessAdmin: canAccessAdmin
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 1039,
                                columnNumber: 13
                            }, this),
                            (activeTab === "settings" || activeTab === "shifts") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsScreen"], {
                                departments: departments,
                                roles: roles,
                                branches: branches,
                                shifts: shifts,
                                designations: designations,
                                employees: employees,
                                onRefresh: loadData,
                                onRefreshRoles: loadData,
                                onRefreshBranches: loadData,
                                onRefreshShifts: loadData,
                                onRefreshDesignations: loadData
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 1049,
                                columnNumber: 13
                            }, this),
                            activeTab === "subscription" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$SubscriptionScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionScreen"], {
                                onRefresh: loadData,
                                canAccessAdmin: canAccessAdmin,
                                propSubscription: subscription
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                                lineNumber: 1066,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$modals$2f$AddEmployeeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddEmployeeModal"], {
                isOpen: isAddEmployeeOpen,
                onClose: ()=>setIsAddEmployeeOpen(false),
                onSuccess: handleEmployeeCreated,
                branches: branches,
                departments: departments,
                roles: roles,
                designations: designations,
                shifts: shifts,
                pendingCrmUsers: pendingCrmUsers,
                onRefreshDesignations: loadData,
                existingEmployees: employees
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                lineNumber: 1076,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$modals$2f$ApplyLeaveModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApplyLeaveModal"], {
                isOpen: isApplyLeaveOpen,
                onClose: ()=>setIsApplyLeaveOpen(false),
                onSuccess: loadData,
                leaveTypes: leaveTypes
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                lineNumber: 1090,
                columnNumber: 7
            }, this),
            selectedEmployee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$screens$2f$EmployeeDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmployeeDetailModal"], {
                employee: selectedEmployee,
                departments: departments,
                designations: designations,
                roles: roles,
                branches: branches,
                shifts: shifts,
                allEmployees: employees,
                userRole: userRole,
                canAccessAdmin: canAccessAdmin,
                initialTab: employeeDetailTab,
                onClose: ()=>setSelectedEmployee(null),
                onUpdate: (updatedEmp)=>{
                    setSelectedEmployee(updatedEmp);
                    loadData();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                lineNumber: 1099,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$hrm$2f$components$2f$layout$2f$HrmBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HrmBottomNav"], {
                activeTab: activeTab,
                onTabSelect: handleTabSelect,
                onOpenMenu: ()=>setIsMobileSidebarOpen(true),
                totalEmployeesCount: employees.length || dashboardData.totalEmployees,
                pendingLeavesCount: dashboardData.pendingLeaves
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
                lineNumber: 1119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/hrm/HrmScreen.tsx",
        lineNumber: 792,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_user_components_modules_hrm_d86dfc8d._.js.map