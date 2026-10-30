(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiBlogGeneratorScreen",
    ()=>AiBlogGeneratorScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/aiBlogApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/services/blogOsStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$intelligentContentStrategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/services/intelligentContentStrategy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogProjectsSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogProjectsSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogHeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogHeaderNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogAgencyDashboardTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogAgencyDashboardTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogCommandCenterTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogCommandCenterTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogDataSourcesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogDataSourcesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogClientPortalView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogClientPortalView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogBlogBookTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogBlogBookTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogContentCalendarTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogContentCalendarTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogArticlesStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogArticlesStudio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogKnowledgeAssetsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogKnowledgeAssetsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogBrandTrainingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogBrandTrainingTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogAiSettingsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogAiSettingsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogUsageLogsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogUsageLogsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogTeamSharingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogTeamSharingTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogEngineSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogEngineSettingsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/AiBlogGenerator/components/AiBlogModals.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
function AiBlogGeneratorScreen({ onBack }) {
    var _clients_;
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // Multi-client OS State
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AiBlogGeneratorScreen.useState": ()=>{
            try {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBlogClients"])();
            } catch (e) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CLIENTS"];
            }
        }
    }["AiBlogGeneratorScreen.useState"]);
    const [activeClientId, setActiveClientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeMainTab, setActiveMainTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("agency_dashboard");
    // Versioning state
    const [selectedVersionNum, setSelectedVersionNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Articles & Selected Article
    const [allArticles, setAllArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AiBlogGeneratorScreen.useState": ()=>{
            try {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadOsArticles"])();
            } catch (e) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ARTICLES"];
            }
        }
    }["AiBlogGeneratorScreen.useState"]);
    const [selectedArticle, setSelectedArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Syncing & Generating states
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRefreshingGaps, setIsRefreshingGaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Legacy Project & API state
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeProjectId, setActiveProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [assets, setAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shares, setShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isTestingWebhook, setIsTestingWebhook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modals & Dialogs
    const [showNewProjectModal, setShowNewProjectModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGlobalSettingsModal, setShowGlobalSettingsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLeftSettings, setShowLeftSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeEngineSettingsTab, setActiveEngineSettingsTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("training");
    const [systemN8nUrl, setSystemN8nUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("https://n8n.pingdart.com/webhook/blog-generator");
    const [systemFallbackProvider, setSystemFallbackProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pingdart_free");
    const [wizardTab, setWizardTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("general");
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showWebsiteImportModal, setShowWebsiteImportModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddAssetModal, setShowAddAssetModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewClientModal, setShowNewClientModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuickArticleModal, setShowQuickArticleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Inputs
    const [importUrlInput, setImportUrlInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quickTopicInput, setQuickTopicInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quickTargetKeyword, setQuickTargetKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quickArticleClientId, setQuickArticleClientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newClientData, setNewClientData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        businessName: "",
        industry: "saas_tech",
        websiteUrl: "",
        contactEmail: "",
        contactPhone: "",
        city: "",
        targetAudience: ""
    });
    const [newAssetData, setNewAssetData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "faq",
        title: "",
        content: ""
    });
    const [newProjectData, setNewProjectData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        targetAudience: "Business Owners",
        brandTone: "Professional",
        keywords: [
            "AI",
            "Automation"
        ],
        defaultLanguage: "English",
        companyKnowledge: "",
        websiteUrl: "",
        forbiddenKeywords: [],
        writingStyle: "",
        preferredCta: "Get Started",
        aiProvider: "pingdart_free",
        fallbackProvider: "pingdart_free",
        customApiKey: "",
        customModelName: "gpt-4o",
        generationMode: "n8n",
        n8nWebhookUrl: "",
        destinationWebhookUrl: "",
        scheduleType: "manual",
        customIntervalDays: 1
    });
    const [shareEmailInput, setShareEmailInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [shareRoleInput, setShareRoleInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("editor");
    // Read initial URL params on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiBlogGeneratorScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const params = new URLSearchParams(window.location.search);
            const subtabParam = params.get("ai_blogs_subtab") || params.get("subtab");
            const targetProjectId = params.get("projectId") || params.get("clientId");
            if (targetProjectId) {
                setActiveClientId(targetProjectId);
                setActiveProjectId(targetProjectId);
            }
            const validTabs = [
                "agency_dashboard",
                "command_center",
                "sources",
                "portal",
                "blogbook",
                "calendar",
                "articles",
                "assets",
                "training",
                "settings",
                "logs",
                "sharing"
            ];
            const engineTabParam = params.get("engine_tab") || params.get("settings_tab");
            if (engineTabParam && [
                "training",
                "brand",
                "seo",
                "content",
                "webhooks",
                "keys",
                "images"
            ].includes(engineTabParam)) {
                setActiveEngineSettingsTab(engineTabParam);
            }
            if (subtabParam === "global_settings") {
                setShowLeftSettings(true);
            } else if (subtabParam === "settings") {
                if (targetProjectId) {
                    setShowLeftSettings(false);
                    setActiveMainTab("settings");
                } else {
                    setShowLeftSettings(true);
                }
            } else if (subtabParam && validTabs.includes(subtabParam)) {
                setShowLeftSettings(false);
                setActiveMainTab(subtabParam);
            }
            const handlePopState = {
                "AiBlogGeneratorScreen.useEffect.handlePopState": ()=>{
                    const p = new URLSearchParams(window.location.search);
                    const sub = p.get("ai_blogs_subtab") || p.get("subtab");
                    const targetProj = p.get("projectId") || p.get("clientId");
                    const artId = p.get("articleId");
                    const engineTab = p.get("engine_tab") || p.get("settings_tab");
                    if (engineTab && [
                        "training",
                        "brand",
                        "seo",
                        "content",
                        "webhooks",
                        "keys",
                        "images"
                    ].includes(engineTab)) {
                        setActiveEngineSettingsTab(engineTab);
                    }
                    if (targetProj) {
                        setActiveClientId(targetProj);
                        setActiveProjectId(targetProj);
                    }
                    if (sub === "global_settings") {
                        setShowLeftSettings(true);
                    } else if (sub === "settings") {
                        if (targetProj) {
                            setShowLeftSettings(false);
                            setActiveMainTab("settings");
                        } else {
                            setShowLeftSettings(true);
                        }
                    } else if (sub && validTabs.includes(sub)) {
                        setShowLeftSettings(false);
                        setActiveMainTab(sub);
                    }
                    if (artId) {
                        setAllArticles({
                            "AiBlogGeneratorScreen.useEffect.handlePopState": (currentArticles)=>{
                                const found = currentArticles.find({
                                    "AiBlogGeneratorScreen.useEffect.handlePopState.found": (a)=>a.id === artId
                                }["AiBlogGeneratorScreen.useEffect.handlePopState.found"]);
                                if (found) setSelectedArticle(found);
                                return currentArticles;
                            }
                        }["AiBlogGeneratorScreen.useEffect.handlePopState"]);
                    } else {
                        setSelectedArticle(null);
                    }
                }
            }["AiBlogGeneratorScreen.useEffect.handlePopState"];
            window.addEventListener("popstate", handlePopState);
            return ({
                "AiBlogGeneratorScreen.useEffect": ()=>window.removeEventListener("popstate", handlePopState)
            })["AiBlogGeneratorScreen.useEffect"];
        }
    }["AiBlogGeneratorScreen.useEffect"], []);
    // Hardware backpress handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiBlogGeneratorScreen.useEffect": ()=>{
            const handleAppGoBack = {
                "AiBlogGeneratorScreen.useEffect.handleAppGoBack": (e)=>{
                    if (selectedArticle) {
                        var _e_preventDefault, _e_detail_markHandled, _e_detail, _e_stopImmediatePropagation;
                        setSelectedArticle(null);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault = e.preventDefault) === null || _e_preventDefault === void 0 ? void 0 : _e_preventDefault.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : (_e_detail_markHandled = _e_detail.markHandled) === null || _e_detail_markHandled === void 0 ? void 0 : _e_detail_markHandled.call(_e_detail);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    }
                }
            }["AiBlogGeneratorScreen.useEffect.handleAppGoBack"];
            window.addEventListener("app:back_press", handleAppGoBack);
            return ({
                "AiBlogGeneratorScreen.useEffect": ()=>window.removeEventListener("app:back_press", handleAppGoBack)
            })["AiBlogGeneratorScreen.useEffect"];
        }
    }["AiBlogGeneratorScreen.useEffect"], [
        selectedArticle
    ]);
    // Load Initial Storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiBlogGeneratorScreen.useEffect": ()=>{
            loadInitialData();
        }
    }["AiBlogGeneratorScreen.useEffect"], []);
    const loadInitialData = async ()=>{
        setIsLoading(true);
        try {
            const loadedClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBlogClients"])();
            setClients(loadedClients);
            const allLoadedArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadOsArticles"])();
            setAllArticles(allLoadedArticles);
            if (loadedClients.length > 0) {
                const params = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
                const targetClientId = (params === null || params === void 0 ? void 0 : params.get("projectId")) || (params === null || params === void 0 ? void 0 : params.get("clientId"));
                const subtabParam = (params === null || params === void 0 ? void 0 : params.get("ai_blogs_subtab")) || (params === null || params === void 0 ? void 0 : params.get("subtab"));
                if (targetClientId) {
                    const initialClient = loadedClients.find((c)=>c.id === targetClientId) || loadedClients[0];
                    setActiveClientId(initialClient.id);
                    setActiveProjectId(initialClient.id);
                    const articles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientArticles"])(initialClient.id);
                    setAllArticles(articles);
                    const targetArticleId = params === null || params === void 0 ? void 0 : params.get("articleId");
                    if (targetArticleId) {
                        const found = articles.find((a)=>a.id === targetArticleId);
                        if (found) {
                            setSelectedArticle(found);
                            setActiveMainTab("articles");
                        } else {
                            setSelectedArticle(null);
                        }
                    } else {
                        setSelectedArticle(null);
                    }
                } else {
                    // Default: Dashboard overview across all clients
                    setActiveClientId("");
                    setActiveProjectId(null);
                    if (!subtabParam || subtabParam === "agency_dashboard") {
                        setActiveMainTab("agency_dashboard");
                    }
                    setSelectedArticle(null);
                }
            }
            // Load live API projects from database
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].getProjects();
                setProjects(data);
                if (data.length > 0 && !activeProjectId) {
                    setActiveProjectId(data[0].id);
                }
                // Bridge live database projects into the Blog OS clients list
                if (data && data.length > 0) {
                    const currentClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBlogClients"])();
                    const existingClientIds = new Set(currentClients.map((c)=>c.id));
                    const existingClientNames = new Set(currentClients.map((c)=>{
                        var _c_businessName;
                        return (_c_businessName = c.businessName) === null || _c_businessName === void 0 ? void 0 : _c_businessName.toLowerCase().trim();
                    }));
                    let hasNew = false;
                    const updatedClients = [
                        ...currentClients
                    ];
                    for (const proj of data){
                        var _proj_name;
                        const normalizedName = (_proj_name = proj.name) === null || _proj_name === void 0 ? void 0 : _proj_name.toLowerCase().trim();
                        if (!existingClientIds.has(proj.id) && !existingClientNames.has(normalizedName)) {
                            const industry = normalizedName.includes("host") || normalizedName.includes("cloud") || normalizedName.includes("tech") ? "saas_tech" : normalizedName.includes("hospital") || normalizedName.includes("doctor") || normalizedName.includes("clinic") ? "healthcare_doctor" : "general_business";
                            const newClient = {
                                id: proj.id,
                                workspaceId: "ws-default",
                                name: proj.name,
                                businessName: proj.name,
                                industry,
                                websiteUrl: proj.websiteUrl || "https://pingdart.com",
                                contactEmail: "support@pingdart.com",
                                contactPhone: "+1 (800) 555-0199",
                                whatsappEnabled: true,
                                targetAudience: proj.targetAudience || "Target Audience",
                                city: "Global",
                                createdAt: proj.createdAt || new Date().toISOString()
                            };
                            updatedClients.push(newClient);
                            existingClientIds.add(proj.id);
                            existingClientNames.add(normalizedName);
                            hasNew = true;
                            // Ensure BlogBook exists for this client
                            const books = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBlogBooks"])();
                            if (!books[newClient.id] || books[newClient.id].length === 0) {
                                books[newClient.id] = [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultBlogBookForClient"])(newClient)
                                ];
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveBlogBooks"])(books);
                            }
                            // Ensure Content Calendar exists for this client
                            const calendars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadContentCalendars"])();
                            if (!calendars[newClient.id]) {
                                calendars[newClient.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultCalendarForClient"])(newClient);
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveContentCalendars"])(calendars);
                            }
                        }
                    }
                    if (hasNew) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveBlogClients"])(updatedClients);
                        setClients(updatedClients);
                    }
                }
            } catch (e) {
            // Fallback gracefully
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to initialize Blog OS");
        } finally{
            setIsLoading(false);
        }
    };
    // Active Client & Derived structures
    const activeClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiBlogGeneratorScreen.useMemo[activeClient]": ()=>{
            if (activeClientId) {
                const found = clients.find({
                    "AiBlogGeneratorScreen.useMemo[activeClient].found": (c)=>c.id === activeClientId
                }["AiBlogGeneratorScreen.useMemo[activeClient].found"]);
                if (found) return found;
            }
            if (activeMainTab !== "agency_dashboard") {
                return clients[0] || null;
            }
            return null;
        }
    }["AiBlogGeneratorScreen.useMemo[activeClient]"], [
        clients,
        activeClientId,
        activeMainTab
    ]);
    const allVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiBlogGeneratorScreen.useMemo[allVersions]": ()=>{
            if (!activeClient) return [];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllBlogBookVersions"])(activeClient.id);
        }
    }["AiBlogGeneratorScreen.useMemo[allVersions]"], [
        activeClient
    ]);
    const activeBlogBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiBlogGeneratorScreen.useMemo[activeBlogBook]": ()=>{
            if (!activeClient) return null;
            if (selectedVersionNum !== null) {
                const found = allVersions.find({
                    "AiBlogGeneratorScreen.useMemo[activeBlogBook].found": (b)=>b.version === selectedVersionNum
                }["AiBlogGeneratorScreen.useMemo[activeBlogBook].found"]);
                if (found) return found;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveBlogBook"])(activeClient.id);
        }
    }["AiBlogGeneratorScreen.useMemo[activeBlogBook]"], [
        activeClient,
        selectedVersionNum,
        allVersions
    ]);
    const [calendarVersionTrigger, setCalendarVersionTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeCalendarPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiBlogGeneratorScreen.useMemo[activeCalendarPlan]": ()=>{
            if (!activeClient) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveCalendarPlan"])(activeClient.id);
        }
    }["AiBlogGeneratorScreen.useMemo[activeCalendarPlan]"], [
        activeClient,
        calendarVersionTrigger
    ]);
    const activeClientArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiBlogGeneratorScreen.useMemo[activeClientArticles]": ()=>{
            if (!activeClient) return [];
            return allArticles.filter({
                "AiBlogGeneratorScreen.useMemo[activeClientArticles]": (a)=>a.clientId === activeClient.id
            }["AiBlogGeneratorScreen.useMemo[activeClientArticles]"]);
        }
    }["AiBlogGeneratorScreen.useMemo[activeClientArticles]"], [
        allArticles,
        activeClient
    ]);
    const activeProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiBlogGeneratorScreen.useMemo[activeProject]": ()=>{
            const found = projects.find({
                "AiBlogGeneratorScreen.useMemo[activeProject].found": (p)=>p.id === activeProjectId
            }["AiBlogGeneratorScreen.useMemo[activeProject].found"]);
            if (found) return found;
            if (activeClient) {
                return {
                    id: activeClient.id,
                    name: activeClient.businessName || activeClient.name,
                    description: `${activeClient.industry.replace(/_/g, " ")} content engine for ${activeClient.city}`,
                    targetAudience: activeClient.targetAudience,
                    brandTone: activeClient.industry === "healthcare_doctor" ? "Clinical & Empathetic" : activeClient.industry === "finance_ca_tax" ? "Authoritative & Advisory" : activeClient.industry === "saas_tech" ? "Technical & Informative" : activeClient.industry === "agency_marketing" ? "Persuasive & Growth-Oriented" : activeClient.industry === "real_estate" ? "Luxury & Prestigious" : "Professional & Modern",
                    keywords: [
                        activeClient.industry,
                        activeClient.city || "global"
                    ],
                    defaultLanguage: "English",
                    websiteUrl: activeClient.websiteUrl,
                    aiProvider: activeClient.industry === "finance_ca_tax" ? "claude" : "openai",
                    customModelName: activeClient.industry === "finance_ca_tax" ? "claude-3-5-sonnet-20241022" : "gpt-4o",
                    n8nWebhookUrl: `https://n8n.pingdart.com/webhook/${activeClient.id}-generator`,
                    destinationWebhookUrl: `${activeClient.websiteUrl}/wp-json/wp/v2/posts`,
                    generationMode: "n8n",
                    hasCustomApiKey: false
                };
            }
            return projects[0] || null;
        }
    }["AiBlogGeneratorScreen.useMemo[activeProject]"], [
        projects,
        activeProjectId,
        activeClient
    ]);
    // Sync live backend shares when active client or project changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiBlogGeneratorScreen.useEffect": ()=>{
            const projId = (activeClient === null || activeClient === void 0 ? void 0 : activeClient.id) || activeProjectId;
            if (projId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].getProjectDetails(projId).then({
                    "AiBlogGeneratorScreen.useEffect": (data)=>{
                        if (data === null || data === void 0 ? void 0 : data.shares) {
                            setShares(data.shares);
                        }
                    }
                }["AiBlogGeneratorScreen.useEffect"]).catch({
                    "AiBlogGeneratorScreen.useEffect": ()=>{
                    // Local project fallback
                    }
                }["AiBlogGeneratorScreen.useEffect"]);
            }
        }
    }["AiBlogGeneratorScreen.useEffect"], [
        activeClient === null || activeClient === void 0 ? void 0 : activeClient.id,
        activeProjectId
    ]);
    // Client Selection Handler
    const handleSelectClient = (clientId)=>{
        setActiveClientId(clientId);
        setActiveProjectId(clientId);
        setSelectedVersionNum(null);
        const articles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientArticles"])(clientId);
        setAllArticles((prev)=>{
            const other = prev.filter((a)=>a.clientId !== clientId);
            return [
                ...articles,
                ...other
            ];
        });
        setSelectedArticle(null);
        const nextTab = activeMainTab === "agency_dashboard" ? "command_center" : activeMainTab;
        setActiveMainTab(nextTab);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            tab: "AiBlogs",
            ai_blogs_subtab: showLeftSettings ? "global_settings" : nextTab,
            subtab: null,
            projectId: clientId,
            clientId: clientId,
            articleId: null
        });
        const c = clients.find((item)=>item.id === clientId);
    };
    // Main Tab Navigation Handler
    const handleSelectTab = (tab, customProjectId)=>{
        setActiveMainTab(tab);
        setShowLeftSettings(false);
        if (tab === "agency_dashboard") {
            setActiveClientId("");
            setActiveProjectId(null);
            setSelectedArticle(null);
            const allLoadedArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadOsArticles"])();
            setAllArticles(allLoadedArticles);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: "agency_dashboard",
                subtab: null,
                projectId: null,
                clientId: null,
                articleId: null
            });
            return;
        }
        const targetId = customProjectId || (activeClient === null || activeClient === void 0 ? void 0 : activeClient.id) || activeClientId || activeProjectId;
        if (customProjectId && customProjectId !== activeClientId) {
            setActiveClientId(customProjectId);
            setActiveProjectId(customProjectId);
            setSelectedVersionNum(null);
            const articles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientArticles"])(customProjectId);
            setAllArticles((prev)=>{
                const other = prev.filter((a)=>a.clientId !== customProjectId);
                return [
                    ...articles,
                    ...other
                ];
            });
            setSelectedArticle(null);
        }
        if (tab !== "articles") {
            setSelectedArticle(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: tab,
                subtab: null,
                projectId: targetId || null,
                clientId: targetId || null,
                articleId: null
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: "articles",
                subtab: null,
                projectId: targetId || null,
                clientId: targetId || null,
                articleId: selectedArticle ? selectedArticle.id : null
            });
        }
    };
    // Toggle Left Engine Settings View
    const handleToggleLeftSettings = (open)=>{
        setShowLeftSettings(open);
        const targetId = (activeClient === null || activeClient === void 0 ? void 0 : activeClient.id) || activeClientId || activeProjectId;
        if (open) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: "global_settings",
                engine_tab: activeEngineSettingsTab,
                subtab: null,
                projectId: targetId || null,
                clientId: targetId || null,
                articleId: null
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: activeMainTab,
                engine_tab: null,
                subtab: null,
                projectId: targetId || null,
                clientId: targetId || null,
                articleId: activeMainTab === "articles" && selectedArticle ? selectedArticle.id : null
            });
        }
    };
    // Select Engine Settings Tab Handler
    const handleSelectEngineSettingsTab = (tab)=>{
        setActiveEngineSettingsTab(tab);
        setShowLeftSettings(true);
        const targetId = (activeClient === null || activeClient === void 0 ? void 0 : activeClient.id) || activeClientId || activeProjectId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            tab: "AiBlogs",
            ai_blogs_subtab: "global_settings",
            engine_tab: tab,
            subtab: null,
            projectId: targetId || null,
            clientId: targetId || null,
            articleId: null
        });
    };
    // Select Article Detail or Close
    const handleSelectArticle = (art)=>{
        setSelectedArticle(art);
        const targetId = (activeClient === null || activeClient === void 0 ? void 0 : activeClient.id) || activeClientId || activeProjectId;
        if (art) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: "articles",
                subtab: null,
                projectId: targetId || null,
                clientId: targetId || null,
                articleId: art.id
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                tab: "AiBlogs",
                ai_blogs_subtab: "articles",
                subtab: null,
                projectId: targetId || null,
                clientId: targetId || null,
                articleId: null
            });
        }
    };
    // Update Blog Book Handler
    const handleUpdateBlogBook = (updated)=>{
        if (!activeClient) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveActiveBlogBook"])(activeClient.id, updated);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Saved Blog Book (${updated.versionLabel})`);
    };
    // 5-Minute Fast Website Scrape Trigger
    const handleFastWebsiteSync = async (url)=>{
        if (!activeClient) return;
        setIsSyncing(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Scraping 5 core pages (Home, About, Services, FAQs, Contact)...");
        try {
            const newBook = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastSimulateScrape"])(activeClient.id, url);
            setSelectedVersionNum(newBook.version);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Synthesized Blog Book ${newBook.versionLabel}!`);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Scraper failed to extract website content");
        } finally{
            setIsSyncing(false);
        }
    };
    // Refresh Content Gaps & 90-Day Strategy
    const handleRefreshGaps = async ()=>{
        if (!activeClient) return;
        setIsRefreshingGaps(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$intelligentContentStrategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateIntelligentCalendarPlan"])(activeClient.id, {
                preserveApproved: true
            });
            setCalendarVersionTrigger((v)=>v + 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("AI Content Gap radar & 90-Day Strategy recalculated with verified business data!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Failed to recalculate content calendar");
        } finally{
            setIsRefreshingGaps(false);
        }
    };
    const handleApproveStrategy = ()=>{
        if (!activeClient) return;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$intelligentContentStrategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["approveContentCalendarStrategy"])(activeClient.id);
            setCalendarVersionTrigger((v)=>v + 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("90-Day Strategic Content Calendar Approved & Activated! 🚀");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Failed to approve strategy");
        }
    };
    // 1-Click Generate from 3-Month Calendar
    const handleGenerateFromCalendar = (calendarItem)=>{
        if (!activeClient) return;
        setIsGenerating(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Generating article for "${calendarItem.title}" with internal links & E-E-A-T...`);
        setTimeout(()=>{
            const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateArticleFromTopic"])(activeClient.id, calendarItem.title, calendarItem.targetKeyword, calendarItem.searchIntent);
            setAllArticles((prev)=>[
                    generated,
                    ...prev
                ]);
            setActiveMainTab("articles");
            handleSelectArticle(generated);
            setIsGenerating(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Generated: "${generated.title}"! Dispatched with ${generated.injectedInternalLinks.length} verified internal links.`);
        }, 1100);
    };
    // Quick Topic Generation
    const handleGenerateQuickTopic = (e)=>{
        e.preventDefault();
        const targetClient = activeClient || clients.find((c)=>c.id === quickArticleClientId) || clients[0];
        if (!targetClient || !quickTopicInput.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a topic and select a client project");
            return;
        }
        handleSelectClient(targetClient.id);
        setIsGenerating(true);
        setTimeout(()=>{
            const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateArticleFromTopic"])(targetClient.id, quickTopicInput.trim(), quickTargetKeyword.trim() || undefined, "informational");
            setAllArticles((prev)=>[
                    generated,
                    ...prev
                ]);
            setActiveMainTab("articles");
            handleSelectArticle(generated);
            setShowQuickArticleModal(false);
            setQuickTopicInput("");
            setQuickTargetKeyword("");
            setIsGenerating(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Article "${generated.title}" generated!`);
        }, 900);
    };
    // Update Article in state and storage
    const handleUpdateArticle = (updated)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveArticle"])(updated);
        setAllArticles((prev)=>prev.map((a)=>a.id === updated.id ? updated : a));
        if ((selectedArticle === null || selectedArticle === void 0 ? void 0 : selectedArticle.id) === updated.id) {
            setSelectedArticle(updated);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Article status: ${updated.status.toUpperCase()}`);
    };
    // Delete Article from state and storage
    const handleDeleteArticle = (articleId)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteArticle"])(articleId);
        setAllArticles((prev)=>prev.filter((a)=>a.id !== articleId));
        if ((selectedArticle === null || selectedArticle === void 0 ? void 0 : selectedArticle.id) === articleId) {
            handleSelectArticle(null);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Article deleted successfully");
    };
    // WordPress Direct Publishing
    const handlePublishToWordpress = async (article)=>{
        setIsPublishing(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Publishing "${article.title}" to WordPress REST API...`);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishArticleToWordpress"])(article.id);
            const updated = {
                ...article,
                status: "published",
                wordpressPublishedUrl: res.url,
                wordpressPostId: res.postId,
                publishedAt: article.publishedAt || new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            handleUpdateArticle(updated);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Published live to WordPress (Post ID #${res.postId})! View: ${res.url}`);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("WordPress publishing failed");
        } finally{
            setIsPublishing(false);
        }
    };
    // Create New Project / Client
    const handleCreateNewClient = async (e)=>{
        e.preventDefault();
        if (!newClientData.businessName.trim() || !newClientData.name.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Project lead and project/business name are required");
            return;
        }
        const created = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(newClientData);
        setClients((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadBlogClients"])());
        setActiveClientId(created.id);
        setActiveProjectId(created.id);
        setSelectedVersionNum(null);
        setSelectedArticle(null);
        setShowNewClientModal(false);
        try {
            const apiProj = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].createProject({
                name: created.businessName,
                websiteUrl: created.websiteUrl,
                targetAudience: created.targetAudience,
                defaultLanguage: "English",
                aiProvider: "pingdart_free",
                generationMode: "gemini"
            });
            setProjects((prev)=>[
                    apiProj,
                    ...prev
                ]);
        } catch (_) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Created project "${created.businessName}"! Initialized Knowledge Book v1.0 and Content Strategy.`);
    };
    // Update Client Project
    const handleUpdateClient = (updated)=>{
        setClients((prev)=>{
            const next = prev.map((c)=>c.id === updated.id ? updated : c);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveBlogClients"])(next);
            return next;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Project "${updated.businessName || updated.name}" updated successfully!`);
    };
    // Delete Client Project
    const handleDeleteClient = (clientId)=>{
        setClients((prev)=>{
            const next = prev.filter((c)=>c.id !== clientId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$services$2f$blogOsStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveBlogClients"])(next);
            return next;
        });
        if (activeClientId === clientId) {
            setActiveClientId("");
            setActiveProjectId(null);
            setActiveMainTab("agency_dashboard");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project deleted successfully");
    };
    // Legacy Project API Handlers
    const handleUpdateProject = async (updates)=>{
        if (!activeProject) return;
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].updateProject(activeProject.id, updates);
            setProjects((prev)=>prev.map((p)=>p.id === updated.id ? updated : p));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Settings updated");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update project");
        }
    };
    const handleWebsiteImportSubmit = async (e)=>{
        e.preventDefault();
        if (!activeProject || !importUrlInput.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid website URL");
            return;
        }
        setIsImporting(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Importing website content...");
        try {
            const asset = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].importWebsite(activeProject.id, importUrlInput.trim());
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Imported content from "${asset.title}"!`);
            setAssets((prev)=>[
                    asset,
                    ...prev
                ]);
            setImportUrlInput("");
            setShowWebsiteImportModal(false);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Website import failed");
        } finally{
            setIsImporting(false);
        }
    };
    const handleAddAssetSubmit = async (e)=>{
        e.preventDefault();
        if (!activeProject || !newAssetData.title.trim() || !newAssetData.content.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Title and content are required");
            return;
        }
        try {
            const asset = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].createKnowledgeAsset(activeProject.id, newAssetData);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Knowledge asset added!");
            setAssets((prev)=>[
                    asset,
                    ...prev
                ]);
            setNewAssetData({
                type: "faq",
                title: "",
                content: ""
            });
            setShowAddAssetModal(false);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to add asset");
        }
    };
    const handleDeleteAsset = async (assetId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].deleteKnowledgeAsset(assetId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Asset deleted");
            setAssets((prev)=>prev.filter((a)=>a.id !== assetId));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to delete asset");
        }
    };
    const handleCreateProject = async (e)=>{
        var _newProjectData_name;
        e.preventDefault();
        if (!((_newProjectData_name = newProjectData.name) === null || _newProjectData_name === void 0 ? void 0 : _newProjectData_name.trim())) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a project name");
            return;
        }
        try {
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].createProject(newProjectData);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Project "${created.name}" created!`);
            setShowNewProjectModal(false);
            setProjects((prev)=>[
                    created,
                    ...prev
                ]);
            setActiveProjectId(created.id);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to create project");
        }
    };
    const handleShareSubmit = async (e)=>{
        e.preventDefault();
        if (!activeProject || !shareEmailInput.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid user email");
            return;
        }
        try {
            var _share_user;
            const share = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].shareProject(activeProject.id, {
                email: shareEmailInput.trim(),
                permission: shareRoleInput
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Shared project with ${((_share_user = share.user) === null || _share_user === void 0 ? void 0 : _share_user.name) || shareEmailInput}`);
            setShares((prev)=>[
                    share,
                    ...prev
                ]);
            setShareEmailInput("");
            setShowShareModal(false);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to share project");
        }
    };
    const handleUnshare = async (targetUserId)=>{
        if (!activeProject) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$aiBlogApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiBlogApi"].unshareProject(activeProject.id, targetUserId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Access revoked");
            setShares((prev)=>prev.filter((s)=>{
                    var _s_user;
                    return ((_s_user = s.user) === null || _s_user === void 0 ? void 0 : _s_user.id) !== targetUserId;
                }));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to unshare");
        }
    };
    const isViewingArticleDetail = activeMainTab === "articles" && Boolean(selectedArticle);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col md:flex-row bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-slate-100 overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogProjectsSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogProjectsSidebar"], {
                clients: clients,
                activeClient: activeClient,
                projects: projects,
                activeProjectId: activeProjectId,
                activeProject: activeProject,
                activeMainTab: activeMainTab,
                searchQuery: searchQuery,
                isLoading: isLoading,
                showLeftSettings: showLeftSettings,
                activeSettingsTab: activeEngineSettingsTab,
                articlesCount: activeClientArticles.length,
                assetsCount: assets.length,
                logsCount: logs.length,
                sharesCount: shares.length,
                systemN8nUrl: systemN8nUrl,
                systemFallbackProvider: systemFallbackProvider,
                onBack: onBack,
                onSearchChange: setSearchQuery,
                onSelectProject: (id)=>{
                    setActiveProjectId(id);
                    setShowLeftSettings(false);
                },
                onSelectClient: handleSelectClient,
                onSelectMainTab: handleSelectTab,
                onOpenNewProjectModal: ()=>{
                    setShowNewClientModal(true);
                },
                onToggleLeftSettings: handleToggleLeftSettings,
                onSelectSettingsTab: handleSelectEngineSettingsTab,
                onSystemN8nUrlChange: setSystemN8nUrl,
                onSystemFallbackProviderChange: setSystemFallbackProvider
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50 dark:bg-[#0d151c]",
                children: showLeftSettings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogEngineSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogEngineSettingsView"], {
                    systemN8nUrl: systemN8nUrl,
                    systemFallbackProvider: systemFallbackProvider,
                    activeSettingsTab: activeEngineSettingsTab,
                    onSelectSettingsTab: handleSelectEngineSettingsTab,
                    onSystemN8nUrlChange: setSystemN8nUrl,
                    onSystemFallbackProviderChange: setSystemFallbackProvider,
                    onBackToProjects: ()=>handleToggleLeftSettings(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                    lineNumber: 1017,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        !isViewingArticleDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogHeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogHeaderNav"], {
                            clients: clients,
                            activeClient: activeClient,
                            activeMainTab: activeMainTab,
                            onSelectClient: (id)=>{
                                handleSelectClient(id);
                                handleSelectTab("command_center", id);
                            },
                            onSelectDashboard: ()=>handleSelectTab("agency_dashboard"),
                            onOpenAddClient: ()=>setShowNewClientModal(true),
                            onFastSyncBlogBook: ()=>{
                                handleSelectTab("blogbook");
                                if (activeClient === null || activeClient === void 0 ? void 0 : activeClient.websiteUrl) {
                                    handleFastWebsiteSync(activeClient.websiteUrl);
                                }
                            },
                            onOpenGlobalSettings: ()=>handleToggleLeftSettings(true),
                            onOpenNewArticle: ()=>setShowQuickArticleModal(true),
                            onBack: onBack
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1030,
                            columnNumber: 15
                        }, this),
                        activeMainTab === "agency_dashboard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogAgencyDashboardTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogAgencyDashboardTab"], {
                            clients: clients,
                            allArticles: allArticles,
                            onSelectClient: (id)=>{
                                handleSelectClient(id);
                                handleSelectTab("command_center", id);
                            },
                            onOpenNewClientModal: ()=>setShowNewClientModal(true),
                            onUpdateClient: handleUpdateClient,
                            onDeleteClient: handleDeleteClient
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1054,
                            columnNumber: 15
                        }, this) : activeClient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                activeMainTab === "command_center" && activeBlogBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogCommandCenterTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogCommandCenterTab"], {
                                    currentClient: activeClient,
                                    blogBook: activeBlogBook,
                                    articles: activeClientArticles,
                                    onNavigateTab: handleSelectTab,
                                    onOpenNewArticleModal: ()=>setShowQuickArticleModal(true),
                                    onFastWebsiteSync: handleFastWebsiteSync,
                                    onUpdateArticle: handleUpdateArticle,
                                    onViewAllProjects: ()=>handleSelectTab("agency_dashboard"),
                                    isSyncing: isSyncing
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1069,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "sources" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogDataSourcesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogDataSourcesTab"], {
                                    currentClient: activeClient,
                                    onRefreshKnowledge: ()=>{
                                        if (activeClient === null || activeClient === void 0 ? void 0 : activeClient.websiteUrl) {
                                            handleFastWebsiteSync(activeClient.websiteUrl);
                                        }
                                    }
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1084,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "portal" && activeBlogBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogClientPortalView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogClientPortalView"], {
                                    currentClient: activeClient,
                                    blogBook: activeBlogBook,
                                    articles: activeClientArticles,
                                    onUpdateArticle: handleUpdateArticle,
                                    onPublishToWordpress: handlePublishToWordpress,
                                    isPublishing: isPublishing
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1096,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "blogbook" && activeBlogBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogBlogBookTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogBlogBookTab"], {
                                    currentClient: activeClient,
                                    blogBook: activeBlogBook,
                                    allVersions: allVersions,
                                    onSelectVersion: (v)=>setSelectedVersionNum(v),
                                    onUpdateBlogBook: handleUpdateBlogBook,
                                    onFastWebsiteSync: handleFastWebsiteSync,
                                    isSyncing: isSyncing
                                }, `${activeClient.id}-${activeBlogBook.version}`, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1108,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "calendar" && activeCalendarPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogContentCalendarTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogContentCalendarTab"], {
                                    currentClient: activeClient,
                                    calendarPlan: activeCalendarPlan,
                                    onGenerateArticleFromCalendar: handleGenerateFromCalendar,
                                    onRefreshGaps: handleRefreshGaps,
                                    isRefreshingGaps: isRefreshingGaps,
                                    onApproveStrategy: handleApproveStrategy
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1121,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "articles" && activeBlogBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogArticlesStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogArticlesStudio"], {
                                    currentClient: activeClient,
                                    currentBlogBook: activeBlogBook,
                                    articles: activeClientArticles,
                                    selectedArticle: selectedArticle,
                                    onSelectArticle: handleSelectArticle,
                                    onUpdateArticle: handleUpdateArticle,
                                    onDeleteArticle: handleDeleteArticle,
                                    onPublishToWordpress: handlePublishToWordpress,
                                    isPublishing: isPublishing,
                                    onOpenNewArticleModal: ()=>setShowQuickArticleModal(true)
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1133,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "assets" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogKnowledgeAssetsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogKnowledgeAssetsTab"], {
                                    assets: assets,
                                    onOpenWebsiteImportModal: ()=>setShowWebsiteImportModal(true),
                                    onOpenAddAssetModal: ()=>setShowAddAssetModal(true),
                                    onDeleteAsset: handleDeleteAsset
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "training" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogBrandTrainingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogBrandTrainingTab"], {
                                    activeProject: activeProject || {},
                                    onUpdateProject: handleUpdateProject
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1159,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogAiSettingsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogAiSettingsTab"], {
                                    activeProject: activeProject || {},
                                    onUpdateProject: handleUpdateProject,
                                    activeClient: activeClient
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1167,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "logs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogUsageLogsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogUsageLogsTab"], {
                                    logs: logs
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 19
                                }, this),
                                activeMainTab === "sharing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogTeamSharingTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogTeamSharingTab"], {
                                    projectId: activeClient.id,
                                    shares: shares,
                                    onOpenShareModal: ()=>setShowShareModal(true),
                                    onUnshare: handleUnshare
                                }, activeClient.id, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogAgencyDashboardTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogAgencyDashboardTab"], {
                            clients: clients,
                            allArticles: allArticles,
                            onSelectClient: (id)=>{
                                handleSelectClient(id);
                                handleSelectTab("command_center");
                            },
                            onOpenNewClientModal: ()=>setShowNewClientModal(true),
                            onUpdateClient: handleUpdateClient,
                            onDeleteClient: handleDeleteClient
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1190,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                lineNumber: 1015,
                columnNumber: 7
            }, this),
            showQuickArticleModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-lg bg-white dark:bg-[#151f2e] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                lineNumber: 1213,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                                    children: "Write AI Article"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: [
                                                        "Injected with ",
                                                        (activeClient === null || activeClient === void 0 ? void 0 : activeClient.businessName) || (activeClient === null || activeClient === void 0 ? void 0 : activeClient.name),
                                                        "'s Blog Book & Links"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1217,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowQuickArticleModal(false),
                                    className: "w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                        lineNumber: 1224,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1220,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleGenerateQuickTopic,
                            className: "p-5 space-y-4",
                            children: [
                                !activeClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                            children: "Target Client Project *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: quickArticleClientId || ((_clients_ = clients[0]) === null || _clients_ === void 0 ? void 0 : _clients_.id) || "",
                                            onChange: (e)=>setQuickArticleClientId(e.target.value),
                                            className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-white font-bold",
                                            children: clients.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.id,
                                                    children: [
                                                        c.businessName || c.name,
                                                        " (",
                                                        c.city,
                                                        ")"
                                                    ]
                                                }, c.id, true, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1240,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                            children: "Article Topic / Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: quickTopicInput,
                                            onChange: (e)=>setQuickTopicInput(e.target.value),
                                            placeholder: "e.g. 5 Warning Signs of Silent Heart Attack You Shouldn't Ignore",
                                            className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                            children: "Target SEO Keyword"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: quickTargetKeyword,
                                            onChange: (e)=>setQuickTargetKeyword(e.target.value),
                                            placeholder: "e.g. silent heart attack symptoms hyderabad",
                                            className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1266,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1262,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-[11px] text-purple-700 dark:text-purple-300 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-extrabold flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain02Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Blog Book Compliance Guarantee:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "This article will automatically inject ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        (activeBlogBook === null || activeBlogBook === void 0 ? void 0 : activeBlogBook.services.length) || 3,
                                                        " verified service links"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1281,
                                                    columnNumber: 58
                                                }, this),
                                                ", include ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        activeBlogBook === null || activeBlogBook === void 0 ? void 0 : activeBlogBook.doctorOrFounderProfile.name,
                                                        " E-E-A-T credentials"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1282,
                                                    columnNumber: 27
                                                }, this),
                                                ", and enforce compliance guidelines without manual editing."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowQuickArticleModal(false),
                                            className: "h-10 px-5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1287,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isGenerating,
                                            className: "h-10 px-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs shadow-md cursor-pointer disabled:opacity-50 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isGenerating ? "Synthesizing Blog..." : "Generate & Review ⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1228,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                    lineNumber: 1209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                lineNumber: 1208,
                columnNumber: 9
            }, this),
            showNewClientModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-lg bg-white dark:bg-[#151f2e] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                lineNumber: 1315,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                                    children: "Create New Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1318,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Initialize custom Knowledge Book & Content Strategy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1319,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewClientModal(false),
                                    className: "w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                        lineNumber: 1326,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateNewClient,
                            className: "p-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                                    children: "Project Lead / Founder Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newClientData.name,
                                                    onChange: (e)=>setNewClientData({
                                                            ...newClientData,
                                                            name: e.target.value
                                                        }),
                                                    placeholder: "e.g. John Doe, Technical Lead",
                                                    className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1336,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                                    children: "Project / Company Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newClientData.businessName,
                                                    onChange: (e)=>setNewClientData({
                                                            ...newClientData,
                                                            businessName: e.target.value
                                                        }),
                                                    placeholder: "e.g. CloudScale AI, Acme SaaS",
                                                    className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1350,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1346,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                                    children: "Industry Domain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1363,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newClientData.industry,
                                                    onChange: (e)=>setNewClientData({
                                                            ...newClientData,
                                                            industry: e.target.value
                                                        }),
                                                    className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "saas_tech",
                                                            children: "B2B SaaS / Tech"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1371,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "general_business",
                                                            children: "General Business & Tech"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1372,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "agency_marketing",
                                                            children: "Marketing Agency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1373,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ecommerce",
                                                            children: "E-Commerce & Retail"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1374,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "finance_ca_tax",
                                                            children: "Finance / Tax / FinTech"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1375,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "healthcare_doctor",
                                                            children: "Healthcare / Medical"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1376,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "real_estate",
                                                            children: "Real Estate & Housing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1377,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "legal",
                                                            children: "Legal & Compliance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                            lineNumber: 1378,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1366,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                                    children: "Target Market / Primary Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1383,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newClientData.city,
                                                    onChange: (e)=>setNewClientData({
                                                            ...newClientData,
                                                            city: e.target.value
                                                        }),
                                                    placeholder: "e.g. Global, US, London, Bengaluru",
                                                    className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1386,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1382,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                            children: "Website / App URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1397,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: newClientData.websiteUrl,
                                            onChange: (e)=>setNewClientData({
                                                    ...newClientData,
                                                    websiteUrl: e.target.value
                                                }),
                                            placeholder: "https://yourproduct.io",
                                            className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1400,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1396,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                            children: "Target Audience Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newClientData.targetAudience,
                                            onChange: (e)=>setNewClientData({
                                                    ...newClientData,
                                                    targetAudience: e.target.value
                                                }),
                                            placeholder: "e.g. Software engineers, founders, and growth teams looking for scalable cloud tools",
                                            className: "w-full h-11 px-3.5 text-xs rounded-[5px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1409,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowNewClientModal(false),
                                            className: "h-10 px-5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1423,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "h-10 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md cursor-pointer flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Create Project & Initialize Blog Book"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                                    lineNumber: 1435,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                                    lineNumber: 1422,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                            lineNumber: 1330,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                    lineNumber: 1311,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                lineNumber: 1310,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$AiBlogGenerator$2f$components$2f$AiBlogModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiBlogModals"], {
                showWebsiteImportModal: showWebsiteImportModal,
                importUrlInput: importUrlInput,
                isImporting: isImporting,
                onCloseWebsiteImportModal: ()=>setShowWebsiteImportModal(false),
                onImportUrlChange: setImportUrlInput,
                onWebsiteImportSubmit: handleWebsiteImportSubmit,
                showAddAssetModal: showAddAssetModal,
                newAssetData: newAssetData,
                onCloseAddAssetModal: ()=>setShowAddAssetModal(false),
                onAssetDataChange: setNewAssetData,
                onAddAssetSubmit: handleAddAssetSubmit,
                showNewProjectModal: showNewProjectModal,
                wizardTab: wizardTab,
                newProjectData: newProjectData,
                onCloseNewProjectModal: ()=>setShowNewProjectModal(false),
                onWizardTabChange: setWizardTab,
                onNewProjectDataChange: setNewProjectData,
                onCreateProjectSubmit: handleCreateProject,
                showShareModal: showShareModal,
                shareEmailInput: shareEmailInput,
                shareRoleInput: shareRoleInput,
                onCloseShareModal: ()=>setShowShareModal(false),
                onShareEmailChange: setShareEmailInput,
                onShareRoleChange: setShareRoleInput,
                onShareSubmit: handleShareSubmit,
                showGlobalSettingsModal: showGlobalSettingsModal,
                systemN8nUrl: systemN8nUrl,
                systemFallbackProvider: systemFallbackProvider,
                onCloseGlobalSettingsModal: ()=>setShowGlobalSettingsModal(false),
                onSystemN8nUrlChange: setSystemN8nUrl,
                onSystemFallbackProviderChange: setSystemFallbackProvider,
                onSaveGlobalSettings: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Global engine settings saved!");
                    setShowGlobalSettingsModal(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
                lineNumber: 1444,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx",
        lineNumber: 978,
        columnNumber: 5
    }, this);
}
_s(AiBlogGeneratorScreen, "HP/AggXFaLL54cg4ohSNEpPoLZA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = AiBlogGeneratorScreen;
const __TURBOPACK__default__export__ = AiBlogGeneratorScreen;
var _c;
__turbopack_context__.k.register(_c, "AiBlogGeneratorScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=b1a17_app_user_components_modules_AiBlogGenerator_AiBlogGeneratorScreen_tsx_b32af47f._.js.map