(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/QueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function QueryProvider({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000
                    }
                }
            })
    }["QueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/QueryProvider.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(QueryProvider, "nlbp6F/SS4zAbU56KIbqiJb7qJI=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/platform.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLATFORM",
    ()=>PLATFORM,
    "getPlatform",
    ()=>getPlatform,
    "usePlatform",
    ()=>usePlatform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_PLATFORM_INFO = {
    os: "Unknown",
    platform: "web",
    isNative: false,
    isWeb: true,
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    isDesktop: false,
    isElectron: false,
    isPWA: false,
    isTouchDevice: false
};
// NOTE: cachedPlatform is intentionally NOT set at module-load time.
// Capacitor.isNativePlatform() returns false until after Capacitor fully
// initialises on the device. We must call getPlatform() only AFTER mount.
let cachedPlatform = null;
function getPlatform() {
    if (cachedPlatform) {
        return cachedPlatform;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // ── Detect Electron FIRST ─────────────────────────────────────────────
    // @capacitor-community/electron makes Capacitor.isNativePlatform() return
    // true, so we must resolve isElectron before isNative and use it to
    // short-circuit the native check.
    let isNative = false;
    let isElectron = false;
    const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
    try {
        var _process, _this, _this1, _process_versions, _process1, _this2;
        isElectron = ua.includes("electron") || !!((_this = window) === null || _this === void 0 ? void 0 : (_process = _this.process) === null || _process === void 0 ? void 0 : _process.type) || !!((_this1 = window) === null || _this1 === void 0 ? void 0 : _this1.__ELECTRON__) || !!((_this2 = window) === null || _this2 === void 0 ? void 0 : (_process1 = _this2.process) === null || _process1 === void 0 ? void 0 : (_process_versions = _process1.versions) === null || _process_versions === void 0 ? void 0 : _process_versions.electron) || window.location.protocol.includes("capacitor-electron");
    } catch (e) {
        isElectron = false;
    }
    // ── Detect Native (Android / iOS Capacitor) ───────────────────────────
    // Skip entirely if we already know we're in Electron — Capacitor lies
    // about isNativePlatform() in the Electron runtime.
    if (!isElectron) {
        try {
            isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() || typeof document !== "undefined" && (document.documentElement.classList.contains("is-native") || document.documentElement.getAttribute("data-is-native") === "true") || ua.includes("pingdartnative") || window.androidBridge !== undefined || window.location.protocol === "capacitor:" || window.location.protocol === "ionic:";
        } catch (e) {
            isNative = false;
        }
    }
    let os = "Unknown";
    try {
        const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform();
        if (platform === "android" || window.androidBridge !== undefined) {
            os = "Android";
        } else if (platform === "ios") {
            os = "iOS";
        }
    } catch (e) {}
    if (os === "Unknown") {
        const ua = navigator.userAgent;
        if (/Android/i.test(ua)) {
            os = "Android";
        } else if (/iPhone|iPad|iPod/i.test(ua)) {
            os = "iOS";
        } else if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
            os = "iOS";
        } else if (/Win/i.test(ua)) {
            os = "Windows";
        } else if (/Mac/i.test(ua)) {
            os = "MacOS";
        } else if (/Linux/i.test(ua)) {
            os = "Linux";
        }
    }
    const isAndroid = os === "Android";
    const isIOS = os === "iOS";
    const isMobile = isAndroid || isIOS || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isDesktop = os === "Windows" || os === "MacOS" || os === "Linux";
    const isPWA = window.matchMedia("(display-mode: standalone)").matches || Boolean(navigator.standalone);
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const result = {
        os,
        platform: isElectron ? "electron" : isNative ? "native" : "web",
        // Electron is NEVER treated as native or mobile — it's a desktop app.
        isNative: isElectron ? false : isNative,
        isWeb: isElectron ? true : !isNative,
        isAndroid: isElectron ? false : isAndroid,
        isIOS: isElectron ? false : isIOS,
        isMobile: isElectron ? false : isMobile,
        isDesktop: isElectron ? true : isDesktop,
        isElectron,
        isPWA: isElectron ? false : isPWA,
        isTouchDevice
    };
    cachedPlatform = result;
    return result;
}
let PLATFORM = DEFAULT_PLATFORM_INFO;
function usePlatform() {
    _s();
    const [platform, setPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PLATFORM_INFO);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlatform.useEffect": ()=>{
            // Clear any cache that was set before Capacitor had a chance to boot.
            cachedPlatform = null;
            const detected = getPlatform();
            PLATFORM = detected;
            setPlatform(detected);
        }
    }["usePlatform.useEffect"], []);
    return platform;
}
_s(usePlatform, "g6rVovfga3NAkmSOVDa59VAqs0Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/OnboardingIntroLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnboardingIntroLoader",
    ()=>OnboardingIntroLoader,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SplashScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/splashscreen/page.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/splashscreen/page.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = SplashScreen;
function OnboardingIntroLoader() {
    _s();
    // platformReady becomes true after usePlatform()'s useEffect has run,
    // meaning Capacitor has had time to initialise and isNative is accurate.
    const [platformReady, setPlatformReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isNative, isElectron } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingIntroLoader.useEffect": ()=>{
            // Log platform info for debugging on Android
            console.log("[OnboardingIntroLoader] Platform detected:", {
                isNative,
                isElectron
            });
            setPlatformReady(true);
        }
    }["OnboardingIntroLoader.useEffect"], [
        isNative,
        isElectron
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingIntroLoader.useEffect": ()=>{
            const handleDone = {
                "OnboardingIntroLoader.useEffect.handleDone": ()=>setDismissed(true)
            }["OnboardingIntroLoader.useEffect.handleDone"];
            window.addEventListener("onboarding:done", handleDone);
            return ({
                "OnboardingIntroLoader.useEffect": ()=>window.removeEventListener("onboarding:done", handleDone)
            })["OnboardingIntroLoader.useEffect"];
        }
    }["OnboardingIntroLoader.useEffect"], []);
    // Wait until after mount + platform detection before hiding.
    // This prevents Android from getting a false-negative on first render.
    if (dismissed || !platformReady) {
        return null;
    }
    if (!isNative && !isElectron) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const pathname = window.location.pathname;
        const isExplicitSplash = pathname.startsWith("/splashscreen");
        const params = new URLSearchParams(window.location.search);
        const forceShow = params.get("showIntro") === "true" || params.get("intro") === "true";
        // Never show intro overlay on login, register, or authenticated routes unless explicitly forced
        const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password") || pathname.startsWith("/user") || pathname.startsWith("/admin");
        if (!isExplicitSplash && !forceShow && isAuthRoute) {
            return null;
        }
        const hasSeen = localStorage.getItem("hasSeenIntro") === "true";
        const hasToken = !!localStorage.getItem("access_token") || !!localStorage.getItem("auth_token") || !!localStorage.getItem("token") || !!localStorage.getItem("user");
        if (!isExplicitSplash && !forceShow && (hasSeen || hasToken)) {
            return null;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplashScreen, {}, void 0, false, {
        fileName: "[project]/src/app/splashscreen/OnboardingIntroLoader.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(OnboardingIntroLoader, "R8iDpsSYGlvx8NeIegwC2UhzD98=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = OnboardingIntroLoader;
const __TURBOPACK__default__export__ = OnboardingIntroLoader;
var _c, _c1;
__turbopack_context__.k.register(_c, "SplashScreen");
__turbopack_context__.k.register(_c1, "OnboardingIntroLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NativeThemeSync() {
    _s();
    const { theme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "NativeThemeSync.useEffect": ()=>{
            const applySystemTheme = {
                "NativeThemeSync.useEffect.applySystemTheme": (isDark)=>{
                    const currentTheme = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("pingdart-theme") || "system" : "TURBOPACK unreachable";
                    if (currentTheme === "system") {
                        const root = document.documentElement;
                        if (isDark) {
                            root.classList.add("dark");
                            root.style.colorScheme = "dark";
                        } else {
                            root.classList.remove("dark");
                            root.style.colorScheme = "light";
                        }
                    }
                }
            }["NativeThemeSync.useEffect.applySystemTheme"];
            // 1. Android native bridge listener
            const handleNativeTheme = {
                "NativeThemeSync.useEffect.handleNativeTheme": (e)=>{
                    var _e_detail;
                    applySystemTheme(Boolean(e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.isDark));
                }
            }["NativeThemeSync.useEffect.handleNativeTheme"];
            // 2. iOS / Web / Safari matchMedia change listener
            const mediaQuery = "object" !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
            const handleMediaChange = {
                "NativeThemeSync.useEffect.handleMediaChange": (e)=>{
                    applySystemTheme(e.matches);
                }
            }["NativeThemeSync.useEffect.handleMediaChange"];
            // Immediate sync on mount
            if (mediaQuery) {
                applySystemTheme(mediaQuery.matches);
                if (mediaQuery.addEventListener) {
                    mediaQuery.addEventListener("change", handleMediaChange);
                } else if (mediaQuery.addListener) {
                    mediaQuery.addListener(handleMediaChange);
                }
            }
            window.addEventListener("nativeThemeChanged", handleNativeTheme);
            return ({
                "NativeThemeSync.useEffect": ()=>{
                    window.removeEventListener("nativeThemeChanged", handleNativeTheme);
                    if (mediaQuery) {
                        if (mediaQuery.removeEventListener) {
                            mediaQuery.removeEventListener("change", handleMediaChange);
                        } else if (mediaQuery.removeListener) {
                            mediaQuery.removeListener(handleMediaChange);
                        }
                    }
                }
            })["NativeThemeSync.useEffect"];
        }
    }["NativeThemeSync.useEffect"], [
        theme,
        resolvedTheme
    ]);
    return null;
}
_s(NativeThemeSync, "rn1TY3AFyZmlE1BzQ3BaOeaVhhU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = NativeThemeSync;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NativeThemeSync, {}, void 0, false, {
                fileName: "[project]/src/components/ThemeProvider.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThemeProvider.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c1 = ThemeProvider;
var _c, _c1;
__turbopack_context__.k.register(_c, "NativeThemeSync");
__turbopack_context__.k.register(_c1, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FontProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FONT_OPTIONS",
    ()=>FONT_OPTIONS,
    "FontContext",
    ()=>FontContext,
    "FontProvider",
    ()=>FontProvider,
    "useFont",
    ()=>useFont
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const FONT_OPTIONS = [
    {
        id: "default",
        name: "Default (PingDart)",
        category: "Brand Hybrid",
        fontFamily: "'Magettas', var(--font-magettas), 'Inter', var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        sampleText: "Sovereign Enterprise Architecture",
        description: "PingDart signature typography combining Magettas and Inter"
    },
    {
        id: "inter",
        name: "Inter",
        category: "Modern Sans",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        sampleText: "Clean, ultra-crisp interface typography",
        description: "Highly legible contemporary sans-serif designed for screens"
    },
    {
        id: "roboto",
        name: "Roboto",
        category: "Material",
        fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        sampleText: "Classic Android & Material standard",
        description: "Clean Google Material system typography with geometric forms"
    },
    {
        id: "outfit",
        name: "Outfit",
        category: "Geometric",
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        sampleText: "Sleek, rounded modern brand aesthetic",
        description: "Contemporary geometric typeface for modern digital products"
    },
    {
        id: "serif",
        name: "Merriweather (Serif)",
        category: "Editorial",
        fontFamily: "'Merriweather', Georgia, Cambria, 'Times New Roman', serif",
        sampleText: "Pleasant reading & literary elegance",
        description: "Classic serif typography designed for effortless long reading"
    },
    {
        id: "mono",
        name: "Geist Mono (Code)",
        category: "Monospace",
        fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        sampleText: "const sovereign = true; // 1234567890",
        description: "Precision technical fixed-width font for developers"
    },
    {
        id: "dyslexic",
        name: "OpenDyslexic",
        category: "Accessibility",
        fontFamily: "'OpenDyslexic', 'Comic Sans MS', sans-serif",
        sampleText: "Weighted baselines for effortless focus",
        description: "High readability typeface designed to mitigate dyslexia symptoms"
    }
];
const FontContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    font: "default",
    setFont: ()=>null,
    fontOptions: FONT_OPTIONS
});
function FontProvider({ children }) {
    _s();
    const [font, setFontState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    const applyFontToDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FontProvider.useCallback[applyFontToDom]": (fontId)=>{
            const selected = FONT_OPTIONS.find({
                "FontProvider.useCallback[applyFontToDom]": (f)=>f.id === fontId
            }["FontProvider.useCallback[applyFontToDom]"]) || FONT_OPTIONS[0];
            if (typeof document !== "undefined") {
                const root = document.documentElement;
                root.setAttribute("data-font-style", selected.id);
                root.style.setProperty("--app-font-family", selected.fontFamily);
                if (document.body) {
                    document.body.style.fontFamily = selected.fontFamily;
                }
                // Inject high-specificity dynamic style tag for instant, app-wide typography transition
                let styleTag = document.getElementById("pingdart-active-font-style");
                if (!styleTag) {
                    styleTag = document.createElement("style");
                    styleTag.id = "pingdart-active-font-style";
                    document.head.appendChild(styleTag);
                }
                if (selected.id === "default") {
                    styleTag.innerHTML = `
          :root, html, body {
            --app-font-family: ${selected.fontFamily};
          }
        `;
                } else {
                    styleTag.innerHTML = `
          :root, html, body, button, input, select, textarea, p, span, div, h1, h2, h3, h4, h5, h6, [class*="font-sans"], [class*="font-serif"], [class*="font-mono"] {
            font-family: ${selected.fontFamily} !important;
          }
        `;
                }
            }
        }
    }["FontProvider.useCallback[applyFontToDom]"], []);
    const setFont = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FontProvider.useCallback[setFont]": (newFont)=>{
            setFontState(newFont);
            applyFontToDom(newFont);
            try {
                localStorage.setItem("app-font", newFont);
                localStorage.setItem("appearance_font_style", newFont);
                window.dispatchEvent(new CustomEvent("pingdart:font-changed", {
                    detail: {
                        font: newFont
                    }
                }));
            } catch (err) {
                console.warn("[FontProvider] Failed saving to localStorage:", err);
            }
        }
    }["FontProvider.useCallback[setFont]"], [
        applyFontToDom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FontProvider.useEffect": ()=>{
            try {
                const saved = localStorage.getItem("appearance_font_style") || localStorage.getItem("app-font") || "default";
                setFontState(saved);
                applyFontToDom(saved);
                // Also ensure root font size matches appearance setting
                const savedFontSize = localStorage.getItem("appearance_font_size");
                if (savedFontSize === "Small") {
                    document.documentElement.style.fontSize = "14px";
                } else if (savedFontSize === "Large") {
                    document.documentElement.style.fontSize = "18px";
                } else {
                    document.documentElement.style.fontSize = "16px";
                }
            } catch (e) {}
        }
    }["FontProvider.useEffect"], [
        applyFontToDom
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontContext.Provider, {
        value: {
            font,
            setFont,
            fontOptions: FONT_OPTIONS
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/FontProvider.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(FontProvider, "Kf6aIiY3QdPXf2WyxuIzIF1iDGc=");
_c = FontProvider;
function useFont() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FontContext);
}
_s1(useFont, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "FontProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/safeStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeStorage",
    ()=>safeStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/preferences/dist/esm/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
const safeStorage = {
    async getItem (key) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].get({
                    key
                });
                return res ? res.value : null;
            } catch (e) {
                console.warn("[SafeStorage] Native getItem fallback:", e);
            }
        }
        try {
            return localStorage.getItem(key);
        } catch (_) {
            return null;
        }
    },
    async setItem (key, value) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            localStorage.setItem(key, value);
        } catch (_) {}
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].set({
                    key,
                    value
                });
            } catch (e) {
                console.warn("[SafeStorage] Native setItem fallback:", e);
            }
        }
    },
    async removeItem (key) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            localStorage.removeItem(key);
        } catch (_) {}
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].remove({
                    key
                });
            } catch (e) {
                console.warn("[SafeStorage] Native removeItem fallback:", e);
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "copyToClipboard",
    ()=>copyToClipboard,
    "decodeMsgId",
    ()=>decodeMsgId,
    "decryptLiveRoomId",
    ()=>decryptLiveRoomId,
    "encodeJoinToken",
    ()=>encodeJoinToken,
    "encodeMsgId",
    ()=>encodeMsgId,
    "encryptLiveRoomId",
    ()=>encryptLiveRoomId,
    "formatChatTimestamp",
    ()=>formatChatTimestamp,
    "formatFileSize",
    ()=>formatFileSize,
    "formatScheduleForViewer",
    ()=>formatScheduleForViewer,
    "formatSystemText",
    ()=>formatSystemText,
    "formatTimeAgo",
    ()=>formatTimeAgo,
    "getApiBaseUrl",
    ()=>getApiBaseUrl,
    "getApiV1Url",
    ()=>getApiV1Url,
    "getCloudAppUrl",
    ()=>getCloudAppUrl,
    "getInitials",
    ()=>getInitials,
    "getWebBaseUrl",
    ()=>getWebBaseUrl,
    "renderTextWithLinks",
    ()=>renderTextWithLinks,
    "resolveMediaUrl",
    ()=>resolveMediaUrl,
    "scrollToMessage",
    ()=>scrollToMessage,
    "truncateText",
    ()=>truncateText,
    "updateUrlParams",
    ()=>updateUrlParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function getApiBaseUrl() {
    const envUrl = ("TURBOPACK compile-time value", "http://192.168.0.197:4025") || ("TURBOPACK compile-time value", "http://192.168.0.197:4025/api/v1");
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_ENV === "production") {
        return "https://api.chat.pingdart.com";
    }
    let envBase = ("TURBOPACK compile-time truthy", 1) ? envUrl.replace(/\/api\/v1\/?$/, "").replace(/\/$/, "") : "TURBOPACK unreachable";
    //console.log("envUrl 00000000000000000000000000", envUrl);
    // Ensure local/LAN IP or localhost envBase specifies port 4025 if omitted
    //console.log("envBase 1111111111111111111111111", envBase);
    if (envBase) {
        try {
            const parsed = new URL(envBase);
            if (!parsed.port && (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1" || parsed.hostname.startsWith("192.168.") || parsed.hostname.startsWith("10.") || parsed.hostname.startsWith("172."))) {
                parsed.port = "4025";
                envBase = parsed.origin;
            //console.log("envBase 2222222222222222222222222", envBase);
            }
        } catch (e) {}
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // 1. Check if Capacitor native app on mobile first
        try {
            const cap = window.Capacitor;
            if (cap && typeof cap.isNativePlatform === "function" && cap.isNativePlatform()) {
                if (envBase && !envBase.includes("localhost") && !envBase.includes("127.0.0.1")) {
                    return envBase;
                }
                return "https://api.chat.pingdart.com";
            }
        } catch (e) {}
        // When browser is loaded over HTTPS, prevent mixed content by avoiding local HTTP URLs
        if (window.location.protocol === "https:") {
            if (!envBase || envBase.includes("localhost") || envBase.includes("127.0.0.1") || envBase.includes("192.168.") || envBase.includes("10.0.")) {
                return "https://api.chat.pingdart.com";
            }
            if (envBase.startsWith("http://")) {
                return envBase.replace(/^http:\/\//i, "https://");
            }
            return envBase;
        }
        const host = window.location.hostname;
        // Auto-pick current machine's LAN IP or localhost directly
        if (host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.") || host.startsWith("10.") || host.startsWith("172.")) {
            return `http://${host}:4025`;
        }
        // Fallback to explicit envBase if provided (e.g. remote cloud tunnel)
        if (envBase && !envBase.includes("10.0.2.2")) {
            return envBase;
        }
    }
    // Fallback for SSR / non-browser environment
    if (envBase) {
        return envBase;
    }
    return "https://api.chat.pingdart.com";
}
function getApiV1Url() {
    return `${getApiBaseUrl()}/api/v1`;
}
function getCloudAppUrl() {
    if ("TURBOPACK compile-time truthy", 1) {
        const host = window.location.hostname;
        if (host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.") || host.startsWith("10.") || host.startsWith("172.")) {
            return "/user";
        }
    }
    return "https://cloud.pingdart.com";
}
function getWebBaseUrl() {
    if ("TURBOPACK compile-time truthy", 1) {
        return window.location.origin;
    }
    //TURBOPACK unreachable
    ;
}
function resolveMediaUrl(url) {
    if (!url) return undefined;
    let trimmed = url.trim();
    if (!trimmed) return undefined;
    if (trimmed.startsWith("data:") || trimmed.startsWith("blob:")) return trimmed;
    // 0. Clean Windows backslashes from storage paths
    trimmed = trimmed.replace(/\\+/g, "/");
    const storageBase = (("TURBOPACK compile-time value", "https://storage.pingdart.com") || "https://storage.pingdart.com").replace(/\/+$/, "");
    // 1. Rewrite internal storage cluster IP / port (e.g. http://27.7.41.165:3221/...) to storage CDN
    if (trimmed.includes("27.7.41.165") || trimmed.includes(":3221")) {
        trimmed = trimmed.replace(/^https?:\/\/[^/]+(?:\/|$)/i, `${storageBase}/`);
    }
    // 1b. If already pointing to local storage engine (e.g. localhost:4028, 127.0.0.1:4028), preserve it directly
    if (trimmed.includes("localhost:4028") || trimmed.includes("127.0.0.1:4028") || trimmed.includes(":4028")) {
        return trimmed;
    }
    // 2. Storage Engine URLs (storage.pingdart.com)
    if (trimmed.includes("storage.pingdart.com")) {
        if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
            trimmed = `https://${trimmed.replace(/^\/+/, "")}`;
        }
        if (storageBase !== "https://storage.pingdart.com") {
            return trimmed.replace(/^https?:\/\/storage\.pingdart\.com/i, storageBase);
        }
        return trimmed.replace(/^http:\/\//i, "https://");
    }
    // 3. Any Storage cluster public paths (e.g. /public/avatars/..., /public/banners/..., :4025/public/...)
    if (trimmed.includes("/public/")) {
        const publicPath = trimmed.substring(trimmed.indexOf("/public/"));
        return `${storageBase}${publicPath}`;
    }
    if (trimmed.startsWith("public/")) {
        return `${storageBase}/${trimmed}`;
    }
    if (trimmed.includes("/api/storage/")) {
        const storagePath = trimmed.substring(trimmed.indexOf("/api/storage/"));
        return `${storageBase}${storagePath}`;
    }
    const apiBase = getApiBaseUrl();
    let resolved = trimmed;
    // 1. If URL contains /uploads/ or uploads/, extract relative uploads path
    if (resolved.includes("/uploads/")) {
        const relativePath = resolved.substring(resolved.indexOf("/uploads/"));
        resolved = `${apiBase}${relativePath}`;
    } else if (resolved.includes("uploads/")) {
        const relativePath = resolved.substring(resolved.indexOf("uploads/"));
        resolved = `${apiBase}/${relativePath}`;
    } else if (resolved.includes(":4025")) {
        const relativePath = resolved.replace(/^https?:\/\/[^/]+:4025\/?/, "");
        resolved = `${apiBase}/${relativePath}`;
    } else if (!resolved.startsWith("http://") && !resolved.startsWith("https://") && !resolved.startsWith("/")) {
        resolved = `${apiBase}/uploads/${resolved}`;
    }
    // 4. If the browser page is loaded over HTTPS, force HTTPS on resolved media URLs
    if ("object" !== "undefined" && window.location.protocol === "https:") {
        if (resolved.startsWith("http://")) {
            resolved = resolved.replace(/^http:\/\//i, "https://");
        }
    }
    return resolved;
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function formatSystemText(text, currentUserName, currentUserId, senderId) {
    if (!text || typeof text !== 'string') return '';
    let result = text.startsWith('~') ? text.slice(1) : text;
    if (!currentUserName && !currentUserId) return result;
    const myName = currentUserName === null || currentUserName === void 0 ? void 0 : currentUserName.trim();
    const isMeSender = Boolean(senderId && currentUserId && Number(senderId) === Number(currentUserId));
    if (myName) {
        const escapedName = escapeRegExp(myName);
        // 1. Starts with myName + space (case-insensitive)
        const startsWithRegex = new RegExp(`^${escapedName}\\b`, 'i');
        if (startsWithRegex.test(result)) {
            result = result.replace(startsWithRegex, 'You');
        }
        // 2. Contains "by myName" (case-insensitive)
        const byRegex = new RegExp(`\\bby\\s+${escapedName}\\b`, 'gi');
        if (byRegex.test(result)) {
            result = result.replace(byRegex, 'by you');
        }
        // 3. Contains "added ..., myName, ..."
        if (result.includes(' added ')) {
            const parts = result.split(' added ');
            const prefix = parts[0];
            const addedListStr = parts[1] || '';
            if (!isMeSender) {
                const regex = new RegExp(`\\b${escapedName}\\b`, 'gi');
                const formattedAdded = addedListStr.replace(regex, 'you');
                result = `${prefix} added ${formattedAdded}`;
            } else {
                const addedItems = addedListStr.split(',').map((s)=>s.trim()).filter((s)=>s && s.toLowerCase() !== myName.toLowerCase());
                if (addedItems.length > 0) {
                    result = `${prefix} added ${addedItems.join(', ')}`;
                } else {
                    result = `${prefix}`;
                }
            }
        }
    }
    return result;
}
function formatFileSize(bytes) {
    if (!bytes || isNaN(bytes) || bytes <= 0) return '0 B';
    const k = 1024;
    const sizes = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
function formatTimeAgo(dateInput) {
    if (!dateInput) return '';
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return '';
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 30) return 'Just now';
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric'
    });
}
function formatChatTimestamp(rawTime, rawTimestamp) {
    let date = null;
    if (rawTimestamp) {
        const d = new Date(rawTimestamp);
        if (!isNaN(d.getTime())) {
            date = d;
        }
    }
    if (!date && rawTime) {
        const str = String(rawTime).trim();
        if (str.toLowerCase() === 'yesterday') return 'Yesterday';
        // Try parsing if not purely a time like "10:45 AM" or "10:45"
        if (!/^\d{1,2}:\d{2}(\s*(AM|PM))?$/i.test(str)) {
            const d = new Date(str);
            if (!isNaN(d.getTime())) {
                date = d;
            }
        }
    }
    // If no parseable date object exists, fallback to rawTime
    if (!date) {
        return rawTime ? String(rawTime) : '';
    }
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffTime = today.getTime() - targetDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
        // 24hr below / Today: show time (e.g. 10:45 AM)
        return date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    } else if (diffDays === 1) {
        // Yesterday
        return 'Yesterday';
    } else {
        // After date: DD/MM/YYYY
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}
function getInitials(name, maxChars = 2) {
    if (!name || typeof name !== 'string') return '?';
    const cleanName = name.trim();
    if (!cleanName) return '?';
    const parts = cleanName.split(/\s+/);
    if (parts.length === 1) {
        return parts[0].substring(0, maxChars).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase().substring(0, maxChars);
}
function truncateText(str, maxLength = 30) {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return `${str.substring(0, maxLength).trim()}...`;
}
async function copyToClipboard(text) {
    if (!text) return false;
    try {
        var _navigator_clipboard, _navigator;
        if ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    } catch (e) {
        return false;
    }
}
function scrollToMessage(targetId) {
    if (!targetId || "object" === "undefined") return;
    const el = document.getElementById(`msg-${targetId}`);
    if (el) {
        el.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        if (typeof el.animate === "function") {
            el.animate([
                {
                    backgroundColor: "rgba(0, 168, 132, 0.35)",
                    borderRadius: "8px"
                },
                {
                    backgroundColor: "rgba(0, 168, 132, 0.35)",
                    borderRadius: "8px",
                    offset: 0.65
                },
                {
                    backgroundColor: "transparent"
                }
            ], {
                duration: 1400,
                easing: "ease-in-out"
            });
        } else {
            el.classList.add("bg-[#00a884]/30", "transition-all", "rounded-lg");
            setTimeout(()=>{
                el.classList.remove("bg-[#00a884]/30");
            }, 1200);
        }
    }
}
function renderTextWithLinks(text) {
    if (!text || typeof text !== 'string') return text || '';
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
    const parts = text.split(urlRegex);
    if (parts.length <= 1) return text;
    return parts.map((part, index)=>{
        if (/^(https?:\/\/[^\s]+|www\.[^\s]+)$/i.test(part)) {
            const href = part.toLowerCase().startsWith('www.') ? `http://${part}` : part;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
                key: index,
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e)=>e.stopPropagation(),
                className: "text-[#0284c7] dark:text-[#38bdf8] underline hover:underline break-all font-medium transition-colors"
            }, part);
        }
        return part;
    });
}
function encodeJoinToken(roomId) {
    const idNum = parseInt(String(roomId), 10);
    if (isNaN(idNum)) return String(roomId);
    const nonce = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
    const secret = 'PingDart_Group_Invite_Secret_Key_2026';
    let hash = 5381;
    const str = `${idNum}:${nonce}:${secret}`;
    for(let i = 0; i < str.length; i++){
        hash = (hash << 5) + hash + str.charCodeAt(i);
    }
    const sig = (hash >>> 0).toString(16).substring(0, 12);
    const rawStr = `${idNum}:${nonce}:${sig}`;
    const base64Url = ("TURBOPACK compile-time truthy", 1) ? btoa(rawStr).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') : "TURBOPACK unreachable";
    return `pd_j_${base64Url}`;
}
function encryptLiveRoomId(roomId) {
    if (!roomId) return "";
    const str = String(roomId);
    const key = 0x5a;
    let encoded = "";
    for(let i = 0; i < str.length; i++){
        const charCode = str.charCodeAt(i) ^ key;
        encoded += charCode.toString(16).padStart(2, "0");
    }
    const base64 = typeof btoa !== "undefined" ? btoa(encoded).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encoded;
    return `live_enc_${base64}`;
}
function decryptLiveRoomId(token) {
    if (!token) return null;
    let rawToken = token;
    if (token.startsWith("live_enc_")) {
        rawToken = token.replace("live_enc_", "");
        try {
            if (typeof atob !== "undefined") {
                const padded = rawToken.replace(/-/g, "+").replace(/_/g, "/") + "==".slice(2 - (rawToken.length & 3) & 3);
                rawToken = atob(padded);
            }
        } catch (_) {}
    }
    if (/^[0-9a-fA-F]+$/.test(rawToken) && rawToken.length % 2 === 0) {
        const key = 0x5a;
        let decoded = "";
        for(let i = 0; i < rawToken.length; i += 2){
            const hex = rawToken.substring(i, i + 2);
            const charCode = parseInt(hex, 16) ^ key;
            decoded += String.fromCharCode(charCode);
        }
        if (decoded && !isNaN(Number(decoded))) {
            return decoded;
        }
    }
    return token;
}
function formatScheduleForViewer(schedule, viewerTimezone) {
    if (!schedule) return null;
    const creatorTz = schedule.timezone || 'Asia/Kolkata';
    const userTz = viewerTimezone || (typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'Asia/Kolkata');
    const daysList = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ];
    const formattedDays = [];
    daysList.forEach((dayKey)=>{
        const dayConfig = schedule[dayKey];
        if (dayConfig && dayConfig.enabled) {
            const slots = dayConfig.slots || [
                {
                    start: dayConfig.start || '10:00',
                    end: dayConfig.end || '11:00'
                }
            ];
            const formattedSlots = slots.map((s)=>{
                return `${s.start} - ${s.end}`;
            });
            formattedDays.push({
                day: dayKey.charAt(0).toUpperCase() + dayKey.slice(1),
                slots: formattedSlots
            });
        }
    });
    if (formattedDays.length === 0) return null;
    return {
        creatorTimezone: creatorTz,
        viewerTimezone: userTz,
        days: formattedDays
    };
}
function encodeMsgId(id) {
    if (id === null || id === undefined || id === '') return '';
    const str = String(id);
    if (!/^\d+$/.test(str)) return str;
    try {
        return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch (e) {
        return str;
    }
}
function decodeMsgId(encoded) {
    if (!encoded) return null;
    if (/^\d+$/.test(encoded)) return parseInt(encoded, 10);
    try {
        let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
        while(base64.length % 4 !== 0){
            base64 += '=';
        }
        const decoded = atob(base64);
        const parsed = parseInt(decoded, 10);
        return isNaN(parsed) ? null : parsed;
    } catch (e) {
        const fallback = parseInt(encoded, 10);
        return isNaN(fallback) ? null : fallback;
    }
}
function updateUrlParams(params, replaceEntireSearch = false) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const currentSearch = replaceEntireSearch ? new URLSearchParams() : new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value])=>{
        if (value !== null && value !== undefined && String(value).trim() !== '') {
            if (key === 'msgId' && (typeof value === 'number' || /^\d+$/.test(String(value)))) {
                currentSearch.set(key, encodeMsgId(value));
            } else {
                currentSearch.set(key, String(value));
            }
        } else {
            currentSearch.delete(key);
        }
    });
    const queryString = currentSearch.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
