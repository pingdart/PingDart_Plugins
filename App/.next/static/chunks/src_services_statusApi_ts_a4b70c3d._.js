(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/statusApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "statusApi",
    ()=>statusApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const statusApi = {
    // Get all active statuses grouped by user
    getStatuses: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/status");
        return response.data;
    },
    // Add a text status
    addTextStatus: async (text, backgroundColor, fontFamily = 'sans-serif', privacyOption, selectedUsers)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/status", {
            type: 'text',
            text,
            backgroundColor,
            fontFamily,
            privacyOption,
            selectedUsers
        });
        return response.data;
    },
    // Add an image/video status
    addMediaStatus: async (file, caption, privacyOption, selectedUsers)=>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', file.type.startsWith('video/') ? 'video' : 'image');
        if (caption) {
            formData.append('caption', caption);
        }
        if (privacyOption) {
            formData.append('privacyOption', privacyOption);
        }
        if (selectedUsers && selectedUsers.length > 0) {
            formData.append('selectedUsers', JSON.stringify(selectedUsers));
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/status", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    // Mark a status as viewed
    markViewed: async (statusId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/status/${statusId}/view`);
        return response.data;
    },
    // Delete a status
    deleteStatus: async (statusId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/status/${statusId}`);
        return response.data;
    },
    // Reply to a status
    replyToStatus: async (statusId, message, reaction, statusMeta)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/status/${statusId}/reply`, {
            message,
            reaction,
            ...statusMeta
        });
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_services_statusApi_ts_a4b70c3d._.js.map