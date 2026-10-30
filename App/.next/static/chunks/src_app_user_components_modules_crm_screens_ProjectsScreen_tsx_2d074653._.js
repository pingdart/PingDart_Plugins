(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECT_ROLES",
    ()=>PROJECT_ROLES,
    "PROJECT_ROLE_BADGES",
    ()=>PROJECT_ROLE_BADGES,
    "ProjectsScreen",
    ()=>ProjectsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Edit01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserMultiple02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserMultiple02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Task01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Task01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Wallet01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Menu01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Grid02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Clock01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Activity01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Activity01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$RecordPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/RecordPaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/ViewInvoiceModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
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
const PROJECT_ROLES = [
    "Owner",
    "Manager",
    "Contributor",
    "Viewer"
];
const PROJECT_ROLE_BADGES = {
    Owner: {
        label: "Project Owner",
        badgeCls: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
        borderCls: "border-purple-500",
        desc: "Full administrative ownership, budget approval & team assignments"
    },
    Manager: {
        label: "Manager",
        badgeCls: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
        borderCls: "border-indigo-500",
        desc: "Sprint management, milestones, tasks assignment & deliverables"
    },
    Contributor: {
        label: "Contributor",
        badgeCls: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
        borderCls: "border-blue-500",
        desc: "Active execution, task status updates, code & delivery tracking"
    },
    Viewer: {
        label: "Viewer",
        badgeCls: "bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700",
        borderCls: "border-slate-500",
        desc: "Read-only audit access to status, invoices and project milestones"
    }
};
const COMMON_PROJECT_ROLES = [
    "Lead Frontend Engineer",
    "Frontend Engineer",
    "Lead Backend Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
    "UI/UX Designer",
    "Product Designer",
    "Project Manager",
    "Technical Lead",
    "Solutions Architect",
    "DevOps Engineer",
    "QA & Test Engineer",
    "Mobile App Engineer",
    "Cloud Engineer",
    "Scrum Master",
    "Database Engineer",
    "Security Specialist",
    "Client Delivery Lead"
];
const SUGGESTED_RESPONSIBILITIES = [
    "Frontend UI/UX Implementation",
    "Backend API & Database Architecture",
    "Sprint Delivery & Milestones",
    "System Architecture & Code Review",
    "Client Demos & Status Updates",
    "QA Testing & Bug Fixes",
    "DevOps, CI/CD & Deployment",
    "Security & SLA Compliance",
    "Mobile App Features"
];
const STATUS_LABEL = {
    planning: "Planning",
    in_progress: "In Progress",
    on_hold: "On Hold",
    completed: "Completed",
    cancelled: "Cancelled"
};
const STATUS_PILL = {
    in_progress: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    planning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    on_hold: "bg-slate-500/10 text-slate-400 border-slate-500/30",
    cancelled: "bg-rose-500/10 text-rose-400 border-rose-500/30"
};
const RAG = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    yellow: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    red: "bg-rose-500/10 text-rose-400 border-rose-500/30"
};
const projectLocalData = {};
function getLocalData(pid) {
    if (!projectLocalData[pid]) {
        try {
            const saved = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(`pingdart_prj_${pid}`) : "TURBOPACK unreachable";
            if (saved) {
                projectLocalData[pid] = JSON.parse(saved);
            } else {
                projectLocalData[pid] = {
                    tasks: [],
                    team: [],
                    expenses: [],
                    phases: [],
                    milestones: [],
                    activities: []
                };
            }
        } catch (e) {
            projectLocalData[pid] = {
                tasks: [],
                team: [],
                expenses: [],
                phases: [],
                milestones: [],
                activities: []
            };
        }
    }
    if (!projectLocalData[pid].milestones || projectLocalData[pid].milestones.length === 0) {
        projectLocalData[pid].milestones = [
            {
                id: `ms-init-1`,
                title: "Sprint 1: Architecture, Core Schemas & Workspace Onboarding",
                startDate: "2026-03-01",
                dueDate: "2026-03-15",
                status: "completed",
                tasksCount: 6,
                completedTasksCount: 6
            },
            {
                id: `ms-init-2`,
                title: "Sprint 2: Module Features & Integrations",
                startDate: "2026-03-16",
                dueDate: "2026-03-31",
                status: "in_progress",
                tasksCount: 10,
                completedTasksCount: 7
            },
            {
                id: `ms-init-3`,
                title: "Sprint 3: Enterprise QA, Security Audits & Client UAT",
                startDate: "2026-04-01",
                dueDate: "2026-04-18",
                status: "not_started",
                tasksCount: 5,
                completedTasksCount: 0
            }
        ];
    }
    if (!projectLocalData[pid].activities || projectLocalData[pid].activities.length === 0) {
        projectLocalData[pid].activities = [
            {
                id: "act-init-1",
                type: "added_member",
                description: "Assigned Project Owner to lead enterprise delivery",
                timestamp: new Date(Date.now() - 86400000 * 5).toISOString(),
                actor: "Workspace Admin"
            },
            {
                id: "act-init-2",
                type: "changed_role",
                description: "Assigned Technical Lead as Manager for Sprint Execution",
                timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
                actor: "Project Owner"
            },
            {
                id: "act-init-3",
                type: "updated_responsibilities",
                description: "Established core sprint deliverables and SLA milestones",
                timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
                actor: "Manager"
            }
        ];
    }
    return projectLocalData[pid];
}
function saveLocalData(pid) {
    try {
        if ("object" !== "undefined" && projectLocalData[pid]) {
            localStorage.setItem(`pingdart_prj_${pid}`, JSON.stringify(projectLocalData[pid]));
        }
    } catch (e) {}
}
function logPrjActivity(pid, type, description) {
    const d = getLocalData(pid);
    if (!d.activities) d.activities = [];
    d.activities.unshift({
        id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        type,
        description,
        timestamp: new Date().toISOString(),
        actor: "Admin"
    });
    saveLocalData(pid);
}
const DETAIL_TABS = [
    {
        key: "overview",
        label: "Overview"
    },
    {
        key: "timeline",
        label: "Timeline & Milestones"
    },
    {
        key: "team",
        label: "Team & Roles"
    },
    {
        key: "tasks",
        label: "Tasks"
    },
    {
        key: "phases",
        label: "Phases"
    },
    {
        key: "invoices",
        label: "Invoices"
    },
    {
        key: "expenses",
        label: "Expenses"
    },
    {
        key: "activity",
        label: "Activity History"
    },
    {
        key: "ai",
        label: "✦ AI"
    }
];
function ProjectsScreen({ projects, invoices = [], teamMembers = [], onOpenAddModal, onUpdateProject, onDeleteProject, isClientViewOnly = false, clientName, clientId, onRecordPayment }) {
    _s();
    const { formatAmount: fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailTab, setDetailTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [addTaskOpen, setAddTaskOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addPhaseOpen, setAddPhaseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addMemberOpen, setAddMemberOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addExpenseOpen, setAddExpenseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [taskForm, setTaskForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        assignee: "",
        dueDate: "",
        priority: "medium",
        status: "todo"
    });
    const [phaseForm, setPhaseForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        startDate: "",
        endDate: ""
    });
    const [memberForm, setMemberForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        role: "",
        projectRole: "Contributor",
        responsibilities: "",
        avatarUrl: "",
        pingdartId: "",
        department: ""
    });
    const [memberDropdownOpen, setMemberDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roleDropdownOpen, setRoleDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [apiUsers, setApiUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearchingUsers, setIsSearchingUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRespTags, setSelectedRespTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customRespInput, setCustomRespInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingMemberId, setEditingMemberId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editRespTags, setEditRespTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editCustomRespInput, setEditCustomRespInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [addMilestoneOpen, setAddMilestoneOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [milestoneForm, setMilestoneForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        startDate: "",
        dueDate: "",
        status: "in_progress",
        tasksCount: 4
    });
    const [expenseForm, setExpenseForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        description: "",
        amount: "",
        date: "",
        category: "Labor"
    });
    const [editOpen, setEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentModalInvoice, setPaymentModalInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewInvoiceModalInvoice, setViewInvoiceModalInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isViewInvoiceModalOpen, setIsViewInvoiceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, forceRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Live search users from PingDart chat / workspace API
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ProjectsScreen.useEffect": ()=>{
            const q = memberForm.name.trim();
            if (!q || q.length < 2) {
                setApiUsers([]);
                setIsSearchingUsers(false);
                return;
            }
            const t = setTimeout({
                "ProjectsScreen.useEffect.t": async ()=>{
                    setIsSearchingUsers(true);
                    try {
                        var _res_data;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].searchUsers(q);
                        const users = (res === null || res === void 0 ? void 0 : res.users) || (res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.users) || [];
                        setApiUsers(users.map({
                            "ProjectsScreen.useEffect.t": (u)=>{
                                const pingId = u.pingId || u.pingdartId || (u.email ? u.email.split("@")[0] : String(u.id));
                                return {
                                    id: String(u.id),
                                    name: u.name || u.fullName || u.username || `User #${u.id}`,
                                    email: u.email || u.emailDisplay || "",
                                    avatar: u.avatar || null,
                                    pingdartId: pingId,
                                    role: u.role || u.title || "Team Member",
                                    department: u.department || ""
                                };
                            }
                        }["ProjectsScreen.useEffect.t"]));
                    } catch (e) {
                        setApiUsers([]);
                    } finally{
                        setIsSearchingUsers(false);
                    }
                }
            }["ProjectsScreen.useEffect.t"], 280);
            return ({
                "ProjectsScreen.useEffect": ()=>clearTimeout(t)
            })["ProjectsScreen.useEffect"];
        }
    }["ProjectsScreen.useEffect"], [
        memberForm.name
    ]);
    // Combined autocomplete matching members (from CRM team and PingDart users)
    const matchingMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsScreen.useMemo[matchingMembers]": ()=>{
            const q = memberForm.name.toLowerCase().trim();
            const seen = new Set();
            const list = [];
            // 1. From existing workspace CRM team members
            (teamMembers || []).forEach({
                "ProjectsScreen.useMemo[matchingMembers]": (m)=>{
                    if (!q || m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.title && m.title.toLowerCase().includes(q) || m.role && m.role.toLowerCase().includes(q) || m.pingdartId && m.pingdartId.toLowerCase().includes(q) || m.department && m.department.toLowerCase().includes(q)) {
                        const key = (m.email || m.pingdartId || m.name).toLowerCase();
                        seen.add(key);
                        list.push({
                            id: String(m.id),
                            name: m.name,
                            role: m.title || m.role || "Team Member",
                            avatarUrl: m.avatarUrl,
                            pingdartId: m.pingdartId,
                            department: m.department,
                            email: m.email,
                            initials: m.initials || m.name.slice(0, 2).toUpperCase(),
                            source: "CRM Team"
                        });
                    }
                }
            }["ProjectsScreen.useMemo[matchingMembers]"]);
            // 2. From PingDart workspace users API
            apiUsers.forEach({
                "ProjectsScreen.useMemo[matchingMembers]": (u)=>{
                    const key = (u.email || u.pingdartId || u.name).toLowerCase();
                    if (!seen.has(key) && !seen.has(String(u.id))) {
                        seen.add(key);
                        list.push({
                            id: String(u.id),
                            name: u.name,
                            role: u.role || "Team Member",
                            avatarUrl: u.avatar || undefined,
                            pingdartId: u.pingdartId,
                            department: u.department,
                            email: u.email,
                            initials: u.name.split(" ").map({
                                "ProjectsScreen.useMemo[matchingMembers]": (w)=>w[0]
                            }["ProjectsScreen.useMemo[matchingMembers]"]).join("").toUpperCase().slice(0, 2) || "U",
                            source: "PingDart User"
                        });
                    }
                }
            }["ProjectsScreen.useMemo[matchingMembers]"]);
            return list.slice(0, 8);
        }
    }["ProjectsScreen.useMemo[matchingMembers]"], [
        teamMembers,
        apiUsers,
        memberForm.name
    ]);
    // Autocomplete matching roles
    const matchingRoles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsScreen.useMemo[matchingRoles]": ()=>{
            const q = memberForm.role.toLowerCase().trim();
            if (!q) return COMMON_PROJECT_ROLES.slice(0, 8);
            return COMMON_PROJECT_ROLES.filter({
                "ProjectsScreen.useMemo[matchingRoles]": (r)=>r.toLowerCase().includes(q)
            }["ProjectsScreen.useMemo[matchingRoles]"]).slice(0, 8);
        }
    }["ProjectsScreen.useMemo[matchingRoles]"], [
        memberForm.role
    ]);
    const selectTeamMember = (m)=>{
        setMemberForm((prev)=>({
                ...prev,
                name: m.name,
                role: m.role || "Team Member",
                avatarUrl: m.avatarUrl || "",
                pingdartId: m.pingdartId || "",
                department: m.department || ""
            }));
        setMemberDropdownOpen(false);
    };
    const selectRole = (roleName)=>{
        setMemberForm((prev)=>({
                ...prev,
                role: roleName
            }));
        setRoleDropdownOpen(false);
    };
    // Responsibility tag helpers for Add Form
    const addRespTag = (tag)=>{
        const trimmed = tag.trim();
        if (!trimmed) return;
        if (!selectedRespTags.includes(trimmed)) {
            setSelectedRespTags((prev)=>[
                    ...prev,
                    trimmed
                ]);
        }
    };
    const removeRespTag = (tag)=>{
        setSelectedRespTags((prev)=>prev.filter((t)=>t !== tag));
    };
    // Responsibility edit helpers for existing member card
    const openEditResponsibilities = (m)=>{
        setEditingMemberId(m.id);
        const existing = m.responsibilities ? m.responsibilities.split(/[,;\n•]+/).map((s)=>s.trim()).filter(Boolean) : [];
        setEditRespTags(existing);
        setEditCustomRespInput("");
    };
    const saveEditResponsibilities = (memberId)=>{
        if (!selectedId) return;
        const d = getLocalData(selectedId);
        const target = d.team.find((m)=>m.id === memberId);
        if (target) {
            target.responsibilities = editRespTags.length > 0 ? editRespTags.join(", ") : undefined;
            logPrjActivity(selectedId, "updated_responsibilities", `Updated responsibilities for ${target.name}: ${target.responsibilities || "None"}`);
            saveLocalData(selectedId);
            forceRefresh((n)=>n + 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Responsibilities updated");
        }
        setEditingMemberId(null);
    };
    // Auto reset page when search or status filter changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ProjectsScreen.useEffect": ()=>{
            setPage(1);
        }
    }["ProjectsScreen.useEffect"], [
        search,
        statusFilter
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsScreen.useMemo[filtered]": ()=>{
            const q = search.toLowerCase();
            return projects.filter({
                "ProjectsScreen.useMemo[filtered]": (p)=>{
                    if (isClientViewOnly && clientName) {
                        var _p_clientName;
                        const matchesClient = ((_p_clientName = p.clientName) === null || _p_clientName === void 0 ? void 0 : _p_clientName.toLowerCase()) === clientName.toLowerCase() || String(p.clientId) === String(clientId);
                        if (!matchesClient) return false;
                    }
                    const matchQ = !q || p.name.toLowerCase().includes(q) || (p.code || "").toLowerCase().includes(q) || (p.clientName || "").toLowerCase().includes(q) || (p.managerName || "").toLowerCase().includes(q);
                    const matchStatus = statusFilter === "all" || p.status === statusFilter;
                    return matchQ && matchStatus;
                }
            }["ProjectsScreen.useMemo[filtered]"]);
        }
    }["ProjectsScreen.useMemo[filtered]"], [
        projects,
        search,
        statusFilter,
        isClientViewOnly,
        clientName,
        clientId
    ]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
    const selected = selectedId ? projects.find((p)=>String(p.id) === selectedId) : null;
    const openProject = (p)=>{
        setSelectedId(String(p.id));
        setDetailTab("overview");
    };
    const closeDetail = ()=>{
        setSelectedId(null);
        setDeleteConfirm(null);
        setEditOpen(false);
    };
    const openEdit = ()=>{
        if (!selected) return;
        setEditForm({
            name: selected.name,
            code: selected.code,
            clientName: selected.clientName,
            status: selected.status,
            priority: selected.priority,
            budget: selected.budget,
            targetEndDate: selected.targetEndDate,
            managerName: selected.managerName,
            leadArchitectName: selected.leadArchitectName
        });
        setEditOpen(true);
    };
    const saveEdit = ()=>{
        if (!selected) return;
        onUpdateProject === null || onUpdateProject === void 0 ? void 0 : onUpdateProject(selected.id, editForm);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project updated");
        setEditOpen(false);
    };
    const confirmDelete = ()=>{
        if (!selected) return;
        onDeleteProject === null || onDeleteProject === void 0 ? void 0 : onDeleteProject(selected.id);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project removed");
        closeDetail();
    };
    const localData = selectedId ? getLocalData(selectedId) : {
        tasks: [],
        team: [],
        expenses: [],
        phases: [],
        milestones: [],
        activities: []
    };
    const addTask = ()=>{
        if (!selectedId || !taskForm.title.trim()) return;
        const newTask = {
            id: `t-${Date.now()}`,
            title: taskForm.title.trim(),
            assignee: taskForm.assignee.trim() || (isClientViewOnly ? "Project Team" : "Unassigned"),
            dueDate: taskForm.dueDate,
            priority: taskForm.priority,
            status: taskForm.status
        };
        getLocalData(selectedId).tasks.unshift(newTask);
        saveLocalData(selectedId);
        setTaskForm({
            title: "",
            assignee: "",
            dueDate: "",
            priority: "medium",
            status: "todo"
        });
        setAddTaskOpen(false);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isClientViewOnly ? "Task request submitted to delivery squad!" : "Task added");
    };
    const removeTask = (tid)=>{
        if (!selectedId) return;
        const d = getLocalData(selectedId);
        d.tasks = d.tasks.filter((t)=>t.id !== tid);
        saveLocalData(selectedId);
        forceRefresh((n)=>n + 1);
    };
    const addPhase = ()=>{
        if (!selectedId || !phaseForm.name.trim()) return;
        getLocalData(selectedId).phases.push({
            id: `ph-${Date.now()}`,
            pct: 0,
            status: "planning",
            ...phaseForm
        });
        saveLocalData(selectedId);
        setPhaseForm({
            name: "",
            startDate: "",
            endDate: ""
        });
        setAddPhaseOpen(false);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Phase added");
    };
    const addMember = ()=>{
        if (!selectedId || !memberForm.name.trim()) return;
        const initials = memberForm.name.split(" ").map((w)=>w[0]).join("").toUpperCase().slice(0, 2);
        const allTags = [
            ...selectedRespTags
        ];
        if (customRespInput.trim() && !allTags.includes(customRespInput.trim())) {
            allTags.push(customRespInput.trim());
        }
        const finalResp = allTags.length > 0 ? allTags.join(", ") : memberForm.responsibilities.trim();
        const newMember = {
            id: `m-${Date.now()}`,
            name: memberForm.name.trim(),
            role: memberForm.role.trim() || "Team Member",
            projectRole: memberForm.projectRole || "Contributor",
            initials,
            avatarUrl: memberForm.avatarUrl || undefined,
            pingdartId: memberForm.pingdartId || undefined,
            department: memberForm.department || undefined,
            responsibilities: finalResp || undefined
        };
        getLocalData(selectedId).team.push(newMember);
        logPrjActivity(selectedId, "added_member", `Added ${newMember.name} as ${newMember.projectRole} (${newMember.role})`);
        saveLocalData(selectedId);
        setMemberForm({
            name: "",
            role: "",
            projectRole: "Contributor",
            responsibilities: "",
            avatarUrl: "",
            pingdartId: "",
            department: ""
        });
        setSelectedRespTags([]);
        setCustomRespInput("");
        setAddMemberOpen(false);
        setMemberDropdownOpen(false);
        setRoleDropdownOpen(false);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Member added to project team");
    };
    const changeMemberProjectRole = (memberId, newRole)=>{
        if (!selectedId) return;
        const d = getLocalData(selectedId);
        const target = d.team.find((m)=>m.id === memberId);
        if (target) {
            const oldRole = target.projectRole || "Contributor";
            target.projectRole = newRole;
            logPrjActivity(selectedId, "changed_role", `Changed role of ${target.name} from ${oldRole} to ${newRole}`);
            saveLocalData(selectedId);
            forceRefresh((n)=>n + 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Role updated to ${newRole}`);
        }
    };
    const removeMember = (mid)=>{
        if (!selectedId) return;
        const d = getLocalData(selectedId);
        const target = d.team.find((m)=>m.id === mid);
        d.team = d.team.filter((m)=>m.id !== mid);
        if (target) {
            logPrjActivity(selectedId, "removed_member", `Removed ${target.name} from project team`);
        }
        saveLocalData(selectedId);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Member removed from project team");
    };
    const addMilestone = ()=>{
        if (!selectedId || !milestoneForm.title.trim()) return;
        const d = getLocalData(selectedId);
        if (!d.milestones) d.milestones = [];
        const newM = {
            id: `ms-${Date.now()}`,
            title: milestoneForm.title.trim(),
            startDate: milestoneForm.startDate || new Date().toISOString().split("T")[0],
            dueDate: milestoneForm.dueDate || "",
            status: milestoneForm.status,
            tasksCount: Number(milestoneForm.tasksCount) || 1,
            completedTasksCount: milestoneForm.status === "completed" ? Number(milestoneForm.tasksCount) || 1 : 0
        };
        d.milestones.push(newM);
        logPrjActivity(selectedId, "updated_responsibilities", `Created sprint milestone: "${newM.title}" (${newM.status})`);
        saveLocalData(selectedId);
        setMilestoneForm({
            title: "",
            startDate: "",
            dueDate: "",
            status: "in_progress",
            tasksCount: 4
        });
        setAddMilestoneOpen(false);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sprint milestone created");
    };
    const updateMilestoneStatus = (mid, status)=>{
        if (!selectedId) return;
        const d = getLocalData(selectedId);
        const m = (d.milestones || []).find((x)=>x.id === mid);
        if (m) {
            m.status = status;
            if (status === "completed") {
                m.completedTasksCount = m.tasksCount || 1;
            }
            logPrjActivity(selectedId, "updated_responsibilities", `Milestone "${m.title}" marked as ${status}`);
            saveLocalData(selectedId);
            forceRefresh((n)=>n + 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Milestone status updated to ${status}`);
        }
    };
    const removeMilestone = (mid)=>{
        if (!selectedId) return;
        const d = getLocalData(selectedId);
        const m = (d.milestones || []).find((x)=>x.id === mid);
        d.milestones = (d.milestones || []).filter((x)=>x.id !== mid);
        if (m) {
            logPrjActivity(selectedId, "updated_responsibilities", `Removed sprint milestone: "${m.title}"`);
        }
        saveLocalData(selectedId);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Milestone removed");
    };
    const addExpense = ()=>{
        if (!selectedId || !expenseForm.description.trim() || !expenseForm.amount) return;
        getLocalData(selectedId).expenses.push({
            id: `ex-${Date.now()}`,
            ...expenseForm,
            amount: Number(expenseForm.amount)
        });
        saveLocalData(selectedId);
        setExpenseForm({
            description: "",
            amount: "",
            date: "",
            category: "Labor"
        });
        setAddExpenseOpen(false);
        forceRefresh((n)=>n + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Expense recorded");
    };
    const projectInvoices = selected ? invoices.filter((inv)=>inv.projectId && String(inv.projectId) === String(selected.id) || inv.projectName && selected.name && inv.projectName.toLowerCase() === selected.name.toLowerCase() || inv.clientName && selected.clientName && inv.clientName.toLowerCase() === selected.clientName.toLowerCase() || inv.clientId && String(inv.clientId) === String(selected.clientId)) : [];
    const totalBudget = projects.reduce((s, p)=>s + (Number(p.budget) || 0), 0);
    const totalSpent = projects.reduce((s, p)=>s + (Number(p.spent) || 0), 0);
    const inProgress = projects.filter((p)=>p.status === "in_progress").length;
    const cls = {
        input: "w-full h-11 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",
        select: "w-full h-11 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500",
        primary: "h-11 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-md",
        ghost: "h-11 px-4 rounded-[10px] border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
    };
    // ─── DETAIL PANEL ───────────────────────────────────────────
    if (selected) {
        const pct = selected.budget > 0 ? Math.min(100, Math.round(selected.spent / selected.budget * 100)) : 0;
        var _selected_healthScore, _selected_completedMilestonesCount;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeDetail,
                            className: "flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 795,
                                    columnNumber: 13
                                }, this),
                                " Back to Projects"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 794,
                            columnNumber: 11
                        }, this),
                        !isClientViewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openEdit,
                                    className: "h-9 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 800,
                                            columnNumber: 17
                                        }, this),
                                        " Edit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeleteConfirm(String(selected.id)),
                                    className: "h-9 px-3.5 rounded-[10px] border border-rose-200 dark:border-rose-900 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 803,
                                            columnNumber: 17
                                        }, this),
                                        " Delete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 802,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 798,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 793,
                    columnNumber: 9
                }, this),
                deleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-[10px] border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-rose-700 dark:text-rose-300 font-medium",
                            children: [
                                "Delete ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: selected.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 811,
                                    columnNumber: 88
                                }, this),
                                "? This cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 811,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeleteConfirm(null),
                                    className: "h-9 px-4 rounded-[10px] border border-slate-300 dark:border-slate-600 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 813,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: confirmDelete,
                                    className: "h-9 px-4 rounded-[10px] bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition",
                                    children: "Yes, Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 814,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 812,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 810,
                    columnNumber: 11
                }, this),
                editOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-indigo-700 dark:text-indigo-300",
                            children: "Edit Project"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 821,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                            children: [
                                [
                                    {
                                        label: "Project Name *",
                                        key: "name",
                                        type: "text"
                                    },
                                    {
                                        label: "Code",
                                        key: "code",
                                        type: "text"
                                    },
                                    {
                                        label: "Client Name",
                                        key: "clientName",
                                        type: "text"
                                    },
                                    {
                                        label: "Target End Date",
                                        key: "targetEndDate",
                                        type: "date"
                                    },
                                    {
                                        label: "Budget",
                                        key: "budget",
                                        type: "number"
                                    },
                                    {
                                        label: "Project Manager",
                                        key: "managerName",
                                        type: "text"
                                    }
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block",
                                                children: f.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 832,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: f.type,
                                                className: cls.input,
                                                value: editForm[f.key] || "",
                                                onChange: (e)=>setEditForm((prev)=>({
                                                            ...prev,
                                                            [f.key]: f.type === "number" ? Number(e.target.value) : e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 833,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.key, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 831,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: cls.select,
                                            value: editForm.status || "planning",
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        status: e.target.value
                                                    })),
                                            children: [
                                                "planning",
                                                "in_progress",
                                                "on_hold",
                                                "completed",
                                                "cancelled"
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s,
                                                    children: STATUS_LABEL[s]
                                                }, s, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 115
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 838,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 836,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block",
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 843,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: cls.select,
                                            value: editForm.priority || "medium",
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        priority: e.target.value
                                                    })),
                                            children: [
                                                "low",
                                                "medium",
                                                "high",
                                                "urgent"
                                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: p,
                                                    children: p.charAt(0).toUpperCase() + p.slice(1)
                                                }, p, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 65
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 844,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 842,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 822,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveEdit,
                                    className: cls.primary,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 850,
                                            columnNumber: 66
                                        }, this),
                                        " Save Changes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 850,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditOpen(false),
                                    className: cls.ghost,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 851,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 849,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 820,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 shadow-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                selected.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
                                                    children: selected.code
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 861,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${STATUS_PILL[selected.status]}`,
                                                    children: STATUS_LABEL[selected.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${selected.priority === "urgent" ? "bg-rose-500/10 text-rose-500 border-rose-300 dark:border-rose-800" : selected.priority === "high" ? "bg-amber-500/10 text-amber-500 border-amber-300 dark:border-amber-800" : "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700"}`,
                                                    children: selected.priority
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 860,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-black text-slate-900 dark:text-white",
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 865,
                                            columnNumber: 15
                                        }, this),
                                        selected.clientName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 103
                                                }, this),
                                                " ",
                                                selected.clientName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 866,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 859,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0",
                                    children: [
                                        {
                                            label: "Budget",
                                            value: fmt(selected.budget),
                                            color: "text-slate-900 dark:text-white"
                                        },
                                        {
                                            label: "Spent",
                                            value: fmt(selected.spent),
                                            color: "text-amber-600 dark:text-amber-400"
                                        },
                                        {
                                            label: "Health",
                                            value: selected.healthScore !== undefined ? String(selected.healthScore) : "—",
                                            color: ((_selected_healthScore = selected.healthScore) !== null && _selected_healthScore !== void 0 ? _selected_healthScore : 0) >= 80 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
                                        },
                                        {
                                            label: "Due",
                                            value: selected.targetEndDate || "TBD",
                                            color: "text-slate-700 dark:text-slate-200"
                                        }
                                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-3 rounded-[10px] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 font-semibold uppercase",
                                                    children: k.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 876,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-base font-black mt-0.5 ${k.color}`,
                                                    children: k.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, k.label, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 875,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 868,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 858,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-slate-400 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Budget Consumed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 883,
                                            columnNumber: 79
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-700 dark:text-slate-200",
                                            children: [
                                                pct,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 883,
                                            columnNumber: 107
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 883,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-full rounded-full transition-all ${pct > 90 ? "bg-rose-500" : pct > 70 ? "bg-amber-500" : "bg-indigo-500"}`,
                                        style: {
                                            width: `${pct}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 885,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 884,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 882,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 857,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none",
                    children: DETAIL_TABS.filter((tab)=>!isClientViewOnly || tab.key !== "expenses" && tab.key !== "ai").map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setDetailTab(tab.key),
                            className: `px-3.5 py-2 rounded-[10px] text-xs font-bold whitespace-nowrap transition-all border ${detailTab === tab.key ? "bg-indigo-600 text-white border-indigo-600 shadow-sm" : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400"}`,
                            children: tab.key === "phases" ? "Phases & Milestones" : tab.label
                        }, tab.key, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 893,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 891,
                    columnNumber: 9
                }, this),
                detailTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
                                    children: "Project Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        [
                                            "Manager",
                                            selected.managerName || "—"
                                        ],
                                        [
                                            "Lead Architect",
                                            selected.leadArchitectName || "—"
                                        ],
                                        [
                                            "Client",
                                            selected.clientName || "—"
                                        ],
                                        [
                                            "Target End Date",
                                            selected.targetEndDate || "TBD"
                                        ],
                                        [
                                            "Milestones",
                                            selected.milestonesCount !== undefined ? `${(_selected_completedMilestonesCount = selected.completedMilestonesCount) !== null && _selected_completedMilestonesCount !== void 0 ? _selected_completedMilestonesCount : 0} / ${selected.milestonesCount}` : "—"
                                        ],
                                        [
                                            "Gross Margin",
                                            selected.grossMarginPct !== undefined ? `${selected.grossMarginPct}%` : "—"
                                        ]
                                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center border-b border-slate-50 dark:border-slate-800 pb-1.5 last:border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-slate-900 dark:text-white",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 68
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 906,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 902,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
                                            children: "Governance RAG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 914,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2 text-xs font-bold text-center",
                                            children: [
                                                [
                                                    "Schedule",
                                                    selected.scheduleStatus
                                                ],
                                                [
                                                    "Budget",
                                                    selected.budgetStatus
                                                ],
                                                [
                                                    "Resource",
                                                    selected.resourceStatus
                                                ],
                                                [
                                                    "Client",
                                                    selected.clientSentimentStatus
                                                ]
                                            ].map(([label, rag])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded-[8px] border ${RAG[rag || "green"]}`,
                                                    children: [
                                                        label,
                                                        ": ",
                                                        (rag || "green").charAt(0).toUpperCase() + (rag || "green").slice(1)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 915,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 913,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-4 grid grid-cols-2 gap-2",
                                    children: [
                                        [
                                            "+ Task",
                                            "tasks",
                                            "text-indigo-600 dark:text-indigo-400"
                                        ],
                                        [
                                            "+ Phase",
                                            "phases",
                                            "text-emerald-600 dark:text-emerald-400"
                                        ],
                                        [
                                            "+ Member",
                                            "team",
                                            "text-purple-600 dark:text-purple-400"
                                        ],
                                        [
                                            "+ Expense",
                                            "expenses",
                                            "text-amber-600 dark:text-amber-400"
                                        ]
                                    ].map(([label, tab, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDetailTab(tab),
                                            className: `text-xs font-bold py-2.5 rounded-[10px] border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition ${color}`,
                                            children: label
                                        }, label, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 923,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 921,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 912,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 901,
                    columnNumber: 11
                }, this),
                detailTab === "timeline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4 shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 rounded-[8px] bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-900 dark:text-white",
                                                            children: "Project Timeline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400",
                                                            children: "Track delivery deadlines, sprint iterations, and milestone achievements."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 936,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-bold px-2.5 py-1 rounded-[8px] border ${STATUS_PILL[selected.status]}`,
                                                    children: STATUS_LABEL[selected.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 19
                                                }, this),
                                                (selected.targetEndDate || selected.dueDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono font-bold px-2.5 py-1 rounded-[8px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"], {
                                                            size: 13,
                                                            className: "text-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 951,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Due: ",
                                                        selected.dueDate || selected.targetEndDate
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 935,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 font-semibold uppercase tracking-wider block",
                                                    children: "Start Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "w-full h-9 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500",
                                                    value: localData.startDate || selected.startDate || "2026-03-01",
                                                    onChange: (e)=>{
                                                        localData.startDate = e.target.value;
                                                        saveLocalData(String(selected.id));
                                                        forceRefresh((n)=>n + 1);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 962,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 960,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 font-semibold uppercase tracking-wider block",
                                                    children: "Target Due Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 974,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "w-full h-9 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500",
                                                    value: localData.dueDate || selected.dueDate || selected.targetEndDate || "2026-06-30",
                                                    onChange: (e)=>{
                                                        localData.dueDate = e.target.value;
                                                        saveLocalData(String(selected.id));
                                                        forceRefresh((n)=>n + 1);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 975,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 973,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-[8px] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 font-semibold uppercase tracking-wider block",
                                                    children: "Milestones Completed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base font-black text-slate-900 dark:text-white font-mono",
                                                            children: [
                                                                (localData.milestones || []).filter((m)=>m.status === "completed").length,
                                                                " / ",
                                                                (localData.milestones || []).length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 989,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono",
                                                            children: [
                                                                (localData.milestones || []).length > 0 ? Math.round((localData.milestones || []).filter((m)=>m.status === "completed").length / (localData.milestones || []).length * 100) : 0,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 992,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 986,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 959,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 934,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4 shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Task01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Task01Icon"], {
                                                            size: 16,
                                                            className: "text-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Sprint Milestones (",
                                                        (localData.milestones || []).length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Time-boxed iterations, deliverables, and sprint checkpoints."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setAddMilestoneOpen((v)=>!v),
                                            className: "h-9 px-3.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 19
                                                }, this),
                                                " Add Sprint Milestone"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1011,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 15
                                }, this),
                                addMilestoneOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-[10px] bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-xs font-bold text-indigo-700 dark:text-indigo-300",
                                                    children: "New Sprint Milestone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setAddMilestoneOpen(false),
                                                    className: "text-slate-400 hover:text-slate-600 cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1023,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-4 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sm:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-semibold text-slate-500 mb-1 block",
                                                            children: "Milestone Title *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: cls.input,
                                                            placeholder: "e.g. Sprint 4: Final QA & Security Signoff",
                                                            value: milestoneForm.title,
                                                            onChange: (e)=>setMilestoneForm((f)=>({
                                                                        ...f,
                                                                        title: e.target.value
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-semibold text-slate-500 mb-1 block",
                                                            children: "Start Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1040,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            className: cls.input,
                                                            value: milestoneForm.startDate,
                                                            onChange: (e)=>setMilestoneForm((f)=>({
                                                                        ...f,
                                                                        startDate: e.target.value
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1041,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[11px] font-semibold text-slate-500 mb-1 block",
                                                            children: "Due Date *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            className: cls.input,
                                                            value: milestoneForm.dueDate,
                                                            onChange: (e)=>setMilestoneForm((f)=>({
                                                                        ...f,
                                                                        dueDate: e.target.value
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1048,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1029,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: addMilestone,
                                                    className: cls.primary,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1060,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Create Milestone"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setAddMilestoneOpen(false),
                                                    className: cls.ghost,
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1062,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 17
                                }, this),
                                (localData.milestones || []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-12 text-center text-slate-400 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                            size: 32,
                                            className: "mx-auto opacity-30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium",
                                            children: "No sprint milestones created yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAddMilestoneOpen(true),
                                            className: "text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer",
                                            children: "+ Add First Sprint Milestone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1074,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: (localData.milestones || []).map((ms)=>{
                                        const statusColors = {
                                            completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
                                            in_progress: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
                                            delayed: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
                                            not_started: "bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700"
                                        };
                                        var _ms_completedTasksCount;
                                        const completedTasks = (_ms_completedTasksCount = ms.completedTasksCount) !== null && _ms_completedTasksCount !== void 0 ? _ms_completedTasksCount : ms.status === "completed" ? ms.tasksCount || 1 : Math.floor((ms.tasksCount || 4) / 2);
                                        const totalTasks = ms.tasksCount || 4;
                                        const pct = Math.round(completedTasks / totalTasks * 100);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-[10px] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3 hover:border-indigo-300 dark:hover:border-indigo-800 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                                    children: ms.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400 flex items-center gap-1.5 font-mono",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                                                            size: 12,
                                                                            className: "text-indigo-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1102,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: ms.startDate || "TBD"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1103,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " → ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "text-slate-700 dark:text-slate-300",
                                                                            children: ms.dueDate || "TBD"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1103,
                                                                            columnNumber: 70
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1101,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: ms.status,
                                                                    onChange: (e)=>updateMilestoneStatus(ms.id, e.target.value),
                                                                    className: `h-8 px-2.5 rounded-[8px] text-xs font-bold border transition cursor-pointer ${statusColors[ms.status]}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "not_started",
                                                                            children: "Not Started"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1112,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "in_progress",
                                                                            children: "In Progress"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1113,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "completed",
                                                                            children: "Completed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1114,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "delayed",
                                                                            children: "Delayed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1115,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1107,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>removeMilestone(ms.id),
                                                                    className: "text-slate-300 hover:text-rose-500 p-1 transition cursor-pointer",
                                                                    title: "Delete milestone",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1123,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1117,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1106,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1096,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 dark:text-slate-400",
                                                                    children: [
                                                                        "Tasks Deliverables: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "text-slate-800 dark:text-white font-mono",
                                                                            children: [
                                                                                completedTasks,
                                                                                "/",
                                                                                totalTasks
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1132,
                                                                            columnNumber: 51
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1131,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                                    children: [
                                                                        pct,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1134,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1130,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full rounded-full transition-all ${ms.status === "completed" ? "bg-emerald-500" : ms.status === "delayed" ? "bg-rose-500" : "bg-indigo-600"}`,
                                                                style: {
                                                                    width: `${pct}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1137,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1136,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, ms.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1092,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1079,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1003,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 932,
                    columnNumber: 11
                }, this),
                detailTab === "team" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserMultiple02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMultiple02Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 104
                                        }, this),
                                        " Team (",
                                        localData.team.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddMemberOpen((v)=>!v),
                                    className: "h-9 px-3.5 rounded-[10px] bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 203
                                        }, this),
                                        " Add Member"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1161,
                            columnNumber: 13
                        }, this),
                        addMemberOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-[10px] bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-3.5 shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 21
                                                }, this),
                                                " Add Project Team Member"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setAddMemberOpen(false);
                                                setMemberDropdownOpen(false);
                                            },
                                            className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 1176,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1171,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1167,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Team Member Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-[11px] text-slate-400",
                                                            children: "Workspace / PingDart search"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: cls.input,
                                                            placeholder: "Type name (e.g. Mounika) or @pingdartId...",
                                                            value: memberForm.name,
                                                            onFocus: ()=>setMemberDropdownOpen(true),
                                                            onChange: (e)=>{
                                                                setMemberForm((f)=>({
                                                                        ...f,
                                                                        name: e.target.value
                                                                    }));
                                                                setMemberDropdownOpen(true);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1188,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none text-slate-400",
                                                            children: isSearchingUsers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3.5 h-3.5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1200,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1202,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1187,
                                                    columnNumber: 21
                                                }, this),
                                                memberDropdownOpen && matchingMembers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 right-0 top-full mt-1.5 z-40 bg-white dark:bg-[#1a2332] rounded-[10px] border border-slate-200 dark:border-slate-700 shadow-2xl max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800",
                                                    children: matchingMembers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>selectTeamMember(m),
                                                            className: "w-full flex items-center justify-between gap-2.5 px-3 py-2.5 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-left transition cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2.5 min-w-0",
                                                                    children: [
                                                                        m.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: m.avatarUrl,
                                                                            alt: m.name,
                                                                            className: "w-8 h-8 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1219,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs",
                                                                            children: m.initials
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1221,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-1.5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition truncate",
                                                                                            children: m.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                            lineNumber: 1227,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        m.pingdartId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-mono text-purple-600 dark:text-purple-400 font-semibold",
                                                                                            children: [
                                                                                                "@",
                                                                                                m.pingdartId
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                            lineNumber: 1231,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                    lineNumber: 1226,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[11px] text-slate-400 truncate",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium text-slate-600 dark:text-slate-300",
                                                                                            children: m.role
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                            lineNumber: 1237,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        m.department ? ` · ${m.department}` : ""
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                    lineNumber: 1236,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 1225,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1217,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shrink-0",
                                                                    children: "Select & Auto-fill"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1242,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, m.id, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1211,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1182,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Project Role *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1254,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-[11px] text-slate-400",
                                                            children: "Type or pick from list"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1255,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: cls.input,
                                                        placeholder: "e.g. Lead Frontend Engineer",
                                                        value: memberForm.role,
                                                        onFocus: ()=>setRoleDropdownOpen(true),
                                                        onChange: (e)=>{
                                                            setMemberForm((f)=>({
                                                                    ...f,
                                                                    role: e.target.value
                                                                }));
                                                            setRoleDropdownOpen(true);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1258,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1257,
                                                    columnNumber: 21
                                                }, this),
                                                roleDropdownOpen && matchingRoles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 right-0 top-full mt-1.5 z-40 bg-white dark:bg-[#1a2332] rounded-[10px] border border-slate-200 dark:border-slate-700 shadow-2xl max-h-52 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800",
                                                    children: matchingRoles.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>selectRole(r),
                                                            className: "w-full flex items-center justify-between px-3 py-2 text-xs text-left font-medium text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300 transition cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: r
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1280,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400",
                                                                    children: "Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1281,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, r, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1274,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5 mt-2",
                                                    children: [
                                                        "Frontend",
                                                        "Backend",
                                                        "Full Stack",
                                                        "UI/UX",
                                                        "Project Manager",
                                                        "QA Engineer",
                                                        "DevOps",
                                                        "Architect"
                                                    ].map((roleChip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const found = COMMON_PROJECT_ROLES.find((r)=>r.toLowerCase().includes(roleChip.toLowerCase())) || roleChip;
                                                                setMemberForm((f)=>({
                                                                        ...f,
                                                                        role: found
                                                                    }));
                                                            },
                                                            className: `text-[10px] font-semibold px-2 py-0.5 rounded-[6px] border transition cursor-pointer ${memberForm.role.toLowerCase().includes(roleChip.toLowerCase()) ? "bg-purple-600 text-white border-purple-600" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-purple-300"}`,
                                                            children: roleChip
                                                        }, roleChip, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1290,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-[10px] bg-white dark:bg-[#151c28] border border-purple-200/80 dark:border-purple-800/60 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                            size: 14,
                                                            className: "text-purple-600 dark:text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1314,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Project Role Permission *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1313,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Owner · Manager · Contributor · Viewer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1317,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                            children: PROJECT_ROLES.map((pr)=>{
                                                const isSel = (memberForm.projectRole || "Contributor") === pr;
                                                const b = PROJECT_ROLE_BADGES[pr];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setMemberForm((f)=>({
                                                                ...f,
                                                                projectRole: pr
                                                            })),
                                                    className: `p-2.5 rounded-[8px] border text-left transition cursor-pointer flex flex-col justify-between ${isSel ? `${b.badgeCls} ${b.borderCls} ring-2 ring-purple-500/20 shadow-2xs` : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold",
                                                                    children: b.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1335,
                                                                    columnNumber: 29
                                                                }, this),
                                                                isSel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                    size: 13,
                                                                    className: "text-purple-600 dark:text-purple-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1336,
                                                                    columnNumber: 39
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1334,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight",
                                                            children: b.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1338,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, pr, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1324,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1319,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1311,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-[10px] bg-white dark:bg-[#151c28] border border-purple-200/80 dark:border-purple-800/60 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Task01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Task01Icon"], {
                                                            size: 14,
                                                            className: "text-purple-600 dark:text-purple-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1349,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Member Responsibilities & Deliverables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1350,
                                                            columnNumber: 23
                                                        }, this),
                                                        selectedRespTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold px-1.5 py-0.2 rounded-[6px] bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300",
                                                            children: [
                                                                selectedRespTags.length,
                                                                " assigned"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1348,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Click quick tags or type custom"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1357,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1347,
                                            columnNumber: 19
                                        }, this),
                                        selectedRespTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5 p-2 rounded-[8px] bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40",
                                            children: selectedRespTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-[6px] bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1368,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeRespTag(tag),
                                                            className: "hover:text-rose-500 cursor-pointer text-slate-400",
                                                            title: "Remove",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1375,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1369,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, tag, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1364,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
                                                    children: "Suggested Deliverables:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1384,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: SUGGESTED_RESPONSIBILITIES.map((sug)=>{
                                                        const isAdded = selectedRespTags.includes(sug);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>isAdded ? removeRespTag(sug) : addRespTag(sug),
                                                            className: `text-[10px] font-medium px-2 py-0.5 rounded-[6px] border transition cursor-pointer flex items-center gap-1 ${isAdded ? "bg-purple-600 text-white border-purple-600" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-purple-400 hover:text-purple-600"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: isAdded ? "✓" : "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1401,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: sug
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1402,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, sug, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1391,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1387,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: cls.input,
                                                    placeholder: "Type custom responsibility and click Add (e.g. Payment Gateway Integration)...",
                                                    value: customRespInput,
                                                    onChange: (e)=>setCustomRespInput(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter") {
                                                            e.preventDefault();
                                                            if (customRespInput.trim()) {
                                                                addRespTag(customRespInput.trim());
                                                                setCustomRespInput("");
                                                            }
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1411,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        if (customRespInput.trim()) {
                                                            addRespTag(customRespInput.trim());
                                                            setCustomRespInput("");
                                                        }
                                                    },
                                                    className: "h-11 px-3.5 rounded-[10px] bg-slate-100 dark:bg-slate-800 hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-950/60 dark:hover:text-purple-300 border border-slate-200 dark:border-slate-700 text-xs font-bold transition shrink-0 cursor-pointer",
                                                    children: "+ Add Tag"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1426,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1410,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addMember,
                                            className: cls.primary,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 21
                                                }, this),
                                                " Add to Project Team"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1442,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setAddMemberOpen(false);
                                                setMemberDropdownOpen(false);
                                                setRoleDropdownOpen(false);
                                                setSelectedRespTags([]);
                                                setCustomRespInput("");
                                            },
                                            className: cls.ghost,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1441,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1166,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 rounded-[10px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                    size: 14,
                                                    className: "text-purple-600 dark:text-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1464,
                                                    columnNumber: 19
                                                }, this),
                                                "Project Role Permissions Matrix"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1463,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-400",
                                            children: "Governance & permissions assigned per project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1467,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                    children: PROJECT_ROLES.map((pr)=>{
                                        const b = PROJECT_ROLE_BADGES[pr];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-[8px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[11px] space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-block font-bold px-1.5 py-0.5 rounded text-[10px] border ${b.badgeCls}`,
                                                    children: b.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1474,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 line-clamp-2 leading-tight",
                                                    children: b.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1475,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, pr, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1473,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1469,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1461,
                            columnNumber: 13
                        }, this),
                        localData.team.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-10 text-center text-slate-400 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserMultiple02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMultiple02Icon"], {
                                    size: 32,
                                    className: "opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No team members yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1485,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddMemberOpen(true),
                                    className: "text-xs text-purple-600 hover:underline",
                                    children: "+ Add First Member"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1483,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                            children: localData.team.map((m)=>{
                                const respList = m.responsibilities ? m.responsibilities.split(/[,;\n•]+/).map((s)=>s.trim()).filter(Boolean) : [];
                                const isEditingResp = editingMemberId === m.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-[10px] border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex flex-col justify-between gap-3 shadow-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 min-w-0",
                                                        children: [
                                                            m.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: m.avatarUrl,
                                                                alt: m.name,
                                                                className: "w-9 h-9 rounded-full object-cover shrink-0 border border-purple-200 dark:border-purple-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1507,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs",
                                                                children: m.initials
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1513,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-slate-900 dark:text-white truncate",
                                                                        children: m.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1518,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 flex-wrap mt-0.5",
                                                                        children: [
                                                                            m.pingdartId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-[6px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60",
                                                                                children: [
                                                                                    "@",
                                                                                    m.pingdartId
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                lineNumber: 1523,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate",
                                                                                children: m.role || "Team Member"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                lineNumber: 1527,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1521,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1517,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1505,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeMember(m.id),
                                                        className: "text-slate-300 hover:text-rose-500 transition p-1 cursor-pointer shrink-0",
                                                        title: "Remove member",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1538,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1533,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 1504,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Task01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Task01Icon"], {
                                                                        size: 12,
                                                                        className: "text-purple-500 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1546,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    " Responsibilities"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1545,
                                                                columnNumber: 29
                                                            }, this),
                                                            !isEditingResp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>openEditResponsibilities(m),
                                                                className: "text-[10px] font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-0.5 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit01Icon"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1554,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    " ",
                                                                    respList.length > 0 ? "Edit" : "+ Add"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1549,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1544,
                                                        columnNumber: 27
                                                    }, this),
                                                    !isEditingResp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: respList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5 pt-0.5",
                                                            children: respList.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium px-2 py-0.5 rounded-[6px] bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60",
                                                                    children: tag
                                                                }, idx, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1565,
                                                                    columnNumber: 37
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1563,
                                                            columnNumber: 33
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openEditResponsibilities(m),
                                                            className: "w-full text-left text-[11px] text-slate-400 italic hover:text-purple-600 transition",
                                                            children: "+ Assign key responsibilities & deliverables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1574,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false),
                                                    isEditingResp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-[8px] bg-white dark:bg-[#131b26] border border-purple-200 dark:border-purple-800/80 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1",
                                                                children: editRespTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-[6px] bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: tag
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                lineNumber: 1595,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setEditRespTags((tags)=>tags.filter((t)=>t !== tag)),
                                                                                className: "hover:text-rose-500 cursor-pointer",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                                                    size: 10
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                    lineNumber: 1601,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                                lineNumber: 1596,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, tag, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1591,
                                                                        columnNumber: 35
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1589,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1",
                                                                children: SUGGESTED_RESPONSIBILITIES.slice(0, 5).map((sug)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            if (!editRespTags.includes(sug)) {
                                                                                setEditRespTags((prev)=>[
                                                                                        ...prev,
                                                                                        sug
                                                                                    ]);
                                                                            }
                                                                        },
                                                                        className: "text-[9px] font-medium px-1.5 py-0.5 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-400",
                                                                        children: [
                                                                            "+ ",
                                                                            sug
                                                                        ]
                                                                    }, sug, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1610,
                                                                        columnNumber: 35
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1608,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "flex-1 h-8 px-2 rounded-[6px] border border-slate-200 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white",
                                                                        placeholder: "Custom deliverable...",
                                                                        value: editCustomRespInput,
                                                                        onChange: (e)=>setEditCustomRespInput(e.target.value),
                                                                        onKeyDown: (e)=>{
                                                                            if (e.key === "Enter" && editCustomRespInput.trim()) {
                                                                                e.preventDefault();
                                                                                if (!editRespTags.includes(editCustomRespInput.trim())) {
                                                                                    setEditRespTags((prev)=>[
                                                                                            ...prev,
                                                                                            editCustomRespInput.trim()
                                                                                        ]);
                                                                                }
                                                                                setEditCustomRespInput("");
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1627,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            if (editCustomRespInput.trim() && !editRespTags.includes(editCustomRespInput.trim())) {
                                                                                setEditRespTags((prev)=>[
                                                                                        ...prev,
                                                                                        editCustomRespInput.trim()
                                                                                    ]);
                                                                                setEditCustomRespInput("");
                                                                            }
                                                                        },
                                                                        className: "h-8 px-2 text-[10px] font-bold rounded-[6px] bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1642,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1626,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1.5 pt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>saveEditResponsibilities(m.id),
                                                                        className: "h-7 px-2.5 rounded-[6px] bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold transition",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1657,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setEditingMemberId(null),
                                                                        className: "h-7 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-700 text-slate-500 text-[10px] font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 1664,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1656,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1587,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 1543,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                                size: 11,
                                                                className: "text-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1678,
                                                                columnNumber: 29
                                                            }, this),
                                                            " Project Role"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1677,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: m.projectRole || "Contributor",
                                                        onChange: (e)=>changeMemberProjectRole(m.id, e.target.value),
                                                        className: "h-7 px-2 rounded-[6px] text-[11px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-purple-500 cursor-pointer shadow-2xs",
                                                        children: PROJECT_ROLES.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: r,
                                                                children: PROJECT_ROLE_BADGES[r].label
                                                            }, r, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 1686,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1680,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 1676,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 1503,
                                        columnNumber: 23
                                    }, this)
                                }, m.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1499,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1491,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1160,
                    columnNumber: 11
                }, this),
                detailTab === "phases" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1703,
                                            columnNumber: 104
                                        }, this),
                                        " Phases & Milestones (",
                                        localData.phases.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1703,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddPhaseOpen((v)=>!v),
                                    className: "h-9 px-3.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1704,
                                            columnNumber: 204
                                        }, this),
                                        " Add Phase"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1704,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1702,
                            columnNumber: 13
                        }, this),
                        addPhaseOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-[10px] bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Phase Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1709,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: cls.input,
                                                    placeholder: "e.g. Discovery",
                                                    value: phaseForm.name,
                                                    onChange: (e)=>setPhaseForm((f)=>({
                                                                ...f,
                                                                name: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1709,
                                                    columnNumber: 111
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1709,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Start Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1710,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: cls.input,
                                                    value: phaseForm.startDate,
                                                    onChange: (e)=>setPhaseForm((f)=>({
                                                                ...f,
                                                                startDate: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1710,
                                                    columnNumber: 109
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1710,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "End Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1711,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: cls.input,
                                                    value: phaseForm.endDate,
                                                    onChange: (e)=>setPhaseForm((f)=>({
                                                                ...f,
                                                                endDate: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1711,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1711,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1708,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addPhase,
                                            className: cls.primary,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1713,
                                                    columnNumber: 96
                                                }, this),
                                                " Add Phase"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1713,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAddPhaseOpen(false),
                                            className: cls.ghost,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1713,
                                            columnNumber: 138
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1713,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1707,
                            columnNumber: 15
                        }, this),
                        localData.phases.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-10 text-center text-slate-400 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"], {
                                    size: 32,
                                    className: "opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1717,
                                    columnNumber: 98
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No phases defined yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1717,
                                    columnNumber: 147
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddPhaseOpen(true),
                                    className: "text-xs text-emerald-600 hover:underline",
                                    children: "+ Add First Phase"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1717,
                                    columnNumber: 196
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1717,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: localData.phases.map((ph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-[10px] border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                                    children: ph.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1723,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded border ${ph.status === "completed" ? "bg-emerald-500/10 text-emerald-500 border-emerald-300 dark:border-emerald-800" : ph.status === "active" ? "bg-blue-500/10 text-blue-500 border-blue-300 dark:border-blue-800" : "bg-amber-500/10 text-amber-500 border-amber-300 dark:border-amber-800"}`,
                                                    children: ph.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1724,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1722,
                                            columnNumber: 21
                                        }, this),
                                        (ph.startDate || ph.endDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: [
                                                ph.startDate,
                                                " → ",
                                                ph.endDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1726,
                                            columnNumber: 54
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-emerald-500 rounded-full",
                                                        style: {
                                                            width: `${ph.pct}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                        lineNumber: 1728,
                                                        columnNumber: 113
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1728,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono text-slate-500",
                                                    children: [
                                                        ph.pct,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1729,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1727,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, ph.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1721,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1719,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1701,
                    columnNumber: 11
                }, this),
                detailTab === "tasks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Task01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Task01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1742,
                                            columnNumber: 104
                                        }, this),
                                        " Tasks (",
                                        localData.tasks.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1742,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddTaskOpen((v)=>!v),
                                    className: "h-9 px-3.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1744,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        isClientViewOnly ? "Request / Create Task" : "Add Task"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1743,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1741,
                            columnNumber: 13
                        }, this),
                        addTaskOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-indigo-700 dark:text-indigo-300",
                                        children: isClientViewOnly ? "Submit Task Request for Delivery Squad" : "Create New Task"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 1750,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1749,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Task Title *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1756,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: cls.input,
                                                    placeholder: isClientViewOnly ? "e.g. Please update hero banner logo" : "e.g. Setup CI/CD",
                                                    value: taskForm.title,
                                                    onChange: (e)=>setTaskForm((f)=>({
                                                                ...f,
                                                                title: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1757,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1755,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Assignee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1760,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: cls.input,
                                                    placeholder: isClientViewOnly ? "Project Team" : "Team member",
                                                    value: taskForm.assignee,
                                                    onChange: (e)=>setTaskForm((f)=>({
                                                                ...f,
                                                                assignee: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1761,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1759,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1764,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: cls.select,
                                                    value: taskForm.priority,
                                                    onChange: (e)=>setTaskForm((f)=>({
                                                                ...f,
                                                                priority: e.target.value
                                                            })),
                                                    children: [
                                                        "low",
                                                        "medium",
                                                        "high",
                                                        "urgent"
                                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: p,
                                                            children: p.charAt(0).toUpperCase() + p.slice(1)
                                                        }, p, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1766,
                                                            columnNumber: 69
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1765,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1763,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Requested Due Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1770,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: cls.input,
                                                    value: taskForm.dueDate,
                                                    onChange: (e)=>setTaskForm((f)=>({
                                                                ...f,
                                                                dueDate: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1771,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1769,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addTask,
                                            className: cls.primary,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1775,
                                                    columnNumber: 69
                                                }, this),
                                                " ",
                                                isClientViewOnly ? "Submit Request" : "Add Task"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1775,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAddTaskOpen(false),
                                            className: cls.ghost,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1776,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1774,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1748,
                            columnNumber: 15
                        }, this),
                        localData.tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-10 text-center text-slate-400 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Task01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Task01Icon"], {
                                    size: 32,
                                    className: "opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1781,
                                    columnNumber: 98
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No tasks yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1781,
                                    columnNumber: 143
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddTaskOpen(true),
                                    className: "text-xs text-indigo-600 hover:underline",
                                    children: "+ Create First Task"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1781,
                                    columnNumber: 183
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1781,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: localData.tasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 rounded-[10px] border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-2.5 h-2.5 rounded-full shrink-0 ${t.priority === "urgent" ? "bg-rose-500" : t.priority === "high" ? "bg-amber-500" : t.priority === "medium" ? "bg-blue-500" : "bg-slate-400"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1786,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-900 dark:text-white truncate",
                                                    children: t.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1788,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: [
                                                        t.assignee || "Unassigned",
                                                        t.dueDate ? ` · Due ${t.dueDate}` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1789,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1787,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: t.status,
                                            onChange: (e)=>{
                                                if (!selectedId) return;
                                                const d = getLocalData(selectedId);
                                                const task = d.tasks.find((x)=>x.id === t.id);
                                                if (task) task.status = e.target.value;
                                                forceRefresh((n)=>n + 1);
                                            },
                                            className: "text-[11px] rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 h-7 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "todo",
                                                    children: "To Do"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1792,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "in_progress",
                                                    children: "In Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1792,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "done",
                                                    children: "Done"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1792,
                                                    columnNumber: 106
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "blocked",
                                                    children: "Blocked"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1792,
                                                    columnNumber: 140
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1791,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeTask(t.id),
                                            className: "text-slate-300 hover:text-rose-500 transition ml-1 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 1794,
                                                columnNumber: 134
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1794,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1785,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1783,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1740,
                    columnNumber: 11
                }, this),
                detailTab === "invoices" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 1807,
                                        columnNumber: 17
                                    }, this),
                                    " Invoices & Payment Records (",
                                    projectInvoices.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 1806,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1805,
                            columnNumber: 13
                        }, this),
                        projectInvoices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-10 text-center text-slate-400 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"], {
                                    size: 32,
                                    className: "opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 98
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No invoices linked to this project."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 145
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    children: "Invoices are matched by client name from the Billing module."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 207
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1811,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: projectInvoices.map((inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setViewInvoiceModalInvoice(inv);
                                                                setIsViewInvoiceModalOpen(true);
                                                            },
                                                            className: "font-mono font-bold text-indigo-600 dark:text-indigo-400 text-sm hover:underline cursor-pointer",
                                                            title: "View Tax Invoice",
                                                            children: inv.invoiceNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1818,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-bold px-2 py-0.5 rounded border ${inv.status === "Paid" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800" : inv.status === "Overdue" ? "bg-rose-500/10 text-rose-500 border-rose-300 dark:border-rose-800" : "bg-amber-500/10 text-amber-500 border-amber-300 dark:border-amber-800"}`,
                                                            children: inv.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1829,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1817,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: [
                                                        "Due Date: ",
                                                        inv.dueDate || "Immediate"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1833,
                                                    columnNumber: 23
                                                }, this),
                                                inv.status === "Paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-2 flex-wrap pt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "✓ Paid on ",
                                                                inv.paidDate || "Recent"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1836,
                                                            columnNumber: 27
                                                        }, this),
                                                        inv.paymentMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: [
                                                                "• ",
                                                                inv.paymentMethod
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1837,
                                                            columnNumber: 49
                                                        }, this),
                                                        inv.transactionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] bg-emerald-100 dark:bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300",
                                                            children: [
                                                                "UTR: ",
                                                                inv.transactionId
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1839,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1835,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1816,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center sm:flex-col sm:items-end justify-between gap-2 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-black text-slate-900 dark:text-white font-mono",
                                                    children: fmt(inv.total)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1847,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setViewInvoiceModalInvoice(inv);
                                                                setIsViewInvoiceModalOpen(true);
                                                            },
                                                            className: "h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition flex items-center gap-1 cursor-pointer shadow-2xs",
                                                            title: "View Tax Invoice",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1858,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " View"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1849,
                                                            columnNumber: 25
                                                        }, this),
                                                        inv.status !== "Paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setPaymentModalInvoice(inv);
                                                                setIsPaymentModalOpen(true);
                                                            },
                                                            className: "h-8 px-3 rounded-[8px] bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Wallet01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wallet01Icon"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1869,
                                                                    columnNumber: 29
                                                                }, this),
                                                                " Pay / Record Payment"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1861,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1848,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1846,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, inv.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1815,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1813,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1804,
                    columnNumber: 11
                }, this),
                detailTab === "expenses" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1885,
                                            columnNumber: 104
                                        }, this),
                                        " Expenses (",
                                        localData.expenses.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1885,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddExpenseOpen((v)=>!v),
                                    className: "h-9 px-3.5 rounded-[10px] bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1886,
                                            columnNumber: 202
                                        }, this),
                                        " Log Expense"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1886,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1884,
                            columnNumber: 13
                        }, this),
                        addExpenseOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-[10px] bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Description *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1891,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: cls.input,
                                                    placeholder: "e.g. AWS infrastructure",
                                                    value: expenseForm.description,
                                                    onChange: (e)=>setExpenseForm((f)=>({
                                                                ...f,
                                                                description: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1891,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1891,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Amount *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1892,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: cls.input,
                                                    placeholder: "0.00",
                                                    value: expenseForm.amount,
                                                    onChange: (e)=>setExpenseForm((f)=>({
                                                                ...f,
                                                                amount: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1892,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1892,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1894,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: cls.select,
                                                    value: expenseForm.category,
                                                    onChange: (e)=>setExpenseForm((f)=>({
                                                                ...f,
                                                                category: e.target.value
                                                            })),
                                                    children: [
                                                        "Labor",
                                                        "Software/SaaS",
                                                        "Infrastructure",
                                                        "Travel",
                                                        "Marketing",
                                                        "Legal",
                                                        "Miscellaneous"
                                                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c,
                                                            children: c
                                                        }, c, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1896,
                                                            columnNumber: 127
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1895,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1893,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 mb-1 block",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: cls.input,
                                                    value: expenseForm.date,
                                                    onChange: (e)=>setExpenseForm((f)=>({
                                                                ...f,
                                                                date: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 103
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1899,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1890,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addExpense,
                                            className: cls.primary,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1901,
                                                    columnNumber: 98
                                                }, this),
                                                " Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1901,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAddExpenseOpen(false),
                                            className: cls.ghost,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1901,
                                            columnNumber: 135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1901,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1889,
                            columnNumber: 15
                        }, this),
                        localData.expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-10 text-center text-slate-400 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                    size: 32,
                                    className: "opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1905,
                                    columnNumber: 98
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No expenses logged yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1905,
                                    columnNumber: 144
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAddExpenseOpen(true),
                                    className: "text-xs text-amber-600 hover:underline",
                                    children: "+ Log First Expense"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1905,
                                    columnNumber: 194
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1905,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: localData.expenses.map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-3 rounded-[10px] border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-slate-900 dark:text-white",
                                                            children: ex.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1911,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400",
                                                            children: [
                                                                ex.category,
                                                                ex.date ? ` · ${ex.date}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1911,
                                                            columnNumber: 108
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1911,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-amber-600 dark:text-amber-400",
                                                    children: fmt(ex.amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1912,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, ex.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1910,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1908,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between text-sm font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-500",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1917,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-600 dark:text-amber-400",
                                            children: fmt(localData.expenses.reduce((s, e)=>s + e.amount, 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1918,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1916,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1883,
                    columnNumber: 11
                }, this),
                detailTab === "activity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-4 shadow-xs animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-[8px] bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Activity01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activity01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 1931,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1930,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                                    children: "Project Activity History"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1934,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Audit trail of member assignments, project roles, and responsibilities."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1935,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1933,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1929,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-mono font-bold px-2.5 py-1 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
                                    children: [
                                        (localData.activities || []).length,
                                        " Events"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1938,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1928,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-slate-100 dark:divide-slate-800",
                            children: (localData.activities || []).map((act)=>{
                                const badgeColor = act.type === "added_member" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" : act.type === "removed_member" ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800" : act.type === "changed_role" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800";
                                const typeLabel = act.type === "added_member" ? "Added member" : act.type === "removed_member" ? "Removed member" : act.type === "changed_role" ? "Changed role" : "Updated responsibilities";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded-[6px] border shrink-0 mt-0.5 ${badgeColor}`,
                                                    children: typeLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1966,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-slate-800 dark:text-slate-200 break-words",
                                                            children: act.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1970,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400 mt-0.5",
                                                            children: [
                                                                "Triggered by ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-slate-600 dark:text-slate-300 font-semibold",
                                                                    children: act.actor
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 1974,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 1973,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 1969,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1965,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-mono text-slate-400 shrink-0 whitespace-nowrap",
                                            children: new Date(act.timestamp).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                month: "short",
                                                day: "numeric"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1978,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, act.id, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1964,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1943,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1927,
                    columnNumber: 11
                }, this),
                detailTab === "ai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px] border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                    size: 18,
                                    className: "text-purple-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1991,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-purple-900 dark:text-purple-200",
                                    children: "AI Delivery Copilot"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1991,
                                    columnNumber: 118
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1991,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-[10px] bg-white/60 dark:bg-slate-900/60 border border-purple-100 dark:border-purple-900 text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1993,
                                            columnNumber: 18
                                        }, this),
                                        " — Budget: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: fmt(selected.budget)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1993,
                                            columnNumber: 61
                                        }, this),
                                        " · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                pct,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1993,
                                            columnNumber: 103
                                        }, this),
                                        " consumed.",
                                        pct > 80 ? " ⚠️ Budget critically high — review scope." : pct > 60 ? " Budget approaching warning zone." : " Budget healthy."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1993,
                                    columnNumber: 15
                                }, this),
                                selected.targetEndDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Deadline: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: selected.targetEndDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1994,
                                            columnNumber: 55
                                        }, this),
                                        ".",
                                        new Date(selected.targetEndDate) < new Date() ? " 🔴 Past target date." : " On track."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1994,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Team: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: localData.team.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1995,
                                            columnNumber: 24
                                        }, this),
                                        " members · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: localData.tasks.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1995,
                                            columnNumber: 75
                                        }, this),
                                        " tasks · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: localData.phases.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 1995,
                                            columnNumber: 125
                                        }, this),
                                        " phases"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1995,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1992,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                            children: [
                                "Identify tasks at risk of delay",
                                "Summarize project health for client",
                                "Suggest next milestone priorities",
                                "Generate weekly PMO status report"
                            ].map((prompt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("AI Copilot — coming soon!"),
                                    className: "text-left text-xs p-3 rounded-[10px] border border-purple-200 dark:border-purple-800 bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition font-medium",
                                    children: [
                                        "✦ ",
                                        prompt
                                    ]
                                }, prompt, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 1999,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 1997,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 1990,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$RecordPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordPaymentModal"], {
                    isOpen: isPaymentModalOpen,
                    onClose: ()=>{
                        setIsPaymentModalOpen(false);
                        setPaymentModalInvoice(null);
                    },
                    invoice: paymentModalInvoice,
                    onRecordPayment: (id, data)=>{
                        onRecordPayment === null || onRecordPayment === void 0 ? void 0 : onRecordPayment(id, data);
                        setIsPaymentModalOpen(false);
                        setPaymentModalInvoice(null);
                        forceRefresh((n)=>n + 1);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 2006,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewInvoiceModal"], {
                    isOpen: isViewInvoiceModalOpen,
                    onClose: ()=>{
                        setIsViewInvoiceModalOpen(false);
                        setViewInvoiceModalInvoice(null);
                    },
                    invoice: viewInvoiceModalInvoice,
                    onRecordPayment: (inv)=>{
                        setIsViewInvoiceModalOpen(false);
                        setViewInvoiceModalInvoice(null);
                        setPaymentModalInvoice(inv);
                        setIsPaymentModalOpen(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 2022,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
            lineNumber: 791,
            columnNumber: 7
        }, this);
    }
    // ─── LIST VIEW ────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-black text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                                size: 20,
                                                className: "text-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2048,
                                                columnNumber: 15
                                            }, this),
                                            isClientViewOnly ? "Client Delivery Portal" : "Projects"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2047,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-0.5",
                                        children: isClientViewOnly ? `Viewing projects, milestones, tasks & payment records for ${clientName || "Client"}.` : "Track delivery projects — budget, team, tasks, invoices & expenses."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2051,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2046,
                                columnNumber: 11
                            }, this),
                            !isClientViewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenAddModal,
                                className: cls.primary,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2058,
                                        columnNumber: 70
                                    }, this),
                                    " New Project"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2058,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2045,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3",
                        children: [
                            [
                                "Total Projects",
                                String(projects.length),
                                "text-indigo-600 dark:text-indigo-400"
                            ],
                            [
                                "In Progress",
                                String(inProgress),
                                "text-blue-600 dark:text-blue-400"
                            ],
                            [
                                "Total Budget",
                                fmt(totalBudget),
                                "text-slate-900 dark:text-white"
                            ],
                            [
                                "Spent To Date",
                                fmt(totalSpent),
                                "text-amber-600 dark:text-amber-400"
                            ]
                        ].map(([label, value, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2064,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xl font-black mt-0.5 ${color}`,
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2065,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2063,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2061,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2044,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-3 items-stretch sm:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                size: 15,
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2074,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full h-11 pl-9 pr-4 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                placeholder: "Search by name, code, client, or manager…",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2075,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2073,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: statusFilter,
                                onChange: (e)=>setStatusFilter(e.target.value),
                                className: "h-11 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[140px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Statuses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2088,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        "planning",
                                        "in_progress",
                                        "on_hold",
                                        "completed",
                                        "cancelled"
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s,
                                            children: STATUS_LABEL[s]
                                        }, s, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2090,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2083,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center h-11 px-1 bg-slate-100 dark:bg-slate-800/80 rounded-[10px] border border-slate-200 dark:border-slate-700 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setViewMode("list"),
                                        className: `h-9 px-3 rounded-[8px] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${viewMode === "list" ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"}`,
                                        title: "List View",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2106,
                                                columnNumber: 15
                                            }, this),
                                            " List"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2096,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setViewMode("grid"),
                                        className: `h-9 px-3 rounded-[8px] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${viewMode === "grid" ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs" : "text-slate-500 hover:text-slate-700 dark:text-slate-400"}`,
                                        title: "Grid View",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2118,
                                                columnNumber: 15
                                            }, this),
                                            " Grid"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2095,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2082,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2072,
                columnNumber: 7
            }, this),
            projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-20 text-center rounded-[10px] border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                            lineNumber: 2127,
                            columnNumber: 102
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-slate-900 dark:text-white mb-1",
                        children: "No Projects Yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400 max-w-xs mb-5",
                        children: "Create your first delivery project to track budget, team, milestones, and invoices."
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenAddModal,
                        className: cls.primary,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2130,
                                columnNumber: 68
                            }, this),
                            " Create First Project"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2126,
                columnNumber: 9
            }, this) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-16 text-center rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                        size: 28,
                        className: "text-slate-300 mb-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-slate-500 dark:text-slate-400",
                        children: "No projects match your search or filters."
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSearch("");
                            setStatusFilter("all");
                        },
                        className: "mt-3 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-bold",
                        children: "Clear filters"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2133,
                columnNumber: 9
            }, this) : viewMode === "list" ? /* ── TABLE / LIST VIEW ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] overflow-hidden shadow-2xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold text-slate-500 uppercase tracking-wider",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[30%] min-w-[260px]",
                                            children: "Project"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2150,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[11%] min-w-[100px]",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[9%] min-w-[80px]",
                                            children: "Health"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[18%] min-w-[150px]",
                                            children: "Budget & Spent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2153,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[12%] min-w-[100px]",
                                            children: "Target Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[12%] min-w-[110px]",
                                            children: "Lead / Manager"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2155,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 w-[8%] min-w-[90px] text-right",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2156,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 2149,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2148,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-slate-100 dark:divide-slate-800/70",
                                children: paginated.map((p)=>{
                                    const pct = p.budget > 0 ? Math.min(100, Math.round(p.spent / p.budget * 100)) : 0;
                                    var _p_healthScore, _p_healthScore1;
                                    const healthColor = ((_p_healthScore = p.healthScore) !== null && _p_healthScore !== void 0 ? _p_healthScore : 0) >= 80 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" : ((_p_healthScore1 = p.healthScore) !== null && _p_healthScore1 !== void 0 ? _p_healthScore1 : 0) >= 60 ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800" : "bg-rose-500/10 text-rose-500 border-rose-200 dark:border-rose-800";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        onClick: ()=>openProject(p),
                                        className: "hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 min-w-[260px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 min-w-0",
                                                            children: [
                                                                p.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60 shrink-0 whitespace-nowrap",
                                                                    children: p.code
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2179,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition truncate",
                                                                    title: p.name,
                                                                    children: p.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2183,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 2177,
                                                            columnNumber: 27
                                                        }, this),
                                                        p.clientName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400 flex items-center gap-1 mt-0.5 truncate",
                                                            title: p.clientName,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                                    size: 12,
                                                                    className: "text-slate-400 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2195,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: p.clientName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2196,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 2191,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2176,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2175,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded border ${STATUS_PILL[p.status]}`,
                                                    children: STATUS_LABEL[p.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2202,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2201,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 whitespace-nowrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded border font-mono ${healthColor}`,
                                                    children: p.healthScore !== undefined ? `${p.healthScore}/100` : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2207,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2206,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 whitespace-nowrap min-w-[150px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-[11px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 dark:text-slate-400",
                                                                    children: [
                                                                        "Spent: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "text-slate-700 dark:text-slate-200",
                                                                            children: fmt(p.spent)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                            lineNumber: 2215,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2214,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-slate-500 font-mono text-[10px]",
                                                                    children: [
                                                                        pct,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2217,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 2213,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full rounded-full ${pct > 90 ? "bg-rose-500" : pct > 70 ? "bg-amber-500" : "bg-indigo-500"}`,
                                                                style: {
                                                                    width: `${pct}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                lineNumber: 2220,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 2219,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: [
                                                                "Budget: ",
                                                                fmt(p.budget)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 2225,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2212,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2211,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 whitespace-nowrap text-xs text-slate-600 dark:text-slate-300",
                                                children: p.targetEndDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: p.targetEndDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2230,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 italic",
                                                    children: "TBD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2232,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2228,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 whitespace-nowrap text-xs text-slate-600 dark:text-slate-300",
                                                children: p.managerName || p.leadArchitectName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: p.managerName || p.leadArchitectName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2237,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 italic",
                                                    children: "Unassigned"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2239,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2235,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2.5 px-4 text-right whitespace-nowrap",
                                                onClick: (e)=>e.stopPropagation(),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openProject(p),
                                                            className: "h-8 px-2.5 rounded-[6px] border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center gap-1 cursor-pointer",
                                                            children: "Open →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                            lineNumber: 2244,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isClientViewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedId(String(p.id));
                                                                        setEditForm({
                                                                            name: p.name,
                                                                            code: p.code,
                                                                            clientName: p.clientName,
                                                                            status: p.status,
                                                                            priority: p.priority,
                                                                            budget: p.budget,
                                                                            targetEndDate: p.targetEndDate,
                                                                            managerName: p.managerName,
                                                                            leadArchitectName: p.leadArchitectName
                                                                        });
                                                                        setEditOpen(true);
                                                                    },
                                                                    className: "h-8 px-2 rounded-[6px] border border-slate-200 dark:border-slate-700 text-xs text-slate-500 hover:text-indigo-600 hover:border-indigo-400 transition cursor-pointer",
                                                                    title: "Edit Project",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Edit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit01Icon"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 2271,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2252,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        if (window.confirm(`Delete project "${p.name}"?`)) {
                                                                            onDeleteProject === null || onDeleteProject === void 0 ? void 0 : onDeleteProject(p.id);
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project removed");
                                                                        }
                                                                    },
                                                                    className: "h-8 px-2 rounded-[6px] border border-rose-200 dark:border-rose-900 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer",
                                                                    title: "Delete Project",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                        lineNumber: 2283,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                                    lineNumber: 2273,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                    lineNumber: 2243,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2242,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2170,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2159,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2147,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                    lineNumber: 2146,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2145,
                columnNumber: 9
            }, this) : /* ── GRID VIEW ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: paginated.map((p)=>{
                    const pct2 = p.budget > 0 ? Math.min(100, Math.round(p.spent / p.budget * 100)) : 0;
                    var _p_healthScore, _p_healthScore1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>openProject(p),
                        className: "group cursor-pointer rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap mb-2",
                                children: [
                                    p.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300",
                                        children: p.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2304,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-md border ${STATUS_PILL[p.status]}`,
                                        children: STATUS_LABEL[p.status]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2305,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-md border ml-auto ${((_p_healthScore = p.healthScore) !== null && _p_healthScore !== void 0 ? _p_healthScore : 0) >= 80 ? "bg-emerald-500/10 text-emerald-500 border-emerald-200 dark:border-emerald-800" : ((_p_healthScore1 = p.healthScore) !== null && _p_healthScore1 !== void 0 ? _p_healthScore1 : 0) >= 60 ? "bg-amber-500/10 text-amber-500 border-amber-200 dark:border-amber-800" : "bg-rose-500/10 text-rose-500 border-rose-200 dark:border-rose-800"}`,
                                        children: p.healthScore !== undefined ? `${p.healthScore}/100` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2306,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2303,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition line-clamp-2",
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2308,
                                columnNumber: 17
                            }, this),
                            p.clientName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-0.5 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2309,
                                        columnNumber: 103
                                    }, this),
                                    " ",
                                    p.clientName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2309,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Spent ",
                                                    pct2,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2311,
                                                columnNumber: 80
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-700 dark:text-slate-200",
                                                children: fmt(p.budget)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2311,
                                                columnNumber: 106
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2311,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full ${pct2 > 90 ? "bg-rose-500" : pct2 > 70 ? "bg-amber-500" : "bg-indigo-500"}`,
                                            style: {
                                                width: `${pct2}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                            lineNumber: 2312,
                                            columnNumber: 109
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2312,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2310,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 pt-3 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: p.managerName || p.leadArchitectName || "No manager"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2315,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-indigo-500 group-hover:text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-0.5 transition-transform",
                                        children: "Open →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2316,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2314,
                                columnNumber: 17
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2302,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2298,
                columnNumber: 9
            }, this),
            filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Showing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-800 dark:text-white font-mono",
                                        children: (page - 1) * pageSize + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2329,
                                        columnNumber: 23
                                    }, this),
                                    " to",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-800 dark:text-white font-mono",
                                        children: Math.min(page * pageSize, filtered.length)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2330,
                                        columnNumber: 15
                                    }, this),
                                    " of",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-800 dark:text-white font-mono",
                                        children: filtered.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2331,
                                        columnNumber: 15
                                    }, this),
                                    " projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2328,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300 dark:text-slate-700",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Per page:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2335,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: pageSize,
                                        onChange: (e)=>{
                                            setPageSize(Number(e.target.value));
                                            setPage(1);
                                        },
                                        className: "h-8 px-2 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 5,
                                                children: "5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 10,
                                                children: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2345,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 20,
                                                children: "20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 50,
                                                children: "50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                                lineNumber: 2347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2336,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2334,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2327,
                        columnNumber: 11
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: page === 1,
                                onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                className: "h-9 px-3 rounded-[8px] text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1 cursor-pointer shadow-2xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2360,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2361,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2354,
                                columnNumber: 15
                            }, this),
                            Array.from({
                                length: totalPages
                            }, (_, i)=>i + 1).map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPage(pageNum),
                                    className: `w-9 h-9 rounded-[8px] text-xs font-bold transition font-mono cursor-pointer border ${page === pageNum ? "bg-indigo-600 border-indigo-600 text-white shadow-xs" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,
                                    children: pageNum
                                }, pageNum, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                    lineNumber: 2365,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: page === totalPages,
                                onClick: ()=>setPage((p)=>Math.min(totalPages, p + 1)),
                                className: "h-9 px-3 rounded-[8px] text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1 cursor-pointer shadow-2xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2385,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                        lineNumber: 2386,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                                lineNumber: 2379,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                        lineNumber: 2353,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2326,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$RecordPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordPaymentModal"], {
                isOpen: isPaymentModalOpen,
                onClose: ()=>{
                    setIsPaymentModalOpen(false);
                    setPaymentModalInvoice(null);
                },
                invoice: paymentModalInvoice,
                onRecordPayment: (id, data)=>{
                    onRecordPayment === null || onRecordPayment === void 0 ? void 0 : onRecordPayment(id, data);
                    setIsPaymentModalOpen(false);
                    setPaymentModalInvoice(null);
                    forceRefresh((n)=>n + 1);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewInvoiceModal"], {
                isOpen: isViewInvoiceModalOpen,
                onClose: ()=>{
                    setIsViewInvoiceModalOpen(false);
                    setViewInvoiceModalInvoice(null);
                },
                invoice: viewInvoiceModalInvoice,
                onRecordPayment: (inv)=>{
                    setIsViewInvoiceModalOpen(false);
                    setViewInvoiceModalInvoice(null);
                    setPaymentModalInvoice(inv);
                    setIsPaymentModalOpen(true);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
                lineNumber: 2410,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/screens/ProjectsScreen.tsx",
        lineNumber: 2042,
        columnNumber: 5
    }, this);
}
_s(ProjectsScreen, "pahIZ006lZk4g25wpnYoVY79KRg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"]
    ];
});
_c = ProjectsScreen;
var _c;
__turbopack_context__.k.register(_c, "ProjectsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_crm_screens_ProjectsScreen_tsx_2d074653._.js.map