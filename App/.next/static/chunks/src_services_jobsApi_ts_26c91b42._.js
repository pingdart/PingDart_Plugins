(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/jobsApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStoredCompanies",
    ()=>getStoredCompanies,
    "getStoredJobs",
    ()=>getStoredJobs,
    "jobsApi",
    ()=>jobsApi,
    "saveStoredCompanies",
    ()=>saveStoredCompanies,
    "saveStoredJobs",
    ()=>saveStoredJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const jobsApi = {
    getProfile: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/profile");
        return res.data;
    },
    updateProfile: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/profile", data);
        return res.data;
    },
    createCompany: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/company", data);
        return res.data;
    },
    getCategories: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/categories");
        return res.data;
    },
    getSkills: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/skills");
        return res.data;
    },
    getPricingConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/pricing-config");
        return res.data;
    },
    getJobsFeed: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/feed", {
            params
        });
        return res.data;
    },
    searchOnlineJobs: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/search-online", data);
        return res.data;
    },
    createJobPosting: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/postings", data);
        return res.data;
    },
    getMyPostings: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/my-postings");
        return res.data;
    },
    getJobApplicants: async (jobId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/jobs/postings/${jobId}/applicants`);
        return res.data;
    },
    updateApplicationStage: async (applicationId, status, feedbackNotes)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/jobs/applications/${applicationId}/stage`, {
            status,
            feedbackNotes
        });
        return res.data;
    },
    applyToJob: async (jobId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/jobs/${jobId}/apply`, data || {});
        return res.data;
    },
    contactCandidate: async (applicationId, initialMessage)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/jobs/applications/${applicationId}/contact`, {
            initialMessage
        });
        return res.data;
    },
    scheduleInterview: async (applicationId, interviewDate, meetingNotes)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/jobs/applications/${applicationId}/schedule-interview`, {
            interviewDate,
            meetingNotes
        });
        return res.data;
    },
    toggleSaveJob: async (jobId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/jobs/${jobId}/save`);
        return res.data;
    },
    getMyApplications: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/my-applications");
        return res.data;
    },
    // ── ADMIN REAL-TIME MODERATION & PERSISTENCE APIs ──────────────────────────
    getAllJobsForAdmin: async ()=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/postings");
            return {
                data: Array.isArray(res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) ? res.data.data : Array.isArray(res === null || res === void 0 ? void 0 : res.data) ? res.data : getStoredJobs()
            };
        } catch (e) {
            return {
                data: getStoredJobs()
            };
        }
    },
    updateJobStatusByAdmin: async (jobId, status, adminNotes)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/jobs/admin/postings/${jobId}/status`, {
                status,
                adminNotes
            });
            return res.data;
        } catch (e) {
            const existing = getStoredJobs();
            const updated = existing.map((j)=>j.id === jobId ? {
                    ...j,
                    status
                } : j);
            saveStoredJobs(updated);
            return {
                success: true,
                data: updated.find((j)=>j.id === jobId)
            };
        }
    },
    getAllVerificationsForAdmin: async ()=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/verifications");
            return {
                data: Array.isArray(res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) ? res.data.data : Array.isArray(res === null || res === void 0 ? void 0 : res.data) ? res.data : getStoredCompanies()
            };
        } catch (e) {
            return {
                data: getStoredCompanies()
            };
        }
    },
    updateCompanyVerificationByAdmin: async (companyId, status, adminNotes)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/jobs/admin/verifications/${companyId}`, {
                status,
                adminNotes
            });
            return res.data;
        } catch (e) {
            const existing = getStoredCompanies();
            const updated = existing.map((c)=>c.id === companyId ? {
                    ...c,
                    verificationStatus: status,
                    adminNotes
                } : c);
            saveStoredCompanies(updated);
            return {
                success: true,
                data: updated.find((c)=>c.id === companyId)
            };
        }
    },
    createPricingPlanByAdmin: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/admin/plans", data);
        return res.data;
    },
    updatePricingPlanByAdmin: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/jobs/admin/plans/${id}`, data);
        return res.data;
    },
    deletePricingPlanByAdmin: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/jobs/admin/plans/${id}`);
        return res.data;
    },
    createCreditPackageByAdmin: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/admin/credit-packages", data);
        return res.data;
    },
    updateCreditPackageByAdmin: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/jobs/admin/credit-packages/${id}`, data);
        return res.data;
    },
    deleteCreditPackageByAdmin: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/jobs/admin/credit-packages/${id}`);
        return res.data;
    },
    createSkillByAdmin: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/jobs/admin/skills", data);
        return res.data;
    },
    updateSkillByAdmin: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/jobs/admin/skills/${id}`, data);
        return res.data;
    },
    deleteSkillByAdmin: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/jobs/admin/skills/${id}`);
        return res.data;
    },
    getAllCandidatesForAdmin: async ()=>{
        const fetchPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/candidates");
        const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), 2500));
        const res = await Promise.race([
            fetchPromise,
            timeoutPromise
        ]);
        return res.data;
    },
    getAllRecruitersForAdmin: async ()=>{
        const fetchPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/recruiters");
        const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), 2500));
        const res = await Promise.race([
            fetchPromise,
            timeoutPromise
        ]);
        return res.data;
    },
    getAuditLogsForAdmin: async ()=>{
        const fetchPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/audit-logs");
        const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), 2500));
        const res = await Promise.race([
            fetchPromise,
            timeoutPromise
        ]);
        return res.data;
    }
};
// ── REAL LOCAL STORAGE PERSISTENCE ENGINE ──────────────────────────────────────
const JOBS_STORAGE_KEY = "pingdart_jobs_real_db_v2";
const VERIFICATIONS_STORAGE_KEY = "pingdart_companies_verifications_v2";
const getStoredJobs = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(JOBS_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
};
const saveStoredJobs = (jobs)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs));
    } catch (e) {}
};
const getStoredCompanies = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(VERIFICATIONS_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
};
const saveStoredCompanies = (companies)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(VERIFICATIONS_STORAGE_KEY, JSON.stringify(companies));
    } catch (e) {}
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_services_jobsApi_ts_26c91b42._.js.map