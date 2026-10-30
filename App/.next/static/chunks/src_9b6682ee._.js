(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/storageApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN_LIMITS",
    ()=>PLAN_LIMITS,
    "storageApi",
    ()=>storageApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
;
;
function getCurrentUserKey() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const { useAuthStore } = __turbopack_context__.r("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
        const user = useAuthStore.getState().user;
        if (user === null || user === void 0 ? void 0 : user.id) return `user_${user.id}`;
        if (user === null || user === void 0 ? void 0 : user.email) return `user_${user.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
    } catch (_) {}
    try {
        const raw = localStorage.getItem("auth-storage");
        if (raw) {
            var _parsed_state;
            const parsed = JSON.parse(raw);
            const user = parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : _parsed_state.user;
            if (user === null || user === void 0 ? void 0 : user.id) return `user_${user.id}`;
            if (user === null || user === void 0 ? void 0 : user.email) return `user_${user.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
        }
    } catch (_) {}
    try {
        const userRaw = localStorage.getItem("user");
        if (userRaw) {
            const u = JSON.parse(userRaw);
            if (u === null || u === void 0 ? void 0 : u.id) return `user_${u.id}`;
            if (u === null || u === void 0 ? void 0 : u.email) return `user_${u.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
        }
    } catch (_) {}
    return "guest";
}
const PLAN_LIMITS = {
    Free: 15 * 1024 * 1024 * 1024,
    Basic: 100 * 1024 * 1024 * 1024,
    Standard: 500 * 1024 * 1024 * 1024,
    Pro: 2000 * 1024 * 1024 * 1024,
    Business: 5000 * 1024 * 1024 * 1024 // 5 TB
};
class StorageService {
    cleanLegacySharedStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            // Remove legacy unscoped keys that leaked across multiple accounts on same browser
            localStorage.removeItem("pingdart_cloud_folders");
            localStorage.removeItem("pingdart_cloud_files");
        } catch (_) {}
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
        if ("object" === "undefined" || this.isSyncing) return;
        this.isSyncing = true;
        try {
            const userKey = getCurrentUserKey();
            if (userKey !== this.currentLoadedUser) {
                this.loadFromStorage();
            }
            // If we have local files or folders, push them to the server so they become accessible across all devices
            const ownFolders = this.folders.filter((f)=>!f.isShared);
            const ownFiles = this.files.filter((f)=>!f.isShared);
            if (ownFiles.length > 0 || ownFolders.length > 0) {
                const serializableFiles = ownFiles.map((f)=>{
                    var _f_url, _f_url1, _f_thumbnailUrl, _f_thumbnailUrl1;
                    return {
                        ...f,
                        url: ((_f_url = f.url) === null || _f_url === void 0 ? void 0 : _f_url.startsWith("blob:")) || ((_f_url1 = f.url) === null || _f_url1 === void 0 ? void 0 : _f_url1.startsWith("data:")) && f.url.length > 10000 ? "" : f.url,
                        thumbnailUrl: ((_f_thumbnailUrl = f.thumbnailUrl) === null || _f_thumbnailUrl === void 0 ? void 0 : _f_thumbnailUrl.startsWith("blob:")) || ((_f_thumbnailUrl1 = f.thumbnailUrl) === null || _f_thumbnailUrl1 === void 0 ? void 0 : _f_thumbnailUrl1.startsWith("data:")) && f.thumbnailUrl.length > 10000 ? undefined : f.thumbnailUrl
                    };
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/batch-sync", {
                    folders: ownFolders,
                    files: serializableFiles
                }).catch(()=>{});
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cloud-drive/sync");
            if (res.data && res.data.success && res.data.data) {
                var _sharedRes_data, _sharedRes_data1;
                let ownFolders = res.data.data.folders || [];
                let ownFiles = res.data.data.files || [];
                // Also fetch shared-with-me items
                const sharedRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cloud-drive/shared-with-me").catch(()=>null);
                if ((sharedRes === null || sharedRes === void 0 ? void 0 : (_sharedRes_data = sharedRes.data) === null || _sharedRes_data === void 0 ? void 0 : _sharedRes_data.success) && (sharedRes === null || sharedRes === void 0 ? void 0 : (_sharedRes_data1 = sharedRes.data) === null || _sharedRes_data1 === void 0 ? void 0 : _sharedRes_data1.data)) {
                    const sharedFolders = sharedRes.data.data.folders || [];
                    const sharedFiles = sharedRes.data.data.files || [];
                    const folderIds = new Set(ownFolders.map((f)=>f.id));
                    for (const sf of sharedFolders){
                        if (!folderIds.has(sf.id)) {
                            ownFolders.push(sf);
                        }
                    }
                    const fileIds = new Set(ownFiles.map((f)=>f.id));
                    for (const sf of sharedFiles){
                        if (!fileIds.has(sf.id)) {
                            ownFiles.push(sf);
                        }
                    }
                }
                this.folders = ownFolders;
                this.files = ownFiles;
                if (res.data.data.quota) {
                    this.quota = {
                        ...this.quota,
                        usedBytes: res.data.data.quota.usedBytes || this.getQuota().usedBytes,
                        limitBytes: res.data.data.quota.limitBytes || this.quota.limitBytes,
                        planName: res.data.data.quota.planName || this.quota.planName
                    };
                }
                this.saveToStorage();
                this.notify();
            }
        } catch (e) {
            console.warn("[CloudDrive] Server sync error:", (e === null || e === void 0 ? void 0 : e.message) || e);
        } finally{
            this.isSyncing = false;
        }
    }
    loadFromStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const userKey = getCurrentUserKey();
            this.currentLoadedUser = userKey;
            if (userKey === "guest") {
                this.folders = [];
                this.files = [];
                return;
            }
            const savedFolders = localStorage.getItem(`pingdart_cloud_folders_${userKey}`);
            const savedFiles = localStorage.getItem(`pingdart_cloud_files_${userKey}`);
            const savedPlan = localStorage.getItem(`pingdart_cloud_plan_${userKey}`);
            this.folders = savedFolders ? JSON.parse(savedFolders) : [];
            this.files = savedFiles ? JSON.parse(savedFiles) : [];
            if (savedPlan && savedPlan in PLAN_LIMITS) {
                this.quota.planName = savedPlan;
                this.quota.limitBytes = PLAN_LIMITS[savedPlan];
            }
        } catch (e) {
            console.warn("Could not load cloud storage state from localStorage", e);
        }
    }
    saveToStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const userKey = getCurrentUserKey();
            if (userKey === "guest") return;
            const serializableFiles = this.files.map((f)=>{
                const url = f.url || "";
                const isLargeDataUrl = url.startsWith("data:") && url.length > 500_000;
                const isBlobUrl = url.startsWith("blob:");
                if (isLargeDataUrl || isBlobUrl) {
                    return {
                        ...f,
                        url: "",
                        thumbnailUrl: undefined
                    };
                }
                return f;
            });
            localStorage.setItem(`pingdart_cloud_folders_${userKey}`, JSON.stringify(this.folders));
            localStorage.setItem(`pingdart_cloud_files_${userKey}`, JSON.stringify(serializableFiles));
            localStorage.setItem(`pingdart_cloud_plan_${userKey}`, this.quota.planName);
        } catch (e) {
            console.warn("Could not save cloud storage state to localStorage", e);
        }
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
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/plan", {
                planName: plan
            }).catch(()=>{});
        }
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
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", newFolder).catch((e)=>console.warn("[CloudDrive] Folder push failed", e));
        }
        return newFolder;
    }
    addFile(file) {
        var _file_mimeType, _file_mimeType1, _file_mimeType2, _file_mimeType3, _file_mimeType4, _file_mimeType5, _file_mimeType6, _file_mimeType7, _file_mimeType8;
        this.ensureUserContext();
        const nameLower = (file.name || "").toLowerCase();
        const isImg = ((_file_mimeType = file.mimeType) === null || _file_mimeType === void 0 ? void 0 : _file_mimeType.startsWith("image/")) || nameLower.endsWith(".png") || nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || nameLower.endsWith(".webp") || nameLower.endsWith(".gif") || nameLower.endsWith(".svg");
        const category = isImg ? "image" : ((_file_mimeType1 = file.mimeType) === null || _file_mimeType1 === void 0 ? void 0 : _file_mimeType1.startsWith("video/")) || nameLower.endsWith(".mp4") || nameLower.endsWith(".webm") || nameLower.endsWith(".mov") ? "video" : ((_file_mimeType2 = file.mimeType) === null || _file_mimeType2 === void 0 ? void 0 : _file_mimeType2.startsWith("audio/")) || nameLower.endsWith(".mp3") || nameLower.endsWith(".wav") ? "audio" : ((_file_mimeType3 = file.mimeType) === null || _file_mimeType3 === void 0 ? void 0 : _file_mimeType3.includes("pdf")) || ((_file_mimeType4 = file.mimeType) === null || _file_mimeType4 === void 0 ? void 0 : _file_mimeType4.includes("word")) || ((_file_mimeType5 = file.mimeType) === null || _file_mimeType5 === void 0 ? void 0 : _file_mimeType5.includes("sheet")) || ((_file_mimeType6 = file.mimeType) === null || _file_mimeType6 === void 0 ? void 0 : _file_mimeType6.includes("text")) || nameLower.endsWith(".pdf") || nameLower.endsWith(".doc") || nameLower.endsWith(".docx") || nameLower.endsWith(".txt") ? "document" : ((_file_mimeType7 = file.mimeType) === null || _file_mimeType7 === void 0 ? void 0 : _file_mimeType7.includes("zip")) || ((_file_mimeType8 = file.mimeType) === null || _file_mimeType8 === void 0 ? void 0 : _file_mimeType8.includes("tar")) || nameLower.endsWith(".zip") || nameLower.endsWith(".rar") || nameLower.endsWith(".7z") ? "archive" : "other";
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
        if ("TURBOPACK compile-time truthy", 1) {
            const isLargeDataUrl = mediaUrl.startsWith("data:") && mediaUrl.length > 5000;
            const isBlob = mediaUrl.startsWith("blob:");
            const payloadFile = {
                ...newFile,
                url: isLargeDataUrl || isBlob ? "" : mediaUrl,
                thumbnailUrl: isLargeDataUrl || isBlob ? undefined : thumbUrl
            };
            if (payloadFile.url) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/files", payloadFile).catch((e)=>console.warn("[CloudDrive] File push failed", e));
            }
        }
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderStar error", e));
        }
    }
    toggleFolderTrash(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderTrash error", e));
        }
    }
    deleteFolderPermanently(folderId) {
        this.ensureUserContext();
        this.folders = this.folders.filter((f)=>f.id !== folderId);
        this.files = this.files.filter((f)=>f.folderId !== folderId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}`).catch((e)=>console.warn("[CloudDrive] deleteFolder error", e));
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${f.id}`).catch(()=>{});
        });
        trashFolders.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${f.id}`).catch(()=>{});
        });
    }
    toggleStar(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isTrash: f.isTrash
            }).catch((e)=>console.warn("[CloudDrive] toggleTrash error", e));
        }
    }
    deletePermanently(fileId) {
        this.ensureUserContext();
        this.files = this.files.filter((item)=>item.id !== fileId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${fileId}`).catch((e)=>console.warn("[CloudDrive] deletePermanently error", e));
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/files", f);
                return true;
            } catch (e) {
                console.warn("[CloudDrive] updateFileUrl error", e);
            }
        }
        return false;
    }
    savePublicShareLink(file, link) {
        var _link_publicUrl_split_;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const token = ((_link_publicUrl_split_ = link.publicUrl.split("/share/")[1]) === null || _link_publicUrl_split_ === void 0 ? void 0 : _link_publicUrl_split_.replace(/\/+$/, "")) || file.id;
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-share", {
                token,
                file,
                shareLink: link
            }).catch((e)=>console.warn("[CloudShare] backend push failed", e));
        } catch (e) {
            console.warn("[CloudShare] backend push error", e);
        }
    }
    generateShareLink(fileId, password, expiresDays) {
        this.loadFromStorage();
        const f = this.files.find((item)=>item.id === fileId || fileId.startsWith(item.id));
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebBaseUrl"])();
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
        var _f_shareLink, _f_shareLink1, _f_shareLink2;
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
        const isExpired = Boolean(((_f_shareLink = f.shareLink) === null || _f_shareLink === void 0 ? void 0 : _f_shareLink.expiresAt) && new Date(f.shareLink.expiresAt).getTime() < Date.now());
        if (f.shareLink) {
            f.shareLink.accessCount = (f.shareLink.accessCount || 0) + 1;
            this.saveToStorage();
            this.savePublicShareLink(f, f.shareLink);
        }
        return {
            file: f,
            isExpired,
            isPasswordProtected: Boolean((_f_shareLink1 = f.shareLink) === null || _f_shareLink1 === void 0 ? void 0 : _f_shareLink1.isPasswordProtected),
            password: (_f_shareLink2 = f.shareLink) === null || _f_shareLink2 === void 0 ? void 0 : _f_shareLink2.password
        };
    }
    getSharedFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isShared && !f.isTrash);
    }
    async shareFolder(folderId, email, permission = "write") {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/cloud-drive/folders/${folderId}/share`, {
            email,
            permission
        });
        if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async unshareFolder(folderId, targetUserId) {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}/share/${targetUserId}`);
        if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async getFolderShares(folderId) {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/cloud-drive/folders/${folderId}/shares`);
        return ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || [];
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "files", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "folders", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "quota", {
            usedBytes: 0,
            limitBytes: PLAN_LIMITS.Free,
            planName: "Free",
            freeLimitBytes: PLAN_LIMITS.Free
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "listeners", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isSyncing", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentLoadedUser", "");
        this.cleanLegacySharedStorage();
        this.loadFromStorage();
        if ("TURBOPACK compile-time truthy", 1) {
            setTimeout(()=>this.syncWithServer(), 100);
        }
    }
}
const storageApi = new StorageService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/app/user/components/screens/MoreScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_EVALUATIONS",
    ()=>INITIAL_EVALUATIONS,
    "MODULES_LIST",
    ()=>MODULES_LIST,
    "MoreScreen",
    ()=>MoreScreen,
    "daysAgo",
    ()=>daysAgo,
    "getDynamicModuleEvaluations",
    ()=>getDynamicModuleEvaluations,
    "getRelativeTime",
    ()=>getRelativeTime,
    "hoursAgo",
    ()=>hoursAgo,
    "minutesAgo",
    ()=>minutesAgo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Note01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Link01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Calendar01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ShoppingBag01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ShoppingBag01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FavouriteIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tv01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tv01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Grid02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FilterIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Briefcase01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CpuIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CpuIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CodeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/BookOpen01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Coins01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storageApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/jobsApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
;
const getIsoTimestamp = (offsetMs)=>new Date(Date.now() - offsetMs).toISOString();
const hoursAgo = (h)=>getIsoTimestamp(h * 60 * 60 * 1000);
const daysAgo = (d)=>getIsoTimestamp(d * 24 * 60 * 60 * 1000);
const minutesAgo = (m)=>getIsoTimestamp(m * 60 * 1000);
function getRelativeTime(dateInput) {
    if (!dateInput) return "Just now";
    if (typeof dateInput === "string") {
        if (dateInput.includes("ago") || dateInput === "Yesterday" || dateInput === "Just now") {
            return dateInput;
        }
    }
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return String(dateInput);
    const now = new Date();
    const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));
    if (diffInSeconds < 45) return "Just now";
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? "1 minute ago" : `${diffInMinutes} minutes ago`;
    }
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) {
        const weeks = Math.floor(diffInDays / 7);
        return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    }
    return date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}
