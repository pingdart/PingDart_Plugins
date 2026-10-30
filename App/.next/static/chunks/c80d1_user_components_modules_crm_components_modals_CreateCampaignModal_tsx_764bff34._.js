(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateCampaignModal",
    ()=>CreateCampaignModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Megaphone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AlertCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$EyeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/EyeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Clock01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Image01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Video02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Link01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Upload01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$DocumentCodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/DocumentCodeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript) <export api as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$campaignPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/campaignPresets.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreateCampaignModal({ isOpen, onClose, onCampaignCreated }) {
    var _currentPreviewRecord_name;
    _s();
    // Wizard Step (1 to 8)
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Step 1: Details & Custom Objectives
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [objective, setObjective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Sales Outreach");
    const [selectedObjectiveId, setSelectedObjectiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [objectivesList, setObjectivesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$campaignPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OBJECTIVES"]);
    const [isLoadingObjectives, setIsLoadingObjectives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Small Modal: Create New Objective
    const [isCreateObjectiveModalOpen, setIsCreateObjectiveModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newObjectiveName, setNewObjectiveName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newObjectiveDesc, setNewObjectiveDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSavingObjective, setIsSavingObjective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [objectiveModalError, setObjectiveModalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Step 2: Target Audience
    const [allRawRecords, setAllRawRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableRecords, setAvailableRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingRecords, setIsLoadingRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRecordIds, setSelectedRecordIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [audienceCategoryFilter, setAudienceCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [audienceSearch, setAudienceSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Step 3: Channel & Sender
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("email");
    const [fromName, setFromName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PingDart Sales");
    const [fromEmail, setFromEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info@pingdart.com");
    const [replyTo, setReplyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info@pingdart.com");
    // WhatsApp Meta API state
    const [whatsappTemplateId, setWhatsappTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pingdart_sales_intro_v1");
    const [whatsappLanguage, setWhatsappLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en_US");
    const [whatsappSenderNumber, setWhatsappSenderNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+1 (555) 019-2834");
    const [whatsappMediaType, setWhatsappMediaType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("image");
    const [whatsappHeaderMediaUrl, setWhatsappHeaderMediaUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80");
    const [whatsappDocumentFilename, setWhatsappDocumentFilename] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PingDart_Solution_Brochure.pdf");
    const [selectedWaPresetId, setSelectedWaPresetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("wa-sales-intro");
    const waMediaFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // SMS Outreach state (DLT Gateway)
    const [smsSenderId, setSmsSenderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [smsTemplateId, setSmsTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [smsEntityId, setSmsEntityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [smsUsername, setSmsUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [smsApiKey, setSmsApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedSmsPresetId, setSelectedSmsPresetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sms-sales-callback");
    // Step 4: Message Composer, Media & HTML
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [composerViewMode, setComposerViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("code");
    const [isAiDrawerOpen, setIsAiDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiProductDesc, setAiProductDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aiTone, setAiTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("friendly and professional");
    const [isGeneratingAi, setIsGeneratingAi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bodyTextareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Media Insertion Modals & Upload State
    const [isImageModalOpen, setIsImageModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageAlt, setImageAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isVideoModalOpen, setIsVideoModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [videoPoster, setVideoPoster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [videoEmbedType, setVideoEmbedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("card");
    const [isLinkModalOpen, setIsLinkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkUrl, setLinkUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [linkText, setLinkText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isUploadingMedia, setIsUploadingMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imageFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Step 5: Preview
    const [previewContactIndex, setPreviewContactIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Step 6: Pacing & Schedule
    const [rateLimitPerMinute, setRateLimitPerMinute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const [sendTiming, setSendTiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("immediate");
    const [scheduledDate, setScheduledDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Step 7: Safety & Verification (automatic)
    // Step 8: Approval & Launch
    const [isApproved, setIsApproved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Currently selected objective item
    const currentSelectedObjective = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[currentSelectedObjective]": ()=>{
            return objectivesList.find({
                "CreateCampaignModal.useMemo[currentSelectedObjective]": (o)=>o.id === selectedObjectiveId || o.name === objective
            }["CreateCampaignModal.useMemo[currentSelectedObjective]"]) || objectivesList[0] || null;
        }
    }["CreateCampaignModal.useMemo[currentSelectedObjective]"], [
        objectivesList,
        selectedObjectiveId,
        objective
    ]);
    // Fetch campaign objectives from backend
    const fetchObjectives = async ()=>{
        try {
            var _res_data, _res_data1;
            setIsLoadingObjectives(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/campaigns/objectives");
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.objectives)) {
                setObjectivesList(res.data.objectives);
                // Sync selected objective ID
                const matched = res.data.objectives.find((o)=>o.name === objective);
                if (matched) {
                    setSelectedObjectiveId(matched.id);
                } else if (res.data.objectives.length > 0) {
                    setSelectedObjectiveId(res.data.objectives[0].id);
                }
            }
        } catch (err) {
            console.error("[CreateCampaign] fetchObjectives error:", err);
        } finally{
            setIsLoadingObjectives(false);
        }
    };
    // Fetch active SMS Gateway configuration (checks user-configured settings first)
    const fetchSmsGatewayConfig = async ()=>{
        try {
            // 1. Read user-configured credentials from CRM communications settings
            let hasLocal = false;
            const saved = localStorage.getItem("crm_communications_config");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed === null || parsed === void 0 ? void 0 : parsed.sms) {
                    const s = parsed.sms;
                    if (s.senderId) setSmsSenderId(s.senderId);
                    if (s.username) setSmsUsername(s.username);
                    if (s.authKey) setSmsApiKey(s.authKey);
                    if (s.dltEntityId) setSmsEntityId(s.dltEntityId);
                    if (s.senderId || s.username || s.authKey) hasLocal = true;
                }
            }
            if (!hasLocal) {
                var _res_data, _res_data1;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/campaigns/sms-gateway");
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.isConfigured)) {
                    if (res.data.senderId) setSmsSenderId(res.data.senderId);
                    if (res.data.username) setSmsUsername(res.data.username);
                    if (res.data.fullApiKey) setSmsApiKey(res.data.fullApiKey);
                    if (res.data.templateId) setSmsTemplateId(res.data.templateId);
                }
            }
        } catch (err) {
        // Keep defaults
        }
    };
    // Fetch records and objectives when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCampaignModal.useEffect": ()=>{
            if (isOpen) {
                fetchDataRecords();
                fetchObjectives();
                fetchSmsGatewayConfig();
            }
        }
    }["CreateCampaignModal.useEffect"], [
        isOpen
    ]);
    const fetchDataRecords = async ()=>{
        try {
            var _res_data, _res_data1;
            setIsLoadingRecords(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/data");
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.records)) {
                setAllRawRecords(res.data.records);
                // Initial filter based on current channel
                const eligible = res.data.records.filter((r)=>channel === "email" ? r.email && r.email.includes("@") : r.phone && r.phone.replace(/\D/g, "").length >= 7);
                setAvailableRecords(eligible);
                setSelectedRecordIds(eligible.map((r)=>r.id));
            }
        } catch (err) {
            console.error("[CreateCampaign] fetchDataRecords error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Could not load Data Hub records");
        } finally{
            setIsLoadingRecords(false);
        }
    };
    // Re-filter audience records dynamically whenever outreach channel changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCampaignModal.useEffect": ()=>{
            if (allRawRecords.length === 0) return;
            const eligible = allRawRecords.filter({
                "CreateCampaignModal.useEffect.eligible": (r)=>channel === "email" ? r.email && r.email.includes("@") : r.phone && r.phone.replace(/\D/g, "").length >= 7
            }["CreateCampaignModal.useEffect.eligible"]);
            setAvailableRecords(eligible);
            setSelectedRecordIds(eligible.map({
                "CreateCampaignModal.useEffect": (r)=>r.id
            }["CreateCampaignModal.useEffect"]));
        }
    }["CreateCampaignModal.useEffect"], [
        channel,
        allRawRecords
    ]);
    // Filtered audience records
    const filteredAudience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[filteredAudience]": ()=>{
            return availableRecords.filter({
                "CreateCampaignModal.useMemo[filteredAudience]": (r)=>{
                    if (audienceCategoryFilter !== "All" && r.category !== audienceCategoryFilter) {
                        return false;
                    }
                    if (audienceSearch.trim()) {
                        const q = audienceSearch.toLowerCase();
                        return r.name.toLowerCase().includes(q) || r.company && r.company.toLowerCase().includes(q) || r.email && r.email.toLowerCase().includes(q) || r.phone && r.phone.toLowerCase().includes(q);
                    }
                    return true;
                }
            }["CreateCampaignModal.useMemo[filteredAudience]"]);
        }
    }["CreateCampaignModal.useMemo[filteredAudience]"], [
        availableRecords,
        audienceCategoryFilter,
        audienceSearch
    ]);
    // Selected records objects
    const selectedRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[selectedRecords]": ()=>{
            const idSet = new Set(selectedRecordIds);
            return availableRecords.filter({
                "CreateCampaignModal.useMemo[selectedRecords]": (r)=>idSet.has(r.id)
            }["CreateCampaignModal.useMemo[selectedRecords]"]);
        }
    }["CreateCampaignModal.useMemo[selectedRecords]"], [
        availableRecords,
        selectedRecordIds
    ]);
    // Categories list for audience filter
    const categoriesList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[categoriesList]": ()=>{
            const cats = Array.from(new Set(availableRecords.map({
                "CreateCampaignModal.useMemo[categoriesList].cats": (r)=>r.category
            }["CreateCampaignModal.useMemo[categoriesList].cats"]).filter(Boolean)));
            return [
                "All",
                ...cats
            ];
        }
    }["CreateCampaignModal.useMemo[categoriesList]"], [
        availableRecords
    ]);
    // Deduplication check (Email address or Mobile number based on channel)
    const duplicateRecipientsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[duplicateRecipientsCount]": ()=>{
            const counts = new Map();
            for (const r of selectedRecords){
                const key = channel === "email" ? (r.email || "").toLowerCase().trim() : (r.phone || "").replace(/\D/g, "");
                if (key) {
                    counts.set(key, (counts.get(key) || 0) + 1);
                }
            }
            let dupes = 0;
            counts.forEach({
                "CreateCampaignModal.useMemo[duplicateRecipientsCount]": (count)=>{
                    if (count > 1) dupes += count - 1;
                }
            }["CreateCampaignModal.useMemo[duplicateRecipientsCount]"]);
            return dupes;
        }
    }["CreateCampaignModal.useMemo[duplicateRecipientsCount]"], [
        selectedRecords,
        channel
    ]);
    // Insert variable tag into body textarea at cursor
    const handleInsertTag = (tag)=>{
        if (!bodyTextareaRef.current) {
            setBody((prev)=>prev + " " + tag);
            return;
        }
        const textarea = bodyTextareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const before = body.substring(0, start);
        const after = body.substring(end);
        const newBody = before + tag + after;
        setBody(newBody);
        setTimeout(()=>{
            textarea.focus();
            textarea.setSelectionRange(start + tag.length, start + tag.length);
        }, 10);
    };
    // Check if string contains HTML tags
    const isHtmlContent = (str)=>{
        return /<\/?[a-z][\s\S]*>/i.test(str);
    };
    // Upload image/video file to PingDart backend
    const handleMediaUpload = async (file)=>{
        try {
            var _res_data;
            setIsUploadingMedia(true);
            const formData = new FormData();
            formData.append("file", file);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/campaigns/upload-asset", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.url) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Media uploaded successfully!");
                return res.data.url;
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Media upload failed");
                return null;
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("[CreateCampaign] Upload asset error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Error uploading media file");
            return null;
        } finally{
            setIsUploadingMedia(false);
        }
    };
    // WhatsApp Template Presets Handler
    const handleSelectWaPreset = (presetId)=>{
        setSelectedWaPresetId(presetId);
        if (presetId === "custom") return;
        const preset = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$campaignPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_TEMPLATE_PRESETS"].find((p)=>p.id === presetId);
        if (preset) {
            setWhatsappTemplateId(preset.templateId);
            setWhatsappMediaType(preset.mediaType || "none");
            if (preset.mediaUrl) setWhatsappHeaderMediaUrl(preset.mediaUrl);
            if (preset.documentFilename) setWhatsappDocumentFilename(preset.documentFilename);
            setBody(preset.body);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Loaded "${preset.name}" template`);
        }
    };
    // SMS Template Presets Handler
    const handleSelectSmsPreset = (presetId)=>{
        setSelectedSmsPresetId(presetId);
        if (presetId === "custom") return;
        const preset = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$campaignPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMS_TEMPLATE_PRESETS"].find((p)=>p.id === presetId);
        if (preset) {
            setSmsTemplateId(preset.templateId);
            if (preset.senderId && !smsSenderId) setSmsSenderId(preset.senderId);
            setBody(preset.body);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Loaded "${preset.name}" DLT template`);
        }
    };
    // Direct WhatsApp Media Upload handler (Image, Video MP4, Document PDF)
    const handleWhatsAppMediaUpload = async (file)=>{
        const url = await handleMediaUpload(file);
        if (url) {
            setWhatsappHeaderMediaUrl(url);
            if (file.type.startsWith("video/") || file.name.endsWith(".mp4") || file.name.endsWith(".mov")) {
                setWhatsappMediaType("video");
            } else if (file.type === "application/pdf" || file.name.endsWith(".pdf") || file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
                setWhatsappMediaType("document");
                setWhatsappDocumentFilename(file.name);
            } else {
                setWhatsappMediaType("image");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`WhatsApp ${file.name} uploaded successfully!`);
        }
    };
    // Insert HTML Image snippet
    const handleInsertImage = (url, altText)=>{
        if (!url.trim()) return;
        const cleanUrl = url.trim();
        const cleanAlt = altText.trim() || "Image";
        const snippet = `\n<div style="margin: 16px 0; text-align: center;">\n  <img src="${cleanUrl}" alt="${cleanAlt}" style="max-width: 100%; height: auto; border-radius: 8px; display: inline-block;" />\n</div>\n`;
        handleInsertTag(snippet);
        setIsImageModalOpen(false);
        setImageUrl("");
        setImageAlt("");
    };
    // Insert HTML / Video Card snippet
    const handleInsertVideo = (url, posterUrl, type)=>{
        if (!url.trim()) return;
        const cleanUrl = url.trim();
        let snippet = "";
        if (type === "card") {
            // High-deliverability email video card (works in Gmail, Outlook, Apple Mail)
            let thumb = posterUrl.trim();
            if (!thumb && cleanUrl.includes("youtube.com/watch?v=")) {
                var _cleanUrl_split_;
                const vidId = (_cleanUrl_split_ = cleanUrl.split("v=")[1]) === null || _cleanUrl_split_ === void 0 ? void 0 : _cleanUrl_split_.split("&")[0];
                if (vidId) thumb = `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;
            } else if (!thumb && cleanUrl.includes("youtu.be/")) {
                var _cleanUrl_split_1;
                const vidId = (_cleanUrl_split_1 = cleanUrl.split("youtu.be/")[1]) === null || _cleanUrl_split_1 === void 0 ? void 0 : _cleanUrl_split_1.split("?")[0];
                if (vidId) thumb = `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;
            }
            if (!thumb) {
                thumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60";
            }
            snippet = `\n<div style="margin: 20px 0; text-align: center;">\n  <a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; position: relative; text-decoration: none; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.15); max-width: 560px; width: 100%;">\n    <img src="${thumb}" alt="Watch Video" style="display: block; width: 100%; height: auto; border-radius: 12px;" />\n    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(0,0,0,0.72); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid #ffffff;">\n      <span style="display: inline-block; width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 17px solid #ffffff; margin-left: 4px;"></span>\n    </div>\n  </a>\n  <p style="margin: 8px 0 0; font-size: 12px; color: #64748b;">Click image to watch video &rarr;</p>\n</div>\n`;
        } else {
            // HTML5 Video tag
            snippet = `\n<div style="margin: 16px 0; text-align: center;">\n  <video controls poster="${posterUrl.trim()}" style="max-width: 100%; height: auto; border-radius: 8px;">\n    <source src="${cleanUrl}" type="video/mp4" />\n    Your email client does not support HTML5 video. <a href="${cleanUrl}">Click here to view video</a>.\n  </video>\n</div>\n`;
        }
        handleInsertTag(snippet);
        setIsVideoModalOpen(false);
        setVideoUrl("");
        setVideoPoster("");
    };
    // Insert Link
    const handleInsertLink = (url, text)=>{
        if (!url.trim()) return;
        const cleanUrl = url.trim();
        const cleanText = text.trim() || cleanUrl;
        const snippet = `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" style="color: #4f46e5; text-decoration: underline;">${cleanText}</a>`;
        handleInsertTag(snippet);
        setIsLinkModalOpen(false);
        setLinkUrl("");
        setLinkText("");
    };
    // Insert CTA Button
    const handleInsertButton = ()=>{
        const btnSnippet = `\n<div style="margin: 20px 0; text-align: left;">\n  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" style="background-color: #4f46e5; color: #ffffff; padding: 11px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block; box-shadow: 0 2px 4px rgba(79, 70, 229, 0.25);">\n    Book a Demo with PingDart &rarr;\n  </a>\n</div>\n`;
        handleInsertTag(btnSnippet);
    };
    const handleGenerateAiCopy = async ()=>{
        try {
            var _res_data;
            setIsGeneratingAi(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/campaigns/ai-generate-copy", {
                objective,
                targetAudience: audienceCategoryFilter !== "All" ? `${audienceCategoryFilter} Contacts` : "Potential Business Clients",
                tone: aiTone,
                keyPoints: aiProductDesc || "Save time, automate workflows, increase revenue"
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                if (res.data.subject) setSubject(res.data.subject);
                if (res.data.body) setBody(res.data.body);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("AI draft generated successfully!");
                setIsAiDrawerOpen(false);
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("[CreateCampaign] AI generation error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "AI copy generation failed");
        } finally{
            setIsGeneratingAi(false);
        }
    };
    // Live personalized preview text
    const currentPreviewRecord = selectedRecords[previewContactIndex] || selectedRecords[0] || {
        name: "Alex Morgan",
        company: "Acme Enterprises",
        category: "Customer",
        email: "alex@acme.com",
        phone: "+1 555-0199"
    };
    const previewSubject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[previewSubject]": ()=>{
            return (subject || "Quick idea for {{company}}").replace(/\{\{\s*name\s*\}\}/gi, currentPreviewRecord.name || "Alex").replace(/\{\{\s*company\s*\}\}/gi, currentPreviewRecord.company || "Acme Enterprises").replace(/\{\{\s*category\s*\}\}/gi, currentPreviewRecord.category || "Client").replace(/\{\{\s*email\s*\}\}/gi, currentPreviewRecord.email || "alex@acme.com");
        }
    }["CreateCampaignModal.useMemo[previewSubject]"], [
        subject,
        currentPreviewRecord
    ]);
    const previewBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCampaignModal.useMemo[previewBody]": ()=>{
            return (body || "Hi {{name}},\n\nI wanted to reach out to {{company}}...").replace(/\{\{\s*name\s*\}\}/gi, currentPreviewRecord.name || "Alex").replace(/\{\{\s*company\s*\}\}/gi, currentPreviewRecord.company || "Acme Enterprises").replace(/\{\{\s*category\s*\}\}/gi, currentPreviewRecord.category || "Client").replace(/\{\{\s*email\s*\}\}/gi, currentPreviewRecord.email || "alex@acme.com").replace(/\{\{\s*phone\s*\}\}/gi, currentPreviewRecord.phone || "");
        }
    }["CreateCampaignModal.useMemo[previewBody]"], [
        body,
        currentPreviewRecord
    ]);
    // Validation before proceeding
    const canProceedStep = ()=>{
        switch(currentStep){
            case 1:
                return name.trim().length > 0;
            case 2:
                return selectedRecordIds.length > 0;
            case 3:
                if (channel === "email") {
                    return fromEmail.trim().length > 0 && fromName.trim().length > 0;
                }
                if (channel === "whatsapp") {
                    return whatsappTemplateId.trim().length > 0;
                }
                if (channel === "sms") {
                    return smsSenderId.trim().length > 0 && smsTemplateId.trim().length > 0;
                }
                return true;
            case 4:
                if (channel === "email") {
                    return subject.trim().length > 0 && body.trim().length > 0;
                }
                return body.trim().length > 0;
            case 5:
            case 6:
            case 7:
            case 8:
                return true;
            default:
                return true;
        }
    };
    // Submit and create campaign
    const handleSaveCampaign = async (launchNow = false)=>{
        if (!name.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a campaign name");
            return;
        }
        if (selectedRecordIds.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select at least one recipient");
            return;
        }
        if (channel === "email" && !subject.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter an email subject line");
            return;
        }
        if (channel === "whatsapp" && !whatsappTemplateId.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a Meta WhatsApp Template ID");
            return;
        }
        if (channel === "sms" && (!smsSenderId.trim() || !smsTemplateId.trim())) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter SMS Sender ID and DLT Template ID");
            return;
        }
        if (!body.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a message body");
            return;
        }
        try {
            var _res_data;
            setIsSubmitting(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/campaigns", {
                name: name.trim(),
                objective,
                objectiveId: selectedObjectiveId,
                channel,
                subject: channel === "email" ? subject.trim() : subject.trim() || `${channel.toUpperCase()} Campaign: ${name.trim()}`,
                body: body.trim(),
                fromName: fromName.trim(),
                fromEmail: channel === "email" ? fromEmail.trim() : null,
                replyTo: channel === "email" ? replyTo.trim() || fromEmail.trim() : null,
                rateLimitPerMinute: Number(rateLimitPerMinute),
                selectedRecordIds,
                targetFilters: {
                    category: audienceCategoryFilter
                },
                // WhatsApp Meta Details
                whatsappTemplateId: whatsappTemplateId.trim(),
                whatsappLanguage: whatsappLanguage.trim(),
                whatsappSenderNumber: whatsappSenderNumber.trim(),
                whatsappMediaType: whatsappMediaType,
                whatsappHeaderMediaUrl: whatsappHeaderMediaUrl.trim(),
                whatsappDocumentFilename: whatsappDocumentFilename.trim(),
                // SMS Details (smslogin.co)
                smsSenderId: smsSenderId.trim(),
                smsTemplateId: smsTemplateId.trim(),
                smsEntityId: smsEntityId.trim(),
                smsUsername: smsUsername.trim(),
                smsApiKey: smsApiKey.trim()
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.campaign) {
                const createdCamp = res.data.campaign;
                // If user approved & wants to launch now
                if (launchNow && isApproved) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post(`/crm/campaigns/${createdCamp.id}/approve`);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post(`/crm/campaigns/${createdCamp.id}/launch`);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Campaign "${createdCamp.name}" approved & launched!`);
                    } catch (launchErr) {
                        var _launchErr_response_data, _launchErr_response;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_launchErr_response = launchErr.response) === null || _launchErr_response === void 0 ? void 0 : (_launchErr_response_data = _launchErr_response.data) === null || _launchErr_response_data === void 0 ? void 0 : _launchErr_response_data.error) || "Campaign saved, but launch failed");
                    }
                } else if (isApproved) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post(`/crm/campaigns/${createdCamp.id}/approve`);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Campaign "${createdCamp.name}" saved and approved.`);
                    } catch (_) {}
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Campaign "${createdCamp.name}" saved as draft.`);
                }
                onCampaignCreated(createdCamp);
                onClose();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("[CreateCampaign] handleSaveCampaign error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Failed to create campaign");
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-[10px] max-w-4xl w-full shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-[#161f2e]/70 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 631,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Create Sales Outreach Campaign"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
                                                        children: [
                                                            "Step ",
                                                            currentStep,
                                                            " of 8"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 635,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "8-step sales outreach wizard connecting directly to your Data Hub records"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 641,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 634,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 651,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-indigo-600 h-1.5 transition-all duration-300",
                            style: {
                                width: `${currentStep / 8 * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 657,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 sm:p-6 overflow-y-auto flex-1 text-xs",
                        children: [
                            currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 max-w-2xl mx-auto py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-slate-900 dark:text-white",
                                                children: "Step 1: Campaign Name & Objective"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 669,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs mt-0.5",
                                                children: "Give your sales outreach campaign a recognizable title and sales goal."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                children: [
                                                    "Campaign Title ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 678,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                autoFocus: true,
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                placeholder: "e.g. Q4 Healthcare Founders Outreach",
                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-semibold text-slate-700 dark:text-slate-300 text-xs",
                                                        children: [
                                                            "Sales Objective ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setNewObjectiveName("");
                                                            setNewObjectiveDesc("");
                                                            setObjectiveModalError("");
                                                            setIsCreateObjectiveModalOpen(true);
                                                        },
                                                        className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 707,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Create New Objective"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 708,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: objective,
                                                onChange: (e)=>{
                                                    const val = e.target.value;
                                                    if (val === "__create_new__") {
                                                        setNewObjectiveName("");
                                                        setNewObjectiveDesc("");
                                                        setObjectiveModalError("");
                                                        setIsCreateObjectiveModalOpen(true);
                                                        return;
                                                    }
                                                    setObjective(val);
                                                    const matched = objectivesList.find((o)=>o.name === val);
                                                    setSelectedObjectiveId((matched === null || matched === void 0 ? void 0 : matched.id) || null);
                                                },
                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: "Standard Objectives",
                                                        children: objectivesList.filter((o)=>o.isSystem).map((obj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: obj.name,
                                                                children: obj.name
                                                            }, obj.id, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 19
                                                    }, this),
                                                    objectivesList.some((o)=>!o.isSystem) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: "Custom Saved Objectives",
                                                        children: objectivesList.filter((o)=>!o.isSystem).map((obj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: obj.name,
                                                                children: [
                                                                    obj.name,
                                                                    " (Custom)"
                                                                ]
                                                            }, obj.id, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "__create_new__",
                                                        className: "text-indigo-600 dark:text-indigo-400 font-bold",
                                                        children: "+ Create New Objective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 712,
                                                columnNumber: 17
                                            }, this),
                                            currentSelectedObjective && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2.5 p-3 rounded-[5px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-slate-800 dark:text-slate-200 truncate",
                                                                        children: currentSelectedObjective.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 755,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    currentSelectedObjective.isSystem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
                                                                        children: "Predefined"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 759,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300",
                                                                        children: "Custom Objective"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 754,
                                                                columnNumber: 23
                                                            }, this),
                                                            currentSelectedObjective.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2",
                                                                children: currentSelectedObjective.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 21
                                                    }, this),
                                                    !currentSelectedObjective.isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: async ()=>{
                                                            if (!window.confirm(`Deactivate custom objective "${currentSelectedObjective.name}"? Existing campaigns will retain it.`)) {
                                                                return;
                                                            }
                                                            try {
                                                                var _res_data;
                                                                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].delete(`/crm/campaigns/objectives/${currentSelectedObjective.id}`);
                                                                if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Objective "${currentSelectedObjective.name}" deactivated`);
                                                                    setObjectivesList((prev)=>prev.filter((o)=>o.id !== currentSelectedObjective.id));
                                                                    const fallback = objectivesList.find((o)=>o.id !== currentSelectedObjective.id && o.isSystem) || objectivesList[0];
                                                                    if (fallback) {
                                                                        setObjective(fallback.name);
                                                                        setSelectedObjectiveId(fallback.id);
                                                                    }
                                                                }
                                                            } catch (err) {
                                                                var _err_response_data, _err_response;
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Failed to deactivate objective");
                                                            }
                                                        },
                                                        className: "text-slate-400 hover:text-rose-500 transition p-1 cursor-pointer shrink-0",
                                                        title: "Deactivate this custom objective",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 775,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 752,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this),
                            currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-slate-900 dark:text-white",
                                                        children: "Step 2: Select Target Audience from Data Hub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs mt-0.5",
                                                        children: [
                                                            "Selected ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: selectedRecordIds.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 817,
                                                                columnNumber: 30
                                                            }, this),
                                                            " of ",
                                                            availableRecords.length,
                                                            " contacts with verified emails."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 816,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 812,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSelectedRecordIds(filteredAudience.map((r)=>r.id)),
                                                        className: "px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 cursor-pointer",
                                                        children: [
                                                            "Select Filtered (",
                                                            filteredAudience.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSelectedRecordIds([]),
                                                        className: "px-2.5 py-1 text-xs font-semibold rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                        children: "Deselect All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 821,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 min-w-[200px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                        size: 14,
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: audienceSearch,
                                                        onChange: (e)=>setAudienceSearch(e.target.value),
                                                        placeholder: "Search name, company, email...",
                                                        className: "w-full h-11 pl-9 pr-3 rounded-[50px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#161f2e] text-xs text-slate-900 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 841,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: audienceCategoryFilter,
                                                onChange: (e)=>setAudienceCategoryFilter(e.target.value),
                                                className: "h-11 px-3 rounded-[50px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#161f2e] text-xs text-slate-700 dark:text-slate-200 font-semibold cursor-pointer",
                                                children: categoriesList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c,
                                                        children: c === "All" ? "All Categories" : c
                                                    }, c, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 840,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200 dark:border-slate-800 rounded-[10px] overflow-hidden max-h-72 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-slate-50 dark:bg-[#161f2e] border-b border-slate-200 dark:border-slate-800 sticky top-0 text-[10px] uppercase font-bold text-slate-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3 w-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: filteredAudience.length > 0 && filteredAudience.every((r)=>selectedRecordIds.includes(r.id)),
                                                                    onChange: ()=>{
                                                                        const ids = filteredAudience.map((r)=>r.id);
                                                                        const allSelected = ids.every((id)=>selectedRecordIds.includes(id));
                                                                        if (allSelected) {
                                                                            setSelectedRecordIds((prev)=>prev.filter((id)=>!ids.includes(id)));
                                                                        } else {
                                                                            setSelectedRecordIds((prev)=>Array.from(new Set([
                                                                                    ...prev,
                                                                                    ...ids
                                                                                ])));
                                                                        }
                                                                    },
                                                                    className: "rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Name / Company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 889,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Email Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-2.5 px-3",
                                                                children: "Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 891,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 868,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-slate-100 dark:divide-slate-800/70",
                                                    children: filteredAudience.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 4,
                                                            className: "py-8 text-center text-slate-400",
                                                            children: "No matching records with email addresses found in Data Hub."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 897,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 23
                                                    }, this) : filteredAudience.map((r)=>{
                                                        const isSelected = selectedRecordIds.includes(r.id);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            onClick: ()=>{
                                                                setSelectedRecordIds((prev)=>prev.includes(r.id) ? prev.filter((id)=>id !== r.id) : [
                                                                        ...prev,
                                                                        r.id
                                                                    ]);
                                                            },
                                                            className: `hover:bg-slate-50/80 dark:hover:bg-slate-800/40 cursor-pointer transition ${isSelected ? "bg-indigo-50/40 dark:bg-indigo-950/20" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: isSelected,
                                                                        onChange: ()=>{},
                                                                        className: "rounded text-indigo-600 focus:ring-indigo-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 916,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 915,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 font-medium text-slate-900 dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: r.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 924,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        r.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] text-slate-400",
                                                                            children: r.company
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 925,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 923,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3 text-slate-600 dark:text-slate-300 font-mono text-[11px]",
                                                                    children: r.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-2 px-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
                                                                        children: r.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 931,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 930,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, r.id, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 905,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 867,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 866,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 810,
                                columnNumber: 13
                            }, this),
                            currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 max-w-2xl mx-auto py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-slate-900 dark:text-white",
                                                children: "Step 3: Communication Channel & Sender Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 949,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs mt-0.5",
                                                children: "Select your outreach channel and configure sender credentials or template IDs."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 948,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1.5 text-slate-700 dark:text-slate-300",
                                                children: "Outreach Channel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 958,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setChannel("email"),
                                                        className: `p-3 rounded-[10px] border text-left cursor-pointer transition flex items-center gap-2.5 ${channel === "email" ? "border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20 shadow-xs" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                                size: 18,
                                                                className: "text-indigo-600 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-xs",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 973,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-slate-400",
                                                                        children: "Direct SMTP / Mail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 974,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 963,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setChannel("whatsapp"),
                                                        className: `p-3 rounded-[10px] border text-left cursor-pointer transition flex items-center gap-2.5 ${channel === "whatsapp" ? "border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20 shadow-xs" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-2xs",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3 fill-current",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.57 1.956.887 2.806.887 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.77-5.768-5.77zm3.368 8.169c-.141.398-.714.733-1.005.778-.291.045-.635.074-2.029-.499-1.666-.688-2.738-2.39-2.822-2.502-.083-.112-.676-.902-.676-1.72 0-.819.429-1.222.583-1.39.153-.168.334-.21.446-.21.111 0 .223.001.32.006.104.004.244-.039.381.293.141.341.482 1.177.525 1.263.042.086.07.187.014.298-.056.112-.084.182-.167.28-.083.098-.176.218-.251.292-.084.084-.171.176-.074.343.097.167.433.714.929 1.155.639.569 1.177.745 1.344.829.167.084.265.07.363-.042.098-.112.418-.488.53-.655.112-.167.223-.14.376-.084.153.056.974.46 1.141.544.167.084.279.126.32.196.042.07.042.404-.099.802zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 989,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 988,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 987,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-xs flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "WhatsApp"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 994,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] px-1 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold",
                                                                                children: "Meta"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 995,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 993,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-slate-400",
                                                                        children: "Meta Cloud API"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 997,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 992,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setChannel("sms"),
                                                        className: `p-3 rounded-[10px] border text-left cursor-pointer transition flex items-center gap-2.5 ${channel === "sms" ? "border-sky-600 bg-sky-50/60 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 ring-2 ring-sky-500/20 shadow-xs" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-2xs",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3 fill-current",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1012,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1011,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-xs flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "SMS Outreach"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1017,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] px-1 py-0.2 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-semibold",
                                                                                children: "DLT"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1018,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1016,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-slate-400",
                                                                        children: "10DLC / Telecom Gateway"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1020,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 961,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 957,
                                        columnNumber: 15
                                    }, this),
                                    channel === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    "Sender Display Name ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1032,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1031,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: fromName,
                                                                onChange: (e)=>setFromName(e.target.value),
                                                                placeholder: "e.g. John from PingDart",
                                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1034,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1030,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    "Sender Email Address ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1046,
                                                                        columnNumber: 46
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1045,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                required: true,
                                                                value: fromEmail,
                                                                onChange: (e)=>setFromEmail(e.target.value),
                                                                placeholder: "info@pingdart.com",
                                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                        children: "Reply-To Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: replyTo,
                                                        onChange: (e)=>setReplyTo(e.target.value),
                                                        placeholder: "Replies will route here (e.g. info@pingdart.com)",
                                                        className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1063,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1059,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 17
                                    }, this),
                                    channel === "whatsapp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-xs text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "⚡ Meta Approved Template Message Presets"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1080,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1079,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-emerald-700 dark:text-emerald-300 font-medium",
                                                                children: "Quick loads template & text"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1082,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1078,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedWaPresetId,
                                                        onChange: (e)=>handleSelectWaPreset(e.target.value),
                                                        className: "w-full h-10 px-3 rounded-[5px] border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs font-semibold cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "custom",
                                                                children: "-- Custom Template ID & Message --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1091,
                                                                columnNumber: 23
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$campaignPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_TEMPLATE_PRESETS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.id,
                                                                    children: [
                                                                        p.name,
                                                                        " • ",
                                                                        p.templateId
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1093,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                                children: "WhatsApp Sender Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1102,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: whatsappSenderNumber,
                                                                onChange: (e)=>setWhatsappSenderNumber(e.target.value),
                                                                placeholder: "+1 (555) 019-2834",
                                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    "Meta Approved Template ID ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1116,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1115,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: whatsappTemplateId,
                                                                onChange: (e)=>setWhatsappTemplateId(e.target.value),
                                                                placeholder: "e.g. sales_reengage_v2 or outreach_template",
                                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 font-mono"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1114,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                        children: "Template Language Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: whatsappLanguage,
                                                        onChange: (e)=>setWhatsappLanguage(e.target.value),
                                                        className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs cursor-pointer font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "en_US",
                                                                children: "English (US) [en_US]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1138,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "en_GB",
                                                                children: "English (UK) [en_GB]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1139,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "hi",
                                                                children: "Hindi (India) [hi]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1140,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "es",
                                                                children: "Spanish [es]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ar",
                                                                children: "Arabic [ar]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "fr",
                                                                children: "French [fr]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "de",
                                                                children: "German [de]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1144,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "pt_BR",
                                                                children: "Portuguese [pt_BR]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1133,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1129,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#161f2e]/60 space-y-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                                        size: 14,
                                                                        className: "text-emerald-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1153,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "WhatsApp Header Media Support"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1154,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1152,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 font-mono",
                                                                children: "Image • Video • PDF Document"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1156,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 gap-1.5 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-lg text-xs",
                                                        children: [
                                                            {
                                                                id: "none",
                                                                label: "No Media"
                                                            },
                                                            {
                                                                id: "image",
                                                                label: "🖼️ Image"
                                                            },
                                                            {
                                                                id: "video",
                                                                label: "🎬 Video (MP4)"
                                                            },
                                                            {
                                                                id: "document",
                                                                label: "📄 PDF / Doc"
                                                            }
                                                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    const newType = tab.id;
                                                                    setWhatsappMediaType(newType);
                                                                    if (newType === "image" && !whatsappHeaderMediaUrl) {
                                                                        setWhatsappHeaderMediaUrl("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80");
                                                                    } else if (newType === "video" && !whatsappHeaderMediaUrl) {
                                                                        setWhatsappHeaderMediaUrl("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");
                                                                    } else if (newType === "document" && !whatsappHeaderMediaUrl) {
                                                                        setWhatsappHeaderMediaUrl("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
                                                                    }
                                                                },
                                                                className: `py-1.5 px-2 rounded-md font-bold text-center transition cursor-pointer ${whatsappMediaType === tab.id ? "bg-white dark:bg-[#111827] text-emerald-700 dark:text-emerald-300 shadow-2xs" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,
                                                                children: tab.label
                                                            }, tab.id, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1167,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 21
                                                    }, this),
                                                    whatsappMediaType !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 pt-1 animate-in fade-in duration-150",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        value: whatsappHeaderMediaUrl,
                                                                        onChange: (e)=>setWhatsappHeaderMediaUrl(e.target.value),
                                                                        placeholder: whatsappMediaType === "video" ? "https://example.com/demo.mp4" : whatsappMediaType === "document" ? "https://example.com/brochure.pdf" : "https://example.com/banner.jpg",
                                                                        className: "flex-1 h-10 px-3 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1195,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        ref: waMediaFileInputRef,
                                                                        className: "hidden",
                                                                        accept: whatsappMediaType === "video" ? "video/mp4,video/*" : whatsappMediaType === "document" ? "application/pdf,.doc,.docx" : "image/*",
                                                                        onChange: (e)=>{
                                                                            var _e_target_files;
                                                                            const f = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                                                            if (f) handleWhatsAppMediaUpload(f);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1209,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            var _waMediaFileInputRef_current;
                                                                            return (_waMediaFileInputRef_current = waMediaFileInputRef.current) === null || _waMediaFileInputRef_current === void 0 ? void 0 : _waMediaFileInputRef_current.click();
                                                                        },
                                                                        disabled: isUploadingMedia,
                                                                        className: "h-10 px-3.5 rounded-[5px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0 disabled:opacity-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1232,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: isUploadingMedia ? "Uploading..." : "Upload File"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1233,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1226,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1194,
                                                                columnNumber: 25
                                                            }, this),
                                                            whatsappMediaType === "document" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-0.5",
                                                                        children: "Document Display Filename"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1239,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: whatsappDocumentFilename,
                                                                        onChange: (e)=>setWhatsappDocumentFilename(e.target.value),
                                                                        placeholder: "e.g. PingDart_Enterprise_Brochure.pdf",
                                                                        className: "w-full h-9 px-3 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-900 dark:text-white text-xs font-mono"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1242,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1238,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1193,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-[10px] bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-200 flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold shrink-0",
                                                        children: "Meta Cloud Policy:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Outbound business outreach requires a pre-approved WhatsApp Template ID. Merge variables ({{name}}, {{company}}) and media headers (images, video MP4, PDF docs) are dispatched natively via Meta Graph API."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1255,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1075,
                                        columnNumber: 17
                                    }, this),
                                    channel === "sms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/80 space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-xs text-sky-950 dark:text-sky-200 flex items-center gap-1.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "⚡ Telecom DLT Approved Template Presets"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1268,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1267,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-sky-700 dark:text-sky-300 font-medium",
                                                                children: "Auto-loads DLT Template ID & Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1270,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedSmsPresetId,
                                                        onChange: (e)=>handleSelectSmsPreset(e.target.value),
                                                        className: "w-full h-10 px-3 rounded-[5px] border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs font-semibold cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "custom",
                                                                children: "-- Custom DLT Header & Template ID --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1279,
                                                                columnNumber: 23
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$campaignPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMS_TEMPLATE_PRESETS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: p.id,
                                                                    children: [
                                                                        p.name,
                                                                        " • ",
                                                                        p.templateId
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1281,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    "SMS Sender ID / Header ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1291,
                                                                        columnNumber: 48
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: smsSenderId,
                                                                onChange: (e)=>setSmsSenderId(e.target.value),
                                                                placeholder: "e.g. SENDER or DLT Sender ID",
                                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 font-mono"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    "DLT / 10DLC Template ID ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1305,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1304,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: smsTemplateId,
                                                                onChange: (e)=>setSmsTemplateId(e.target.value),
                                                                placeholder: "e.g. 1707177113534365278 or DLT Template ID",
                                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 font-mono"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1307,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1303,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1288,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                        children: [
                                                            "Entity ID / Principal Entity ID ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 font-normal",
                                                                children: "(optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1320,
                                                                columnNumber: 55
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1319,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: smsEntityId,
                                                        onChange: (e)=>setSmsEntityId(e.target.value),
                                                        placeholder: "e.g. 1701159123456789012",
                                                        className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1318,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3.5 rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50/50 dark:bg-[#161f2e]/60 space-y-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-bold text-xs text-sky-950 dark:text-sky-200 flex items-center gap-1.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "🔑 Gateway HTTP API (smslogin.co / ivaclt)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1335,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1334,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-sky-600 dark:text-sky-400 font-mono",
                                                                children: "v3/api.php"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1337,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1",
                                                                        children: "Gateway Username"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1344,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: smsUsername,
                                                                        onChange: (e)=>setSmsUsername(e.target.value),
                                                                        placeholder: "Enter gateway username",
                                                                        className: "w-full h-10 px-3 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-900 dark:text-white text-xs font-mono"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1347,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1343,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1",
                                                                        children: "API Key"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1357,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: smsApiKey,
                                                                        onChange: (e)=>setSmsApiKey(e.target.value),
                                                                        placeholder: "Enter gateway API key",
                                                                        className: "w-full h-10 px-3 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-900 dark:text-white text-xs font-mono"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1360,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1356,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                        children: "Dispatched directly via your configured SMS gateway. You can override with custom client keys anytime."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1370,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1332,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-[10px] bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-[11px] text-sky-800 dark:text-sky-200 flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold shrink-0",
                                                        children: "Telecom Compliance:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1376,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "DLT regulations (TRAI) and A2P 10DLC require outbound SMS to use a registered Sender ID header and an approved Content Template ID. Standard GSM SMS is 160 characters per credit."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1377,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 947,
                                columnNumber: 13
                            }, this),
                            currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3.5 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-slate-900 dark:text-white",
                                                        children: "Step 4: Compose Message & Personalization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1389,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs mt-0.5",
                                                        children: "Click any tag below to insert dynamic recipient attributes."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsAiDrawerOpen(!isAiDrawerOpen),
                                                className: "h-8 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs self-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1402,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "✨ Draft with AI Copywriter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1403,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1387,
                                        columnNumber: 15
                                    }, this),
                                    isAiDrawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 space-y-2.5 animate-in fade-in duration-150",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-indigo-900 dark:text-indigo-200 text-xs flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                                size: 14,
                                                                className: "text-indigo-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1412,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Direct AI Copywriter (OpenAI / LLM Engine)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1413,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsAiDrawerOpen(false),
                                                        className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs",
                                                        children: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1415,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1410,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: aiProductDesc,
                                                        onChange: (e)=>setAiProductDesc(e.target.value),
                                                        placeholder: "What is your value offer? e.g. B2B cloud ERP, 30% time saved...",
                                                        className: "h-9 px-3 rounded-lg border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-[#161f2e] text-xs text-slate-900 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: aiTone,
                                                                onChange: (e)=>setAiTone(e.target.value),
                                                                className: "h-9 px-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-[#161f2e] text-xs text-slate-900 dark:text-white font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "friendly and professional",
                                                                        children: "Friendly & Professional"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1437,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "direct and concise executive",
                                                                        children: "Direct & Concise Executive"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1438,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "consultative advisory",
                                                                        children: "Consultative Advisory"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1439,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1432,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                disabled: isGeneratingAi,
                                                                onClick: handleGenerateAiCopy,
                                                                className: "h-9 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shrink-0 cursor-pointer transition disabled:opacity-50",
                                                                children: isGeneratingAi ? "Generating..." : "Generate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1441,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1431,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1423,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1409,
                                        columnNumber: 17
                                    }, this),
                                    channel === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                children: [
                                                    "Email Subject Line ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: subject,
                                                onChange: (e)=>setSubject(e.target.value),
                                                placeholder: "e.g. Quick question regarding {{company}}'s operations",
                                                className: "w-full h-11 px-3.5 rounded-[5px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 font-medium"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1460,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1456,
                                        columnNumber: 17
                                    }, this) : channel === "whatsapp" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-[10px] bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-emerald-900 dark:text-emerald-200",
                                                        children: [
                                                            "Meta WhatsApp Template: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "font-mono bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-700",
                                                                children: whatsappTemplateId || "template_id_required"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1474,
                                                                columnNumber: 47
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1473,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1471,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-full",
                                                children: whatsappLanguage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1477,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1470,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-[10px] bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full bg-sky-500 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1484,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-sky-900 dark:text-sky-200",
                                                        children: [
                                                            "DLT SMS Template: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "font-mono bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-sky-300 dark:border-sky-700",
                                                                children: smsTemplateId || "dlt_id_required"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1486,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1483,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-mono text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/60 px-2 py-0.5 rounded-full",
                                                children: [
                                                    "Sender: ",
                                                    smsSenderId || "Standard"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1489,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1482,
                                        columnNumber: 17
                                    }, this),
                                    channel === "whatsapp" && whatsappMediaType !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-emerald-800 dark:text-emerald-200 flex items-center gap-1",
                                                        children: [
                                                            whatsappMediaType === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video02Icon"], {
                                                                size: 14,
                                                                className: "text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1500,
                                                                columnNumber: 25
                                                            }, this) : whatsappMediaType === "document" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$DocumentCodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentCodeIcon"], {
                                                                size: 14,
                                                                className: "text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1502,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                                size: 14,
                                                                className: "text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1504,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Attached ",
                                                                    whatsappMediaType.toUpperCase(),
                                                                    " Header:"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1506,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1498,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[11px] text-slate-600 dark:text-slate-300 truncate max-w-sm",
                                                        children: whatsappMediaType === "document" ? whatsappDocumentFilename : whatsappHeaderMediaUrl
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1508,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1497,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setWhatsappMediaType("none");
                                                    setWhatsappHeaderMediaUrl("");
                                                },
                                                className: "text-[11px] text-rose-500 hover:text-rose-700 font-bold ml-2 shrink-0 cursor-pointer",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1512,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1496,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between flex-wrap gap-2 p-2 bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 rounded-[10px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                        children: channel === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("<b>Bold text</b>"),
                                                                    className: "h-7 px-2 rounded-[5px] text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "Insert bold text",
                                                                    children: "B"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1532,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("<i>Italic text</i>"),
                                                                    className: "h-7 px-2 rounded-[5px] text-xs font-serif italic bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "Insert italic text",
                                                                    children: "I"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1540,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("\n<h2 style=\"font-size:18px;margin:16px 0 8px;color:#1e293b;\">Section Heading</h2>\n"),
                                                                    className: "h-7 px-2 rounded-[5px] text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "Insert heading",
                                                                    children: "H2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1548,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1557,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setIsImageModalOpen(true),
                                                                    className: "h-7 px-2.5 rounded-[5px] text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer transition",
                                                                    title: "Insert Image (Upload or URL)",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                                            size: 13,
                                                                            className: "text-indigo-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1565,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "+ Image"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1566,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1559,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setIsVideoModalOpen(true),
                                                                    className: "h-7 px-2.5 rounded-[5px] text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer transition",
                                                                    title: "Insert Video (YouTube, Loom, MP4, HTML5)",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video02Icon"], {
                                                                            size: 13,
                                                                            className: "text-purple-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1575,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "+ Video"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1576,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1569,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setIsLinkModalOpen(true),
                                                                    className: "h-7 px-2.5 rounded-[5px] text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1 cursor-pointer transition",
                                                                    title: "Insert Link",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"], {
                                                                            size: 13,
                                                                            className: "text-slate-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1585,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Link"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1586,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1579,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleInsertButton,
                                                                    className: "h-7 px-2.5 rounded-[5px] text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 cursor-pointer transition",
                                                                    title: "Insert CTA Button",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "+ CTA Button"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1595,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1589,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : channel === "whatsapp" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("*bold text*"),
                                                                    className: "h-7 px-2 rounded-[5px] text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "WhatsApp Bold (*text*)",
                                                                    children: "*B*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1600,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("_italic text_"),
                                                                    className: "h-7 px-2 rounded-[5px] text-xs font-serif italic bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "WhatsApp Italic (_text_)",
                                                                    children: "_I_"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1608,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("~strikethrough~"),
                                                                    className: "h-7 px-2 rounded-[5px] text-xs line-through bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "WhatsApp Strikethrough (~text~)",
                                                                    children: "~S~"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1616,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleInsertTag("```monospace```"),
                                                                    className: "h-7 px-2 rounded-[5px] text-[11px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer",
                                                                    title: "WhatsApp Monospace (```text```)",
                                                                    children: "</>"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1624,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1632,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setWhatsappMediaType("image");
                                                                        setIsImageModalOpen(true);
                                                                    },
                                                                    className: `h-7 px-2 rounded-[5px] text-xs font-semibold border flex items-center gap-1 cursor-pointer transition ${whatsappMediaType === "image" ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:text-emerald-600 text-slate-700 dark:text-slate-200"}`,
                                                                    title: "Attach WhatsApp Image Header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                                            size: 13,
                                                                            className: "text-emerald-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1646,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "+ Image"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1647,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1633,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setWhatsappMediaType("video");
                                                                        setIsVideoModalOpen(true);
                                                                    },
                                                                    className: `h-7 px-2 rounded-[5px] text-xs font-semibold border flex items-center gap-1 cursor-pointer transition ${whatsappMediaType === "video" ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:text-emerald-600 text-slate-700 dark:text-slate-200"}`,
                                                                    title: "Attach WhatsApp Video Header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video02Icon"], {
                                                                            size: 13,
                                                                            className: "text-emerald-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1662,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "+ Video"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1663,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1649,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        var _waMediaFileInputRef_current;
                                                                        setWhatsappMediaType("document");
                                                                        if (!whatsappHeaderMediaUrl) {
                                                                            setWhatsappHeaderMediaUrl("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
                                                                        }
                                                                        (_waMediaFileInputRef_current = waMediaFileInputRef.current) === null || _waMediaFileInputRef_current === void 0 ? void 0 : _waMediaFileInputRef_current.click();
                                                                    },
                                                                    className: `h-7 px-2 rounded-[5px] text-xs font-semibold border flex items-center gap-1 cursor-pointer transition ${whatsappMediaType === "document" ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:text-emerald-600 text-slate-700 dark:text-slate-200"}`,
                                                                    title: "Attach WhatsApp PDF / Document Header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$DocumentCodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentCodeIcon"], {
                                                                            size: 13,
                                                                            className: "text-emerald-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1681,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "+ PDF Doc"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1682,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1665,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-slate-900 dark:text-white",
                                                                    children: "DLT Compliant SMS:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1687,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        body.length,
                                                                        " / 160 chars (",
                                                                        Math.ceil(body.length / 160) || 1,
                                                                        " SMS credit)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1688,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 1686,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1529,
                                                        columnNumber: 19
                                                    }, this),
                                                    channel === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center bg-slate-200/80 dark:bg-slate-800 p-0.5 rounded-[6px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setComposerViewMode("code"),
                                                                className: `px-2.5 py-1 rounded-[5px] text-[11px] font-bold transition cursor-pointer ${composerViewMode === "code" ? "bg-white dark:bg-[#111827] text-slate-900 dark:text-white shadow-2xs" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,
                                                                children: "HTML / Text"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1696,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setComposerViewMode("preview"),
                                                                className: `px-2.5 py-1 rounded-[5px] text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${composerViewMode === "preview" ? "bg-white dark:bg-[#111827] text-indigo-600 dark:text-indigo-400 shadow-2xs" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$EyeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1714,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Visual Preview"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1715,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1706,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1695,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-mono text-slate-400",
                                                        children: channel === "whatsapp" ? "Meta Format Supported" : "Standard GSM-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1719,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1527,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 text-[11px] mr-1",
                                                        children: "Insert tags:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1727,
                                                        columnNumber: 19
                                                    }, this),
                                                    [
                                                        "{{name}}",
                                                        "{{company}}",
                                                        "{{phone}}",
                                                        "{{category}}",
                                                        ...channel === "email" ? [
                                                            "{{email}}"
                                                        ] : []
                                                    ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleInsertTag(tag),
                                                            className: `px-2.5 py-1 rounded-[50px] text-[11px] font-mono font-bold border cursor-pointer transition shadow-2xs ${channel === "whatsapp" ? "bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800" : channel === "sms" ? "bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800" : "bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-slate-200 dark:border-slate-700"}`,
                                                            children: [
                                                                "+ ",
                                                                tag
                                                            ]
                                                        }, tag, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 1729,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1726,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1526,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                                children: [
                                                    channel === "whatsapp" ? "WhatsApp Template Message Body" : channel === "sms" ? "SMS Message Body" : "Message Body (HTML, Images & Video Supported)",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1754,
                                                        columnNumber: 72
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1749,
                                                columnNumber: 17
                                            }, this),
                                            channel === "email" && composerViewMode === "preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111827] min-h-[220px] max-h-[380px] overflow-y-auto text-xs text-slate-900 dark:text-slate-100 shadow-inner",
                                                children: body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: isHtmlContent(body) ? body : body.replace(/\n/g, "<br/>")
                                                    },
                                                    className: "space-y-3 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_video]:max-w-full [&_video]:rounded-lg [&_a]:text-indigo-600 dark:[&_a]:text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 1760,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-400 italic text-center py-12",
                                                    children: "Message body is empty. Type or insert HTML, images, and videos to see the live rendering."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 1769,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1758,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ref: bodyTextareaRef,
                                                required: true,
                                                rows: channel === "sms" ? 6 : 9,
                                                value: body,
                                                onChange: (e)=>setBody(e.target.value),
                                                placeholder: channel === "whatsapp" ? `Hi {{name}},\n\nI noticed {{company}} has been expanding recently and wanted to share how PingDart helps automate outreach.\n\nReply STOP to unsubscribe.` : channel === "sms" ? `Hi {{name}}, update for {{company}} from PingDart. Check out our latest sales tools at https://pingdart.com. Reply STOP to opt out.` : `Hi {{name}},\n\nI noticed {{company}} has been expanding recently and wanted to reach out directly...\n\n<!-- HTML, images, and videos supported -->`,
                                                className: "w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 font-mono leading-relaxed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1775,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1748,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 1386,
                                columnNumber: 13
                            }, this),
                            currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 max-w-2xl mx-auto py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$EyeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                                                size: 16,
                                                                className: "text-indigo-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1801,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Step 5: Live Personalized Preview"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1802,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1800,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs mt-0.5",
                                                        children: "See exactly how each contact will see your message with real data replaced."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1804,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1799,
                                                columnNumber: 17
                                            }, this),
                                            selectedRecords.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: previewContactIndex === 0,
                                                        onClick: ()=>setPreviewContactIndex((i)=>Math.max(0, i - 1)),
                                                        className: "px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-30 cursor-pointer text-xs",
                                                        children: "← Prev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1811,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono text-slate-400",
                                                        children: [
                                                            previewContactIndex + 1,
                                                            " / ",
                                                            selectedRecords.length
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1819,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: previewContactIndex >= selectedRecords.length - 1,
                                                        onClick: ()=>setPreviewContactIndex((i)=>Math.min(selectedRecords.length - 1, i + 1)),
                                                        className: "px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-30 cursor-pointer text-xs",
                                                        children: "Next →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1822,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1810,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1798,
                                        columnNumber: 15
                                    }, this),
                                    channel === "email" ? /* Email Envelope Mockup */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200 dark:border-slate-800 rounded-2xl p-5 bg-white dark:bg-[#111827] shadow-xs space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 w-16",
                                                                children: "To:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1840,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-slate-900 dark:text-white",
                                                                children: [
                                                                    currentPreviewRecord.name,
                                                                    " <",
                                                                    currentPreviewRecord.email,
                                                                    ">"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1841,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] px-2 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500",
                                                                children: currentPreviewRecord.company || "No Company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1844,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1839,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 w-16",
                                                                children: "From:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1849,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    fromName,
                                                                    " <",
                                                                    fromEmail,
                                                                    ">"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1850,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1848,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 w-16",
                                                                children: "Subject:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1855,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: previewSubject
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1856,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1854,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1838,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-slate-50/70 dark:bg-[#161f2e]/60 rounded-xl text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans min-h-[160px] overflow-x-auto border border-slate-200 dark:border-slate-800",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: isHtmlContent(previewBody) ? previewBody : previewBody.replace(/\n/g, "<br/>")
                                                    },
                                                    className: "space-y-3 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_video]:max-w-full [&_video]:rounded-lg [&_a]:text-indigo-600 dark:[&_a]:text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 1864,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1863,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1837,
                                        columnNumber: 17
                                    }, this) : channel === "whatsapp" ? /* WhatsApp Smartphone Mockup */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md mx-auto border border-slate-300 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-[#111827]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#075e54] text-white px-4 py-3 flex items-center justify-between shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center border border-white/20",
                                                                children: ((_currentPreviewRecord_name = currentPreviewRecord.name) === null || _currentPreviewRecord_name === void 0 ? void 0 : _currentPreviewRecord_name.charAt(0)) || "W"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1880,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-xs leading-tight",
                                                                        children: currentPreviewRecord.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1884,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-emerald-100 flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: currentPreviewRecord.phone || "+1 555-0199"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1886,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1887,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-emerald-200",
                                                                                children: "Online"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                lineNumber: 1888,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1885,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1883,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1879,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono bg-[#128c7e] px-2 py-0.5 rounded-full text-white/90",
                                                        children: "Meta Verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1892,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1878,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 min-h-[260px] bg-[#efeae2] dark:bg-[#0b141a] space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] bg-white/80 dark:bg-slate-800/80 text-slate-500 px-2 py-0.5 rounded-md shadow-2xs font-medium",
                                                            children: [
                                                                "Template: ",
                                                                whatsappTemplateId || "sales_outreach_v1",
                                                                " (",
                                                                whatsappLanguage,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 1900,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1899,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-[85%] bg-white dark:bg-[#202c33] text-slate-900 dark:text-slate-100 p-3 rounded-2xl rounded-tl-xs shadow-xs space-y-2.5 border border-slate-200/50 dark:border-slate-700/50",
                                                        children: [
                                                            whatsappHeaderMediaUrl && whatsappMediaType !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700",
                                                                children: whatsappMediaType === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                            src: whatsappHeaderMediaUrl,
                                                                            controls: true,
                                                                            className: "w-full max-h-52 object-cover rounded-xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1910,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-2 right-2 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 pointer-events-none",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video02Icon"], {
                                                                                    size: 12,
                                                                                    className: "text-emerald-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                    lineNumber: 1916,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "WhatsApp Video"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                    lineNumber: 1917,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1915,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1909,
                                                                    columnNumber: 29
                                                                }, this) : whatsappMediaType === "document" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 bg-slate-100/90 dark:bg-[#111b21] rounded-xl flex items-center justify-between gap-3 border border-slate-200 dark:border-slate-700/60",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2.5 overflow-hidden",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-9 h-9 rounded-lg bg-rose-500/15 text-rose-600 dark:text-rose-400 font-black text-xs flex items-center justify-center shrink-0 border border-rose-500/20",
                                                                                    children: "PDF"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                    lineNumber: 1923,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "truncate",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "font-semibold text-xs text-slate-900 dark:text-slate-100 truncate",
                                                                                            children: whatsappDocumentFilename || "Document.pdf"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                            lineNumber: 1927,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-[10px] text-slate-400 flex items-center gap-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "1.4 MB"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                                    lineNumber: 1931,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "•"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                                    lineNumber: 1932,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "PDF Document"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                                    lineNumber: 1933,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                            lineNumber: 1930,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                                    lineNumber: 1926,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1922,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: whatsappHeaderMediaUrl,
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            className: "w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 transition shadow-xs text-xs",
                                                                            title: "Download Document",
                                                                            children: "↓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                            lineNumber: 1937,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1921,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: whatsappHeaderMediaUrl,
                                                                    alt: "WhatsApp Header Media",
                                                                    className: "w-full h-40 object-cover rounded-xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                    lineNumber: 1948,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1907,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs leading-relaxed whitespace-pre-wrap font-sans",
                                                                children: previewBody
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1957,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-end gap-1 pt-1 text-[10px] text-slate-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "12:35 PM"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1961,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sky-500 font-bold",
                                                                        children: "✓✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 1962,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1960,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1905,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1898,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1876,
                                        columnNumber: 17
                                    }, this) : /* SMS Mobile Screen Mockup */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md mx-auto border border-slate-300 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-[#111827]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-100 dark:bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-indigo-600 dark:text-indigo-400 font-semibold cursor-pointer",
                                                        children: "← Messages"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1972,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: smsSenderId || "SMS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1974,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: [
                                                                    "SMS • DLT: ",
                                                                    smsTemplateId || "Standard"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 1975,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1973,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 font-mono text-[11px]",
                                                        children: "Info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1977,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1971,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 min-h-[220px] bg-slate-50 dark:bg-[#0f172a] space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-[10px] text-slate-400 py-1",
                                                        children: "Today 12:35 PM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1982,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-[85%] ml-auto bg-indigo-600 text-white p-3.5 rounded-2xl rounded-tr-xs shadow-xs space-y-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs leading-relaxed whitespace-pre-wrap font-sans",
                                                            children: previewBody
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 1986,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1985,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right text-[10px] text-slate-400 pr-1",
                                                        children: [
                                                            "Delivered via ",
                                                            smsSenderId || "SMS Gateway"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 1990,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 1981,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 1969,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 1797,
                                columnNumber: 13
                            }, this),
                            currentStep === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 max-w-2xl mx-auto py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"], {
                                                        size: 16,
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2004,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Step 6: Sending Pacing & Schedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2005,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2003,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs mt-0.5",
                                                children: "Protect domain deliverability and reputation with rate-limited sending."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2007,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2002,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                children: "Sending Rate Limit (Emails per Minute)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2013,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: rateLimitPerMinute,
                                                onChange: (e)=>setRateLimitPerMinute(Number(e.target.value)),
                                                className: "w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs font-semibold cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 10,
                                                        children: "10 per minute (Conservative - Best for new domains)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2021,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 30,
                                                        children: "30 per minute (Recommended - Balanced)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2022,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 60,
                                                        children: "60 per minute (High Volume - Established warm domains)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2023,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2016,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2012,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                children: "Dispatch Timing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2028,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSendTiming("immediate"),
                                                        className: `p-3 rounded-xl border text-left cursor-pointer transition ${sendTiming === "immediate" ? "border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-xs",
                                                                children: "Send Immediately Upon Launch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2040,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-slate-400 mt-0.5",
                                                                children: "Dispatch as soon as approved"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2041,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2032,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSendTiming("scheduled"),
                                                        className: `p-3 rounded-xl border text-left cursor-pointer transition ${sendTiming === "scheduled" ? "border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20" : "border-slate-200 dark:border-slate-700 hover:border-slate-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-xs",
                                                                children: "Schedule for Later Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2052,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-slate-400 mt-0.5",
                                                                children: "Pick specific launch window"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2053,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2044,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2031,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2027,
                                        columnNumber: 15
                                    }, this),
                                    sendTiming === "scheduled" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300",
                                                children: "Schedule Date & Time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2060,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                value: scheduledDate,
                                                onChange: (e)=>setScheduledDate(e.target.value),
                                                className: "w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2063,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2059,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 2001,
                                columnNumber: 13
                            }, this),
                            currentStep === 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 max-w-2xl mx-auto py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                        size: 16,
                                                        className: "text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2079,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Step 7: Safety & Opt-Out Verification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2080,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2078,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs mt-0.5",
                                                children: "Automated checks verify suppression, unsubscribes, and duplicate prevention."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2082,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2077,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2090,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Duplicate Prevention Check"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2091,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2089,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: duplicateRecipientsCount === 0 ? `All recipient ${channel === "email" ? "email addresses" : "phone numbers"} are 100% unique.` : `${duplicateRecipientsCount} duplicate recipient ${channel === "email" ? "emails" : "phone numbers"} were automatically deduplicated.`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2093,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2088,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2102,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Opt-Out & Suppression Registry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2103,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-600 dark:text-slate-300",
                                                        children: "Contacts on your suppression list are automatically flagged and excluded from dispatch."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2087,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: "Total Contacts Selected:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-900 dark:text-white font-mono",
                                                        children: selectedRecords.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            "Unique Valid ",
                                                            channel === "email" ? "Email" : "Mobile Phone",
                                                            " Recipients:"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-emerald-600 dark:text-emerald-400 font-mono",
                                                        children: selectedRecords.length - duplicateRecipientsCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: "Deliverability Protocol:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-slate-700 dark:text-slate-300",
                                                        children: channel === "email" ? "PingDart Direct SMTP Engine" : channel === "whatsapp" ? "PingDart Meta Cloud WhatsApp API" : "smslogin.co Telecom DLT HTTP Gateway"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2126,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 2076,
                                columnNumber: 13
                            }, this),
                            currentStep === 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 max-w-2xl mx-auto py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                        size: 16,
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Step 8: Review & Campaign Approval"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs mt-0.5",
                                                children: "Review campaign parameters and approve before launching."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/60 dark:bg-[#161f2e]/60 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 block text-[11px]",
                                                                children: "Campaign Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2156,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 block text-[11px]",
                                                                children: "Channel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2159,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${channel === "whatsapp" ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : channel === "sms" ? "bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300" : "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"}`,
                                                                children: channel === "whatsapp" ? "💬 WhatsApp (Meta API)" : channel === "sms" ? "📱 SMS Outreach (smslogin.co)" : "✉️ Direct Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2160,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 block text-[11px]",
                                                                children: "Objective"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2177,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: objective
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 block text-[11px]",
                                                                children: "Audience Count"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2181,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                                children: [
                                                                    selectedRecords.length,
                                                                    " recipients"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2182,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2180,
                                                        columnNumber: 19
                                                    }, this),
                                                    channel === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 block text-[11px]",
                                                                children: "Sender"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2189,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-slate-900 dark:text-white",
                                                                children: [
                                                                    fromName,
                                                                    " <",
                                                                    fromEmail,
                                                                    ">"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2190,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2188,
                                                        columnNumber: 21
                                                    }, this) : channel === "whatsapp" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 block text-[11px]",
                                                                        children: "WhatsApp Sender"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2197,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-slate-900 dark:text-white",
                                                                        children: whatsappSenderNumber || "+1 555-0199"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2198,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2196,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 block text-[11px]",
                                                                        children: "Meta Template ID"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2203,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono font-bold text-emerald-600 dark:text-emerald-400",
                                                                        children: [
                                                                            whatsappTemplateId,
                                                                            " (",
                                                                            whatsappLanguage,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2204,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2202,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 block text-[11px]",
                                                                        children: "Header Media Attached"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2209,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-slate-900 dark:text-white",
                                                                        children: whatsappMediaType === "none" ? "None (Text Only Template)" : `${whatsappMediaType.toUpperCase()}: ${whatsappMediaType === "document" ? whatsappDocumentFilename : whatsappHeaderMediaUrl}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2210,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2208,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 block text-[11px]",
                                                                        children: "SMS Sender ID"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono font-bold text-slate-900 dark:text-white",
                                                                        children: smsSenderId || "MDYVIP"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2221,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2219,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 block text-[11px]",
                                                                        children: "DLT / Template ID"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2226,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-slate-700 dark:text-slate-300",
                                                                        children: smsTemplateId || "Standard"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2227,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2225,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-span-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 block text-[11px]",
                                                                        children: "SMS Gateway Provider"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2232,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-sky-600 dark:text-sky-400 font-semibold text-[11px]",
                                                                        children: [
                                                                            "smslogin.co/v3 • Account: ",
                                                                            smsUsername || "Configured"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                        lineNumber: 2233,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                                lineNumber: 2231,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2153,
                                                columnNumber: 17
                                            }, this),
                                            channel === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 block text-[11px] mb-1",
                                                        children: "Subject"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-slate-900 dark:text-white block",
                                                        children: subject
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2242,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 block text-[11px] mb-1",
                                                        children: channel === "whatsapp" ? "WhatsApp Template Message Body" : channel === "sms" ? "DLT Registered SMS Body" : "Email Message Excerpt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs font-mono whitespace-pre-wrap text-slate-800 dark:text-slate-200 max-h-24 overflow-y-auto",
                                                        children: body
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2256,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/60 dark:bg-indigo-950/40 flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "campaignApprovalCheckbox",
                                                checked: isApproved,
                                                onChange: (e)=>setIsApproved(e.target.checked),
                                                className: "mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "campaignApprovalCheckbox",
                                                className: "text-xs text-slate-800 dark:text-slate-200 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "block text-indigo-950 dark:text-indigo-200 font-bold mb-0.5",
                                                        children: "I approve this campaign for sales dispatch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2272,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Per PRD policy, sales outreach campaigns require explicit approval before personalized messages can be sent."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2271,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2263,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 2140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-[#161f2e]/70 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: currentStep > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setCurrentStep((s)=>Math.max(1, s - 1)),
                                    className: "h-10 px-4 rounded-[50px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center gap-1.5 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2292,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2286,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 2284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: currentStep < 8 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !canProceedStep(),
                                    onClick: ()=>setCurrentStep((s)=>Math.min(8, s + 1)),
                                    className: "h-10 px-5 rounded-[50px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Continue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2305,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2306,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2299,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isSubmitting,
                                            onClick: ()=>handleSaveCampaign(false),
                                            className: "h-10 px-4 rounded-[50px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-50 transition cursor-pointer",
                                            children: "Save as Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2310,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isSubmitting || !isApproved,
                                            onClick: ()=>handleSaveCampaign(true),
                                            className: "h-10 px-5 rounded-[50px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isSubmitting ? "Processing..." : "Approve & Launch Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                lineNumber: 2297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                        lineNumber: 2283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this),
            isCreateObjectiveModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-[10px] max-w-md w-full shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white",
                                            children: "Create Custom Campaign Objective"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-400 mt-0.5",
                                            children: "Define a reusable goal for your sales outreach campaigns."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2342,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCreateObjectiveModalOpen(false),
                                    className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2351,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2337,
                            columnNumber: 13
                        }, this),
                        objectiveModalError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2.5 rounded-[10px] bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                    size: 14,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2357,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: objectiveModalError
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2358,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2356,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: async (e)=>{
                                e.preventDefault();
                                setObjectiveModalError("");
                                if (!newObjectiveName.trim()) {
                                    setObjectiveModalError("Objective name is required.");
                                    return;
                                }
                                try {
                                    var _res_data;
                                    setIsSavingObjective(true);
                                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/campaigns/objectives", {
                                        name: newObjectiveName.trim(),
                                        description: newObjectiveDesc.trim() || null
                                    });
                                    if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.objective) {
                                        const created = res.data.objective;
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Objective "${created.name}" created and selected!`);
                                        setObjectivesList((prev)=>{
                                            const exists = prev.some((o)=>o.id === created.id);
                                            return exists ? prev : [
                                                ...prev,
                                                created
                                            ];
                                        });
                                        setObjective(created.name);
                                        setSelectedObjectiveId(created.id);
                                        setIsCreateObjectiveModalOpen(false);
                                        setNewObjectiveName("");
                                        setNewObjectiveDesc("");
                                    } else {
                                        var _res_data1;
                                        setObjectiveModalError(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Failed to create objective.");
                                    }
                                } catch (err) {
                                    var _err_response_data, _err_response;
                                    const msg = ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Error saving custom objective.";
                                    setObjectiveModalError(msg);
                                } finally{
                                    setIsSavingObjective(false);
                                }
                            },
                            className: "space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Objective Name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2402,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            autoFocus: true,
                                            value: newObjectiveName,
                                            onChange: (e)=>{
                                                setNewObjectiveName(e.target.value);
                                                setObjectiveModalError("");
                                            },
                                            placeholder: "e.g. Promote PingDart Professional Email",
                                            className: "w-full h-10 px-3 rounded-[10px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Description ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-normal",
                                                    children: "(optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2420,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: newObjectiveDesc,
                                            onChange: (e)=>setNewObjectiveDesc(e.target.value),
                                            placeholder: "Introduce our professional email service to eligible business contacts and generate product enquiries.",
                                            className: "w-full p-2.5 rounded-[10px] border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2422,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2418,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isSavingObjective,
                                            onClick: ()=>setIsCreateObjectiveModalOpen(false),
                                            className: "h-8.5 px-3.5 rounded-[10px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSavingObjective || !newObjectiveName.trim(),
                                            className: "h-8.5 px-4 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer",
                                            children: isSavingObjective ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Saving..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2446,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2449,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Save Objective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                        lineNumber: 2450,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2440,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2431,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2362,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                    lineNumber: 2336,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                lineNumber: 2335,
                columnNumber: 9
            }, this),
            isImageModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2467,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2466,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                                    children: "Insert Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2470,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400 mt-0.5",
                                                    children: "Embed image banners, product screenshots, or signatures."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2473,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2469,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2465,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsImageModalOpen(false),
                                    className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2483,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2478,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2464,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            ref: imageFileInputRef,
                            accept: "image/*",
                            className: "hidden",
                            onChange: async (e)=>{
                                var _e_target_files;
                                const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                if (!file) return;
                                const uploadedUrl = await handleMediaUpload(file);
                                if (uploadedUrl) {
                                    setImageUrl(uploadedUrl);
                                    if (!imageAlt) setImageAlt(file.name.replace(/\.[^/.]+$/, ""));
                                }
                                e.target.value = "";
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2488,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: isUploadingMedia,
                                        onClick: ()=>{
                                            var _imageFileInputRef_current;
                                            return (_imageFileInputRef_current = imageFileInputRef.current) === null || _imageFileInputRef_current === void 0 ? void 0 : _imageFileInputRef_current.click();
                                        },
                                        className: "w-full py-2.5 px-3 rounded-xl border border-dashed border-indigo-300 dark:border-indigo-800 hover:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2514,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isUploadingMedia ? "Uploading image..." : "Upload image from computer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2515,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2508,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2507,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full border-t border-slate-200 dark:border-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2521,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2520,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative px-2 bg-white dark:bg-[#111827] text-[10px] text-slate-400 uppercase tracking-wider font-semibold",
                                            children: "OR USE IMAGE URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2523,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2519,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Image URL ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2530,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2529,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: imageUrl,
                                            onChange: (e)=>setImageUrl(e.target.value),
                                            placeholder: "https://example.com/images/banner.jpg",
                                            className: "w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2532,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2528,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Alt Text / Caption ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-normal",
                                                    children: "(recommended)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2543,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2542,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: imageAlt,
                                            onChange: (e)=>setImageAlt(e.target.value),
                                            placeholder: "e.g. PingDart Platform Overview",
                                            className: "w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2545,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2541,
                                    columnNumber: 15
                                }, this),
                                imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-slate-400 mb-1",
                                            children: "Image Preview:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2557,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageUrl,
                                            alt: imageAlt || "Preview",
                                            className: "max-h-36 mx-auto rounded-lg object-contain",
                                            onError: (e)=>{
                                                e.target.style.display = "none";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2558,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2556,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsImageModalOpen(false),
                                            className: "h-8.5 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2570,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: !imageUrl.trim() || isUploadingMedia,
                                            onClick: ()=>handleInsertImage(imageUrl, imageAlt),
                                            className: "h-8.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2583,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Insert Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2584,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2577,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2569,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2505,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                    lineNumber: 2463,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                lineNumber: 2462,
                columnNumber: 9
            }, this),
            isVideoModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center text-purple-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video02Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2599,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2598,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                                    children: "Insert Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400 mt-0.5",
                                                    children: "Embed product demo videos, Loom pitches, or MP4 files."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2605,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2597,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsVideoModalOpen(false),
                                    className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2615,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2610,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2596,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            ref: videoFileInputRef,
                            accept: "video/*",
                            className: "hidden",
                            onChange: async (e)=>{
                                var _e_target_files;
                                const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                if (!file) return;
                                const uploadedUrl = await handleMediaUpload(file);
                                if (uploadedUrl) {
                                    setVideoUrl(uploadedUrl);
                                }
                                e.target.value = "";
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2620,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: "Email Video Format"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2639,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setVideoEmbedType("card"),
                                                    className: `p-2 rounded-xl border text-left text-xs transition cursor-pointer ${videoEmbedType === "card" ? "border-purple-600 bg-purple-50/50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 font-bold ring-1 ring-purple-500/20" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: "Play Video Card"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 2652,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-400 font-normal",
                                                            children: "Works on 100% of emails"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 2653,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2643,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setVideoEmbedType("html5"),
                                                    className: `p-2 rounded-xl border text-left text-xs transition cursor-pointer ${videoEmbedType === "html5" ? "border-purple-600 bg-purple-50/50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 font-bold ring-1 ring-purple-500/20" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: "HTML5 <video>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 2664,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-400 font-normal",
                                                            children: "Apple Mail & Modern"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                            lineNumber: 2665,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2655,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2642,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2638,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: isUploadingMedia,
                                        onClick: ()=>{
                                            var _videoFileInputRef_current;
                                            return (_videoFileInputRef_current = videoFileInputRef.current) === null || _videoFileInputRef_current === void 0 ? void 0 : _videoFileInputRef_current.click();
                                        },
                                        className: "w-full py-2.5 px-3 rounded-xl border border-dashed border-purple-300 dark:border-purple-800 hover:border-purple-500 bg-purple-50/40 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2678,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isUploadingMedia ? "Uploading video..." : "Upload video file (.mp4, .webm)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2679,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2672,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full border-t border-slate-200 dark:border-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2685,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2684,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative px-2 bg-white dark:bg-[#111827] text-[10px] text-slate-400 uppercase tracking-wider font-semibold",
                                            children: "OR ENTER VIDEO LINK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2687,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2683,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Video URL (YouTube, Vimeo, Loom, or MP4) ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2694,
                                                    columnNumber: 60
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2693,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: videoUrl,
                                            onChange: (e)=>setVideoUrl(e.target.value),
                                            placeholder: "https://www.youtube.com/watch?v=... or .mp4 link",
                                            className: "w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-purple-500/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2696,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2692,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Video Thumbnail / Poster URL ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-normal",
                                                    children: "(optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2707,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2706,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: videoPoster,
                                            onChange: (e)=>setVideoPoster(e.target.value),
                                            placeholder: "Optional cover image URL",
                                            className: "w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-purple-500/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2709,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2705,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsVideoModalOpen(false),
                                            className: "h-8.5 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2719,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: !videoUrl.trim() || isUploadingMedia,
                                            onClick: ()=>handleInsertVideo(videoUrl, videoPoster, videoEmbedType),
                                            className: "h-8.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2732,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Insert Video"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2733,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2726,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2718,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2636,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                    lineNumber: 2595,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                lineNumber: 2594,
                columnNumber: 9
            }, this),
            isLinkModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-sm w-full shadow-2xl p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                lineNumber: 2748,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2747,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                                    children: "Insert Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2751,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400 mt-0.5",
                                                    children: "Add a clickable website or document link."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2754,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2750,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2746,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsLinkModalOpen(false),
                                    className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                        lineNumber: 2764,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2759,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2745,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Destination URL ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2771,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2770,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: linkUrl,
                                            onChange: (e)=>setLinkUrl(e.target.value),
                                            placeholder: "https://example.com/demo",
                                            className: "w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2773,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2769,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold block mb-1 text-slate-700 dark:text-slate-300 text-xs",
                                            children: [
                                                "Link Text ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-normal",
                                                    children: "(optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2784,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2783,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: linkText,
                                            onChange: (e)=>setLinkText(e.target.value),
                                            placeholder: "e.g. View Product Details",
                                            className: "w-full h-10 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#161f2e] text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2786,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2782,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsLinkModalOpen(false),
                                            className: "h-8.5 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2796,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: !linkUrl.trim(),
                                            onClick: ()=>handleInsertLink(linkUrl, linkText),
                                            className: "h-8.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2809,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Insert Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                                    lineNumber: 2810,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                            lineNumber: 2803,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                                    lineNumber: 2795,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                            lineNumber: 2768,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                    lineNumber: 2744,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
                lineNumber: 2743,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/components/modals/CreateCampaignModal.tsx",
        lineNumber: 626,
        columnNumber: 5
    }, this);
}
_s(CreateCampaignModal, "nYz8LlvGZQcBCRflImH1XWVj/SI=");
_c = CreateCampaignModal;
var _c;
__turbopack_context__.k.register(_c, "CreateCampaignModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=c80d1_user_components_modules_crm_components_modals_CreateCampaignModal_tsx_764bff34._.js.map