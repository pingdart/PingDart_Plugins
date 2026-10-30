module.exports = [
"[project]/src/services/storageApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN_LIMITS",
    ()=>PLAN_LIMITS,
    "storageApi",
    ()=>storageApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
;
function getCurrentUserKey() {
    if ("TURBOPACK compile-time truthy", 1) return "guest";
    //TURBOPACK unreachable
    ;
}
const PLAN_LIMITS = {
    Free: 15 * 1024 * 1024 * 1024,
    Basic: 100 * 1024 * 1024 * 1024,
    Standard: 500 * 1024 * 1024 * 1024,
    Pro: 2000 * 1024 * 1024 * 1024,
    Business: 5000 * 1024 * 1024 * 1024 // 5 TB
};
class StorageService {
    files = [];
    folders = [];
    quota = {
        usedBytes: 0,
        limitBytes: PLAN_LIMITS.Free,
        planName: "Free",
        freeLimitBytes: PLAN_LIMITS.Free
    };
    listeners = new Set();
    isSyncing = false;
    currentLoadedUser = "";
    constructor(){
        this.cleanLegacySharedStorage();
        this.loadFromStorage();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    cleanLegacySharedStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    subscribe(cb) {
        this.listeners.add(cb);
        return ()=>this.listeners.delete(cb);
    }
    notify() {
        this.listeners.forEach((cb)=>{
            try {
                cb();
            } catch (e) {}
        });
    }
    /**
   * Synchronizes folders & files with MySQL database backend strictly for the authenticated user
   */ async syncWithServer() {
        if ("undefined" === "undefined" || this.isSyncing) return;
        //TURBOPACK unreachable
        ;
    }
    loadFromStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    saveToStorage() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    getQuota() {
        this.ensureUserContext();
        const totalSize = this.files.filter((f)=>!f.isTrash).reduce((acc, f)=>acc + Number(f.size || 0), 0);
        return {
            ...this.quota,
            usedBytes: totalSize
        };
    }
    ensureUserContext() {
        const userKey = getCurrentUserKey();
        if (userKey !== this.currentLoadedUser) {
            this.loadFromStorage();
        }
    }
    setPlan(plan) {
        this.ensureUserContext();
        this.quota.planName = plan;
        this.quota.limitBytes = PLAN_LIMITS[plan];
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return this.getQuota();
    }
    getFolders(parentId = null) {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash && f.parentId === parentId);
    }
    getAllFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash);
    }
    getFiles(folderId = null) {
        this.ensureUserContext();
        return this.files.filter((f)=>!f.isTrash && f.folderId === folderId);
    }
    getCategoryFiles(category) {
        this.ensureUserContext();
        if (category === "photos") {
            return this.files.filter((f)=>!f.isTrash && (f.category === "image" || f.category === "video"));
        }
        if (category === "documents") {
            return this.files.filter((f)=>!f.isTrash && f.category === "document");
        }
        if (category === "starred") {
            return this.files.filter((f)=>!f.isTrash && f.isStarred);
        }
        if (category === "vault") {
            return this.files.filter((f)=>!f.isTrash && f.isEncrypted);
        }
        if (category === "shared") {
            return this.files.filter((f)=>!f.isTrash && f.sharedWithMe);
        }
        if (category === "trash") {
            return this.files.filter((f)=>f.isTrash);
        }
        if (category === "recent") {
            return [
                ...this.files
            ].filter((f)=>!f.isTrash).sort((a, b)=>new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime());
        }
        return this.getFiles(null);
    }
    createFolder(name, parentId = null, color) {
        this.ensureUserContext();
        const newFolder = {
            id: `folder_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            parentId: parentId || null,
            name,
            color: color || "#2563eb",
            itemCount: 0,
            sizeBytes: 0,
            isStarred: false,
            isTrash: false,
            createdAt: new Date().toISOString()
        };
        this.folders.unshift(newFolder);
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return newFolder;
    }
    addFile(file) {
        this.ensureUserContext();
        const nameLower = (file.name || "").toLowerCase();
        const isImg = file.mimeType?.startsWith("image/") || nameLower.endsWith(".png") || nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || nameLower.endsWith(".webp") || nameLower.endsWith(".gif") || nameLower.endsWith(".svg");
        const category = isImg ? "image" : file.mimeType?.startsWith("video/") || nameLower.endsWith(".mp4") || nameLower.endsWith(".webm") || nameLower.endsWith(".mov") ? "video" : file.mimeType?.startsWith("audio/") || nameLower.endsWith(".mp3") || nameLower.endsWith(".wav") ? "audio" : file.mimeType?.includes("pdf") || file.mimeType?.includes("word") || file.mimeType?.includes("sheet") || file.mimeType?.includes("text") || nameLower.endsWith(".pdf") || nameLower.endsWith(".doc") || nameLower.endsWith(".docx") || nameLower.endsWith(".txt") ? "document" : file.mimeType?.includes("zip") || file.mimeType?.includes("tar") || nameLower.endsWith(".zip") || nameLower.endsWith(".rar") || nameLower.endsWith(".7z") ? "archive" : "other";
        const mediaUrl = file.url || "";
        const thumbUrl = file.thumbnailUrl || (isImg ? mediaUrl : undefined);
        const newFile = {
            id: file.id || `file_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            name: file.name || "Untitled_File",
            size: file.size || 1024,
            mimeType: file.mimeType || (isImg ? "image/png" : "application/octet-stream"),
            folderId: file.folderId || null,
            url: mediaUrl,
            thumbnailUrl: thumbUrl,
            category,
            isEncrypted: Boolean(file.isEncrypted),
            isStarred: Boolean(file.isStarred),
            isTrash: Boolean(file.isTrash),
            createdAt: file.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.files = this.files.filter((f)=>f.id !== newFile.id);
        this.files.unshift(newFile);
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return newFile;
    }
    getFileById(fileId) {
        this.ensureUserContext();
        return this.files.find((f)=>f.id === fileId || fileId.includes(f.id) || f.id.includes(fileId));
    }
    getAllFiles() {
        this.ensureUserContext();
        return this.files.filter((f)=>!f.isTrash);
    }
    getStarredFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash && f.isStarred);
    }
    getTrashFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isTrash);
    }
    toggleFolderStar(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderStar error", e));
        }
    }
    toggleFolderTrash(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderTrash error", e));
        }
    }
    deleteFolderPermanently(folderId) {
        this.ensureUserContext();
        this.folders = this.folders.filter((f)=>f.id !== folderId);
        this.files = this.files.filter((f)=>f.folderId !== folderId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}`).catch((e)=>console.warn("[CloudDrive] deleteFolder error", e));
    }
    emptyTrash() {
        this.ensureUserContext();
        const trashFiles = this.files.filter((f)=>f.isTrash);
        const trashFolders = this.folders.filter((f)=>f.isTrash);
        this.files = this.files.filter((f)=>!f.isTrash);
        this.folders = this.folders.filter((f)=>!f.isTrash);
        this.saveToStorage();
        this.notify();
        trashFiles.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${f.id}`).catch(()=>{});
        });
        trashFolders.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${f.id}`).catch(()=>{});
        });
    }
    toggleStar(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isStarred: f.isStarred
            }).catch((e)=>console.warn("[CloudDrive] toggleStar error", e));
        }
    }
    toggleTrash(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isTrash: f.isTrash
            }).catch((e)=>console.warn("[CloudDrive] toggleTrash error", e));
        }
    }
    deletePermanently(fileId) {
        this.ensureUserContext();
        this.files = this.files.filter((item)=>item.id !== fileId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${fileId}`).catch((e)=>console.warn("[CloudDrive] deletePermanently error", e));
    }
    async updateFileUrl(fileId, url) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.url = url;
            if (f.category === "image") f.thumbnailUrl = url;
            f.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.notify();
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/files", f);
                return true;
            } catch (e) {
                console.warn("[CloudDrive] updateFileUrl error", e);
            }
        }
        return false;
    }
    savePublicShareLink(file, link) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const token = undefined;
    }
    generateShareLink(fileId, password, expiresDays) {
        this.loadFromStorage();
        const f = this.files.find((item)=>item.id === fileId || fileId.startsWith(item.id));
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWebBaseUrl"])();
        const token = `${fileId}_${Math.random().toString(36).substr(2, 8)}`;
        const link = {
            publicUrl: `${baseUrl}/share/${token}`,
            isPasswordProtected: Boolean(password),
            password,
            expiresAt: expiresDays ? new Date(Date.now() + expiresDays * 86400000).toISOString() : undefined,
            accessCount: 0
        };
        if (f) {
            f.shareLink = link;
            this.saveToStorage();
            this.savePublicShareLink(f, link);
            this.notify();
        }
        return link;
    }
    getFileByShareToken(token) {
        this.loadFromStorage();
        if (!token) return null;
        const cleanToken = decodeURIComponent(token).replace(/\/+$/, "").trim();
        let f = this.files.find((item)=>{
            if (item.id === cleanToken) return true;
            if (cleanToken.startsWith(item.id)) return true;
            if (item.id.startsWith(cleanToken)) return true;
            if (item.shareLink) {
                const publicUrl = item.shareLink.publicUrl.replace(/\/+$/, "");
                if (publicUrl.endsWith(cleanToken) || publicUrl.includes(cleanToken)) return true;
            }
            return false;
        });
        if (!f) return null;
        const isExpired = Boolean(f.shareLink?.expiresAt && new Date(f.shareLink.expiresAt).getTime() < Date.now());
        if (f.shareLink) {
            f.shareLink.accessCount = (f.shareLink.accessCount || 0) + 1;
            this.saveToStorage();
            this.savePublicShareLink(f, f.shareLink);
        }
        return {
            file: f,
            isExpired,
            isPasswordProtected: Boolean(f.shareLink?.isPasswordProtected),
            password: f.shareLink?.password
        };
    }
    getSharedFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isShared && !f.isTrash);
    }
    async shareFolder(folderId, email, permission = "write") {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/cloud-drive/folders/${folderId}/share`, {
            email,
            permission
        });
        if (res.data?.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async unshareFolder(folderId, targetUserId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}/share/${targetUserId}`);
        if (res.data?.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async getFolderShares(folderId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/cloud-drive/folders/${folderId}/shares`);
        return res.data?.data || [];
    }
}
const storageApi = new StorageService();
}),
"[project]/src/services/jobsApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const jobsApi = {
    getProfile: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/profile");
        return res.data;
    },
    updateProfile: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/profile", data);
        return res.data;
    },
    createCompany: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/company", data);
        return res.data;
    },
    getCategories: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/categories");
        return res.data;
    },
    getSkills: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/skills");
        return res.data;
    },
    getPricingConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/pricing-config");
        return res.data;
    },
    getJobsFeed: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/feed", {
            params
        });
        return res.data;
    },
    searchOnlineJobs: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/search-online", data);
        return res.data;
    },
    createJobPosting: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/postings", data);
        return res.data;
    },
    getMyPostings: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/my-postings");
        return res.data;
    },
    getJobApplicants: async (jobId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/jobs/postings/${jobId}/applicants`);
        return res.data;
    },
    updateApplicationStage: async (applicationId, status, feedbackNotes)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/jobs/applications/${applicationId}/stage`, {
            status,
            feedbackNotes
        });
        return res.data;
    },
    applyToJob: async (jobId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/jobs/${jobId}/apply`, data || {});
        return res.data;
    },
    contactCandidate: async (applicationId, initialMessage)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/jobs/applications/${applicationId}/contact`, {
            initialMessage
        });
        return res.data;
    },
    scheduleInterview: async (applicationId, interviewDate, meetingNotes)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/jobs/applications/${applicationId}/schedule-interview`, {
            interviewDate,
            meetingNotes
        });
        return res.data;
    },
    toggleSaveJob: async (jobId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/jobs/${jobId}/save`);
        return res.data;
    },
    getMyApplications: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/my-applications");
        return res.data;
    },
    // ── ADMIN REAL-TIME MODERATION & PERSISTENCE APIs ──────────────────────────
    getAllJobsForAdmin: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/postings");
            return {
                data: Array.isArray(res?.data?.data) ? res.data.data : Array.isArray(res?.data) ? res.data : getStoredJobs()
            };
        } catch  {
            return {
                data: getStoredJobs()
            };
        }
    },
    updateJobStatusByAdmin: async (jobId, status, adminNotes)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/jobs/admin/postings/${jobId}/status`, {
                status,
                adminNotes
            });
            return res.data;
        } catch  {
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/verifications");
            return {
                data: Array.isArray(res?.data?.data) ? res.data.data : Array.isArray(res?.data) ? res.data : getStoredCompanies()
            };
        } catch  {
            return {
                data: getStoredCompanies()
            };
        }
    },
    updateCompanyVerificationByAdmin: async (companyId, status, adminNotes)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/jobs/admin/verifications/${companyId}`, {
                status,
                adminNotes
            });
            return res.data;
        } catch  {
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
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/admin/plans", data);
        return res.data;
    },
    updatePricingPlanByAdmin: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/jobs/admin/plans/${id}`, data);
        return res.data;
    },
    deletePricingPlanByAdmin: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/jobs/admin/plans/${id}`);
        return res.data;
    },
    createCreditPackageByAdmin: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/admin/credit-packages", data);
        return res.data;
    },
    updateCreditPackageByAdmin: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/jobs/admin/credit-packages/${id}`, data);
        return res.data;
    },
    deleteCreditPackageByAdmin: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/jobs/admin/credit-packages/${id}`);
        return res.data;
    },
    createSkillByAdmin: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/jobs/admin/skills", data);
        return res.data;
    },
    updateSkillByAdmin: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/jobs/admin/skills/${id}`, data);
        return res.data;
    },
    deleteSkillByAdmin: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/jobs/admin/skills/${id}`);
        return res.data;
    },
    getAllCandidatesForAdmin: async ()=>{
        const fetchPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/candidates");
        const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), 2500));
        const res = await Promise.race([
            fetchPromise,
            timeoutPromise
        ]);
        return res.data;
    },
    getAllRecruitersForAdmin: async ()=>{
        const fetchPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/recruiters");
        const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), 2500));
        const res = await Promise.race([
            fetchPromise,
            timeoutPromise
        ]);
        return res.data;
    },
    getAuditLogsForAdmin: async ()=>{
        const fetchPromise = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/jobs/admin/audit-logs");
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
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const saveStoredJobs = (jobs)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const getStoredCompanies = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const saveStoredCompanies = (companies)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
}),
"[project]/src/services/pluginRegistry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginApi",
    ()=>pluginApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const pluginApi = {
    // Fetch available App Store catalog
    getCatalog: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/modules/catalog");
        return res.data?.success ? res.data : {
            modules: [],
            installedMap: {}
        };
    },
    // Fetch current user's installed/active modules
    getMyModules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/modules/my-modules");
        return res.data?.success ? res.data.installed || [] : [];
    },
    // Install or activate module
    installModule: async (moduleId, settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/install", {
            moduleId,
            settings
        });
        return res.data;
    },
    // Uninstall or deactivate module
    uninstallModule: async (moduleId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/uninstall", {
            moduleId
        });
        return res.data;
    },
    // Update module settings
    updateSettings: async (moduleId, settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/modules/${moduleId}/settings`, {
            settings
        });
        return res.data;
    },
    // Entity records (Appointments, Patients, Treatments, Tables, Prescriptions, etc.)
    getRecords: async (moduleId, entityType, params)=>{
        const query = new URLSearchParams();
        if (params?.chatId) query.set("chatId", params.chatId);
        if (params?.customerId) query.set("customerId", String(params.customerId));
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/modules/${moduleId}/records/${entityType}?${query.toString()}`);
        return res.data?.success ? res.data.records || [] : [];
    },
    createRecord: async (moduleId, entityType, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/modules/${moduleId}/records/${entityType}`, payload);
        return res.data;
    },
    updateRecord: async (moduleId, entityType, recordId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/modules/${moduleId}/records/${entityType}/${recordId}`, {
            data
        });
        return res.data;
    },
    deleteRecord: async (moduleId, entityType, recordId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/modules/${moduleId}/records/${entityType}/${recordId}`);
        return res.data;
    },
    // 3rd-Party Developer Publishing to App Store Portal
    publishModule: async (moduleData)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/publish", moduleData);
        return res.data;
    }
};
}),
"[project]/src/stores/useReelsStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_PRELOAD_REELS",
    ()=>FALLBACK_PRELOAD_REELS,
    "preloadReelsMedia",
    ()=>preloadReelsMedia,
    "useReelsStore",
    ()=>useReelsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const getApiBase = ()=>{
    return ("TURBOPACK compile-time value", "http://192.168.0.197:4025/api/v1") || "http://localhost:4025/api/v1";
};
const STORAGE_KEY = "pingdart_reels_taste_profile";
const REELS_CACHE_KEY = "pingdart_cached_reels";
const FALLBACK_PRELOAD_REELS = [
    {
        id: "tt_7701056271637548318",
        reelId: "tt_7701056271637548318",
        userName: "NFLonFOX",
        userAvatar: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/040e4341b0201067a378ee3e08044237~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=15183052&x-expires=1793188800&x-signature=Mvlt5MvBO4oQeTII5SNtPUUj9hY%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&sc=avatar&s=FEED",
        posterUrl: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-p-0068-tx2/ocWv8AqVvAvvIOPAQ2f0NjSEqef8gVtAI2UAQM~tplv-tiktokx-shrink_ep:640:640:q78.jpeg?dr=8592&refresh_token=7ae7203e&x-expires=1793188800&x-signature=SyAIZ0z07koNd8wVT6MnDE%2BVmW8%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&biz_tag=tt_video&s=FEED&sc=cover",
        videoUrl: "https://v19.tiktokcdn-us.com/753c62d96d3da02aecf4a2b4833af4e5/6ae0f415/video/tos/useast8/tos-useast8-ve-0068c004-tx2/o4UIJtLvggG8FRAAro4AepI3VfRjjFEIqIf0SC/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=1755&ft=MnA8ZQc6U8ufubme2ThkFNNTjV0Xt-q7BwQEe2hJBSjD1Inz&mime_type=video_mp4&rc=MzhmOTg5ZzM7OWY1OzhpZUBpM3I3eG45cnJ0ZTMzaTczNEBgNWEzMjJfNV8xYTQyM19hYSMyMWZiMmRrXmNhLS1kMTJzcw%3D%3D&vvpl=1&l=20261027125712DF5D0FD73719E8043C59&btag=e000b0000",
        caption: "Whole team went crazy #nfl #detroitlions #lions #funny #football",
        likes: 250988,
        comments: 1666,
        shares: 22921,
        views: "2121K",
        songName: "original sound - melodiesinmotion634 • Melodies in Motion",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    },
    {
        id: "tt_7681206916353166624",
        reelId: "tt_7681206916353166624",
        userName: "Britta",
        userAvatar: "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/de74009c4748f5a69ba7ab9087de9f7f~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=bfd4a424&x-expires=1793188800&x-signature=xqqD8HjWoE2qwKO%2FiUIfkUvHLAU%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&sc=avatar&s=FEED",
        posterUrl: "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-p-0037-euttp/oQADpEqKAIR0EJTEFSACpEIDZQSmmAeCTkflQm~tplv-tiktokx-origin.image?dr=8593&refresh_token=c02a8200&x-expires=1793188800&x-signature=TQ64uTqRxAacnymOwsrruTeoBzc%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&item=7681206916353166624&biz_tag=tt_video&s=FEED&sc=cover",
        videoUrl: "https://v19.tiktokcdn-us.com/3a99384d96f7447fd5fedd94a08542f6/6ae0f412/video/tos/useast2a/tos-useast2a-ve-0068-euttp/oICegeKLGGcVLZxILyIQjnQiMDMIX6AgfKjg9A/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=1370&ft=MnA8ZQc6U8ufubme2ThkFNNTjV0Xt-q7BwQEe2hJBSjD1Inz&mime_type=video_mp4&rc=OjdlOTQ4M2U1ZGQ8ZmU1ZkBpajg1c3k5cjxrZDMzZjczNUAyMzVjXmMyNS0xMy0yYDFiYSNiLWNpMmRjc2BhLS1kMTNzcw%3D%3D&vvpl=1&l=20261027125712DF5D0FD73719E8043C59&btag=e000b0000",
        caption: "This is what heaven must look like. A waterfall falling straight into the ocean! 🌊✨",
        likes: 2848796,
        comments: 9542,
        shares: 414959,
        views: "12414K",
        songName: "original sound - opheliasing • opheliaa",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    },
    {
        id: "tt_7701115078514429198",
        reelId: "tt_7701115078514429198",
        userName: "House of Highlights",
        userAvatar: "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ddb1bae76544d73b74940b71b8bb112d~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=61005041&x-expires=1793188800&x-signature=oNGIzTWOsCm0mA5SfZQBuzPYzq4%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&sc=avatar&s=FEED",
        posterUrl: "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oct42AfWS3QA22RGElgoIjFECUAmAqf2DdD9CX~tplv-tiktokx-shrink_ep:640:640:q78.jpeg?dr=8592&refresh_token=98f82174&x-expires=1793188800&x-signature=9BMvv0xUt5LBE2TNU0%2F5LWauNGE%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&s=FEED&sc=cover&biz_tag=tt_video",
        videoUrl: "https://v16m.tiktokcdn-us.com/c1038d3b626ff3b9cb401b5434cc9eb2/6ae0f413/video/tos/useast5/tos-useast5-ve-0068c003-tx/o8A289cejVIFekHCCVGfrRL7M37vAAugQG2GRI/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=1536&ft=H3YMyvShQBKUxsurIWl2K4yqYl_Wg7N1GbHF.B7q8Z4ka&mime_type=video_mp4&rc=OTw4NTs6OzQzNGY4NDppOUBpandvNnU5cml3ZTMzZzczNEAvLWM0LzAvNjExXjRhMjRjYSNnaWxmMmRraGNhLS1kMS9zcw%3D%3D&vvpl=1&l=202610271257124B640F1601D06F04E2C9&btag=e000b0000",
        caption: "FAHHHH. 😂😭 #NBA #funny #basketball #tyresehaliburton #soundeffects",
        likes: 462234,
        comments: 640,
        shares: 27674,
        views: "3302K",
        songName: "original sound - houseofhighlights • House of Highlights",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    },
    {
        id: "tt_7701177462306245902",
        reelId: "tt_7701177462306245902",
        userName: "TheLaurel",
        userAvatar: "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/df6db3b930e900f3fc5616f29346afe0~tplv-tiktokx-cropcenter-q:300:300:q70.jpeg?dr=8834&refresh_token=683c215c&x-expires=1793188800&x-signature=EHfYBAqvDCDg5CjHdirR4MrEuZw%3D&t=223449c4&ps=87d6e48a&shp=d05b14bd&shcp=1a816805&idc=useast5&s=FEED&sc=avatar",
        posterUrl: "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-p-85c255-tx/oUCqG7QTNEFkAB5YgEF44FSDufEfzDBEDwBDgI~tplv-tiktokx-shrink_ep:640:640:q78.jpeg?dr=8592&refresh_token=1c765702&x-expires=1793188800&x-signature=Es79cA8Gx2cnN%2FIkJ1TCTJ75HD0%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1a816805&idc=useast5&biz_tag=tt_video&s=FEED&sc=cover",
        videoUrl: "https://v16m.tiktokcdn-us.com/7c8364f472041471833a0194cf8ac244/6ae0f417/video/tos/useast5/tos-useast5-v-85c255-tx/oMEDgEz3BSKpTEEqT4FfDBgpfFWlQ4ICBvDkwu/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&&bt=452&ft=H3YMyvShQBKUxsurIWl2K4yqYl_Wg7N1GbHF.B7q8Z4ka&mime_type=video_mp4&rc=NjZlZGZlZjM6O2czNzk2M0BpM3k6amw5cmU0ZTQzZzM2NEA1XmA0NTBhNV8xMTIyXzAzYSNwZ2UtMmRrNWRhLS1kLS9zcw%3D%3D&vvpl=1&l=202610271257124B640F1601D06F04E2C9&btag=e000b0000",
        caption: "✨ Your next chapter starts here! 🌴🤍 Resort-style living & beautiful sunset vibes! 🏡☀️",
        likes: 8520,
        comments: 420,
        shares: 223,
        views: "89K",
        songName: "original sound - the_laurelchandler • TheLaurel",
        source: "admin",
        status: "active",
        location: "Global",
        category: "Trending",
        mood: "happy",
        tags: "#TikTok #Viral #Trending #Reels"
    }
];
const preloadReelsMedia = (reelsList)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadCachedReels = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return FALLBACK_PRELOAD_REELS;
    //TURBOPACK unreachable
    ;
};
const saveCachedReels = (reelsList)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadTasteProfile = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            moodAffinities: {},
            categoryAffinities: {},
            locationAffinities: {},
            seenReelIds: [],
            likedReelIds: []
        };
    }
    //TURBOPACK unreachable
    ;
};
const saveTasteProfile = (profile)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const useReelsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        reels: loadCachedReels(),
        isLoading: false,
        activeFilter: "all",
        tasteProfile: loadTasteProfile(),
        recordInteraction: (reel, type)=>{
            const profile = {
                ...get().tasteProfile
            };
            const reelIdStr = String(reel.id || reel.reelId || "");
            const mood = (reel.mood || "").toLowerCase();
            const cat = (reel.category || "").toLowerCase();
            const loc = (reel.location || "").toLowerCase();
            if (type === "like") {
                if (mood) profile.moodAffinities[mood] = (profile.moodAffinities[mood] || 0) + 6;
                if (cat) profile.categoryAffinities[cat] = (profile.categoryAffinities[cat] || 0) + 4;
                if (loc) profile.locationAffinities[loc] = (profile.locationAffinities[loc] || 0) + 4;
                if (!profile.likedReelIds.includes(reelIdStr)) {
                    profile.likedReelIds.push(reelIdStr);
                }
            } else if (type === "unlike") {
                if (mood) profile.moodAffinities[mood] = Math.max(0, (profile.moodAffinities[mood] || 0) - 4);
                profile.likedReelIds = profile.likedReelIds.filter((id)=>id !== reelIdStr);
            } else if (type === "share") {
                if (mood) profile.moodAffinities[mood] = (profile.moodAffinities[mood] || 0) + 8;
                if (cat) profile.categoryAffinities[cat] = (profile.categoryAffinities[cat] || 0) + 6;
            } else if (type === "watch") {
                if (mood) profile.moodAffinities[mood] = (profile.moodAffinities[mood] || 0) + 2;
            }
            if (type === "seen" || type === "watch") {
                if (reelIdStr && !profile.seenReelIds.includes(reelIdStr)) {
                    profile.seenReelIds.push(reelIdStr);
                }
            }
            saveTasteProfile(profile);
            set({
                tasteProfile: profile
            });
        },
        clearSeenHistory: ()=>{
            const profile = {
                ...get().tasteProfile,
                seenReelIds: []
            };
            saveTasteProfile(profile);
            set({
                tasteProfile: profile
            });
        },
        fetchRecommendations: async (mood, category, location)=>{
            set({
                isLoading: true
            });
            try {
                if (category === "TikTok" || mood === "tiktok" || category === "Trending") {
                    try {
                        const ttRes = await fetch(`${getApiBase()}/reels/tiktok-feed?count=20`);
                        if (ttRes.ok) {
                            const ttJson = await ttRes.json();
                            if (ttJson && Array.isArray(ttJson.data) && ttJson.data.length > 0) {
                                saveCachedReels(ttJson.data);
                                preloadReelsMedia(ttJson.data);
                                set({
                                    reels: ttJson.data,
                                    isLoading: false
                                });
                                return;
                            }
                        }
                    } catch (_) {}
                }
                const profile = get().tasteProfile;
                // Get top 3 preferred moods sorted by affinity
                const topMoods = Object.entries(profile.moodAffinities).sort((a, b)=>b[1] - a[1]).slice(0, 3).map(([m])=>m);
                const params = new URLSearchParams();
                if (mood && mood !== "all") params.set("mood", mood);
                if (category && category !== "all") params.set("category", category);
                if (location && location !== "all") params.set("location", location);
                if (profile.seenReelIds.length > 0) {
                    params.set("seenIds", profile.seenReelIds.slice(-40).join(","));
                }
                if (topMoods.length > 0) {
                    params.set("preferredMoods", topMoods.join(","));
                }
                const res = await fetch(`${getApiBase()}/reels/recommendations?${params.toString()}`);
                if (res.ok) {
                    const json = await res.json();
                    if (json && Array.isArray(json.data) && json.data.length > 0) {
                        saveCachedReels(json.data);
                        preloadReelsMedia(json.data);
                        set({
                            reels: json.data,
                            isLoading: false
                        });
                        return;
                    }
                }
            } catch (err) {
                console.warn("[ReelsStore] Recommendations fallback error:", err);
            }
            // Fallback to fetchReels
            get().fetchReels(mood, category, location);
        },
        fetchReels: async (mood, category, location)=>{
            set({
                isLoading: true
            });
            try {
                const params = new URLSearchParams();
                if (mood && mood !== "all") params.set("mood", mood);
                if (category && category !== "all") params.set("category", category);
                if (location && location !== "all") params.set("location", location);
                const res = await fetch(`${getApiBase()}/reels?${params.toString()}`);
                if (res.ok) {
                    const json = await res.json();
                    if (json && Array.isArray(json.data)) {
                        saveCachedReels(json.data);
                        preloadReelsMedia(json.data);
                        set({
                            reels: json.data,
                            isLoading: false
                        });
                        return;
                    }
                }
            } catch (err) {
                console.warn("[ReelsStore] Failed to fetch reels from backend:", err);
            }
            set({
                isLoading: false
            });
        },
        seed10Reels: async ()=>{
            try {
                const res = await fetch(`${getApiBase()}/reels/seed`, {
                    method: "POST"
                });
                if (res.ok) {
                    const json = await res.json();
                    if (json.data) {
                        set({
                            reels: json.data
                        });
                    }
                }
            } catch (err) {
                console.error("[ReelsStore] Seed error", err);
            }
        },
        addReel: async (reel, file)=>{
            // Optimistic local add
            set((state)=>({
                    reels: [
                        reel,
                        ...state.reels
                    ]
                }));
            try {
                let res;
                if (file) {
                    const formData = new FormData();
                    formData.append("video", file);
                    formData.append("caption", reel.caption);
                    formData.append("userName", reel.userName);
                    if (reel.userAvatar) formData.append("userAvatar", reel.userAvatar);
                    if (reel.songName) formData.append("songName", reel.songName);
                    if (reel.location) formData.append("location", reel.location);
                    if (reel.category) formData.append("category", reel.category);
                    if (reel.mood) formData.append("mood", reel.mood);
                    if (reel.tags) formData.append("tags", reel.tags);
                    formData.append("isUserUploaded", "true");
                    formData.append("source", reel.source || "user");
                    res = await fetch(`${getApiBase()}/reels`, {
                        method: "POST",
                        body: formData
                    });
                } else {
                    res = await fetch(`${getApiBase()}/reels`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(reel)
                    });
                }
                if (res.ok) {
                    get().fetchRecommendations();
                }
            } catch (err) {
                console.error("[ReelsStore] Add reel API error", err);
            }
        },
        deleteReel: async (id)=>{
            set((state)=>({
                    reels: state.reels.filter((r)=>r.id !== id)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}`, {
                    method: "DELETE"
                });
            } catch (err) {
                console.error("[ReelsStore] Delete reel API error", err);
            }
        },
        blockReel: async (id)=>{
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            status: "blocked"
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/status`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status: "blocked"
                    })
                });
            } catch (err) {
                console.error("[ReelsStore] Block reel API error", err);
            }
        },
        unblockReel: async (id)=>{
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            status: "active"
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/status`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status: "active"
                    })
                });
            } catch (err) {
                console.error("[ReelsStore] Unblock reel API error", err);
            }
        },
        likeReel: async (id, isLiked)=>{
            const currentReel = get().reels.find((r)=>r.id === id);
            if (currentReel) {
                get().recordInteraction(currentReel, isLiked ? "like" : "unlike");
            }
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            likes: isLiked ? r.likes + 1 : Math.max(0, r.likes - 1)
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/like`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        isLiked,
                        action: isLiked ? "like" : "unlike"
                    })
                });
            } catch (err) {
                console.error("[ReelsStore] Like API error", err);
            }
        },
        shareReel: async (id)=>{
            const currentReel = get().reels.find((r)=>r.id === id);
            if (currentReel) {
                get().recordInteraction(currentReel, "share");
            }
            set((state)=>({
                    reels: state.reels.map((r)=>r.id === id ? {
                            ...r,
                            shares: r.shares + 1
                        } : r)
                }));
            try {
                await fetch(`${getApiBase()}/reels/${id}/share`, {
                    method: "POST"
                });
            } catch (err) {
                console.error("[ReelsStore] Share API error", err);
            }
        },
        fetchComments: async (id)=>{
            try {
                const res = await fetch(`${getApiBase()}/reels/${id}/comments`);
                if (res.ok) {
                    const json = await res.json();
                    return json.data || [];
                }
            } catch (err) {
                console.error("[ReelsStore] Fetch comments error", err);
            }
            return [];
        },
        addComment: async (id, text, userName = "You", userAvatar)=>{
            try {
                const res = await fetch(`${getApiBase()}/reels/${id}/comments`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text,
                        userName,
                        userAvatar
                    })
                });
                if (res.ok) {
                    const json = await res.json();
                    set((state)=>({
                            reels: state.reels.map((r)=>r.id === id ? {
                                    ...r,
                                    comments: r.comments + 1
                                } : r)
                        }));
                    return json.data;
                }
            } catch (err) {
                console.error("[ReelsStore] Add comment error", err);
            }
            return null;
        }
    }));
}),
];

//# sourceMappingURL=src_ba69c7d7._.js.map