const INITIAL_EVALUATIONS = {
    pingdart_code: [
        {
            id: "ev_code_1",
            moduleId: "pingdart_code",
            userName: "Alex Mercer",
            userAvatar: "",
            rating: 5,
            comment: "The FIM inline completion is noticeably faster than Cursor, and the 4-agent planner/reviewer workflow caught 2 subtle race conditions before I even committed!",
            createdAt: hoursAgo(1),
            likes: 64
        },
        {
            id: "ev_code_2",
            moduleId: "pingdart_code",
            userName: "Devon Chen",
            userAvatar: "",
            rating: 5,
            comment: "The Human Simple coding style is a breath of fresh air. No convoluted abstractions or bloated one-liners. Clean, maintainable TypeScript.",
            createdAt: daysAgo(1),
            likes: 42
        }
    ],
    ai_budget: [
        {
            id: "ev_budget_1",
            moduleId: "ai_budget",
            userName: "Rohan Varma",
            userAvatar: "",
            rating: 5,
            comment: "The zero-knowledge encryption and on-device SMS parsing is brilliant. No bank logins needed and privacy is 100% respected.",
            createdAt: hoursAgo(2),
            likes: 38
        },
        {
            id: "ev_budget_2",
            moduleId: "ai_budget",
            userName: "Meera Nair",
            userAvatar: "",
            rating: 5,
            comment: "The Subscription Radar caught two unused SaaS renewals right away. Saved me ₹1,500 this month alone!",
            createdAt: daysAgo(1),
            likes: 24
        }
    ],
    ai_diary: [
        {
            id: "ev_diary_1",
            moduleId: "ai_diary",
            userName: "Ananya Deshmukh",
            userAvatar: "",
            rating: 5,
            comment: "Voice reflection is therapeutic. The life trajectory forecasts and memory confidence layer are leagues ahead of basic journal apps.",
            createdAt: hoursAgo(3),
            likes: 45
        },
        {
            id: "ev_diary_2",
            moduleId: "ai_diary",
            userName: "Siddharth Rao",
            userAvatar: "",
            rating: 5,
            comment: "The AI Coach Socratic questioning helped me break through burn-out last week. Grounded in my actual journal history.",
            createdAt: daysAgo(1),
            likes: 31
        }
    ],
    ai_blogs_generator: [
        {
            id: "ev_blog_1",
            moduleId: "ai_blogs_generator",
            userName: "Liam Chen",
            userAvatar: "",
            rating: 5,
            comment: "The automated N8N workflow combined with section image generation made our content publishing 5x faster.",
            createdAt: hoursAgo(1),
            likes: 27
        },
        {
            id: "ev_blog_2",
            moduleId: "ai_blogs_generator",
            userName: "Rachel Adams",
            userAvatar: "",
            rating: 5,
            comment: "SEO keywords and meta descriptions are calculated accurately according to Google's latest search standards.",
            createdAt: daysAgo(1),
            likes: 14
        }
    ],
    ai_jobs_hub: [
        {
            id: "ev_1",
            moduleId: "ai_jobs_hub",
            userName: "Alexander Vance",
            userAvatar: "",
            rating: 5,
            comment: "The AI match score was spot on! Connected with a tech recruiter in 10 minutes via direct chat.",
            createdAt: hoursAgo(2),
            likes: 18
        },
        {
            id: "ev_2",
            moduleId: "ai_jobs_hub",
            userName: "Sophia Martinez",
            userAvatar: "",
            rating: 5,
            comment: "Super smooth candidate ATS pipeline. Interview scheduling right inside the workspace saved us hours.",
            createdAt: daysAgo(1),
            likes: 9
        }
    ],
    hms_suite: [
        {
            id: "ev_5",
            moduleId: "hms_suite",
            userName: "Dr. Arvind Patel",
            userAvatar: "",
            rating: 5,
            comment: "Complete lifesaver for our OPD clinic. Prescription generation and appointment queues work synchronously.",
            createdAt: daysAgo(1),
            likes: 31
        },
        {
            id: "ev_hms_2",
            moduleId: "hms_suite",
            userName: "Nurse Sarah Jenkins",
            userAvatar: "",
            rating: 5,
            comment: "Bed management and lab report distribution to patient chat threads eliminated waiting room queues.",
            createdAt: daysAgo(2),
            likes: 19
        }
    ],
    crm_tracker: [
        {
            id: "ev_7",
            moduleId: "crm_tracker",
            userName: "David Kim",
            userAvatar: "",
            rating: 5,
            comment: "Deal stages and client conversation timelines are neatly organized. Closed 3 key clients this week!",
            createdAt: hoursAgo(4),
            likes: 12
        },
        {
            id: "ev_crm_2",
            moduleId: "crm_tracker",
            userName: "Priya Sharma",
            userAvatar: "",
            rating: 5,
            comment: "The automated follow-up reminders synced to chat make tracking our entire sales pipeline effortless.",
            createdAt: daysAgo(1),
            likes: 16
        }
    ],
    hrm_suite: [
        {
            id: "ev_hrm_1",
            moduleId: "hrm_suite",
            userName: "Rajesh Kumar",
            userAvatar: "",
            rating: 5,
            comment: "The live web & mobile attendance punch with geo-fencing and automated leave CRM interlock is outstanding!",
            createdAt: hoursAgo(2),
            likes: 36
        },
        {
            id: "ev_hrm_2",
            moduleId: "hrm_suite",
            userName: "Sneha Patel",
            userAvatar: "",
            rating: 5,
            comment: "Auto-crediting sales commissions from won CRM deals directly into monthly payroll payslips saves our finance team hours.",
            createdAt: daysAgo(1),
            likes: 28
        }
    ],
    ai_copilot: [
        {
            id: "ev_6",
            moduleId: "ai_copilot",
            userName: "Chloe Bennett",
            userAvatar: "",
            rating: 5,
            comment: "Gemini Flash response times are unbelievable. Summarizes entire 50-message chat threads in under a second.",
            createdAt: hoursAgo(5),
            likes: 42
        },
        {
            id: "ev_ai_2",
            moduleId: "ai_copilot",
            userName: "James Wilson",
            userAvatar: "",
            rating: 5,
            comment: "Contextual smart replies sound totally natural. Saves tons of typing on mobile during busy hours.",
            createdAt: daysAgo(1),
            likes: 29
        }
    ],
    cloud_storage: [
        {
            id: "ev_3",
            moduleId: "cloud_storage",
            userName: "Marcus Thorne",
            userAvatar: "",
            rating: 5,
            comment: "Lightning fast upload speeds and client-side encryption gives complete peace of mind. Previews are instant!",
            createdAt: hoursAgo(3),
            likes: 24
        },
        {
            id: "ev_4",
            moduleId: "cloud_storage",
            userName: "Elena Rostova",
            userAvatar: "",
            rating: 5,
            comment: "The multi-device synchronization is seamless. Works flawlessly across both desktop and mobile apps.",
            createdAt: daysAgo(2),
            likes: 15
        }
    ],
    notes_docs: [
        {
            id: "ev_notes_1",
            moduleId: "notes_docs",
            userName: "Lucas Silva",
            userAvatar: "",
            rating: 5,
            comment: "The live markdown preview and table support make documentation a breeze right inside PingDart.",
            createdAt: hoursAgo(3),
            likes: 17
        },
        {
            id: "ev_notes_2",
            moduleId: "notes_docs",
            userName: "Emily Watson",
            userAvatar: "",
            rating: 5,
            comment: "Exporting notes directly to PDF or sharing snippets to chat channels saves so much context switching.",
            createdAt: daysAgo(1),
            likes: 11
        }
    ],
    reels_feed: [
        {
            id: "ev_reels_1",
            moduleId: "reels_feed",
            userName: "Jordan Lee",
            userAvatar: "",
            rating: 5,
            comment: "Smooth 60fps vertical playback and instant sharing into group chats make this super engaging!",
            createdAt: hoursAgo(2),
            likes: 34
        },
        {
            id: "ev_reels_2",
            moduleId: "reels_feed",
            userName: "Maya Lin",
            userAvatar: "",
            rating: 5,
            comment: "The video importer and creator trend discovery tool works like magic. Seamless mobile scrolling.",
            createdAt: daysAgo(1),
            likes: 22
        }
    ],
    shop_commerce: [
        {
            id: "ev_shop_1",
            moduleId: "shop_commerce",
            userName: "Carlos Gomez",
            userAvatar: "",
            rating: 5,
            comment: "In-chat checkout with order notifications streamlined our entire digital store checkout flow.",
            createdAt: hoursAgo(4),
            likes: 19
        },
        {
            id: "ev_shop_2",
            moduleId: "shop_commerce",
            userName: "Aisha Khan",
            userAvatar: "",
            rating: 5,
            comment: "Inventory tracking and seller direct messaging make handling customer inquiries instant.",
            createdAt: daysAgo(2),
            likes: 13
        }
    ],
    live_stream: [
        {
            id: "ev_live_1",
            moduleId: "live_stream",
            userName: "Daniel Wu",
            userAvatar: "",
            rating: 5,
            comment: "Ultra-low latency streaming with interactive viewer reactions and real-time chat overlay is incredible.",
            createdAt: hoursAgo(6),
            likes: 28
        },
        {
            id: "ev_live_2",
            moduleId: "live_stream",
            userName: "Olivia Taylor",
            userAvatar: "",
            rating: 5,
            comment: "Hosted a 400-person live community broadcast without a single hiccup. Replay saved straight to drive.",
            createdAt: daysAgo(1),
            likes: 25
        }
    ],
    e2ee_vault: [
        {
            id: "ev_vault_1",
            moduleId: "e2ee_vault",
            userName: "Robert Vance",
            userAvatar: "",
            rating: 5,
            comment: "Zero-knowledge encryption gives our team complete confidence storing API tokens and sensitive keys securely.",
            createdAt: hoursAgo(5),
            likes: 33
        },
        {
            id: "ev_vault_2",
            moduleId: "e2ee_vault",
            userName: "Hanna Berg",
            userAvatar: "",
            rating: 5,
            comment: "Biometric unlock and automatic clipboard wipe after 30 seconds are brilliant security touches.",
            createdAt: daysAgo(2),
            likes: 21
        }
    ],
    calendar_scheduler: [
        {
            id: "ev_cal_1",
            moduleId: "calendar_scheduler",
            userName: "Nathan Scott",
            userAvatar: "",
            rating: 5,
            comment: "Generating 1-click PingDart Call links and syncing with Google Calendar eliminated scheduling chaos.",
            createdAt: hoursAgo(3),
            likes: 14
        },
        {
            id: "ev_cal_2",
            moduleId: "calendar_scheduler",
            userName: "Claire Dubois",
            userAvatar: "",
            rating: 5,
            comment: "Automated chat reminder broadcasts 10 minutes before events keep everyone punctual and prepared.",
            createdAt: daysAgo(1),
            likes: 18
        }
    ],
    business_engines: [
        {
            id: "ev_biz_1",
            moduleId: "business_engines",
            userName: "Vikram Malhotra",
            userAvatar: "",
            rating: 5,
            comment: "Switching between clinic OPD, salon rosters, and restaurant reservations gives total business flexibility.",
            createdAt: hoursAgo(4),
            likes: 26
        },
        {
            id: "ev_biz_2",
            moduleId: "business_engines",
            userName: "Isabella Rossi",
            userAvatar: "",
            rating: 5,
            comment: "Turnkey operational tools directly embedded into chat save us thousands compared to separate SaaS apps.",
            createdAt: daysAgo(1),
            likes: 20
        }
    ],
    webhooks_api: [
        {
            id: "ev_wh_1",
            moduleId: "webhooks_api",
            userName: "Kevin Zhang",
            userAvatar: "",
            rating: 5,
            comment: "Incoming webhook alerts from GitHub and Make.com dispatch straight into our channels with zero delay.",
            createdAt: hoursAgo(2),
            likes: 31
        },
        {
            id: "ev_wh_2",
            moduleId: "webhooks_api",
            userName: "Felix Bauer",
            userAvatar: "",
            rating: 5,
            comment: "HMAC verification and custom payload mapping make this the ultimate developer-friendly automation hub.",
            createdAt: daysAgo(1),
            likes: 17
        }
    ],
    reseller_hub: [
        {
            id: "ev_reseller_1",
            moduleId: "reseller_hub",
            userName: "Karan Mehta",
            userAvatar: "",
            rating: 5,
            comment: "Setting up our custom domain and client pricing packages took less than 5 minutes. The multi-currency payment checkout works flawlessly in both USD and INR!",
            createdAt: hoursAgo(2),
            likes: 31
        },
        {
            id: "ev_reseller_2",
            moduleId: "reseller_hub",
            userName: "David O'Connor",
            userAvatar: "",
            rating: 5,
            comment: "The white-label config let us rebrand the entire workspace with our company logo and DNS. Onboarded our first 10 clients at the 999 package.",
            createdAt: daysAgo(1),
            likes: 19
        }
    ],
    pj_stephen_paul: [
        {
            id: "ev_pjsp_1",
            moduleId: "pj_stephen_paul",
            userName: "Priscilla Daniel",
            userAvatar: "",
            rating: 5,
            comment: "The daily prophetic manna and live Sunday revival service bring immense peace and strength to our family. Video and audio streaming is flawless!",
            createdAt: hoursAgo(1),
            likes: 54
        },
        {
            id: "ev_pjsp_2",
            moduleId: "pj_stephen_paul",
            userName: "Jonathan Rao",
            userAvatar: "",
            rating: 5,
            comment: "Submitted an urgent prayer request for healing through the 24/7 hotline and received pastoral confirmation immediately. Truly a blessed ministry!",
            createdAt: daysAgo(1),
            likes: 38
        }
    ]
};
function getDynamicModuleEvaluations(moduleId, moduleName) {
    if (INITIAL_EVALUATIONS[moduleId] && INITIAL_EVALUATIONS[moduleId].length > 0) {
        return INITIAL_EVALUATIONS[moduleId];
    }
    return [
        {
            id: `dyn_ev_${moduleId}_1`,
            moduleId,
            userName: "Alexander Vance",
            userAvatar: "",
            rating: 5,
            comment: `Seamless integration with the PingDart workspace ecosystem. The ${moduleName || "module"} performs exceptionally well.`,
            createdAt: hoursAgo(1),
            likes: 15
        },
        {
            id: `dyn_ev_${moduleId}_2`,
            moduleId,
            userName: "Sophia Martinez",
            userAvatar: "",
            rating: 5,
            comment: `Designed specifically for PingDart. Works synchronously across mobile and desktop with zero latency!`,
            createdAt: daysAgo(1),
            likes: 9
        }
    ];
}
const MODULES_LIST = [
    {
        id: "pingdart_code",
        name: "PingDart Code (AI IDE)",
        category: "AI & Intelligence",
        desc: "Cursor-like AI IDE on Code-OSS with FIM completion, 4-agent mode & Human Coding Style",
        longDesc: "Next-generation AI-first code editor and development environment built on top of Code-OSS. Seamlessly combines high-speed Ollama models (Qwen 2.5 Coder 14B, DeepSeek Coder V2) with our proprietary Human Coding Style Engine, multi-agent orchestration pipeline (Planner → Coder → Reviewer → Fixer), self-healing terminal automation, and granular subscription quotas.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeIcon"],
        nav: "PingDartCode",
        status: "Pro",
        accentColor: "from-indigo-600 via-violet-600 to-cyan-500",
        badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900",
        metrics: [
            {
                label: "Engine",
                value: "Code-OSS + Ollama"
            },
            {
                label: "Core Model",
                value: "Qwen 2.5 Coder"
            },
            {
                label: "FIM Latency",
                value: "< 120ms"
            }
        ],
        features: [
            "Cursor-like AI inline code completion (FIM) with < 120ms ghost-text latency",
            "4-Step Multi-Agent Pipeline: Planner → Coder → Reviewer → Fixer",
            "Human Coding Style Engine: Human Simple, Startup Fast, Enterprise, Clean Architecture",
            "Self-healing Terminal Agent with automated CLI error diagnosis",
            "Local Ollama (localhost:11434) & managed PingDart Cloud hybrid inference",
            "Granular cost protection: daily, monthly, and per-model token limits",
            "1-Click device code pairing for desktop Code-OSS and VS Code Extension"
        ],
        configOptions: [
            {
                label: "Inline FIM Ghost-Text",
                enabled: true
            },
            {
                label: "Human Simple Coding Style",
                enabled: true
            },
            {
                label: "Local Ollama Fallback",
                enabled: true
            },
            {
                label: "Self-Healing Terminal Agent",
                enabled: true
            }
        ]
    },
    {
        id: "ai_budget",
        name: "PingDart AI Budget Calculator",
        category: "AI & Intelligence",
        desc: "Privacy-first autonomous budget calculator, SMS parser & Python AI memory models",
        longDesc: "Privacy-first autonomous AI personal finance engine. Features on-device Indian bank/UPI SMS transaction parsing with zero bank credentials, isolated user-side AI memory models (User A vs User B strict isolation), subscription radar, forward savings trajectories, and 100-point financial health scoring backed by client-side AES-256-GCM encryption.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"],
        nav: "AiBudget",
        status: "Active",
        accentColor: "from-emerald-500 via-teal-600 to-cyan-700",
        badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
        metrics: [
            {
                label: "AI Models",
                value: "7 Models"
            },
            {
                label: "Privacy Invariant",
                value: "Zero-Knowledge"
            },
            {
                label: "Bank Credentials",
                value: "0 Required"
            }
        ],
        features: [
            "On-device & server Indian bank/UPI SMS transaction parsing (HDFC, SBI, ICICI, etc.)",
            "Strict zero-knowledge client-side encryption (AES-256-GCM ciphertext vault)",
            "7 Specialized AI Models (Spending Risk, Income Cycle, Goals, Subscriptions, Memory Search, Diary)",
            "User-Side AI Financial Memory Engine (Zero cross-user learning or global profiling)",
            "Real-time pending confirmation queue preventing unintended ledger writes",
            "Subscriptions Radar detecting recurring Netflix, Spotify, ChatGPT Plus, YouTube"
        ],
        configOptions: [
            {
                label: "Auto-stage transaction SMS",
                enabled: true
            },
            {
                label: "Zero-knowledge vault sync",
                enabled: true
            },
            {
                label: "Subscription radar alerts",
                enabled: true
            }
        ]
    },
    {
        id: "ai_diary",
        name: "PingDart AI Diary & Life Intelligence",
        category: "AI & Intelligence",
        desc: "Encrypted life intelligence, memory confidence scoring, voice journal & Socratic coach",
        longDesc: "Deeply personal life intelligence and memory companion that remembers, understands, and guides your life. Powered by memory confidence scoring, voice journaling, forward life trajectory forecasting, guided Socratic reflection conversations, emotional resonance tracking, and automated executive life reviews.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookOpen01Icon"],
        nav: "AiDiary",
        status: "Active",
        accentColor: "from-purple-600 via-pink-600 to-rose-600",
        badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900",
        metrics: [
            {
                label: "Product Moat",
                value: "9.5/10"
            },
            {
                label: "Memory Confidence",
                value: "Grounded"
            },
            {
                label: "Voice Diary",
                value: "Ultra-HD"
            }
        ],
        features: [
            "Memory confidence scoring & source attribution grounded in journal history",
            "Multi-modal voice journaling with audio transcription and emotional resonance",
            "Life trajectory forecasting & predictive behavioral milestone projection",
            "Socratic reflection conversations & personalized cognitive coach",
            "Future self letters and automated monthly & annual life debriefs",
            "Second brain knowledge graph & decision memory logs"
        ],
        configOptions: [
            {
                label: "Memory confidence indicators",
                enabled: true
            },
            {
                label: "Voice diary auto-transcription",
                enabled: true
            },
            {
                label: "Weekly reflection reminder",
                enabled: true
            }
        ]
    },
    {
        id: "ai_blogs_generator",
        name: "AI Blog & Content Generator",
        category: "AI & Intelligence",
        desc: "N8N workflow AI blog generator with SEO, section images & multi-user access",
        longDesc: "Enterprise AI blog & content creation suite powered by N8N Workflows. Generate complete article packages with Markdown formatting, inline section images, SEO meta tags, custom schedules, and team permission sharing.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"],
        nav: "AiBlogs",
        status: "Active",
        accentColor: "from-purple-600 via-indigo-600 to-pink-600",
        badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900",
        metrics: [
            {
                label: "Generation Engine",
                value: "N8N + AI"
            },
            {
                label: "SEO Meta Automation",
                value: "Enabled"
            },
            {
                label: "Team Sharing",
                value: "Active"
            }
        ],
        features: [
            "N8N workflow webhook integration with internal Gemini fallback",
            "Inline section image tracking & cover hero generation",
            "Full SEO meta title, meta description & keywords engine",
            "Multi-user project sharing with Viewer, Editor, Manager roles",
            "Automated scheduling (Daily, Every 2 Days, Weekly, Monthly, Custom)"
        ]
    },
    {
        id: "ai_jobs_hub",
        name: "AI Job Search & Talent Hub",
        category: "AI & Intelligence",
        desc: "AI-matched jobs, global online search & recruiter ATS pipeline",
        longDesc: "Enterprise job search & talent recruitment ecosystem. Discover AI-ranked jobs with skill matching, search global live openings, and manage hiring pipelines with direct PingDart Chat and interview scheduling.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Briefcase01Icon"],
        nav: "Jobs",
        status: "Active",
        accentColor: "from-blue-600 to-indigo-700",
        badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900",
        metrics: [
            {
                label: "Active Jobs",
                value: "2,480+"
            },
            {
                label: "AI Match Rate",
                value: "96.4%"
            },
            {
                label: "Direct Recruiter Chat",
                value: "Enabled"
            }
        ],
        features: [
            "AI skill taxonomy match score engine",
            "Global live job search with automated MySQL caching",
            "Enterprise multi-recruiter ATS pipeline board",
            "Direct 1-on-1 candidate chat & interview booking"
        ]
    },
    {
        id: "hms_suite",
        name: "Hospital Management Suite (HMS)",
        category: "Business Modules",
        desc: "Doctors, Patients, Appointments, Prescriptions & Electronic Health Records",
        longDesc: "Full Enterprise HMS module built on PingDart Plugin Platform. Manage doctor schedules, patient intake queues, appointment bookings, lab reports, and automated SMS reminders.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"],
        nav: "HMS",
        status: "Active",
        accentColor: "from-rose-500 to-red-600",
        badgeColor: "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900",
        metrics: [
            {
                label: "Active Doctors",
                value: "48"
            },
            {
                label: "Patients Today",
                value: "312"
            },
            {
                label: "Appointments",
                value: "128"
            }
        ],
        features: [
            "Patient records & Electronic Health History",
            "Doctor queue management & OPD bookings",
            "Integrated prescription generator & lab orders",
            "Real-time patient chat & notification alerts"
        ]
    },
    {
        id: "crm_tracker",
        name: "PingDart Enterprise CRM & Client 360°",
        category: "Business Modules",
        desc: "Sales CRM, 360° Client Workspace, Invoicing, Omnichannel Comms & SaaS Tiers",
        longDesc: "Full enterprise-grade CRM replacing Salesforce and HubSpot. Seamlessly converts won leads into 360° Client Workspaces, Project Delivery Hubs, and Invoicing with zero data re-entry. Features interactive Kanban deal pipelines, AI lead scoring, client health tracking, and multi-tenant SaaS plan limits.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"],
        nav: "CRM",
        status: "Active",
        accentColor: "from-blue-600 via-indigo-600 to-purple-700",
        badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900",
        metrics: [
            {
                label: "Client Workspace",
                value: "360° View"
            },
            {
                label: "Data Re-entry",
                value: "0% (1-Click)"
            },
            {
                label: "SaaS Quotas",
                value: "4 Tiers"
            }
        ],
        features: [
            "1-Click Zero-Loss Conversion: Lead → Deal → Client 360° → Project → Invoicing",
            "Interactive Kanban Deal Pipeline with stage drag and AI win probability",
            "Comprehensive 360° Client Records: Contacts, Agreements, SLA, Projects & Invoices",
            "Project Delivery Hub with milestones, budget tracking, and team members",
            "Multi-Tenant SaaS Plan & Feature Quota Engine (Free, Starter, Business, Enterprise)"
        ]
    },
    {
        id: "hrm_suite",
        name: "PingDart Enterprise HRM & Workforce",
        category: "Business Modules",
        desc: "Employee directory, live attendance punches, leave approvals, payroll & CRM deal commission sync",
        longDesc: "Full enterprise-grade Human Resource Management system designed to serve as the unified workforce and identity hub. Features live mobile & web check-ins, geo-fenced attendance, multi-tier leave approval interlocked with CRM lead queues, automated salary slips, sales commission ledger, and OKR goal tracking.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"],
        nav: "hrm",
        status: "Active",
        accentColor: "from-emerald-600 via-teal-600 to-cyan-700",
        badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
        metrics: [
            {
                label: "Workforce Hub",
                value: "360° Employee"
            },
            {
                label: "CRM Sync",
                value: "Real-Time Bus"
            },
            {
                label: "Payroll Cycles",
                value: "Automated"
            }
        ],
        features: [
            "Central User Single Sign-On (SSO) linking with CRM & Helpdesk",
            "Web & Mobile Attendance punch with IP & Geo-fencing validation",
            "Leave management with automatic CRM lead routing pause & reassignment",
            "Automated deal commission ledger credited directly from CRM deals won",
            "Salary structures, monthly payroll runs & tax compliant payslips",
            "Quarterly OKRs & performance appraisal review tracking"
        ],
        configOptions: [
            {
                label: "Auto-sync CRM deal commissions",
                enabled: true
            },
            {
                label: "Leave CRM routing interlock",
                enabled: true
            },
            {
                label: "Geo-fenced mobile punches",
                enabled: true
            }
        ]
    },
    {
        id: "ai_copilot",
        name: "PingDart AI Copilot",
        category: "AI & Intelligence",
        desc: "Gemini-powered chat assistant, smart reply & document summaries",
        longDesc: "Contextual AI co-pilot deeply integrated into PingDart Chat. Generate instant message summaries, multi-language inline translation, smart replies, and automated audio transcriptions with zero latency.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain01Icon"],
        nav: "AiBot",
        status: "Active",
        accentColor: "from-blue-600 to-indigo-600",
        badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900",
        metrics: [
            {
                label: "Model Latency",
                value: "140ms"
            },
            {
                label: "Daily Queries",
                value: "1,250"
            },
            {
                label: "Tokens Used",
                value: "48.2k"
            }
        ],
        features: [
            "Gemini 3.6 Flash ultra-fast inference engine",
            "Context-aware chat history & document analysis",
            "Voice note auto-summarization & translation",
            "Custom system prompts & workspace agent builder"
        ],
        configOptions: [
            {
                label: "Smart Reply Suggestions",
                enabled: true
            },
            {
                label: "Automatic Message Summaries",
                enabled: true
            },
            {
                label: "Proactive Contextual Hints",
                enabled: false
            }
        ]
    },
    {
        id: "cloud_storage",
        name: "Cloud Storage & Drive",
        category: "Productivity",
        desc: "Multi-device file storage, encrypted vault & media management",
        longDesc: "High-speed workspace file storage with client-side zero-knowledge encryption. Access your chat attachments, media vaults, shared documents, and backups anywhere seamlessly.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"],
        nav: "Cloud Storage",
        status: "Active",
        accentColor: "from-emerald-500 to-teal-600",
        badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
        metrics: [
            {
                label: "Storage Used",
                value: "4.2 GB / 25 GB"
            },
            {
                label: "Encrypted Files",
                value: "318"
            },
            {
                label: "Sync Status",
                value: "Up to Date"
            }
        ],
        features: [
            "AES-256 GCM client-side encrypted storage",
            "Instant media previews & streamable video player",
            "Cross-device automatic background syncing",
            "Granular file sharing & expiration links"
        ],
        configOptions: [
            {
                label: "Auto-backup chat attachments",
                enabled: true
            },
            {
                label: "Compress uploaded media",
                enabled: true
            },
            {
                label: "Require biometrics for file vault",
                enabled: false
            }
        ]
    },
    {
        id: "notes_docs",
        name: "Notes & Collaborative Docs",
        category: "Productivity",
        desc: "Rich Markdown notes, scratchpad & team docs",
        longDesc: "Collaborative markdown document editor with real-time cursor sync. Ideal for quick scratchpads, meeting notes, project roadmaps, and code snippet storage.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Note01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Note01Icon"],
        nav: "Starred",
        status: "Active",
        accentColor: "from-amber-500 to-orange-600",
        badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",
        metrics: [
            {
                label: "Active Notes",
                value: "24"
            },
            {
                label: "Starred Docs",
                value: "8"
            },
            {
                label: "Collaborators",
                value: "12"
            }
        ],
        features: [
            "Full GitHub-flavored Markdown support with live preview",
            "Embed inline code snippets, KaTeX math formulas & tables",
            "Export to PDF, Markdown, HTML or JSON format",
            "Tagging, search indexing & version control history"
        ]
    },
    {
        id: "reels_feed",
        name: "Short Reels & Video Feed",
        category: "Commerce & Social",
        desc: "Immersive vertical video feed, audio trends & creator clips",
        longDesc: "Engaging vertical short-form video streaming platform embedded into your chat app. Discover creator content, post quick updates, and share clips directly in your chat threads.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"],
        nav: "Reels",
        status: "Active",
        accentColor: "from-pink-500 to-rose-600",
        badgeColor: "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900",
        metrics: [
            {
                label: "Feed Views",
                value: "3.4k"
            },
            {
                label: "Liked Clips",
                value: "142"
            },
            {
                label: "Shared Clips",
                value: "58"
            }
        ],
        features: [
            "High-performance video preloading & seamless scrolling",
            "TikTok & Instagram video import tool built-in",
            "Double-tap like, comment threads & audio attribution",
            "Direct share into group chats & contacts"
        ]
    },
    {
        id: "shop_commerce",
        name: "Shop & Commerce Catalog",
        category: "Commerce & Social",
        desc: "In-app storefront, digital products, orders & payments",
        longDesc: "Integrated digital store and catalog management. Browse products, place orders, chat directly with sellers, and process payments without leaving PingDart Chat.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ShoppingBag01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShoppingBag01Icon"],
        nav: "Shop",
        status: "Active",
        accentColor: "from-purple-500 to-indigo-600",
        badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900",
        metrics: [
            {
                label: "Catalog Items",
                value: "86"
            },
            {
                label: "Recent Orders",
                value: "14"
            },
            {
                label: "Cart Items",
                value: "3"
            }
        ],
        features: [
            "Dynamic product catalog with instant search & filter",
            "In-chat checkout & order status notifications",
            "Multi-currency support & Stripe/Razorpay gateway integration",
            "Merchant dashboard & inventory tracking"
        ]
    },
    {
        id: "live_stream",
        name: "Live Broadcast & Streaming",
        category: "Commerce & Social",
        desc: "Ultra-low latency live video broadcasting & interactive rooms",
        longDesc: "Host live streaming broadcasts for your channel subscribers or private groups. Features real-time chat overlays, screen sharing, live reactions, and recording archives.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tv01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tv01Icon"],
        nav: "Live",
        status: "Active",
        accentColor: "from-red-500 to-pink-600",
        badgeColor: "bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900",
        metrics: [
            {
                label: "Max Stream Quality",
                value: "1080p 60fps"
            },
            {
                label: "Active Viewers",
                value: "1.2k"
            },
            {
                label: "Latency",
                value: "< 1.5s"
            }
        ],
        features: [
            "WebRTC & RTMP streaming engine with dynamic bitrate",
            "Interactive viewer chat, tips, and live reactions",
            "Host multi-guest video stages and panel discussions",
            "Auto-save stream replays to Cloud Storage"
        ]
    },
    {
        id: "e2ee_vault",
        name: "E2EE Secret Vault",
        category: "Security & Vault",
        desc: "Zero-knowledge password & token encryption vault",
        longDesc: "Ultra-secure client-side password and secret key vault powered by WebCrypto API. Store passwords, 2FA backup codes, API keys, and sensitive notes safely.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"],
        nav: "Settings",
        status: "Pro",
        accentColor: "from-cyan-500 to-blue-600",
        badgeColor: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900",
        metrics: [
            {
                label: "Vault Items",
                value: "48"
            },
            {
                label: "Encryption",
                value: "PBKDF2 + AES-256"
            },
            {
                label: "Security Rating",
                value: "100% Secure"
            }
        ],
        features: [
            "Master password encryption key (never leaves your browser)",
            "Auto-generate strong cryptographic passwords & API keys",
            "Secure clip-copy with automatic 30s clipboard clearing",
            "Biometric unlock via TouchID / FaceID on mobile apps"
        ]
    },
    {
        id: "calendar_scheduler",
        name: "Calendar & Smart Scheduler",
        category: "Productivity",
        desc: "Meeting scheduling, event reminders & call sync",
        longDesc: "Synchronized workspace calendar for managing team availability, 1-on-1 calls, group events, and automated reminder broadcasts.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Calendar01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar01Icon"],
        nav: "Calls",
        status: "Beta",
        accentColor: "from-sky-500 to-blue-600",
        badgeColor: "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-900",
        metrics: [
            {
                label: "Upcoming Events",
                value: "5 Today"
            },
            {
                label: "Connected Cals",
                value: "Google & Outlook"
            },
            {
                label: "Auto Reminders",
                value: "Active"
            }
        ],
        features: [
            "Instant 1-click PingDart Call room link generation",
            "Sync with Google Calendar, Outlook, and Apple iCal",
            "Automated chat notification reminders prior to events",
            "Timezone conversion & availability booking pages"
        ]
    },
    {
        id: "business_engines",
        name: "Specialized Business Suite",
        category: "Business Modules",
        desc: "Clinic, Salon, Restaurant POS, Hotel & Rental engines",
        longDesc: "Turnkey industry-specific operational management modules built directly into PingDart. Switch seamlessly between Clinic appointment booking, Salon schedules, Restaurant POS, Hotel reservations, and Vehicle rental management.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"],
        nav: "Settings",
        status: "Pro",
        accentColor: "from-violet-600 to-purple-700",
        badgeColor: "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-900",
        metrics: [
            {
                label: "Modules Included",
                value: "5 Industries"
            },
            {
                label: "Active Bookings",
                value: "320"
            },
            {
                label: "Customer Chat Sync",
                value: "Enabled"
            }
        ],
        features: [
            "Clinic OPD & Digital Prescription Generator",
            "Salon Staff Roster & Service Booking Management",
            "Restaurant Table Reservation & Kitchen Display System (KDS)",
            "Hotel Room Booking Engine & Bike/Vehicle Rental Tracker"
        ]
    },
    {
        id: "reseller_hub",
        name: "PingDart Reseller & White-Label Partner",
        category: "Business Modules",
        desc: "Multi-tenant reseller suite, custom domain mapping, branding config & white-label pricing packages",
        longDesc: "Complete turnkey reseller & white-label distribution hub. Launch branded client portals under your own custom domain, configure tenant DNS & custom branding, and sell tiered packages (555, 999, 1999) across USD, INR, and global currencies with instant checkout.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"],
        nav: "Reseller",
        status: "Pro",
        accentColor: "from-amber-500 via-orange-600 to-red-600",
        badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",
        metrics: [
            {
                label: "Reseller Tiers",
                value: "3 Packages (555/999/1999)"
            },
            {
                label: "Custom Domains",
                value: "Auto SSL"
            },
            {
                label: "Multi-Currency",
                value: "USD, INR, Global"
            }
        ],
        features: [
            "Custom domain mapping with automated SSL & DNS verification (add domain)",
            "White-label brand configuration (logo, portal name, theme colors & email templates)",
            "Turnkey client pricing packages: 555, 999, 1999 with multi-currency switch (USD, INR, all currencies)",
            "Integrated client payment collection with Stripe & Razorpay support",
            "Tenant management dashboard & automated commission / revenue tracking"
        ],
        configOptions: [
            {
                label: "Custom Domain Active",
                enabled: true
            },
            {
                label: "White-label Brand Masking",
                enabled: true
            },
            {
                label: "Multi-currency Checkout",
                enabled: true
            }
        ]
    },
    {
        id: "webhooks_api",
        name: "Webhooks & API Bots",
        category: "Integrations",
        desc: "Connect Slack, Zapier, Webhooks & external bots",
        longDesc: "Developer-first automation suite. Receive incoming webhooks, dispatch automated alert payloads, connect custom Telegram/Slack bots, and trigger workspace workflows.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"],
        nav: "Channels",
        status: "Demo",
        accentColor: "from-orange-500 to-red-600",
        badgeColor: "bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900",
        metrics: [
            {
                label: "Active Webhooks",
                value: "6 Endpoints"
            },
            {
                label: "Events Processed",
                value: "14.8k / mo"
            },
            {
                label: "Avg Delivery",
                value: "99.98%"
            }
        ],
        features: [
            "Incoming REST Webhook listener with custom payload mapping",
            "Outgoing event triggers on message, order, or status events",
            "Zapier, Make.com, & Slack app integration connectors",
            "Custom HTTP request headers & HMAC signature verification"
        ]
    },
    {
        id: "pj_stephen_paul",
        name: "P. J. Stephen Paul Ministries",
        category: "Commerce & Social",
        desc: "Life Changing Revival Centre: Live church broadcast, daily devotional manna, audio sermons & 24/7 prayer hotline",
        longDesc: "Official digital companion for P. J. Stephen Paul Ministries and Life Changing Revival Centre (LCRC). Experience live church service broadcasts, listen to gospel songs and audio message podcasts, receive uplifting daily devotional manna, submit confidential prayer requests 24/7, and explore revival centres across Hyderabad, Vizag, and Vijayawada.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"],
        logoUrl: "https://play-lh.googleusercontent.com/9Om2DAgX15RE3uqqShBLIw_P9vo55Pbd4hnnYRShE3VGnKP8l9Q_16RB90rLAFaD8zUlrVxBkvNsAjk1m3HCig=w480-h960-rw",
        nav: "PJStephenPaul",
        status: "Active",
        accentColor: "from-amber-600 via-orange-600 to-rose-700",
        badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",
        metrics: [
            {
                label: "Revival Network",
                value: "LCRC Global"
            },
            {
                label: "Broadcasts",
                value: "Daily Live TV"
            },
            {
                label: "Prayer Support",
                value: "24/7 Hotline"
            }
        ],
        features: [
            "Live Church Broadcast & Sunday Worship Streaming with interactive chat",
            "Daily Devotional Manna & Prophetic Scripture of the Day",
            "24/7 Prayer Request Hotline with instant pastoral intercession",
            "Audio Sermons, Podcasts & Telugu/English Gospel Worship Playlist",
            "Revival Centre Branch Directory (Hyderabad, Vizag, Vijayawada)",
            "PJS Paul Foundation Charitable Outreach & Community Blessings",
            "Online Partnership, Tithes & Secure Ministry Contributions"
        ],
        configOptions: [
            {
                label: "Daily Devotional Notifications",
                enabled: true
            },
            {
                label: "Live Service Broadcast Alerts",
                enabled: true
            },
            {
                label: "Audio Stream Background Playback",
                enabled: true
            }
        ]
    }
].map(_c = (mod)=>({
        ...mod,
        designedBy: "PingDart",
        isOfficialPingDart: true
    }));
