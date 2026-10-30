module.exports = [
"[project]/src/app/user/components/modules/budget/services/budgetStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUDGET_ONBOARDED_GLOBAL_KEY",
    ()=>BUDGET_ONBOARDED_GLOBAL_KEY,
    "BUDGET_ONBOARDED_KEY_PREFIX",
    ()=>BUDGET_ONBOARDED_KEY_PREFIX,
    "DEFAULT_EMPTY_BUDGET_STATE",
    ()=>DEFAULT_EMPTY_BUDGET_STATE,
    "DEFAULT_INITIAL_ACCOUNTS",
    ()=>DEFAULT_INITIAL_ACCOUNTS,
    "HAS_SEEN_BUDGET_ONBOARDING_KEY",
    ()=>HAS_SEEN_BUDGET_ONBOARDING_KEY,
    "STORAGE_PREFIX",
    ()=>STORAGE_PREFIX,
    "calculateHealthMetrics",
    ()=>calculateHealthMetrics,
    "calculateNetAvailable",
    ()=>calculateNetAvailable,
    "checkDuplicateWithTransactions",
    ()=>checkDuplicateWithTransactions,
    "clearUserBudgetData",
    ()=>clearUserBudgetData,
    "fetchAndHydrateFromRemoteVault",
    ()=>fetchAndHydrateFromRemoteVault,
    "hasBudgetData",
    ()=>hasBudgetData,
    "hydrateUserBudgetStateFromSafeStorage",
    ()=>hydrateUserBudgetStateFromSafeStorage,
    "isUserBudgetOnboarded",
    ()=>isUserBudgetOnboarded,
    "loadUserBudgetState",
    ()=>loadUserBudgetState,
    "markUserBudgetOnboarded",
    ()=>markUserBudgetOnboarded,
    "saveUserBudgetState",
    ()=>saveUserBudgetState,
    "syncWithRemoteVault",
    ()=>syncWithRemoteVault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-ssr] (ecmascript)");
