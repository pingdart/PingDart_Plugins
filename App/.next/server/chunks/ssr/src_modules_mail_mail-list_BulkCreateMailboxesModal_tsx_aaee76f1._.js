module.exports = [
"[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkCreateMailboxesModal",
    ()=>BulkCreateMailboxesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
;
;
;
;
// Helper to generate secure random password
function generateSecurePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*";
    let pwd = "";
    // Ensure at least one upper, lower, digit, symbol
    pwd += "ABCDEFGHJKLMNPQRSTUVWXYZ"[Math.floor(Math.random() * 24)];
    pwd += "abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random() * 24)];
    pwd += "23456789"[Math.floor(Math.random() * 8)];
    pwd += "!@#$%&*"[Math.floor(Math.random() * 7)];
    for(let i = 0; i < 8; i++){
        pwd += chars[Math.floor(Math.random() * chars.length)];
    }
    // Shuffle
    return pwd.split("").sort(()=>0.5 - Math.random()).join("");
}
function BulkCreateMailboxesModal({ isOpen, onClose, domainName, existingMailboxes, onSuccess, userPlan = "Business", isFreePlan = false }) {
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [parsedRows, setParsedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [parseError, setParseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPasswords, setShowPasswords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Execution State
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [completedSummary, setCompletedSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Inline Cell Editing State (double-click to edit)
    const [editingCell, setEditingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editCellValue, setEditCellValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const startEditingCell = (rowId, field, initialValue)=>{
        if (isProcessing) return;
        setEditingCell({
            rowId,
            field
        });
        setEditCellValue(initialValue);
    };
    const commitCellEdit = (rowId, field, value)=>{
        setParsedRows((prev)=>{
            const existingEmailSet = new Set(existingMailboxes.map((mb)=>(mb.email || "").toLowerCase().trim()));
            const updated = prev.map((row)=>{
                if (row.id !== rowId) return row;
                if (field === "fullName") {
                    return {
                        ...row,
                        fullName: value.trim() || row.localPart
                    };
                } else if (field === "password") {
                    const newPass = value.trim();
                    return {
                        ...row,
                        password: newPass || generateSecurePassword(),
                        isAutoPassword: !newPass
                    };
                } else if (field === "quotaMb") {
                    const q = parseInt(value, 10);
                    return {
                        ...row,
                        quotaMb: q > 0 ? q : 1024
                    };
                } else if (field === "email") {
                    let raw = value.trim().toLowerCase();
                    let localPart = "";
                    let email = "";
                    if (raw.includes("@")) {
                        const parts = raw.split("@");
                        localPart = parts[0];
                        email = `${localPart}@${parts[1] || currentDomain}`;
                    } else {
                        localPart = raw.replace(/[^a-z0-9._-]/g, "");
                        email = `${localPart}@${currentDomain}`;
                    }
                    return {
                        ...row,
                        localPart,
                        email
                    };
                }
                return row;
            });
            // Re-validate duplicates and validity across all rows
            const inSheetEmails = new Set();
            return updated.map((row)=>{
                let status = "ready";
                let statusMessage = "Ready to create";
                if (!row.localPart || row.localPart.length < 2) {
                    status = "invalid";
                    statusMessage = "Username too short or invalid format";
                } else if (existingEmailSet.has(row.email)) {
                    status = "duplicate";
                    statusMessage = "Email already exists in domain";
                } else if (inSheetEmails.has(row.email)) {
                    status = "duplicate";
                    statusMessage = "Duplicate in this file";
                } else {
                    inSheetEmails.add(row.email);
                }
                const wasDuplicate = row.status === "duplicate";
                return {
                    ...row,
                    status,
                    statusMessage,
                    selected: wasDuplicate && status === "ready" ? true : status === "invalid" ? false : row.selected
                };
            });
        });
        setEditingCell(null);
    };
    if (!isOpen) return null;
    const currentDomain = (domainName || "example.com").toLowerCase().trim();
    // ─────────────────────────────────────────────────────────────────────────────
    // 1. DEMO EXCEL & CSV TEMPLATE GENERATOR
    // ─────────────────────────────────────────────────────────────────────────────
    const downloadDemoExcel = ()=>{
        try {
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
            const wsData = [
                [
                    "Email",
                    "Password",
                    "Full Name",
                    "Quota (MB)",
                    "Recovery Email"
                ],
                [
                    "support",
                    "SupportHelp2026!",
                    "Customer Support",
                    2048,
                    `admin@${currentDomain}`
                ],
                [
                    "sales",
                    "SalesGrowth2026!",
                    "Sales Department",
                    2048,
                    ""
                ],
                [
                    `alex@${currentDomain}`,
                    "",
                    "Alex Johnson",
                    1024,
                    "alex.personal@gmail.com"
                ],
                [
                    `contact@${currentDomain}`,
                    "Contact2026!",
                    "Info Desk",
                    1024,
                    ""
                ],
                [
                    "billing",
                    "",
                    "Accounts & Billing",
                    1024,
                    ""
                ]
            ];
            const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(wsData);
            // Auto column widths
            ws["!cols"] = [
                {
                    wch: 30
                },
                {
                    wch: 20
                },
                {
                    wch: 24
                },
                {
                    wch: 14
                },
                {
                    wch: 30
                }
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Mailboxes");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, `mailforge_bulk_mailboxes_demo_${currentDomain}.xlsx`);
        } catch (err) {
            console.error("Failed to generate demo excel", err);
        }
    };
    const downloadDemoCsv = ()=>{
        const csvContent = "Email,Password,Full Name,Quota (MB),Recovery Email\n" + `support,SupportHelp2026!,Customer Support,2048,admin@${currentDomain}\n` + "sales,SalesGrowth2026!,Sales Department,2048,\n" + `alex@${currentDomain},,Alex Johnson,1024,alex.personal@gmail.com\n` + `contact@${currentDomain},Contact2026!,Info Desk,1024,\n` + "billing,,Accounts & Billing,1024,\n";
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `mailforge_bulk_mailboxes_demo_${currentDomain}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // ─────────────────────────────────────────────────────────────────────────────
    // 2. EXCEL / CSV FILE PARSING
    // ─────────────────────────────────────────────────────────────────────────────
    const processUploadedFile = async (uploadedFile)=>{
        setFile(uploadedFile);
        setParseError(null);
        setCompletedSummary(null);
        try {
            const buffer = await uploadedFile.arrayBuffer();
            const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](buffer, {
                type: "array"
            });
            const firstSheetName = workbook.SheetNames[0];
            if (!firstSheetName) {
                setParseError("The uploaded workbook has no sheets.");
                return;
            }
            const worksheet = workbook.Sheets[firstSheetName];
            const rawJson = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                defval: ""
            });
            if (!rawJson || rawJson.length === 0) {
                setParseError("No data rows found in the sheet. Please verify the content.");
                return;
            }
            // Existing email set for duplicate detection
            const existingEmailSet = new Set(existingMailboxes.map((mb)=>(mb.email || "").toLowerCase().trim()));
            const rows = [];
            const inSheetEmails = new Set();
            for(let i = 0; i < rawJson.length; i++){
                const row = rawJson[i];
                // Flexible key matching
                const findVal = (possibleKeys)=>{
                    for (const key of Object.keys(row)){
                        const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
                        for (const target of possibleKeys){
                            if (cleanKey === target.toLowerCase().replace(/[^a-z0-9]/g, "")) {
                                return String(row[key]).trim();
                            }
                        }
                    }
                    return "";
                };
                const rawEmailOrUser = findVal([
                    "email",
                    "username",
                    "account",
                    "localpart",
                    "user",
                    "mail"
                ]);
                const rawPassword = findVal([
                    "password",
                    "pass",
                    "pwd"
                ]);
                const rawFullName = findVal([
                    "fullname",
                    "name",
                    "displayname",
                    "user_name"
                ]);
                const rawQuota = findVal([
                    "quota",
                    "quotamb",
                    "storage",
                    "size"
                ]);
                const rawRecovery = findVal([
                    "recoveryemail",
                    "notificationemail",
                    "alternateemail",
                    "recovery",
                    "notification"
                ]);
                if (!rawEmailOrUser) {
                    continue;
                }
                // Format email & localPart
                let localPart = "";
                let email = "";
                if (rawEmailOrUser.includes("@")) {
                    const parts = rawEmailOrUser.toLowerCase().split("@");
                    localPart = parts[0];
                    email = `${localPart}@${parts[1] || currentDomain}`;
                } else {
                    localPart = rawEmailOrUser.toLowerCase().replace(/[^a-z0-9._-]/g, "");
                    email = `${localPart}@${currentDomain}`;
                }
                let isAutoPassword = false;
                let password = rawPassword;
                if (!password) {
                    password = generateSecurePassword();
                    isAutoPassword = true;
                }
                const quotaMb = parseInt(rawQuota, 10) > 0 ? parseInt(rawQuota, 10) : 1024;
                const fullName = rawFullName || localPart;
                // Validation
                let status = "ready";
                let statusMessage = "Ready to create";
                if (!localPart || localPart.length < 2) {
                    status = "invalid";
                    statusMessage = "Username too short or invalid format";
                } else if (existingEmailSet.has(email)) {
                    status = "duplicate";
                    statusMessage = "Email already exists in domain";
                } else if (inSheetEmails.has(email)) {
                    status = "duplicate";
                    statusMessage = "Duplicate in this file";
                } else {
                    inSheetEmails.add(email);
                }
                rows.push({
                    id: `row-${i}-${Date.now()}`,
                    localPart,
                    email,
                    password,
                    isAutoPassword,
                    fullName,
                    quotaMb,
                    notificationEmail: rawRecovery,
                    status,
                    statusMessage,
                    selected: status === "ready",
                    execStatus: "pending"
                });
            }
            if (rows.length === 0) {
                setParseError("Could not find any valid email or username columns in the spreadsheet.");
                return;
            }
            setParsedRows(rows);
        } catch (err) {
            console.error("Error parsing spreadsheet file", err);
            setParseError(err.message || "Failed to parse spreadsheet file.");
        }
    };
    const handleFileDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processUploadedFile(e.dataTransfer.files[0]);
        }
    };
    const handleFileSelect = (e)=>{
        if (e.target.files && e.target.files[0]) {
            processUploadedFile(e.target.files[0]);
        }
    };
    const handleToggleSelectAll = (checked)=>{
        setParsedRows((prev)=>prev.map((r)=>({
                    ...r,
                    selected: r.status !== "invalid" ? checked : false
                })));
    };
    const handleToggleRow = (id)=>{
        setParsedRows((prev)=>prev.map((r)=>r.id === id ? {
                    ...r,
                    selected: !r.selected
                } : r));
    };
    // ─────────────────────────────────────────────────────────────────────────────
    // 3. BATCH ACCOUNT PROVISIONING EXECUTION
    // ─────────────────────────────────────────────────────────────────────────────
    const handleStartBulkProvisioning = async ()=>{
        const selectedRows = parsedRows.filter((r)=>r.selected);
        if (selectedRows.length === 0) return;
        setIsProcessing(true);
        setCurrentIndex(0);
        let successCount = 0;
        let alreadyExistsCount = 0;
        let failedCount = 0;
        for(let idx = 0; idx < parsedRows.length; idx++){
            const row = parsedRows[idx];
            if (!row.selected) continue;
            setCurrentIndex(idx + 1);
            // If pre-validation already confirmed this email exists in domain:
            if (row.status === "duplicate") {
                alreadyExistsCount++;
                setParsedRows((prev)=>prev.map((r, i)=>i === idx ? {
                            ...r,
                            execStatus: "error",
                            execMessage: "Already exists in domain (Skipped)"
                        } : r));
                continue;
            }
            // Update row to running
            setParsedRows((prev)=>prev.map((r, i)=>i === idx ? {
                        ...r,
                        execStatus: "running",
                        execMessage: "Provisioning mailbox..."
                    } : r));
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/mailboxes", {
                    email: row.email,
                    password: row.password,
                    fullName: row.fullName,
                    quotaMb: row.quotaMb,
                    notificationEmail: row.notificationEmail || undefined
                });
                if (res.data && res.data.success) {
                    successCount++;
                    setParsedRows((prev)=>prev.map((r, i)=>i === idx ? {
                                ...r,
                                execStatus: "success",
                                execMessage: "Created successfully"
                            } : r));
                } else {
                    const rawMsg = res.data?.message || "Failed to create";
                    const isExists = /already exists|already registered|duplicate|already in use/i.test(rawMsg);
                    if (isExists) {
                        alreadyExistsCount++;
                    } else {
                        failedCount++;
                    }
                    setParsedRows((prev)=>prev.map((r, i)=>i === idx ? {
                                ...r,
                                execStatus: "error",
                                execMessage: isExists ? "Already exists (Skipped)" : rawMsg
                            } : r));
                }
            } catch (err) {
                const rawMsg = err.response?.data?.message || err.message || "Failed to create";
                const isExists = /already exists|already registered|duplicate|already in use/i.test(rawMsg) || err.response?.status === 409;
                if (isExists) {
                    alreadyExistsCount++;
                } else {
                    failedCount++;
                }
                setParsedRows((prev)=>prev.map((r, i)=>i === idx ? {
                            ...r,
                            execStatus: "error",
                            execMessage: isExists ? "Already exists (Skipped)" : rawMsg
                        } : r));
            // Do NOT abort! Continue creating remaining emails!
            }
        }
        setIsProcessing(false);
        setCompletedSummary({
            total: selectedRows.length,
            success: successCount,
            alreadyExists: alreadyExistsCount,
            failed: failedCount
        });
        if (successCount > 0 && onSuccess) {
            onSuccess();
        }
    };
    // ─────────────────────────────────────────────────────────────────────────────
    // 4. DOWNLOAD CREATED CREDENTIALS REPORT
    // ─────────────────────────────────────────────────────────────────────────────
    const downloadCredentialsReport = ()=>{
        try {
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
            const reportRows = [
                [
                    "Email",
                    "Password",
                    "Full Name",
                    "Quota (MB)",
                    "Recovery Email",
                    "Provisioning Status",
                    "Notes"
                ]
            ];
            parsedRows.forEach((r)=>{
                if (r.selected) {
                    const isExists = r.execMessage?.toLowerCase().includes("already exists");
                    reportRows.push([
                        r.email,
                        r.password,
                        r.fullName,
                        String(r.quotaMb),
                        r.notificationEmail,
                        r.execStatus === "success" ? "SUCCESS" : isExists ? "ALREADY_EXISTS (SKIPPED)" : "FAILED",
                        r.execMessage || ""
                    ]);
                }
            });
            const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(reportRows);
            ws["!cols"] = [
                {
                    wch: 30
                },
                {
                    wch: 22
                },
                {
                    wch: 24
                },
                {
                    wch: 14
                },
                {
                    wch: 28
                },
                {
                    wch: 26
                },
                {
                    wch: 30
                }
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Created Accounts");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, `mailforge_created_accounts_${currentDomain}.xlsx`);
        } catch (err) {
            console.error("Failed to download credentials report", err);
        }
    };
    const selectedCount = parsedRows.filter((r)=>r.selected).length;
    const readyCount = parsedRows.filter((r)=>r.status === "ready").length;
    const duplicateCount = parsedRows.filter((r)=>r.status === "duplicate").length;
    const invalidCount = parsedRows.filter((r)=>r.status === "invalid").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#151d2a] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 584,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                            children: "Bulk Create Email Accounts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: [
                                                "Provision multiple mailboxes on ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-indigo-600 dark:text-indigo-400",
                                                    children: [
                                                        "@",
                                                        currentDomain
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 49
                                                }, this),
                                                " via Excel (.xlsx) or CSV"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: isProcessing,
                            className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                    lineNumber: 581,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 text-slate-800 dark:text-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                lineNumber: 610,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 609,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-slate-900 dark:text-slate-100",
                                                    children: "Need a pre-formatted template?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5",
                                                    children: "Download our ready-to-use sample spreadsheet with example columns (Email, Password, Name, Quota, Recovery)."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 shrink-0 w-full sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: downloadDemoExcel,
                                            className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all shadow-xs active:scale-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Demo Excel (.xlsx)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: downloadDemoCsv,
                                            className: "flex items-center justify-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-all active:scale-95",
                                            title: "Download as CSV text",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: ".csv"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 630,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 607,
                            columnNumber: 11
                        }, this),
                        !parsedRows.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onDragOver: (e)=>{
                                e.preventDefault();
                                setIsDragging(true);
                            },
                            onDragLeave: ()=>setIsDragging(false),
                            onDrop: handleFileDrop,
                            onClick: ()=>fileInputRef.current?.click(),
                            className: `border-2 border-dashed rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${isDragging ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 scale-[0.99]" : "border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/40"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: ".xlsx,.xls,.csv",
                                    onChange: handleFileSelect,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 658,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 shadow-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        size: 26
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 665,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                    children: "Drag & drop your Excel sheet here"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 668,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm",
                                    children: [
                                        "Supports ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-emerald-600 dark:text-emerald-400",
                                            children: ".xlsx, .xls"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 672,
                                            columnNumber: 26
                                        }, this),
                                        ", or ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-emerald-600 dark:text-emerald-400",
                                            children: ".csv"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 672,
                                            columnNumber: 120
                                        }, this),
                                        " files. Click to browse from your device."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 644,
                            columnNumber: 13
                        }, this),
                        parseError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-xl text-xs font-medium border border-red-200/60 dark:border-red-900/40 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 16,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 680,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: parseError
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 679,
                            columnNumber: 13
                        }, this),
                        parsedRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                    size: 16,
                                                    className: "text-emerald-600 dark:text-emerald-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-slate-800 dark:text-slate-200 truncate",
                                                    children: file?.name || "Uploaded Spreadsheet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: [
                                                        "(",
                                                        parsedRows.length,
                                                        " ",
                                                        parsedRows.length === 1 ? "row" : "rows",
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 690,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setParsedRows([]);
                                                    setFile(null);
                                                    setParseError(null);
                                                    setCompletedSummary(null);
                                                },
                                                disabled: isProcessing,
                                                className: "text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline px-2 py-1",
                                                children: "Change File"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                lineNumber: 700,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 699,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase font-bold text-slate-400",
                                                    children: "Total Rows"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base font-extrabold text-slate-800 dark:text-slate-200 mt-0.5",
                                                    children: parsedRows.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400",
                                                    children: "Ready to Create"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base font-extrabold text-emerald-700 dark:text-emerald-300 mt-0.5",
                                                    children: readyCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 724,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400",
                                                    children: "Duplicates"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base font-extrabold text-amber-700 dark:text-amber-300 mt-0.5",
                                                    children: duplicateCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 730,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 bg-red-50/50 dark:bg-red-950/20 border border-red-200/70 dark:border-red-900/40 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] uppercase font-bold text-red-600 dark:text-red-400",
                                                    children: "Invalid"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base font-extrabold text-red-700 dark:text-red-300 mt-0.5",
                                                    children: invalidCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 736,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 717,
                                    columnNumber: 15
                                }, this),
                                isFreePlan && readyCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl text-xs flex items-start gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 16,
                                            className: "text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 747,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Free Plan Notice:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 21
                                                }, this),
                                                " Your current plan includes 1 primary active mailbox. Additional mailboxes will be provisioned in standby mode until upgrading to Business or Enterprise."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 748,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 746,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-xs font-semibold cursor-pointer select-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedCount === parsedRows.filter((r)=>r.status !== "invalid").length && selectedCount > 0,
                                                        onChange: (e)=>handleToggleSelectAll(e.target.checked),
                                                        disabled: isProcessing,
                                                        className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                        lineNumber: 758,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Select All Valid (",
                                                            selectedCount,
                                                            " selected)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                lineNumber: 757,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 756,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:flex text-[11px] text-indigo-600 dark:text-indigo-400 font-medium items-center gap-1 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Double-click any cell to edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPasswords(!showPasswords),
                                                    className: "flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors",
                                                    children: [
                                                        showPasswords ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 38
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 61
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: showPasswords ? "Hide Passwords" : "Peek Passwords"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 768,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 755,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto max-h-72 border border-slate-200/80 dark:border-slate-800 rounded-xl shadow-2xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "sticky top-0 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-xs border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider text-[10px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 w-10 text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Email Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Quota"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 794,
                                                            columnNumber: 23
                                                        }, this),
                                                        (isProcessing || completedSummary) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Result / Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 795,
                                                            columnNumber: 62
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                lineNumber: 787,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-100 dark:divide-slate-800/60 font-medium",
                                                children: parsedRows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: `transition-colors ${!r.selected ? "opacity-50 bg-slate-50/50 dark:bg-slate-900/20" : r.execStatus === "success" ? "bg-emerald-50/30 dark:bg-emerald-950/15" : r.execStatus === "error" ? "bg-amber-50/30 dark:bg-amber-950/15" : "hover:bg-slate-50/80 dark:hover:bg-slate-800/30"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: r.selected,
                                                                    disabled: isProcessing || r.status === "invalid",
                                                                    onChange: ()=>handleToggleRow(r.id),
                                                                    className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 813,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 812,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                onDoubleClick: ()=>startEditingCell(r.id, "email", r.email),
                                                                className: "p-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-colors group",
                                                                title: "Double-click to edit email",
                                                                children: editingCell?.rowId === r.id && editingCell?.field === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    autoFocus: true,
                                                                    value: editCellValue,
                                                                    onChange: (e)=>setEditCellValue(e.target.value),
                                                                    onBlur: ()=>commitCellEdit(r.id, "email", editCellValue),
                                                                    onKeyDown: (e)=>{
                                                                        if (e.key === "Enter") commitCellEdit(r.id, "email", editCellValue);
                                                                        if (e.key === "Escape") setEditingCell(null);
                                                                    },
                                                                    className: "w-full px-2 py-1 text-xs font-semibold border border-indigo-500 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs focus:outline-hidden"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 828,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: r.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 842,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 11,
                                                                            className: "text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 843,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                onDoubleClick: ()=>startEditingCell(r.id, "fullName", r.fullName),
                                                                className: "p-3 text-slate-600 dark:text-slate-300 whitespace-nowrap cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-colors group",
                                                                title: "Double-click to edit full name",
                                                                children: editingCell?.rowId === r.id && editingCell?.field === "fullName" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    autoFocus: true,
                                                                    value: editCellValue,
                                                                    onChange: (e)=>setEditCellValue(e.target.value),
                                                                    onBlur: ()=>commitCellEdit(r.id, "fullName", editCellValue),
                                                                    onKeyDown: (e)=>{
                                                                        if (e.key === "Enter") commitCellEdit(r.id, "fullName", editCellValue);
                                                                        if (e.key === "Escape") setEditingCell(null);
                                                                    },
                                                                    className: "w-full px-2 py-1 text-xs border border-indigo-500 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs focus:outline-hidden"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 855,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: r.fullName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 869,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 11,
                                                                            className: "text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 870,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 849,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                onDoubleClick: ()=>startEditingCell(r.id, "password", r.password),
                                                                className: "p-3 font-mono text-[11px] whitespace-nowrap cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-colors group",
                                                                title: "Double-click to edit password",
                                                                children: editingCell?.rowId === r.id && editingCell?.field === "password" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    autoFocus: true,
                                                                    value: editCellValue,
                                                                    onChange: (e)=>setEditCellValue(e.target.value),
                                                                    onBlur: ()=>commitCellEdit(r.id, "password", editCellValue),
                                                                    onKeyDown: (e)=>{
                                                                        if (e.key === "Enter") commitCellEdit(r.id, "password", editCellValue);
                                                                        if (e.key === "Escape") setEditingCell(null);
                                                                    },
                                                                    className: "w-full px-2 py-1 text-xs font-mono border border-indigo-500 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs focus:outline-hidden"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 882,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        showPasswords ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-800 dark:text-slate-200",
                                                                            children: r.password
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 897,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-400 tracking-widest",
                                                                            children: "••••••••"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 899,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        r.isAutoPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-1 text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-600 dark:text-slate-300",
                                                                            children: "Auto"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 902,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 11,
                                                                            className: "text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 906,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 895,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 876,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                onDoubleClick: ()=>startEditingCell(r.id, "quotaMb", String(r.quotaMb)),
                                                                className: "p-3 text-slate-500 whitespace-nowrap cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-colors group",
                                                                title: "Double-click to edit quota",
                                                                children: editingCell?.rowId === r.id && editingCell?.field === "quotaMb" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    autoFocus: true,
                                                                    value: editCellValue,
                                                                    onChange: (e)=>setEditCellValue(e.target.value),
                                                                    onBlur: ()=>commitCellEdit(r.id, "quotaMb", editCellValue),
                                                                    onKeyDown: (e)=>{
                                                                        if (e.key === "Enter") commitCellEdit(r.id, "quotaMb", editCellValue);
                                                                        if (e.key === "Escape") setEditingCell(null);
                                                                    },
                                                                    className: "w-24 px-2 py-1 text-xs border border-indigo-500 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs focus:outline-hidden"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 918,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                r.quotaMb,
                                                                                " MB"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 932,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 11,
                                                                            className: "text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 933,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 931,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 whitespace-nowrap",
                                                                children: r.status === "ready" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 940,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " Ready"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 939,
                                                                    columnNumber: 29
                                                                }, this) : r.status === "duplicate" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 944,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " Duplicate"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 943,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200/80 dark:border-red-800/60",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 948,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        " Invalid"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 937,
                                                                columnNumber: 25
                                                            }, this),
                                                            (isProcessing || completedSummary) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 whitespace-nowrap text-[11px]",
                                                                children: r.execStatus === "running" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            size: 12,
                                                                            className: "animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 956,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " Creating..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 955,
                                                                    columnNumber: 31
                                                                }, this) : r.execStatus === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 960,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " Created"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 959,
                                                                    columnNumber: 31
                                                                }, this) : r.execStatus === "error" ? r.execMessage?.toLowerCase().includes("already exists") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold border border-amber-200/80 dark:border-amber-800/60",
                                                                    title: r.execMessage,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 965,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        " Already Exists (Skipped)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 964,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-bold border border-red-200/80 dark:border-red-800/60",
                                                                    title: r.execMessage,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                            lineNumber: 969,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        " ",
                                                                        r.execMessage || "Failed"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 968,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-400 font-normal",
                                                                    children: "Pending"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                lineNumber: 953,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, r.id, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                lineNumber: 798,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 786,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 785,
                                    columnNumber: 15
                                }, this),
                                isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/40 rounded-xl space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 14,
                                                            className: "animate-spin text-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 988,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Provisioning mailboxes..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        currentIndex,
                                                        " of ",
                                                        selectedCount,
                                                        " (",
                                                        Math.round(currentIndex / selectedCount * 100),
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 986,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out",
                                                style: {
                                                    width: `${currentIndex / selectedCount * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                lineNumber: 996,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 995,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 985,
                                    columnNumber: 17
                                }, this),
                                completedSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 rounded-xl space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 16,
                                                                    className: "text-emerald-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1010,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Provisioning Finished!"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-emerald-700 dark:text-emerald-300 mt-0.5",
                                                            children: [
                                                                "Successfully created ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: completedSummary.success
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1014,
                                                                    columnNumber: 46
                                                                }, this),
                                                                " accounts.",
                                                                completedSummary.alreadyExists > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-amber-700 dark:text-amber-300 font-semibold",
                                                                    children: [
                                                                        " ",
                                                                        "• ",
                                                                        completedSummary.alreadyExists,
                                                                        " already existed (skipped)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1016,
                                                                    columnNumber: 27
                                                                }, this),
                                                                completedSummary.failed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-600 dark:text-red-400 font-semibold",
                                                                    children: [
                                                                        " ",
                                                                        "• ",
                                                                        completedSummary.failed,
                                                                        " other failed"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1021,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1013,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: downloadCredentialsReport,
                                                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all shadow-xs active:scale-95 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Download Credentials Report"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1033,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 1027,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 19
                                        }, this),
                                        parsedRows.some((r)=>r.selected && r.execStatus === "error") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-amber-50/80 dark:bg-amber-950/50 border border-amber-200/80 dark:border-amber-900/50 rounded-lg text-xs space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            size: 14,
                                                            className: "text-amber-600 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1041,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Skipped Accounts (Remaining accounts were created successfully):"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1042,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 1040,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-28 overflow-y-auto space-y-1 pl-5",
                                                    children: parsedRows.filter((r)=>r.selected && r.execStatus === "error").map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold",
                                                                    children: r.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1049,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-amber-500",
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1050,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "italic",
                                                                    children: r.execMessage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                                    lineNumber: 1051,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, r.id, true, {
                                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                                    lineNumber: 1044,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                            lineNumber: 1039,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                    lineNumber: 605,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isProcessing,
                            className: "px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50",
                            children: completedSummary ? "Close" : "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 1065,
                            columnNumber: 11
                        }, this),
                        parsedRows.length > 0 && !completedSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleStartBulkProvisioning,
                            disabled: isProcessing || selectedCount === 0,
                            className: "flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-lg transition-all shadow-md shadow-emerald-600/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 15,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 1083,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Provisioning (",
                                            currentIndex,
                                            "/",
                                            selectedCount,
                                            ")..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Create ",
                                            selectedCount,
                                            " ",
                                            selectedCount === 1 ? "Account" : "Accounts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                                        lineNumber: 1089,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 1075,
                            columnNumber: 13
                        }, this),
                        completedSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-all shadow-md shadow-indigo-600/20 active:scale-95",
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                            lineNumber: 1096,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
                    lineNumber: 1064,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
            lineNumber: 579,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx",
        lineNumber: 578,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_modules_mail_mail-list_BulkCreateMailboxesModal_tsx_aaee76f1._.js.map