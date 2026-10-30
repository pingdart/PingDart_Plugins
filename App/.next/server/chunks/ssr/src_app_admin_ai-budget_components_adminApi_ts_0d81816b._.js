module.exports = [
"[project]/src/app/admin/ai-budget/components/adminApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE,
    "getAdminAuthHeaders",
    ()=>getAdminAuthHeaders
]);
const API_BASE = ("TURBOPACK compile-time value", "http://192.168.0.197:4025/api/v1") || "http://localhost:4025/api/v1";
const getAdminAuthHeaders = ()=>{
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    return {
        "Content-Type": "application/json",
        ...("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {}
    };
};
}),
];

//# sourceMappingURL=src_app_admin_ai-budget_components_adminApi_ts_0d81816b._.js.map