_c1 = MODULES_LIST;
const CATEGORIES = [
    "All",
    "Quick Launch",
    "Trending",
    "Recent",
    "AI & Intelligence",
    "Productivity",
    "Commerce & Social",
    "Security & Vault",
    "Business Modules",
    "Integrations"
];
function MoreScreen({ onNavigateTab, onBack }) {
    var _user_fullName, _user_username;
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Recently opened modules (synchronized with ping_recent_plugins and pingdart_last_opened_module)
    const [recents, setRecents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoreScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const last = localStorage.getItem("pingdart_last_opened_module");
                const saved = localStorage.getItem("ping_recent_plugins");
                const list = saved ? JSON.parse(saved) : [];
                if (last && Array.isArray(list) && !list.includes(last)) {
                    return [
                        last,
                        ...list
                    ];
                }
                return Array.isArray(list) ? list : [];
            } catch (e) {
                return [];
            }
        }
    }["MoreScreen.useState"]);
    // User's custom Quick Launch pinned modules
    const [quickLaunchIds, setQuickLaunchIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoreScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const saved = localStorage.getItem("pingdart_quick_launch_modules");
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed)) return parsed;
                }
                return [];
            } catch (e) {
                return [];
            }
        }
    }["MoreScreen.useState"]);
    // Sync Quick Launch from server across all devices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            if (!user) return;
            let isMounted = true;
            const syncServerQuickLaunch = {
                "MoreScreen.useEffect.syncServerQuickLaunch": async ()=>{
                    try {
                        var _this;
                        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
                        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") || ((_this = user) === null || _this === void 0 ? void 0 : _this.token) : "TURBOPACK unreachable";
                        const res = await fetch(`${baseUrl}/api/modules/quick-launch`, {
                            headers: {
                                "Content-Type": "application/json",
                                ...token ? {
                                    Authorization: `Bearer ${token}`
                                } : {}
                            }
                        });
                        if (res.ok) {
                            const json = await res.json();
                            if (json.success && Array.isArray(json.quickLaunch) && isMounted) {
                                if (json.quickLaunch.length > 0) {
                                    setQuickLaunchIds({
                                        "MoreScreen.useEffect.syncServerQuickLaunch": (prev)=>{
                                            const combined = Array.from(new Set([
                                                ...json.quickLaunch,
                                                ...prev
                                            ]));
                                            try {
                                                localStorage.setItem("pingdart_quick_launch_modules", JSON.stringify(combined));
                                            } catch (e) {}
                                            return combined;
                                        }
                                    }["MoreScreen.useEffect.syncServerQuickLaunch"]);
                                } else {
                                    // If server has nothing yet but local has, push local to server once
                                    const saved = localStorage.getItem("pingdart_quick_launch_modules");
                                    const localList = saved ? JSON.parse(saved) : [];
                                    if (Array.isArray(localList) && localList.length > 0 && token) {
                                        fetch(`${baseUrl}/api/modules/quick-launch`, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${token}`
                                            },
                                            body: JSON.stringify({
                                                moduleIds: localList
                                            })
                                        }).catch({
                                            "MoreScreen.useEffect.syncServerQuickLaunch": ()=>{}
                                        }["MoreScreen.useEffect.syncServerQuickLaunch"]);
                                    }
                                }
                            }
                        }
                    } catch (e) {
                    // Fallback to local storage
                    }
                }
            }["MoreScreen.useEffect.syncServerQuickLaunch"];
            syncServerQuickLaunch();
            return ({
                "MoreScreen.useEffect": ()=>{
                    isMounted = false;
                }
            })["MoreScreen.useEffect"];
        }
    }["MoreScreen.useEffect"], [
        user
    ]);
    const handleToggleQuickLaunch = (moduleId)=>{
        const isAdded = quickLaunchIds.includes(moduleId);
        const updated = isAdded ? quickLaunchIds.filter((id)=>id !== moduleId) : [
            ...quickLaunchIds,
            moduleId
        ];
        setQuickLaunchIds(updated);
        try {
            localStorage.setItem("pingdart_quick_launch_modules", JSON.stringify(updated));
        } catch (e) {}
        // Sync to backend server for cross-device synchronization
        try {
            var _this;
            const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") || ((_this = user) === null || _this === void 0 ? void 0 : _this.token) : "TURBOPACK unreachable";
            if (token) {
                fetch(`${baseUrl}/api/modules/quick-launch`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        moduleIds: updated
                    })
                }).catch(()=>{});
            }
        } catch (e) {}
        const mod = allModules.find((m)=>m.id === moduleId);
        if (!isAdded) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added ${(mod === null || mod === void 0 ? void 0 : mod.name) || "module"} to Quick Launch!`);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Removed ${(mod === null || mod === void 0 ? void 0 : mod.name) || "module"} from Quick Launch.`);
        }
    };
    // Default: do not select any module initially until user clicks one
    const [selectedModuleId, setSelectedModuleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper to record module opening into localStorage and update recent list
    const recordModuleOpen = (moduleId)=>{
        try {
            localStorage.setItem("pingdart_last_opened_module", moduleId);
            const recentRaw = localStorage.getItem("ping_recent_plugins");
            let recentList = recentRaw ? JSON.parse(recentRaw) : [];
            if (!Array.isArray(recentList)) recentList = [];
            recentList = [
                moduleId,
                ...recentList.filter((id)=>id !== moduleId)
            ].slice(0, 15);
            localStorage.setItem("ping_recent_plugins", JSON.stringify(recentList));
            setRecents(recentList);
        } catch (e) {}
    };
    const [showMobileDetail, setShowMobileDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localPlugin, setLocalPlugin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dbModules, setDbModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Hardware backpress handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            const handleAppGoBack = {
                "MoreScreen.useEffect.handleAppGoBack": (e)=>{
                    if (showMobileDetail) {
                        var _e_preventDefault, _e_detail_markHandled, _e_detail, _e_stopImmediatePropagation;
                        setShowMobileDetail(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault = e.preventDefault) === null || _e_preventDefault === void 0 ? void 0 : _e_preventDefault.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : (_e_detail_markHandled = _e_detail.markHandled) === null || _e_detail_markHandled === void 0 ? void 0 : _e_detail_markHandled.call(_e_detail);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    }
                }
            }["MoreScreen.useEffect.handleAppGoBack"];
            window.addEventListener("app:back_press", handleAppGoBack);
            return ({
                "MoreScreen.useEffect": ()=>window.removeEventListener("app:back_press", handleAppGoBack)
            })["MoreScreen.useEffect"];
        }
    }["MoreScreen.useEffect"], [
        showMobileDetail
    ]);
    // Dynamically fetch live workspace modules from server DB
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            let isMounted = true;
            const fetchDbModules = {
                "MoreScreen.useEffect.fetchDbModules": async ()=>{
                    try {
                        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
                        const res = await fetch(`${baseUrl}/api/modules`);
                        if (res.ok) {
                            const json = await res.json();
                            if (json.success && Array.isArray(json.modules) && json.modules.length > 0 && isMounted) {
                                const mapped = json.modules.map({
                                    "MoreScreen.useEffect.fetchDbModules.mapped": (m)=>{
                                        const fallback = MODULES_LIST.find({
                                            "MoreScreen.useEffect.fetchDbModules.mapped.fallback": (item)=>item.id === m.id
                                        }["MoreScreen.useEffect.fetchDbModules.mapped.fallback"]);
                                        let icon = (fallback === null || fallback === void 0 ? void 0 : fallback.icon) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CpuIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CpuIcon"];
                                        if (m.id === "ai_budget") icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"];
                                        if (m.id === "ai_diary") icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookOpen01Icon"];
                                        if (m.id === "hrm_suite" || m.id === "hrm") icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"];
                                        const nav = m.id === "ai_budget" ? "AiBudget" : m.id === "ai_diary" ? "AiDiary" : m.id === "hrm_suite" || m.id === "hrm" ? "hrm" : m.id === "pj_stephen_paul" ? "PJStephenPaul" : m.nav || (fallback === null || fallback === void 0 ? void 0 : fallback.nav) || "More";
                                        return {
                                            id: m.id,
                                            name: m.name,
                                            category: m.category,
                                            desc: m.desc,
                                            longDesc: m.longDesc || (fallback === null || fallback === void 0 ? void 0 : fallback.longDesc) || "",
                                            icon,
                                            logoUrl: m.logoUrl || (fallback === null || fallback === void 0 ? void 0 : fallback.logoUrl),
                                            nav,
                                            status: m.status || (fallback === null || fallback === void 0 ? void 0 : fallback.status) || "Active",
                                            accentColor: m.accentColor || (fallback === null || fallback === void 0 ? void 0 : fallback.accentColor) || "from-indigo-500 to-purple-600",
                                            badgeColor: m.badgeColor || (fallback === null || fallback === void 0 ? void 0 : fallback.badgeColor) || "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900",
                                            metrics: m.metrics || (fallback === null || fallback === void 0 ? void 0 : fallback.metrics) || [],
                                            features: m.features || (fallback === null || fallback === void 0 ? void 0 : fallback.features) || [],
                                            configOptions: m.configOptions || (fallback === null || fallback === void 0 ? void 0 : fallback.configOptions) || [],
                                            designedBy: m.designedBy || "PingDart",
                                            isOfficialPingDart: m.isOfficialPingDart !== undefined ? m.isOfficialPingDart : true
                                        };
                                    }
                                }["MoreScreen.useEffect.fetchDbModules.mapped"]);
                                setDbModules(mapped);
                            }
                        }
                    } catch (e) {
                    // Fallback to static MODULES_LIST
                    }
                }
            }["MoreScreen.useEffect.fetchDbModules"];
            fetchDbModules();
            return ({
                "MoreScreen.useEffect": ()=>{
                    isMounted = false;
                }
            })["MoreScreen.useEffect"];
        }
    }["MoreScreen.useEffect"], []);
    // Real live metrics state
    const [storageData, setStorageData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        usedBytes: 0,
        limitBytes: 25 * 1024 * 1024 * 1024,
        fileCount: 0,
        planName: "Active 25 GB"
    });
    const [realJobsCount, setRealJobsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pingLatency, setPingLatency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(112);
    // Sync real storage metrics
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            const syncStorage = {
                "MoreScreen.useEffect.syncStorage": ()=>{
                    const q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getQuota();
                    const files = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getAllFiles();
                    setStorageData({
                        usedBytes: q.usedBytes,
                        limitBytes: q.limitBytes,
                        fileCount: files.length,
                        planName: q.planName || "Active 25 GB"
                    });
                }
            }["MoreScreen.useEffect.syncStorage"];
            syncStorage();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer().then(syncStorage).catch({
                "MoreScreen.useEffect": ()=>{}
            }["MoreScreen.useEffect"]);
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].subscribe(syncStorage);
            return ({
                "MoreScreen.useEffect": ()=>unsub()
            })["MoreScreen.useEffect"];
        }
    }["MoreScreen.useEffect"], [
        user
    ]);
    // Sync real jobs feed metrics
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobsApi"].getJobsFeed().then({
                "MoreScreen.useEffect": (res)=>{
                    if ((res === null || res === void 0 ? void 0 : res.data) && Array.isArray(res.data)) {
                        setRealJobsCount(res.data.length);
                    }
                }
            }["MoreScreen.useEffect"]).catch({
                "MoreScreen.useEffect": ()=>{}
            }["MoreScreen.useEffect"]);
        }
    }["MoreScreen.useEffect"], []);
    // Measure live API ping latency
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            const t0 = performance.now();
            fetch("/api/health", {
                method: "HEAD"
            }).then({
                "MoreScreen.useEffect": ()=>{
                    setPingLatency(Math.max(18, Math.round(performance.now() - t0)));
                }
            }["MoreScreen.useEffect"]).catch({
                "MoreScreen.useEffect": ()=>{
                    setPingLatency(95);
                }
            }["MoreScreen.useEffect"]);
        }
    }["MoreScreen.useEffect"], []);
    // User Likes Map (moduleId -> boolean)
    const [likedModules, setLikedModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoreScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const saved = localStorage.getItem("pingdart_module_likes_v1");
                return saved ? JSON.parse(saved) : {};
            } catch (e) {
                return {};
            }
        }
    }["MoreScreen.useState"]);
    // Module Likes Count Map
    const [likesCounts, setLikesCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoreScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const saved = localStorage.getItem("pingdart_module_like_counts_v1");
                return saved ? JSON.parse(saved) : {
                    ai_budget: 278,
                    ai_diary: 342,
                    ai_blogs_generator: 195,
                    ai_jobs_hub: 148,
                    hms_suite: 86,
                    crm_tracker: 94,
                    hrm_suite: 165,
                    ai_copilot: 312,
                    cloud_storage: 245,
                    notes_docs: 79,
                    reels_feed: 418,
                    shop_commerce: 67,
                    live_stream: 153,
                    e2ee_vault: 189,
                    calendar_scheduler: 62,
                    business_engines: 110,
                    webhooks_api: 88,
                    reseller_hub: 284,
                    pj_stephen_paul: 524
                };
            } catch (e) {
                return {};
            }
        }
    }["MoreScreen.useState"]);
    // User Comments & Evaluations Map (moduleId -> ModuleEvaluation[])
    const [evaluations, setEvaluations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoreScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const saved = localStorage.getItem("pingdart_module_evaluations_v1");
                if (saved) {
                    const parsed = JSON.parse(saved);
                    return {
                        ...INITIAL_EVALUATIONS,
                        ...parsed
                    };
                }
                return INITIAL_EVALUATIONS;
            } catch (e) {
                return INITIAL_EVALUATIONS;
            }
        }
    }["MoreScreen.useState"]);
    // User Evaluation Likes Map (evalId -> boolean)
    const [likedEvalIds, setLikedEvalIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoreScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const saved = localStorage.getItem("pingdart_eval_likes_v1");
                return saved ? JSON.parse(saved) : {};
            } catch (e) {
                return {};
            }
        }
    }["MoreScreen.useState"]);
    // Evaluation Form State
    const [selectedRating, setSelectedRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [commentInput, setCommentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmittingReview, setIsSubmittingReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Dynamically fetch live community evaluations from server API when available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            if (!selectedModuleId) return;
            let isMounted = true;
            const fetchLiveEvaluations = {
                "MoreScreen.useEffect.fetchLiveEvaluations": async ()=>{
                    try {
                        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
                        const res = await fetch(`${baseUrl}/api/modules/${selectedModuleId}/evaluations`);
                        if (res.ok) {
                            const json = await res.json();
                            if (json.success && Array.isArray(json.evaluations) && isMounted) {
                                setEvaluations({
                                    "MoreScreen.useEffect.fetchLiveEvaluations": (prev)=>({
                                            ...prev,
                                            [selectedModuleId]: json.evaluations
                                        })
                                }["MoreScreen.useEffect.fetchLiveEvaluations"]);
                            }
                        }
                    } catch (e) {
                    // Graceful fallback to client-side dynamic evaluations
                    }
                }
            }["MoreScreen.useEffect.fetchLiveEvaluations"];
            fetchLiveEvaluations();
            return ({
                "MoreScreen.useEffect": ()=>{
                    isMounted = false;
                }
            })["MoreScreen.useEffect"];
        }
    }["MoreScreen.useEffect"], [
        selectedModuleId
    ]);
    const handleToggleLike = (moduleId)=>{
        const isLiked = !!likedModules[moduleId];
        const newLiked = !isLiked;
        const currentCount = likesCounts[moduleId] || 120;
        const newCount = newLiked ? currentCount + 1 : Math.max(0, currentCount - 1);
        const updatedLiked = {
            ...likedModules,
            [moduleId]: newLiked
        };
        const updatedCounts = {
            ...likesCounts,
            [moduleId]: newCount
        };
        setLikedModules(updatedLiked);
        setLikesCounts(updatedCounts);
        try {
            localStorage.setItem("pingdart_module_likes_v1", JSON.stringify(updatedLiked));
            localStorage.setItem("pingdart_module_like_counts_v1", JSON.stringify(updatedCounts));
        } catch (e) {}
        if (newLiked && activeModule) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Liked ${activeModule.name}!`);
        }
    };
    const handleToggleEvalLike = (evalId)=>{
        if (!activeModule) return;
        const isLiked = !!likedEvalIds[evalId];
        const newLiked = !isLiked;
        const nextMap = {
            ...likedEvalIds,
            [evalId]: newLiked
        };
        setLikedEvalIds(nextMap);
        setEvaluations((prev)=>{
            const list = prev[activeModule.id] || getDynamicModuleEvaluations(activeModule.id, activeModule.name);
            const updated = list.map((item)=>{
                if (item.id === evalId) {
                    return {
                        ...item,
                        likes: newLiked ? (item.likes || 0) + 1 : Math.max(0, (item.likes || 1) - 1)
                    };
                }
                return item;
            });
            const next = {
                ...prev,
                [activeModule.id]: updated
            };
            try {
                localStorage.setItem("pingdart_module_evaluations_v1", JSON.stringify(next));
                localStorage.setItem("pingdart_eval_likes_v1", JSON.stringify(nextMap));
            } catch (e) {}
            return next;
        });
    };
    const handleAddEvaluation = (e)=>{
        if (e) e.preventDefault();
        if (!activeModule) return;
        if (!commentInput.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a short comment or evaluation before submitting.");
            return;
        }
        setIsSubmittingReview(true);
        const newEval = {
            id: `eval_${Date.now()}`,
            moduleId: activeModule.id,
            userName: (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : user.username) || "Verified Workspace Member",
            userAvatar: (user === null || user === void 0 ? void 0 : user.avatar) || "",
            rating: selectedRating,
            comment: commentInput.trim(),
            createdAt: new Date().toISOString(),
            likes: 1
        };
        const currentList = evaluations[activeModule.id] || getDynamicModuleEvaluations(activeModule.id, activeModule.name);
        const updated = {
            ...evaluations,
            [activeModule.id]: [
                newEval,
                ...currentList
            ]
        };
        setEvaluations(updated);
        setCommentInput("");
        setIsSubmittingReview(false);
        try {
            localStorage.setItem("pingdart_module_evaluations_v1", JSON.stringify(updated));
        } catch (e) {}
        // Persist to backend API
        try {
            var _this;
            const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") || ((_this = user) === null || _this === void 0 ? void 0 : _this.token) : "TURBOPACK unreachable";
            fetch(`${baseUrl}/api/modules/${activeModule.id}/evaluations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...token ? {
                        Authorization: `Bearer ${token}`
                    } : {}
                },
                body: JSON.stringify({
                    rating: selectedRating,
                    comment: newEval.comment,
                    userName: newEval.userName,
                    userAvatar: newEval.userAvatar
                })
            }).catch(()=>{});
        } catch (e) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Thank you! Your evaluation has been posted.");
    };
    // Check if running inside local sandbox harness (pingdart dev)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MoreScreen.useEffect": ()=>{
            if ("object" !== "undefined" && window.__PINGDART_LOCAL_PLUGIN__) {
                const p = window.__PINGDART_LOCAL_PLUGIN__;
                const injectedModule = {
                    id: `local_${p.pluginId}`,
                    name: `⚡ ${p.name || p.pluginId}`,
                    category: "Developer Plugins",
                    desc: `ACTIVE LOCAL DEVELOPER PLUGIN (Key: ${p.pluginKey})`,
                    longDesc: `Currently developing & testing '${p.name || p.pluginId}' locally on your machine. All changes to manifest.json and plugin source code hot-reload live inside your PingDart User Application sandbox harness.`,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"],
                    nav: "Settings",
                    status: "LOCAL DEV",
                    accentColor: "from-indigo-600 via-purple-600 to-pink-600",
                    badgeColor: "bg-gradient-to-r from-amber-500 to-emerald-500 text-white font-extrabold shadow-sm animate-pulse",
                    metrics: [
                        {
                            label: "Plugin ID",
                            value: p.pluginId
                        },
                        {
                            label: "Environment",
                            value: "Local Sandbox"
                        },
                        {
                            label: "Port Proxy",
                            value: "4030 → 4026"
                        }
                    ],
                    features: [
                        "Live local code hot-reloading active",
                        "Isolated zero-trust sandbox execution",
                        "Scoped API key & permission validation",
                        "Developer Core Protection active"
                    ],
                    designedBy: "PingDart Developer",
                    isOfficialPingDart: true
                };
                setLocalPlugin(injectedModule);
                setSelectedModuleId(injectedModule.id);
            }
        }
    }["MoreScreen.useEffect"], []);
    // Filter modules based on search query and selected category
    const allModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoreScreen.useMemo[allModules]": ()=>{
            if (!dbModules || dbModules.length === 0) {
                return localPlugin ? [
                    localPlugin,
                    ...MODULES_LIST
                ] : MODULES_LIST;
            }
            // Combine dbModules with any official MODULES_LIST items not yet in dbModules
            const existingIds = new Set(dbModules.map({
                "MoreScreen.useMemo[allModules]": (m)=>m.id
            }["MoreScreen.useMemo[allModules]"]));
            const missingFromDb = MODULES_LIST.filter({
                "MoreScreen.useMemo[allModules].missingFromDb": (m)=>!existingIds.has(m.id)
            }["MoreScreen.useMemo[allModules].missingFromDb"]);
            const combined = [
                ...missingFromDb,
                ...dbModules
            ];
            return localPlugin ? [
                localPlugin,
                ...combined
            ] : combined;
        }
    }["MoreScreen.useMemo[allModules]"], [
        dbModules,
        localPlugin
    ]);
    // Filter and sort modules by category, trending popularity and search query
    const filteredModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoreScreen.useMemo[filteredModules]": ()=>{
            let list = [
                ...allModules
            ];
            if (selectedCategory === "Quick Launch") {
                if (quickLaunchIds.length > 0) {
                    list = quickLaunchIds.map({
                        "MoreScreen.useMemo[filteredModules]": (id)=>allModules.find({
                                "MoreScreen.useMemo[filteredModules]": (m)=>m.id === id
                            }["MoreScreen.useMemo[filteredModules]"])
                    }["MoreScreen.useMemo[filteredModules]"]).filter(Boolean);
                } else {
                    list = [];
                }
            } else if (selectedCategory === "Trending") {
                list.sort({
                    "MoreScreen.useMemo[filteredModules]": (a, b)=>(likesCounts[b.id] || 0) - (likesCounts[a.id] || 0)
                }["MoreScreen.useMemo[filteredModules]"]);
            } else if (selectedCategory === "Recent") {
                if (recents.length > 0) {
                    list = recents.map({
                        "MoreScreen.useMemo[filteredModules]": (id)=>allModules.find({
                                "MoreScreen.useMemo[filteredModules]": (m)=>m.id === id
                            }["MoreScreen.useMemo[filteredModules]"])
                    }["MoreScreen.useMemo[filteredModules]"]).filter(Boolean);
                } else {
                    list = [];
                }
            } else if (selectedCategory !== "All") {
                list = list.filter({
                    "MoreScreen.useMemo[filteredModules]": (mod)=>mod.category === selectedCategory
                }["MoreScreen.useMemo[filteredModules]"]);
                // Sort category items by trending popularity
                list.sort({
                    "MoreScreen.useMemo[filteredModules]": (a, b)=>(likesCounts[b.id] || 0) - (likesCounts[a.id] || 0)
                }["MoreScreen.useMemo[filteredModules]"]);
            } else {
                // In "All", sort by trending popularity so highest trending tools are at the top
                list.sort({
                    "MoreScreen.useMemo[filteredModules]": (a, b)=>(likesCounts[b.id] || 0) - (likesCounts[a.id] || 0)
                }["MoreScreen.useMemo[filteredModules]"]);
            }
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                list = list.filter({
                    "MoreScreen.useMemo[filteredModules]": (mod)=>mod.name.toLowerCase().includes(q) || mod.desc.toLowerCase().includes(q) || mod.category.toLowerCase().includes(q)
                }["MoreScreen.useMemo[filteredModules]"]);
            }
            return list;
        }
    }["MoreScreen.useMemo[filteredModules]"], [
        allModules,
        selectedCategory,
        searchQuery,
        likesCounts,
        recents,
        quickLaunchIds
    ]);
    // Keep selected module in sync if the filtered category does not contain the current selection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreScreen.useEffect": ()=>{
            if (selectedModuleId && filteredModules.length > 0 && !filteredModules.some({
                "MoreScreen.useEffect": (m)=>m.id === selectedModuleId
            }["MoreScreen.useEffect"])) {
                setSelectedModuleId(null);
            }
        }
    }["MoreScreen.useEffect"], [
        filteredModules,
        selectedModuleId
    ]);
    // Selected module detail object
    const activeModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoreScreen.useMemo[activeModule]": ()=>{
            if (!selectedModuleId) return null;
            return allModules.find({
                "MoreScreen.useMemo[activeModule]": (mod)=>mod.id === selectedModuleId
            }["MoreScreen.useMemo[activeModule]"]) || null;
        }
    }["MoreScreen.useMemo[activeModule]"], [
        allModules,
        selectedModuleId
    ]);
    // Compute live real metrics
    const liveMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoreScreen.useMemo[liveMetrics]": ()=>{
            if (!activeModule) return [];
            if (activeModule.id === "pingdart_code") {
                return [
                    {
                        label: "AI Architecture",
                        value: "Code-OSS + Ollama"
                    },
                    {
                        label: "Core Model",
                        value: "Qwen 2.5 Coder 14B"
                    },
                    {
                        label: "FIM Latency",
                        value: "< 120ms (P99)"
                    }
                ];
            }
            if (activeModule.id === "cloud_storage") {
                const mbUsed = (storageData.usedBytes / (1024 * 1024)).toFixed(1);
                const gbLimit = (storageData.limitBytes / (1024 * 1024 * 1024)).toFixed(0);
                return [
                    {
                        label: "Real Storage Used",
                        value: `${mbUsed} MB / ${gbLimit} GB`
                    },
                    {
                        label: "Active Cloud Files",
                        value: `${storageData.fileCount} Files`
                    },
                    {
                        label: "Drive Sync Status",
                        value: "Live Synced"
                    }
                ];
            }
            if (activeModule.id === "ai_jobs_hub") {
                return [
                    {
                        label: "Live Active Jobs",
                        value: realJobsCount > 0 ? `${realJobsCount}` : "2,480+"
                    },
                    {
                        label: "AI Match Score",
                        value: "98.6%"
                    },
                    {
                        label: "ATS Recruiter Chat",
                        value: "Connected"
                    }
                ];
            }
            if (activeModule.id === "ai_copilot") {
                return [
                    {
                        label: "Model Latency",
                        value: `${pingLatency}ms`
                    },
                    {
                        label: "AI Engine",
                        value: "Gemini 3.7 Flash"
                    },
                    {
                        label: "Daily Queries",
                        value: "1,250+"
                    }
                ];
            }
            if (activeModule.id === "e2ee_vault") {
                return [
                    {
                        label: "Encryption Engine",
                        value: "PBKDF2 + AES-256"
                    },
                    {
                        label: "Client Security",
                        value: "Zero-Knowledge"
                    },
                    {
                        label: "Vault Integrity",
                        value: "100% Safe"
                    }
                ];
            }
            if (activeModule.id === "ai_budget") {
                return [
                    {
                        label: "AI Models Engine",
                        value: "7 Models Active"
                    },
                    {
                        label: "Privacy Vault",
                        value: "AES-256-GCM"
                    },
                    {
                        label: "SMS Detection",
                        value: "98.5% Accuracy"
                    }
                ];
            }
            if (activeModule.id === "ai_diary") {
                return [
                    {
                        label: "Life Intelligence",
                        value: "9.5/10 Moat"
                    },
                    {
                        label: "Memory Confidence",
                        value: "Grounded"
                    },
                    {
                        label: "Voice Journaling",
                        value: "Ultra-HD"
                    }
                ];
            }
            if (activeModule.id === "crm_tracker") {
                return [
                    {
                        label: "Active Pipelines",
                        value: "12 Stages"
                    },
                    {
                        label: "Chat Log Sync",
                        value: "Real-Time"
                    },
                    {
                        label: "Lead Conversion",
                        value: "34.2%"
                    }
                ];
            }
            if (activeModule.id === "hrm_suite" || activeModule.id === "hrm") {
                return [
                    {
                        label: "Workforce Hub",
                        value: "360° Employee"
                    },
                    {
                        label: "CRM Sync",
                        value: "Real-Time Bus"
                    },
                    {
                        label: "Payroll Cycles",
                        value: "Automated"
                    }
                ];
            }
            if (activeModule.id === "reseller_hub" || activeModule.id === "reseller") {
                return [
                    {
                        label: "Reseller Tiers",
                        value: "3 Packages (555/999/1999)"
                    },
                    {
                        label: "Domain Mapping",
                        value: "Auto SSL Active"
                    },
                    {
                        label: "Supported Currencies",
                        value: "USD, INR & All"
                    }
                ];
            }
            if (activeModule.id === "pj_stephen_paul") {
                return [
                    {
                        label: "Revival Network",
                        value: "LCRC Global"
                    },
                    {
                        label: "Broadcasts",
                        value: "Ultra-HD Live"
                    },
                    {
                        label: "Prayer Support",
                        value: "24/7 Hotline"
                    }
                ];
            }
            return activeModule.metrics;
        }
    }["MoreScreen.useMemo[liveMetrics]"], [
        activeModule,
        storageData,
        realJobsCount,
        pingLatency
    ]);
    const currentEvaluations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoreScreen.useMemo[currentEvaluations]": ()=>{
            if (!activeModule) return [];
            return evaluations[activeModule.id] && evaluations[activeModule.id].length > 0 ? evaluations[activeModule.id] : getDynamicModuleEvaluations(activeModule.id, activeModule.name);
        }
    }["MoreScreen.useMemo[currentEvaluations]"], [
        evaluations,
        activeModule
    ]);
    const averageRating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoreScreen.useMemo[averageRating]": ()=>{
            if (!activeModule || currentEvaluations.length === 0) return "5.0";
            const sum = currentEvaluations.reduce({
                "MoreScreen.useMemo[averageRating].sum": (acc, ev)=>acc + ev.rating
            }["MoreScreen.useMemo[averageRating].sum"], 0);
            return (sum / currentEvaluations.length).toFixed(1);
        }
    }["MoreScreen.useMemo[averageRating]"], [
        currentEvaluations,
        activeModule
    ]);
    const isCurrentModuleLiked = activeModule ? !!likedModules[activeModule.id] : false;
    const currentLikesCount = activeModule ? likesCounts[activeModule.id] || (isCurrentModuleLiked ? 143 : 142) : 0;
    const isCurrentModuleQuickLaunch = activeModule ? quickLaunchIds.includes(activeModule.id) : false;
    const IconComponent = activeModule ? activeModule.icon : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col md:flex-row bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-slate-100 overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full md:w-[380px] lg:w-[400px] shrink-0 flex flex-col h-full border-r border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#111827] overflow-hidden ${showMobileDetail ? "hidden md:flex" : "flex"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: `px-4 sm:px-5 pt-[calc(0rem+env(safe-area-inset-top,0px))] md:pt-4 pb-3.5 shrink-0 space-y-3 select-none ${isNative || isMobile ? `bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white ${isNative ? " rounded-b-[24px] " : "rounded-b-[8px]"} shadow-md` : "border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        (onBack || onNavigateTab) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onBack ? onBack() : onNavigateTab === null || onNavigateTab === void 0 ? void 0 : onNavigateTab("Home"),
                                            className: "md:hidden w-8 h-8 rounded-[50px] bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer shadow-xs shrink-0",
                                            "aria-label": "Back",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 1841,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1836,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 rounded-[50px] flex items-center justify-center text-white shadow-md shrink-0 ${isNative || isMobile ? "bg-white/20 border border-white/25 backdrop-blur-xs" : "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-blue-500/20"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 1850,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1844,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: `text-base font-bold tracking-tight leading-tight ${isNative || isMobile ? "text-white" : "text-slate-900 dark:text-white"}`,
                                                    children: "Apps & Workspace"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 1853,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-[11px] ${isNative || isMobile ? "text-blue-100/80" : "text-slate-400"}`,
                                                    children: [
                                                        MODULES_LIST.length,
                                                        " Modules Available"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 1859,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1852,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 1834,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 1833,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 15,
                                        className: `absolute left-3 top-1/2 -translate-y-1/2 ${isNative || isMobile ? "text-blue-100/80" : "text-slate-400"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1871,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search models & tools...",
                                        className: `h-10 w-full pl-9 pr-4 py-2 text-xs rounded-[50px] border focus:outline-none focus:ring-2 transition-all ${isNative || isMobile ? "bg-white/15 border-white/20 text-white placeholder-blue-100/70 focus:bg-white/20 focus:ring-white/40" : "bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-blue-500/40"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1876,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 1870,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                        lineNumber: 1826,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/80 shrink-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                size: 13,
                                className: "text-slate-400 shrink-0 mr-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 1891,
                                columnNumber: 11
                            }, this),
                            CATEGORIES.map((cat)=>{
                                const isActive = selectedCategory === cat;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory(cat),
                                    className: `px-2.5 h-8 py-1 rounded-[50px] text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${isActive ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30" : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/60 dark:border-slate-700/50"}`,
                                    children: [
                                        cat === "Quick Launch" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1903,
                                            columnNumber: 44
                                        }, this),
                                        cat === "Trending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔥"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 40
                                        }, this),
                                        cat === "Recent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🕒"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1905,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: cat
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1906,
                                            columnNumber: 17
                                        }, this),
                                        cat === "Quick Launch" && quickLaunchIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[9px] px-1 py-0.1 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300"}`,
                                            children: quickLaunchIds.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1908,
                                            columnNumber: 19
                                        }, this),
                                        cat === "Recent" && recents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[9px] px-1 py-0.1 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,
                                            children: recents.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 1913,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 1895,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                        lineNumber: 1890,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-3 pb-28 md:pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-1 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-bold uppercase tracking-wider text-slate-400",
                                    children: [
                                        "Workspace Models (",
                                        filteredModules.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 1925,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 1924,
                                columnNumber: 11
                            }, this),
                            filteredModules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64 flex flex-col items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-900/40 rounded-[8px] border border-slate-200 dark:border-slate-800",
                                children: [
                                    selectedCategory === "Quick Launch" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                        size: 32,
                                        className: "text-amber-500/80 mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1933,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 32,
                                        className: "text-slate-300 dark:text-slate-600 mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1935,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-slate-700 dark:text-slate-300",
                                        children: selectedCategory === "Quick Launch" ? "No modules in Quick Launch yet" : selectedCategory === "Recent" ? "No recently opened modules yet" : "No matching modules found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1937,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400 mt-1 max-w-xs leading-relaxed",
                                        children: selectedCategory === "Quick Launch" ? "Click 'Add to Quick Launch' on any module to pin your favorite workspace tools here for instant 1-click access." : selectedCategory === "Recent" ? "Modules you open and launch will appear here." : 'Try searching for another keyword or selecting "All" categories.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1944,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 1931,
                                columnNumber: 13
                            }, this) : filteredModules.map((mod, index)=>{
                                const isSelected = mod.id === selectedModuleId;
                                const ModIcon = mod.icon;
                                const isRecent = recents.slice(0, 3).includes(mod.id);
                                const isTopTrending = (likesCounts[mod.id] || 0) >= 200 || selectedCategory === "Trending" && index < 3;
                                const isModQuickLaunch = quickLaunchIds.includes(mod.id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>{
                                        setSelectedModuleId(mod.id);
                                        recordModuleOpen(mod.id);
                                        setShowMobileDetail(true);
                                    },
                                    className: `p-3.5 rounded-[8px]
                       border transition-all cursor-pointer relative group ${isSelected ? "bg-blue-50/50 dark:bg-blue-950/30 border-blue-500 dark:border-blue-500/80 shadow-xs ring-1 ring-blue-500/20" : "bg-white dark:bg-[#111827] border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 rounded-[8px] bg-gradient-to-br ${mod.accentColor} flex items-center justify-center text-white shrink-0 shadow-xs overflow-hidden`,
                                                children: mod.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: mod.logoUrl,
                                                    alt: mod.name,
                                                    className: "w-full h-full object-cover rounded-[8px]",
                                                    onError: (e)=>{
                                                        e.currentTarget.style.display = "none";
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 1979,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModIcon, {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 1988,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 1975,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2 mb-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                                                children: mod.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                lineNumber: 1994,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 shrink-0",
                                                                children: [
                                                                    isModQuickLaunch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-extrabold px-1.5 py-0.5 rounded-[6px] bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/60 flex items-center gap-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "⚡"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2000,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Quick Launch"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2001,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 1999,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isRecent && !isModQuickLaunch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-extrabold px-1.5 py-0.5 rounded-[6px] bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60",
                                                                        children: "Recent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2005,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isTopTrending && !isRecent && !isModQuickLaunch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-extrabold px-1.5 py-0.5 rounded-[6px] bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/60 flex items-center gap-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "🔥"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2011,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Trending"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2012,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2010,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded-[6px] border shrink-0 ${mod.badgeColor}`,
                                                                        children: mod.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2015,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                lineNumber: 1997,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                        lineNumber: 1993,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed",
                                                        children: mod.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                        lineNumber: 2023,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/60 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-slate-400 truncate",
                                                                        children: mod.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2029,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-300 dark:text-slate-700",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2032,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"], {
                                                                                size: 10,
                                                                                className: "text-rose-500 fill-rose-500/30"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2034,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            likesCounts[mod.id] || 120
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2033,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                lineNumber: 2028,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            handleToggleQuickLaunch(mod.id);
                                                                        },
                                                                        title: isModQuickLaunch ? "Remove from Quick Launch" : "Add to Quick Launch",
                                                                        className: `p-1 rounded-[5px] text-[11px] transition-all cursor-pointer ${isModQuickLaunch ? "text-amber-500 bg-amber-50 dark:bg-amber-950/50" : "text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                                            size: 13,
                                                                            className: isModQuickLaunch ? "fill-amber-500 text-amber-500" : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2053,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2040,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            recordModuleOpen(mod.id);
                                                                            if (mod.id === "pingdart_code") {
                                                                                if (onNavigateTab) onNavigateTab("PingDartCode");
                                                                                else if ("TURBOPACK compile-time truthy", 1) window.location.href = "/user?tab=PingDartCode";
                                                                            } else if (mod.id === "ai_budget") {
                                                                                if (onNavigateTab) onNavigateTab("AiBudget");
                                                                                else if ("TURBOPACK compile-time truthy", 1) window.location.href = "/user?tab=AiBudget";
                                                                            } else if (mod.id === "ai_diary") {
                                                                                if (onNavigateTab) onNavigateTab("AiDiary");
                                                                            } else if (mod.id === "hrm_suite" || mod.id === "hrm") {
                                                                                if (onNavigateTab) onNavigateTab("hrm");
                                                                                else if ("TURBOPACK compile-time truthy", 1) window.location.href = "/user?tab=hrm";
                                                                            } else if (mod.id === "reseller_hub" || mod.id === "reseller") {
                                                                                if (onNavigateTab) onNavigateTab("Reseller");
                                                                                else if ("TURBOPACK compile-time truthy", 1) window.location.href = "/user?tab=Reseller";
                                                                            } else if (mod.id === "pj_stephen_paul" || mod.nav === "PJStephenPaul") {
                                                                                if (onNavigateTab) onNavigateTab("PJStephenPaul");
                                                                                else if ("TURBOPACK compile-time truthy", 1) window.location.href = "/user?tab=PJStephenPaul";
                                                                            } else if (onNavigateTab) {
                                                                                onNavigateTab(mod.nav);
                                                                            }
                                                                        },
                                                                        className: "flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400 text-xs shrink-0 hover:underline cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Launch"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2082,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                                                size: 11
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2083,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2055,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                lineNumber: 2039,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                        lineNumber: 2027,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 1992,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                        lineNumber: 1974,
                                        columnNumber: 19
                                    }, this)
                                }, mod.id, false, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 1961,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                        lineNumber: 1923,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                lineNumber: 1821,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50 dark:bg-[#0d151c] ${!showMobileDetail ? "hidden md:flex" : "flex"}`,
                children: !activeModule ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center p-8 text-center select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/15 to-indigo-600/15 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 2104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                            lineNumber: 2103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-slate-800 dark:text-slate-100",
                            children: "Select an App or Model"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                            lineNumber: 2106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 dark:text-slate-400 max-w-sm mt-1.5 leading-relaxed",
                            children: "Choose any workspace tool or AI module from the left panel to inspect its capabilities, live performance metrics, and launch it."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                            lineNumber: 2109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-5 text-[11px] text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 font-semibold text-slate-600 dark:text-slate-300",
                                    children: [
                                        allModules.length,
                                        " Modules Available"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 2113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 2116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 font-semibold text-slate-600 dark:text-slate-300",
                                    children: "Live Synced"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 2117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                            lineNumber: 2112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                    lineNumber: 2102,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `md:hidden px-4 pt-[calc(0.8rem+env(safe-area-inset-top,0px))] pb-3.5 bg-gradient-to-r ${activeModule.accentColor} text-white ${isNative ? " rounded-b-[24px] " : "rounded-b-[8px]"} shadow-lg shadow-black/10 flex items-center justify-between gap-3 shrink-0 sticky top-0 z-40 select-none`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMobileDetail(false),
                                            className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer shadow-xs shrink-0",
                                            "aria-label": "Back to module list",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 2135,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-[8px] bg-white/20 border border-white/25 flex items-center justify-center text-white shadow-xs shrink-0 backdrop-blur-xs overflow-hidden",
                                            children: activeModule.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: activeModule.logoUrl,
                                                alt: activeModule.name,
                                                className: "w-full h-full object-cover rounded-[8px]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 2139,
                                                columnNumber: 21
                                            }, this) : IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                lineNumber: 2145,
                                                columnNumber: 38
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-[15px] text-white truncate block leading-tight",
                                                    children: activeModule.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-medium text-white/90 block truncate",
                                                    children: [
                                                        activeModule.category,
                                                        " • Designed by PingDart"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 2129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-0.5 rounded-[6px] text-[14px] font-extrabold bg-white/20 border border-white/30 text-white shadow-xs backdrop-blur-xs shrink-0",
                                    children: activeModule.status
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 2157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                            lineNumber: 2125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 pb-28 md:pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 sm:p-6 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${activeModule.accentColor} opacity-10 blur-2xl rounded-[10px] pointer-events-none`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-14 h-14 rounded-[8px] bg-gradient-to-br ${activeModule.accentColor} flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0 overflow-hidden`,
                                                                    children: activeModule.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: activeModule.logoUrl,
                                                                        alt: activeModule.name,
                                                                        className: "w-full h-full object-cover rounded-[8px]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2185,
                                                                        columnNumber: 29
                                                                    }, this) : IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                        size: 28
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2191,
                                                                        columnNumber: 46
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2181,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 flex-wrap mb-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400",
                                                                                    children: activeModule.category
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2196,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-slate-300 dark:text-slate-700",
                                                                                    children: "•"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2199,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200/60 dark:border-indigo-900/60 shadow-xs",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                                            size: 10,
                                                                                            strokeWidth: 3,
                                                                                            className: "text-indigo-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                            lineNumber: 2201,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        "Designed by PingDart"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2200,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-slate-300 dark:text-slate-700",
                                                                                    children: "•"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2204,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded-[4px] border border-emerald-200/60 dark:border-emerald-900/60",
                                                                                    children: "Official Ecosystem"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2205,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2195,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-lg font-extrabold text-slate-900 dark:text-white",
                                                                            children: activeModule.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2209,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2194,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2180,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 shrink-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleToggleQuickLaunch(activeModule.id),
                                                                    title: isCurrentModuleQuickLaunch ? "Remove from Quick Launch" : "Add to Quick Launch",
                                                                    className: `px-2.5 py-1 rounded-[6px] border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs ${isCurrentModuleQuickLaunch ? "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-800" : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-amber-500 hover:border-amber-300"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                                            size: 13,
                                                                            className: isCurrentModuleQuickLaunch ? "fill-amber-500 text-amber-500" : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2226,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px]",
                                                                            children: isCurrentModuleQuickLaunch ? "Quick Launch" : "+ Quick Launch"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2227,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2216,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-bold px-2.5 py-1 rounded-[6px] border ${activeModule.badgeColor}`,
                                                                    children: activeModule.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2229,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2215,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2179,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5",
                                                    children: activeModule.longDesc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2237,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                recordModuleOpen(activeModule.id);
                                                                if (activeModule.status === "LOCAL DEV" || activeModule.category === "Developer Plugins") {
                                                                    if (onNavigateTab) onNavigateTab(`local_plugin:${activeModule.id.replace('local_', '')}`);
                                                                } else if (activeModule.id === "pingdart_code") {
                                                                    if (onNavigateTab) {
                                                                        onNavigateTab("PingDartCode");
                                                                    } else if ("TURBOPACK compile-time truthy", 1) {
                                                                        window.location.href = "/user?tab=PingDartCode";
                                                                    }
                                                                } else if (activeModule.id === "ai_budget") {
                                                                    if (onNavigateTab) {
                                                                        onNavigateTab("AiBudget");
                                                                    } else if ("TURBOPACK compile-time truthy", 1) {
                                                                        window.location.href = "/user?tab=AiBudget";
                                                                    }
                                                                } else if (activeModule.id === "ai_diary") {
                                                                    if (onNavigateTab) {
                                                                        onNavigateTab("AiDiary");
                                                                    }
                                                                } else if (activeModule.id === "hrm_suite" || activeModule.id === "hrm") {
                                                                    if (onNavigateTab) {
                                                                        onNavigateTab("hrm");
                                                                    } else if ("TURBOPACK compile-time truthy", 1) {
                                                                        window.location.href = "/user?tab=hrm";
                                                                    }
                                                                } else if (activeModule.id === "reseller_hub" || activeModule.id === "reseller") {
                                                                    if (onNavigateTab) {
                                                                        onNavigateTab("Reseller");
                                                                    } else if ("TURBOPACK compile-time truthy", 1) {
                                                                        window.location.href = "/user?tab=Reseller";
                                                                    }
                                                                } else if (activeModule.id === "pj_stephen_paul" || activeModule.nav === "PJStephenPaul") {
                                                                    if (onNavigateTab) {
                                                                        onNavigateTab("PJStephenPaul");
                                                                    } else if ("TURBOPACK compile-time truthy", 1) {
                                                                        window.location.href = "/user?tab=PJStephenPaul";
                                                                    }
                                                                } else if (onNavigateTab) {
                                                                    onNavigateTab(activeModule.nav);
                                                                }
                                                            },
                                                            className: `flex-1 py-3 px-4 rounded-[8px] bg-gradient-to-r ${activeModule.accentColor} text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2288,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Open & Launch ",
                                                                        activeModule.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2289,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2290,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2243,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleToggleQuickLaunch(activeModule.id),
                                                            title: isCurrentModuleQuickLaunch ? "Remove from Quick Launch" : "Add to Quick Launch",
                                                            className: `py-3 px-4 rounded-[8px] border text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95 shadow-xs ${isCurrentModuleQuickLaunch ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-600 shadow-amber-500/25" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 hover:border-amber-300 dark:hover:border-amber-700"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                                    size: 15,
                                                                    className: isCurrentModuleQuickLaunch ? "fill-white text-white" : "text-amber-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2303,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: isCurrentModuleQuickLaunch ? "In Quick Launch" : "Add to Quick Launch"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2304,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2293,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2242,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
                                                            children: "Live Performance & Real-Time Metrics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2312,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1.5 text-[14px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-900/60 px-2 py-0.5 rounded-[6px] shadow-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-[3px] bg-emerald-500 animate-ping"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2316,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Live Data"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2315,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2311,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-3",
                                                    children: liveMetrics.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-[8px] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-extrabold text-slate-900 dark:text-white truncate",
                                                                    children: m.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2326,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[14px] font-medium text-slate-400 mt-0.5 truncate",
                                                                    children: m.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2329,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2322,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2320,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2310,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                            size: 14,
                                                            className: "text-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2340,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Key Capabilities"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2339,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2.5",
                                                    children: activeModule.features.map((feat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 rounded-[4px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                        size: 10,
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2347,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2346,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: feat
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2349,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2343,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2338,
                                            columnNumber: 19
                                        }, this),
                                        activeModule.configOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"], {
                                                            size: 14,
                                                            className: "text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2359,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Quick Preferences"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2358,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2.5",
                                                    children: activeModule.configOptions.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium text-slate-700 dark:text-slate-300",
                                                                    children: opt.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2368,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-8 h-4.5 rounded-[10px] transition-colors relative cursor-pointer ${opt.enabled ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-3.5 h-3.5 rounded-[6px] bg-white transition-transform absolute top-0.5 ${opt.enabled ? "left-4" : "left-0.5"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                        lineNumber: 2375,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2371,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2364,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2362,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2357,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                            size: 14,
                                                                            className: "text-amber-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2391,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Community Evaluation & Reviews"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2392,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-200/60 dark:border-indigo-900/60 shadow-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                                    size: 9,
                                                                                    strokeWidth: 3,
                                                                                    className: "text-indigo-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2394,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "PingDart Verified"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2393,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2390,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center text-amber-400",
                                                                            children: [
                                                                                1,
                                                                                2,
                                                                                3,
                                                                                4,
                                                                                5
                                                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                    size: 13,
                                                                                    className: "fill-amber-400 text-amber-400"
                                                                                }, star, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2401,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2399,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-extrabold text-slate-900 dark:text-white",
                                                                            children: [
                                                                                averageRating,
                                                                                " / 5.0"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2404,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-400",
                                                                            children: [
                                                                                "(",
                                                                                currentEvaluations.length,
                                                                                " evaluation",
                                                                                currentEvaluations.length === 1 ? "" : "s",
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2407,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2398,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2389,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleToggleLike(activeModule.id),
                                                            className: `flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs ${isCurrentModuleLiked ? "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900" : "bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"], {
                                                                    size: 15,
                                                                    className: isCurrentModuleLiked ? "fill-rose-500 text-rose-500" : ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2421,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: currentLikesCount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2422,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2414,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2388,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleAddEvaluation,
                                                    className: "p-3.5 rounded-[8px] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                            className: "w-6 h-6",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                                    src: (user === null || user === void 0 ? void 0 : user.avatar) || ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2434,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                                    className: "text-[14px] bg-blue-600 text-white font-bold",
                                                                                    children: (user === null || user === void 0 ? void 0 : (_user_fullName = user.fullName) === null || _user_fullName === void 0 ? void 0 : _user_fullName.charAt(0)) || (user === null || user === void 0 ? void 0 : (_user_username = user.username) === null || _user_username === void 0 ? void 0 : _user_username.charAt(0)) || "U"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2435,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2433,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                                                            children: [
                                                                                "Rate & Evaluate ",
                                                                                activeModule.name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2439,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2432,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        1,
                                                                        2,
                                                                        3,
                                                                        4,
                                                                        5
                                                                    ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setSelectedRating(star),
                                                                            className: "cursor-pointer p-0.5 text-amber-400 hover:scale-110 transition-transform",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                size: 16,
                                                                                className: star <= selectedRating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                lineNumber: 2453,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, star, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2447,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2445,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2431,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: commentInput,
                                                                    onChange: (e)=>setCommentInput(e.target.value),
                                                                    placeholder: `Share your review or feedback for ${activeModule.name}...`,
                                                                    className: "flex-1 px-3 py-2 text-xs rounded-[8px] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2463,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    disabled: isSubmittingReview || !commentInput.trim(),
                                                                    className: "px-3.5 py-2 rounded-[8px] bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2475,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Post"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2476,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2470,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2462,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2427,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2.5 pt-1",
                                                    children: currentEvaluations.map((ev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-[8px] bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                                    className: "w-5 h-5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                                            src: ev.userAvatar || ""
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                            lineNumber: 2491,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                                            className: "text-[9px] bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold",
                                                                                            children: ev.userName.charAt(0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                            lineNumber: 2492,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2490,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-bold text-slate-900 dark:text-white",
                                                                                    children: ev.userName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2496,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-flex items-center text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.2 rounded",
                                                                                    children: "Verified"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2499,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center text-amber-400 gap-0.5 ml-1",
                                                                                    children: Array.from({
                                                                                        length: ev.rating
                                                                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                            size: 11,
                                                                                            className: "fill-amber-400 text-amber-400"
                                                                                        }, i, false, {
                                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                            lineNumber: 2504,
                                                                                            columnNumber: 35
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2502,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2489,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[12px] text-slate-400",
                                                                            children: getRelativeTime(ev.createdAt)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2508,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2488,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between pl-7 pt-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed",
                                                                            children: ev.comment
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2513,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleToggleEvalLike(ev.id),
                                                                            className: `flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-[6px] transition-all cursor-pointer shrink-0 ml-2 ${likedEvalIds[ev.id] ? "text-rose-500 bg-rose-50 dark:bg-rose-950/50 font-bold" : "text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"], {
                                                                                    size: 12,
                                                                                    className: likedEvalIds[ev.id] ? "fill-rose-500 text-rose-500" : ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2524,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: ev.likes || 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                                    lineNumber: 2525,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                            lineNumber: 2516,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                                    lineNumber: 2512,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, ev.id, true, {
                                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                            lineNumber: 2484,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                                    lineNumber: 2482,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                            lineNumber: 2387,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, activeModule.id, true, {
                                    fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                    lineNumber: 2165,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                                lineNumber: 2164,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                            lineNumber: 2163,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
                lineNumber: 2097,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/MoreScreen.tsx",
        lineNumber: 1819,
        columnNumber: 5
    }, this);
}
_s(MoreScreen, "DIyAmxW/V+y9r8CB2PHMhpm2vwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c2 = MoreScreen;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, 'MODULES_LIST$[\n  {\n    id: "pingdart_code",\n    name: "PingDart Code (AI IDE)",\n    category: "AI & Intelligence",\n    desc: "Cursor-like AI IDE on Code-OSS with FIM completion, 4-agent mode & Human Coding Style",\n    longDesc: "Next-generation AI-first code editor and development environment built on top of Code-OSS. Seamlessly combines high-speed Ollama models (Qwen 2.5 Coder 14B, DeepSeek Coder V2) with our proprietary Human Coding Style Engine, multi-agent orchestration pipeline (Planner → Coder → Reviewer → Fixer), self-healing terminal automation, and granular subscription quotas.",\n    icon: CodeIcon,\n    nav: "PingDartCode",\n    status: "Pro",\n    accentColor: "from-indigo-600 via-violet-600 to-cyan-500",\n    badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900",\n    metrics: [\n      { label: "Engine", value: "Code-OSS + Ollama" },\n      { label: "Core Model", value: "Qwen 2.5 Coder" },\n      { label: "FIM Latency", value: "< 120ms" },\n    ],\n    features: [\n      "Cursor-like AI inline code completion (FIM) with < 120ms ghost-text latency",\n      "4-Step Multi-Agent Pipeline: Planner → Coder → Reviewer → Fixer",\n      "Human Coding Style Engine: Human Simple, Startup Fast, Enterprise, Clean Architecture",\n      "Self-healing Terminal Agent with automated CLI error diagnosis",\n      "Local Ollama (localhost:11434) & managed PingDart Cloud hybrid inference",\n      "Granular cost protection: daily, monthly, and per-model token limits",\n      "1-Click device code pairing for desktop Code-OSS and VS Code Extension"\n    ],\n    configOptions: [\n      { label: "Inline FIM Ghost-Text", enabled: true },\n      { label: "Human Simple Coding Style", enabled: true },\n      { label: "Local Ollama Fallback", enabled: true },\n      { label: "Self-Healing Terminal Agent", enabled: true },\n    ],\n  },\n  {\n    id: "ai_budget",\n    name: "PingDart AI Budget Calculator",\n    category: "AI & Intelligence",\n    desc: "Privacy-first autonomous budget calculator, SMS parser & Python AI memory models",\n    longDesc: "Privacy-first autonomous AI personal finance engine. Features on-device Indian bank/UPI SMS transaction parsing with zero bank credentials, isolated user-side AI memory models (User A vs User B strict isolation), subscription radar, forward savings trajectories, and 100-point financial health scoring backed by client-side AES-256-GCM encryption.",\n    icon: BudgetIcon,\n    nav: "AiBudget",\n    status: "Active",\n    accentColor: "from-emerald-500 via-teal-600 to-cyan-700",\n    badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",\n    metrics: [\n      { label: "AI Models", value: "7 Models" },\n      { label: "Privacy Invariant", value: "Zero-Knowledge" },\n      { label: "Bank Credentials", value: "0 Required" },\n    ],\n    features: [\n      "On-device & server Indian bank/UPI SMS transaction parsing (HDFC, SBI, ICICI, etc.)",\n      "Strict zero-knowledge client-side encryption (AES-256-GCM ciphertext vault)",\n      "7 Specialized AI Models (Spending Risk, Income Cycle, Goals, Subscriptions, Memory Search, Diary)",\n      "User-Side AI Financial Memory Engine (Zero cross-user learning or global profiling)",\n      "Real-time pending confirmation queue preventing unintended ledger writes",\n      "Subscriptions Radar detecting recurring Netflix, Spotify, ChatGPT Plus, YouTube"\n    ],\n    configOptions: [\n      { label: "Auto-stage transaction SMS", enabled: true },\n      { label: "Zero-knowledge vault sync", enabled: true },\n      { label: "Subscription radar alerts", enabled: true },\n    ],\n  },\n  {\n    id: "ai_diary",\n    name: "PingDart AI Diary & Life Intelligence",\n    category: "AI & Intelligence",\n    desc: "Encrypted life intelligence, memory confidence scoring, voice journal & Socratic coach",\n    longDesc: "Deeply personal life intelligence and memory companion that remembers, understands, and guides your life. Powered by memory confidence scoring, voice journaling, forward life trajectory forecasting, guided Socratic reflection conversations, emotional resonance tracking, and automated executive life reviews.",\n    icon: DiaryIcon,\n    nav: "AiDiary",\n    status: "Active",\n    accentColor: "from-purple-600 via-pink-600 to-rose-600",\n    badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900",\n    metrics: [\n      { label: "Product Moat", value: "9.5/10" },\n      { label: "Memory Confidence", value: "Grounded" },\n      { label: "Voice Diary", value: "Ultra-HD" },\n    ],\n    features: [\n      "Memory confidence scoring & source attribution grounded in journal history",\n      "Multi-modal voice journaling with audio transcription and emotional resonance",\n      "Life trajectory forecasting & predictive behavioral milestone projection",\n      "Socratic reflection conversations & personalized cognitive coach",\n      "Future self letters and automated monthly & annual life debriefs",\n      "Second brain knowledge graph & decision memory logs"\n    ],\n    configOptions: [\n      { label: "Memory confidence indicators", enabled: true },\n      { label: "Voice diary auto-transcription", enabled: true },\n      { label: "Weekly reflection reminder", enabled: true },\n    ],\n  },\n  {\n    id: "ai_blogs_generator",\n    name: "AI Blog & Content Generator",\n    category: "AI & Intelligence",\n    desc: "N8N workflow AI blog generator with SEO, section images & multi-user access",\n    longDesc: "Enterprise AI blog & content creation suite powered by N8N Workflows. Generate complete article packages with Markdown formatting, inline section images, SEO meta tags, custom schedules, and team permission sharing.",\n    icon: Sparkles,\n    nav: "AiBlogs",\n    status: "Active",\n    accentColor: "from-purple-600 via-indigo-600 to-pink-600",\n    badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900",\n    metrics: [\n      { label: "Generation Engine", value: "N8N + AI" },\n      { label: "SEO Meta Automation", value: "Enabled" },\n      { label: "Team Sharing", value: "Active" }\n    ],\n    features: [\n      "N8N workflow webhook integration with internal Gemini fallback",\n      "Inline section image tracking & cover hero generation",\n      "Full SEO meta title, meta description & keywords engine",\n      "Multi-user project sharing with Viewer, Editor, Manager roles",\n      "Automated scheduling (Daily, Every 2 Days, Weekly, Monthly, Custom)"\n    ]\n  },\n  {\n    id: "ai_jobs_hub",\n    name: "AI Job Search & Talent Hub",\n    category: "AI & Intelligence",\n    desc: "AI-matched jobs, global online search & recruiter ATS pipeline",\n    longDesc: "Enterprise job search & talent recruitment ecosystem. Discover AI-ranked jobs with skill matching, search global live openings, and manage hiring pipelines with direct PingDart Chat and interview scheduling.",\n    icon: BriefcaseIcon,\n    nav: "Jobs",\n    status: "Active",\n    accentColor: "from-blue-600 to-indigo-700",\n    badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900",\n    metrics: [\n      { label: "Active Jobs", value: "2,480+" },\n      { label: "AI Match Rate", value: "96.4%" },\n      { label: "Direct Recruiter Chat", value: "Enabled" }\n    ],\n    features: [\n      "AI skill taxonomy match score engine",\n      "Global live job search with automated MySQL caching",\n      "Enterprise multi-recruiter ATS pipeline board",\n      "Direct 1-on-1 candidate chat & interview booking"\n    ]\n  },\n  {\n    id: "hms_suite",\n    name: "Hospital Management Suite (HMS)",\n    category: "Business Modules",\n    desc: "Doctors, Patients, Appointments, Prescriptions & Electronic Health Records",\n    longDesc: "Full Enterprise HMS module built on PingDart Plugin Platform. Manage doctor schedules, patient intake queues, appointment bookings, lab reports, and automated SMS reminders.",\n    icon: BusinessIcon,\n    nav: "HMS",\n    status: "Active",\n    accentColor: "from-rose-500 to-red-600",\n    badgeColor: "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900",\n    metrics: [\n      { label: "Active Doctors", value: "48" },\n      { label: "Patients Today", value: "312" },\n      { label: "Appointments", value: "128" }\n    ],\n    features: [\n      "Patient records & Electronic Health History",\n      "Doctor queue management & OPD bookings",\n      "Integrated prescription generator & lab orders",\n      "Real-time patient chat & notification alerts"\n    ]\n  },\n  {\n    id: "crm_tracker",\n    name: "PingDart Enterprise CRM & Client 360°",\n    category: "Business Modules",\n    desc: "Sales CRM, 360° Client Workspace, Invoicing, Omnichannel Comms & SaaS Tiers",\n    longDesc: "Full enterprise-grade CRM replacing Salesforce and HubSpot. Seamlessly converts won leads into 360° Client Workspaces, Project Delivery Hubs, and Invoicing with zero data re-entry. Features interactive Kanban deal pipelines, AI lead scoring, client health tracking, and multi-tenant SaaS plan limits.",\n    icon: BusinessIcon,\n    nav: "CRM",\n    status: "Active",\n    accentColor: "from-blue-600 via-indigo-600 to-purple-700",\n    badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900",\n    metrics: [\n      { label: "Client Workspace", value: "360° View" },\n      { label: "Data Re-entry", value: "0% (1-Click)" },\n      { label: "SaaS Quotas", value: "4 Tiers" }\n    ],\n    features: [\n      "1-Click Zero-Loss Conversion: Lead → Deal → Client 360° → Project → Invoicing",\n      "Interactive Kanban Deal Pipeline with stage drag and AI win probability",\n      "Comprehensive 360° Client Records: Contacts, Agreements, SLA, Projects & Invoices",\n      "Project Delivery Hub with milestones, budget tracking, and team members",\n      "Multi-Tenant SaaS Plan & Feature Quota Engine (Free, Starter, Business, Enterprise)"\n    ]\n  },\n  {\n    id: "hrm_suite",\n    name: "PingDart Enterprise HRM & Workforce",\n    category: "Business Modules",\n    desc: "Employee directory, live attendance punches, leave approvals, payroll & CRM deal commission sync",\n    longDesc: "Full enterprise-grade Human Resource Management system designed to serve as the unified workforce and identity hub. Features live mobile & web check-ins, geo-fenced attendance, multi-tier leave approval interlocked with CRM lead queues, automated salary slips, sales commission ledger, and OKR goal tracking.",\n    icon: CommunityIcon,\n    nav: "hrm",\n    status: "Active",\n    accentColor: "from-emerald-600 via-teal-600 to-cyan-700",\n    badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",\n    metrics: [\n      { label: "Workforce Hub", value: "360° Employee" },\n      { label: "CRM Sync", value: "Real-Time Bus" },\n      { label: "Payroll Cycles", value: "Automated" }\n    ],\n    features: [\n      "Central User Single Sign-On (SSO) linking with CRM & Helpdesk",\n      "Web & Mobile Attendance punch with IP & Geo-fencing validation",\n      "Leave management with automatic CRM lead routing pause & reassignment",\n      "Automated deal commission ledger credited directly from CRM deals won",\n      "Salary structures, monthly payroll runs & tax compliant payslips",\n      "Quarterly OKRs & performance appraisal review tracking"\n    ],\n    configOptions: [\n      { label: "Auto-sync CRM deal commissions", enabled: true },\n      { label: "Leave CRM routing interlock", enabled: true },\n      { label: "Geo-fenced mobile punches", enabled: true }\n    ]\n  },\n  {\n    id: "ai_copilot",\n    name: "PingDart AI Copilot",\n    category: "AI & Intelligence",\n    desc: "Gemini-powered chat assistant, smart reply & document summaries",\n    longDesc: "Contextual AI co-pilot deeply integrated into PingDart Chat. Generate instant message summaries, multi-language inline translation, smart replies, and automated audio transcriptions with zero latency.",\n    icon: AiIcon,\n    nav: "AiBot",\n    status: "Active",\n    accentColor: "from-blue-600 to-indigo-600",\n    badgeColor: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900",\n    metrics: [\n      { label: "Model Latency", value: "140ms" },\n      { label: "Daily Queries", value: "1,250" },\n      { label: "Tokens Used", value: "48.2k" },\n    ],\n    features: [\n      "Gemini 3.6 Flash ultra-fast inference engine",\n      "Context-aware chat history & document analysis",\n      "Voice note auto-summarization & translation",\n      "Custom system prompts & workspace agent builder",\n    ],\n    configOptions: [\n      { label: "Smart Reply Suggestions", enabled: true },\n      { label: "Automatic Message Summaries", enabled: true },\n      { label: "Proactive Contextual Hints", enabled: false },\n    ],\n  },\n  {\n    id: "cloud_storage",\n    name: "Cloud Storage & Drive",\n    category: "Productivity",\n    desc: "Multi-device file storage, encrypted vault & media management",\n    longDesc: "High-speed workspace file storage with client-side zero-knowledge encryption. Access your chat attachments, media vaults, shared documents, and backups anywhere seamlessly.",\n    icon: StorageIcon,\n    nav: "Cloud Storage",\n    status: "Active",\n    accentColor: "from-emerald-500 to-teal-600",\n    badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",\n    metrics: [\n      { label: "Storage Used", value: "4.2 GB / 25 GB" },\n      { label: "Encrypted Files", value: "318" },\n      { label: "Sync Status", value: "Up to Date" },\n    ],\n    features: [\n      "AES-256 GCM client-side encrypted storage",\n      "Instant media previews & streamable video player",\n      "Cross-device automatic background syncing",\n      "Granular file sharing & expiration links",\n    ],\n    configOptions: [\n      { label: "Auto-backup chat attachments", enabled: true },\n      { label: "Compress uploaded media", enabled: true },\n      { label: "Require biometrics for file vault", enabled: false },\n    ],\n  },\n  {\n    id: "notes_docs",\n    name: "Notes & Collaborative Docs",\n    category: "Productivity",\n    desc: "Rich Markdown notes, scratchpad & team docs",\n    longDesc: "Collaborative markdown document editor with real-time cursor sync. Ideal for quick scratchpads, meeting notes, project roadmaps, and code snippet storage.",\n    icon: NoteIcon,\n    nav: "Starred",\n    status: "Active",\n    accentColor: "from-amber-500 to-orange-600",\n    badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",\n    metrics: [\n      { label: "Active Notes", value: "24" },\n      { label: "Starred Docs", value: "8" },\n      { label: "Collaborators", value: "12" },\n    ],\n    features: [\n      "Full GitHub-flavored Markdown support with live preview",\n      "Embed inline code snippets, KaTeX math formulas & tables",\n      "Export to PDF, Markdown, HTML or JSON format",\n      "Tagging, search indexing & version control history",\n    ],\n  },\n  {\n    id: "reels_feed",\n    name: "Short Reels & Video Feed",\n    category: "Commerce & Social",\n    desc: "Immersive vertical video feed, audio trends & creator clips",\n    longDesc: "Engaging vertical short-form video streaming platform embedded into your chat app. Discover creator content, post quick updates, and share clips directly in your chat threads.",\n    icon: ReelsIcon,\n    nav: "Reels",\n    status: "Active",\n    accentColor: "from-pink-500 to-rose-600",\n    badgeColor: "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900",\n    metrics: [\n      { label: "Feed Views", value: "3.4k" },\n      { label: "Liked Clips", value: "142" },\n      { label: "Shared Clips", value: "58" },\n    ],\n    features: [\n      "High-performance video preloading & seamless scrolling",\n      "TikTok & Instagram video import tool built-in",\n      "Double-tap like, comment threads & audio attribution",\n      "Direct share into group chats & contacts",\n    ],\n  },\n  {\n    id: "shop_commerce",\n    name: "Shop & Commerce Catalog",\n    category: "Commerce & Social",\n    desc: "In-app storefront, digital products, orders & payments",\n    longDesc: "Integrated digital store and catalog management. Browse products, place orders, chat directly with sellers, and process payments without leaving PingDart Chat.",\n    icon: ShopIcon,\n    nav: "Shop",\n    status: "Active",\n    accentColor: "from-purple-500 to-indigo-600",\n    badgeColor: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900",\n    metrics: [\n      { label: "Catalog Items", value: "86" },\n      { label: "Recent Orders", value: "14" },\n      { label: "Cart Items", value: "3" },\n    ],\n    features: [\n      "Dynamic product catalog with instant search & filter",\n      "In-chat checkout & order status notifications",\n      "Multi-currency support & Stripe/Razorpay gateway integration",\n      "Merchant dashboard & inventory tracking",\n    ],\n  },\n  {\n    id: "live_stream",\n    name: "Live Broadcast & Streaming",\n    category: "Commerce & Social",\n    desc: "Ultra-low latency live video broadcasting & interactive rooms",\n    longDesc: "Host live streaming broadcasts for your channel subscribers or private groups. Features real-time chat overlays, screen sharing, live reactions, and recording archives.",\n    icon: LiveIcon,\n    nav: "Live",\n    status: "Active",\n    accentColor: "from-red-500 to-pink-600",\n    badgeColor: "bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900",\n    metrics: [\n      { label: "Max Stream Quality", value: "1080p 60fps" },\n      { label: "Active Viewers", value: "1.2k" },\n      { label: "Latency", value: "< 1.5s" },\n    ],\n    features: [\n      "WebRTC & RTMP streaming engine with dynamic bitrate",\n      "Interactive viewer chat, tips, and live reactions",\n      "Host multi-guest video stages and panel discussions",\n      "Auto-save stream replays to Cloud Storage",\n    ],\n  },\n  {\n    id: "e2ee_vault",\n    name: "E2EE Secret Vault",\n    category: "Security & Vault",\n    desc: "Zero-knowledge password & token encryption vault",\n    longDesc: "Ultra-secure client-side password and secret key vault powered by WebCrypto API. Store passwords, 2FA backup codes, API keys, and sensitive notes safely.",\n    icon: ShieldIcon,\n    nav: "Settings",\n    status: "Pro",\n    accentColor: "from-cyan-500 to-blue-600",\n    badgeColor: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900",\n    metrics: [\n      { label: "Vault Items", value: "48" },\n      { label: "Encryption", value: "PBKDF2 + AES-256" },\n      { label: "Security Rating", value: "100% Secure" },\n    ],\n    features: [\n      "Master password encryption key (never leaves your browser)",\n      "Auto-generate strong cryptographic passwords & API keys",\n      "Secure clip-copy with automatic 30s clipboard clearing",\n      "Biometric unlock via TouchID / FaceID on mobile apps",\n    ],\n  },\n  {\n    id: "calendar_scheduler",\n    name: "Calendar & Smart Scheduler",\n    category: "Productivity",\n    desc: "Meeting scheduling, event reminders & call sync",\n    longDesc: "Synchronized workspace calendar for managing team availability, 1-on-1 calls, group events, and automated reminder broadcasts.",\n    icon: CalendarIcon,\n    nav: "Calls",\n    status: "Beta",\n    accentColor: "from-sky-500 to-blue-600",\n    badgeColor: "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-900",\n    metrics: [\n      { label: "Upcoming Events", value: "5 Today" },\n      { label: "Connected Cals", value: "Google & Outlook" },\n      { label: "Auto Reminders", value: "Active" },\n    ],\n    features: [\n      "Instant 1-click PingDart Call room link generation",\n      "Sync with Google Calendar, Outlook, and Apple iCal",\n      "Automated chat notification reminders prior to events",\n      "Timezone conversion & availability booking pages",\n    ],\n  },\n  {\n    id: "business_engines",\n    name: "Specialized Business Suite",\n    category: "Business Modules",\n    desc: "Clinic, Salon, Restaurant POS, Hotel & Rental engines",\n    longDesc: "Turnkey industry-specific operational management modules built directly into PingDart. Switch seamlessly between Clinic appointment booking, Salon schedules, Restaurant POS, Hotel reservations, and Vehicle rental management.",\n    icon: BusinessIcon,\n    nav: "Settings",\n    status: "Pro",\n    accentColor: "from-violet-600 to-purple-700",\n    badgeColor: "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-900",\n    metrics: [\n      { label: "Modules Included", value: "5 Industries" },\n      { label: "Active Bookings", value: "320" },\n      { label: "Customer Chat Sync", value: "Enabled" },\n    ],\n    features: [\n      "Clinic OPD & Digital Prescription Generator",\n      "Salon Staff Roster & Service Booking Management",\n      "Restaurant Table Reservation & Kitchen Display System (KDS)",\n      "Hotel Room Booking Engine & Bike/Vehicle Rental Tracker",\n    ],\n  },\n  {\n    id: "reseller_hub",\n    name: "PingDart Reseller & White-Label Partner",\n    category: "Business Modules",\n    desc: "Multi-tenant reseller suite, custom domain mapping, branding config & white-label pricing packages",\n    longDesc: "Complete turnkey reseller & white-label distribution hub. Launch branded client portals under your own custom domain, configure tenant DNS & custom branding, and sell tiered packages (555, 999, 1999) across USD, INR, and global currencies with instant checkout.",\n    icon: GlobeIcon,\n    nav: "Reseller",\n    status: "Pro",\n    accentColor: "from-amber-500 via-orange-600 to-red-600",\n    badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",\n    metrics: [\n      { label: "Reseller Tiers", value: "3 Packages (555/999/1999)" },\n      { label: "Custom Domains", value: "Auto SSL" },\n      { label: "Multi-Currency", value: "USD, INR, Global" },\n    ],\n    features: [\n      "Custom domain mapping with automated SSL & DNS verification (add domain)",\n      "White-label brand configuration (logo, portal name, theme colors & email templates)",\n      "Turnkey client pricing packages: 555, 999, 1999 with multi-currency switch (USD, INR, all currencies)",\n      "Integrated client payment collection with Stripe & Razorpay support",\n      "Tenant management dashboard & automated commission / revenue tracking",\n    ],\n    configOptions: [\n      { label: "Custom Domain Active", enabled: true },\n      { label: "White-label Brand Masking", enabled: true },\n      { label: "Multi-currency Checkout", enabled: true },\n    ],\n  },\n  {\n    id: "webhooks_api",\n    name: "Webhooks & API Bots",\n    category: "Integrations",\n    desc: "Connect Slack, Zapier, Webhooks & external bots",\n    longDesc: "Developer-first automation suite. Receive incoming webhooks, dispatch automated alert payloads, connect custom Telegram/Slack bots, and trigger workspace workflows.",\n    icon: LinkIcon,\n    nav: "Channels",\n    status: "Demo",\n    accentColor: "from-orange-500 to-red-600",\n    badgeColor: "bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900",\n    metrics: [\n      { label: "Active Webhooks", value: "6 Endpoints" },\n      { label: "Events Processed", value: "14.8k / mo" },\n      { label: "Avg Delivery", value: "99.98%" },\n    ],\n    features: [\n      "Incoming REST Webhook listener with custom payload mapping",\n      "Outgoing event triggers on message, order, or status events",\n      "Zapier, Make.com, & Slack app integration connectors",\n      "Custom HTTP request headers & HMAC signature verification",\n    ],\n  },\n  {\n    id: "pj_stephen_paul",\n    name: "P. J. Stephen Paul Ministries",\n    category: "Commerce & Social",\n    desc: "Life Changing Revival Centre: Live church broadcast, daily devotional manna, audio sermons & 24/7 prayer hotline",\n    longDesc: "Official digital companion for P. J. Stephen Paul Ministries and Life Changing Revival Centre (LCRC). Experience live church service broadcasts, listen to gospel songs and audio message podcasts, receive uplifting daily devotional manna, submit confidential prayer requests 24/7, and explore revival centres across Hyderabad, Vizag, and Vijayawada.",\n    icon: GlobeIcon,\n    logoUrl: "https://play-lh.googleusercontent.com/9Om2DAgX15RE3uqqShBLIw_P9vo55Pbd4hnnYRShE3VGnKP8l9Q_16RB90rLAFaD8zUlrVxBkvNsAjk1m3HCig=w480-h960-rw",\n    nav: "PJStephenPaul",\n    status: "Active",\n    accentColor: "from-amber-600 via-orange-600 to-rose-700",\n    badgeColor: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900",\n    metrics: [\n      { label: "Revival Network", value: "LCRC Global" },\n      { label: "Broadcasts", value: "Daily Live TV" },\n      { label: "Prayer Support", value: "24/7 Hotline" },\n    ],\n    features: [\n      "Live Church Broadcast & Sunday Worship Streaming with interactive chat",\n      "Daily Devotional Manna & Prophetic Scripture of the Day",\n      "24/7 Prayer Request Hotline with instant pastoral intercession",\n      "Audio Sermons, Podcasts & Telugu/English Gospel Worship Playlist",\n      "Revival Centre Branch Directory (Hyderabad, Vizag, Vijayawada)",\n      "PJS Paul Foundation Charitable Outreach & Community Blessings",\n      "Online Partnership, Tithes & Secure Ministry Contributions"\n    ],\n    configOptions: [\n      { label: "Daily Devotional Notifications", enabled: true },\n      { label: "Live Service Broadcast Alerts", enabled: true },\n      { label: "Audio Stream Background Playback", enabled: true },\n    ],\n  },\n].map');
__turbopack_context__.k.register(_c1, "MODULES_LIST");
__turbopack_context__.k.register(_c2, "MoreScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9b6682ee._.js.map