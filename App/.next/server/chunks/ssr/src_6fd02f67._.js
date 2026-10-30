module.exports = [
"[project]/src/services/aiBlogApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiBlogApi",
    ()=>aiBlogApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const aiBlogApi = {
    async getProjects () {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/ai-blog/projects');
        return res.data.data || [];
    },
    async createProject (data) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/ai-blog/projects', data);
        return res.data.data;
    },
    async getProjectDetails (id) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/ai-blog/projects/${id}`);
        return res.data.data;
    },
    async updateProject (id, data) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/ai-blog/projects/${id}`, data);
        return res.data.data;
    },
    async deleteProject (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/ai-blog/projects/${id}`);
    },
    async importWebsite (projectId, url) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/ai-blog/projects/${projectId}/import-website`, {
            url
        });
        return res.data.data;
    },
    async getKnowledgeAssets (projectId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/ai-blog/projects/${projectId}/assets`);
        return res.data.data || [];
    },
    async createKnowledgeAsset (projectId, data) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/ai-blog/projects/${projectId}/assets`, data);
        return res.data.data;
    },
    async deleteKnowledgeAsset (assetId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/ai-blog/assets/${assetId}`);
    },
    async getGenerationLogs (projectId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/ai-blog/projects/${projectId}/logs`);
        return res.data.data || [];
    },
    async shareProject (projectId, payload) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/ai-blog/projects/${projectId}/share`, payload);
        return res.data.data;
    },
    async unshareProject (projectId, targetUserId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/ai-blog/projects/${projectId}/share/${targetUserId}`);
    },
    async testWebhook (projectId, topic) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/ai-blog/projects/${projectId}/test-webhook`, {
            topic
        });
        return res.data;
    },
    async runNow (projectId, topic) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/ai-blog/projects/${projectId}/run-now`, {
            topic
        });
        return res.data.data;
    },
    async getArticles (projectId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/ai-blog/projects/${projectId}/articles`);
        return res.data.data || [];
    },
    async getArticle (articleId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/ai-blog/articles/${articleId}`);
        return res.data.data;
    },
    async updateArticle (articleId, data) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/ai-blog/articles/${articleId}`, data);
        return res.data.data;
    },
    async deleteArticle (articleId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/ai-blog/articles/${articleId}`);
    },
    async publishArticle (articleId) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/ai-blog/articles/${articleId}/publish`);
        return res.data.data;
    },
    // Knowledge Hub & Cannibalization Radar (Single Python Microservice Engine)
    async crawlKnowledgeSite (url, maxPages = 50, depth = 2) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/ai-blog/knowledge-hub/crawl-site', {
            url,
            maxPages,
            depth
        });
        return res.data.data;
    },
    async extractKnowledgeHub (url, previousHubVersion, crawledPages) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/ai-blog/knowledge-hub/extract-knowledge', {
            url,
            previousHubVersion,
            crawledPages
        });
        return res.data.data;
    },
    async checkCannibalization (params) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/ai-blog/knowledge-hub/check-cannibalization', params);
        return res.data.data;
    },
    async testProvider (provider, apiKey, model, webhookUrl) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/ai-blog/test-provider', {
            provider,
            apiKey,
            model,
            webhookUrl
        });
        return res.data;
    },
    async testImageProvider (provider, apiKey, endpointUrl) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post('/ai-blog/test-image-provider', {
            provider,
            apiKey,
            endpointUrl
        });
        return res.data;
    }
};
}),
"[project]/src/utils/imageUploadHelper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processCatalogImageUploads",
    ()=>processCatalogImageUploads,
    "uploadImageOrUrlToBackend",
    ()=>uploadImageOrUrlToBackend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
async function uploadImageOrUrlToBackend(imageUrl) {
    if (!imageUrl || typeof imageUrl !== "string") return imageUrl;
    const trimmed = imageUrl.trim();
    if (!trimmed) return trimmed;
    // Already hosted on backend
    if (trimmed.startsWith("/uploads/")) return trimmed;
    // Upload external image URL or base64 data URL to backend
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("data:image/")) {
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/user/upload-media", {
                imageUrl: trimmed
            });
            if (res.data?.success && res.data?.url) {
                return res.data.url;
            }
        } catch (err) {
            console.warn("[imageUploadHelper] Upload image URL to backend failed:", err?.message || err);
        }
    }
    return trimmed;
}
async function processCatalogImageUploads(items) {
    const processed = await Promise.all(items.map(async (item)=>{
        const updatedItem = {
            ...item
        };
        if (updatedItem.imageUrl) {
            updatedItem.imageUrl = await uploadImageOrUrlToBackend(updatedItem.imageUrl);
        }
        if (updatedItem.icon && (updatedItem.icon.startsWith("http") || updatedItem.icon.startsWith("data:image"))) {
            updatedItem.icon = await uploadImageOrUrlToBackend(updatedItem.icon);
        }
        return updatedItem;
    }));
    return processed;
}
}),
];

//# sourceMappingURL=src_6fd02f67._.js.map