;
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])(),
    timeout: 15000,
    headers: {
        "Content-Type": "application/json"
    }
});
// Variables to handle concurrent 401 refresh requests without race conditions
let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null)=>{
    failedQueue.forEach((promise)=>{
        if (error) {
            promise.reject(error);
        } else if (token) {
            promise.resolve(token);
        }
    });
    failedQueue = [];
};
// Helper to get active access token from any available source
function getActiveAccessToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const { useAuthStore } = __turbopack_context__.r("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
        const storeToken = useAuthStore.getState().accessToken;
        if (storeToken) return storeToken;
    } catch (e) {}
    try {
        const savedAuth = localStorage.getItem("pingdart-auth");
        if (savedAuth) {
            var _parsed_state;
            const parsed = JSON.parse(savedAuth);
            if (parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : _parsed_state.accessToken) return parsed.state.accessToken;
        }
    } catch (e) {}
    return localStorage.getItem("access_token") || localStorage.getItem("token");
}
// Helper to get active refresh token from any available source
function getActiveRefreshToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const { useAuthStore } = __turbopack_context__.r("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
        const storeRefreshToken = useAuthStore.getState().refreshToken;
        if (storeRefreshToken) return storeRefreshToken;
    } catch (e) {}
    try {
        const savedAuth = localStorage.getItem("pingdart-auth");
        if (savedAuth) {
            var _parsed_state;
            const parsed = JSON.parse(savedAuth);
            if (parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : _parsed_state.refreshToken) return parsed.state.refreshToken;
        }
    } catch (e) {}
    return localStorage.getItem("refresh_token");
}
// Interceptor to inject JWT from Zustand store or local storage
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = getActiveAccessToken();
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
            // Keep localStorage in sync if it was missing
            if (!localStorage.getItem("access_token")) {
                localStorage.setItem("access_token", token);
            }
        }
        // When sending FormData, delete Content-Type so browser sets boundary correctly
        if (typeof FormData !== "undefined" && config.data instanceof FormData && config.headers) {
            if (typeof config.headers.delete === "function") {
                config.headers.delete("Content-Type");
                config.headers.delete("content-type");
            } else {
                delete config.headers["Content-Type"];
                delete config.headers["content-type"];
            }
        }
        // Inject Python Mail Server token for proxied requests
        const pythonToken = localStorage.getItem("python_access_token");
        if (pythonToken && config.headers) {
            config.headers['x-python-token'] = pythonToken;
        }
    }
    return config;
});
// Response interceptor for robust token refresh and queueing
api.interceptors.response.use((response)=>response, async (error)=>{
    var _originalRequest_url, _originalRequest_url1, _originalRequest_url2, _originalRequest_url3, _originalRequest_url4, _originalRequest_url5, _error_response;
    const originalRequest = error.config;
    if (!originalRequest) {
        return Promise.reject(error);
    }
    const isAuthEndpoint = ((_originalRequest_url = originalRequest.url) === null || _originalRequest_url === void 0 ? void 0 : _originalRequest_url.includes('/auth/login')) || ((_originalRequest_url1 = originalRequest.url) === null || _originalRequest_url1 === void 0 ? void 0 : _originalRequest_url1.includes('/auth/register')) || ((_originalRequest_url2 = originalRequest.url) === null || _originalRequest_url2 === void 0 ? void 0 : _originalRequest_url2.includes('/auth/verify-otp')) || ((_originalRequest_url3 = originalRequest.url) === null || _originalRequest_url3 === void 0 ? void 0 : _originalRequest_url3.includes('/auth/send-otp')) || ((_originalRequest_url4 = originalRequest.url) === null || _originalRequest_url4 === void 0 ? void 0 : _originalRequest_url4.includes('/auth/verify-two-step')) || ((_originalRequest_url5 = originalRequest.url) === null || _originalRequest_url5 === void 0 ? void 0 : _originalRequest_url5.includes('/auth/refresh'));
    // Check if the error is a 401, not an auth endpoint, and we haven't retried this request
    if (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 401 && !isAuthEndpoint) {
        if (originalRequest._retry) {
            return Promise.reject(error);
        }
        const refreshToken = getActiveRefreshToken();
        if (!refreshToken) {
            // Immediate termination if no refresh token exists — prevent infinite 401 loops
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                localStorage.removeItem("user");
                localStorage.removeItem("python_access_token");
                const currentPath = window.location.pathname;
                const isPublicPage = currentPath === "/" || currentPath === "/login" || currentPath === "/register" || currentPath === "/forgot-password" || currentPath.startsWith("/share") || currentPath.startsWith("/p/") || currentPath.startsWith("/r/") || currentPath.startsWith("/join/") || currentPath.startsWith("/developer");
                if (!isPublicPage && !currentPath.includes("/login")) {
                    window.dispatchEvent(new CustomEvent("auth:force_logout", {
                        detail: {
                            target: "/login"
                        }
                    }));
                }
            }
            return Promise.reject(error);
        }
        if (isRefreshing) {
            // If a refresh is ALREADY in progress, queue this request until refresh completes
            return new Promise((resolve, reject)=>{
                failedQueue.push({
                    resolve,
                    reject
                });
            }).then((token)=>{
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            }).catch((err)=>Promise.reject(err));
        }
        originalRequest._retry = true;
        isRefreshing = true;
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Call refresh endpoint using clean axios instance to avoid interceptor loop
            const refreshResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${api.defaults.baseURL}/auth/refresh`, {
                refreshToken
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const { accessToken, refreshToken: newRefreshToken } = refreshResponse.data;
            if (accessToken) {
                const finalRefreshToken = newRefreshToken || refreshToken;
                // 1. Update localStorage
                localStorage.setItem("access_token", accessToken);
                localStorage.setItem("refresh_token", finalRefreshToken);
                // 2. Update Capacitor Preferences if native
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)").then(({ safeStorage })=>{
                        safeStorage.setItem('access_token', accessToken).catch(()=>{});
                        safeStorage.setItem('refresh_token', finalRefreshToken).catch(()=>{});
                    }).catch(()=>{});
                }
                // 3. Update Zustand Store
                try {
                    const { useAuthStore } = await __turbopack_context__.A("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript, async loader)");
                    const currentUser = useAuthStore.getState().user;
                    if (currentUser) {
                        useAuthStore.getState().setAuth(currentUser, accessToken, finalRefreshToken);
                    }
                } catch (e) {}
                // 4. Resolve queued requests with the new access token
                processQueue(null, accessToken);
                isRefreshing = false;
                // 5. Update header and retry original request
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return api(originalRequest);
            } else {
                throw new Error("Invalid token refresh payload received");
            }
        } catch (refreshError) {
            processQueue(refreshError, null);
            isRefreshing = false;
            // Perform clean logout
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                localStorage.removeItem("user");
                localStorage.removeItem("python_access_token");
            }
            try {
                const { useAuthStore } = await __turbopack_context__.A("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript, async loader)");
                useAuthStore.getState().logout();
            } catch (e) {}
            // Dispatch a custom event so the React app can redirect without a hard reload
            if ("TURBOPACK compile-time truthy", 1) {
                const currentPath = window.location.pathname;
                const isPublicPage = currentPath === "/" || currentPath === "/login" || currentPath === "/register" || currentPath === "/forgot-password" || currentPath.startsWith("/share") || currentPath.startsWith("/p/") || currentPath.startsWith("/r/") || currentPath.startsWith("/join/") || currentPath.startsWith("/developer");
                if (!isPublicPage) {
                    window.dispatchEvent(new CustomEvent("auth:force_logout", {
                        detail: {
                            target: "/login"
                        }
                    }));
                }
            }
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/safeStorage.ts [app-client] (ecmascript)");
;
;
;
/**
 * A resilient Zustand storage adapter that uses safeStorage (Capacitor Preferences on native
 * platforms with Promise.then unwrap safety, falling back to localStorage on web).
 */ const capacitorStorage = {
    getItem: async (name)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].getItem(name);
    },
    setItem: async (name, value)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].setItem(name, value);
    },
    removeItem: async (name)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeStorage"].removeItem(name);
    }
};
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        user: null,
        accessToken: null,
        refreshToken: null,
        deviceMailToken: null,
        isAuthenticated: false,
        isHydrated: false,
        transientPassword: undefined,
        setAuth: (user, accessToken, refreshToken, transientPassword, deviceMailToken)=>set({
                user,
                accessToken,
                refreshToken,
                isAuthenticated: true,
                transientPassword,
                deviceMailToken: deviceMailToken || null
            }),
        logout: ()=>{
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    const deviceId = localStorage.getItem('pingdart_device_id');
                    const token = localStorage.getItem('access_token');
                    const refreshToken = localStorage.getItem('refresh_token');
                    if (deviceId || refreshToken) {
                        const { api } = __turbopack_context__.r("[project]/src/services/api.ts [app-client] (ecmascript)");
                        api.post('/auth/logout', {
                            refreshToken,
                            deviceId
                        }, {
                            headers: token ? {
                                Authorization: `Bearer ${token}`
                            } : undefined
                        }).catch(()=>{});
                    }
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    localStorage.removeItem('user');
                    localStorage.removeItem('python_access_token');
                    localStorage.removeItem('python_tenant_id');
                    localStorage.removeItem('device_mail_token');
                    localStorage.removeItem('pingdart_device_id');
                }
            } catch (_) {}
            set({
                user: null,
                accessToken: null,
                refreshToken: null,
                deviceMailToken: null,
                isAuthenticated: false,
                transientPassword: undefined
            });
        },
        setTransientPassword: (password)=>set({
                transientPassword: password
            }),
        setDeviceMailToken: (token)=>set({
                deviceMailToken: token
            }),
        setTokens: (accessToken, refreshToken)=>set({
                accessToken,
                refreshToken
            }),
        setHydrated: (isHydrated)=>set({
                isHydrated
            }),
        updateUser: (partial)=>set((state)=>({
                    user: state.user ? {
                        ...state.user,
                        ...partial
                    } : partial
                }))
    }), {
    name: 'pingdart-auth',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>capacitorStorage),
    onRehydrateStorage: ()=>(state)=>{
            if (state) {
                state.setHydrated(true);
            }
        },
    partialize: (state)=>({
            user: state.user,
            accessToken: state.accessToken,
            refreshToken: state.refreshToken,
            deviceMailToken: state.deviceMailToken,
            isAuthenticated: state.isAuthenticated,
            transientPassword: state.transientPassword
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuickSplash.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickSplash",
    ()=>QuickSplash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function QuickSplash({ onDone }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickSplash.useEffect": ()=>{
            onDone === null || onDone === void 0 ? void 0 : onDone();
        }
    }["QuickSplash.useEffect"], [
        onDone
    ]);
    return null;
}
_s(QuickSplash, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = QuickSplash;
var _c;
__turbopack_context__.k.register(_c, "QuickSplash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CapacitorAuthSync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapacitorAuthSync",
    ()=>CapacitorAuthSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickSplash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuickSplash.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CapacitorAuthSync({ children }) {
    _s();
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CapacitorAuthSync.useState": ()=>{
            var _useAuthStore_persist_hasHydrated, _useAuthStore_persist;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const storeState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
                if ((storeState === null || storeState === void 0 ? void 0 : storeState.accessToken) || (storeState === null || storeState === void 0 ? void 0 : storeState.user)) return true;
                if (localStorage.getItem("access_token") || localStorage.getItem("auth-storage") || localStorage.getItem("user")) return true;
            } catch (e) {}
            return ((_useAuthStore_persist = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist) === null || _useAuthStore_persist === void 0 ? void 0 : (_useAuthStore_persist_hasHydrated = _useAuthStore_persist.hasHydrated) === null || _useAuthStore_persist_hasHydrated === void 0 ? void 0 : _useAuthStore_persist_hasHydrated.call(_useAuthStore_persist)) || false;
        }
    }["CapacitorAuthSync.useState"]);
    const [splashDone, setSplashDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CapacitorAuthSync.useEffect": ()=>{
            // Intercept and filter benign empty-object logs from Capacitor's native bridge (logFromNative)
            if ("TURBOPACK compile-time truthy", 1) {
                const origError = console.error;
                console.error = ({
                    "CapacitorAuthSync.useEffect": function(...args) {
                        if (!args || args.length === 0) return;
                        if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && Object.keys(args[0]).length === 0) {
                            return;
                        }
                        const str = String(args[0] || "");
                        if (str.includes("logFromNative") || str.includes("androidBridge") || str.includes("Error injecting safe area")) {
                            return;
                        }
                        origError.apply(console, args);
                    }
                })["CapacitorAuthSync.useEffect"];
            }
            const syncLocalStorage = {
                "CapacitorAuthSync.useEffect.syncLocalStorage": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        var _state_user;
                        const state = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
                        if (state.accessToken) {
                            localStorage.setItem("access_token", state.accessToken);
                            __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)").then({
                                "CapacitorAuthSync.useEffect.syncLocalStorage": ({ safeStorage })=>{
                                    safeStorage.setItem("access_token", state.accessToken).catch({
                                        "CapacitorAuthSync.useEffect.syncLocalStorage": ()=>{}
                                    }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                                    __turbopack_context__.A("[project]/src/lib/utils.ts [app-client] (ecmascript, async loader)").then({
                                        "CapacitorAuthSync.useEffect.syncLocalStorage": ({ getApiV1Url })=>{
                                            safeStorage.setItem("api_base_url", getApiV1Url()).catch({
                                                "CapacitorAuthSync.useEffect.syncLocalStorage": ()=>{}
                                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                                        }
                                    }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                                }
                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                        }
                        if (state.refreshToken) {
                            localStorage.setItem("refresh_token", state.refreshToken);
                            __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)").then({
                                "CapacitorAuthSync.useEffect.syncLocalStorage": ({ safeStorage })=>{
                                    safeStorage.setItem("refresh_token", state.refreshToken).catch({
                                        "CapacitorAuthSync.useEffect.syncLocalStorage": ()=>{}
                                    }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                                }
                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                        }
                        if (state.user) {
                            const userForStorage = {
                                ...state.user
                            };
                            delete userForStorage.avatar;
                            localStorage.setItem("user", JSON.stringify(userForStorage));
                        }
                        if (state.accessToken || state.user) {
                            if (typeof document !== "undefined") {
                                document.documentElement.removeAttribute("data-pending-onboarding");
                            }
                        }
                        // Register FCM push token in background
                        if (state.accessToken && state.user) {
                            __turbopack_context__.A("[project]/src/notifications/index.ts [app-client] (ecmascript, async loader)").then({
                                "CapacitorAuthSync.useEffect.syncLocalStorage": ({ registerDeviceFcmToken })=>registerDeviceFcmToken()
                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]).catch({
                                "CapacitorAuthSync.useEffect.syncLocalStorage": ()=>{}
                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                        }
                        // Initialize PingDart BLE Mesh engine in background for offline P2P messaging ONLY if already granted
                        if ((_state_user = state.user) === null || _state_user === void 0 ? void 0 : _state_user.id) {
                            __turbopack_context__.A("[project]/src/services/meshChatManager.ts [app-client] (ecmascript, async loader)").then({
                                "CapacitorAuthSync.useEffect.syncLocalStorage": async ({ meshChatManager })=>{
                                    const hasPerms = await meshChatManager.hasPermissions();
                                    if (hasPerms) {
                                        await meshChatManager.init(state.user.id);
                                    }
                                }
                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]).catch({
                                "CapacitorAuthSync.useEffect.syncLocalStorage": ()=>{}
                            }["CapacitorAuthSync.useEffect.syncLocalStorage"]);
                        }
                        var _state_accessToken;
                        // Silently prefetch chat & email data into localStorage after hydration
                        prefetchInBackground({
                            accessToken: (_state_accessToken = state.accessToken) !== null && _state_accessToken !== void 0 ? _state_accessToken : undefined,
                            user: state.user ? {
                                email: state.user.email,
                                id: state.user.id
                            } : null
                        });
                    }
                    setIsHydrated(true);
                }
            }["CapacitorAuthSync.useEffect.syncLocalStorage"];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist.hasHydrated()) {
                syncLocalStorage();
                return;
            }
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist.onFinishHydration(syncLocalStorage);
            // Fallback: never hang longer than 300ms
            const timer = setTimeout(syncLocalStorage, 300);
            return ({
                "CapacitorAuthSync.useEffect": ()=>{
                    unsubscribe();
                    clearTimeout(timer);
                }
            })["CapacitorAuthSync.useEffect"];
        }
    }["CapacitorAuthSync.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !splashDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickSplash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickSplash"], {
                onDone: ()=>setSplashDone(true)
            }, void 0, false, {
                fileName: "[project]/src/components/CapacitorAuthSync.tsx",
                lineNumber: 129,
                columnNumber: 23
            }, this),
            children
        ]
    }, void 0, true);
}
_s(CapacitorAuthSync, "VFVyOEl0zFGEc1I0QYH1gTzJmts=");
_c = CapacitorAuthSync;
/** Fire-and-forget background prefetch — never blocks rendering */ async function prefetchInBackground(state) {
    if (!state.accessToken) return;
    try {
        var _state_user, _this, _state_user1;
        const currentUserId = ((_state_user = state.user) === null || _state_user === void 0 ? void 0 : _state_user.id) || ((_this = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _this === void 0 ? void 0 : _this.id);
        const userCacheKey = currentUserId ? `prefetch_chat_rooms_${currentUserId}` : "prefetch_chat_rooms";
        // Chat rooms (stale if > 5 min)
        const chatCached = readCache(userCacheKey) || readCache("prefetch_chat_rooms");
        var _chatCached_ts;
        if (!chatCached || Date.now() - ((_chatCached_ts = chatCached.ts) !== null && _chatCached_ts !== void 0 ? _chatCached_ts : 0) > 5 * 60_000) {
            __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then(({ chatApi })=>chatApi.getRooms()).then((data)=>{
                writeCache(userCacheKey, data);
                // Also persist raw array format for instant synchronous initial render in useChatRooms
                if (currentUserId && "object" !== "undefined") {
                    var _data_data;
                    var _data_data_data, _ref, _ref1;
                    const rooms = (_ref1 = (_ref = (_data_data_data = data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.data) !== null && _data_data_data !== void 0 ? _data_data_data : data === null || data === void 0 ? void 0 : data.data) !== null && _ref !== void 0 ? _ref : data) !== null && _ref1 !== void 0 ? _ref1 : [];
                    if (Array.isArray(rooms) && rooms.length > 0) {
                        localStorage.setItem(`prefetch_chat_rooms_${currentUserId}`, JSON.stringify(rooms));
                    }
                }
            }).catch(()=>{});
        }
        // Inbox emails (stale if > 3 min)
        const email = (_state_user1 = state.user) === null || _state_user1 === void 0 ? void 0 : _state_user1.email;
        if (email) {
            const inboxCached = readCache("prefetch_inbox");
            var _inboxCached_ts;
            if (!inboxCached || Date.now() - ((_inboxCached_ts = inboxCached.ts) !== null && _inboxCached_ts !== void 0 ? _inboxCached_ts : 0) > 3 * 60_000) {
                __turbopack_context__.A("[project]/src/services/mailApi.ts [app-client] (ecmascript, async loader)").then(({ mailApi })=>mailApi.getFolderMessages(email, "INBOX", 30, 0)).then((data)=>writeCache("prefetch_inbox", data)).catch(()=>{});
            }
        }
    } catch (e) {}
}
function readCache(key) {
    try {
        const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(key) : "TURBOPACK unreachable";
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}
function writeCache(key, data) {
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem(key, JSON.stringify({
                ts: Date.now(),
                data
            }));
        }
    } catch (e) {}
}
var _c;
__turbopack_context__.k.register(_c, "CapacitorAuthSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InformationCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Loading01Icon.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toaster.useEffect": ()=>{
            const updatePlatform = {
                "Toaster.useEffect.updatePlatform": ()=>{
                    const isNative = typeof document !== "undefined" && (document.documentElement.classList.contains("is-native") || document.documentElement.getAttribute("data-is-native") === "true");
                    setIsMobile(isNative || "object" !== "undefined" && window.innerWidth < 768);
                }
            }["Toaster.useEffect.updatePlatform"];
            updatePlatform();
            window.addEventListener("resize", updatePlatform);
            return ({
                "Toaster.useEffect": ()=>window.removeEventListener("resize", updatePlatform)
            })["Toaster.useEffect"];
        }
    }["Toaster.useEffect"], []);
    const dynamicPosition = isMobile ? "top-center" : props.position || "top-right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        position: dynamicPosition,
        icons: {
            success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 34,
                columnNumber: 11
            }, void 0),
            info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, void 0),
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, void 0),
            error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, void 0),
            loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading01Icon"], {
                className: "size-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sonner.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, void 0)
        },
        offset: isMobile ? "calc(env(safe-area-inset-top, 0px) + 16px)" : 20,
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
            "--border-radius": "var(--radius)",
            "--offset": isMobile ? "calc(env(safe-area-inset-top, 0px) + 16px)" : "20px"
        },
        toastOptions: {
            classNames: {
                toast: "cn-toast"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toaster, "AccNjuc+2efmTgA532yqznCbF+M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DevIntroFloatingButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevIntroFloatingButton",
    ()=>DevIntroFloatingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DevIntroFloatingButton() {
    _s();
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DevIntroFloatingButton.useEffect": ()=>{
            setMounted(true);
        }
    }["DevIntroFloatingButton.useEffect"], []);
    if (!mounted) return null;
    const currentTheme = resolvedTheme || theme || "dark";
    const isDark = currentTheme === "dark";
    const toggleTheme = ()=>{
        const nextTheme = isDark ? "light" : "dark";
        setTheme(nextTheme);
        if (typeof document !== "undefined") {
            if (nextTheme === "dark") {
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
            } else {
                document.documentElement.classList.add("light");
                document.documentElement.classList.remove("dark");
            }
        }
    };
    return null;
    //TURBOPACK unreachable
    ;
}
_s(DevIntroFloatingButton, "OPO4/Bwn/B3wErFIC5J6lGmQcgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = DevIntroFloatingButton;
var _c;
__turbopack_context__.k.register(_c, "DevIntroFloatingButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/appUpdateService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkAppUpdate",
    ()=>checkAppUpdate,
    "compareVersions",
    ()=>compareVersions,
    "logUpdateEvent",
    ()=>logUpdateEvent,
    "openStoreListing",
    ()=>openStoreListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function logUpdateEvent(event, meta) {
    console.log(`[AppUpdate Analytics] 📊 ${event}`, meta || {});
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent("analytics:track", {
                detail: {
                    event,
                    ...meta,
                    timestamp: Date.now()
                }
            }));
        }
    } catch (_) {}
}
function compareVersions(a, b) {
    if (!a || !b) return 0;
    const cleanA = a.replace(/[^0-9.]/g, "");
    const cleanB = b.replace(/[^0-9.]/g, "");
    const pa = cleanA.split(".").map((n)=>parseInt(n, 10) || 0);
    const pb = cleanB.split(".").map((n)=>parseInt(n, 10) || 0);
    const maxLen = Math.max(pa.length, pb.length);
    for(let i = 0; i < maxLen; i++){
        const na = pa[i] || 0;
        const nb = pb[i] || 0;
        if (na > nb) return 1;
        if (na < nb) return -1;
    }
    return 0;
}
async function checkAppUpdate() {
    let currentVersion = "13.0.1";
    let currentBuild = 18;
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            var _Capacitor_isNativePlatform, _Capacitor;
            const isNative = !!(((_Capacitor = window.Capacitor) === null || _Capacitor === void 0 ? void 0 : (_Capacitor_isNativePlatform = _Capacitor.isNativePlatform) === null || _Capacitor_isNativePlatform === void 0 ? void 0 : _Capacitor_isNativePlatform.call(_Capacitor)) || window.androidBridge !== undefined || window.location.protocol === "capacitor:" || window.location.protocol === "ionic:");
            if (isNative) {
                try {
                    const info = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].getInfo();
                    if (info.version) currentVersion = info.version;
                    if (info.build) currentBuild = parseInt(info.build, 10) || 18;
                } catch (_) {}
            }
        }
        // Determine Base URL using standard helper or saved custom URL
        let base = "";
        if ("TURBOPACK compile-time truthy", 1) {
            base = localStorage.getItem("api_base_url") || "";
        }
        if (!base) {
            base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
        }
        const apiUrl = `${base.replace(/\/+$/, "")}/app-config`;
        // 4.5s timeout to guarantee we never stall cold boot or lock user out on network failure
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), 4500);
        let res;
        try {
            res = await fetch(apiUrl, {
                cache: "no-store",
                signal: controller.signal
            });
        } catch (e) {
            // Network failure or timeout: fail-safe and allow user to continue app usage
            return {
                needsUpdate: false,
                isForce: false,
                currentVersion,
                currentBuild,
                latestVersion: currentVersion,
                latestBuild: currentBuild,
                config: null
            };
        } finally{
            clearTimeout(timeoutId);
        }
        if (!res.ok) {
            return {
                needsUpdate: false,
                isForce: false,
                currentVersion,
                currentBuild,
                latestVersion: currentVersion,
                latestBuild: currentBuild,
                config: null
            };
        }
        const data = await res.json();
        // Authoritative check: use build (versionCode) integer comparison first, semver as fallback
        const isBelowMinBuild = typeof data.minSupportedVersionCode === "number" && data.minSupportedVersionCode > 0 ? currentBuild < data.minSupportedVersionCode : false;
        const isBelowLatestBuild = typeof data.latestVersionCode === "number" && data.latestVersionCode > 0 ? currentBuild < data.latestVersionCode : false;
        const isBelowMinVersion = Boolean(data.minSupportedVersion) && compareVersions(currentVersion, data.minSupportedVersion) < 0;
        const isBelowLatestVersion = Boolean(data.latestVersion) && compareVersions(currentVersion, data.latestVersion) < 0;
        const isOlderThanMin = isBelowMinBuild || isBelowMinVersion;
        const isOlderThanLatest = isBelowLatestBuild || isBelowLatestVersion;
        // Needs force update if below minimum supported version, OR if admin flagged forceUpdate=true and newer build exists
        const needsForceUpdate = Boolean(data.forceUpdate && isOlderThanLatest || isOlderThanMin);
        const hasNewerVersion = isOlderThanLatest;
        logUpdateEvent("update_check", {
            currentBuild,
            currentVersion,
            latestBuild: data.latestVersionCode,
            minSupportedBuild: data.minSupportedVersionCode,
            isForce: needsForceUpdate,
            needsUpdate: needsForceUpdate || hasNewerVersion
        });
        if (needsForceUpdate) {
            logUpdateEvent("force_update_shown", {
                currentBuild,
                minSupportedBuild: data.minSupportedVersionCode
            });
        } else if (hasNewerVersion) {
            logUpdateEvent("update_available", {
                currentBuild,
                latestBuild: data.latestVersionCode
            });
        }
        return {
            needsUpdate: needsForceUpdate || hasNewerVersion,
            isForce: needsForceUpdate,
            currentVersion,
            currentBuild,
            latestVersion: data.latestVersion,
            latestBuild: data.latestVersionCode,
            config: data
        };
    } catch (err) {
        console.warn("[AppUpdate] Version check warning:", err);
        // Fail safe on error
        return {
            needsUpdate: false,
            isForce: false,
            currentVersion,
            currentBuild,
            latestVersion: currentVersion,
            latestBuild: currentBuild,
            config: null
        };
    }
}
function openStoreListing(config) {
    var _this, _process_versions, _process, _this1, _Capacitor_getPlatform, _Capacitor, _webkit_messageHandlers, _webkit, _Capacitor_getPlatform1, _Capacitor1;
    const pkg = (config === null || config === void 0 ? void 0 : config.playStorePackage) || "minikart.in";
    const defaultPlayStoreUrl = `https://play.google.com/store/apps/details?id=${pkg}&hl=en_IN`;
    const defaultAppStoreUrl = `https://apps.apple.com/app/id${pkg}`;
    const defaultDesktopUrl = (config === null || config === void 0 ? void 0 : config.updateUrl) || "https://pingdart.com/downloads";
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const isDesktop = navigator.userAgent.toLowerCase().includes("electron") || Boolean((_this = window) === null || _this === void 0 ? void 0 : _this.__ELECTRON__) || Boolean((_this1 = window) === null || _this1 === void 0 ? void 0 : (_process = _this1.process) === null || _process === void 0 ? void 0 : (_process_versions = _process.versions) === null || _process_versions === void 0 ? void 0 : _process_versions.electron) || window.location.protocol.includes("capacitor-electron");
    if (isDesktop) {
        const desktopUrl = (config === null || config === void 0 ? void 0 : config.updateUrl) || defaultDesktopUrl;
        window.open(desktopUrl, "_blank", "noopener,noreferrer");
        return;
    }
    const isIOS = ((_Capacitor = window.Capacitor) === null || _Capacitor === void 0 ? void 0 : (_Capacitor_getPlatform = _Capacitor.getPlatform) === null || _Capacitor_getPlatform === void 0 ? void 0 : _Capacitor_getPlatform.call(_Capacitor)) === "ios" || ((_webkit = window.webkit) === null || _webkit === void 0 ? void 0 : (_webkit_messageHandlers = _webkit.messageHandlers) === null || _webkit_messageHandlers === void 0 ? void 0 : _webkit_messageHandlers.bridge) !== undefined || /iphone|ipad|ipod/i.test(navigator.userAgent || "");
    if (isIOS) {
        const appStoreUrl = (config === null || config === void 0 ? void 0 : config.updateUrl) || defaultAppStoreUrl;
        try {
            window.location.href = appStoreUrl.replace(/^https?:\/\//i, "itms-apps://");
            setTimeout(()=>{
                window.open(appStoreUrl, "_blank", "noopener,noreferrer");
            }, 700);
            return;
        } catch (_) {}
        window.open(appStoreUrl, "_blank", "noopener,noreferrer");
        return;
    }
    const isAndroid = ((_Capacitor1 = window.Capacitor) === null || _Capacitor1 === void 0 ? void 0 : (_Capacitor_getPlatform1 = _Capacitor1.getPlatform) === null || _Capacitor_getPlatform1 === void 0 ? void 0 : _Capacitor_getPlatform1.call(_Capacitor1)) === "android" || window.androidBridge !== undefined || /android/i.test(navigator.userAgent || "");
    if (isAndroid) {
        // Try opening native Google Play Store application directly
        const marketUri = `market://details?id=${pkg}`;
        const webUrl = (config === null || config === void 0 ? void 0 : config.updateUrl) || defaultPlayStoreUrl;
        try {
            window.location.href = marketUri;
            setTimeout(()=>{
                window.open(webUrl, "_blank", "noopener,noreferrer");
            }, 700);
            return;
        } catch (_) {}
        window.open(webUrl, "_blank", "noopener,noreferrer");
        return;
    }
    const fallbackUrl = (config === null || config === void 0 ? void 0 : config.updateUrl) || defaultPlayStoreUrl;
    window.open(fallbackUrl, "_blank", "noopener,noreferrer");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ForceUpdateModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForceUpdateModal",
    ()=>ForceUpdateModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/appUpdateService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.mjs [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ForceUpdateModal() {
    var _process_versions, _process, _webkit_messageHandlers, _webkit, _Capacitor_getPlatform, _Capacitor, _webkit_messageHandlers1, _webkit1;
    _s();
    const [updateState, setUpdateState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastCheckTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { isElectron } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Desktop in-app auto-updater state
    const [downloadProgress, setDownloadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDownloaded, setIsDownloaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadError, setDownloadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ForceUpdateModal.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return sessionStorage.getItem("dismissed_app_update") === "true";
        }
    }["ForceUpdateModal.useState"]);
    // 1. Detect if running inside Desktop App (Electron)
    const isDesktopApp = Boolean(isElectron || "object" !== "undefined" && (Boolean(window.__ELECTRON__) || Boolean((_process = window.process) === null || _process === void 0 ? void 0 : (_process_versions = _process.versions) === null || _process_versions === void 0 ? void 0 : _process_versions.electron) || (navigator.userAgent || "").toLowerCase().includes("electron") || window.location.protocol.includes("capacitor-electron")));
    // 2. Detect if running inside Native Mobile App Shell (Capacitor runtime on Android/iOS)
    // CRITICAL: Pure web browsers (Android Chrome, iOS Safari, etc.) return FALSE for all of these!
    const isMobileNativeApp = "object" !== "undefined" && !isDesktopApp && Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() || window.location.protocol === "capacitor:" || window.location.protocol === "ionic:" || window.androidBridge !== undefined || ((_webkit = window.webkit) === null || _webkit === void 0 ? void 0 : (_webkit_messageHandlers = _webkit.messageHandlers) === null || _webkit_messageHandlers === void 0 ? void 0 : _webkit_messageHandlers.bridge) !== undefined || (navigator.userAgent || "").toLowerCase().includes("pingdartnative") || document.documentElement.classList.contains("is-native") || document.documentElement.getAttribute("data-is-native") === "true");
    // 3. Specific mobile OS classification (ONLY within native app shell)
    const isIOSNativeApp = isMobileNativeApp && (((_Capacitor = window.Capacitor) === null || _Capacitor === void 0 ? void 0 : (_Capacitor_getPlatform = _Capacitor.getPlatform) === null || _Capacitor_getPlatform === void 0 ? void 0 : _Capacitor_getPlatform.call(_Capacitor)) === "ios" || ((_webkit1 = window.webkit) === null || _webkit1 === void 0 ? void 0 : (_webkit_messageHandlers1 = _webkit1.messageHandlers) === null || _webkit_messageHandlers1 === void 0 ? void 0 : _webkit_messageHandlers1.bridge) !== undefined || /iphone|ipad|ipod/i.test(navigator.userAgent || ""));
    const isAndroidNativeApp = isMobileNativeApp && !isIOSNativeApp;
    // ONLY show updates for:
    // - Installed Android app (Capacitor / APK / AAB)
    // - Installed iOS app (Capacitor / IPA)
    // - Installed Desktop app (Electron Windows/Mac/Linux)
    // NEVER show on Android web or iOS web!
    const isSupportedApp = isAndroidNativeApp || isIOSNativeApp || isDesktopApp;
    // URL override (?test_update=true) for testing in browser during development
    const isTestMode = "object" !== "undefined" && window.location.search.includes("test_update=true");
    // Listen to Electron auto-updater events if running inside Desktop App
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForceUpdateModal.useEffect": ()=>{
            var _updater_onDownloadProgress, _updater_onUpdateDownloaded, _updater_onUpdateError;
            if (!isDesktopApp || "object" === "undefined") return;
            const updater = window.__ELECTRON_UPDATER__;
            if (!updater) return;
            const unsubProgress = (_updater_onDownloadProgress = updater.onDownloadProgress) === null || _updater_onDownloadProgress === void 0 ? void 0 : _updater_onDownloadProgress.call(updater, {
                "ForceUpdateModal.useEffect": (data)=>{
                    if (typeof (data === null || data === void 0 ? void 0 : data.percent) === "number") {
                        setDownloadProgress(data.percent);
                    }
                }
            }["ForceUpdateModal.useEffect"]);
            const unsubDownloaded = (_updater_onUpdateDownloaded = updater.onUpdateDownloaded) === null || _updater_onUpdateDownloaded === void 0 ? void 0 : _updater_onUpdateDownloaded.call(updater, {
                "ForceUpdateModal.useEffect": ()=>{
                    setIsDownloaded(true);
                    setDownloadProgress(100);
                }
            }["ForceUpdateModal.useEffect"]);
            const unsubError = (_updater_onUpdateError = updater.onUpdateError) === null || _updater_onUpdateError === void 0 ? void 0 : _updater_onUpdateError.call(updater, {
                "ForceUpdateModal.useEffect": (err)=>{
                    setDownloadError((err === null || err === void 0 ? void 0 : err.message) || "Download encountered an issue");
                    setDownloadProgress(null);
                }
            }["ForceUpdateModal.useEffect"]);
            return ({
                "ForceUpdateModal.useEffect": ()=>{
                    unsubProgress === null || unsubProgress === void 0 ? void 0 : unsubProgress();
                    unsubDownloaded === null || unsubDownloaded === void 0 ? void 0 : unsubDownloaded();
                    unsubError === null || unsubError === void 0 ? void 0 : unsubError();
                }
            })["ForceUpdateModal.useEffect"];
        }
    }["ForceUpdateModal.useEffect"], [
        isDesktopApp
    ]);
    const runCheck = async (force = false)=>{
        const now = Date.now();
        // Throttle checks to at least 30 seconds apart unless force=true (user clicked Check Again)
        if (!force && now - lastCheckTimeRef.current < 30_000) {
            return;
        }
        lastCheckTimeRef.current = now;
        setIsChecking(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAppUpdate"])();
            setUpdateState((prev)=>{
                if ((prev === null || prev === void 0 ? void 0 : prev.isForce) && !result.isForce) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logUpdateEvent"])("force_update_completed", {
                        currentBuild: result.currentBuild,
                        latestBuild: result.latestBuild
                    });
                }
                return result;
            });
        } finally{
            setIsChecking(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForceUpdateModal.useEffect": ()=>{
            // If running in a mobile web browser (Chrome on Android, Safari on iOS) or desktop web, skip completely
            if (!isSupportedApp && !isTestMode) return;
            // Defer version check so the first screen render and chat prefetch have priority
            const timer = setTimeout({
                "ForceUpdateModal.useEffect.timer": ()=>{
                    runCheck(true);
                }
            }["ForceUpdateModal.useEffect.timer"], 2000);
            // Check again when user refocuses the app
            const handleVisibility = {
                "ForceUpdateModal.useEffect.handleVisibility": ()=>{
                    if (typeof document !== "undefined" && document.visibilityState === "visible") {
                        runCheck(false);
                    }
                }
            }["ForceUpdateModal.useEffect.handleVisibility"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener("focus", handleVisibility);
                document.addEventListener("visibilitychange", handleVisibility);
            }
            return ({
                "ForceUpdateModal.useEffect": ()=>{
                    clearTimeout(timer);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener("focus", handleVisibility);
                        document.removeEventListener("visibilitychange", handleVisibility);
                    }
                }
            })["ForceUpdateModal.useEffect"];
        }
    }["ForceUpdateModal.useEffect"], [
        isSupportedApp,
        isTestMode
    ]);
    // Trap Android hardware back button while force update is visible (Android native app only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForceUpdateModal.useEffect": ()=>{
            if (!isAndroidNativeApp || !(updateState === null || updateState === void 0 ? void 0 : updateState.isForce)) return;
            let backListenerHandle = null;
            try {
                const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].addListener("backButton", {
                    "ForceUpdateModal.useEffect.res": ()=>{
                        // Exit app instead of bypassing the force update screen
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].exitApp();
                    }
                }["ForceUpdateModal.useEffect.res"]);
                if (res && typeof res.then === "function") {
                    res.then({
                        "ForceUpdateModal.useEffect": (handle)=>{
                            backListenerHandle = handle;
                        }
                    }["ForceUpdateModal.useEffect"]).catch({
                        "ForceUpdateModal.useEffect": ()=>{}
                    }["ForceUpdateModal.useEffect"]);
                } else {
                    backListenerHandle = res;
                }
            } catch (_) {}
            return ({
                "ForceUpdateModal.useEffect": ()=>{
                    if (backListenerHandle === null || backListenerHandle === void 0 ? void 0 : backListenerHandle.remove) {
                        backListenerHandle.remove();
                    }
                }
            })["ForceUpdateModal.useEffect"];
        }
    }["ForceUpdateModal.useEffect"], [
        isAndroidNativeApp,
        updateState === null || updateState === void 0 ? void 0 : updateState.isForce
    ]);
    // If this is not an installed app target (and not in debug test mode), never show
    if (!isSupportedApp && !isTestMode) {
        return null;
    }
    if (!updateState || !updateState.needsUpdate) {
        return null;
    }
    // If this is an optional update (grace period) and user chose "Later" in this session, hide
    if (!updateState.isForce && isDismissed) {
        return null;
    }
    const config = updateState.config;
    const releaseNotes = (config === null || config === void 0 ? void 0 : config.releaseNotes) && config.releaseNotes.length > 0 ? config.releaseNotes : [
        "WhatsApp-level swipe gestures and message interactions",
        "High-speed selection mode and real-time top action bar",
        "Optimized group presence and real-time reliability",
        "Critical security updates and stability improvements"
    ];
    const handleDismiss = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logUpdateEvent"])("update_skipped", {
            currentBuild: updateState.currentBuild,
            latestBuild: updateState.latestBuild
        });
        setIsDismissed(true);
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.setItem("dismissed_app_update", "true");
        }
    };
    const handleDesktopUpdate = async ()=>{
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logUpdateEvent"])("update_store_opened", {
            isForce: updateState.isForce,
            currentBuild: updateState.currentBuild,
            latestBuild: updateState.latestBuild,
            platform: "desktop"
        });
        const updater = (_this = window) === null || _this === void 0 ? void 0 : _this.__ELECTRON_UPDATER__;
        if (isDownloaded && (updater === null || updater === void 0 ? void 0 : updater.restartAndInstall)) {
            updater.restartAndInstall();
            return;
        }
        if (updater === null || updater === void 0 ? void 0 : updater.startDownload) {
            try {
                setDownloadProgress(0);
                setDownloadError(null);
                await updater.startDownload();
                return;
            } catch (err) {
                console.warn("[Desktop Updater] Native startDownload failed, falling back to download URL:", err);
                setDownloadProgress(null);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openStoreListing"])(config);
    };
    // ── DESKTOP APPLICATION UPDATE UI (Electron / PC / Mac) ──────────
    if (isDesktopApp) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            className: "fixed inset-0 z-[9999999] flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md select-none animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xl bg-[#0f172a]/95 border border-slate-700/70 rounded-[10px] shadow-2xl shadow-black/80 overflow-hidden flex flex-col text-slate-100 backdrop-blur-2xl ring-1 ring-white/10 animate-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-[10px] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-lg",
                                            children: "P"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-white text-base",
                                                        children: "PingDart Desktop"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Desktop Client"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: updateState.isForce ? "Mandatory software update" : "New desktop release available"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: updateState.isForce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        " Update Required"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this),
                                                " v",
                                                updateState.latestVersion
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 292,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDismiss,
                                            "aria-label": "Close",
                                            className: "p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-5 overflow-y-auto max-h-[calc(85vh-150px)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold tracking-tight text-white mb-1.5",
                                        children: updateState.isForce ? (config === null || config === void 0 ? void 0 : config.title) || "Update Required to Continue" : (config === null || config === void 0 ? void 0 : config.title) || "New Version Available"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-300 leading-relaxed",
                                        children: (config === null || config === void 0 ? void 0 : config.message) || "A newer desktop version of PingDart is available with critical performance enhancements, security updates, and new features."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 p-3.5 rounded-[10px] bg-slate-900/80 border border-slate-800 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 uppercase tracking-wider text-[10px] font-semibold",
                                                children: "Installed Version"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-slate-300 font-medium text-sm",
                                                children: [
                                                    "v",
                                                    updateState.currentVersion,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500",
                                                        children: [
                                                            "(",
                                                            updateState.currentBuild,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0.5 border-l border-slate-800 pl-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-400 uppercase tracking-wider text-[10px] font-semibold flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Available Version"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-white font-bold text-sm",
                                                children: [
                                                    "v",
                                                    updateState.latestVersion,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400",
                                                        children: [
                                                            "(",
                                                            updateState.latestBuild,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[10px] bg-slate-950/60 border border-slate-800/70 p-4 space-y-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider",
                                        children: [
                                            "What's New in v",
                                            updateState.latestVersion
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-xs sm:text-[13px] text-slate-300",
                                        children: releaseNotes.map((note, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2.5 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 15,
                                                        className: "text-emerald-400 mt-0.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: note
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            downloadProgress !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-blue-950/30 border border-blue-500/20 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-300 font-medium flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        size: 13,
                                                        className: "animate-spin text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 21
                                                    }, this),
                                                    isDownloaded ? "Download complete! Ready to install." : "Downloading desktop package..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-white font-semibold",
                                                children: [
                                                    Math.round(downloadProgress),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-2 bg-slate-800 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 transition-all duration-300 rounded-full",
                                            style: {
                                                width: `${downloadProgress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 365,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this),
                            downloadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-[10px] bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        size: 15,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            downloadError,
                                            " — You can download the installer directly below."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: !updateState.isForce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDismiss,
                                    className: "px-4 py-2.5 rounded-[10px] text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 active:scale-[0.98] transition cursor-pointer",
                                    children: "Remind Me Later"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>runCheck(true),
                                    disabled: isChecking,
                                    className: "px-4 py-2.5 rounded-[10px] text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 active:scale-[0.98] flex items-center gap-2 transition cursor-pointer disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 14,
                                            className: isChecking ? "animate-spin" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 397,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isChecking ? "Checking..." : "I've already updated"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDesktopUpdate,
                                    disabled: downloadProgress !== null && !isDownloaded,
                                    className: "py-2.5 px-5 rounded-[50px] font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] text-white shadow-lg shadow-blue-500/25 flex items-center gap-2 transition cursor-pointer disabled:opacity-60",
                                    children: isDownloaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 411,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Restart & Install Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 412,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : downloadProgress !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 16,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 416,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Downloading (",
                                                    Math.round(downloadProgress),
                                                    "%)..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 417,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 421,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Download Desktop Update"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 422,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 423,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ForceUpdateModal.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this);
    }
    // ── MOBILE NATIVE APP UPDATE UI (Android / iOS Full-Screen) ──────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        className: "fixed inset-0 z-[9999999] flex flex-col items-center justify-between p-6 sm:p-8 bg-[#0b141a] text-white select-none overflow-y-auto",
        style: {
            paddingTop: "calc(env(safe-area-inset-top, 24px) + 24px)",
            paddingBottom: "calc(env(safe-area-inset-bottom, 24px) + 24px)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-600/20 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-indigo-600/15 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-teal-500/10 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-md flex flex-col items-center text-center my-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-500/25 border border-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-4xl sm:text-5xl tracking-tight",
                                    children: "P"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#00a884] border-4 border-[#0b141a] flex items-center justify-center text-white shadow-lg animate-bounce",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2",
                        children: updateState.isForce ? (config === null || config === void 0 ? void 0 : config.title) || "Update Required" : "New Version Available"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-sm",
                        children: (config === null || config === void 0 ? void 0 : config.message) || "A new version of PingDart is available with critical performance, security, and messaging updates. Please update to continue."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[#111b21] border border-white/10 rounded-[10px] p-4 mb-6 text-left shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Installed Version"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-slate-300 font-semibold",
                                        children: [
                                            "v",
                                            updateState.currentVersion,
                                            " (",
                                            updateState.currentBuild,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 480,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-3 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00a884] font-medium flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 486,
                                                columnNumber: 15
                                            }, this),
                                            " Latest Available"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-white font-bold text-sm bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-400/30",
                                        children: [
                                            "v",
                                            updateState.latestVersion,
                                            " (",
                                            updateState.latestBuild,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-[#111b21]/70 border border-white/5 rounded-[10px] p-4 text-left mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5",
                                children: "What's New in This Update"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-xs sm:text-[13px] text-slate-300",
                                children: releaseNotes.map((note, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#00a884] mt-0.5 shrink-0",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: note
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-md flex flex-col gap-3 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logUpdateEvent"])("update_store_opened", {
                                isForce: updateState.isForce,
                                currentBuild: updateState.currentBuild,
                                latestBuild: updateState.latestBuild,
                                platform: isIOSNativeApp ? "ios" : "android"
                            });
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$appUpdateService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openStoreListing"])(config);
                        },
                        className: "w-full py-4 px-6 rounded-[10px] font-semibold text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] text-white shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer",
                        children: [
                            isIOSNativeApp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 fill-current",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.95 2.77.99.08 2.06-.52 2.68-1.27z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Update on App Store"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 fill-current",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M3.609 1.814L13.792 12 3.61 22.186c-.365-.333-.61-.83-.61-1.393V3.207c0-.563.245-1.06.61-1.393zm11.235 11.238l2.253 2.253-11.258 6.452 9.005-8.705zm0-2.104L5.839 2.243l11.258 6.452-2.253 2.253zm1.488 1.052l3.415 1.957c.745.427.745 1.121 0 1.547l-3.415 1.957-2.074-2.074 2.074-2.074z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Update on Google Play"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    !updateState.isForce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDismiss,
                        className: "w-full py-3 px-4 rounded-[10px] text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer",
                        children: "Later (remind me next time)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 543,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>runCheck(true),
                        disabled: isChecking,
                        className: "w-full py-3 px-4 rounded-[10px] text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 active:scale-[0.98] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 14,
                                className: isChecking ? "animate-spin" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isChecking ? "Checking for update..." : "I've already updated"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ForceUpdateModal.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ForceUpdateModal.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ForceUpdateModal.tsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
_s(ForceUpdateModal, "AYqZB8ieicH2N1jPJ77sOINL2Jk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = ForceUpdateModal;
var _c;
__turbopack_context__.k.register(_c, "ForceUpdateModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DesktopUpdateModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesktopUpdateModal",
    ()=>DesktopUpdateModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DesktopUpdateModal() {
    _s();
    const [updateInfo, setUpdateInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadProgress, setDownloadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDownloaded, setIsDownloaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopUpdateModal.useEffect": ()=>{
            // Only active in Electron desktop environment
            if ("object" === "undefined" || !window.__ELECTRON_UPDATER__) {
                return;
            }
            const updater = window.__ELECTRON_UPDATER__;
            // Listen for update found
            const unsubscribeAvailable = updater.onUpdateAvailable({
                "DesktopUpdateModal.useEffect.unsubscribeAvailable": (data)=>{
                    setUpdateInfo(data);
                    setIsDismissed(false);
                    setError(null);
                }
            }["DesktopUpdateModal.useEffect.unsubscribeAvailable"]);
            // Listen for download progress
            const unsubscribeProgress = updater.onDownloadProgress({
                "DesktopUpdateModal.useEffect.unsubscribeProgress": (prog)=>{
                    setIsDownloading(true);
                    setDownloadProgress(prog);
                }
            }["DesktopUpdateModal.useEffect.unsubscribeProgress"]);
            // Listen for download complete
            const unsubscribeDownloaded = updater.onUpdateDownloaded({
                "DesktopUpdateModal.useEffect.unsubscribeDownloaded": ()=>{
                    setIsDownloading(false);
                    setIsDownloaded(true);
                }
            }["DesktopUpdateModal.useEffect.unsubscribeDownloaded"]);
            // Listen for errors
            const unsubscribeError = updater.onUpdateError({
                "DesktopUpdateModal.useEffect.unsubscribeError": (err)=>{
                    setIsDownloading(false);
                    setError((err === null || err === void 0 ? void 0 : err.message) || "Failed to download update");
                }
            }["DesktopUpdateModal.useEffect.unsubscribeError"]);
            return ({
                "DesktopUpdateModal.useEffect": ()=>{
                    if (unsubscribeAvailable) unsubscribeAvailable();
                    if (unsubscribeProgress) unsubscribeProgress();
                    if (unsubscribeDownloaded) unsubscribeDownloaded();
                    if (unsubscribeError) unsubscribeError();
                }
            })["DesktopUpdateModal.useEffect"];
        }
    }["DesktopUpdateModal.useEffect"], []);
    if (!updateInfo || isDismissed) {
        return null;
    }
    const handleStartDownload = async ()=>{
        setError(null);
        setIsDownloading(true);
        try {
            var ___ELECTRON_UPDATER__;
            const res = await ((___ELECTRON_UPDATER__ = window.__ELECTRON_UPDATER__) === null || ___ELECTRON_UPDATER__ === void 0 ? void 0 : ___ELECTRON_UPDATER__.startDownload());
            if (res && !res.success && res.error) {
                setError(res.error);
                setIsDownloading(false);
            }
        } catch (err) {
            setError((err === null || err === void 0 ? void 0 : err.message) || "Failed to start download");
            setIsDownloading(false);
        }
    };
    const handleRestartAndInstall = ()=>{
        var ___ELECTRON_UPDATER__;
        (___ELECTRON_UPDATER__ = window.__ELECTRON_UPDATER__) === null || ___ELECTRON_UPDATER__ === void 0 ? void 0 : ___ELECTRON_UPDATER__.restartAndInstall();
    };
    const notesList = Array.isArray(updateInfo.releaseNotes) ? updateInfo.releaseNotes : typeof updateInfo.releaseNotes === "string" ? [
        updateInfo.releaseNotes
    ] : [
        "High-performance real-time messaging engine updates",
        "Optimized desktop workstation tracking and power efficiency",
        "Improved connection resilience and auto-reconnect",
        "Critical stability and security patches"
    ];
    const formatBytes = (bytes)=>{
        if (!bytes || bytes === 0) return "0 MB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };
    const formatSpeed = (bytesPerSec)=>{
        if (!bytesPerSec || bytesPerSec === 0) return "";
        return `(${(bytesPerSec / (1024 * 1024)).toFixed(1)} MB/s)`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        className: "fixed inset-0 z-[99999999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-lg bg-[#0f1720] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-500/20 to-transparent blur-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-start gap-4 mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0 border border-white/15",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25",
                                            children: "Desktop Update"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400 font-mono",
                                            children: [
                                                "v",
                                                updateInfo.latestVersion
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold tracking-tight text-white mt-1",
                                    children: "New PingDart Version Available"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#15202b] border border-white/10 rounded-2xl p-3.5 mb-5 flex items-center justify-between text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-400 text-[11px]",
                                    children: "Installed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-slate-200 font-semibold mt-0.5",
                                    children: [
                                        "v",
                                        updateInfo.currentVersion
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-slate-500 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-400 text-[11px] font-medium",
                                    children: "New Version"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-white font-bold mt-0.5 text-sm",
                                    children: [
                                        "v",
                                        updateInfo.latestVersion
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#15202b]/60 border border-white/5 rounded-2xl p-4 mb-5 max-h-48 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5",
                            children: "What's new in this release"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-xs text-slate-300",
                            children: notesList.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-400 mt-0.5 shrink-0",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                isDownloading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#15202b] border border-blue-500/30 rounded-2xl p-4 mb-5 animate-in fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-xs text-slate-300 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium flex items-center gap-1.5 text-blue-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 13,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        "Downloading update..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono font-bold text-white",
                                    children: [
                                        (downloadProgress === null || downloadProgress === void 0 ? void 0 : downloadProgress.percent) || 0,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-2 rounded-full bg-white/10 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 rounded-full",
                                style: {
                                    width: `${(downloadProgress === null || downloadProgress === void 0 ? void 0 : downloadProgress.percent) || 0}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        downloadProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-[11px] text-slate-400 mt-2 font-mono",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        formatBytes(downloadProgress.transferred),
                                        " / ",
                                        formatBytes(downloadProgress.total)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: formatSpeed(downloadProgress.bytesPerSecond)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 195,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this),
                isDownloaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 mb-5 flex items-center gap-3 text-xs text-emerald-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 18,
                            className: "shrink-0 text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-emerald-200",
                                    children: "Update is ready to install"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-emerald-400/90 mt-0.5",
                                    children: "The download completed successfully. Restart PingDart to complete the installation."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-rose-500/10 border border-rose-500/30 rounded-2xl p-3.5 mb-5 flex items-center gap-2.5 text-xs text-rose-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                            size: 16,
                            className: "shrink-0 text-rose-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 pt-1",
                    children: isDownloaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleRestartAndInstall,
                        className: "flex-1 py-3.5 px-5 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 text-white shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Restart & Install Now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                        lineNumber: 229,
                        columnNumber: 13
                    }, this) : isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: true,
                        className: "flex-1 py-3.5 px-5 rounded-2xl font-medium text-sm bg-white/10 text-slate-400 flex items-center justify-center gap-2 cursor-not-allowed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 14,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Downloading..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsDismissed(true),
                                className: "py-3 px-5 rounded-2xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 active:scale-95 transition cursor-pointer",
                                children: "Later"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleStartDownload,
                                className: "flex-1 py-3.5 px-5 rounded-2xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Update Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/DesktopUpdateModal.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DesktopUpdateModal.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DesktopUpdateModal.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(DesktopUpdateModal, "MjiNQ16XQ1p9RDgOWsv38ZMP3yk=");
_c = DesktopUpdateModal;
var _c;
__turbopack_context__.k.register(_c, "DesktopUpdateModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/packagesApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "packagesApi",
    ()=>packagesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const packagesApi = {
    // Get all packages
    getPackages: async (isPublic = false)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/packages?public=${isPublic}`);
        return response.data;
    },
    // Get single package
    getPackageById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/packages/${id}`);
        return response.data;
    },
    // Create new package
    createPackage: async (pkgData)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/packages', pkgData);
        return response.data;
    },
    // Update existing package
    updatePackage: async (id, pkgData)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/packages/${id}`, pkgData);
        return response.data;
    },
    // Toggle active status
    toggleActive: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/packages/${id}/toggle`);
        return response.data;
    },
    // Delete package
    deletePackage: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/packages/${id}`);
        return response.data;
    },
    // Reset to default PingDart USD plans
    resetDefaults: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/packages/reset-defaults');
        return response.data;
    },
    getCurrentSubscription: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/packages/subscribe/current');
        return response.data;
    },
    createSubscriptionCheckout: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/packages/subscribe/create', payload);
        return response.data;
    },
    verifySubscriptionPayment: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/packages/subscribe/verify', payload);
        return response.data;
    },
    startPlanTrial: async (slug, trialDays = 7)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/packages/subscribe/start-trial', {
            slug,
            trialDays
        });
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PlanExpiryGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlanExpiryGuard",
    ()=>PlanExpiryGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$packagesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/packagesApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PlanExpiryGuard() {
    _s();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "PlanExpiryGuard.useAuthStore[user]": (state)=>state.user
    }["PlanExpiryGuard.useAuthStore[user]"]);
    const isDomainAdmin = (user === null || user === void 0 ? void 0 : user.role) === "domainadmin";
    const [lifecycle, setLifecycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [popupOpen, setPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bannerHidden, setBannerHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlanExpiryGuard.useEffect": ()=>{
            if (!isDomainAdmin) {
                setLifecycle(null);
                setPopupOpen(false);
                setBannerHidden(false);
                return;
            }
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const token = localStorage.getItem("access_token") || localStorage.getItem("auth_token") || localStorage.getItem("token");
            if (!token) return;
            const path = window.location.pathname || "";
            if (path === "/" || path.startsWith("/login") || path.startsWith("/register")) return;
            let cancelled = false;
            const load = {
                "PlanExpiryGuard.useEffect.load": async ()=>{
                    try {
                        var _res_data;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$packagesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packagesApi"].getCurrentSubscription();
                        const life = res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.lifecycle;
                        if (cancelled || !life) return;
                        setLifecycle(life);
                        if (life.showPopup) {
                            const dismissed = sessionStorage.getItem(`plan_popup_${life.phase}`) === "1";
                            if (!dismissed || life.terminated || life.servicesStopped) setPopupOpen(true);
                        }
                    } catch (e) {
                    /* logged-out or API down */ }
                }
            }["PlanExpiryGuard.useEffect.load"];
            let initialTimer = null;
            const intervalTimer = window.setInterval(load, 10 * 60 * 1000);
            // Defer initial load so critical chat APIs and websocket establish first
            initialTimer = setTimeout(load, 2500);
            const handlePlanUpdated = {
                "PlanExpiryGuard.useEffect.handlePlanUpdated": ()=>{
                    load();
                }
            }["PlanExpiryGuard.useEffect.handlePlanUpdated"];
            window.addEventListener("plan_updated", handlePlanUpdated);
            return ({
                "PlanExpiryGuard.useEffect": ()=>{
                    cancelled = true;
                    if (initialTimer) clearTimeout(initialTimer);
                    window.clearInterval(intervalTimer);
                    window.removeEventListener("plan_updated", handlePlanUpdated);
                }
            })["PlanExpiryGuard.useEffect"];
        }
    }["PlanExpiryGuard.useEffect"], [
        isDomainAdmin,
        user === null || user === void 0 ? void 0 : user.id
    ]);
    const tone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlanExpiryGuard.useMemo[tone]": ()=>{
            if ((lifecycle === null || lifecycle === void 0 ? void 0 : lifecycle.severity) === "critical") {
                return "bg-rose-600 text-white";
            }
            if ((lifecycle === null || lifecycle === void 0 ? void 0 : lifecycle.severity) === "warning") {
                return "bg-amber-500 text-slate-950";
            }
            return "bg-indigo-600 text-white";
        }
    }["PlanExpiryGuard.useMemo[tone]"], [
        lifecycle === null || lifecycle === void 0 ? void 0 : lifecycle.severity
    ]);
    if (!isDomainAdmin || !(lifecycle === null || lifecycle === void 0 ? void 0 : lifecycle.showBanner)) return null;
    const goRenew = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = "/user?tab=Mail&subtab=mailsettings&child=subscription";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !bannerHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-[80] px-3 py-2 text-center text-xs sm:text-sm font-semibold ${tone}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-5xl items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-4 w-4 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "leading-snug",
                            children: [
                                lifecycle.title,
                                ": ",
                                lifecycle.message
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: goRenew,
                            className: "ml-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wide hover:bg-white/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                " Renew"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        !lifecycle.terminated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": "Dismiss banner",
                            className: "absolute right-2 top-1.5 rounded-full p-1 hover:bg-black/10",
                            onClick: ()=>setBannerHidden(true),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 114,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            popupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl dark:bg-slate-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "h-5 w-5 text-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-black text-slate-900 dark:text-white",
                                            children: lifecycle.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                !lifecycle.terminated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        sessionStorage.setItem(`plan_popup_${lifecycle.phase}`, "1");
                                        setPopupOpen(false);
                                    },
                                    className: "rounded-full p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed text-slate-600 dark:text-slate-300",
                            children: lifecycle.message
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-4 space-y-1.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200",
                            children: (lifecycle.terms || []).map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        "• ",
                                        term
                                    ]
                                }, term, true, {
                                    fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: goRenew,
                            className: "mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-black text-white hover:bg-indigo-700",
                            children: "Renew plan now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlanExpiryGuard.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PlanExpiryGuard, "0oavO64O033+BrMDJI1SeeoxwZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = PlanExpiryGuard;
var _c;
__turbopack_context__.k.register(_c, "PlanExpiryGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/chatApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatApi",
    ()=>chatApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const chatApi = {
    // Sequence-based Room Delta Sync
    getDeltaSync: async (roomId, afterSeq = 0)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/sync/delta?roomId=${roomId}&afterSeq=${afterSeq}`);
        return response.data;
    },
    // Get all chat rooms for the current user
    getRooms: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/chat");
        return response.data;
    },
    getContacts: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/chat/contacts");
        return response.data;
    },
    blockUser: async (targetUserId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/user/block", {
            targetUserId
        });
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('blocked_contacts_updated', {
                detail: {
                    targetUserId,
                    action: 'block'
                }
            }));
        }
        return response.data;
    },
    unblockUser: async (targetUserId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/user/unblock", {
            targetUserId
        });
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('blocked_contacts_updated', {
                detail: {
                    targetUserId,
                    action: 'unblock'
                }
            }));
        }
        return response.data;
    },
    getBlockedContacts: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/user/blocked-contacts");
        return response.data;
    },
    searchUsers: async (query)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/search?q=${encodeURIComponent(query)}`);
        return response.data;
    },
    getDiscoverCommunities: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/chat/discover-communities");
        return response.data;
    },
    getCommunityStories: async (limit = 6)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/communities/stories?limit=${limit}`);
            return response.data;
        } catch (e) {
            console.error("Failed to fetch community stories:", e);
            return {
                success: false,
                data: []
            };
        }
    },
    getCommunityFeed: async (filter)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/community-feed${filter ? `?filter=${filter}` : ''}`);
        return response.data;
    },
    getAllCommunities: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/chat/all-communities');
        return response.data;
    },
    getCommunityDetails: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/rooms/${roomId}`);
        return response.data;
    },
    toggleSavePost: async (postId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/posts/${postId}/save`);
        return response.data;
    },
    getSavedPosts: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/chat/posts/saved');
        return response.data;
    },
    hidePost: async (postId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/posts/${postId}/hide`);
        return response.data;
    },
    unhidePost: async (postId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/posts/${postId}/hide`);
        return response.data;
    },
    forwardPost: async (postId, targetRoomIds)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/posts/${postId}/forward`, {
            targetRoomIds
        });
        return response.data;
    },
    joinCommunity: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/join`);
        return response.data;
    },
    leaveCommunity: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/leave`);
        return response.data;
    },
    getCallHistory: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/chat/calls");
        return response.data;
    },
    pinMessage: async (roomId, messageId, isPinned = true, durationDays = 7)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/pin-message`, {
                messageId,
                isPinned,
                durationDays
            });
            return response.data;
        } catch (e) {
            return {
                success: false
            };
        }
    },
    getRoomPinnedMessages: async (roomId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/rooms/${roomId}/pinned-messages`);
            return response.data;
        } catch (e) {
            return {
                success: false,
                data: []
            };
        }
    },
    createRoom: async (name, type, memberIds, description, avatarFile, isPublic)=>{
        const defaultIsPublic = isPublic !== undefined ? isPublic : type === 'community';
        if (avatarFile) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('type', type);
            if (memberIds) formData.append('memberIds', JSON.stringify(memberIds));
            if (description) formData.append('description', description);
            formData.append('avatar', avatarFile);
            formData.append('isPublic', String(defaultIsPublic));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/chat", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } else {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/chat", {
                name,
                type,
                memberIds,
                description,
                isPublic: defaultIsPublic
            });
            return response.data;
        }
    },
    // Get messages for a specific room
    getMessages: async (roomId, limit = 50, beforeId)=>{
        try {
            let url = `/chat/${roomId}/messages?limit=${limit}`;
            if (beforeId) {
                url += `&beforeId=${beforeId}`;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(url);
            return response.data;
        } catch (err) {
            var _err_response, _err_response_data, _err_response1;
            return {
                success: false,
                accessDenied: ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 403,
                message: ((_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : (_err_response_data = _err_response1.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || 'Failed to fetch messages',
                data: []
            };
        }
    },
    // Send a message to a specific room
    sendMessage: async (roomId, text, type = 'text', data = null, title, description, location, clientMessageId)=>{
        const cid = clientMessageId || (data && typeof data === 'object' ? data.clientMessageId : undefined);
        const payload = {
            text,
            type,
            data
        };
        if (title) payload.title = title;
        if (description) payload.description = description;
        if (location) payload.location = location;
        if (cid) payload.clientMessageId = String(cid);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/${roomId}/messages`, payload);
        return response.data;
    },
    // Get info for a specific message
    getMessageInfo: async (messageId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/messages/${messageId}/info`);
        return response.data;
    },
    // Send a file attachment to a specific room
    sendAttachment: async (roomId, file, caption, intent, title, description, location, onProgress, clientMessageId)=>{
        var _file_type, _file_type1, _file_type2;
        const formData = new FormData();
        formData.append('file', file);
        const isVideo = (_file_type = file.type) === null || _file_type === void 0 ? void 0 : _file_type.startsWith('video/');
        const isImage = (_file_type1 = file.type) === null || _file_type1 === void 0 ? void 0 : _file_type1.startsWith('image/');
        const isAudio = (_file_type2 = file.type) === null || _file_type2 === void 0 ? void 0 : _file_type2.startsWith('audio/');
        const msgType = intent === 'document' ? 'document' : intent === 'sticker' ? 'sticker' : isImage ? 'image' : isVideo ? 'video' : isAudio ? 'audio' : 'document';
        formData.append('type', msgType);
        if (caption) formData.append('caption', caption);
        if (intent) formData.append('intent', intent);
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);
        if (location) formData.append('location', location);
        if (clientMessageId) formData.append('clientMessageId', String(clientMessageId));
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/${roomId}/messages`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent)=>{
                if (progressEvent.total) {
                    const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    if (onProgress) onProgress(percent);
                }
            }
        });
        return response.data;
    },
    // Mark all messages in a room as read
    markAsRead: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/${roomId}/messages/read`);
        return response.data;
    },
    // Mark messages in a room as delivered (e.g. upon push notification or connect)
    markAsDelivered: async (roomId, messageIds)=>{
        const url = roomId ? `/chat/${roomId}/messages/delivered` : `/chat/messages/delivered`;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(url, {
            roomId,
            messageIds
        });
        return response.data;
    },
    // Delete a specific message
    deleteMessage: async (messageId, scope = 'all')=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/messages/${messageId}`, {
            data: {
                scope
            }
        });
        return response.data;
    },
    // React to a message
    reactMessage: async (roomId, messageId, emoji)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/${roomId}/messages/${messageId}/react`, {
            emoji
        });
        return response.data;
    },
    // Get a message for public view
    getPublicMessage: async (messageId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/public/messages/${messageId}`);
        return response.data;
    },
    // Edit a message
    editMessage: async (messageId, text)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/messages/${messageId}`, {
            text
        });
        return response.data;
    },
    // Vote on a poll message
    votePoll: async (roomId, messageId, optionIndexes)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/${roomId}/messages/${messageId}/vote`, {
            optionIndexes
        });
        return response.data;
    },
    archiveRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/archive`);
        return response.data;
    },
    unarchiveRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/unarchive`);
        return response.data;
    },
    // Favorite a chat room
    favoriteRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/favorite`);
        return response.data;
    },
    // Unfavorite a chat room
    unfavoriteRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/unfavorite`);
        return response.data;
    },
    // Toggle mute for a room
    muteRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/mute`);
        return response.data;
    },
    // Clear a room
    clearChat: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/rooms/${roomId}/clear`);
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.removeItem(`ping_chat_msgs_${roomId}`);
                const { clearLocalRoomMessages, updateLocalRoomPreview } = await __turbopack_context__.A("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript, async loader)");
                await clearLocalRoomMessages(Number(roomId)).catch(()=>{});
                await updateLocalRoomPreview(Number(roomId), 'No messages yet').catch(()=>{});
                const { globalMessageCache } = await __turbopack_context__.A("[project]/src/modules/chat/hooks/useChatHandlers.ts [app-client] (ecmascript, async loader)");
                globalMessageCache.delete(Number(roomId));
            } catch (_) {}
            window.dispatchEvent(new CustomEvent('chat_cleared', {
                detail: {
                    roomId
                }
            }));
        }
        return response.data;
    },
    // Delete a room
    deleteRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/rooms/${roomId}`);
        return response.data;
    },
    // Leave a room
    leaveRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/leave`);
        return response.data;
    },
    // Update disappearing messages timer
    updateDisappearingTimer: async (roomId, timer)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/disappearing`, {
            timer
        });
        return response.data;
    },
    // Get user online status
    getUserStatus: async (userId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/${userId}/status`);
        return response.data;
    },
    // ── E2EE Key Bundle API ─────────────────────────────────────────
    /**
   * Upload (or replace) our Signal Protocol public key bundle to the server.
   * Only public keys are sent — private keys never leave the browser.
   */ uploadKeyBundle: async (bundle)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/e2ee/keys', bundle);
        return response.data;
    },
    updateBackup: async (encryptedBackup)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/e2ee/keys/backup', {
            encryptedBackup
        });
        return response.data;
    },
    /**
   * Fetch another user's public key bundle for session establishment (X3DH).
   * This consumes one of their one-time pre-keys.
   */ fetchKeyBundle: async (userId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/e2ee/keys/${userId}`);
            return response.data;
        } catch (e) {
            var _e_response;
            if (((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.status) === 404) return null;
            throw e;
        }
    },
    /**
   * Fetch just the P-256 ECDH public key for a user — no OTK consumed.
   * Used for deterministic shared-key derivation.
   */ fetchDhPublicKey: async (userId)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/e2ee/keys/${userId}/dh`);
            return response.data;
        } catch (e) {
            var _e_response;
            if (((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.status) === 404) return null;
            throw e;
        }
    },
    /**
   * Check if we already have a key bundle uploaded on the server.
   */ checkMyKeyBundle: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/e2ee/keys/my/bundle');
        return response.data;
    },
    errorLog: async (msg, context)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/e2ee/error-log', {
            message: msg,
            context
        });
        return response.data;
    },
    updateWallpaper: async (roomId, file)=>{
        if (!file) {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/wallpaper`, {});
            return response.data;
        }
        const formData = new FormData();
        formData.append('file', file);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/wallpaper`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    lockRoom: async (roomId, code, isHidden = false)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/lock`, {
            code,
            isHidden
        });
        return response.data;
    },
    updateRoomInfo: async (roomId, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}`, data);
        return response.data;
    },
    updateRoomAvatar: async (roomId, file)=>{
        const formData = new FormData();
        formData.append('file', file);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    updateRoomBanner: async (roomId, file)=>{
        const formData = new FormData();
        formData.append('file', file);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/banner`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    getRoomMembers: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/rooms/${roomId}/members`);
        return response.data;
    },
    addMember: async (roomId, newUserId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/members`, {
            newUserId
        });
        return response.data;
    },
    removeMember: async (roomId, memberId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/rooms/${roomId}/members/${memberId}`);
        return response.data;
    },
    changeMemberRole: async (roomId, memberId, role)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/members/${memberId}/role`, {
            role
        });
        return response.data;
    },
    joinRoom: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${roomId}/join`);
        return response.data;
    },
    getJoinRequests: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/rooms/${roomId}/requests`);
        return response.data;
    },
    handleJoinRequest: async (roomId, userId, action)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${roomId}/requests/${userId}`, {
            action
        });
        return response.data;
    },
    getJoinInfo: async (roomId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/rooms/${roomId}/join-info`);
        return response.data;
    },
    toggleLike: async (messageId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/messages/${messageId}/like`);
        return response.data;
    },
    getComments: async (messageId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/messages/${messageId}/comments`);
        return response.data;
    },
    addComment: async (messageId, text, options)=>{
        const payload = {
            text,
            ...options
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/messages/${messageId}/comments`, payload);
        return response.data;
    },
    getCustomLists: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/user/custom-lists');
        return response.data;
    },
    createCustomList: async (name, members = [], description = '', icon = 'Users', color = '#00a884')=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/user/custom-lists', {
            name,
            members,
            description,
            icon,
            color
        });
        return response.data;
    },
    updateCustomList: async (id, name, members = [], description = '', icon, color, isPinned)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/user/custom-lists/${id}`, {
            name,
            members,
            description,
            icon,
            color,
            isPinned
        });
        return response.data;
    },
    togglePinCustomList: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/user/custom-lists/${id}/pin`);
        return response.data;
    },
    deleteCustomList: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/user/custom-lists/${id}`);
        return response.data;
    },
    getCustomListChats: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/custom-lists/${id}/chats`);
        return response.data;
    },
    // ── Broadcast Lists ( Fan-Out Engine) ────────────────────────
    getBroadcastLists: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/chat/broadcasts');
        return response.data;
    },
    createBroadcastList: async (name, memberIds)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/chat/broadcasts', {
            name,
            memberIds
        });
        return response.data;
    },
    updateBroadcastList: async (id, name, memberIds)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/broadcasts/${id}`, {
            name,
            memberIds
        });
        return response.data;
    },
    deleteBroadcastList: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/broadcasts/${id}`);
        return response.data;
    },
    getBroadcastMessages: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/broadcasts/${id}/messages`);
        return response.data;
    },
    sendBroadcast: async (id, text, file, data)=>{
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            if (text) formData.append('text', text);
            if (data) formData.append('data', JSON.stringify(data));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/broadcasts/${id}/send`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } else {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/broadcasts/${id}/send`, {
                text,
                data
            });
            return response.data;
        }
    },
    // ── Linked Device API ──────────────────────────────────────
    deviceLinking: {
        init: async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/init');
            return response.data;
        },
        complete: async (sessionId, payload, senderEphemeralPublic, platform = 'web', deviceType = 'web')=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/complete', {
                sessionId,
                payload,
                senderEphemeralPublic,
                platform,
                deviceType
            });
            return response.data;
        },
        registerDevice: async (deviceId, platform = 'web', deviceType = 'web', pushToken)=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/register-device', {
                deviceId,
                platform,
                deviceType,
                pushToken
            });
            return response.data;
        },
        listSessions: async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/device-linking/sessions');
            return response.data;
        },
        createToken: async (ephemeralPublicKey, deviceName)=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/token', {
                ephemeralPublicKey,
                deviceName
            });
            return response.data;
        },
        claimToken: async (token, deviceId, platform = 'android', appVersion = '13.0.1', deviceName)=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/claim', {
                token,
                deviceId,
                platform,
                appVersion,
                deviceName
            });
            return response.data;
        },
        unlinkSession: async (id)=>{
            const myDeviceId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('pingdart_device_id') : "TURBOPACK unreachable";
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/device-linking/sessions/${id}`, {
                headers: myDeviceId ? {
                    'x-device-id': myDeviceId
                } : {}
            });
            return response.data;
        },
        requestCode: async (sessionId, identifier, ephemeralPublic)=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/request-code', {
                sessionId,
                identifier,
                ephemeralPublic
            });
            return response.data;
        },
        resolveCode: async (code)=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/device-linking/resolve-code', {
                code
            });
            return response.data;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/installReferrer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkAndClaimInstallReferrer",
    ()=>checkAndClaimInstallReferrer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
'use client';
;
;
;
const CLAIMED_KEY = 'pingdart_referrer_claimed';
async function checkAndClaimInstallReferrer() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Already authenticated or already claimed
    const { accessToken } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
    if (accessToken) return false;
    try {
        var _navigator_clipboard;
        const alreadyClaimed = localStorage.getItem(CLAIMED_KEY);
        if (alreadyClaimed) return false;
        let pendingToken = null;
        // 1. Check localStorage for web redirect fallback
        pendingToken = localStorage.getItem('pingdart_pending_link_token');
        // 2. On iOS: Check clipboard for LK_ token copied by the /link page
        if (!pendingToken && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === 'ios' && ((_navigator_clipboard = navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.readText)) {
            try {
                const clipText = await navigator.clipboard.readText();
                if (clipText && clipText.trim().startsWith('LK_') && clipText.trim().length >= 35) {
                    pendingToken = clipText.trim();
                }
            } catch (_) {
            // Clipboard read permission might be denied
            }
        }
        // 3. Check URL parameters if launched via deferred URL
        if (!pendingToken && window.location.search) {
            const sp = new URLSearchParams(window.location.search);
            const urlToken = sp.get('t') || sp.get('token') || sp.get('referrer');
            if (urlToken && urlToken.startsWith('LK_')) {
                pendingToken = urlToken;
            }
        }
        if (!pendingToken || !pendingToken.startsWith('LK_')) {
            return false;
        }
        console.log('[InstallReferrer] 🚀 Claiming deferred token:', pendingToken.substring(0, 10) + '...');
        const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() || 'android';
        const deviceId = localStorage.getItem('pingdart_device_id') || `mobile_${Math.random().toString(36).substring(2, 10)}`;
        const deviceName = platform === 'ios' ? 'Apple iPhone' : 'Android Mobile';
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.claimToken(pendingToken, deviceId, platform, '13.0.1', deviceName);
        if (res && res.success && res.accessToken) {
            var _res_user, _res_user1;
            localStorage.setItem('access_token', res.accessToken);
            localStorage.setItem('refresh_token', res.refreshToken || '');
            localStorage.setItem('pingdart_device_id', deviceId);
            localStorage.setItem('hasSeenIntro', 'true');
            localStorage.setItem(CLAIMED_KEY, 'true');
            localStorage.removeItem('pingdart_pending_link_token');
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setAuth(res.user, res.accessToken, res.refreshToken || '');
            // Initialize E2EE for mobile primary device
            try {
                const { ensureE2EEReady } = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)");
                await ensureE2EEReady();
            } catch (e2eeErr) {
                console.warn('[InstallReferrer] ensureE2EEReady warn:', e2eeErr);
            }
            console.log('[InstallReferrer] ✅ Deferred login successful for user:', ((_res_user = res.user) === null || _res_user === void 0 ? void 0 : _res_user.email) || ((_res_user1 = res.user) === null || _res_user1 === void 0 ? void 0 : _res_user1.id));
            return true;
        }
    } catch (err) {
        console.warn('[InstallReferrer] Claim failed or expired:', err.message);
    }
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CapacitorDeepLinkHandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapacitorDeepLinkHandler",
    ()=>CapacitorDeepLinkHandler,
    "parseDeepLinkUrl",
    ()=>parseDeepLinkUrl,
    "routeDeepLink",
    ()=>routeDeepLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$installReferrer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/installReferrer.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function parseDeepLinkUrl(rawUrl) {
    try {
        if (!rawUrl || typeof rawUrl !== "string") return null;
        let urlObj;
        if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
            urlObj = new URL(rawUrl);
        } else {
            // Handle custom schemes like pingdart://chat/123 or minikart.in://invite/abc
            // Replace custom scheme with standard dummy https origin so URL can parse it
            const normalized = rawUrl.replace(/^[a-zA-Z0-9_.-]+:\/\/?/, "https://pingdart.com/");
            urlObj = new URL(normalized);
        }
        return {
            hostname: urlObj.hostname.toLowerCase(),
            pathname: urlObj.pathname.replace(/\/+$/, "") || "/",
            search: urlObj.search,
            searchParams: urlObj.searchParams
        };
    } catch (err) {
        console.error("[DeepLink] Error parsing URL:", rawUrl, err);
        return null;
    }
}
function routeDeepLink(parsed, router, platform) {
    const { hostname, pathname, search, searchParams } = parsed;
    console.log(`[DeepLink] [${platform}] Routing [${hostname}] path:`, pathname, search);
    // Special handling for chat.pingdart.com subdomain
    if (hostname === "chat.pingdart.com") {
        // If just opening https://chat.pingdart.com/ or https://chat.pingdart.com
        if (pathname === "/" || pathname === "") {
            router.push("/user?tab=Chats");
            return true;
        }
        // If opening https://chat.pingdart.com/123 (direct chat ID)
        const directIdMatch = pathname.match(/^\/([a-zA-Z0-9_-]+)$/);
        if (directIdMatch && ![
            "chat",
            "group",
            "profile",
            "invite",
            "join",
            "r",
            "user",
            "link"
        ].includes(directIdMatch[1])) {
            router.push(`/user?tab=Chats&msgId=${encodeURIComponent(directIdMatch[1])}`);
            return true;
        }
    }
    // 0. Cross-Device One-Time Link Token: /link?t=LK_... or pingdart://link?t=LK_...
    if (pathname === "/link" || pathname.startsWith("/link/")) {
        const token = searchParams.get("t") || searchParams.get("token");
        if (token && token.startsWith("LK_")) {
            handleClaimLinkToken(token, router, platform);
            return true;
        }
    }
    // 1. Chat deep link: /chat/:id -> open chat conversation
    // e.g. https://pingdart.com/chat/123 or https://chat.pingdart.com/chat/123
    if (pathname.startsWith("/chat/")) {
        var _pathname_split_;
        const chatId = (_pathname_split_ = pathname.split("/chat/")[1]) === null || _pathname_split_ === void 0 ? void 0 : _pathname_split_.split("/")[0];
        if (chatId) {
            router.push(`/user?tab=Chats&msgId=${encodeURIComponent(chatId)}`);
            return true;
        }
    }
    // 2. Group deep link: /group/:id -> open group conversation
    // e.g. https://pingdart.com/group/456
    if (pathname.startsWith("/group/")) {
        var _pathname_split_1;
        const groupId = (_pathname_split_1 = pathname.split("/group/")[1]) === null || _pathname_split_1 === void 0 ? void 0 : _pathname_split_1.split("/")[0];
        if (groupId) {
            router.push(`/user?tab=Chats&msgId=${encodeURIComponent(groupId)}`);
            return true;
        }
    }
    // 3. Profile deep link: /profile/:id -> open user profile / settings
    // e.g. https://pingdart.com/profile/789
    if (pathname.startsWith("/profile/")) {
        var _pathname_split_2;
        const profileId = (_pathname_split_2 = pathname.split("/profile/")[1]) === null || _pathname_split_2 === void 0 ? void 0 : _pathname_split_2.split("/")[0];
        if (profileId) {
            router.push(`/user?tab=Settings&userId=${encodeURIComponent(profileId)}`);
            return true;
        }
    }
    // Referral deep link: /refer/:code -> store referral code and open register
    // e.g. https://pingdart.com/refer/ABC123 or pingdart://refer/ABC123
    if (pathname.startsWith("/refer/")) {
        var _pathname_split_3;
        const refCode = (_pathname_split_3 = pathname.split("/refer/")[1]) === null || _pathname_split_3 === void 0 ? void 0 : _pathname_split_3.split("/")[0];
        if (refCode) {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("pending_referral_code", refCode.toUpperCase());
                sessionStorage.setItem("pending_referral_code", refCode.toUpperCase());
            }
            router.push(`/register?ref=${encodeURIComponent(refCode.toUpperCase())}`);
            return true;
        }
    }
    // 4. Invite deep link: /invite/:code -> open join or invite landing
    // e.g. https://pingdart.com/invite/ABC123
    if (pathname.startsWith("/invite/")) {
        var _pathname_split_4;
        const inviteCode = (_pathname_split_4 = pathname.split("/invite/")[1]) === null || _pathname_split_4 === void 0 ? void 0 : _pathname_split_4.split("/")[0];
        if (inviteCode) {
            router.push(`/join/${encodeURIComponent(inviteCode)}`);
            return true;
        }
    }
    // 5. Join group route: /join/:roomId
    if (pathname.startsWith("/join/")) {
        var _pathname_split_5;
        const roomId = (_pathname_split_5 = pathname.split("/join/")[1]) === null || _pathname_split_5 === void 0 ? void 0 : _pathname_split_5.split("/")[0];
        if (roomId) {
            router.push(`/join/${encodeURIComponent(roomId)}`);
            return true;
        }
    }
    // 6. Live / Meeting room: /r/:code
    if (pathname.startsWith("/r/")) {
        var _pathname_split_6;
        const roomCode = (_pathname_split_6 = pathname.split("/r/")[1]) === null || _pathname_split_6 === void 0 ? void 0 : _pathname_split_6.split("/")[0];
        if (roomCode) {
            router.push(`/r/${encodeURIComponent(roomCode)}`);
            return true;
        }
    }
    // 7. General fallback: if the link targets an internal route like /user, /login, /settings, etc.
    if (pathname.startsWith("/") && pathname !== "/") {
        const fullRelativeUrl = `${pathname}${search}`;
        router.push(fullRelativeUrl);
        return true;
    }
    return false;
}
function CapacitorDeepLinkHandler() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const routerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(router);
    const lastProcessedUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        url: "",
        timestamp: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CapacitorDeepLinkHandler.useEffect": ()=>{
            routerRef.current = router;
        }
    }["CapacitorDeepLinkHandler.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CapacitorDeepLinkHandler.useEffect": ()=>{
            // Only execute on native platforms (Android / iOS)
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                return;
            }
            const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform(); // 'android' | 'ios'
            const isSupportedPlatform = platform === "android" || platform === "ios";
            if (!isSupportedPlatform) {
                return;
            }
            console.log(`[DeepLink] Initializing listener on native ${platform}`);
            const processUrl = {
                "CapacitorDeepLinkHandler.useEffect.processUrl": (url)=>{
                    if (!url) return;
                    // Prevent duplicate event triggers within 1.5 seconds for the same URL
                    const now = Date.now();
                    if (lastProcessedUrlRef.current.url === url && now - lastProcessedUrlRef.current.timestamp < 1500) {
                        return;
                    }
                    lastProcessedUrlRef.current = {
                        url,
                        timestamp: now
                    };
                    const parsed = parseDeepLinkUrl(url);
                    if (parsed) {
                        routeDeepLink(parsed, routerRef.current, platform);
                    }
                }
            }["CapacitorDeepLinkHandler.useEffect.processUrl"];
            // 0. Check for deferred install referrer token on cold start
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$installReferrer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAndClaimInstallReferrer"])().then({
                "CapacitorDeepLinkHandler.useEffect": (claimed)=>{
                    if (claimed) {
                        routerRef.current.push("/user?tab=Chats");
                    }
                }
            }["CapacitorDeepLinkHandler.useEffect"]);
            // 1. Handle cold launch (app launched from closed state via deep link)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].getLaunchUrl().then({
                "CapacitorDeepLinkHandler.useEffect": (launchUrl)=>{
                    if (launchUrl === null || launchUrl === void 0 ? void 0 : launchUrl.url) {
                        console.log(`[DeepLink] App opened with launchUrl:`, launchUrl.url);
                        processUrl(launchUrl.url);
                    }
                }
            }["CapacitorDeepLinkHandler.useEffect"]).catch({
                "CapacitorDeepLinkHandler.useEffect": (err)=>{
                    console.warn("[DeepLink] Could not read launch URL:", err);
                }
            }["CapacitorDeepLinkHandler.useEffect"]);
            // 2. Handle warm / active launch (app in memory or background resumed via deep link)
            const listenerPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].addListener("appUrlOpen", {
                "CapacitorDeepLinkHandler.useEffect.listenerPromise": (event)=>{
                    console.log(`[DeepLink] appUrlOpen event:`, event.url);
                    processUrl(event.url);
                }
            }["CapacitorDeepLinkHandler.useEffect.listenerPromise"]);
            return ({
                "CapacitorDeepLinkHandler.useEffect": ()=>{
                    listenerPromise.then({
                        "CapacitorDeepLinkHandler.useEffect": (handle)=>handle.remove()
                    }["CapacitorDeepLinkHandler.useEffect"]).catch({
                        "CapacitorDeepLinkHandler.useEffect": ()=>{}
                    }["CapacitorDeepLinkHandler.useEffect"]);
                }
            })["CapacitorDeepLinkHandler.useEffect"];
        }
    }["CapacitorDeepLinkHandler.useEffect"], []);
    return null;
}
_s(CapacitorDeepLinkHandler, "P3Ax9ICGBBSzyKglSWQyv1ekW0w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CapacitorDeepLinkHandler;
/**
 * Exchanges the one-time linking token (LK_...) for authentication credentials
 * and auto-logs the mobile device into the account.
 */ async function handleClaimLinkToken(token, router, platform) {
    try {
        const rawDeviceId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("pingdart_device_id") : "TURBOPACK unreachable";
        const deviceId = rawDeviceId || `mobile_${Math.random().toString(36).substring(2, 10)}`;
        const deviceName = platform === "ios" ? "Apple iPhone" : "Android Device";
        console.log(`[DeepLink] 🔑 Claiming linking token on ${platform}...`);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].deviceLinking.claimToken(token, deviceId, platform, "13.0.1", deviceName);
        if (res && res.success && res.accessToken) {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("access_token", res.accessToken);
                localStorage.setItem("refresh_token", res.refreshToken || "");
                localStorage.setItem("pingdart_device_id", deviceId);
                localStorage.setItem("hasSeenIntro", "true");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setAuth(res.user, res.accessToken, res.refreshToken || "");
            // Initialize E2EE for mobile primary device
            try {
                const { ensureE2EEReady } = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)");
                await ensureE2EEReady();
            } catch (e2eeErr) {
                console.warn("[DeepLink] ensureE2EEReady warn:", e2eeErr);
            }
            console.log(`[DeepLink] ✅ Device linked successfully! Navigating to chats.`);
            router.push("/user?tab=Chats");
            return true;
        }
    } catch (err) {
        var _err_response;
        console.error("[DeepLink] Failed to claim link token:", (err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || err.message);
    }
    return false;
}
var _c;
__turbopack_context__.k.register(_c, "CapacitorDeepLinkHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/useNavigationStackStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavigationStackStore",
    ()=>useNavigationStackStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
const useNavigationStackStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        stack: [],
        isBackNavigating: false,
        setIsBackNavigating: (val)=>set({
                isBackNavigating: val
            }),
        pushEntry: (entry)=>{
            const { stack, isBackNavigating } = get();
            if (isBackNavigating) {
                return;
            }
            const currentTop = stack[stack.length - 1];
            // Avoid pushing identical consecutive states
            if (currentTop && currentTop.pathname === entry.pathname && (currentTop.tab || "") === (entry.tab || "") && (currentTop.section || "") === (entry.section || "") && (currentTop.subtab || "") === (entry.subtab || "") && String(currentTop.msgId || "") === String(entry.msgId || "")) {
                return;
            }
            // If navigating directly to Root Chats with no extras, avoid unnecessary duplicate roots
            const isRoot = (entry.pathname === "/user" || entry.pathname === "/") && (!entry.tab || entry.tab === "Chats" || entry.tab === "Home") && !entry.section && !entry.subtab && !entry.msgId;
            if (isRoot && stack.length === 0) {
                return;
            }
            const newEntry = {
                ...entry,
                timestamp: Date.now()
            };
            // Keep stack bounded to prevent memory bloat
            const updated = [
                ...stack,
                newEntry
            ];
            if (updated.length > 50) {
                updated.shift();
            }
            set({
                stack: updated
            });
        },
        popEntry: ()=>{
            const { stack } = get();
            if (stack.length === 0) return null;
            const newStack = [
                ...stack
            ];
            const popped = newStack.pop() || null;
            set({
                stack: newStack
            });
            return popped;
        },
        peekEntry: ()=>{
            const { stack } = get();
            if (stack.length === 0) return null;
            return stack[stack.length - 1];
        },
        clearStack: ()=>set({
                stack: []
            }),
        resetToRoot: ()=>set({
                stack: []
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NativeBackButtonHandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeBackButtonHandler",
    ()=>NativeBackButtonHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useNavigationStackStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NativeBackButtonHandler() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const lastBackPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Track navigation state in history stack on every route or search param change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeBackButtonHandler.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const recordNavState = {
                "NativeBackButtonHandler.useEffect.recordNavState": ()=>{
                    const pathname = window.location.pathname;
                    const sp = new URLSearchParams(window.location.search);
                    const tab = sp.get("tab") || "Chats";
                    const section = sp.get("section");
                    const subtab = sp.get("subtab") || sp.get("subtabes");
                    const msgId = sp.get("msgId");
                    const fullUrl = `${pathname}${window.location.search}`;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().pushEntry({
                        url: fullUrl,
                        pathname,
                        tab,
                        section,
                        subtab,
                        msgId
                    });
                }
            }["NativeBackButtonHandler.useEffect.recordNavState"];
            recordNavState();
            window.addEventListener("popstate", recordNavState);
            window.addEventListener("app:navigate_tab", recordNavState);
            return ({
                "NativeBackButtonHandler.useEffect": ()=>{
                    window.removeEventListener("popstate", recordNavState);
                    window.removeEventListener("app:navigate_tab", recordNavState);
                }
            })["NativeBackButtonHandler.useEffect"];
        }
    }["NativeBackButtonHandler.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NativeBackButtonHandler.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return;
            const navigateTo = {
                "NativeBackButtonHandler.useEffect.navigateTo": (url)=>{
                    try {
                        router.replace(url);
                    } catch (e) {
                        if ("TURBOPACK compile-time truthy", 1) {
                            window.location.href = url;
                        }
                    }
                }
            }["NativeBackButtonHandler.useEffect.navigateTo"];
            // Register the listener ONCE — reads live values directly
            const listenerPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].addListener("backButton", {
                "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                    const currentPathname = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
                    const sp = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
                    // ── LAYER 0: MESSAGE SELECTION MODE IN CHAT ───────────────────────────
                    if (typeof document !== "undefined") {
                        const selectionCancelBtn = document.querySelector('[data-selection-cancel], [title="Cancel selection"]');
                        if (selectionCancelBtn && selectionCancelBtn.offsetParent !== null) {
                            selectionCancelBtn.click();
                            if ("TURBOPACK compile-time truthy", 1) {
                                window.dispatchEvent(new CustomEvent('app:cancel_selection'));
                            }
                            return;
                        }
                    }
                    // ── LAYER 1: MODALS, POPUPS, DIALOGS, SHEETS ──────────────────────────
                    if (typeof document !== "undefined") {
                        // Only target visible close buttons within open dialogs / sheets
                        const openModalCloseBtn = document.querySelector('[role="dialog"] button[aria-label="Close"], [role="dialog"] button:has(svg.lucide-x), .modal-close-btn, [data-modal-close], [role="dialog"] button[aria-label="Cancel"]');
                        if (openModalCloseBtn && openModalCloseBtn.offsetParent !== null) {
                            openModalCloseBtn.click();
                            return;
                        }
                        // Radix UI open dialogs
                        const openRadixDialog = document.querySelector('[role="dialog"][data-state="open"]');
                        if (openRadixDialog) {
                            const closeBtn = openRadixDialog.querySelector('button[aria-label="Close"], button:has(svg.lucide-x), button');
                            if (closeBtn && closeBtn.offsetParent !== null) {
                                closeBtn.click();
                                return;
                            }
                        }
                    }
                    // ── LAYER 2: ACTIVE SCREEN IN-PAGE BACK DISPATCH ───────────────────────
                    // Screens with inner navigation states (e.g. open email, compose, story viewer,
                    // channel drawer, search, settings subtab, etc.) intercept app:back_press and
                    // call e.preventDefault() if they consumed the back press.
                    if ("TURBOPACK compile-time truthy", 1) {
                        let isHandled = false;
                        const backEvent = new CustomEvent('app:back_press', {
                            cancelable: true,
                            detail: {
                                markHandled: {
                                    "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                        isHandled = true;
                                    }
                                }["NativeBackButtonHandler.useEffect.listenerPromise"]
                            }
                        });
                        window.dispatchEvent(backEvent);
                        if (backEvent.defaultPrevented || isHandled) {
                            return;
                        }
                    }
                    const currentTab = sp.get("tab") || "Chats";
                    const section = sp.get("section");
                    const subtab = sp.get("subtab") || sp.get("subtabes");
                    const openId = sp.get("openid") || sp.get("mailId");
                    const msgId = sp.get("msgId") || sp.get("chatId") || sp.get("userId") || sp.get("compose");
                    // ── LAYER 3A: FALLBACK OPEN EMAIL READER (openid / mailId) ─────────────
                    if (openId && currentTab === "Mail") {
                        if ("TURBOPACK compile-time truthy", 1) {
                            const newParams = new URLSearchParams(sp.toString());
                            newParams.delete("openid");
                            newParams.delete("mailId");
                            window.history.replaceState(null, "", `${currentPathname}?${newParams.toString()}`);
                            window.dispatchEvent(new CustomEvent('mail:close_reader'));
                        }
                        return;
                    }
                    // ── LAYER 3B: FALLBACK ACTIVE CHAT / CONVERSATION DETAIL ───────────────
                    if (msgId) {
                        const newParams = new URLSearchParams(sp.toString());
                        newParams.delete("msgId");
                        newParams.delete("chatId");
                        newParams.delete("userId");
                        newParams.delete("compose");
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().setIsBackNavigating(true);
                        navigateTo(`${currentPathname}?${newParams.toString()}`);
                        setTimeout({
                            "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().setIsBackNavigating(false);
                            }
                        }["NativeBackButtonHandler.useEffect.listenerPromise"], 150);
                        return;
                    }
                    // ── LAYER 3C: SETTINGS SUB-PAGES & SECTIONS ────────────────────────────
                    if (subtab) {
                        if (currentTab === "Mail") {
                            if ("TURBOPACK compile-time truthy", 1) {
                                window.history.replaceState(null, "", `${currentPathname}?tab=Mail&folder=Inbox`);
                                window.dispatchEvent(new CustomEvent('mail:select_folder', {
                                    detail: {
                                        folder: 'Inbox'
                                    }
                                }));
                            }
                            return;
                        }
                        const newParams = new URLSearchParams(sp.toString());
                        newParams.delete("subtab");
                        newParams.delete("subtabes");
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().setIsBackNavigating(true);
                        navigateTo(`${currentPathname}?${newParams.toString()}`);
                        setTimeout({
                            "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().setIsBackNavigating(false);
                            }
                        }["NativeBackButtonHandler.useEffect.listenerPromise"], 150);
                        return;
                    }
                    if (section) {
                        const newParams = new URLSearchParams(sp.toString());
                        newParams.delete("section");
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().setIsBackNavigating(true);
                        navigateTo(`${currentPathname}?${newParams.toString()}`);
                        setTimeout({
                            "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState().setIsBackNavigating(false);
                            }
                        }["NativeBackButtonHandler.useEffect.listenerPromise"], 150);
                        return;
                    }
                    // ── LAYER 4: NAVIGATION HISTORY STACK (LIFO Reverse) ───────────────────
                    const stackStore = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useNavigationStackStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationStackStore"].getState();
                    const previousEntry = stackStore.popEntry();
                    if (previousEntry && previousEntry.url !== `${currentPathname}?${sp.toString()}`) {
                        stackStore.setIsBackNavigating(true);
                        navigateTo(previousEntry.url);
                        setTimeout({
                            "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                stackStore.setIsBackNavigating(false);
                            }
                        }["NativeBackButtonHandler.useEffect.listenerPromise"], 150);
                        return;
                    }
                    // If on external sub-routes outside /user or /
                    if (currentPathname !== "/user" && currentPathname !== "/") {
                        stackStore.setIsBackNavigating(true);
                        navigateTo("/user?tab=Chats");
                        setTimeout({
                            "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                stackStore.setIsBackNavigating(false);
                            }
                        }["NativeBackButtonHandler.useEffect.listenerPromise"], 150);
                        return;
                    }
                    // If on a secondary tab without history (e.g. Status, Profile, Settings)
                    if (currentTab !== "Chats" && currentTab !== "Home") {
                        stackStore.setIsBackNavigating(true);
                        navigateTo("/user?tab=Chats");
                        setTimeout({
                            "NativeBackButtonHandler.useEffect.listenerPromise": ()=>{
                                stackStore.setIsBackNavigating(false);
                            }
                        }["NativeBackButtonHandler.useEffect.listenerPromise"], 150);
                        return;
                    }
                    // ── LAYER 5: ROOT HOME/CHATS SCREEN EXIT ───────────────────────────────
                    const now = Date.now();
                    if (now - lastBackPressRef.current < 2000) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].exitApp();
                    } else {
                        lastBackPressRef.current = now;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Press back again to exit", {
                            duration: 2000,
                            id: "back-press-toast"
                        });
                    }
                }
            }["NativeBackButtonHandler.useEffect.listenerPromise"]);
            return ({
                "NativeBackButtonHandler.useEffect": ()=>{
                    listenerPromise.then({
                        "NativeBackButtonHandler.useEffect": (handle)=>handle.remove()
                    }["NativeBackButtonHandler.useEffect"]).catch({
                        "NativeBackButtonHandler.useEffect": ()=>{}
                    }["NativeBackButtonHandler.useEffect"]);
                }
            })["NativeBackButtonHandler.useEffect"];
        }
    }["NativeBackButtonHandler.useEffect"], []);
    return null;
}
_s(NativeBackButtonHandler, "ZRBfi3QkG1ofTlZxnakzdSCah0A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NativeBackButtonHandler;
var _c;
__turbopack_context__.k.register(_c, "NativeBackButtonHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_24b831d6._.js.map