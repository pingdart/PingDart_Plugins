(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/aiStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiStorage",
    ()=>aiStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-client] (ecmascript)");
;
const CONVERSATIONS_INDEX_KEY = "pingdart_ai_conversations_v1";
const ACTIVE_CONVERSATION_KEY = "pingdart_ai_active_conv_id";
const CONVERSATION_PREFIX = "pingdart_ai_conv_";
const aiStorage = {
    /**
   * Retrieves all saved conversations ordered by pinned status and last updated.
   */ async getConversations () {
        try {
            const rawIndex = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].getItem(CONVERSATIONS_INDEX_KEY);
            if (!rawIndex) return [];
            const convList = JSON.parse(rawIndex);
            if (!Array.isArray(convList)) return [];
            return convList.sort((a, b)=>{
                if (a.isPinned && !b.isPinned) return -1;
                if (!a.isPinned && b.isPinned) return 1;
                return (b.updatedAt || 0) - (a.updatedAt || 0);
            });
        } catch (e) {
            console.warn("[aiStorage] Failed to get conversations:", e);
            return [];
        }
    },
    /**
   * Retrieves a single conversation by ID with its messages.
   */ async getConversation (id) {
        try {
            // First try specific conversation item
            const itemRaw = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].getItem(`${CONVERSATION_PREFIX}${id}`);
            if (itemRaw) {
                return JSON.parse(itemRaw);
            }
            // Fallback to index list
            const list = await this.getConversations();
            return list.find((c)=>c.id === id) || null;
        } catch (e) {
            console.warn("[aiStorage] Failed to get conversation:", e);
            return null;
        }
    },
    /**
   * Saves or updates a conversation.
   */ async saveConversation (conv) {
        try {
            // Save individual record
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem(`${CONVERSATION_PREFIX}${conv.id}`, JSON.stringify(conv));
            // Update index
            const list = await this.getConversations();
            const existingIdx = list.findIndex((c)=>c.id === conv.id);
            const updatedList = [
                ...list
            ];
            if (existingIdx !== -1) {
                updatedList[existingIdx] = conv;
            } else {
                updatedList.unshift(conv);
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem(CONVERSATIONS_INDEX_KEY, JSON.stringify(updatedList));
        } catch (e) {
            console.warn("[aiStorage] Failed to save conversation:", e);
        }
    },
    /**
   * Deletes a conversation by ID.
   */ async deleteConversation (id) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem(`${CONVERSATION_PREFIX}${id}`);
            const list = await this.getConversations();
            const filtered = list.filter((c)=>c.id !== id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem(CONVERSATIONS_INDEX_KEY, JSON.stringify(filtered));
            const activeId = await this.getActiveConversationId();
            if (activeId === id) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem(ACTIVE_CONVERSATION_KEY);
            }
        } catch (e) {
            console.warn("[aiStorage] Failed to delete conversation:", e);
        }
    },
    /**
   * Clears all conversations from storage.
   */ async clearAllConversations () {
        try {
            const list = await this.getConversations();
            for (const c of list){
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem(`${CONVERSATION_PREFIX}${c.id}`);
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem(CONVERSATIONS_INDEX_KEY);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem(ACTIVE_CONVERSATION_KEY);
        } catch (e) {
            console.warn("[aiStorage] Failed to clear all conversations:", e);
        }
    },
    /**
   * Renames a conversation.
   */ async renameConversation (id, newTitle) {
        const conv = await this.getConversation(id);
        if (!conv) return;
        conv.title = newTitle.trim();
        conv.updatedAt = Date.now();
        await this.saveConversation(conv);
    },
    /**
   * Toggles pinned status.
   */ async togglePinConversation (id) {
        const conv = await this.getConversation(id);
        if (!conv) return false;
        conv.isPinned = !conv.isPinned;
        conv.updatedAt = Date.now();
        await this.saveConversation(conv);
        return !!conv.isPinned;
    },
    /**
   * Adds or updates a message in a conversation.
   */ async saveMessageToConversation (convId, message) {
        let conv = await this.getConversation(convId);
        if (!conv) return null;
        const existingMsgIdx = conv.messages.findIndex((m)=>m.id === message.id);
        if (existingMsgIdx !== -1) {
            conv.messages[existingMsgIdx] = message;
        } else {
            conv.messages.push(message);
        }
        // Auto-update title from first user message if title is default
        if (conv.title.startsWith("New Chat") && message.sender === "user" && message.text.trim()) {
            const generated = message.text.trim().slice(0, 32);
            conv.title = generated.charAt(0).toUpperCase() + generated.slice(1);
        }
        conv.updatedAt = Date.now();
        await this.saveConversation(conv);
        return conv;
    },
    /**
   * Active conversation ID getters/setters.
   */ async getActiveConversationId () {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].getItem(ACTIVE_CONVERSATION_KEY);
    },
    async setActiveConversationId (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem(ACTIVE_CONVERSATION_KEY, id);
    },
    /**
   * Creates a new conversation with a default title and bot persona.
   */ async createNewConversation (botId, defaultTitle) {
        const newId = `conv_${Date.now()}`;
        const newConv = {
            id: newId,
            title: defaultTitle || "New Chat",
            bot: botId,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            messages: []
        };
        await this.saveConversation(newConv);
        await this.setActiveConversationId(newId);
        return newConv;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/AiConversationsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiConversationsModal",
    ()=>AiConversationsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.mjs [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/aiStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AiConversationsModal({ isOpen, onClose, conversations, activeConversationId, onSelectConversation, onNewChat, onRefreshList }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingTitle, setEditingTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!isOpen) return null;
    // Filter conversations
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiConversationsModal.useMemo[filtered]": ()=>{
            if (!searchQuery.trim()) return conversations;
            const q = searchQuery.toLowerCase();
            return conversations.filter({
                "AiConversationsModal.useMemo[filtered]": (c)=>c.title.toLowerCase().includes(q) || c.bot.toLowerCase().includes(q) || c.messages.some({
                        "AiConversationsModal.useMemo[filtered]": (m)=>m.text.toLowerCase().includes(q)
                    }["AiConversationsModal.useMemo[filtered]"])
            }["AiConversationsModal.useMemo[filtered]"]);
        }
    }["AiConversationsModal.useMemo[filtered]"], [
        conversations,
        searchQuery
    ]);
    // Group by Today, Yesterday, Last Week, Older
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiConversationsModal.useMemo[grouped]": ()=>{
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000;
            const today = [];
            const yesterday = [];
            const lastWeek = [];
            const older = [];
            filtered.forEach({
                "AiConversationsModal.useMemo[grouped]": (conv)=>{
                    const diff = now - (conv.updatedAt || conv.createdAt);
                    if (diff < oneDay) {
                        today.push(conv);
                    } else if (diff < 2 * oneDay) {
                        yesterday.push(conv);
                    } else if (diff < 7 * oneDay) {
                        lastWeek.push(conv);
                    } else {
                        older.push(conv);
                    }
                }
            }["AiConversationsModal.useMemo[grouped]"]);
            return [
                {
                    title: "Today",
                    items: today
                },
                {
                    title: "Yesterday",
                    items: yesterday
                },
                {
                    title: "Last Week",
                    items: lastWeek
                },
                {
                    title: "Older",
                    items: older
                }
            ].filter({
                "AiConversationsModal.useMemo[grouped]": (g)=>g.items.length > 0
            }["AiConversationsModal.useMemo[grouped]"]);
        }
    }["AiConversationsModal.useMemo[grouped]"], [
        filtered
    ]);
    const handleStartRename = (conv, e)=>{
        e.stopPropagation();
        setEditingId(conv.id);
        setEditingTitle(conv.title);
    };
    const handleSaveRename = async (id, e)=>{
        e.stopPropagation();
        if (editingTitle.trim()) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].renameConversation(id, editingTitle.trim());
            onRefreshList();
        }
        setEditingId(null);
    };
    const handleDelete = async (id, e)=>{
        e.stopPropagation();
        if (confirm("Delete this conversation?")) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].deleteConversation(id);
            onRefreshList();
        }
    };
    const handleTogglePin = async (id, e)=>{
        e.stopPropagation();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].togglePinConversation(id);
        onRefreshList();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-fadeIn",
        style: {
            paddingTop: "max(calc(env(safe-area-inset-top, 0px) + 1rem), 2rem)",
            paddingBottom: "max(calc(env(safe-area-inset-bottom, 0px) + 1.25rem), 3.5rem)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg bg-white dark:bg-[#111827] rounded-[24px] shadow-2xl flex flex-col max-h-[88vh] border border-gray-200/80 dark:border-gray-800 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 sm:p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-between shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        size: 17,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-black tracking-wide",
                                            children: "AI Conversations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-blue-100/80 font-medium",
                                            children: "ChatGPT-Style History & Memory"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 sm:p-4 border-b border-gray-100 dark:border-gray-800/80 flex gap-2 items-center shrink-0 bg-gray-50/50 dark:bg-gray-900/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 15,
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Search chats...",
                                    className: "w-full pl-9 pr-3 py-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700/80 rounded-xl text-xs text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onNewChat();
                                onClose();
                            },
                            className: "px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs shrink-0 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "New Chat"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm:hidden",
                                    children: "New"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-3 sm:p-4 space-y-4",
                    children: conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium",
                                children: "No past conversations yet."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onNewChat();
                                    onClose();
                                },
                                className: "px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-xs",
                                children: "Start First Chat"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this) : grouped.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-xs text-gray-400",
                        children: [
                            'No conversations match "',
                            searchQuery,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this) : grouped.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 px-2 text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: group.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: group.items.map((conv)=>{
                                        var _conv_messages;
                                        const isActive = conv.id === activeConversationId;
                                        const isEditing = editingId === conv.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                if (!isEditing) {
                                                    onSelectConversation(conv);
                                                    onClose();
                                                }
                                            },
                                            className: `group p-2.5 sm:p-3 rounded-xl border flex items-center justify-between gap-2.5 transition-all cursor-pointer ${isActive ? "bg-blue-50/90 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700/80 shadow-xs" : "bg-white dark:bg-[#1a2332] hover:bg-gray-50 dark:hover:bg-[#1e293b] border-gray-200/70 dark:border-gray-800/80"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5 min-w-0 flex-1",
                                                    children: [
                                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 29
                                                        }, this),
                                                        conv.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 13,
                                                            className: "text-amber-500 fill-amber-500 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 29
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                            onSubmit: (e)=>handleSaveRename(conv.id, e),
                                                            className: "flex items-center gap-1.5 flex-1",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: editingTitle,
                                                                    onChange: (e)=>setEditingTitle(e.target.value),
                                                                    autoFocus: true,
                                                                    className: "flex-1 px-2 py-0.5 bg-white dark:bg-slate-800 border border-blue-400 rounded text-xs text-gray-900 dark:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: "p-1 text-emerald-600 hover:bg-emerald-50 rounded",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-bold text-gray-900 dark:text-gray-100 truncate",
                                                                            children: conv.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                            lineNumber: 248,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shrink-0",
                                                                            children: conv.bot
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[10px] text-gray-400 mt-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            size: 10
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: new Date(conv.updatedAt || conv.createdAt).toLocaleTimeString([], {
                                                                                hour: "2-digit",
                                                                                minute: "2-digit"
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                ((_conv_messages = conv.messages) === null || _conv_messages === void 0 ? void 0 : _conv_messages.length) || 0,
                                                                                " messages"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                            lineNumber: 264,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 25
                                                }, this),
                                                !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 shrink-0 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>handleTogglePin(conv.id, e),
                                                            className: `p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${conv.isPinned ? "text-amber-500" : "text-gray-400"}`,
                                                            title: conv.isPinned ? "Unpin chat" : "Pin chat to top",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                size: 13,
                                                                className: conv.isPinned ? "fill-amber-500" : ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>handleStartRename(conv, e),
                                                            className: "p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 hover:text-blue-600 transition-colors",
                                                            title: "Rename chat",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>handleDelete(conv.id, e),
                                                            className: "p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/50 text-gray-400 hover:text-rose-600 transition-colors",
                                                            title: "Delete chat",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, conv.id, true, {
                                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                            lineNumber: 204,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, group.title, true, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 193,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 sm:p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/50 flex justify-between items-center shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-gray-400 font-medium",
                            children: [
                                conversations.length,
                                " total saved conversations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onNewChat();
                                onClose();
                            },
                            className: "px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "+ New Chat"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/screens/AiConversationsModal.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(AiConversationsModal, "cU8z3hcI6EdGaR7nvHdVBU9W8dE=");
_c = AiConversationsModal;
var _c;
__turbopack_context__.k.register(_c, "AiConversationsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOT_CATEGORIES",
    ()=>BOT_CATEGORIES,
    "DEFAULT_AI_MODELS",
    ()=>DEFAULT_AI_MODELS,
    "detectBotCategory",
    ()=>detectBotCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Briefcase01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CodeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PaintBrush01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PaintBrush01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserCheck01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserCheck01Icon.js [app-client] (ecmascript)");
;
const BOT_CATEGORIES = [
    {
        id: "general",
        name: "PingDart General AI",
        subtitle: "General intelligence, web queries, research & multi-domain help",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain01Icon"],
        color: "from-blue-600 via-indigo-600 to-cyan-600",
        badge: "General",
        systemPrompt: "You are PingDart AI, an advanced, friendly, and versatile AI assistant. Answer general queries, summarize websites or text, assist with research, and provide clear assistance across all topics.",
        prompts: [
            "Check or analyze a website or article",
            "Explain a complex topic in simple terms",
            "Draft an email, message, or project plan"
        ]
    },
    {
        id: "job",
        name: "AI Job & Career Coach",
        subtitle: "Resume optimization, interview prep & job strategy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Briefcase01Icon"],
        color: "from-blue-600 to-indigo-600",
        badge: "Careers",
        systemPrompt: "You are an expert AI Career Coach. Help the user with resume building, interview preparation, salary negotiations, and job application strategies.",
        prompts: [
            "Prepare mock interview questions for my role",
            "Write an impactful cover letter for my job application",
            "How can I optimize my resume bullet points for ATS?"
        ]
    },
    {
        id: "business",
        name: "AI Business & Sales Assistant",
        subtitle: "Marketing copy, business strategy & sales pitches",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"],
        color: "from-emerald-600 to-teal-600",
        badge: "Business",
        systemPrompt: "You are a senior AI Business & Sales Strategist. Provide actionable business advice, marketing copy, sales emails, and growth strategies.",
        prompts: [
            "Draft a high-converting cold email for prospective clients",
            "Create a 30-day marketing plan for my business",
            "Help me write a compelling pitch deck summary"
        ]
    },
    {
        id: "tech",
        name: "AI Code & Tech Developer",
        subtitle: "Debugging, code generation & system architecture",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeIcon"],
        color: "from-purple-600 to-indigo-700",
        badge: "Dev",
        systemPrompt: "You are a master AI Software Architect & Senior Engineer. Assist with code snippet generation, debugging, refactoring, and API design.",
        prompts: [
            "Explain how to structure a scalable REST API",
            "Debug my React/Node.js state management code",
            "Generate a TypeScript interface for my data model"
        ]
    },
    {
        id: "creative",
        name: "AI Creative & Social Media",
        subtitle: "Reels ideas, viral captions & copywriting",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PaintBrush01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaintBrush01Icon"],
        color: "from-pink-600 to-rose-600",
        badge: "Marketing",
        systemPrompt: "You are a creative AI Content Strategist. Generate viral video concepts, engaging social media captions, and creative branding ideas.",
        prompts: [
            "Give me 5 viral TikTok/Reels video ideas for my niche",
            "Write an engaging Instagram caption with trending hashtags",
            "Brainstorm creative brand taglines and slogans"
        ]
    },
    {
        id: "life",
        name: "AI Life & Productivity Coach",
        subtitle: "Daily routines, focus habits & time management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserCheck01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserCheck01Icon"],
        color: "from-amber-500 to-orange-600",
        badge: "Focus",
        systemPrompt: "You are an empathetic AI Productivity & Mindset Coach. Guide the user in habit building, daily routine planning, and goal setting.",
        prompts: [
            "Design a productive morning routine for high focus",
            "How do I overcome procrastination on big tasks?",
            "Help me prioritize my weekly goals effectively"
        ]
    }
];
const DEFAULT_AI_MODELS = [
    {
        id: "auto",
        name: "Auto Model Router",
        tag: "auto",
        size: "Smart",
        provider: "PingDart AI Orchestrator",
        status: "online"
    },
    {
        id: "gpt-oss:20b",
        name: "GPT-OSS 20B",
        tag: "gpt-oss:20b",
        size: "13.8 GB",
        provider: "Ollama (PingDart Cloud)",
        status: "online"
    },
    {
        id: "qwen3:8b",
        name: "Qwen 3 8B",
        tag: "qwen3:8b",
        size: "5.2 GB",
        provider: "Ollama (PingDart Cloud)",
        status: "online"
    },
    {
        id: "qwen3:4b",
        name: "Qwen 3 4B",
        tag: "qwen3:4b",
        size: "2.5 GB",
        provider: "Ollama (PingDart Cloud)",
        status: "online"
    }
];
function detectBotCategory(text) {
    if (!text || !text.trim()) {
        return BOT_CATEGORIES[0]; // General AI
    }
    const lower = text.toLowerCase();
    // Tech & Coding
    if (/\b(code|coding|react|python|javascript|typescript|nextjs|node|bug|error|api|dev|developer|backend|frontend|sql|database|function|github|git|terminal|css|html|algorithm|debug|refactor|pull request|deploy|docker|aws)\b/i.test(lower)) {
        return BOT_CATEGORIES.find((b)=>b.id === "tech") || BOT_CATEGORIES[0];
    }
    // Jobs & Careers
    if (/\b(resume|cv|job|interview|career|recruiter|salary|hiring|cover letter|promotion|internship|linkedin|ats|offer letter|job search|mock interview)\b/i.test(lower)) {
        return BOT_CATEGORIES.find((b)=>b.id === "job") || BOT_CATEGORIES[0];
    }
    // Business & Sales
    if (/\b(business|sales|client|clients|marketing plan|pitch deck|revenue|profit|startup|b2b|pricing|invoice|customer|prospect|crm|deal|conversion)\b/i.test(lower)) {
        return BOT_CATEGORIES.find((b)=>b.id === "business") || BOT_CATEGORIES[0];
    }
    // Creative & Social Media
    if (/\b(reel|reels|tiktok|instagram|caption|viral|youtube|slogan|tagline|creative|copywriting|storyboard|hook|social media|hashtag|script)\b/i.test(lower)) {
        return BOT_CATEGORIES.find((b)=>b.id === "creative") || BOT_CATEGORIES[0];
    }
    // Life & Habits
    if (/\b(routine|habit|habits|productivity|procrastination|morning routine|meditation|focus|workout|sleep|mindset|discipline|daily planner)\b/i.test(lower)) {
        return BOT_CATEGORIES.find((b)=>b.id === "life") || BOT_CATEGORIES[0];
    }
    // General AI default
    return BOT_CATEGORIES.find((b)=>b.id === "general") || BOT_CATEGORIES[0];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/hooks/useAiModels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAiModels",
    ()=>useAiModels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAiModels() {
    _s();
    const [selectedModel, setSelectedModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("auto");
    const [availableModels, setAvailableModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AI_MODELS"]);
    const [isModelModalOpen, setIsModelModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [proactiveBrief, setProactiveBrief] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAiModels.useEffect": ()=>{
            // Fetch live installed models from backend
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai/models").then({
                "useAiModels.useEffect": (res)=>{
                    var _res_data;
                    if ((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.models) && Array.isArray(res.data.models)) {
                        const autoOpt = {
                            id: "auto",
                            name: "Auto Model Router",
                            tag: "auto",
                            size: "Smart",
                            provider: "PingDart AI Orchestrator",
                            status: "online"
                        };
                        setAvailableModels([
                            autoOpt,
                            ...res.data.models
                        ]);
                    }
                }
            }["useAiModels.useEffect"]).catch({
                "useAiModels.useEffect": ()=>{}
            }["useAiModels.useEffect"]);
            // Fetch proactive predictions based on user habits
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai/predictions").then({
                "useAiModels.useEffect": (res)=>{
                    var _res_data;
                    if (res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) {
                        setProactiveBrief(res.data.data);
                    }
                }
            }["useAiModels.useEffect"]).catch({
                "useAiModels.useEffect": ()=>{}
            }["useAiModels.useEffect"]);
        }
    }["useAiModels.useEffect"], []);
    return {
        selectedModel,
        setSelectedModel,
        availableModels,
        isModelModalOpen,
        setIsModelModalOpen,
        proactiveBrief
    };
}
_s(useAiModels, "oJDEJ4gwEqpKawEkS+lYUpS6PWw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/hooks/useAiConversations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAiConversations",
    ()=>useAiConversations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/aiStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAiConversations({ selectedBot, setSelectedBot, onResetChatState, onLoadChatMessages }) {
    _s();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeConvId, setActiveConvId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const previousViewModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("home");
    const [chatlistSearch, setChatlistSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatlistFilter, setChatlistFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const activeConvIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAiConversations.useEffect": ()=>{
            activeConvIdRef.current = activeConvId;
        }
    }["useAiConversations.useEffect"], [
        activeConvId
    ]);
    // Load conversations from local storage / SQLite
    const loadConversations = async ()=>{
        try {
            const list = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].getConversations();
            setConversations(list);
            // On mount / home screen, start fresh without pre-binding to an old chat
            setActiveConvId(null);
            activeConvIdRef.current = null;
            onResetChatState();
        } catch (e) {
            console.warn("[useAiConversations] Failed to load conversations:", e);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAiConversations.useEffect": ()=>{
            loadConversations();
        }
    }["useAiConversations.useEffect"], []);
    // Filter conversations based on persona and search keyword
    const filteredChatlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAiConversations.useMemo[filteredChatlist]": ()=>{
            let list = conversations;
            if (chatlistFilter !== "all") {
                list = list.filter({
                    "useAiConversations.useMemo[filteredChatlist]": (c)=>c.bot === chatlistFilter
                }["useAiConversations.useMemo[filteredChatlist]"]);
            }
            if (chatlistSearch.trim()) {
                const q = chatlistSearch.toLowerCase();
                list = list.filter({
                    "useAiConversations.useMemo[filteredChatlist]": (c)=>c.title.toLowerCase().includes(q) || c.bot.toLowerCase().includes(q) || c.messages && c.messages.some({
                            "useAiConversations.useMemo[filteredChatlist]": (m)=>m.text.toLowerCase().includes(q)
                        }["useAiConversations.useMemo[filteredChatlist]"])
                }["useAiConversations.useMemo[filteredChatlist]"]);
            }
            return list;
        }
    }["useAiConversations.useMemo[filteredChatlist]"], [
        conversations,
        chatlistFilter,
        chatlistSearch
    ]);
    // Group conversations chronologically (Today, Yesterday, Last Week, Older)
    const groupedChatlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAiConversations.useMemo[groupedChatlist]": ()=>{
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000;
            const today = [];
            const yesterday = [];
            const lastWeek = [];
            const older = [];
            filteredChatlist.forEach({
                "useAiConversations.useMemo[groupedChatlist]": (conv)=>{
                    const diff = now - (conv.updatedAt || conv.createdAt);
                    if (diff < oneDay) {
                        today.push(conv);
                    } else if (diff < 2 * oneDay) {
                        yesterday.push(conv);
                    } else if (diff < 7 * oneDay) {
                        lastWeek.push(conv);
                    } else {
                        older.push(conv);
                    }
                }
            }["useAiConversations.useMemo[groupedChatlist]"]);
            return [
                {
                    title: "Today",
                    items: today
                },
                {
                    title: "Yesterday",
                    items: yesterday
                },
                {
                    title: "Last Week",
                    items: lastWeek
                },
                {
                    title: "Older",
                    items: older
                }
            ].filter({
                "useAiConversations.useMemo[groupedChatlist]": (g)=>g.items.length > 0
            }["useAiConversations.useMemo[groupedChatlist]"]);
        }
    }["useAiConversations.useMemo[groupedChatlist]"], [
        filteredChatlist
    ]);
    // Select and resume an existing conversation
    const handleSelectConversation = async (conv)=>{
        setActiveConvId(conv.id);
        activeConvIdRef.current = conv.id;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].setActiveConversationId(conv.id);
        const botMatch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"].find((b)=>b.id === conv.bot) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"][0];
        setSelectedBot(botMatch);
        const cleanMessages = (conv.messages || []).filter((m)=>{
            var _m_text;
            return !((_m_text = m.text) === null || _m_text === void 0 ? void 0 : _m_text.startsWith("👋 Hello! I am your"));
        });
        onLoadChatMessages(cleanMessages);
        setViewMode("chat");
    };
    // Start a fresh, clean conversation (ChatGPT-style)
    const handleStartNewChat = async (botOverride)=>{
        const targetBot = botOverride || selectedBot;
        setActiveConvId(null);
        activeConvIdRef.current = null;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].setActiveConversationId("");
        setSelectedBot(targetBot);
        onResetChatState();
        setViewMode("chat");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Started new ${targetBot.badge} chat`);
    };
    // Switch bot persona
    const handleSelectBot = async (bot)=>{
        setSelectedBot(bot);
        if (viewMode === "home") {
            setActiveConvId(null);
            activeConvIdRef.current = null;
            onResetChatState();
            return;
        }
        await handleStartNewChat(bot);
    };
    // Delete a conversation
    const handleDeleteConversation = async (id, e)=>{
        if (e) e.stopPropagation();
        if (confirm("Delete this conversation?")) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].deleteConversation(id);
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].getConversations();
            setConversations(updated);
            if (activeConvId === id) {
                setActiveConvId(null);
                activeConvIdRef.current = null;
                onResetChatState();
                setViewMode("home");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chat deleted");
        }
    };
    // Toggle pin conversation
    const handleTogglePin = async (id, e)=>{
        if (e) e.stopPropagation();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].togglePinConversation(id);
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].getConversations();
        setConversations(updated);
    };
    // Clear all conversations
    const handleClearAllConversations = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].clearAllConversations();
        setConversations([]);
        setActiveConvId(null);
        activeConvIdRef.current = null;
        onResetChatState();
        setViewMode("home");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("All AI conversations cleared");
    };
    const refreshConversations = async ()=>{
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].getConversations();
        setConversations(updated);
    };
    return {
        conversations,
        activeConvId,
        setActiveConvId,
        activeConvIdRef,
        viewMode,
        setViewMode,
        previousViewModeRef,
        chatlistSearch,
        setChatlistSearch,
        chatlistFilter,
        setChatlistFilter,
        filteredChatlist,
        groupedChatlist,
        isHistoryModalOpen,
        setIsHistoryModalOpen,
        handleSelectConversation,
        handleStartNewChat,
        handleSelectBot,
        handleDeleteConversation,
        handleTogglePin,
        handleClearAllConversations,
        refreshConversations
    };
}
_s(useAiConversations, "oZCkbUVI7dpJaaks0ejEMzX6LBU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/hooks/useAiChat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAiChat",
    ()=>useAiChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/aiStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function useAiChat({ selectedBot, setSelectedBot, selectedModel, activeConvId, setActiveConvId, activeConvIdRef, viewMode, setViewMode, onConversationUpdated }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [speakingId, setSpeakingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoVoiceReply, setAutoVoiceReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const displayedLengthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isStreamActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const currentAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoVoiceReplyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const voiceModeUsedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const activeUtteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ttsWatchdogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep autoVoiceReplyRef synchronized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAiChat.useEffect": ()=>{
            autoVoiceReplyRef.current = autoVoiceReply;
        }
    }["useAiChat.useEffect"], [
        autoVoiceReply
    ]);
    // Auto-scroll to bottom on new messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAiChat.useEffect": ()=>{
            var _chatEndRef_current;
            (_chatEndRef_current = chatEndRef.current) === null || _chatEndRef_current === void 0 ? void 0 : _chatEndRef_current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["useAiChat.useEffect"], [
        messages,
        isGenerating
    ]);
    // Auth token helper
    const getActiveAuthToken = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const savedAuth = localStorage.getItem("pingdart-auth");
            if (savedAuth) {
                var _parsed_state;
                const parsed = JSON.parse(savedAuth);
                if (parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : _parsed_state.accessToken) return parsed.state.accessToken;
            }
        } catch (e) {}
        return localStorage.getItem("access_token") || localStorage.getItem("token");
    };
    // Fluid Typewriter Queue
    const startTypewriter = (botMsgId, modelUsed, toolsExecuted, routingReason, targetConvId)=>{
        if (typingTimerRef.current) return;
        typingTimerRef.current = setInterval(()=>{
            const target = targetBufferRef.current;
            let curLen = displayedLengthRef.current;
            if (curLen < target.length) {
                const diff = target.length - curLen;
                const step = diff > 80 ? 6 : diff > 30 ? 4 : diff > 10 ? 2 : 1;
                curLen = Math.min(target.length, curLen + step);
                displayedLengthRef.current = curLen;
                const slice = target.slice(0, curLen);
                setMessages((prev)=>{
                    const idx = prev.findIndex((m)=>m.id === botMsgId);
                    const currentMsg = {
                        id: botMsgId,
                        sender: "bot",
                        text: slice,
                        timestamp: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        modelUsed,
                        toolsExecuted,
                        routingReason
                    };
                    if (idx !== -1) {
                        const copy = [
                            ...prev
                        ];
                        copy[idx] = currentMsg;
                        return copy;
                    }
                    return [
                        ...prev,
                        currentMsg
                    ];
                });
            } else if (!isStreamActiveRef.current) {
                if (typingTimerRef.current) {
                    clearInterval(typingTimerRef.current);
                    typingTimerRef.current = null;
                }
                setIsGenerating(false);
                // Auto Voice Reply: If enabled or user used voice input
                if (autoVoiceReplyRef.current || voiceModeUsedRef.current) {
                    voiceModeUsedRef.current = false;
                    setTimeout(()=>{
                        speakText(botMsgId, target);
                    }, 250);
                }
                if (targetConvId) {
                    const finalMsg = {
                        id: botMsgId,
                        sender: "bot",
                        text: target,
                        timestamp: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        modelUsed,
                        toolsExecuted,
                        routingReason
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].saveMessageToConversation(targetConvId, finalMsg).then(()=>{
                        onConversationUpdated();
                    });
                }
            }
        }, 18);
    };
    // Send message function with SSE streaming and automatic new chat isolation
    const sendMessage = async (textToSend, isVoiceInput = false)=>{
        // If mic was listening, stop it
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (_) {}
            setIsListening(false);
        }
        if (isVoiceInput) {
            voiceModeUsedRef.current = true;
        }
        const text = (textToSend || inputText).trim();
        if (!text || isGenerating) return;
        let convId = activeConvId;
        let isBrandNew = false;
        let targetBot = selectedBot;
        // If starting from home screen, or if activeConvId is null, ALWAYS create a brand new conversation!
        if (!convId || viewMode === "home") {
            isBrandNew = true;
            // Smart Auto Category: If starting from General, detect if query fits a specialist domain
            if (selectedBot.id === "general") {
                const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBotCategory"])(text);
                if (detected.id !== selectedBot.id) {
                    targetBot = detected;
                    if (setSelectedBot) {
                        setSelectedBot(detected);
                    }
                }
            }
            const formattedTitle = text.slice(0, 32);
            const newTitle = formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);
            const freshConv = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].createNewConversation(targetBot.id, newTitle);
            convId = freshConv.id;
            setActiveConvId(convId);
            activeConvIdRef.current = convId;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].setActiveConversationId(convId);
        } else {
            activeConvIdRef.current = convId;
        }
        const userMsg = {
            id: `usr_${Date.now()}`,
            sender: "user",
            text,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
        if (isBrandNew) {
            setMessages([
                userMsg
            ]);
        } else {
            setMessages((prev)=>[
                    ...prev,
                    userMsg
                ]);
        }
        setInputText("");
        setIsGenerating(true);
        setViewMode("chat");
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiStorage"].saveMessageToConversation(convId, userMsg);
        onConversationUpdated();
        const botMsgId = `bot_${Date.now()}`;
        targetBufferRef.current = "";
        displayedLengthRef.current = 0;
        isStreamActiveRef.current = true;
        let modelUsed = selectedModel === "auto" ? "Ollama Cluster" : selectedModel;
        let toolsExecuted = [];
        let routingReason = "";
        startTypewriter(botMsgId, modelUsed, toolsExecuted, routingReason, convId);
        try {
            const token = getActiveAuthToken();
            const streamUrl = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])()}/ai/chat/stream`;
            const response = await fetch(streamUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "text/event-stream",
                    ...token ? {
                        Authorization: `Bearer ${token}`
                    } : {}
                },
                body: JSON.stringify({
                    message: text,
                    model: selectedModel,
                    persona: targetBot.id,
                    context: {
                        botName: targetBot.name,
                        badge: targetBot.badge
                    }
                })
            });
            if (response.ok && response.body) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    buffer += decoder.decode(value, {
                        stream: true
                    });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";
                    for (const line of lines){
                        const trimmed = line.trim();
                        if (!trimmed.startsWith("data:")) continue;
                        const jsonStr = trimmed.replace(/^data:\s*/, "");
                        if (!jsonStr) continue;
                        try {
                            const data = JSON.parse(jsonStr);
                            if (data.type === "meta") {
                                if (data.model_used) modelUsed = data.model_used;
                                if (data.routing_reason) routingReason = data.routing_reason;
                            } else if (data.type === "token") {
                                targetBufferRef.current += data.token;
                            } else if (data.type === "done") {
                                if (data.response && !targetBufferRef.current) {
                                    targetBufferRef.current = data.response;
                                }
                            }
                        } catch (e) {
                        // Ignore non-json lines
                        }
                    }
                }
            }
            if (!targetBufferRef.current.trim()) {
                if (targetBot.id === "general") {
                    targetBufferRef.current = `✨ **${targetBot.name}**:\nRegarding "${text}": Here is a comprehensive overview. I can assist with answering questions, analyzing websites, or helping you organize your workflow.`;
                } else if (targetBot.id === "job") {
                    targetBufferRef.current = `🎯 **${targetBot.name} Advice**:\nFor "${text}", key strategies include highlighting quantifiable metrics, tailoring your experiences to target keywords, and practicing the STAR method (Situation, Task, Action, Result).`;
                } else if (targetBot.id === "business") {
                    targetBufferRef.current = `🏢 **${targetBot.name} Insights**:\nHere is your business action plan for "${text}": Focus on your unique value proposition, leverage targeted outreach, and measure customer acquisition cost (CAC) vs lifetime value (LTV).`;
                } else if (targetBot.id === "tech") {
                    targetBufferRef.current = `💻 **${targetBot.name} Technical Guide**:\nRegarding "${text}": Ensure clean modular code architecture, handle edge-case exceptions gracefully, and implement efficient state updates.`;
                } else if (targetBot.id === "creative") {
                    targetBufferRef.current = `🎨 **${targetBot.name} Concept**:\nFor "${text}": Use a strong 3-second hook, deliver high value in under 30 seconds, and end with a clear Call to Action (CTA)!`;
                } else {
                    targetBufferRef.current = `🧠 **${targetBot.name} Coaching**:\nTo succeed with "${text}": Break the goal down into 15-minute daily micro-habits, eliminate distractions, and track your momentum!`;
                }
            }
        } catch (err) {
            console.warn("AI Bot streaming request failed, falling back to standard API", err);
            try {
                var _fallbackRes_data_data, _fallbackRes_data;
                const fallbackRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai/chat", {
                    message: text,
                    model: selectedModel,
                    persona: targetBot.id,
                    context: {
                        botName: targetBot.name,
                        badge: targetBot.badge
                    }
                }).catch(()=>null);
                let botReply = fallbackRes === null || fallbackRes === void 0 ? void 0 : (_fallbackRes_data = fallbackRes.data) === null || _fallbackRes_data === void 0 ? void 0 : (_fallbackRes_data_data = _fallbackRes_data.data) === null || _fallbackRes_data_data === void 0 ? void 0 : _fallbackRes_data_data.response;
                if (!botReply) {
                    botReply = `🤖 [${targetBot.name}]: I processed your request for "${text}". Ready for your next query!`;
                }
                targetBufferRef.current = botReply;
            } catch (fbErr) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to connect to AI Bot engine.");
                targetBufferRef.current = "Connection error. Please ensure AI service is reachable.";
            }
        } finally{
            isStreamActiveRef.current = false;
        }
    };
    const copyToClipboard = (id, text)=>{
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Copied to clipboard!");
        setTimeout(()=>setCopiedId(null), 2000);
    };
    const speakText = (id, text)=>{
        if (!text || !text.trim()) return;
        const cleanText = text.replace(/[*#_`>~]/g, "").replace(/\[.*?\]\(.*?\)/g, "").replace(/\n+/g, " ").trim();
        // Cancel existing audio / watchdog
        if (ttsWatchdogRef.current) {
            clearTimeout(ttsWatchdogRef.current);
            ttsWatchdogRef.current = null;
        }
        if (currentAudioRef.current) {
            try {
                currentAudioRef.current.pause();
            } catch (_) {}
            currentAudioRef.current = null;
        }
        if (speakingId === id) {
            if ("object" !== "undefined" && "speechSynthesis" in window) {
                try {
                    window.speechSynthesis.cancel();
                } catch (_) {}
            }
            activeUtteranceRef.current = null;
            setSpeakingId(null);
            return;
        }
        setSpeakingId(id);
        if ("object" !== "undefined" && "speechSynthesis" in window && window.speechSynthesis) {
            try {
                if (window.speechSynthesis.paused) {
                    window.speechSynthesis.resume();
                }
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                }
                const utterance = new SpeechSynthesisUtterance(cleanText);
                // CRITICAL for Android: keep reference alive to prevent V8 garbage-collecting the utterance
                activeUtteranceRef.current = utterance;
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                utterance.lang = "en-US";
                const voices = window.speechSynthesis.getVoices();
                if (voices && voices.length > 0) {
                    const enVoice = voices.find((v)=>(v.lang.startsWith("en") || v.default) && !v.name.includes("Network"));
                    if (enVoice) utterance.voice = enVoice;
                }
                let hasStarted = false;
                utterance.onstart = ()=>{
                    hasStarted = true;
                    if (ttsWatchdogRef.current) {
                        clearTimeout(ttsWatchdogRef.current);
                        ttsWatchdogRef.current = null;
                    }
                    setSpeakingId(id);
                };
                utterance.onend = ()=>{
                    activeUtteranceRef.current = null;
                    setSpeakingId(null);
                };
                utterance.onerror = (e)=>{
                    console.warn("[TTS SpeechSynthesis error]", e);
                    activeUtteranceRef.current = null;
                    fallbackAudioSpeech(id, cleanText);
                };
                // Watchdog: If Android WebView fails to fire onstart within 1200ms, use HTML5 audio fallback
                ttsWatchdogRef.current = setTimeout(()=>{
                    if (!hasStarted) {
                        console.warn("[TTS Watchdog] speechSynthesis timed out, switching to audio fallback");
                        try {
                            window.speechSynthesis.cancel();
                        } catch (_) {}
                        activeUtteranceRef.current = null;
                        fallbackAudioSpeech(id, cleanText);
                    }
                }, 1200);
                window.speechSynthesis.speak(utterance);
                return;
            } catch (err) {
                console.warn("[TTS SpeechSynthesis exception]", err);
            }
        }
        fallbackAudioSpeech(id, cleanText);
    };
    const fallbackAudioSpeech = (id, cleanText)=>{
        try {
            if (currentAudioRef.current) {
                try {
                    currentAudioRef.current.pause();
                } catch (_) {}
                currentAudioRef.current = null;
            }
            // Speak the first 180 characters cleanly
            const firstSentence = cleanText.split(/[.!?\n]/).filter((s)=>s.trim().length > 0)[0] || cleanText.substring(0, 180);
            const spokenPart = (firstSentence.length > 180 ? firstSentence.substring(0, 180) : firstSentence).trim();
            const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(spokenPart)}&tl=en&client=tw-ob`;
            const audio = new Audio(ttsUrl);
            currentAudioRef.current = audio;
            audio.onended = ()=>{
                currentAudioRef.current = null;
                setSpeakingId(null);
            };
            audio.onerror = ()=>{
                currentAudioRef.current = null;
                setSpeakingId(null);
            };
            audio.play().then(()=>{
                setSpeakingId(id);
            }).catch(()=>{
                setSpeakingId(null);
            });
        } catch (_) {
            setSpeakingId(null);
        }
    };
    const resetMessages = ()=>{
        setMessages([]);
        setInputText("");
        setIsGenerating(false);
    };
    const toggleVoiceInput = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Speech recognition is not supported in this browser/device.");
            return;
        }
        if (isListening) {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (_) {}
            }
            setIsListening(false);
            return;
        }
        // Stop speaking if currently playing TTS
        if (speakingId) {
            if ("object" !== "undefined" && "speechSynthesis" in window) {
                try {
                    window.speechSynthesis.cancel();
                } catch (_) {}
            }
            if (currentAudioRef.current) {
                currentAudioRef.current.pause();
                currentAudioRef.current = null;
            }
            setSpeakingId(null);
        }
        try {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.lang = "en-US";
            recognition.onstart = ()=>{
                setIsListening(true);
                voiceModeUsedRef.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Listening... Speak now! 🎙️");
            };
            recognition.onresult = (event)=>{
                let transcript = "";
                for(let i = 0; i < event.results.length; i++){
                    transcript += event.results[i][0].transcript;
                }
                if (transcript) {
                    setInputText(transcript);
                }
            };
            recognition.onerror = (event)=>{
                console.warn("[SpeechRecognition error]", event);
                setIsListening(false);
                if (event.error !== "no-speech") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Microphone: " + (event.error || "Could not capture audio"));
                }
            };
            recognition.onend = ()=>{
                setIsListening(false);
            };
            recognitionRef.current = recognition;
            recognition.start();
        } catch (err) {
            console.warn("[SpeechRecognition exception]", err);
            setIsListening(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Could not start microphone.");
        }
    };
    const toggleAutoVoiceReply = ()=>{
        setAutoVoiceReply((prev)=>{
            const next = !prev;
            if (!next && speakingId) {
                if ("object" !== "undefined" && "speechSynthesis" in window) {
                    try {
                        window.speechSynthesis.cancel();
                    } catch (_) {}
                }
                if (currentAudioRef.current) {
                    currentAudioRef.current.pause();
                    currentAudioRef.current = null;
                }
                setSpeakingId(null);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(next ? "AI Voice Reply turned ON 🔊" : "AI Voice Reply turned OFF 🔇");
            return next;
        });
    };
    return {
        messages,
        setMessages,
        inputText,
        setInputText,
        isGenerating,
        copiedId,
        speakingId,
        isListening,
        autoVoiceReply,
        setAutoVoiceReply,
        toggleVoiceInput,
        toggleAutoVoiceReply,
        chatEndRef,
        sendMessage,
        copyToClipboard,
        speakText,
        resetMessages
    };
}
_s(useAiChat, "/tl4jzjRNfd4rQNq2suyGak3boM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiHeader",
    ()=>AiHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
;
;
;
function AiHeader({ viewMode, selectedBot, conversationsCount, selectedModel, activeChatTitle, onBack, onStartNewChat, onOpenModelModal }) {
    const displayTitle = viewMode === "chatlist" ? "AI Conversations" : viewMode === "chat" ? activeChatTitle || selectedBot.name : "AI Assistant";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-lg shrink-0 pb-3.5 px-3 mb-1",
        style: {
            paddingTop: "max(calc(env(safe-area-inset-top, 0px) + 0rem), 0rem)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-xs shrink-0 cursor-pointer",
                            title: "Back",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 p-1 flex items-center justify-center shadow-md shrink-0",
                            children: viewMode === "chatlist" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                size: 17,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this) : viewMode === "chat" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(selectedBot.icon, {
                                size: 17,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain01Icon"], {
                                size: 17,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xs sm:text-sm font-bold text-white tracking-tight truncate leading-snug",
                                    title: displayTitle,
                                    children: displayTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-blue-100/90 font-medium truncate flex items-center gap-1 leading-none mt-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: viewMode === "chat" ? activeChatTitle ? `${selectedBot.name} • Ready` : "Online • Ready" : viewMode === "chatlist" ? `${conversationsCount} saved chats` : "Smart Multi-Agent Platform"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 shrink-0",
                    children: [
                        (viewMode === "chat" || viewMode === "chatlist") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onStartNewChat,
                            className: "flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white text-[10px] font-bold transition-all shadow-xs cursor-pointer shrink-0",
                            title: "Start New Chat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "New"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onOpenModelModal,
                            className: "flex items-center gap-1 bg-emerald-500/25 hover:bg-emerald-500/35 active:scale-95 text-emerald-200 border border-emerald-400/40 px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase backdrop-blur-md transition-all cursor-pointer shadow-xs shrink-0",
                            title: "Select Ollama / AI Model",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate max-w-[46px] sm:max-w-[60px]",
                                    children: selectedModel === "auto" ? "Ollama" : selectedModel.split(":")[0].replace("-", " ")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] opacity-75",
                                    children: "▼"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onOpenModelModal,
                            className: "w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition-all shadow-xs cursor-pointer border border-white/20 shrink-0",
                            title: "AI Settings",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiHeader.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = AiHeader;
var _c;
__turbopack_context__.k.register(_c, "AiHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiCategoryBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiCategoryBar",
    ()=>AiCategoryBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
;
;
function AiCategoryBar({ selectedBot, onSelectBot }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-[#111827] border-b border-[#e9edef] dark:border-[#202c33] p-2 px-3 flex gap-2 overflow-x-auto shrink-0 no-scrollbar shadow-xs",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"].map((bot)=>{
            const Icon = bot.icon;
            const isSelected = selectedBot.id === bot.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelectBot(bot),
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 border ${isSelected ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-sm" : "bg-[#f0f2f5] dark:bg-[#1a2332] hover:bg-gray-200 dark:hover:bg-[#202c33] border-transparent text-[#54656f] dark:text-[#a0abb2]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiCategoryBar.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: bot.badge
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiCategoryBar.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                ]
            }, bot.id, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiCategoryBar.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiCategoryBar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = AiCategoryBar;
var _c;
__turbopack_context__.k.register(_c, "AiCategoryBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiHomeScreen",
    ()=>AiHomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
;
;
function AiHomeScreen({ selectedBot, inputText, setInputText, conversations, isListening, onToggleVoiceInput, onSendMessage, onSelectConversation, onOpenChatlist, proactiveBrief }) {
    var _proactiveBrief_stats, _proactiveBrief_summary;
    const BotIcon = selectedBot.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto px-4 pt-3 flex flex-col items-center bg-[#f0f2f5] dark:bg-[#0b141a] custom-scrollbar",
        style: {
            paddingBottom: "max(calc(env(safe-area-inset-bottom, 0px) + 2rem), 4.75rem)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md mx-auto flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-1 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-500/20 mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotIcon, {
                                size: 30
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-black text-[#111b21] dark:text-white",
                            children: selectedBot.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#54656f] dark:text-[#a0abb2] font-medium max-w-xs mx-auto",
                            children: selectedBot.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                proactiveBrief && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gradient-to-br from-blue-50/90 to-indigo-50/60 dark:from-[#132030] dark:to-[#17263c] border border-blue-200/80 dark:border-blue-800/60 rounded-2xl p-3.5 mb-3 shadow-sm text-left backdrop-blur-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 15,
                                            className: "text-blue-600 dark:text-blue-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-black text-slate-800 dark:text-slate-100",
                                            children: proactiveBrief.greeting || "Workspace Daily Brief"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                ((_proactiveBrief_stats = proactiveBrief.stats) === null || _proactiveBrief_stats === void 0 ? void 0 : _proactiveBrief_stats.last_seo_score) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50",
                                    children: [
                                        "SEO: ",
                                        proactiveBrief.stats.last_seo_score,
                                        "/100"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[11px] text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed mb-2.5",
                            children: (_proactiveBrief_summary = proactiveBrief.summary) === null || _proactiveBrief_summary === void 0 ? void 0 : _proactiveBrief_summary.replace(/^(Good Morning!.*|Good Afternoon!.*|Good Evening!.*)\n\n/, "")
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        proactiveBrief.suggested_focus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-2 border-t border-blue-100 dark:border-blue-800/40 text-[11px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400 font-medium",
                                    children: "Recommended Focus:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSendMessage(proactiveBrief.suggested_focus),
                                    className: "font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: proactiveBrief.suggested_focus
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-white dark:bg-[#1a2332] rounded-[22px] p-2 pl-4 flex items-center gap-2 border border-gray-300 dark:border-gray-700 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition-all mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: isListening ? "Listening... speak now 🎙️" : `Ask ${selectedBot.name}...`,
                            value: inputText,
                            onChange: (e)=>setInputText(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" && inputText.trim()) {
                                    onSendMessage();
                                }
                            },
                            className: "flex-1 bg-transparent text-sm font-medium text-[#111b21] dark:text-white placeholder-gray-400 py-1.5 outline-none min-w-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        onToggleVoiceInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onToggleVoiceInput,
                            className: `w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95 ${isListening ? "bg-rose-500 text-white animate-pulse ring-4 ring-rose-500/30 shadow-md" : "text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800"}`,
                            title: isListening ? "Listening... (Tap to stop)" : "Speak to Chat (Voice Input)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                size: 17,
                                className: isListening ? "animate-bounce" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSendMessage(),
                            disabled: !inputText.trim(),
                            className: "w-10 h-10 rounded-[16px] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-90 disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm active:scale-95",
                            title: "Send Message",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1.5 justify-center w-full mb-5",
                    children: selectedBot.prompts.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSendMessage(p),
                            className: "px-3 py-1.5 rounded-full bg-white dark:bg-[#1a2332] border border-gray-200 dark:border-gray-700/80 text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-2xs transition-all cursor-pointer active:scale-95",
                            children: [
                                "💡 ",
                                p
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full space-y-2 pt-3 border-t border-gray-200/80 dark:border-gray-800/80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        "Recent Chats"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                conversations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onOpenChatlist,
                                    className: "text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer",
                                    children: "+ More"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 rounded-2xl bg-white/70 dark:bg-[#1a2332]/70 border border-gray-200/60 dark:border-gray-800/60 text-center text-xs text-gray-400",
                            children: "No recent chats yet. Type a question above!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                conversations.slice(0, 4).map((conv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onSelectConversation(conv),
                                        className: "p-3 rounded-2xl bg-white dark:bg-[#1a2332] hover:bg-blue-50/60 dark:hover:bg-[#202c33] border border-gray-200/80 dark:border-gray-800/80 flex items-center justify-between cursor-pointer transition-all shadow-2xs group active:scale-[0.99]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-bold text-gray-800 dark:text-gray-100 truncate",
                                                                children: conv.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-400 truncate",
                                                                children: [
                                                                    conv.bot.toUpperCase(),
                                                                    " •",
                                                                    " ",
                                                                    new Date(conv.updatedAt || conv.createdAt).toLocaleTimeString([], {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit"
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 15,
                                                className: "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, conv.id, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onOpenChatlist,
                                    className: "w-full py-2.5 rounded-2xl bg-white dark:bg-[#1a2332] hover:bg-blue-50 dark:hover:bg-slate-800 border border-dashed border-blue-300 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs active:scale-[0.99] mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "+ More Chats (",
                                                conversations.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full shrink-0 pointer-events-none",
                    style: {
                        height: "max(calc(env(safe-area-inset-bottom, 0px) + 2rem), 5rem)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = AiHomeScreen;
var _c;
__turbopack_context__.k.register(_c, "AiHomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiChatlistScreen",
    ()=>AiChatlistScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
;
;
;
function AiChatlistScreen({ conversations, groupedChatlist, chatlistSearch, setChatlistSearch, chatlistFilter, setChatlistFilter, onSelectConversation, onStartNewChat, onTogglePin, onDeleteConversation }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col bg-[#f0f2f5] dark:bg-[#0b141a] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-white dark:bg-[#111827] border-b border-gray-200/80 dark:border-gray-800 shrink-0 space-y-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 15,
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: chatlistSearch,
                                onChange: (e)=>setChatlistSearch(e.target.value),
                                placeholder: "Search AI conversations...",
                                className: "w-full pl-9 pr-8 py-2 bg-[#f0f2f5] dark:bg-[#1a2332] border border-gray-200 dark:border-gray-700/80 rounded-xl text-xs font-medium text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            chatlistSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setChatlistSearch(""),
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setChatlistFilter("all"),
                                className: `px-3 py-1 rounded-full text-[11px] font-bold shrink-0 transition-all cursor-pointer border ${chatlistFilter === "all" ? "bg-blue-600 text-white border-blue-600 shadow-xs" : "bg-[#f0f2f5] dark:bg-[#1a2332] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700/60 hover:bg-gray-200"}`,
                                children: [
                                    "All (",
                                    conversations.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"].map((b)=>{
                                const count = conversations.filter((c)=>c.bot === b.id).length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setChatlistFilter(b.id),
                                    className: `px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 transition-all cursor-pointer border flex items-center gap-1 ${chatlistFilter === b.id ? "bg-blue-600 text-white border-blue-600 shadow-xs" : "bg-[#f0f2f5] dark:bg-[#1a2332] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700/60 hover:bg-gray-200"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: b.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-70 text-[9px]",
                                            children: [
                                                "(",
                                                count,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                            lineNumber: 79,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, b.id, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3 space-y-3.5 custom-scrollbar",
                style: {
                    paddingBottom: "max(calc(env(safe-area-inset-bottom, 0px) + 2rem), 4.75rem)"
                },
                children: [
                    conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-gray-800 dark:text-gray-200",
                                children: "No AI Conversations Yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 max-w-xs mx-auto",
                                children: "Start asking questions to your AI assistants to build your history."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStartNewChat,
                                className: "px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer",
                                children: "Start New Chat"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this) : groupedChatlist.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 text-xs text-gray-400",
                        children: [
                            'No conversations match "',
                            chatlistSearch,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this) : groupedChatlist.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 px-1 text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 11
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: group.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: group.items.map((conv)=>{
                                        var _conv_messages;
                                        const botMatch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"].find((b)=>b.id === conv.bot) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"][0];
                                        const BotIcon = botMatch.icon;
                                        const lastMsg = conv.messages && conv.messages.length > 0 ? conv.messages[conv.messages.length - 1].text.replace(/[*#_`]/g, "").trim() : "New conversation";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>onSelectConversation(conv),
                                            className: "p-3 rounded-2xl bg-white dark:bg-[#1a2332] hover:bg-blue-50/50 dark:hover:bg-[#202c33] border border-gray-200/80 dark:border-gray-800/80 flex items-center justify-between gap-2.5 cursor-pointer transition-all shadow-2xs group active:scale-[0.99]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-9 h-9 rounded-xl bg-gradient-to-br ${botMatch.color} text-white flex items-center justify-center shrink-0 shadow-xs`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotIcon, {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-xs font-bold text-gray-900 dark:text-gray-100 truncate flex-1",
                                                                            children: conv.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 shrink-0",
                                                                            children: botMatch.badge
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                            lineNumber: 153,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5",
                                                                    children: lastMsg
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[10px] text-gray-400 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: new Date(conv.updatedAt || conv.createdAt).toLocaleTimeString([], {
                                                                                hour: "2-digit",
                                                                                minute: "2-digit"
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                            lineNumber: 161,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                ((_conv_messages = conv.messages) === null || _conv_messages === void 0 ? void 0 : _conv_messages.length) || 0,
                                                                                " messages"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>onTogglePin(conv.id, e),
                                                            className: `p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer ${conv.isPinned ? "text-amber-500" : "text-gray-300 dark:text-gray-600"}`,
                                                            title: conv.isPinned ? "Unpin" : "Pin",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                size: 13,
                                                                className: conv.isPinned ? "fill-amber-500" : ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>onDeleteConversation(conv.id, e),
                                                            className: "p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 text-gray-300 dark:text-gray-600 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer",
                                                            title: "Delete chat",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            size: 15,
                                                            className: "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, conv.id, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                            lineNumber: 136,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, group.title, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full shrink-0 pointer-events-none",
                        style: {
                            height: "max(calc(env(safe-area-inset-bottom, 0px) + 2rem), 5rem)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = AiChatlistScreen;
var _c;
__turbopack_context__.k.register(_c, "AiChatlistScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiMarkdownMessage",
    ()=>AiMarkdownMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function AiMarkdownMessage({ content }) {
    _s();
    const [copiedIndex, setCopiedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCopyCode = (code, idx)=>{
        navigator.clipboard.writeText(code);
        setCopiedIndex(idx);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Code copied to clipboard!");
        setTimeout(()=>setCopiedIndex(null), 2000);
    };
    // Helper to parse inline formatting: **bold**, `code`, *italic*
    const renderInlineFormattedText = (text)=>{
        // Regex matches `inline code`, **bold**, *italic*
        const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
        const parts = text.split(regex);
        return parts.map((part, i)=>{
            if (!part) return null;
            if (part.startsWith("`") && part.endsWith("`") && part.length > 1) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "px-1.5 py-0.5 mx-0.5 text-[11px] font-mono rounded-md bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60",
                    children: part.slice(1, -1)
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this);
            }
            if (part.startsWith("**") && part.endsWith("**") && part.length > 3) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "font-bold text-gray-900 dark:text-white",
                    children: part.slice(2, -2)
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this);
            }
            if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    className: "italic text-gray-700 dark:text-gray-300",
                    children: part.slice(1, -1)
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this);
            }
            return part;
        });
    };
    // Split content into blocks (code blocks, headers, bullet lists, paragraphs)
    const renderBlocks = ()=>{
        // Split by code blocks first
        const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
        const elements = [];
        let lastIndex = 0;
        let match;
        let blockCounter = 0;
        while((match = codeBlockRegex.exec(content)) !== null){
            // Text before code block
            if (match.index > lastIndex) {
                const textChunk = content.substring(lastIndex, match.index);
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: renderTextBlock(textChunk)
                }, `text-${blockCounter++}`, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this));
            }
            // Code Block
            const language = match[1] || "code";
            const codeSnippet = match[2].trim();
            const currentBlockIdx = blockCounter++;
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-3 rounded-xl overflow-hidden border border-slate-700/60 bg-[#161b22] text-slate-100 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-3.5 py-1.5 bg-[#0d1117] border-b border-slate-800 text-[11px] font-mono text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "uppercase font-bold tracking-wider text-[10px] text-blue-400",
                                children: language
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCopyCode(codeSnippet, currentBlockIdx),
                                className: "flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[10px]",
                                children: copiedIndex === currentBlockIdx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 12,
                                            className: "text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-400",
                                            children: "Copied"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Copy code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "p-3.5 overflow-x-auto text-[11px] font-mono leading-relaxed text-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            children: codeSnippet
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, `code-${currentBlockIdx}`, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this));
            lastIndex = match.index + match[0].length;
        }
        // Trailing text after last code block
        if (lastIndex < content.length) {
            const remaining = content.substring(lastIndex);
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: renderTextBlock(remaining)
            }, `text-end`, false, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this));
        }
        return elements;
    };
    // Parses text block with headers, bullet lists, bold sectional titles, and paragraphs
    const renderTextBlock = (text)=>{
        const lines = text.split("\n");
        const rendered = [];
        for(let i = 0; i < lines.length; i++){
            const line = lines[i];
            const trimmed = line.trim();
            if (!trimmed) {
                // Blank line spacing
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1"
                }, `blank-${i}`, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 146,
                    columnNumber: 23
                }, this));
                continue;
            }
            // Markdown Headers (###, ##, #)
            if (trimmed.startsWith("### ")) {
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-xs font-black text-gray-900 dark:text-white pt-2 pb-0.5",
                    children: renderInlineFormattedText(trimmed.replace(/^###\s+/, ""))
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this));
                continue;
            }
            if (trimmed.startsWith("## ")) {
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-black text-gray-900 dark:text-white pt-2.5 pb-1",
                    children: renderInlineFormattedText(trimmed.replace(/^##\s+/, ""))
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this));
                continue;
            }
            if (trimmed.startsWith("# ")) {
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-black text-gray-900 dark:text-white pt-3 pb-1",
                    children: renderInlineFormattedText(trimmed.replace(/^#\s+/, ""))
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this));
                continue;
            }
            // Standalone Bold Section Headings e.g. **Step 1: Plan Your PHP App**
            if (/^\*\*[^*]+\*\*:?$/.test(trimmed)) {
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2 pb-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-black text-blue-600 dark:text-blue-400 tracking-tight",
                        children: trimmed.replace(/\*\*/g, "")
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this));
                continue;
            }
            // Bullet Points (* Item or - Item)
            if (/^(\*|-)\s+/.test(trimmed)) {
                const bulletText = trimmed.replace(/^(\*|-)\s+/, "");
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 pl-1 py-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs leading-relaxed text-gray-800 dark:text-gray-200 flex-1",
                            children: renderInlineFormattedText(bulletText)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this));
                continue;
            }
            // Numbered List Items (1. Item)
            const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
            if (numMatch) {
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 pl-1 py-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-blue-600 dark:text-blue-400 shrink-0 min-w-[16px]",
                            children: [
                                numMatch[1],
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs leading-relaxed text-gray-800 dark:text-gray-200 flex-1",
                            children: renderInlineFormattedText(numMatch[2])
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this));
                continue;
            }
            // Regular paragraph text
            rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs leading-relaxed text-gray-800 dark:text-gray-200",
                children: renderInlineFormattedText(line)
            }, i, false, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this));
        }
        return rendered;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: renderBlocks()
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx",
        lineNumber: 231,
        columnNumber: 10
    }, this);
}
_s(AiMarkdownMessage, "vmguM15Tqrzn4pZ8KoXNjtu9s9w=");
_c = AiMarkdownMessage;
var _c;
__turbopack_context__.k.register(_c, "AiMarkdownMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiActiveChatView",
    ()=>AiActiveChatView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeOffIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Copy01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiMarkdownMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx [app-client] (ecmascript)");
;
;
;
function AiActiveChatView({ selectedBot, messages, inputText, setInputText, isGenerating, copiedId, speakingId, chatEndRef, isListening, onToggleVoiceInput, autoVoiceReply, onToggleAutoVoiceReply, onSendMessage, onCopyToClipboard, onSpeakText }) {
    const BotIcon = selectedBot.icon;
    const filteredMessages = messages.filter((m)=>{
        var _m_text;
        return !((_m_text = m.text) === null || _m_text === void 0 ? void 0 : _m_text.startsWith("👋 Hello! I am your"));
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col bg-[#f8fafc] dark:bg-[#0b141a] overflow-hidden min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 flex flex-col",
                children: [
                    filteredMessages.length === 0 && !isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center justify-center p-4 text-center space-y-4 my-auto animate-in fade-in zoom-in-95 duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-16 h-16 rounded-3xl bg-gradient-to-br ${selectedBot.color} text-white flex items-center justify-center shadow-xl shadow-blue-500/20`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotIcon, {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 max-w-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-black text-gray-900 dark:text-white",
                                        children: selectedBot.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 font-medium",
                                        children: selectedBot.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-sm space-y-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black uppercase tracking-wider text-gray-400 block",
                                        children: "Suggested questions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: selectedBot.prompts.map((prompt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSendMessage(prompt),
                                                className: "w-full p-2.5 rounded-2xl bg-white dark:bg-[#1a2332] hover:bg-blue-50/60 dark:hover:bg-[#202c33] border border-gray-200/80 dark:border-gray-800 text-left text-xs font-medium text-gray-700 dark:text-gray-200 shadow-2xs hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer flex items-center gap-2 group active:scale-[0.99]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "💡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400",
                                                        children: prompt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    filteredMessages.map((msg)=>{
                        if (msg.sender === "user") {
                            return /* User Query Bubble */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end pl-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[85%] rounded-[20px] rounded-tr-xs p-3.5 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs leading-relaxed font-medium whitespace-pre-wrap",
                                            children: msg.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-blue-200/80 text-right font-medium pt-0.5",
                                            children: msg.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            }, msg.id, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this);
                        }
                        /* Bot Response Bubble */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2.5 justify-start pr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-7 h-7 rounded-xl bg-gradient-to-br ${selectedBot.color} text-white flex items-center justify-center shrink-0 shadow-2xs mt-0.5`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotIcon, {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[90%] rounded-[20px] rounded-tl-xs p-4 bg-white dark:bg-[#1e293b] border border-gray-200/80 dark:border-slate-800 text-[#111b21] dark:text-[#f1f5f9] shadow-xs space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2 pb-1 border-b border-gray-100 dark:border-slate-800 text-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 font-bold text-gray-700 dark:text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: selectedBot.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300 dark:text-slate-600",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-blue-600 dark:text-blue-400 font-semibold",
                                                            children: msg.modelUsed || "Ollama Cluster"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs leading-relaxed",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiMarkdownMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiMarkdownMessage"], {
                                                content: msg.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: msg.toolsExecuted && msg.toolsExecuted.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-[10px]",
                                                        children: [
                                                            "⚡ ",
                                                            msg.toolsExecuted.length,
                                                            " tools executed"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onCopyToClipboard(msg.id, msg.text),
                                                            className: "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer",
                                                            title: "Copy response",
                                                            children: copiedId === msg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                size: 14,
                                                                className: "text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onSpeakText(msg.id, msg.text),
                                                            className: "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer",
                                                            title: "Speak aloud",
                                                            children: speakingId === msg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeOffIcon"], {
                                                                size: 14,
                                                                className: "text-rose-500 animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this);
                    }),
                    isGenerating && !filteredMessages.some((m)=>{
                        var _filteredMessages_;
                        return m.sender === "bot" && m.id.startsWith("bot_") && m.text.length > 0 && ((_filteredMessages_ = filteredMessages[filteredMessages.length - 1]) === null || _filteredMessages_ === void 0 ? void 0 : _filteredMessages_.id) === m.id;
                    }) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2.5 justify-start items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-7 h-7 rounded-xl bg-gradient-to-br ${selectedBot.color} text-white flex items-center justify-center shrink-0 animate-pulse shadow-xs`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotIcon, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#1e293b] border border-gray-200/80 dark:border-slate-800 rounded-full px-4 py-2 text-xs text-blue-600 dark:text-blue-400 flex items-center gap-2 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                        size: 15,
                                        className: "animate-spin text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: [
                                            selectedBot.name,
                                            " is formulating response..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: chatEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-white dark:bg-[#111827] border-t border-gray-200/80 dark:border-gray-800/80 shrink-0",
                style: {
                    paddingBottom: "calc(0rem + env(safe-area-inset-bottom, 0px))"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto flex items-center gap-2 bg-[#f1f5f9] dark:bg-[#1a2332] border border-gray-300/80 dark:border-gray-700/80 rounded-[24px] px-3.5 py-1.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: isListening ? "Listening... speak now 🎙️" : `Message ${selectedBot.name}...`,
                            value: inputText,
                            onChange: (e)=>setInputText(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" && inputText.trim()) {
                                    onSendMessage();
                                }
                            },
                            disabled: isGenerating,
                            className: "flex-1 bg-transparent border-none outline-none text-xs font-medium text-[#111b21] dark:text-white placeholder-gray-400 py-1.5 min-w-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        onToggleAutoVoiceReply && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onToggleAutoVoiceReply,
                            className: `p-1.5 rounded-full transition-all cursor-pointer shrink-0 ${autoVoiceReply ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`,
                            title: autoVoiceReply ? "AI Voice Reply is ON (Click to mute)" : "AI Voice Reply is OFF (Click to unmute)",
                            children: autoVoiceReply ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                size: 15,
                                className: speakingId ? "text-blue-600 animate-pulse" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 246,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeOffIcon"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 248,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this),
                        onToggleVoiceInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onToggleVoiceInput,
                            className: `w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95 ${isListening ? "bg-rose-500 text-white animate-pulse ring-4 ring-rose-500/30 shadow-md" : "text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800"}`,
                            title: isListening ? "Listening... (Tap to stop)" : "Speak to Chat (Voice Input)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                size: 16,
                                className: isListening ? "animate-bounce" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSendMessage(),
                            disabled: isGenerating || !inputText.trim(),
                            className: "w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-90 disabled:opacity-30 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm active:scale-95",
                            title: "Send Message",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = AiActiveChatView;
var _c;
__turbopack_context__.k.register(_c, "AiActiveChatView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiSettingsModal",
    ()=>AiSettingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
;
;
function AiSettingsModal({ isOpen, onClose, selectedModel, setSelectedModel, availableModels, onClearAllHistory }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full sm:max-w-md bg-white dark:bg-[#111827] rounded-t-[28px] sm:rounded-[24px] border border-slate-200 dark:border-slate-800 shadow-2xl p-5 space-y-4 max-h-[88vh] flex flex-col animate-in slide-in-from-bottom duration-200",
            style: {
                paddingBottom: "max(calc(env(safe-area-inset-bottom, 0px) + 1.25rem), 3.5rem)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-black text-slate-900 dark:text-white",
                                            children: "AI Assistant Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-400 font-medium",
                                            children: "Model Engine, Memory & Data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 transition-colors cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto space-y-4 pr-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Ollama Local Engine Connected"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
                                    children: "Port 11434"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1",
                                    children: "Active AI Model"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                availableModels.map((m)=>{
                                    const isSelected = selectedModel === m.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setSelectedModel(m.id);
                                            onClose();
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Active Model: ${m.name}`);
                                        },
                                        className: `p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${isSelected ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 shadow-xs" : "bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${isSelected ? "bg-indigo-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`,
                                                        children: m.id === "auto" ? "⚡" : "🦙"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                                        children: m.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
                                                                        children: m.size || "Local"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-400 dark:text-slate-500 truncate",
                                                                children: m.id === "auto" ? "Auto-selects optimal model per task" : m.provider || "Ollama (Local)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shrink-0 shadow-xs",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1",
                                    children: "Features & Intelligence"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 14,
                                                    className: "text-emerald-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-slate-800 dark:text-slate-200 text-[11px]",
                                                            children: "RAG Memory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: "SQLite Vector Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 14,
                                                    className: "text-emerald-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-slate-800 dark:text-slate-200 text-[11px]",
                                                            children: "Streaming"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: "0ms Real-Time Pipelined"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-slate-100 dark:border-slate-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: async ()=>{
                                    if (window.confirm("Are you sure you want to delete all AI conversation history? This cannot be undone.")) {
                                        await onClearAllHistory();
                                        onClose();
                                    }
                                },
                                className: "w-full py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-800/60 text-rose-600 dark:text-rose-400 text-xs font-bold transition-all cursor-pointer shadow-2xs",
                                children: "Clear All Conversation History"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-1 text-[11px] text-center text-slate-400 shrink-0",
                    children: "Private local inference • Zero external cloud exposure"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = AiSettingsModal;
var _c;
__turbopack_context__.k.register(_c, "AiSettingsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiDesktopLayout",
    ()=>AiDesktopLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeOffIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Copy01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiMarkdownMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiMarkdownMessage.tsx [app-client] (ecmascript)");
;
;
;
;
;
function AiDesktopLayout({ selectedBot, onSelectBot, messages, inputText, setInputText, isGenerating, copiedId, speakingId, chatEndRef, selectedModel, conversations, isListening, onToggleVoiceInput, autoVoiceReply, onToggleAutoVoiceReply, onSendMessage, onStartNewChat, onOpenHistoryModal, onOpenModelModal, onClearChat, onCopyToClipboard, onSpeakText, proactiveBrief }) {
    var _proactiveBrief_stats, _proactiveBrief_summary;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 shrink-0 bg-white dark:bg-[#111827] border-r border-slate-200/80 dark:border-slate-800 flex flex-col h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-[8px] bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-black text-slate-900 dark:text-white tracking-tight leading-tight",
                                                children: "AI Assistants"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-slate-400 font-semibold",
                                                children: "Specialized AI personas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClearChat,
                                className: "p-1.5 rounded-[8px] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer",
                                title: "Reset conversation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-3 space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-2 pt-1 pb-1.5 text-[14px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                children: "Select Expert Persona"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"].map((bot)=>{
                                const Icon = bot.icon;
                                const isSelected = selectedBot.id === bot.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelectBot(bot),
                                    className: `p-3 rounded-[10px] transition-all cursor-pointer border flex items-start gap-3 group ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60 shadow-xs" : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-9 h-9 rounded-[8px] bg-gradient-to-br ${bot.color} text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: `text-xs font-bold truncate leading-tight ${isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-slate-900 dark:text-white"}`,
                                                            children: bot.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-[4px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
                                                            children: bot.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-slate-400 dark:text-slate-500 truncate mt-0.5 font-medium",
                                                    children: bot.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, bot.id, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[14px] text-slate-500 font-semibold px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                    size: 13,
                                    className: "text-indigo-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Powered by PingDart Gemini AI Engine"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0 bg-[#f0f2f5] dark:bg-[#0b141a] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-14 px-6 bg-white dark:bg-[#111827] border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between shrink-0 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-8 h-8 rounded-[8px] bg-gradient-to-br ${selectedBot.color} text-white flex items-center justify-center shadow-xs shrink-0`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(selectedBot.icon, {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-black text-slate-900 dark:text-white tracking-tight leading-tight truncate flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: selectedBot.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-[4px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40",
                                                        children: "Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-slate-400 font-medium truncate",
                                                children: selectedBot.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOpenModelModal,
                                        className: "px-3 py-1.5 rounded-[8px] bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
                                        title: "Select AI Model",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Model:",
                                                    " ",
                                                    selectedModel === "auto" ? "Ollama Auto" : selectedModel.split(":")[0].replace("-", " ")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] opacity-75",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStartNewChat,
                                        className: "px-3 py-1.5 rounded-[8px] bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "New Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOpenHistoryModal,
                                        className: "px-3 py-1.5 rounded-[8px] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "History (",
                                                    conversations.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClearChat,
                                        className: "px-3 py-1.5 rounded-[8px] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto space-y-4",
                            children: [
                                messages.length === 0 && proactiveBrief && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-gradient-to-br from-blue-50/90 to-indigo-50/60 dark:from-[#132030] dark:to-[#17263c] border border-blue-200/80 dark:border-blue-800/60 rounded-2xl p-5 mb-4 shadow-sm text-left backdrop-blur-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                            size: 16,
                                                            className: "text-blue-600 dark:text-blue-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-black text-slate-800 dark:text-slate-100",
                                                            children: proactiveBrief.greeting || "Workspace Daily Brief"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                ((_proactiveBrief_stats = proactiveBrief.stats) === null || _proactiveBrief_stats === void 0 ? void 0 : _proactiveBrief_stats.last_seo_score) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50",
                                                    children: [
                                                        "SEO: ",
                                                        proactiveBrief.stats.last_seo_score,
                                                        "/100"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed mb-3",
                                            children: (_proactiveBrief_summary = proactiveBrief.summary) === null || _proactiveBrief_summary === void 0 ? void 0 : _proactiveBrief_summary.replace(/^(Good Morning!.*|Good Afternoon!.*|Good Evening!.*)\n\n/, "")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        proactiveBrief.suggested_focus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-2.5 border-t border-blue-100 dark:border-blue-800/40 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500 dark:text-slate-400 font-medium",
                                                    children: "Recommended Focus:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onSendMessage(proactiveBrief.suggested_focus),
                                                    className: "font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: proactiveBrief.suggested_focus
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[85%] rounded-[10px] p-4 space-y-2.5 text-xs leading-relaxed shadow-xs ${msg.sender === "user" ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white" : "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100"}`,
                                            children: [
                                                msg.sender === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "whitespace-pre-wrap font-medium leading-relaxed",
                                                    children: msg.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiMarkdownMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiMarkdownMessage"], {
                                                    content: msg.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-2 text-[14px] opacity-70 border-t border-slate-100 dark:border-slate-800 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: msg.timestamp
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this),
                                                        msg.sender === "bot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>onCopyToClipboard(msg.id, msg.text),
                                                                    className: "p-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer",
                                                                    title: "Copy response",
                                                                    children: copiedId === msg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                        size: 14,
                                                                        className: "text-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>onSpeakText(msg.id, msg.text),
                                                                    className: "p-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer",
                                                                    title: "Read aloud",
                                                                    children: speakingId === msg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeOffIcon"], {
                                                                        size: 14,
                                                                        className: "text-rose-500 animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    }, msg.id, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)),
                                isGenerating && !messages.some((m)=>{
                                    var _messages_;
                                    return m.sender === "bot" && m.id.startsWith("bot_") && m.text.length > 0 && ((_messages_ = messages[messages.length - 1]) === null || _messages_ === void 0 ? void 0 : _messages_.id) === m.id;
                                }) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 rounded-[10px] p-3.5 text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-2 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                size: 16,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    selectedBot.name,
                                                    " is generating response..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 307,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 306,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: chatEndRef
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-2.5 bg-white dark:bg-[#111827] border-t border-slate-200/80 dark:border-slate-800 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[14px] font-black uppercase text-slate-400 shrink-0",
                                    children: "Prompts:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                selectedBot.prompts.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onSendMessage(p),
                                        disabled: isGenerating,
                                        className: "px-3 py-1 rounded-[6px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors cursor-pointer font-medium whitespace-nowrap shrink-0",
                                        children: [
                                            "💡 ",
                                            p
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-white dark:bg-[#111827] border-t border-slate-200/80 dark:border-slate-800 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-[10px] px-3 py-1.5 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: isListening ? "Listening... speak now 🎙️" : `Ask ${selectedBot.name}... (Press Enter to send)`,
                                    value: inputText,
                                    onChange: (e)=>setInputText(e.target.value),
                                    onKeyDown: (e)=>e.key === "Enter" && onSendMessage(),
                                    disabled: isGenerating,
                                    className: "flex-1 bg-transparent border-none outline-none text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 py-1.5 min-w-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                onToggleAutoVoiceReply && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggleAutoVoiceReply,
                                    className: `p-1.5 rounded-md transition-all cursor-pointer shrink-0 ${autoVoiceReply ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`,
                                    title: autoVoiceReply ? "AI Voice Reply is ON (Click to mute)" : "AI Voice Reply is OFF (Click to turn on)",
                                    children: autoVoiceReply ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                        size: 15,
                                        className: speakingId ? "text-indigo-600 animate-pulse" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 364,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeOffIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeOffIcon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 366,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                onToggleVoiceInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggleVoiceInput,
                                    className: `p-1.5 rounded-md flex items-center justify-center transition-all cursor-pointer shrink-0 ${isListening ? "bg-rose-500 text-white animate-pulse shadow-xs ring-2 ring-rose-400" : "text-slate-400 hover:text-indigo-600 hover:bg-slate-200 dark:hover:bg-slate-700"}`,
                                    title: isListening ? "Listening... (Tap to stop)" : "Speak to Chat (Voice Input)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                        size: 15,
                                        className: isListening ? "animate-bounce" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSendMessage(),
                                    disabled: isGenerating || !inputText.trim(),
                                    className: "px-3.5 py-2 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 disabled:opacity-40 text-white text-xs font-bold transition-all cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden xl:flex w-72 shrink-0 bg-white dark:bg-[#111827] border-l border-slate-200/80 dark:border-slate-800 flex-col h-full p-4 space-y-4 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-12 h-12 rounded-[10px] bg-gradient-to-br ${selectedBot.color} text-white flex items-center justify-center shadow-md`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(selectedBot.icon, {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black text-slate-900 dark:text-white",
                                        children: selectedBot.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500 font-medium mt-0.5",
                                        children: selectedBot.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-slate-200 dark:border-slate-700/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
                                        children: "AI Expertise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-snug",
                                        children: selectedBot.systemPrompt
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[14px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500",
                                children: "Suggested Prompts"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: selectedBot.prompts.map((prompt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onSendMessage(prompt),
                                        className: "p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer",
                                        children: prompt
                                    }, idx, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-[14px] text-slate-400 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                        size: 12,
                                        className: "text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0ms Instant Stream Response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                        size: 12,
                                        className: "text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Text-to-Speech Audio Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = AiDesktopLayout;
var _c;
__turbopack_context__.k.register(_c, "AiDesktopLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiVoiceChatModal",
    ()=>AiVoiceChatModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Moon02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SUPPORTED_LANGUAGES = [
    {
        code: "auto",
        name: "Auto Detect",
        flag: "🌐"
    },
    {
        code: "en-US",
        name: "English (US)",
        flag: "🇺🇸"
    },
    {
        code: "en-IN",
        name: "English (India)",
        flag: "🇮🇳"
    },
    {
        code: "hi-IN",
        name: "Hindi (हिंदी)",
        flag: "🇮🇳"
    },
    {
        code: "te-IN",
        name: "Telugu (తెలుగు)",
        flag: "🇮🇳"
    },
    {
        code: "ta-IN",
        name: "Tamil (தமிழ்)",
        flag: "🇮🇳"
    },
    {
        code: "es-ES",
        name: "Spanish (Español)",
        flag: "🇪🇸"
    },
    {
        code: "fr-FR",
        name: "French (Français)",
        flag: "🇫🇷"
    },
    {
        code: "de-DE",
        name: "German (Deutsch)",
        flag: "🇩🇪"
    },
    {
        code: "ar-SA",
        name: "Arabic (العربية)",
        flag: "🇸🇦"
    },
    {
        code: "zh-CN",
        name: "Chinese (中文)",
        flag: "🇨🇳"
    },
    {
        code: "pt-BR",
        name: "Portuguese",
        flag: "🇧🇷"
    },
    {
        code: "ja-JP",
        name: "Japanese (日本語)",
        flag: "🇯🇵"
    }
];
function AiVoiceChatModal({ isOpen, onClose, selectedBot, messages, isGenerating, speakingId, onSendMessage, onSpeakText }) {
    _s();
    // Theme state: DEFAULT is "light" as requested by user!
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AiVoiceChatModal.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("pingdart_voice_theme");
                if (saved === "dark" || saved === "light") return saved;
            }
            return "light";
        }
    }["AiVoiceChatModal.useState"]);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("auto");
    const [isLangDropdownOpen, setIsLangDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [interimTranscript, setInterimTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastUserSpoken, setLastUserSpoken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isGeneratingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isGenerating);
    const speakingIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(speakingId);
    const toggleTheme = ()=>{
        setTheme((prev)=>{
            const next = prev === "light" ? "dark" : "light";
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("pingdart_voice_theme", next);
            }
            return next;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiVoiceChatModal.useEffect": ()=>{
            isGeneratingRef.current = isGenerating;
        }
    }["AiVoiceChatModal.useEffect"], [
        isGenerating
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiVoiceChatModal.useEffect": ()=>{
            speakingIdRef.current = speakingId;
        }
    }["AiVoiceChatModal.useEffect"], [
        speakingId
    ]);
    // Determine current active mode
    const isSpeaking = Boolean(speakingId);
    const isThinking = isGenerating && !isSpeaking;
    // Most recent messages
    const lastBotMsg = [
        ...messages
    ].reverse().find((m)=>m.sender === "bot");
    const lastUserMsg = [
        ...messages
    ].reverse().find((m)=>m.sender === "user");
    // Track last spoken bot message to prevent duplicate audio playback
    const lastSpokenBotMsgIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Automatically speak AI response when generation completes in voice mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiVoiceChatModal.useEffect": ()=>{
            if (!isOpen || !lastBotMsg || !lastBotMsg.text) return;
            if (!isGenerating && lastBotMsg.id !== lastSpokenBotMsgIdRef.current) {
                lastSpokenBotMsgIdRef.current = lastBotMsg.id;
                const timer = setTimeout({
                    "AiVoiceChatModal.useEffect.timer": ()=>{
                        onSpeakText(lastBotMsg.id, lastBotMsg.text);
                    }
                }["AiVoiceChatModal.useEffect.timer"], 150);
                return ({
                    "AiVoiceChatModal.useEffect": ()=>clearTimeout(timer)
                })["AiVoiceChatModal.useEffect"];
            }
        }
    }["AiVoiceChatModal.useEffect"], [
        isOpen,
        lastBotMsg === null || lastBotMsg === void 0 ? void 0 : lastBotMsg.id,
        lastBotMsg === null || lastBotMsg === void 0 ? void 0 : lastBotMsg.text,
        isGenerating,
        onSpeakText
    ]);
    // Continuous conversation loop: automatically start listening once AI finishes speaking
    const wasSpeakingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiVoiceChatModal.useEffect": ()=>{
            if (!isOpen) return;
            if (wasSpeakingRef.current && !isSpeaking && !isGenerating) {
                const timer = setTimeout({
                    "AiVoiceChatModal.useEffect.timer": ()=>{
                        startListening();
                    }
                }["AiVoiceChatModal.useEffect.timer"], 350);
                return ({
                    "AiVoiceChatModal.useEffect": ()=>clearTimeout(timer)
                })["AiVoiceChatModal.useEffect"];
            }
            wasSpeakingRef.current = isSpeaking;
        }
    }["AiVoiceChatModal.useEffect"], [
        isOpen,
        isSpeaking,
        isGenerating
    ]);
    // Initialize Speech Recognition
    const startListening = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Speech recognition is not supported in this browser.");
            return;
        }
        // Stop speaking if currently playing TTS
        if (speakingId) {
            if ("object" !== "undefined" && "speechSynthesis" in window) {
                try {
                    window.speechSynthesis.cancel();
                } catch (_) {}
            }
        }
        try {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.abort();
                } catch (_) {}
            }
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;
            // Set language
            if (selectedLanguage === "auto") {
                recognition.lang = typeof navigator !== "undefined" && navigator.language ? navigator.language : "en-US";
            } else {
                recognition.lang = selectedLanguage;
            }
            recognition.onstart = ()=>{
                setIsListening(true);
                setInterimTranscript("");
            };
            recognition.onresult = (event)=>{
                let full = "";
                for(let i = 0; i < event.results.length; i++){
                    full += event.results[i][0].transcript;
                }
                setInterimTranscript(full);
                // Check if final result received
                const isFinal = event.results[event.results.length - 1].isFinal;
                if (isFinal && full.trim()) {
                    setLastUserSpoken(full.trim());
                    setInterimTranscript("");
                    setIsListening(false);
                    // Send message immediately to AI service & background chat history
                    onSendMessage(full.trim());
                }
            };
            recognition.onerror = (event)=>{
                console.warn("[VoiceModal SpeechRecognition error]", event);
                setIsListening(false);
                if (event.error !== "no-speech" && event.error !== "aborted") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Microphone: ${event.error || "Capture failed"}`);
                }
            };
            recognition.onend = ()=>{
                setIsListening(false);
            };
            recognitionRef.current = recognition;
            recognition.start();
        } catch (err) {
            console.warn("[VoiceModal SpeechRecognition start failed]", err);
            setIsListening(false);
        }
    };
    const stopListening = ()=>{
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (_) {}
        }
        setIsListening(false);
    };
    const toggleListening = ()=>{
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };
    // Start listening automatically when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiVoiceChatModal.useEffect": ()=>{
            if (isOpen) {
                const timer = setTimeout({
                    "AiVoiceChatModal.useEffect.timer": ()=>{
                        startListening();
                    }
                }["AiVoiceChatModal.useEffect.timer"], 350);
                return ({
                    "AiVoiceChatModal.useEffect": ()=>{
                        clearTimeout(timer);
                        stopListening();
                        if ("object" !== "undefined" && window.speechSynthesis) {
                            try {
                                window.speechSynthesis.cancel();
                            } catch (_) {}
                        }
                    }
                })["AiVoiceChatModal.useEffect"];
            }
        }
    }["AiVoiceChatModal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    const currentLangObj = SUPPORTED_LANGUAGES.find((l)=>l.code === selectedLanguage) || SUPPORTED_LANGUAGES[0];
    const isLight = theme === "light";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[300] flex flex-col items-center justify-between animate-in fade-in duration-200 overflow-hidden select-none transition-colors ${isLight ? "bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900" : "bg-gradient-to-b from-slate-950 via-[#070d18] to-slate-950 text-white"}`,
        children: [
            isLight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/15 blur-[90px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-indigo-400/15 blur-[100px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xl mx-auto px-4 pb-3 flex items-center justify-between z-10",
                style: {
                    paddingTop: "max(calc(env(safe-area-inset-top, 0px) + 0.75rem), 2.25rem)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-9 h-9 rounded-2xl bg-gradient-to-br ${selectedBot.color} text-white flex items-center justify-center shadow-lg shadow-blue-500/20`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(selectedBot.icon, {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-xs sm:text-sm font-black tracking-tight flex items-center gap-1.5 ${isLight ? "text-slate-900" : "text-white"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedBot.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[10px] font-semibold flex items-center gap-1 ${isLight ? "text-slate-500" : "text-blue-200/70"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Voice Mode • Auto Saving to Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: `w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 ${isLight ? "bg-white/90 hover:bg-white text-amber-500 border border-slate-300/80" : "bg-white/10 hover:bg-white/20 text-yellow-300 border border-white/15"}`,
                                title: isLight ? "Switch to Dark Mode" : "Switch to Light Mode",
                                children: isLight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 320,
                                    columnNumber: 24
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Moon02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Moon02Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 320,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsLangDropdownOpen(!isLangDropdownOpen),
                                        className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer shadow-xs active:scale-95 ${isLight ? "bg-white/90 hover:bg-white border border-slate-300/80 text-slate-700" : "bg-white/10 hover:bg-white/20 border border-white/15 text-blue-100 backdrop-blur-md"}`,
                                        title: "Change Voice Language",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: currentLangObj.flag
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "max-w-[65px] sm:max-w-[75px] truncate",
                                                children: currentLangObj.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] opacity-70",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    isLangDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute right-0 top-full mt-1.5 w-44 max-h-56 overflow-y-auto rounded-2xl shadow-2xl p-1 z-30 space-y-0.5 animate-in fade-in zoom-in-95 ${isLight ? "bg-white/95 border border-slate-200 text-slate-800" : "bg-slate-900/95 border border-slate-700/80 text-white backdrop-blur-xl"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-2.5 py-1 text-[10px] font-black uppercase tracking-wider border-b ${isLight ? "text-slate-400 border-slate-100" : "text-slate-400 border-slate-800"}`,
                                                children: "Select Language"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            SUPPORTED_LANGUAGES.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedLanguage(lang.code);
                                                        setIsLangDropdownOpen(false);
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Language switched to ${lang.name}`);
                                                        if (isListening) {
                                                            stopListening();
                                                            setTimeout(()=>startListening(), 200);
                                                        }
                                                    },
                                                    className: `w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${selectedLanguage === lang.code ? "bg-blue-600 text-white shadow-xs" : isLight ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-slate-800/80 hover:text-white"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: lang.flag
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: lang.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, lang.code, true, {
                                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    stopListening();
                                    if ("object" !== "undefined" && window.speechSynthesis) {
                                        try {
                                            window.speechSynthesis.cancel();
                                        } catch (_) {}
                                    }
                                    onClose();
                                },
                                className: `w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 ${isLight ? "bg-white/90 hover:bg-white border border-slate-300/80 text-slate-700" : "bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md"}`,
                                title: "Return to Chat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 w-full max-w-xl mx-auto flex flex-col items-center justify-center px-6 text-center z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative my-6 flex items-center justify-center",
                        children: [
                            isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-56 h-56 rounded-full border pointer-events-none animate-ping ${isLight ? "border-rose-500/30" : "border-rose-500/25"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-44 h-44 rounded-full pointer-events-none animate-pulse ${isLight ? "bg-rose-500/15" : "bg-rose-500/10"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-36 h-36 rounded-full border-2 animate-spin pointer-events-none [animation-duration:6s] ${isLight ? "border-rose-500/50" : "border-rose-400/40"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-56 h-56 rounded-full border pointer-events-none animate-pulse ${isLight ? "border-blue-500/40" : "border-blue-500/30"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-44 h-44 rounded-full pointer-events-none animate-ping [animation-duration:2.5s] ${isLight ? "bg-blue-500/20" : "bg-indigo-500/15"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-36 h-36 rounded-full border-2 animate-spin pointer-events-none [animation-duration:8s] ${isLight ? "border-blue-600/60" : "border-blue-400/50"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            isThinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-44 h-44 rounded-full border-2 border-dashed animate-spin pointer-events-none [animation-duration:4s] ${isLight ? "border-amber-500/50" : "border-amber-400/40"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute w-36 h-36 rounded-full pointer-events-none animate-pulse ${isLight ? "bg-amber-500/15" : "bg-amber-500/10"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleListening,
                                className: `relative w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer active:scale-95 ${isListening ? "bg-gradient-to-tr from-rose-600 via-pink-600 to-rose-500 shadow-rose-500/50 ring-8 ring-rose-400/30 scale-105" : isSpeaking ? "bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 shadow-blue-500/50 ring-8 ring-blue-400/30 scale-105" : isThinking ? "bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 shadow-amber-500/40 ring-6 ring-amber-400/30 animate-pulse" : isLight ? "bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 border-2 border-white/50 hover:scale-105 shadow-blue-500/30 ring-4 ring-blue-200/50" : "bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 border-2 border-white/20 hover:border-blue-400 hover:scale-105 shadow-black/50"}`,
                                title: isListening ? "Tap to pause listening" : "Tap to speak",
                                children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                        size: 38,
                                        className: "text-white animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 482,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this) : isSpeaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                        size: 38,
                                        className: "text-white animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this) : isThinking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                    size: 36,
                                    className: "text-white animate-spin [animation-duration:3s]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                    size: 36,
                                    className: "text-white transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs ${isListening ? isLight ? "bg-rose-100 border border-rose-300 text-rose-700 animate-pulse" : "bg-rose-500/20 border border-rose-400/40 text-rose-300 animate-pulse" : isSpeaking ? isLight ? "bg-blue-100 border border-blue-300 text-blue-700" : "bg-blue-500/20 border border-blue-400/40 text-blue-300" : isThinking ? isLight ? "bg-amber-100 border border-amber-300 text-amber-700 animate-pulse" : "bg-amber-500/20 border border-amber-400/40 text-amber-300 animate-pulse" : isLight ? "bg-white border border-slate-300/80 text-slate-700" : "bg-white/10 border border-white/15 text-slate-300"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-2 h-2 rounded-full ${isListening ? "bg-rose-500 animate-ping" : isSpeaking ? "bg-blue-500 animate-pulse" : isThinking ? "bg-amber-500 animate-spin" : "bg-slate-400"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isListening ? "Listening... Speak in any language" : isSpeaking ? `${selectedBot.name} is Speaking` : isThinking ? "Processing your thoughts..." : "Tap orb to speak"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full max-w-md rounded-2xl p-4 shadow-xl space-y-2.5 text-left min-h-[110px] max-h-[160px] overflow-y-auto transition-colors ${isLight ? "bg-white/95 border border-slate-200/90 shadow-slate-200/60 text-slate-800" : "bg-white/5 border border-white/10 text-white backdrop-blur-md"}`,
                        children: [
                            (interimTranscript || lastUserSpoken || lastUserMsg) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-black uppercase tracking-wider ${isLight ? "text-blue-600" : "text-blue-400"}`,
                                        children: "You Spoke:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs leading-relaxed font-medium ${isLight ? "text-slate-900" : "text-white/95"}`,
                                        children: interimTranscript ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `italic ${isLight ? "text-rose-600" : "text-rose-200"}`,
                                            children: [
                                                interimTranscript,
                                                " ..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, this) : lastUserSpoken ? lastUserSpoken : lastUserMsg === null || lastUserMsg === void 0 ? void 0 : lastUserMsg.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 550,
                                columnNumber: 13
                            }, this),
                            lastBotMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `space-y-0.5 pt-1.5 border-t ${isLight ? "border-slate-100" : "border-white/10"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${isLight ? "text-emerald-700" : "text-emerald-400"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    selectedBot.name,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 588,
                                                columnNumber: 17
                                            }, this),
                                            isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                                size: 11,
                                                className: "animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                                lineNumber: 589,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs leading-relaxed font-normal line-clamp-3 ${isLight ? "text-slate-700" : "text-blue-100/90"}`,
                                        children: lastBotMsg.text.replace(/[*#_]/g, "")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this),
                            !interimTranscript && !lastUserSpoken && !lastUserMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs italic text-center py-4 ${isLight ? "text-slate-500" : "text-slate-400"}`,
                                children: "Speak anything! Your voice will automatically be transcribed and saved to your chat history."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 602,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xl mx-auto px-6 pt-2 flex items-center justify-between z-10",
                style: {
                    paddingBottom: "max(calc(env(safe-area-inset-bottom, 0px) + 1.25rem), 4rem)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleListening,
                        className: `px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer ${isListening ? "bg-rose-600 hover:bg-rose-700 text-white" : isLight ? "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 shadow-xs" : "bg-white/10 hover:bg-white/20 text-white border border-white/15"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                size: 16,
                                className: isListening ? "animate-bounce" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isListening ? "Pause Listening" : "Start Speaking"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            stopListening();
                            if ("object" !== "undefined" && window.speechSynthesis) {
                                try {
                                    window.speechSynthesis.cancel();
                                } catch (_) {}
                            }
                            onClose();
                        },
                        className: "px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View Text Chat"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
                lineNumber: 614,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(AiVoiceChatModal, "O9vicDjgfhvDJCDzzuvZN8qBQKA=");
_c = AiVoiceChatModal;
var _c;
__turbopack_context__.k.register(_c, "AiVoiceChatModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/AiBotScreen.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiBotScreen",
    ()=>AiBotScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$AiConversationsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/AiConversationsModal.tsx [app-client] (ecmascript)");
// Modular AI Architecture
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/hooks/useAiModels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/hooks/useAiConversations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/hooks/useAiChat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiCategoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiCategoryBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiHomeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiHomeScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiChatlistScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiChatlistScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiActiveChatView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiActiveChatView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiSettingsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiDesktopLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiDesktopLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiVoiceChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/components/AiVoiceChatModal.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
function AiBotScreen({ onBack }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [selectedBot, setSelectedBot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"][0]);
    const [isVoiceModalOpen, setIsVoiceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // AI Model Engine & Installed Local Models
    const { selectedModel, setSelectedModel, availableModels, isModelModalOpen, setIsModelModalOpen, proactiveBrief } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAiModels"])();
    // Chat History & ChatGPT-style Conversations Management
    const conversationsManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAiConversations"])({
        selectedBot,
        setSelectedBot,
        onResetChatState: {
            "AiBotScreen.useAiConversations[conversationsManager]": ()=>chatManager.resetMessages()
        }["AiBotScreen.useAiConversations[conversationsManager]"],
        onLoadChatMessages: {
            "AiBotScreen.useAiConversations[conversationsManager]": (msgs)=>chatManager.setMessages(msgs)
        }["AiBotScreen.useAiConversations[conversationsManager]"]
    });
    // Real-time Streaming, Fluid Typewriter, & Audio TTS
    const chatManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAiChat"])({
        selectedBot,
        setSelectedBot,
        selectedModel,
        activeConvId: conversationsManager.activeConvId,
        setActiveConvId: conversationsManager.setActiveConvId,
        activeConvIdRef: conversationsManager.activeConvIdRef,
        viewMode: conversationsManager.viewMode,
        setViewMode: conversationsManager.setViewMode,
        onConversationUpdated: {
            "AiBotScreen.useAiChat[chatManager]": ()=>conversationsManager.refreshConversations()
        }["AiBotScreen.useAiChat[chatManager]"]
    });
    // Reset current conversation
    const handleClearChat = async ()=>{
        if (conversationsManager.activeConvId) {
            await conversationsManager.handleDeleteConversation(conversationsManager.activeConvId);
        }
        await conversationsManager.handleStartNewChat(selectedBot);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Conversation reset ✨");
    };
    // Back Navigation Handler
    const handleBackNavigation = ()=>{
        if (conversationsManager.viewMode === "chat") {
            conversationsManager.setViewMode(conversationsManager.previousViewModeRef.current || "home");
            conversationsManager.setActiveConvId(null);
            conversationsManager.activeConvIdRef.current = null;
            chatManager.resetMessages();
        } else if (conversationsManager.viewMode === "chatlist") {
            conversationsManager.setViewMode("home");
        } else if (onBack) {
            onBack();
        }
    };
    // Current active conversation title
    const activeConversation = conversationsManager.conversations.find((c)=>c.id === conversationsManager.activeConvId);
    const activeChatTitle = activeConversation === null || activeConversation === void 0 ? void 0 : activeConversation.title;
    // Open interactive voice chat screen
    const handleOpenVoiceChat = ()=>{
        if (conversationsManager.viewMode === "home") {
            conversationsManager.previousViewModeRef.current = "home";
            conversationsManager.setViewMode("chat");
        }
        setIsVoiceModalOpen(true);
    };
    // ════════════════════════════════════════════════════════════════════════
    // 1. MOBILE NATIVE VIEW (Optimized for Android & iOS App)
    // ════════════════════════════════════════════════════════════════════════
    if (isNative || isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 w-full h-full flex flex-col bg-white dark:bg-[#111827] text-[#111b21] dark:text-[#e9edef] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiHeader"], {
                    viewMode: conversationsManager.viewMode,
                    selectedBot: selectedBot,
                    conversationsCount: conversationsManager.conversations.length,
                    selectedModel: selectedModel,
                    activeChatTitle: activeChatTitle,
                    onBack: handleBackNavigation,
                    onStartNewChat: ()=>conversationsManager.handleStartNewChat(),
                    onOpenModelModal: ()=>setIsModelModalOpen(true)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                conversationsManager.viewMode === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiCategoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiCategoryBar"], {
                    selectedBot: selectedBot,
                    onSelectBot: conversationsManager.handleSelectBot
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this),
                conversationsManager.viewMode === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiHomeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiHomeScreen"], {
                    selectedBot: selectedBot,
                    inputText: chatManager.inputText,
                    setInputText: chatManager.setInputText,
                    conversations: conversationsManager.conversations,
                    isListening: chatManager.isListening,
                    onToggleVoiceInput: handleOpenVoiceChat,
                    onSendMessage: (text)=>{
                        conversationsManager.previousViewModeRef.current = "home";
                        chatManager.sendMessage(text);
                    },
                    onSelectConversation: (conv)=>{
                        conversationsManager.previousViewModeRef.current = "home";
                        conversationsManager.handleSelectConversation(conv);
                    },
                    onOpenChatlist: ()=>{
                        conversationsManager.previousViewModeRef.current = "home";
                        conversationsManager.setViewMode("chatlist");
                    },
                    proactiveBrief: proactiveBrief
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this) : conversationsManager.viewMode === "chatlist" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiChatlistScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiChatlistScreen"], {
                    conversations: conversationsManager.conversations,
                    groupedChatlist: conversationsManager.groupedChatlist,
                    chatlistSearch: conversationsManager.chatlistSearch,
                    setChatlistSearch: conversationsManager.setChatlistSearch,
                    chatlistFilter: conversationsManager.chatlistFilter,
                    setChatlistFilter: conversationsManager.setChatlistFilter,
                    onSelectConversation: (conv)=>{
                        conversationsManager.previousViewModeRef.current = "chatlist";
                        conversationsManager.handleSelectConversation(conv);
                    },
                    onStartNewChat: ()=>conversationsManager.handleStartNewChat(),
                    onTogglePin: conversationsManager.handleTogglePin,
                    onDeleteConversation: conversationsManager.handleDeleteConversation
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiActiveChatView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiActiveChatView"], {
                    selectedBot: selectedBot,
                    messages: chatManager.messages,
                    inputText: chatManager.inputText,
                    setInputText: chatManager.setInputText,
                    isGenerating: chatManager.isGenerating,
                    copiedId: chatManager.copiedId,
                    speakingId: chatManager.speakingId,
                    chatEndRef: chatManager.chatEndRef,
                    isListening: chatManager.isListening,
                    onToggleVoiceInput: handleOpenVoiceChat,
                    autoVoiceReply: chatManager.autoVoiceReply,
                    onToggleAutoVoiceReply: chatManager.toggleAutoVoiceReply,
                    onSendMessage: chatManager.sendMessage,
                    onCopyToClipboard: chatManager.copyToClipboard,
                    onSpeakText: chatManager.speakText
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiVoiceChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiVoiceChatModal"], {
                    isOpen: isVoiceModalOpen,
                    onClose: ()=>{
                        setIsVoiceModalOpen(false);
                        conversationsManager.setViewMode("chat");
                    },
                    selectedBot: selectedBot,
                    messages: chatManager.messages,
                    isGenerating: chatManager.isGenerating,
                    speakingId: chatManager.speakingId,
                    onSendMessage: (text)=>chatManager.sendMessage(text, true),
                    onSpeakText: chatManager.speakText
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiSettingsModal"], {
                    isOpen: isModelModalOpen,
                    onClose: ()=>setIsModelModalOpen(false),
                    selectedModel: selectedModel,
                    setSelectedModel: setSelectedModel,
                    availableModels: availableModels,
                    onClearAllHistory: conversationsManager.handleClearAllConversations
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$AiConversationsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiConversationsModal"], {
                    isOpen: conversationsManager.isHistoryModalOpen,
                    onClose: ()=>conversationsManager.setIsHistoryModalOpen(false),
                    conversations: conversationsManager.conversations,
                    activeConversationId: conversationsManager.activeConvId,
                    onSelectConversation: conversationsManager.handleSelectConversation,
                    onNewChat: ()=>conversationsManager.handleStartNewChat(),
                    onRefreshList: conversationsManager.refreshConversations
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    // ════════════════════════════════════════════════════════════════════════
    // 2. DESKTOP WEB WORKSPACE VIEW (Multi-Pane Workspace Layout)
    // ════════════════════════════════════════════════════════════════════════
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiDesktopLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiDesktopLayout"], {
                selectedBot: selectedBot,
                onSelectBot: conversationsManager.handleSelectBot,
                messages: chatManager.messages,
                inputText: chatManager.inputText,
                setInputText: chatManager.setInputText,
                isGenerating: chatManager.isGenerating,
                copiedId: chatManager.copiedId,
                speakingId: chatManager.speakingId,
                chatEndRef: chatManager.chatEndRef,
                selectedModel: selectedModel,
                conversations: conversationsManager.conversations,
                isListening: chatManager.isListening,
                onToggleVoiceInput: handleOpenVoiceChat,
                autoVoiceReply: chatManager.autoVoiceReply,
                onToggleAutoVoiceReply: chatManager.toggleAutoVoiceReply,
                onSendMessage: chatManager.sendMessage,
                onStartNewChat: ()=>conversationsManager.handleStartNewChat(),
                onOpenHistoryModal: ()=>conversationsManager.setIsHistoryModalOpen(true),
                onOpenModelModal: ()=>setIsModelModalOpen(true),
                onClearChat: handleClearChat,
                onCopyToClipboard: chatManager.copyToClipboard,
                onSpeakText: chatManager.speakText,
                proactiveBrief: proactiveBrief
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiVoiceChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiVoiceChatModal"], {
                isOpen: isVoiceModalOpen,
                onClose: ()=>{
                    setIsVoiceModalOpen(false);
                    conversationsManager.setViewMode("chat");
                },
                selectedBot: selectedBot,
                messages: chatManager.messages,
                isGenerating: chatManager.isGenerating,
                speakingId: chatManager.speakingId,
                onSendMessage: (text)=>chatManager.sendMessage(text, true),
                onSpeakText: chatManager.speakText
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$components$2f$AiSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiSettingsModal"], {
                isOpen: isModelModalOpen,
                onClose: ()=>setIsModelModalOpen(false),
                selectedModel: selectedModel,
                setSelectedModel: setSelectedModel,
                availableModels: availableModels,
                onClearAllHistory: conversationsManager.handleClearAllConversations
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$AiConversationsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiConversationsModal"], {
                isOpen: conversationsManager.isHistoryModalOpen,
                onClose: ()=>conversationsManager.setIsHistoryModalOpen(false),
                conversations: conversationsManager.conversations,
                activeConversationId: conversationsManager.activeConvId,
                onSelectConversation: conversationsManager.handleSelectConversation,
                onNewChat: ()=>conversationsManager.handleStartNewChat(),
                onRefreshList: conversationsManager.refreshConversations
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/AiBotScreen.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AiBotScreen, "lggtk8dchZP1xASBfTFrvfkt7OM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAiModels"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAiConversations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$hooks$2f$useAiChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAiChat"]
    ];
});
_c = AiBotScreen;
const __TURBOPACK__default__export__ = AiBotScreen;
var _c;
__turbopack_context__.k.register(_c, "AiBotScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/AiBotScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiBotScreen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$AiBotScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AiBotScreen"],
    "BOT_CATEGORIES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOT_CATEGORIES"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$AiBotScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$AiBotScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/AiBotScreen.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$screens$2f$ai$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/screens/ai/types.ts [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=src_3e153964._.js.map