"use client";
;
;
const STORAGE_PREFIX = "pingdart_budget_vault_v1_";
const BUDGET_ONBOARDED_KEY_PREFIX = "pingdart_budget_onboarded_";
const BUDGET_ONBOARDED_GLOBAL_KEY = "pingdart_budget_onboarded_any";
const HAS_SEEN_BUDGET_ONBOARDING_KEY = "hasSeenBudgetOnboarding";
function hasBudgetData(raw) {
    if (!raw) return false;
    try {
        const state = JSON.parse(raw);
        const hasTx = Array.isArray(state?.transactions) && state.transactions.length > 0;
        const hasIncome = typeof state?.monthlyIncome === "number" && state.monthlyIncome > 0;
        const hasQueue = Array.isArray(state?.pendingQueue) && state.pendingQueue.length > 0;
        const hasGoals = Array.isArray(state?.goals) && state.goals.length > 0;
        const hasSubs = Array.isArray(state?.subscriptions) && state.subscriptions.length > 0;
        const hasCustomAccounts = Array.isArray(state?.accounts) && state.accounts.some((a)=>a.id !== "acc-bank-1" && a.balance > 0 || a.id === "acc-bank-1" && a.balance !== 49605);
        return Boolean(hasTx || hasIncome || hasQueue || hasGoals || hasSubs || hasCustomAccounts);
    } catch  {
        return false;
    }
}
async function hydrateUserBudgetStateFromSafeStorage(userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const key = undefined;
}
function isUserBudgetOnboarded(userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function markUserBudgetOnboarded(userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const DEFAULT_INITIAL_ACCOUNTS = [
    {
        id: "acc-bank-1",
        name: "Main Bank Account",
        type: "bank",
        balance: 49605,
        isPrimary: true,
        color: "#4f46e5"
    },
    {
        id: "acc-cash-1",
        name: "Cash Wallet",
        type: "cash",
        balance: 0,
        isPrimary: false,
        color: "#10b981"
    },
    {
        id: "acc-upi-1",
        name: "UPI / Digital Wallet",
        type: "upi",
        balance: 0,
        isPrimary: false,
        color: "#06b6d4"
    }
];
const DEFAULT_EMPTY_BUDGET_STATE = {
    currency: "INR",
    isOnboarded: false,
    monthlyIncome: 0,
    budgetCap: 0,
    transactions: [],
    pendingQueue: [],
    categories: [
        {
            name: "Food & Dining",
            spent: 0,
            cap: 0,
            color: "bg-indigo-600"
        },
        {
            name: "Shopping & E-Commerce",
            spent: 0,
            cap: 0,
            color: "bg-blue-600"
        },
        {
            name: "Fuel & Transportation",
            spent: 0,
            cap: 0,
            color: "bg-violet-600"
        },
        {
            name: "Bills & Utilities",
            spent: 0,
            cap: 0,
            color: "bg-sky-500"
        },
        {
            name: "Entertainment & Leisure",
            spent: 0,
            cap: 0,
            color: "bg-slate-700"
        }
    ],
    goals: [],
    subscriptions: [],
    challenges: [],
    copilotMessages: [],
    accounts: DEFAULT_INITIAL_ACCOUNTS,
    debtLoans: [],
    billReminders: [],
    recurringIncomes: [],
    expenseSplits: [],
    lastLearningAt: undefined,
    isAiLearningActive: true,
    memorySizeBytes: 1024
};
function loadUserBudgetState(userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_EMPTY_BUDGET_STATE;
    //TURBOPACK unreachable
    ;
}
function saveUserBudgetState(state, userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function clearUserBudgetData(userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function syncWithRemoteVault(state, _userId) {
    try {
        const payloadString = JSON.stringify(state);
        const b64Payload = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Buffer.from(payloadString).toString("base64");
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/ai-budget/vault/sync", {
            encryptedLedgerPayload: b64Payload,
            iv: "client_aes256_iv_" + Date.now(),
            authTag: "client_auth_tag_" + Date.now(),
            currencyCode: state.currency || "INR",
            clientVersion: 1
        });
    } catch (err) {
        console.warn("[budgetStorage] syncWithRemoteVault failed:", err);
    }
}
async function fetchAndHydrateFromRemoteVault(userId = "guest") {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function calculateNetAvailable(accounts = []) {
    return accounts.reduce((acc, account)=>{
        // Credit card balances represent liabilities/debt if tracked as negative, or limits
        if (account.type === "credit_card") {
            return acc - Math.max(0, account.balance);
        }
        return acc + account.balance;
    }, 0);
}
function checkDuplicateWithTransactions(amount, merchantClean, existingTransactions) {
    const norm = merchantClean.toLowerCase().trim();
    return existingTransactions.find((t)=>{
        const matchAmount = Math.abs(t.amount - amount) < 0.01;
        const tNorm = t.merchantClean.toLowerCase().trim();
        const matchMerchant = tNorm.includes(norm) || norm.includes(tNorm);
        return matchAmount && matchMerchant;
    }) || null;
}
function calculateHealthMetrics(state) {
    const { monthlyIncome, transactions, budgetCap, goals, accounts } = state;
    const totalSpent = transactions.filter((t)=>t.type === "expense").reduce((sum, t)=>sum + t.amount, 0);
    const totalInflow = monthlyIncome || transactions.filter((t)=>t.type === "income").reduce((sum, t)=>sum + t.amount, 0);
    const netAvailable = calculateNetAvailable(accounts);
    // If no transactions exist, return clean uncalculated status
    if (transactions.length === 0) {
        return {
            score: 0,
            tier: "Awaiting Confirmed Transactions",
            savingsRate: 0,
            savingsScore: 0,
            disciplineScore: 0,
            goalsScore: 0,
            stabilityScore: 0,
            totalSpent: 0,
            totalInflow,
            remainingBalance: totalInflow,
            netAvailable
        };
    }
    const remainingBalance = totalInflow - totalSpent;
    const savingsRate = totalInflow > 0 ? Math.max(0, totalInflow - totalSpent) / totalInflow * 100 : 0;
    // 1. Savings Rate Component (Max 30 pts)
    let savingsScore = 0;
    if (savingsRate >= 20) savingsScore = 30;
    else if (savingsRate > 0) savingsScore = Math.round(savingsRate / 20 * 30);
    // 2. Budget Discipline Component (Max 30 pts)
    let disciplineScore = 0;
    if (budgetCap > 0) {
        if (totalSpent <= budgetCap) disciplineScore = 30;
        else if (totalSpent <= budgetCap * 1.1) disciplineScore = 15;
        else disciplineScore = 5;
    } else if (totalInflow > 0 && totalSpent <= totalInflow) {
        // Moderate baseline if staying within means without explicit caps
        disciplineScore = 15;
    }
    // 3. Goals Progress Component (Max 20 pts)
    let goalsScore = 0;
    if (goals.length > 0) {
        const goalsFunded = goals.filter((g)=>g.currentAmount > 0).length;
        goalsScore = Math.min(20, goalsFunded * 10);
    }
    // 4. Stability / Queue Clearance (Max 20 pts)
    const stabilityScore = state.pendingQueue.length === 0 ? 20 : Math.max(5, 20 - state.pendingQueue.length * 5);
    const composite = Math.min(100, Math.max(0, savingsScore + disciplineScore + goalsScore + stabilityScore));
    let tier = "Steady Tracker";
    if (composite >= 85) tier = "Disciplined Wealth Builder";
    else if (composite >= 70) tier = "Prudent Balancer";
    else if (composite >= 50) tier = "Active Budgeter";
    else tier = "Needs Attention";
    return {
        score: composite,
        tier,
        savingsRate: Math.round(savingsRate * 10) / 10,
        savingsScore,
        disciplineScore,
        goalsScore,
        stabilityScore,
        totalSpent,
        totalInflow,
        remainingBalance,
        netAvailable
    };
}
}),
"[project]/src/app/user/components/modules/budget/services/copilotEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * copilotEngine.ts
 *
 * Pure financial reasoning engine — no React, no state.
 * Takes the current budget state + metrics and answers natural-language queries.
 * Extracted from CopilotScreen so it can be tested independently.
 */ __turbopack_context__.s([
    "generateCopilotResponse",
    ()=>generateCopilotResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/services/budgetStorage.ts [app-ssr] (ecmascript)");
;
function generateCopilotResponse(userPrompt, state, currencySymbol) {
    const q = userPrompt.toLowerCase();
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateHealthMetrics"])(state);
    const { monthlyIncome, transactions, categories, goals, subscriptions } = state;
    const remainingBalance = metrics.remainingBalance;
    // ── Affordability ("can I afford", "buy", "purchase") ──────────────────────
    const amountMatch = q.match(/(?:(?:rs\.?|₹|\$)\s*|for\s+|costs?\s+)?(\d+(?:,\d+)*(?:\.\d+)?)/i);
    if (q.includes("afford") || q.includes("can i buy") || amountMatch && (q.includes("buy") || q.includes("get"))) {
        if (amountMatch) {
            const cost = parseFloat(amountMatch[1].replace(/,/g, ""));
            if (cost > 0) {
                if (monthlyIncome === 0 && transactions.length === 0) {
                    return `Based on your Zero-Knowledge ledger, you haven't recorded your baseline income yet. Please set your monthly income in Settings to enable precise affordability modeling.`;
                }
                if (cost <= remainingBalance) {
                    const afterBalance = remainingBalance - cost;
                    let advice = `Yes, you can afford this purchase of ${currencySymbol}${cost.toLocaleString()} this month. It will leave you with ${currencySymbol}${afterBalance.toLocaleString()} in remaining liquidity.`;
                    if (goals.length > 0) {
                        advice += `\n\n📌 Note: This will utilize ${(cost / (monthlyIncome || 1) * 100).toFixed(0)}% of your monthly cash flow, but won't breach your primary goal (${goals[0].name}).`;
                    }
                    return advice;
                } else {
                    const deficit = cost - remainingBalance;
                    let advice = `⚠️ Purchasing this for ${currencySymbol}${cost.toLocaleString()} is currently not recommended. It exceeds your available monthly balance (${currencySymbol}${remainingBalance.toLocaleString()}) by ${currencySymbol}${deficit.toLocaleString()}.`;
                    if (goals.length > 0) {
                        advice += `\n\nProceeding would delay your "${goals[0].name}" goal by approximately ${Math.ceil(deficit / (goals[0].monthlyAllocation || 1000))} month(s). Consider splitting into installments or pacing over two cycles.`;
                    }
                    return advice;
                }
            }
        }
        return `To evaluate affordability accurately, please specify the estimated cost (e.g. "Can I afford a ₹45,000 laptop?"). I will cross-reference it with your live ledger liquidity (${currencySymbol}${remainingBalance.toLocaleString()}).`;
    }
    // ── Savings / spending analysis ────────────────────────────────────────────
    if (q.includes("why did") || q.includes("savings drop") || q.includes("where did my money go") || q.includes("spending")) {
        if (transactions.length === 0) {
            return `You currently have zero recorded transactions in your ledger. As you approve debit alerts from Swiggy, Amazon, or UPI, I will break down which category caused unexpected outflow shifts.`;
        }
        const topCat = [
            ...categories
        ].sort((a, b)=>b.spent - a.spent)[0];
        return `Based on your confirmed records, your total outflows stand at ${currencySymbol}${metrics.totalSpent.toLocaleString()}. Your largest outflow category is ${topCat ? `${topCat.name} (${currencySymbol}${topCat.spent.toLocaleString()})` : "discretionary spending"}. Maintaining category caps will restore your savings rate to ${metrics.savingsRate}%.`;
    }
    // ── Subscription leaks ─────────────────────────────────────────────────────
    if (q.includes("wasting") || q.includes("leak") || q.includes("subscriptions") || q.includes("save more")) {
        if (subscriptions.length === 0) {
            return `No recurring subscriptions are currently tracked in your Kill Center. If you have auto-debits like Netflix, Spotify, or cloud tools, add them in the Subscriptions tab to check for leaks.`;
        }
        const subTotal = subscriptions.reduce((sum, s)=>sum + s.amount, 0);
        return `You have ${subscriptions.length} active recurring subscription(s) totaling ${currencySymbol}${subTotal.toLocaleString()}/month (${currencySymbol}${(subTotal * 12).toLocaleString()}/year). Review your Subscription Kill Center to cancel underutilized services.`;
    }
    // ── Weekly allowance ───────────────────────────────────────────────────────
    if (q.includes("this week") || q.includes("weekly") || q.includes("allowance")) {
        const weeklySafe = Math.round(remainingBalance / 4);
        return `With ${currencySymbol}${remainingBalance.toLocaleString()} in remaining monthly liquidity, your recommended weekly spending cap is ${currencySymbol}${weeklySafe.toLocaleString()} to preserve your target savings velocity.`;
    }
    // ── Account balances / net worth ───────────────────────────────────────────
    if (q.includes("cash") || q.includes("account") || q.includes("net worth") || q.includes("balance")) {
        const accounts = state.accounts || [];
        const cashAcc = accounts.find((a)=>a.type === "cash");
        const totalAvailable = accounts.reduce((acc, a)=>acc + (a.type === "credit_card" ? -a.balance : a.balance), 0);
        const accList = accounts.map((a)=>`${a.name}: ${a.balance < 0 ? `-${currencySymbol}${Math.abs(a.balance).toLocaleString()}` : `${currencySymbol}${a.balance.toLocaleString()}`}`).join(", ");
        const totalStr = totalAvailable < 0 ? `-${currencySymbol}${Math.abs(totalAvailable).toLocaleString()}` : `${currencySymbol}${totalAvailable.toLocaleString()}`;
        const cashStr = cashAcc ? ` Your Cash Wallet has ${cashAcc.balance < 0 ? `-${currencySymbol}${Math.abs(cashAcc.balance).toLocaleString()}` : `${currencySymbol}${cashAcc.balance.toLocaleString()}`}.` : "";
        return `Across your ${accounts.length} connected account(s), your Total Net Available is ${totalStr}.${cashStr} Breakdown: ${accList || "No accounts configured"}.`;
    }
    // ── Debts / loans / EMIs ───────────────────────────────────────────────────
    if (q.includes("debt") || q.includes("loan") || q.includes("emi") || q.includes("who owes me") || q.includes("borrowed") || q.includes("lent")) {
        const debts = state.debtLoans || [];
        if (debts.length === 0) {
            return `You have zero recorded debts, loans, or EMIs. You can log borrowed or lent amounts in the Transactions & Accounts tab.`;
        }
        const lent = debts.filter((d)=>d.type === "lent" && !d.isSettled).reduce((s, d)=>s + d.remainingAmount, 0);
        const borrowed = debts.filter((d)=>d.type === "borrowed" && !d.isSettled).reduce((s, d)=>s + d.remainingAmount, 0);
        const emis = debts.filter((d)=>d.type === "emi" && !d.isSettled);
        return `Debt & Loan Overview: Friends owe you ${currencySymbol}${lent.toLocaleString()} (lent), you owe ${currencySymbol}${borrowed.toLocaleString()} (borrowed), and you have ${emis.length} active EMI(s).`;
    }
    // ── Upcoming bills ─────────────────────────────────────────────────────────
    if (q.includes("bill") || q.includes("upcoming") || q.includes("rent") || q.includes("electricity") || q.includes("due")) {
        const bills = state.billReminders || [];
        const unpaid = bills.filter((b)=>!b.isPaid);
        if (unpaid.length === 0) {
            return `You have no unpaid bills currently scheduled in your Bill Reminder Center. All utilities and rent are up to date!`;
        }
        const billTotal = unpaid.reduce((s, b)=>s + b.amount, 0);
        const billList = unpaid.map((b)=>`${b.title} (${currencySymbol}${b.amount.toLocaleString()} due ${b.dueDate})`).join(", ");
        return `You have ${unpaid.length} pending bill(s) totaling ${currencySymbol}${billTotal.toLocaleString()}: ${billList}.`;
    }
    // ── Default ────────────────────────────────────────────────────────────────
    return `I am your private Financial Copilot, running 100% locally on your device. Currently, your confirmed income is ${currencySymbol}${metrics.totalInflow.toLocaleString()}, outflows are ${currencySymbol}${metrics.totalSpent.toLocaleString()}, and remaining balance is ${currencySymbol}${remainingBalance.toLocaleString()}. You can ask: "Can I afford a ₹30,000 purchase?", "What is my cash balance?", "Who owes me money?", or "What are my upcoming bills?".`;
}
}),
"[project]/src/app/user/components/modules/budget/hooks/useBudgetPage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VALID_TABS",
    ()=>VALID_TABS,
    "useBudgetPage",
    ()=>useBudgetPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/currencyService.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/services/budgetStorage.ts [app-ssr] (ecmascript)");
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
const VALID_TABS = [
    "home",
    "copilot",
    "timeline",
    "transactions",
    "queue",
    "goals",
    "subscriptions",
    "memory",
    "reports",
    "simulator",
    "vault",
    "settings"
];
function resolveTab(raw) {
    if (!raw) return "home";
    if (raw === "approvals") return "queue";
    if (VALID_TABS.includes(raw)) return raw;
    return "home";
}
// ─── Resolve user from localStorage (synchronous fallback) ───────────────────
function readLocalUser() {
    try {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const rawUser = undefined;
        const rawAuth = undefined;
        const rawAuthLegacy = undefined;
    } catch  {
        return null;
    }
    return null;
}
// ─── Resolve user from safeStorage (async, native-first) ────────────────────
async function resolveUserFromStorage() {
    try {
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].getItem("user");
        if (raw) return JSON.parse(raw);
        const rawAuth = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].getItem("pingdart-auth");
        if (rawAuth) {
            const parsed = JSON.parse(rawAuth);
            if (parsed?.state?.user) return parsed.state.user;
        }
        const rawAuthLegacy = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].getItem("auth-storage");
        if (rawAuthLegacy) {
            const parsed = JSON.parse(rawAuthLegacy);
            if (parsed?.state?.user) return parsed.state.user;
        }
    } catch  {}
    return null;
}
function useBudgetPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { user, isHydrated: isAuthHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Synchronous user fallback (web only)
    const syncUser = readLocalUser();
    const effectiveUser = user || syncUser;
    const userId = effectiveUser?.id || "guest";
    // ── Navigation state ───────────────────────────────────────────────────────
    const initialTab = searchParams?.get("subtab") || searchParams?.get("section");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(resolveTab(initialTab));
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Budget data state ──────────────────────────────────────────────────────
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {}
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_EMPTY_BUDGET_STATE"];
    });
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {}
        return false;
    });
    const [budgetUserId, setBudgetUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── Modal / upgrade state ──────────────────────────────────────────────────
    const [isOnboardingOpen, setIsOnboardingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUpgradeModal, setShowUpgradeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [promoCode, setPromoCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isProUser, setIsProUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSyncedAt, setLastSyncedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── SMS Permission & Real-Time Staging ────────────────────────────────────
    const [isSmsPermissionOpen, setIsSmsPermissionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSmsDetectionEnabled, setIsSmsDetectionEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check SMS permission status on open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const prompted = localStorage.getItem("pingdart_budget_sms_permission_prompted");
            const granted = localStorage.getItem("pingdart_budget_sms_permission_granted");
            if (granted === "true") {
                setIsSmsDetectionEnabled(true);
            }
            if (!prompted && !isOnboardingOpen) {
                const timer = setTimeout(()=>{
                    setIsSmsPermissionOpen(true);
                }, 700);
                return ()=>clearTimeout(timer);
            }
        } catch  {}
    }, [
        isOnboardingOpen
    ]);
    // ─── Initialization ────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const init = async ()=>{
            // 1. Resolve user (Zustand -> web localStorage -> native safeStorage)
            let resolvedUser = user ?? readLocalUser();
            if (!resolvedUser) resolvedUser = await resolveUserFromStorage();
            if (cancelled) return;
            const uid = resolvedUser?.id || userId || "guest";
            // 2. Hydrate storage bridge (native async -> localStorage mirror)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrateUserBudgetStateFromSafeStorage"])(uid);
            if (cancelled) return;
            // 3. Load budget state from localStorage
            let loaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadUserBudgetState"])(uid);
            // 4. Fallback to guest vault if user vault has no transactions/income
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(loaded)) && uid !== "guest") {
                const guestLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadUserBudgetState"])("guest");
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(guestLoaded))) {
                    loaded = guestLoaded;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserBudgetState"])(loaded, uid);
                }
            }
            // 5. If still empty, fetch and hydrate from remote cloud vault
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(loaded))) {
                const remote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAndHydrateFromRemoteVault"])(uid);
                if (cancelled) return;
                if (remote && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(remote))) {
                    loaded = remote;
                }
            }
            setBudgetUserId(uid);
            // 6. Auto-set currency from country if not already configured
            const countryCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getOrDetectUserCurrency"])(resolvedUser || user);
            if (!loaded.currency || !loaded.isOnboarded && countryCurrency) {
                loaded.currency = countryCurrency;
            }
            setState(loaded);
            setIsLoaded(true);
            // 7. Bidirectional sync: if loaded has real data, sync to remote server
            // so other devices (mobile / web) stay in lockstep.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(loaded))) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWithRemoteVault"])(loaded, uid).catch(()=>{});
            } else {
                const alreadyOnboarded = loaded.isOnboarded || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUserBudgetOnboarded"])(uid);
                if (!alreadyOnboarded) {
                    setIsOnboardingOpen(true);
                }
            }
        };
        init();
        return ()=>{
            cancelled = true;
        };
    }, [
        user,
        userId,
        isAuthHydrated,
        isNative
    ]);
    // ─── Currency change listener ──────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onCurrencyChanged = (e)=>{
            const cur = e.detail?.currency;
            if (cur) setState((prev)=>({
                    ...prev,
                    currency: cur
                }));
        };
        window.addEventListener("pingdart_currency_changed", onCurrencyChanged);
        return ()=>window.removeEventListener("pingdart_currency_changed", onCurrencyChanged);
    }, []);
    // ─── Real-time incoming SMS transaction listener ───────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onIncomingSms = (e)=>{
            const staged = e.detail?.staged;
            if (staged) {
                const enriched = {
                    ...staged,
                    id: staged.id || `staged-${Date.now()}`,
                    detectedAt: new Date().toISOString()
                };
                setState((prev)=>({
                        ...prev,
                        pendingQueue: [
                            enriched,
                            ...prev.pendingQueue
                        ]
                    }));
                const sym = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_SYMBOLS"][state.currency] || "₹";
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`⚡ Real-Time Alert: ${enriched.merchantClean || "Transaction"} (${sym}${enriched.amount}). Added to Approvals Queue!`);
            }
        };
        window.addEventListener("pingdart:incoming_sms_transaction", onIncomingSms);
        window.addEventListener("budget:stage_transaction", onIncomingSms);
        return ()=>{
            window.removeEventListener("pingdart:incoming_sms_transaction", onIncomingSms);
            window.removeEventListener("budget:stage_transaction", onIncomingSms);
        };
    }, [
        state.currency
    ]);
    // ─── URL / browser-history tab sync ───────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sub = searchParams?.get("subtab") || searchParams?.get("section");
        if (sub) setActiveTab(resolveTab(sub));
    }, [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onPopState = ()=>{
            const sub = new URLSearchParams(window.location.search).get("subtab");
            setActiveTab(resolveTab(sub));
        };
        window.addEventListener("popstate", onPopState);
        return ()=>window.removeEventListener("popstate", onPopState);
    }, []);
    // ─── Tab navigation ────────────────────────────────────────────────────────
    const handleTabChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tab)=>{
        setActiveTab(tab);
        setIsMobileSidebarOpen(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            subtab: tab
        });
    }, []);
    // Track last manual sync time for cooldown throttling
    const lastSyncTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    // Track last local user mutation timestamp to prevent self-overwriting race conditions
    const lastLocalEditTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // ─── Manual & Realtime Cloud Sync ─────────────────────────────────────────
    const handleManualSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (silent = false)=>{
        if (isSyncing) return;
        const now = Date.now();
        // Prevent spamming the API button if clicked within the last 10 seconds
        if (!silent && now - lastSyncTimestampRef.current < 10000) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Vault is already up to date.", {
                id: "budget-sync-toast",
                duration: 1500
            });
            return;
        }
        setIsSyncing(true);
        lastSyncTimestampRef.current = now;
        try {
            const uid = budgetUserId || userId || "guest";
            const hasLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(state));
            const isRecentLocalEdit = now - lastLocalEditTimeRef.current < 20000;
            // If user recently edited locally in the last 15 seconds, push local state to remote
            if (hasLocal && isRecentLocalEdit) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWithRemoteVault"])(state, uid);
                setLastSyncedAt(new Date());
                if (!silent) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Live Budget Synced with Cloud!", {
                        id: "budget-sync-toast",
                        duration: 2000
                    });
                }
            } else {
                const remote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAndHydrateFromRemoteVault"])(uid);
                if (remote && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(remote))) {
                    setState(remote);
                    setLastSyncedAt(new Date());
                    if (!silent) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Live Budget Synced with Cloud!", {
                            id: "budget-sync-toast",
                            duration: 2000
                        });
                    }
                } else if (hasLocal) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWithRemoteVault"])(state, uid);
                    setLastSyncedAt(new Date());
                    if (!silent) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Budget Uploaded & Live Synced!", {
                            id: "budget-sync-toast",
                            duration: 2000
                        });
                    }
                } else {
                    if (!silent) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Budget is in sync.", {
                            id: "budget-sync-toast",
                            duration: 1500
                        });
                    }
                }
            }
        } catch (err) {
            console.warn("[budgetPage] Manual sync failed:", err);
            if (!silent) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Sync failed. Check connection.");
            }
        } finally{
            setIsSyncing(false);
        }
    }, [
        budgetUserId,
        userId,
        state,
        isSyncing
    ]);
    // ─── Realtime Socket & App Event Listeners (Zero-Polling) ─────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. WebSocket push from server: if payload is attached, hydrate instantly with 0 API calls!
        const onRemoteSync = (e)=>{
            // If we made a local edit within the last 5 seconds, ignore remote echo to prevent overwriting
            if (Date.now() - lastLocalEditTimeRef.current < 5000) {
                return;
            }
            const payload = e.detail?.encryptedLedgerPayload;
            if (payload && typeof payload === "string") {
                try {
                    const uid = budgetUserId || userId || "guest";
                    const decoded = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Buffer.from(payload, "base64").toString("utf-8");
                    const parsed = JSON.parse(decoded);
                    if (parsed && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasBudgetData"])(JSON.stringify(parsed))) {
                        localStorage.setItem(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_PREFIX"]}${uid}`, JSON.stringify(parsed));
                        void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeStorage"].setItem(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_PREFIX"]}${uid}`, JSON.stringify(parsed));
                        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadUserBudgetState"])(uid);
                        setState(updated);
                        setLastSyncedAt(new Date());
                        return;
                    }
                } catch (err) {
                    console.warn("[budgetPage] Failed to decode socket payload, falling back to fetch:", err);
                }
            }
            // Fallback only if payload was omitted
            handleManualSync(true);
        };
        window.addEventListener("budget:remote_sync", onRemoteSync);
        // 2. Window focus & app visibility with a strict 5-minute cooldown (NO spamming)
        const onFocus = ()=>{
            if (document.visibilityState === "visible" && Date.now() - lastSyncTimestampRef.current > 300000 && // 5 minutes
            Date.now() - lastLocalEditTimeRef.current > 30000 // never run within 30s of user edits
            ) {
                handleManualSync(true);
            }
        };
        window.addEventListener("focus", onFocus);
        document.addEventListener("visibilitychange", onFocus);
        // ZERO interval polling — purely event-driven to eliminate server load!
        return ()=>{
            window.removeEventListener("budget:remote_sync", onRemoteSync);
            window.removeEventListener("focus", onFocus);
            document.removeEventListener("visibilitychange", onFocus);
        };
    }, [
        budgetUserId,
        userId,
        handleManualSync
    ]);
    // ─── State persistence ─────────────────────────────────────────────────────
    const updateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        lastLocalEditTimeRef.current = Date.now();
        setState(next);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserBudgetState"])(next, budgetUserId ?? userId);
    }, [
        budgetUserId,
        userId
    ]);
    // ─── Transaction queue handlers ────────────────────────────────────────────
    const handleConfirmTransaction = (item)=>{
        const newTxn = {
            id: `txn-${Date.now()}`,
            type: item.type,
            amount: item.amount,
            currency: item.currency || state.currency,
            institution: item.institution,
            accountSnippet: item.accountSnippet,
            merchantClean: item.merchantClean,
            category: item.category,
            timestamp: new Date().toISOString(),
            rawText: item.rawText
        };
        // Match account or fall back to primary / first
        const targetAcc = state.accounts.find((a)=>item.institution && a.name.toLowerCase().includes(item.institution.toLowerCase()) || item.accountSnippet && a.name.includes(item.accountSnippet)) || state.accounts.find((a)=>a.isPrimary) || state.accounts[0];
        newTxn.accountId = targetAcc?.id;
        updateState({
            ...state,
            transactions: [
                newTxn,
                ...state.transactions
            ],
            pendingQueue: state.pendingQueue.filter((p)=>p.id !== item.id),
            categories: state.categories.map((c)=>c.name.toLowerCase().includes(item.category.toLowerCase().split("/")[0].trim()) ? {
                    ...c,
                    spent: c.spent + item.amount
                } : c),
            accounts: state.accounts.map((a)=>targetAcc && a.id === targetAcc.id ? {
                    ...a,
                    balance: item.type === "income" ? a.balance + item.amount : a.balance - item.amount
                } : a),
            monthlyIncome: item.type === "income" ? (state.monthlyIncome || 0) + item.amount : state.monthlyIncome
        });
        const sym = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_SYMBOLS"][state.currency] || "₹";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Confirmed ${item.merchantClean} (${sym}${item.amount.toLocaleString()}) into encrypted ledger!`);
    };
    const handleDiscardTransaction = (id)=>{
        updateState({
            ...state,
            pendingQueue: state.pendingQueue.filter((p)=>p.id !== id)
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Transaction discarded.");
    };
    // ─── Onboarding handlers ───────────────────────────────────────────────────
    const handleDismissOnboarding = ()=>{
        setIsOnboardingOpen(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markUserBudgetOnboarded"])(budgetUserId ?? userId);
        updateState({
            ...state,
            isOnboarded: true
        });
    };
    const handleCompleteOnboarding = (data)=>{
        const uid = budgetUserId ?? userId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setUserPreferredCurrency"])(data.currency, uid);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markUserBudgetOnboarded"])(uid);
        updateState({
            ...state,
            currency: data.currency,
            isOnboarded: true,
            monthlyIncome: data.monthlyIncome,
            goals: data.initialGoal ? [
                data.initialGoal,
                ...state.goals
            ] : state.goals
        });
        setIsOnboardingOpen(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Zero-Knowledge Command Center Initialized!");
    };
    // ─── Goals handlers ────────────────────────────────────────────────────────
    const handleAddGoal = (goal)=>{
        updateState({
            ...state,
            goals: [
                goal,
                ...state.goals
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Saved goal: ${goal.name}`);
    };
    const handleUpdateGoal = (updated)=>{
        updateState({
            ...state,
            goals: state.goals.map((g)=>g.id === updated.id ? updated : g)
        });
    };
    const handleDeleteGoal = (goalId)=>{
        updateState({
            ...state,
            goals: state.goals.filter((g)=>g.id !== goalId)
        });
    };
    const handleContributeToGoal = (goalId, amount)=>{
        const targetGoal = state.goals.find((g)=>g.id === goalId);
        const goalTx = {
            id: `goal-contrib-${Date.now()}`,
            type: "expense",
            amount,
            currency: state.currency,
            merchantClean: `Goal Deposit: ${targetGoal?.name || "Savings"}`,
            category: "Savings & Goals",
            timestamp: new Date().toISOString(),
            isManual: true
        };
        updateState({
            ...state,
            goals: state.goals.map((g)=>g.id === goalId ? {
                    ...g,
                    currentAmount: g.currentAmount + amount
                } : g),
            accounts: state.accounts.map((acc, i)=>acc.isPrimary || i === 0 && !state.accounts.some((a)=>a.isPrimary) ? {
                    ...acc,
                    balance: acc.balance - amount
                } : acc),
            transactions: [
                goalTx,
                ...state.transactions
            ]
        });
    };
    // ─── Subscriptions handlers ────────────────────────────────────────────────
    const handleAddSubscription = (sub)=>{
        updateState({
            ...state,
            subscriptions: [
                sub,
                ...state.subscriptions
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Tracking subscription: ${sub.name}`);
    };
    const handleUpdateSubscription = (updated)=>{
        updateState({
            ...state,
            subscriptions: state.subscriptions.map((s)=>s.id === updated.id ? updated : s)
        });
    };
    const handleRemoveSubscription = (id)=>{
        updateState({
            ...state,
            subscriptions: state.subscriptions.filter((s)=>s.id !== id)
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Subscription removed");
    };
    const handleScanSubscriptions = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Scanning local ledger for recurring auto-debits...");
        setTimeout(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Scan complete. Zero unmonitored recurring leaks detected."), 600);
    };
    // ─── Misc handlers ─────────────────────────────────────────────────────────
    const handleStageSms = (staged)=>{
        const enriched = {
            ...staged,
            id: staged.id || `staged-${Date.now()}`,
            detectedAt: staged.detectedAt || new Date().toISOString()
        };
        updateState({
            ...state,
            pendingQueue: [
                enriched,
                ...state.pendingQueue
            ]
        });
        const sym = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_SYMBOLS"][state.currency] || "₹";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`⚡ Staged ${enriched.merchantClean} (${sym}${enriched.amount}) in Approvals Queue!`);
    };
    const handleUpdateStagedTransaction = (id, updates)=>{
        updateState({
            ...state,
            pendingQueue: state.pendingQueue.map((item)=>item.id === id ? {
                    ...item,
                    ...updates
                } : item)
        });
    };
    const handleAllowSmsPermission = async ()=>{
        try {
            localStorage.setItem("pingdart_budget_sms_permission_prompted", "true");
            localStorage.setItem("pingdart_budget_sms_permission_granted", "true");
            setIsSmsDetectionEnabled(true);
            setIsSmsPermissionOpen(false);
            if ("undefined" !== "undefined" && "Notification" in window && Notification.permission === "default") //TURBOPACK unreachable
            ;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("⚡ Automated SMS Detection enabled! Alerts will appear in your Approvals Queue.");
        } catch  {
            setIsSmsPermissionOpen(false);
        }
    };
    const handleDenySmsPermission = ()=>{
        try {
            localStorage.setItem("pingdart_budget_sms_permission_prompted", "true");
            localStorage.setItem("pingdart_budget_sms_permission_granted", "false");
            setIsSmsDetectionEnabled(false);
            setIsSmsPermissionOpen(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("SMS detection skipped. You can enter or simulate transactions manually.");
        } catch  {
            setIsSmsPermissionOpen(false);
        }
    };
    const handleOpenSmsPermission = ()=>{
        setIsSmsPermissionOpen(true);
    };
    const handleResetVault = ()=>{
        updateState({
            ...state,
            memorySizeBytes: 1024,
            lastLearningAt: new Date().toISOString()
        });
    };
    const handleDeleteAllData = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearUserBudgetData"])(budgetUserId ?? userId);
        setState(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_EMPTY_BUDGET_STATE"]);
    };
    const handleApplyCoupon = ()=>{
        const code = promoCode.toUpperCase();
        if (code === "BUDGET50" || code === "ANNUALVIP") {
            setIsProUser(true);
            setShowUpgradeModal(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Promo code applied! You now have AI Budget Pro.");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Invalid or expired coupon code.");
        }
    };
    const handleOpenOnboarding = ()=>setIsOnboardingOpen(true);
    const handleStartTrial = ()=>{
        setIsProUser(true);
        setShowUpgradeModal(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Welcome to AI Budget Pro!");
    };
    // ─── Derived values ────────────────────────────────────────────────────────
    const currencySymbol = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_SYMBOLS"][state.currency] || "₹";
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateHealthMetrics"])(state);
    const hasData = state.transactions.length > 0 || state.monthlyIncome > 0 || state.pendingQueue.length > 0;
    const userName = user?.full_name || user?.username || "Friend";
    return {
        // Core state
        state,
        isLoaded,
        isNative,
        // Navigation
        activeTab,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        handleTabChange,
        // Modals & Permissions
        isOnboardingOpen,
        showUpgradeModal,
        setShowUpgradeModal,
        promoCode,
        setPromoCode,
        isProUser,
        isSmsPermissionOpen,
        setIsSmsPermissionOpen,
        isSmsDetectionEnabled,
        handleAllowSmsPermission,
        handleDenySmsPermission,
        handleOpenSmsPermission,
        // Live Sync
        isSyncing,
        lastSyncedAt,
        handleManualSync,
        // Derived
        currencySymbol,
        metrics,
        hasData,
        userName,
        // Handlers
        updateState,
        handleConfirmTransaction,
        handleDiscardTransaction,
        handleUpdateStagedTransaction,
        handleDismissOnboarding,
        handleCompleteOnboarding,
        handleAddGoal,
        handleUpdateGoal,
        handleDeleteGoal,
        handleContributeToGoal,
        handleAddSubscription,
        handleUpdateSubscription,
        handleRemoveSubscription,
        handleScanSubscriptions,
        handleStageSms,
        handleResetVault,
        handleDeleteAllData,
        handleApplyCoupon,
        handleOpenOnboarding,
        handleStartTrial
    };
}
}),
"[project]/src/app/user/components/modules/budget/hooks/useCopilotChat.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopilotChat",
    ()=>useCopilotChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/services/budgetStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$copilotEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/services/copilotEngine.ts [app-ssr] (ecmascript)");
;
;
;
function useCopilotChat({ state, currencySymbol, onUpdateState }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(state.copilotMessages || []);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateHealthMetrics"])(state);
    // Auto-scroll to latest message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        isTyping
    ]);
    const handleSend = (textToSend)=>{
        const text = textToSend || input;
        if (!text.trim()) return;
        const userMsg = {
            id: `msg-${Date.now()}`,
            sender: "user",
            text: text.trim(),
            timestamp: new Date().toISOString()
        };
        const newMsgs = [
            ...messages,
            userMsg
        ];
        setMessages(newMsgs);
        setInput("");
        setIsTyping(true);
        setTimeout(()=>{
            const replyText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$copilotEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCopilotResponse"])(text, state, currencySymbol);
            const aiMsg = {
                id: `msg-${Date.now() + 1}`,
                sender: "copilot",
                text: replyText,
                timestamp: new Date().toISOString()
            };
            const finalMsgs = [
                ...newMsgs,
                aiMsg
            ];
            setMessages(finalMsgs);
            setIsTyping(false);
            onUpdateState({
                ...state,
                copilotMessages: finalMsgs
            });
        }, 450);
    };
    return {
        messages,
        input,
        setInput,
        isTyping,
        messagesEndRef,
        metrics,
        handleSend
    };
}
}),
"[project]/src/app/user/components/modules/budget/hooks/useGoalsScreen.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GOAL_ICON_PRESETS",
    ()=>GOAL_ICON_PRESETS,
    "useGoalsScreen",
    ()=>useGoalsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
const GOAL_ICON_PRESETS = [
    "🎯",
    "💻",
    "✈️",
    "🏍️",
    "🚗",
    "🏠",
    "🛡️",
    "📱",
    "💍",
    "🎓"
];
function useGoalsScreen({ currencySymbol, onAddGoal, onContributeGoal, onEditGoal }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Add Goal form ──────────────────────────────────────────────────────────
    const [isAddOpen, setIsAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [targetAmount, setTargetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [monthlyAllocation, setMonthlyAllocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [icon, setIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("🎯");
    // ── Edit Goal form ─────────────────────────────────────────────────────────
    const [editingGoal, setEditingGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editTargetAmount, setEditTargetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editMonthlyAllocation, setEditMonthlyAllocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editIcon, setEditIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("🎯");
    // ── Contribute modal ───────────────────────────────────────────────────────
    const [contributeGoal, setContributeGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contributeAmount, setContributeAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // ── Derived pace preview values ────────────────────────────────────────────
    const previewTarget = parseFloat(targetAmount.replace(/,/g, "")) || 0;
    const previewMonthly = parseFloat(monthlyAllocation.replace(/,/g, "")) || (previewTarget > 0 ? Math.round(previewTarget / 10) : 0);
    const previewMonths = previewMonthly > 0 ? Math.ceil(previewTarget / previewMonthly) : 0;
    const previewWeeks = Math.round(previewMonths * 4.3);
    const editPreviewTarget = parseFloat(editTargetAmount.replace(/,/g, "")) || 0;
    const editPreviewMonthly = parseFloat(editMonthlyAllocation.replace(/,/g, "")) || (editPreviewTarget > 0 ? Math.round(editPreviewTarget / 10) : 0);
    const editPreviewMonths = editPreviewMonthly > 0 ? Math.ceil(editPreviewTarget / editPreviewMonthly) : 0;
    // ── Handlers ───────────────────────────────────────────────────────────────
    const handleCreateGoal = (e)=>{
        e.preventDefault();
        if (!name.trim() || !targetAmount) return;
        const target = parseFloat(targetAmount.replace(/,/g, "")) || 0;
        const monthly = parseFloat(monthlyAllocation.replace(/,/g, "")) || Math.round(target / 10);
        onAddGoal({
            id: `goal-${Date.now()}`,
            name: name.trim(),
            targetAmount: target,
            currentAmount: 0,
            monthlyAllocation: monthly,
            icon,
            createdAt: new Date().toISOString()
        });
        setName("");
        setTargetAmount("");
        setMonthlyAllocation("");
        setIcon("🎯");
        setIsAddOpen(false);
    };
    const handleOpenEdit = (g)=>{
        setEditingGoal(g);
        setEditName(g.name);
        setEditTargetAmount(String(g.targetAmount));
        setEditMonthlyAllocation(String(g.monthlyAllocation));
        setEditIcon(g.icon || "🎯");
    };
    const handleSaveEdit = (e)=>{
        e.preventDefault();
        if (!editingGoal || !editName.trim() || !editTargetAmount) return;
        const target = parseFloat(editTargetAmount.replace(/,/g, "")) || 0;
        const monthly = parseFloat(editMonthlyAllocation.replace(/,/g, "")) || Math.round(target / 10);
        const updated = {
            ...editingGoal,
            name: editName.trim(),
            targetAmount: target,
            monthlyAllocation: monthly,
            icon: editIcon
        };
        if (onEditGoal) onEditGoal(updated);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Updated goal "${updated.name}"`);
        setEditingGoal(null);
    };
    const handleContributeSubmit = (e)=>{
        e.preventDefault();
        const val = parseFloat(contributeAmount.replace(/,/g, ""));
        if (!val || val <= 0 || !contributeGoal) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid contribution amount.");
            return;
        }
        if (onContributeGoal) onContributeGoal(contributeGoal.id, val);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Contributed ${currencySymbol}${val.toLocaleString()} to ${contributeGoal.name}!`);
        setContributeGoal(null);
        setContributeAmount("");
    };
    // Portal helper for modals
    const renderPortal = (node)=>{
        if (mounted && typeof document !== "undefined") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(node, document.body);
        return node;
    };
    return {
        // Add modal
        isAddOpen,
        setIsAddOpen,
        name,
        setName,
        targetAmount,
        setTargetAmount,
        monthlyAllocation,
        setMonthlyAllocation,
        icon,
        setIcon,
        previewTarget,
        previewMonthly,
        previewMonths,
        previewWeeks,
        handleCreateGoal,
        // Edit modal
        editingGoal,
        setEditingGoal,
        editName,
        setEditName,
        editTargetAmount,
        setEditTargetAmount,
        editMonthlyAllocation,
        setEditMonthlyAllocation,
        editIcon,
        setEditIcon,
        editPreviewTarget,
        editPreviewMonthly,
        editPreviewMonths,
        handleOpenEdit,
        handleSaveEdit,
        // Contribute modal
        contributeGoal,
        setContributeGoal,
        contributeAmount,
        setContributeAmount,
        handleContributeSubmit,
        // Utility
        renderPortal
    };
}
}),
"[project]/src/app/user/components/modules/budget/hooks/useSubscriptionsScreen.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUBSCRIPTION_CATEGORIES",
    ()=>SUBSCRIPTION_CATEGORIES,
    "useSubscriptionsScreen",
    ()=>useSubscriptionsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
const SUBSCRIPTION_CATEGORIES = [
    "Entertainment & Streaming",
    "AI & Software",
    "Cloud & Utilities",
    "Fitness & Health",
    "Productivity"
];
function useSubscriptionsScreen({ subscriptions, onAddSubscription, onEditSubscription }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Add form ───────────────────────────────────────────────────────────────
    const [isAddOpen, setIsAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [billingCycle, setBillingCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("monthly");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Entertainment & Streaming");
    // ── Edit form ──────────────────────────────────────────────────────────────
    const [editingSub, setEditingSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editAmount, setEditAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editBillingCycle, setEditBillingCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("monthly");
    const [editCategory, setEditCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Entertainment & Streaming");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // ── Derived totals ─────────────────────────────────────────────────────────
    const totalMonthly = subscriptions.reduce((sum, s)=>sum + (s.billingCycle === "monthly" ? s.amount : Math.round(s.amount / 12)), 0);
    const annualTotal = totalMonthly * 12;
    // ── Handlers ───────────────────────────────────────────────────────────────
    const handleCreate = (e)=>{
        e.preventDefault();
        if (!name.trim() || !amount) return;
        onAddSubscription({
            id: `sub-${Date.now()}`,
            name: name.trim(),
            amount: parseFloat(amount.replace(/,/g, "")) || 0,
            billingCycle,
            category,
            isUnderutilized: false
        });
        setName("");
        setAmount("");
        setIsAddOpen(false);
    };
    const handleOpenEdit = (sub)=>{
        setEditingSub(sub);
        setEditName(sub.name);
        setEditAmount(String(sub.amount));
        setEditBillingCycle(sub.billingCycle);
        setEditCategory(sub.category);
    };
    const handleSaveEdit = (e)=>{
        e.preventDefault();
        if (!editingSub || !editName.trim() || !editAmount) return;
        const updated = {
            ...editingSub,
            name: editName.trim(),
            amount: parseFloat(editAmount.replace(/,/g, "")) || 0,
            billingCycle: editBillingCycle,
            category: editCategory
        };
        if (onEditSubscription) onEditSubscription(updated);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Updated subscription "${updated.name}"`);
        setEditingSub(null);
    };
    const renderPortal = (node)=>{
        if (mounted && typeof document !== "undefined") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(node, document.body);
        return node;
    };
    return {
        // Add modal
        isAddOpen,
        setIsAddOpen,
        name,
        setName,
        amount,
        setAmount,
        billingCycle,
        setBillingCycle,
        category,
        setCategory,
        handleCreate,
        // Edit modal
        editingSub,
        setEditingSub,
        editName,
        setEditName,
        editAmount,
        setEditAmount,
        editBillingCycle,
        setEditBillingCycle,
        editCategory,
        setEditCategory,
        handleOpenEdit,
        handleSaveEdit,
        // Derived
        totalMonthly,
        annualTotal,
        // Utility
        renderPortal
    };
}
}),
"[project]/src/app/user/components/modules/budget/hooks/useSimulator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSimulator",
    ()=>useSimulator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/services/budgetStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$ai$2d$budget$2f$components$2f$adminApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/ai-budget/components/adminApi.ts [app-ssr] (ecmascript)");
;
;
;
;
function useSimulator({ state, currencySymbol, onStageSms }) {
    // ── Purchase simulator ─────────────────────────────────────────────────────
    const [purchaseName, setPurchaseName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [purchaseAmount, setPurchaseAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [simulationResult, setSimulationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── SMS test harness ───────────────────────────────────────────────────────
    const [customSms, setCustomSms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSimulatingSms, setIsSimulatingSms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$services$2f$budgetStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateHealthMetrics"])(state);
    const { goals, budgetCap } = state;
    const handleSimulatePurchase = (e)=>{
        e.preventDefault();
        const amount = parseFloat(purchaseAmount.replace(/,/g, "")) || 0;
        if (amount <= 0 || !purchaseName.trim()) return;
        const simulatedSpent = metrics.totalSpent + amount;
        const simulatedBalance = Math.max(0, metrics.totalInflow - simulatedSpent);
        const simulatedSavingsRate = metrics.totalInflow > 0 ? Math.round((metrics.totalInflow - simulatedSpent) / metrics.totalInflow * 1000) / 10 : 0;
        let goalDelayMonths = 0;
        let impactedGoalName = "None";
        if (goals.length > 0) {
            impactedGoalName = goals[0].name;
            goalDelayMonths = Math.ceil(amount / (goals[0].monthlyAllocation || 1000));
        }
        // Simplified health score projection
        let simScore = 40;
        if (simulatedSavingsRate >= 20) simScore += 30;
        else if (simulatedSavingsRate > 0) simScore += Math.round(simulatedSavingsRate / 20 * 30);
        if (simulatedSpent <= budgetCap && budgetCap > 0) simScore += 20;
        simScore = Math.min(99, Math.max(15, simScore));
        setSimulationResult({
            name: purchaseName.trim(),
            amount,
            currentSavingsRate: metrics.savingsRate,
            simulatedSavingsRate,
            currentBalance: metrics.remainingBalance,
            simulatedBalance,
            goalDelayMonths,
            impactedGoalName,
            currentScore: metrics.score,
            simulatedScore: simScore
        });
    };
    const handleSimulateSms = async (textToParse)=>{
        const text = textToParse || customSms;
        if (!text.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please select or paste an SMS notification.");
            return;
        }
        setIsSimulatingSms(true);
        try {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$ai$2d$budget$2f$components$2f$adminApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ai-budget/parse-sms`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text
                })
            });
            const json = await res.json();
            if (json.success && json.data) {
                const item = json.data;
                if (!item.isStagingCandidate) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(item.reason || "Filtered non-transactional alert.");
                } else {
                    const staged = {
                        id: `staged-${Date.now()}`,
                        type: item.type,
                        amount: item.amount,
                        currency: item.currency || "INR",
                        institution: item.institution || "Bank",
                        accountSnippet: item.accountSnippet || "XX1234",
                        merchantClean: item.merchantClean || "Merchant",
                        category: item.category || "General",
                        confidence: item.confidence || 0.95,
                        rawText: text,
                        detectedAt: new Date().toISOString()
                    };
                    onStageSms(staged);
                    setCustomSms("");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`⚡ Staged ${item.merchantClean} (${currencySymbol}${item.amount.toLocaleString()}) in Approvals Queue!`);
                }
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error communicating with on-device parser");
        } finally{
            setIsSimulatingSms(false);
        }
    };
    return {
        // Purchase simulator
        purchaseName,
        setPurchaseName,
        purchaseAmount,
        setPurchaseAmount,
        simulationResult,
        handleSimulatePurchase,
        // SMS harness
        customSms,
        setCustomSms,
        isSimulatingSms,
        handleSimulateSms,
        // Derived
        metrics
    };
}
}),
"[project]/src/app/user/components/modules/budget/hooks/useSettingsScreen.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettingsScreen",
    ()=>useSettingsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/currencyService.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
function useSettingsScreen({ state, currencySymbol, onUpdateState }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const userId = user?.id || "guest";
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("caps");
    const [monthlyIncomeInput, setMonthlyIncomeInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(state.monthlyIncome || ""));
    const [categoriesList, setCategoriesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(state.categories || []);
    const [newCatName, setNewCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newCatCap, setNewCatCap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const detectedCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectCountryCurrency"])(user);
    // ── Income ─────────────────────────────────────────────────────────────────
    const handleSaveIncome = (e)=>{
        e.preventDefault();
        const inc = parseFloat(monthlyIncomeInput.replace(/,/g, "")) || 0;
        onUpdateState({
            ...state,
            monthlyIncome: inc
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Updated monthly baseline income to ${currencySymbol}${inc.toLocaleString()}`);
    };
    // ── Category envelopes ─────────────────────────────────────────────────────
    const handleUpdateCategoryCap = (index, newCapStr)=>{
        const updated = [
            ...categoriesList
        ];
        updated[index].cap = parseFloat(newCapStr.replace(/,/g, "")) || 0;
        setCategoriesList(updated);
        onUpdateState({
            ...state,
            categories: updated,
            budgetCap: updated.reduce((s, c)=>s + c.cap, 0)
        });
    };
    const handleAddCategory = (e)=>{
        e.preventDefault();
        if (!newCatName.trim()) return;
        const updated = [
            ...categoriesList,
            {
                name: newCatName.trim(),
                spent: 0,
                cap: parseFloat(newCatCap.replace(/,/g, "")) || 0,
                color: "bg-indigo-600"
            }
        ];
        setCategoriesList(updated);
        setNewCatName("");
        setNewCatCap("");
        onUpdateState({
            ...state,
            categories: updated,
            budgetCap: updated.reduce((s, c)=>s + c.cap, 0)
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Added ${newCatName.trim()} envelope`);
    };
    const handleDeleteCategory = (index)=>{
        if (categoriesList.length <= 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("You must have at least one envelope category.");
            return;
        }
        const catToRemove = categoriesList[index];
        const updated = categoriesList.filter((_, i)=>i !== index);
        setCategoriesList(updated);
        onUpdateState({
            ...state,
            categories: updated,
            budgetCap: updated.reduce((s, c)=>s + c.cap, 0)
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Removed "${catToRemove.name}" envelope`);
    };
    // ── Currency ───────────────────────────────────────────────────────────────
    const handleSelectCurrency = (code)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setUserPreferredCurrency"])(code, userId);
        onUpdateState({
            ...state,
            currency: code
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Currency set to ${code} (${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][code]?.symbol || ""})`);
    };
    // ── Export ─────────────────────────────────────────────────────────────────
    const handleExportData = ()=>{
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const a = document.createElement("a");
        a.href = dataStr;
        a.download = `pingdart_ai_budget_backup_${new Date().toISOString().split("T")[0]}.json`;
        a.click();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Zero-Knowledge budget vault exported to JSON");
    };
    return {
        // Navigation
        activeSection,
        setActiveSection,
        // Income
        monthlyIncomeInput,
        setMonthlyIncomeInput,
        handleSaveIncome,
        // Categories
        categoriesList,
        newCatName,
        setNewCatName,
        newCatCap,
        setNewCatCap,
        handleUpdateCategoryCap,
        handleAddCategory,
        handleDeleteCategory,
        // Currency
        detectedCurrency,
        handleSelectCurrency,
        // Export
        handleExportData,
        // User
        userId
    };
}
}),
"[project]/src/app/user/components/modules/budget/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AiBudgetCalculatorAppPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$hooks$2f$useBudgetPage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/hooks/useBudgetPage.ts [app-ssr] (ecmascript)");
// Layout chrome — always visible regardless of active tab
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$layout$2f$BudgetSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/components/layout/BudgetSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$layout$2f$BudgetHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/components/layout/BudgetHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$layout$2f$BudgetBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/components/layout/BudgetBottomNav.tsx [app-ssr] (ecmascript)");
// App-level modals
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$modals$2f$BudgetOnboardingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/components/modals/BudgetOnboardingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$modals$2f$BudgetUpgradeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/components/modals/BudgetUpgradeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$modals$2f$BudgetSmsPermissionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/components/modals/BudgetSmsPermissionModal.tsx [app-ssr] (ecmascript)");
// Tab screens — one file per tab
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$HomeScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/HomeScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$CopilotScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/CopilotScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$TimelineScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/TimelineScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$TransactionsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/TransactionsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$QueueScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/QueueScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$GoalsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/GoalsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$SubscriptionsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/SubscriptionsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$MemoryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/MemoryScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$ReportsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/ReportsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$SimulatorScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/SimulatorScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$VaultScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/VaultScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/screens/SettingsScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/types.ts [app-ssr] (ecmascript)");
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
// ─────────────────────────────────────────────────────────────────────────────
function LoadingVault() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-center justify-center bg-[#f8fafc] dark:bg-[#0b141a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-mono text-slate-400",
                    children: "Loading Zero-Knowledge Vault..."
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function AiBudgetCalculatorAppPage(props) {
    const { onBack } = props || {};
    // ── All state & handlers come from the hook ──────────────────────────────
    const budget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$hooks$2f$useBudgetPage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBudgetPage"])();
    const { state, isLoaded, isNative, activeTab, metrics, currencySymbol, hasData, userName } = budget;
    if (!isLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingVault, {}, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
        lineNumber: 65,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$layout$2f$BudgetSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetSidebar"], {
                activeTab: activeTab,
                onTabSelect: budget.handleTabChange,
                isMobileSidebarOpen: budget.isMobileSidebarOpen,
                onCloseMobileSidebar: ()=>budget.setIsMobileSidebarOpen(false),
                onBack: onBack,
                healthScore: metrics.score,
                healthTier: metrics.tier,
                savingsRate: metrics.savingsRate,
                pendingQueueCount: state.pendingQueue.length,
                goalsCount: state.goals.length,
                subscriptionsCount: state.subscriptions.length,
                isProUser: budget.isProUser,
                onOpenUpgradeModal: ()=>budget.setShowUpgradeModal(true)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-full min-w-0 overflow-y-auto bg-[#f8fafc] dark:bg-[#0b141a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$layout$2f$BudgetHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetHeader"], {
                        activeTab: activeTab,
                        isNative: isNative,
                        onOpenMobileSidebar: ()=>budget.setIsMobileSidebarOpen(true),
                        onBack: onBack,
                        income: metrics.totalInflow,
                        spent: metrics.totalSpent,
                        remainingBalance: metrics.remainingBalance,
                        currencySymbol: currencySymbol,
                        isProUser: budget.isProUser,
                        onOpenUpgradeModal: ()=>budget.setShowUpgradeModal(true),
                        hasData: hasData,
                        onSync: budget.handleManualSync,
                        isSyncing: budget.isSyncing,
                        lastSyncedAt: budget.lastSyncedAt
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 sm:p-6 lg:p-8 max-w-8xl mx-auto w-full space-y-5 sm:space-y-6 pb-[calc(7.5rem+env(safe-area-inset-bottom,24px))] md:pb-12",
                        children: [
                            activeTab === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$HomeScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeScreen"], {
                                state: state,
                                userName: userName,
                                currencySymbol: currencySymbol,
                                onNavigateTab: budget.handleTabChange,
                                onOpenOnboarding: budget.handleOpenOnboarding
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            activeTab === "copilot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$CopilotScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopilotScreen"], {
                                state: state,
                                currencySymbol: currencySymbol,
                                onUpdateState: budget.updateState
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            activeTab === "timeline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$TimelineScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimelineScreen"], {
                                state: state,
                                currencySymbol: currencySymbol
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            activeTab === "transactions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$TransactionsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionsScreen"], {
                                state: state,
                                currencySymbol: currencySymbol,
                                onUpdateState: budget.updateState,
                                isProUser: budget.isProUser,
                                onOpenUpgradeModal: ()=>budget.setShowUpgradeModal(true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            activeTab === "queue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$QueueScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueueScreen"], {
                                pendingQueue: state.pendingQueue,
                                categories: state.categories,
                                currencySymbol: currencySymbol,
                                onConfirm: budget.handleConfirmTransaction,
                                onDiscard: budget.handleDiscardTransaction,
                                onStageSms: budget.handleStageSms,
                                isStandaloneTab: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            activeTab === "goals" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$GoalsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoalsScreen"], {
                                goals: state.goals,
                                currencySymbol: currencySymbol,
                                onAddGoal: budget.handleAddGoal,
                                onContributeGoal: budget.handleContributeToGoal,
                                onEditGoal: budget.handleUpdateGoal,
                                onDeleteGoal: budget.handleDeleteGoal
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            activeTab === "subscriptions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$SubscriptionsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionsScreen"], {
                                subscriptions: state.subscriptions,
                                currencySymbol: currencySymbol,
                                onAddSubscription: budget.handleAddSubscription,
                                onRemoveSubscription: budget.handleRemoveSubscription,
                                onEditSubscription: budget.handleUpdateSubscription,
                                onScanSubscriptions: budget.handleScanSubscriptions
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            activeTab === "memory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$MemoryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MemoryScreen"], {
                                state: state,
                                currencySymbol: currencySymbol
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            activeTab === "reports" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$ReportsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportsScreen"], {
                                state: state,
                                currencySymbol: currencySymbol
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            activeTab === "simulator" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$SimulatorScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimulatorScreen"], {
                                state: state,
                                currencySymbol: currencySymbol,
                                onStageSms: budget.handleStageSms
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            activeTab === "vault" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$VaultScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VaultScreen"], {
                                state: state,
                                currencySymbol: currencySymbol,
                                onUpdateState: budget.updateState,
                                onResetVault: budget.handleResetVault
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            activeTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsScreen"], {
                                state: state,
                                currencySymbol: currencySymbol,
                                onUpdateState: budget.updateState,
                                onDeleteAllData: budget.handleDeleteAllData
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$layout$2f$BudgetBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetBottomNav"], {
                activeTab: activeTab,
                onTabSelect: budget.handleTabChange,
                onOpenMenu: ()=>budget.setIsMobileSidebarOpen(true),
                pendingQueueCount: state.pendingQueue.length,
                goalsCount: state.goals.length
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$modals$2f$BudgetOnboardingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetOnboardingModal"], {
                isOpen: budget.isOnboardingOpen,
                onClose: budget.handleDismissOnboarding,
                initialCurrency: state.currency,
                onComplete: budget.handleCompleteOnboarding
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$modals$2f$BudgetSmsPermissionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetSmsPermissionModal"], {
                isOpen: budget.isSmsPermissionOpen,
                onAllow: budget.handleAllowSmsPermission,
                onDeny: budget.handleDenySmsPermission
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$components$2f$modals$2f$BudgetUpgradeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetUpgradeModal"], {
                isOpen: budget.showUpgradeModal,
                onClose: ()=>budget.setShowUpgradeModal(false),
                promoCode: budget.promoCode,
                onPromoCodeChange: budget.setPromoCode,
                onApplyCoupon: budget.handleApplyCoupon,
                onStartTrial: budget.handleStartTrial
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$AiBudgetScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$AiBudgetScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$budget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/budget/types.ts [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=src_app_user_components_modules_budget_b2293fca._.js.map