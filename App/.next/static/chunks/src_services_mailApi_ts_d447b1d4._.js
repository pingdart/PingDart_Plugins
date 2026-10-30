(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/mailApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignsApi",
    ()=>campaignsApi,
    "connectedEmailsApi",
    ()=>connectedEmailsApi,
    "formatBytes",
    ()=>formatBytes,
    "globalTemplatesApi",
    ()=>globalTemplatesApi,
    "mailApi",
    ()=>mailApi,
    "mailImportApi",
    ()=>mailImportApi,
    "signaturesApi",
    ()=>signaturesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const mailApi = {
    // Folder list for a mailbox
    getFolders: async (email, password)=>{
        try {
            const query = password ? `?password=${encodeURIComponent(password)}` : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/mailbox/${encodeURIComponent(email)}/folders${query}`);
            return response.data;
        } catch (error) {
            var _error_response_data, _error_response;
            throw new Error(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || 'Failed to fetch folders');
        }
    },
    getFolderStats: async (email, password)=>{
        try {
            const query = password ? `?password=${encodeURIComponent(password)}` : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/mailbox/${encodeURIComponent(email)}/stats${query}`);
            return response.data;
        } catch (error) {
            var _error_response_data, _error_response;
            throw new Error(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || 'Failed to fetch folder stats');
        }
    },
    // Messages in a folder
    getFolderMessages: async (email, folder, limit = 50, offset = 0, password, category)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/mailbox/${encodeURIComponent(email)}/folder/${encodeURIComponent(folder)}`, {
                params: {
                    limit,
                    offset,
                    password,
                    category
                }
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    // Single message
    getMessageDetail: async (uid, email, folder, password, messageId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/${uid}`, {
                params: {
                    email,
                    folder,
                    password,
                    messageId
                }
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    // Attachments
    getAttachmentUrl: async (uid, attachmentId, email, folder)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/${uid}/attachments/${attachmentId}/download`, {
                params: {
                    email,
                    folder: folder || 'INBOX'
                }
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    // Send an email via SMTP
    sendMail: async (email, password, to, cc, bcc, subject, text, html, replyToId, attachments)=>{
        try {
            if (attachments && attachments.length > 0) {
                const formData = new FormData();
                formData.append("email", email);
                if (password) formData.append("password", password);
                formData.append("to", to);
                if (cc) formData.append("cc", cc);
                if (bcc) formData.append("bcc", bcc);
                formData.append("subject", subject);
                formData.append("text", text);
                if (html) formData.append("html", html);
                if (replyToId) formData.append("replyToId", replyToId);
                for (const file of attachments){
                    formData.append("attachments", file);
                }
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/mail/send", formData, {
                    timeout: 60000
                });
                return response.data;
            } else {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/mail/send", {
                    email,
                    password,
                    to,
                    cc,
                    bcc,
                    subject,
                    text,
                    html,
                    replyToId
                }, {
                    timeout: 60000
                });
                return response.data;
            }
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    // Save draft email
    saveDraft: async (email, password, to, cc, bcc, subject, text, html, draftId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/mail/draft", {
                email,
                password,
                to,
                cc,
                bcc,
                subject,
                text,
                html,
                draftId
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    checkAccountStatus: async (userId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/mail/check-account-status", {
                userId
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    // Pre-flight recipient risk check (Step 4 & 5A)
    checkRecipientRisk: async (recipient, sender, recipients)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/mail/recipient-risk-check", {
                recipient,
                sender,
                recipients
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    // Provider-partitioned delivery analytics (Step 5B)
    getProviderDeliveryAnalytics: async (period = "24h")=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/analytics/provider-delivery`, {
                params: {
                    period
                }
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    // Org Admin Audit Trail & Security Telemetry (Step 7)
    getAuditLogs: async (params = {})=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/audit-logs`, {
                params
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    getAuditSummary: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail/audit-summary`);
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    recordAuditLog: async (payload)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/mail/audit-logs`, payload);
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    markRead: async (uid, email, folder, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/read`, {
                email,
                folder,
                password
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    markUnread: async (uid, email, folder, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/unread`, {
                email,
                folder,
                password
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    toggleStar: async (uid, email, folder, isStarred, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/star`, {
                email,
                folder,
                isStarred,
                password
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    moveMessage: async (uid, email, folder, destinationFolder, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/mail/${uid}/move`, {
                email,
                folder,
                destinationFolder,
                password
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    deleteMessage: async (uid, email, password, folder, permanent)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/mail/${encodeURIComponent(String(uid))}`, {
                data: {
                    email,
                    password,
                    folder: folder || 'INBOX',
                    permanent: permanent || false
                }
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    bulkDeleteMessages: async (uids, email, password, folder, permanent)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/mail/bulk-delete', {
                uids,
                email,
                password,
                folder: folder || 'INBOX',
                permanent: permanent || false
            });
            return response.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    getAvatarByEmail: async (email)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/avatar-by-email?email=${encodeURIComponent(email)}`);
            return res.data;
        } catch (err) {
            return {
                success: false,
                avatar: null
            };
        }
    }
};
const connectedEmailsApi = {
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/connected-emails');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                data: []
            };
        }
    },
    resolveProvider: async (email)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/connected-emails/resolve?email=${encodeURIComponent(email)}`);
            return res.data;
        } catch (err) {
            return {
                success: false,
                data: {
                    provider: 'custom',
                    imapHost: null,
                    imapPort: 993,
                    smtpHost: null,
                    smtpPort: 465
                }
            };
        }
    },
    getMicrosoftAuthUrl: async (redirectUri, email)=>{
        try {
            const uri = redirectUri || (("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/api/auth/microsoft/callback` : "TURBOPACK unreachable");
            const query = new URLSearchParams();
            if ("TURBOPACK compile-time truthy", 1) query.set('redirectUri', uri);
            if (email) query.set('email', email);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/connected-emails/microsoft/url?${query.toString()}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false
            };
        }
    },
    connectMicrosoft: async (code, redirectUri)=>{
        try {
            const uri = redirectUri || (("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/api/auth/microsoft/callback` : "TURBOPACK unreachable");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/connected-emails/microsoft/connect', {
                code,
                redirectUri: uri
            });
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    connect: async (payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/connected-emails', payload);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    update: async (id, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/connected-emails/${id}`, payload);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    disconnect: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/connected-emails/${id}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    test: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/test`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    setDefault: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/set-default`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    testConnection: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/test`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    migrate: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/connected-emails/${id}/migrate`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    }
};
const signaturesApi = {
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/signatures');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                data: [],
                message: err.message
            };
        }
    },
    create: async (payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/signatures', payload);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    update: async (id, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/signatures/${id}`, payload);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    delete: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/signatures/${id}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    setDefault: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/signatures/${id}/default`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    }
};
const globalTemplatesApi = {
    // Any authenticated user — browse available templates
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/signatures/templates/global');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                data: [],
                message: err.message
            };
        }
    },
    // Admin only
    listAdmin: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/admin/signatures/templates');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                data: [],
                message: err.message
            };
        }
    },
    create: async (payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/admin/signatures/templates', payload);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    update: async (id, payload)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/admin/signatures/templates/${id}`, payload);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    delete: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/admin/signatures/templates/${id}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    seed: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/admin/signatures/templates/seed');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    }
};
const mailImportApi = {
    /** Fetch current mailbox storage usage vs quota & plan limits */ getStorageInfo: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/mail-import/storage-info');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    /** Fetch live status of a background restore job */ getJobStatus: async (jobId)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/mail-import/jobs/${jobId}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    /** Fetch past backup import history */ getHistory: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/mail-import/history');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    /** Clean and delete all emails from mailbox & IMAP server */ cleanMailbox: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete('/mail-import/clean-mailbox');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message || 'Failed to clean mailbox.'
            };
        }
    },
    /** Download backup file */ downloadBackup: (jobId)=>{
        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('access_token') || localStorage.getItem('auth_token') || localStorage.getItem('token') || '' : "TURBOPACK unreachable";
        const BASE_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
        const downloadUrl = `${BASE_URL}/mail-import/download/${encodeURIComponent(jobId)}?token=${encodeURIComponent(token)}`;
        window.open(downloadUrl, '_blank');
    },
    /**
   * Upload a backup file (.eml, .mbox, .zip, .pst) for import.
   * @param file          The File object from <input> or drag-and-drop
   * @param options       Target folder and progress callback
   */ importFile: (file, options)=>{
        return new Promise((resolve)=>{
            const formData = new FormData();
            formData.append('mailFile', file);
            if (options === null || options === void 0 ? void 0 : options.targetFolder) {
                formData.append('targetFolder', options.targetFolder);
            }
            const xhr = new XMLHttpRequest();
            const BASE_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            xhr.open('POST', `${BASE_URL}/mail-import/upload`);
            // Copy auth token from axios defaults or localStorage
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].defaults.headers.common['Authorization'] || (("TURBOPACK compile-time truthy", 1) ? `Bearer ${localStorage.getItem('access_token') || localStorage.getItem('auth_token') || localStorage.getItem('token') || ''}` : "TURBOPACK unreachable");
            if ("TURBOPACK compile-time truthy", 1) xhr.setRequestHeader('Authorization', token);
            xhr.upload.onprogress = (e)=>{
                if (e.lengthComputable && (options === null || options === void 0 ? void 0 : options.onProgress)) {
                    options.onProgress(Math.round(e.loaded / e.total * 100));
                }
            };
            xhr.onload = ()=>{
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch (e) {
                    resolve({
                        success: false,
                        message: 'Invalid server response.'
                    });
                }
            };
            xhr.onerror = ()=>resolve({
                    success: false,
                    message: 'Network error during upload.'
                });
            xhr.ontimeout = ()=>resolve({
                    success: false,
                    message: 'Upload timed out.'
                });
            xhr.timeout = 30 * 60 * 1000; // 30 min timeout for large MBOX files
            xhr.send(formData);
        });
    }
};
function formatBytes(bytes) {
    if (!bytes || bytes === 0) return '0 B';
    const units = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}
const campaignsApi = {
    list: async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/campaigns');
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    get: async (id, limit = 200, offset = 0)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/campaigns/${encodeURIComponent(id)}?limit=${limit}&offset=${offset}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    create: async (data)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/campaigns', data);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    send: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/send`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    pause: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/pause`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    resume: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/resume`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    cancel: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/campaigns/${encodeURIComponent(id)}/cancel`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    delete: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/campaigns/${encodeURIComponent(id)}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    getUsers: async (domain)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/campaigns/access/users', {
                params: domain ? {
                    domain
                } : {}
            });
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    updateUserRole: async (userId, campaignRole)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/campaigns/access/users/${encodeURIComponent(userId)}`, {
                campaign_role: campaignRole
            });
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    listTemplates: async (domain)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/campaigns/templates', {
                params: domain ? {
                    domain
                } : {}
            });
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message,
                data: []
            };
        }
    },
    saveTemplate: async (template)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/campaigns/templates', template);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    },
    deleteTemplate: async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/campaigns/templates/${encodeURIComponent(id)}`);
            return res.data;
        } catch (err) {
            var _err_response;
            return ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || {
                success: false,
                message: err.message
            };
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_services_mailApi_ts_d447b1d4._.js.map