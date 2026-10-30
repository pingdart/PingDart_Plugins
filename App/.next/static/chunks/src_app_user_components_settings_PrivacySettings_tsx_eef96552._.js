(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/settings/PrivacySettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrivacySettings",
    ()=>PrivacySettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Time01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/TickDouble01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallEnd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallEnd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FingerPrintIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserSearch01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/exploreApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$modals$2f$FaceDiscoveryScannerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/modals/FaceDiscoveryScannerModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modals/ExceptionsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BlockedContactsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BlockedContactsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$LiveLocationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/LiveLocationView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$DisappearingMessagesView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/DisappearingMessagesView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/biometrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
function PrivacySettings({ onBack }) {
    _s();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const { user, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const subtabParam = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab");
    const [subTab, setSubTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(subtabParam || null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivacySettings.useEffect": ()=>{
            if (subtabParam && subtabParam !== subTab) {
                setSubTabState(subtabParam);
            } else if (!subtabParam && subTab !== null) {
                setSubTabState(null);
            }
        }
    }["PrivacySettings.useEffect"], [
        subtabParam
    ]);
    const setSubTab = (newSubTab)=>{
        setSubTabState(newSubTab);
        const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
        newParams.set("tab", "Settings");
        newParams.set("section", "privacy");
        if (newSubTab) {
            newParams.set("subtab", newSubTab);
        } else {
            newParams.delete("subtab");
        }
        if ("TURBOPACK compile-time truthy", 1) {
            window.history.replaceState(null, "", `/user?${newParams.toString()}`);
        }
    };
    // States for privacy options
    const [lastSeen, setLastSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Nobody");
    const [profilePhoto, setProfilePhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Everyone");
    const [about, setAbout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Everyone");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Contacts");
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Nobody");
    const [emailPrivacy, setEmailPrivacy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Nobody");
    const [readReceipts, setReadReceipts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [messageTimer, setMessageTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Off");
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Everyone");
    const [silenceCalls, setSilenceCalls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [appLock, setAppLock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [privacyExceptions, setPrivacyExceptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Blocked contacts
    const [blockedList, setBlockedList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [resolvedBlockedList, setResolvedBlockedList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newBlocked, setNewBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalType, setModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Face Match & Biometrics states
    const [faceStatus, setFaceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isEnabled: false,
        isEnrolled: false,
        discoveryAudience: 'public'
    });
    const [biometricLoginOn, setBiometricLoginOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFaceScannerOpen, setIsFaceScannerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEnrollingFace, setIsEnrollingFace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPurgingFace, setIsPurgingFace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivacySettings.useEffect": ()=>{
            setBiometricLoginOn((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBiometricLoginEnabled"])());
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].getFaceStatus().then({
                "PrivacySettings.useEffect": (res)=>{
                    if (res && res.success && res.data) {
                        setFaceStatus({
                            isEnabled: !!res.data.isEnabled,
                            isEnrolled: !!res.data.isEnrolled,
                            discoveryAudience: res.data.discoveryAudience || 'public'
                        });
                    }
                }
            }["PrivacySettings.useEffect"]).catch({
                "PrivacySettings.useEffect": ()=>{}
            }["PrivacySettings.useEffect"]);
        }
    }["PrivacySettings.useEffect"], []);
    const toggleBiometricLogin = async ()=>{
        const nextVal = !biometricLoginOn;
        if (nextVal) {
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateBiometric"])("Enable Biometric & Face ID Login");
            if (ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBiometricLoginEnabled"])(true, (user === null || user === void 0 ? void 0 : user.email) || (user === null || user === void 0 ? void 0 : user.username));
                setBiometricLoginOn(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Face ID / Biometric login enabled on this device!");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Biometric verification cancelled or unavailable.");
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBiometricLoginEnabled"])(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteBiometricLoginCredentials"])();
            setBiometricLoginOn(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Biometric login disabled on this device.");
        }
    };
    const toggleFaceDiscovery = async ()=>{
        const nextVal = !faceStatus.isEnabled;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].recordFaceConsent({
                consentAgreed: nextVal,
                discoveryAudience: faceStatus.discoveryAudience
            });
            if (res.success) {
                setFaceStatus((prev)=>({
                        ...prev,
                        isEnabled: nextVal
                    }));
                if (updateUser) updateUser({
                    isFaceDiscoveryEnabled: nextVal
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(nextVal ? "Face Match Discovery turned ON" : "Face Match Discovery turned OFF");
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update Face Match settings.");
        }
    };
    const changeAudience = async (aud)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].recordFaceConsent({
                consentAgreed: faceStatus.isEnabled,
                discoveryAudience: aud
            });
            if (res.success) {
                setFaceStatus((prev)=>({
                        ...prev,
                        discoveryAudience: aud
                    }));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Audience updated successfully");
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update audience");
        }
    };
    const handleFaceEnrolled = async (vector)=>{
        setIsFaceScannerOpen(false);
        setIsEnrollingFace(true);
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Saving biometric face signature...");
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].enrollFaceBiometric({
                vector,
                discoveryAudience: faceStatus.discoveryAudience
            });
            if (res.success) {
                setFaceStatus((prev)=>({
                        ...prev,
                        isEnrolled: true,
                        isEnabled: true
                    }));
                if (updateUser) updateUser({
                    isFaceDiscoveryEnabled: true
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Face biometric enrolled successfully! You can now use Face Match.");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to enroll face.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Failed to enroll face biometric.");
        } finally{
            setIsEnrollingFace(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    const handleDeleteFaceBiometrics = async ()=>{
        if (!confirm("Are you sure you want to delete your biometric face data? Other users will no longer be able to find you via face match.")) {
            return;
        }
        setIsPurgingFace(true);
        const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Deleting biometric data...");
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$exploreApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exploreApi"].purgeFaceBiometrics();
            if (res.success) {
                setFaceStatus((prev)=>({
                        ...prev,
                        isEnrolled: false,
                        isEnabled: false
                    }));
                if (updateUser) updateUser({
                    isFaceDiscoveryEnabled: false
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Biometric face data permanently removed.");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to delete biometrics.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Failed to delete biometric data.");
        } finally{
            setIsPurgingFace(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
        }
    };
    // Load from store on mount / user change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivacySettings.useEffect": ()=>{
            if (user) {
                setLastSeen(user.privacyLastSeen || "Nobody");
                setProfilePhoto(user.privacyProfilePhoto || "Everyone");
                setAbout(user.privacyAbout || "Everyone");
                setStatus(user.privacyStatus || "Contacts");
                setPhoneNumber(user.privacyPhoneNumber || "Nobody");
                setEmailPrivacy(user.privacyEmail || "Nobody");
                setReadReceipts(user.privacyReadReceipts !== false); // default true
                setMessageTimer(user.privacyMessageTimer || "Off");
                setGroups(user.privacyGroups || "Everyone");
                setSilenceCalls(user.privacySilenceCalls !== false); // default true
                setAppLock(user.privacyAppLock === true);
                setBlockedList(user.blockedContacts || []);
                setPrivacyExceptions(user.privacyExceptions || {});
            }
        }
    }["PrivacySettings.useEffect"], [
        user
    ]);
    // Fetch live blocked contacts from chatApi & listen for updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivacySettings.useEffect": ()=>{
            const fetchBlocked = {
                "PrivacySettings.useEffect.fetchBlocked": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getBlockedContacts();
                        if (res && res.success) {
                            if (Array.isArray(res.blockedContacts)) {
                                setBlockedList(res.blockedContacts);
                                if (updateUser) updateUser({
                                    blockedContacts: res.blockedContacts
                                });
                            }
                            if (Array.isArray(res.resolvedContacts)) setResolvedBlockedList(res.resolvedContacts);
                        }
                    } catch (err) {
                        console.error("Failed to fetch blocked contacts", err);
                    }
                }
            }["PrivacySettings.useEffect.fetchBlocked"];
            fetchBlocked();
            const handleUpdated = {
                "PrivacySettings.useEffect.handleUpdated": ()=>fetchBlocked()
            }["PrivacySettings.useEffect.handleUpdated"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener("blocked_contacts_updated", handleUpdated);
            }
            return ({
                "PrivacySettings.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener("blocked_contacts_updated", handleUpdated);
                    }
                }
            })["PrivacySettings.useEffect"];
        }
    }["PrivacySettings.useEffect"], []);
    const updatePrivacySetting = async (key, value, stateSetter)=>{
        const originalValue = user ? user[key] : undefined;
        stateSetter(value);
        setIsUpdating(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                [key]: value
            });
            if (res.data.success) {
                updateUser({
                    [key]: value
                });
            }
        } catch (e) {
            console.error(e);
            // Revert on failure
            stateSetter(originalValue !== undefined ? originalValue : value);
        } finally{
            setIsUpdating(false);
        }
    };
    const handlePrivacyChange = (key, val, stateSetter)=>{
        if (val === "My contacts except...") {
            setModalType(key);
        } else if (val === "Only share with...") {
            setModalType(`${key}_only_share`);
        } else {
            updatePrivacySetting(key, val, stateSetter);
        }
    };
    const handleExceptionsSave = async (selectedIds)=>{
        const key = modalType;
        if (!key) return;
        let dbKey = key;
        let val = "My contacts except...";
        if (key.endsWith("_only_share")) {
            dbKey = key.replace("_only_share", "");
            val = "Only share with...";
        }
        const newExceptions = {
            ...privacyExceptions,
            [key]: selectedIds
        };
        setIsUpdating(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                [dbKey]: val,
                privacyExceptions: newExceptions
            });
            if (res.data.success) {
                updateUser({
                    [dbKey]: val,
                    privacyExceptions: newExceptions
                });
                setPrivacyExceptions(newExceptions);
                if (dbKey === "privacyLastSeen") setLastSeen(val);
                if (dbKey === "privacyProfilePhoto") setProfilePhoto(val);
                if (dbKey === "privacyAbout") setAbout(val);
                if (dbKey === "privacyStatus") setStatus(val);
                if (dbKey === "privacyGroups") setGroups(val);
            }
        } catch (e) {
            console.error(e);
        } finally{
            setIsUpdating(false);
            setModalType(null);
        }
    };
    const handleAddBlockedItem = async (item)=>{
        if (!item) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].blockUser(item);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getBlockedContacts();
            if (res && res.success && Array.isArray(res.blockedContacts)) {
                setBlockedList(res.blockedContacts);
            } else {
                setBlockedList((prev)=>[
                        ...prev,
                        item
                    ]);
            }
        } catch (e) {
            console.error(e);
            const newList = [
                ...blockedList,
                item
            ];
            await updatePrivacySetting("blockedContacts", newList, setBlockedList);
        }
    };
    const handleRemoveBlocked = async (item)=>{
        if (!item) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].unblockUser(item);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getBlockedContacts();
            if (res && res.success && Array.isArray(res.blockedContacts)) {
                setBlockedList(res.blockedContacts);
            } else {
                setBlockedList((prev)=>prev.filter((p)=>p !== item));
            }
        } catch (e) {
            console.error(e);
            const newList = blockedList.filter((p)=>p !== item);
            await updatePrivacySetting("blockedContacts", newList, setBlockedList);
        }
    };
    // Sub-Tab Navigation Header
    const SubHeader = ({ title })=>isNative ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[28px] shadow-lg px-4 pt-[calc(0.75rem+env(safe-area-inset-top,12px))] pb-4 shrink-0 sticky top-0 z-40 overflow-hidden transition-all select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 overflow-hidden pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-6 -right-6 w-36 h-36 rounded-full bg-white/10 blur-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 371,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-black/10 blur-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 372,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 370,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubTab(null),
                            className: "w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 376,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[14px] text-blue-100 font-extrabold uppercase tracking-wider",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                    lineNumber: 383,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base font-black tracking-wide text-white leading-tight uppercase",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                    lineNumber: 384,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 382,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 375,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 369,
            columnNumber: 5
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 px-4 sm:px-8 py-4 shrink-0 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md sticky top-0 z-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubTab(null),
                    className: "p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 390,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase",
                            children: "Privacy"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 397,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 398,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 396,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 389,
            columnNumber: 5
        }, this);
    // Styled Radio Selector Card List
    const RadioSelector = ({ title, options, currentValue, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto w-full p-4 sm:p-8 space-y-4 pb-[calc(7.5rem+env(safe-area-inset-bottom,24px))]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-gray-900 dark:text-white",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 407,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 dark:text-gray-400",
                            children: "Choose who can view this information on your profile."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 408,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 406,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2.5 pt-2",
                    children: options.map((opt)=>{
                        const isSelected = currentValue === opt;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onChange(opt),
                            className: `flex items-center justify-between p-4 rounded-[10px] border transition-all cursor-pointer ${isSelected ? "bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-sm" : "bg-white dark:bg-gray-800/40 border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-gray-900 dark:text-white",
                                    children: opt
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-300 dark:border-gray-600"}`,
                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                        size: 14,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 426,
                                        columnNumber: 32
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, opt, true, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 411,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 405,
            columnNumber: 5
        }, this);
    // SubTab View Renderers
    if (subTab === 'last-seen') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "Last Seen & Online"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can see my last seen",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Nobody"
                    ],
                    currentValue: lastSeen,
                    onChange: (val)=>handlePrivacyChange("privacyLastSeen", val, setLastSeen)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this),
                modalType === "privacyLastSeen" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Last seen exceptions",
                    initialExceptions: privacyExceptions["privacyLastSeen"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 447,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 438,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'profile-photo') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "Profile Photo Privacy"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can see my profile photo",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Nobody"
                    ],
                    currentValue: profilePhoto,
                    onChange: (val)=>handlePrivacyChange("privacyProfilePhoto", val, setProfilePhoto)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 462,
                    columnNumber: 9
                }, this),
                modalType === "privacyProfilePhoto" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Profile photo exceptions",
                    initialExceptions: privacyExceptions["privacyProfilePhoto"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 469,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 460,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'about') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "About Privacy"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can see my about info",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Nobody"
                    ],
                    currentValue: about,
                    onChange: (val)=>handlePrivacyChange("privacyAbout", val, setAbout)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this),
                modalType === "privacyAbout" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "About exceptions",
                    initialExceptions: privacyExceptions["privacyAbout"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 491,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 482,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'status') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "Status Privacy"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can see my status updates",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Only share with..."
                    ],
                    currentValue: status,
                    onChange: (val)=>handlePrivacyChange("privacyStatus", val, setStatus)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 506,
                    columnNumber: 9
                }, this),
                modalType === "privacyStatus" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Status exceptions",
                    initialExceptions: privacyExceptions["privacyStatus"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 513,
                    columnNumber: 11
                }, this),
                modalType === "privacyStatus_only_share" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Share status with",
                    initialExceptions: privacyExceptions["privacyStatus_only_share"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 521,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 504,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'phone-number') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "Phone Number Privacy"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 535,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can see my phone number",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Nobody"
                    ],
                    currentValue: phoneNumber,
                    onChange: (val)=>handlePrivacyChange("privacyPhoneNumber", val, setPhoneNumber)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 536,
                    columnNumber: 9
                }, this),
                modalType === "privacyPhoneNumber" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Phone number exceptions",
                    initialExceptions: privacyExceptions["privacyPhoneNumber"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 543,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 534,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'email-address') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "Email Address Privacy"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 557,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can see my email address",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Nobody"
                    ],
                    currentValue: emailPrivacy,
                    onChange: (val)=>handlePrivacyChange("privacyEmail", val, setEmailPrivacy)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 558,
                    columnNumber: 9
                }, this),
                modalType === "privacyEmail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Email address exceptions",
                    initialExceptions: privacyExceptions["privacyEmail"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 565,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 556,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'disappearing' || subTab === 'message-timer') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$DisappearingMessagesView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisappearingMessagesView"], {
            onBack: ()=>setSubTab(null),
            currentValue: messageTimer,
            onChangeTimer: (val)=>updatePrivacySetting("privacyMessageTimer", val, setMessageTimer),
            RadioSelectorComponent: RadioSelector
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 578,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'groups') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeader, {
                    title: "Group Invitations"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 590,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioSelector, {
                    title: "Who can add me to groups",
                    options: [
                        "Everyone",
                        "My contacts",
                        "My contacts except...",
                        "Nobody"
                    ],
                    currentValue: groups,
                    onChange: (val)=>handlePrivacyChange("privacyGroups", val, setGroups)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 591,
                    columnNumber: 9
                }, this),
                modalType === "privacyGroups" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ExceptionsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExceptionsModal"], {
                    title: "Group exceptions",
                    initialExceptions: privacyExceptions["privacyGroups"] || [],
                    onClose: ()=>setModalType(null),
                    onSave: handleExceptionsSave
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                    lineNumber: 598,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 589,
            columnNumber: 7
        }, this);
    }
    if (subTab === 'live-location') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$LiveLocationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveLocationView"], {
            onBack: ()=>setSubTab(null)
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 610,
            columnNumber: 12
        }, this);
    }
    if (subTab === 'blocked') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BlockedContactsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockedContactsView"], {
            onRemoveBlocked: handleRemoveBlocked,
            onAddBlocked: handleAddBlockedItem,
            onBack: ()=>setSubTab(null),
            blockedList: blockedList,
            resolvedBlockedList: resolvedBlockedList
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
            lineNumber: 615,
            columnNumber: 7
        }, this);
    }
    // Main Privacy Settings Overview Page
    const personalInfoOptions = [
        {
            id: 'last-seen',
            title: "Last seen and online",
            value: lastSeen,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"],
            color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
        },
        {
            id: 'profile-photo',
            title: "Profile photo",
            value: profilePhoto,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"],
            color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
        },
        {
            id: 'about',
            title: "About info",
            value: about,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"],
            color: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
        },
        {
            id: 'status',
            title: "Status privacy",
            value: status,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"],
            color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
        },
        {
            id: 'phone-number',
            title: "Phone number",
            value: phoneNumber,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallIcon"],
            color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
        },
        {
            id: 'email-address',
            title: "Email address",
            value: emailPrivacy,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"],
            color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full bg-white dark:bg-[#111827] overflow-y-auto custom-scrollbar",
        children: [
            isNative ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[28px] shadow-lg px-4 pt-[calc(0.75rem+env(safe-area-inset-top,12px))] pb-4 shrink-0 sticky top-0 z-40 overflow-hidden transition-all select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 -right-6 w-36 h-36 rounded-full bg-white/10 blur-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-black/10 blur-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 640,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center gap-3",
                        children: [
                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                    lineNumber: 651,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 647,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-black tracking-wider text-white uppercase",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 654,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 645,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                lineNumber: 639,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-header flex items-center gap-4 px-4 pb-3 min-h-[56px] border-b border-[#f0f2f5] dark:border-[#202c33] bg-white dark:bg-[#111827]",
                children: [
                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "p-2 md:hidden rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                            lineNumber: 664,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 660,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-bold text-gray-900 dark:text-white flex-1 tracking-tight",
                        children: "Privacy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 667,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                lineNumber: 658,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto w-full p-4 sm:p-8 space-y-6 pb-[calc(7.5rem+env(safe-area-inset-bottom,24px))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-gray-50/50 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1",
                                children: "Privacy Controls"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 675,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 leading-relaxed",
                                children: "Customize who can see your personal info, read receipts, disappearing messages, and call preferences."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 676,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 674,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold uppercase tracking-wider text-gray-400 px-1",
                                children: "Personal Info Visibility"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 683,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: personalInfoOptions.map((opt)=>{
                                    const Icon = opt.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSubTab(opt.id),
                                        className: "group flex items-center justify-between p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 hover:border-indigo-200 dark:hover:border-indigo-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all cursor-pointer shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3.5 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${opt.color}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-white truncate",
                                                        children: opt.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 693,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 shrink-0 ml-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
                                                        children: opt.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                        size: 16,
                                                        className: "text-gray-400 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 699,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, opt.id, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 688,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 684,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 682,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold uppercase tracking-wider text-gray-400 px-1",
                                children: "Messaging & Receipts"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TickDouble01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-white block",
                                                        children: "Read Receipts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 block leading-relaxed",
                                                        children: "If turned off, you won't send or receive read receipts. Read receipts are always sent in group chats."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 720,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 716,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updatePrivacySetting("privacyReadReceipts", !readReceipts, setReadReceipts),
                                        className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 ${readReceipts ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${readReceipts ? "translate-x-6" : "translate-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                            lineNumber: 733,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 727,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 715,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSubTab('message-timer'),
                                className: "group flex items-center justify-between p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 hover:border-indigo-200 dark:hover:border-indigo-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all cursor-pointer shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white truncate",
                                                children: "Default Disappearing Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 746,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0 ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
                                                children: messageTimer
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                size: 16,
                                                className: "text-gray-400 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 752,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 748,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold uppercase tracking-wider text-gray-400 px-1",
                                children: "Security & Blocking"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSubTab('groups'),
                                className: "group flex items-center justify-between p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 hover:border-indigo-200 dark:hover:border-indigo-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all cursor-pointer shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 766,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white truncate",
                                                children: "Group Invitations"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 769,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 765,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0 ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
                                                children: groups
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 772,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                size: 16,
                                                className: "text-gray-400 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 775,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 771,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 761,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSubTab('live-location'),
                                className: "group flex items-center justify-between p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 hover:border-indigo-200 dark:hover:border-indigo-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all cursor-pointer shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 784,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white truncate",
                                                children: "Live Location Sharing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 787,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0 ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
                                                children: "None"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 790,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                size: 16,
                                                className: "text-gray-400 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 793,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 789,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 779,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallEnd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallEnd01Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 800,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 799,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-white block",
                                                        children: "Silence Unknown Callers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 803,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 block leading-relaxed",
                                                        children: "Automatically silence calls from numbers not in your contacts. They will still appear in your calls log."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 802,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 798,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updatePrivacySetting("privacySilenceCalls", !silenceCalls, setSilenceCalls),
                                        className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 ${silenceCalls ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${silenceCalls ? "translate-x-6" : "translate-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 809,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 797,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSubTab('blocked'),
                                className: "group flex items-center justify-between p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 hover:border-indigo-200 dark:hover:border-indigo-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all cursor-pointer shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 825,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white truncate",
                                                children: "Blocked Contacts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 828,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 shrink-0 ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400",
                                                children: blockedList.length > 0 ? `${blockedList.length} Blocked` : "None"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 831,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                size: 16,
                                                className: "text-gray-400 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 834,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 820,
                                columnNumber: 11
                            }, this),
                            isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 842,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-white block",
                                                        children: "App Lock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 block leading-relaxed",
                                                        children: "Require fingerprint, Face ID, pattern, or device PIN authentication to unlock PingDart."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 845,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 841,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: async ()=>{
                                            const nextVal = !appLock;
                                            const loadingId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(nextVal ? "Verifying fingerprint / device PIN..." : "Verifying authentication...");
                                            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$biometrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateBiometric"])("Confirm fingerprint, Face ID, or device PIN");
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingId);
                                            if (success) {
                                                updatePrivacySetting("privacyAppLock", nextVal, setAppLock);
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(nextVal ? "App Lock enabled!" : "App Lock disabled!");
                                            } else {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Device authentication failed or cancelled");
                                            }
                                        },
                                        className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 ${appLock ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${appLock ? "translate-x-6" : "translate-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                            lineNumber: 869,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 758,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold uppercase tracking-wider text-gray-400 px-1",
                                children: "Biometrics & Face Match"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 878,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 flex items-center justify-between gap-4 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FingerPrintIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FingerPrintIcon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 883,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-white block",
                                                        children: "Login with Face ID / Biometrics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 block leading-relaxed",
                                                        children: "Allow signing in to your PingDart account instantly on this device using Face ID or biometrics."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 882,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: toggleBiometricLogin,
                                        className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 cursor-pointer ${biometricLoginOn ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${biometricLoginOn ? "translate-x-6" : "translate-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                            lineNumber: 899,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 893,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 881,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-[10px] border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-800/40 space-y-4 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3.5 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserSearch01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 908,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0.5 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-gray-900 dark:text-white block",
                                                                children: "Allow People to Find Me via Face Match"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400 block leading-relaxed",
                                                                children: "Users can scan photos to discover your profile and send a connection request. Encrypted biometrics only."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                                lineNumber: 913,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 907,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: toggleFaceDiscovery,
                                                className: `w-12 h-6 rounded-full transition-all relative shrink-0 p-0.5 cursor-pointer ${faceStatus.isEnabled ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-5 h-5 rounded-full bg-white shadow-md transition-transform ${faceStatus.isEnabled ? "translate-x-6" : "translate-x-0"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 918,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 906,
                                        columnNumber: 13
                                    }, this),
                                    faceStatus.isEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-600 dark:text-gray-300",
                                                children: "Who can discover my face:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>changeAudience('public'),
                                                        className: `px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${faceStatus.discoveryAudience === 'public' ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800'}`,
                                                        children: "Everyone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>changeAudience('mutual_contacts'),
                                                        className: `px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${faceStatus.discoveryAudience === 'mutual_contacts' ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800'}`,
                                                        children: "Contacts Only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 border-t border-gray-100 dark:border-gray-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-2.5 h-2.5 rounded-full ${faceStatus.isEnrolled ? "bg-emerald-500 animate-pulse" : "bg-amber-400"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                                        children: faceStatus.isEnrolled ? "Biometric Face Signature Enrolled" : "No Face Signature Enrolled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 960,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 w-full sm:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsFaceScannerOpen(true),
                                                        disabled: isEnrollingFace,
                                                        className: "h-10 flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[50px] bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold transition-all border border-indigo-200 dark:border-indigo-800/60 cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                                lineNumber: 974,
                                                                columnNumber: 19
                                                            }, this),
                                                            faceStatus.isEnrolled ? "Re-scan Face" : "Scan & Enroll Face"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 968,
                                                        columnNumber: 17
                                                    }, this),
                                                    faceStatus.isEnrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleDeleteFaceBiometrics,
                                                        disabled: isPurgingFace,
                                                        className: "h-10 inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-[50px] bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold transition-all border border-red-200 dark:border-red-900/40 cursor-pointer",
                                                        title: "Permanently delete face biometric data",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                                lineNumber: 986,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                                lineNumber: 967,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                        lineNumber: 959,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                                lineNumber: 905,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                        lineNumber: 877,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                lineNumber: 672,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$modals$2f$FaceDiscoveryScannerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDiscoveryScannerModal"], {
                isOpen: isFaceScannerOpen,
                onClose: ()=>setIsFaceScannerOpen(false),
                mode: "enroll",
                title: "Face Biometrics",
                subtitle: "Hold still and look directly into the camera",
                onVectorCaptured: handleFaceEnrolled
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
                lineNumber: 997,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/settings/PrivacySettings.tsx",
        lineNumber: 636,
        columnNumber: 5
    }, this);
}
_s(PrivacySettings, "/W/vTvudYTaKfjAus/zSoZYth64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PrivacySettings;
var _c;
__turbopack_context__.k.register(_c, "PrivacySettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_settings_PrivacySettings_tsx_eef96552._.js.map