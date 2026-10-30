(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useSiteSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_BOTTOM_LINKS",
    ()=>DEFAULT_BOTTOM_LINKS,
    "DEFAULT_FOOTER_SECTIONS",
    ()=>DEFAULT_FOOTER_SECTIONS,
    "useSiteSettings",
    ()=>useSiteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_FOOTER_SECTIONS = [
    {
        id: "product",
        title: "Product",
        links: [
            {
                id: "p0",
                href: "/download",
                label: "Download Desktop Apps",
                isExternal: false
            },
            {
                id: "p1",
                href: "/database",
                label: "PingDart Cluster DB",
                isExternal: false
            },
            {
                id: "p2",
                href: "https://cloud.pingdart.com",
                label: "PingDart Cloud Workspace",
                isExternal: true
            },
            {
                id: "p3",
                href: "/pricing",
                label: "Plans & Pricing",
                isExternal: false
            },
            {
                id: "p4",
                href: "/solutions",
                label: "AI Solutions",
                isExternal: false
            },
            {
                id: "p5",
                href: "/shop",
                label: "AI Hardware",
                isExternal: false
            },
            {
                id: "p6",
                href: "/connect-apps",
                label: "Connect Email Apps",
                isExternal: false
            },
            {
                id: "p7",
                href: "/outlook-setup",
                label: "Outlook Setup Guide",
                isExternal: false
            }
        ]
    },
    {
        id: "email",
        title: "Email & Apps",
        links: [
            {
                id: "em1",
                href: "/connect-apps",
                label: "Connect Any Email App",
                isExternal: false
            },
            {
                id: "em2",
                href: "/outlook-setup",
                label: "Outlook Setup Guide",
                isExternal: false
            },
            {
                id: "em3",
                href: "/login?redirect=/user?tab=Mail",
                label: "PingDart Webmail",
                isExternal: false
            },
            {
                id: "em4",
                href: "/download",
                label: "Desktop Email Client",
                isExternal: false
            }
        ]
    },
    {
        id: "company",
        title: "Company",
        links: [
            {
                id: "c1",
                href: "/about",
                label: "About PingDart",
                isExternal: false
            },
            {
                id: "c2",
                href: "/services",
                label: "Services",
                isExternal: false
            },
            {
                id: "c3",
                href: "/privacy",
                label: "Privacy Policy",
                isExternal: false
            },
            {
                id: "c4",
                href: "/account_delete",
                label: "Delete Account",
                isExternal: false
            },
            {
                id: "c5",
                href: "/contact",
                label: "Contact Us",
                isExternal: false
            }
        ]
    },
    {
        id: "cloudservices",
        title: "CloudServices",
        links: [
            {
                id: "cs1",
                href: "https://cloud.pingdart.com",
                label: "cloud.pingdart.com",
                isExternal: true
            },
            {
                id: "cs2",
                href: "/services",
                label: "Enterprise AI Consulting",
                isExternal: false
            },
            {
                id: "cs3",
                href: "/register",
                label: "Get Started Free",
                isExternal: false
            },
            {
                id: "cs4",
                href: "/login",
                label: "Sign In to Cloud",
                isExternal: false
            }
        ]
    }
];
const DEFAULT_BOTTOM_LINKS = [
    {
        id: "b0",
        href: "/download",
        label: "Download App",
        isExternal: false
    },
    {
        id: "b1",
        href: "/terms",
        label: "Terms",
        isExternal: false
    },
    {
        id: "b2",
        href: "/privacy",
        label: "Privacy",
        isExternal: false
    },
    {
        id: "b3",
        href: "/account_delete",
        label: "Delete Account",
        isExternal: false
    },
    {
        id: "b4",
        href: "/connect-apps",
        label: "Connect Apps",
        isExternal: false
    },
    {
        id: "b5",
        href: "/outlook-setup",
        label: "Outlook Setup",
        isExternal: false
    },
    {
        id: "b6",
        href: "/shop",
        label: "Shop",
        isExternal: false
    }
];
const DEFAULT_SITE_SETTINGS = {
    appName: "PingDart",
    appLogoText: "PingDart",
    appLogoImage: "/logo.png",
    appLogoDark: "/logo_light.png",
    appLogoDarkImage: "/logo_light.png",
    appTagline: "PingDart is a next-generation chat, mail, custom AI & enterprise cloud platform.",
    appEmail: "support@pingdart.com",
    appPhone: "+91 9491565633",
    appAddress: "Kalyanpuri Colony Rd, near community hall, NGRI, Uppal, Hyderabad, Telangana 500039",
    twitterUrl: "https://x.com/DartPing26370",
    instagramUrl: "https://www.instagram.com/ping.dart",
    linkedinUrl: "https://www.linkedin.com/in/ping-dart",
    youtubeUrl: "https://www.youtube.com/@PingDart",
    githubUrl: "",
    discordUrl: "",
    facebookUrl: "",
    footerSections: DEFAULT_FOOTER_SECTIONS,
    footerBottomLinks: DEFAULT_BOTTOM_LINKS,
    footerCopyright: "© 2026 PingDart. All rights reserved."
};
function sanitizeLogoUrl(url, fallback = "/logo.png") {
    if (!url || typeof url !== "string") return fallback;
    const trimmed = url.trim();
    if (!trimmed || trimmed.includes("storage.pingdart.com/public/logos/")) return fallback;
    return trimmed;
}
function useSiteSettings() {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSiteSettings.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const cached = localStorage.getItem("pingdart_site_settings");
                    if (cached) {
                        if (cached.includes("data:image") || cached.length > 20000) {
                            localStorage.removeItem("pingdart_site_settings");
                        } else {
                            const parsed = JSON.parse(cached);
                            if (parsed && typeof parsed === "object") {
                                return {
                                    ...DEFAULT_SITE_SETTINGS,
                                    ...parsed,
                                    appLogoImage: sanitizeLogoUrl(parsed.appLogoImage, "/logo.png"),
                                    appLogoDark: sanitizeLogoUrl(parsed.appLogoDark, "/logo_light.png"),
                                    appLogoDarkImage: sanitizeLogoUrl(parsed.appLogoDarkImage || parsed.appLogoDark, "/logo.png")
                                };
                            }
                        }
                    }
                } catch (_) {}
            }
            return DEFAULT_SITE_SETTINGS;
        }
    }["useSiteSettings.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSiteSettings.useEffect": ()=>{
            async function fetchSettings() {
                try {
                    const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
                    const res = await fetch(`${apiUrl}/site-settings`);
                    if (res.ok) {
                        const data = await res.json();
                        if (data.success && data.settings) {
                            const raw = data.settings;
                            const updated = {
                                ...raw,
                                appLogoImage: sanitizeLogoUrl(raw.appLogoImage, "/logo.png"),
                                appLogoDark: sanitizeLogoUrl(raw.appLogoDark, "/logo_light.png"),
                                appLogoDarkImage: sanitizeLogoUrl(raw.appLogoDarkImage || raw.appLogoDark, "/logo.png")
                            };
                            setSettings({
                                "useSiteSettings.useEffect.fetchSettings": (prev)=>({
                                        ...prev,
                                        ...updated
                                    })
                            }["useSiteSettings.useEffect.fetchSettings"]);
                            try {
                                var _forStorage_appLogoImage, _forStorage_appLogoImage1, _forStorage_appLogoDark, _forStorage_appLogoDark1, _forStorage_appLogoDarkImage, _forStorage_appLogoDarkImage1;
                                const forStorage = {
                                    ...updated
                                };
                                if (((_forStorage_appLogoImage = forStorage.appLogoImage) === null || _forStorage_appLogoImage === void 0 ? void 0 : _forStorage_appLogoImage.startsWith('data:')) || (((_forStorage_appLogoImage1 = forStorage.appLogoImage) === null || _forStorage_appLogoImage1 === void 0 ? void 0 : _forStorage_appLogoImage1.length) || 0) > 500) {
                                    delete forStorage.appLogoImage;
                                }
                                if (((_forStorage_appLogoDark = forStorage.appLogoDark) === null || _forStorage_appLogoDark === void 0 ? void 0 : _forStorage_appLogoDark.startsWith('data:')) || (((_forStorage_appLogoDark1 = forStorage.appLogoDark) === null || _forStorage_appLogoDark1 === void 0 ? void 0 : _forStorage_appLogoDark1.length) || 0) > 500) {
                                    delete forStorage.appLogoDark;
                                }
                                if (((_forStorage_appLogoDarkImage = forStorage.appLogoDarkImage) === null || _forStorage_appLogoDarkImage === void 0 ? void 0 : _forStorage_appLogoDarkImage.startsWith('data:')) || (((_forStorage_appLogoDarkImage1 = forStorage.appLogoDarkImage) === null || _forStorage_appLogoDarkImage1 === void 0 ? void 0 : _forStorage_appLogoDarkImage1.length) || 0) > 500) {
                                    delete forStorage.appLogoDarkImage;
                                }
                                localStorage.setItem("pingdart_site_settings", JSON.stringify(forStorage));
                            } catch (_) {}
                        }
                    }
                } catch (err) {
                    console.error("Error fetching site settings:", err);
                } finally{
                    setLoading(false);
                }
            }
            fetchSettings();
        }
    }["useSiteSettings.useEffect"], []);
    const updateSettings = async (newSettings)=>{
        try {
            const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const token = localStorage.getItem("token") || "";
            const res = await fetch(`${apiUrl}/site-settings/admin`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : ""
                },
                body: JSON.stringify(newSettings)
            });
            if (res.ok) {
                const data = await res.json();
                if (data.success && data.settings) {
                    setSettings(data.settings);
                    return true;
                }
            }
        } catch (err) {
            console.error("Error updating site settings:", err);
        }
        return false;
    };
    return {
        settings,
        loading,
        updateSettings
    };
}
_s(useSiteSettings, "cu8K/UCOsrwWDFSjSKAes8+XQ1E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/landing/LandingNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingNav",
    ()=>LandingNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSiteSettings.ts [app-client] (ecmascript)");
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
;
;
;
function LandingNav() {
    _s();
    // LandingNav is a web-only marketing component — never render inside native app
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return null;
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"])();
    const { user, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isNative, platform } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingNav.useEffect": ()=>{
            const onScroll = {
                "LandingNav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 20)
            }["LandingNav.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "LandingNav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["LandingNav.useEffect"];
        }
    }["LandingNav.useEffect"], []);
    const navLinks = [
        {
            label: "Solutions",
            href: "/#services"
        },
        {
            label: "Download",
            href: "/download"
        },
        {
            label: "Database",
            href: "/database"
        },
        {
            label: "Email",
            href: "/user?tab=Mail"
        },
        {
            label: "Connect Apps",
            href: "/connect-apps"
        },
        {
            label: "Models",
            href: "/models"
        },
        {
            label: "Pricing",
            href: "/pricing"
        },
        {
            label: "About",
            href: "/about"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isNative ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: `fixed top-0 inset-x-0 z-[100] w-full border-b transition-all duration-300 ${scrolled ? "border-slate-200/80 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#050814]/80 dark:shadow-black/20" : "border-transparent bg-white/40 backdrop-blur-md dark:bg-[#050814]/40"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto h-16 flex items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-1 shrink-0 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-9 h-9 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full rounded-[10px] flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: settings.appLogoImage || "/logo.png",
                                                alt: `${settings.appLogoText || "PingDart"} Logo`,
                                                width: 20,
                                                height: 20,
                                                style: {
                                                    width: "auto",
                                                    height: "auto"
                                                },
                                                className: `object-contain ${settings.appLogoDark ? "dark:hidden" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            settings.appLogoDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: settings.appLogoDark,
                                                alt: `${settings.appLogoText || "PingDart"} Logo`,
                                                width: 20,
                                                height: 20,
                                                style: {
                                                    width: "auto",
                                                    height: "auto"
                                                },
                                                className: "object-contain hidden dark:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/LandingNav.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-900 dark:text-white font-black text-xl tracking-tight",
                                        children: settings.appLogoText || "PingDart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/LandingNav.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/LandingNav.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-7",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/src/components/landing/LandingNav.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingNav.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-3",
                            children: user && accessToken ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/user?tab=Chats",
                                className: "group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4.5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-px dark:bg-white dark:text-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Open Workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: "px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/register",
                                        className: "group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4.5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-px dark:bg-white dark:text-slate-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Start Free"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingNav.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMenuOpen(!menuOpen),
                            "aria-label": "Toggle navigation menu",
                            className: "md:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-800 dark:text-white cursor-pointer",
                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                lineNumber: 131,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                lineNumber: 131,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingNav.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/LandingNav.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        className: "md:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#040816] px-6 py-6 space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setMenuOpen(false),
                                        className: "px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors",
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                                        lineNumber: 147,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                lineNumber: 145,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5",
                                children: user && accessToken ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/user",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "w-full text-center py-3 rounded-xl font-bold text-white text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
                                    children: "Open Workspace →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/landing/LandingNav.tsx",
                                    lineNumber: 160,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            onClick: ()=>setMenuOpen(false),
                                            className: "w-full text-center py-2.5 rounded-xl font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/LandingNav.tsx",
                                            lineNumber: 169,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/register",
                                            onClick: ()=>setMenuOpen(false),
                                            className: "w-full text-center py-3 rounded-xl font-bold text-white text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors",
                                            children: "Start Free →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/LandingNav.tsx",
                                            lineNumber: 177,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/LandingNav.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/LandingNav.tsx",
                        lineNumber: 138,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/LandingNav.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingNav.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(LandingNav, "J/QE/mZxFH6Vg5CWH7/Uif3G0CA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = LandingNav;
var _c;
__turbopack_context__.k.register(_c, "LandingNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/PublicFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicFooter",
    ()=>PublicFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Call02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Call02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NewTwitterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/NewTwitterIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InstagramIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InstagramIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Linkedin01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Linkedin01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$YoutubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/YoutubeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSiteSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PublicFooter() {
    _s();
    if ("object" !== "undefined" && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() || document.documentElement.classList.contains("is-native") || document.documentElement.getAttribute("data-is-native") === "true")) {
        return null;
    }
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"])();
    const socialLinks = [
        {
            href: settings.twitterUrl || "https://twitter.com",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NewTwitterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewTwitterIcon"],
            label: "Twitter"
        },
        {
            href: settings.instagramUrl || "https://instagram.com",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InstagramIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"],
            label: "Instagram"
        },
        {
            href: settings.linkedinUrl || "https://linkedin.com",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Linkedin01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Linkedin01Icon"],
            label: "LinkedIn"
        },
        {
            href: settings.youtubeUrl || "https://youtube.com",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$YoutubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YoutubeIcon"],
            label: "YouTube"
        }
    ];
    const rawSections = settings.footerSections && settings.footerSections.length > 0 ? settings.footerSections : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FOOTER_SECTIONS"];
    // Ensure "Connect Email Apps" and "Outlook Setup" are always accessible
    const hasEmailSetup = rawSections.some((s)=>{
        var _s_links;
        return (_s_links = s.links) === null || _s_links === void 0 ? void 0 : _s_links.some((l)=>{
            var _l_href, _l_href1;
            return ((_l_href = l.href) === null || _l_href === void 0 ? void 0 : _l_href.includes("connect-apps")) || ((_l_href1 = l.href) === null || _l_href1 === void 0 ? void 0 : _l_href1.includes("outlook-setup"));
        });
    });
    const sections = hasEmailSetup ? rawSections : [
        ...rawSections,
        {
            id: "email-apps",
            title: "Email & Apps",
            links: [
                {
                    id: "ea-1",
                    href: "/connect-apps",
                    label: "Connect Any Email App",
                    isExternal: false
                },
                {
                    id: "ea-2",
                    href: "/outlook-setup",
                    label: "Outlook Setup Guide",
                    isExternal: false
                },
                {
                    id: "ea-3",
                    href: "/login?redirect=/user?tab=Mail",
                    label: "PingDart Webmail",
                    isExternal: false
                }
            ]
        }
    ];
    const rawBottomLinks = settings.footerBottomLinks && settings.footerBottomLinks.length > 0 ? settings.footerBottomLinks : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BOTTOM_LINKS"];
    const hasBottomEmail = rawBottomLinks.some((l)=>{
        var _l_href, _l_href1;
        return ((_l_href = l.href) === null || _l_href === void 0 ? void 0 : _l_href.includes("connect-apps")) || ((_l_href1 = l.href) === null || _l_href1 === void 0 ? void 0 : _l_href1.includes("outlook-setup"));
    });
    const bottomLinks = hasBottomEmail ? rawBottomLinks : [
        ...rawBottomLinks,
        {
            id: "b-connect-apps",
            href: "/connect-apps",
            label: "Connect Apps",
            isExternal: false
        },
        {
            id: "b-outlook-setup",
            href: "/outlook-setup",
            label: "Outlook Setup",
            isExternal: false
        }
    ];
    const copyrightText = settings.footerCopyright ? settings.footerCopyright.replace("{year}", new Date().getFullYear().toString()).replace("{brand}", settings.appLogoText || "PingDart") : `© ${new Date().getFullYear()} ${settings.appLogoText || "PingDart"}. All rights reserved.`;
    // Explicit grid column mapping for Tailwind CSS compiler
    const gridColsClass = sections.length >= 4 ? "lg:grid-cols-6" : sections.length === 3 ? "lg:grid-cols-5" : "lg:grid-cols-4";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "public-footer-root bg-[#070A10] text-gray-300 border-t border-gray-800/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto pt-16 pb-10 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-10`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-flex items-center gap-2.5 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: settings.appLogoDark || settings.appLogoDarkImage || "/logo.png",
                                            alt: `${settings.appLogoText || "PingDart"} Logo`,
                                            width: 36,
                                            height: 36,
                                            className: "h-9 w-auto object-contain group-hover:scale-105 transition-transform",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-black text-xl tracking-tight",
                                            children: settings.appLogoText || "PingDart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 leading-relaxed max-w-xs font-medium",
                                    children: settings.appTagline || "PingDart is an enterprise chat, mail, custom AI & software platform."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: socialLinks.map(({ href, icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            "aria-label": label,
                                            className: "w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-white hover:bg-white hover:text-slate-900 text-gray-400 flex items-center justify-center transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this)
                                        }, label, false, {
                                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 text-xs font-bold text-gray-400 pt-1",
                                    children: [
                                        settings.appEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${settings.appEmail}`,
                                            className: "flex items-center gap-2 hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                                    size: 15,
                                                    className: "shrink-0 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                settings.appEmail
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        settings.appPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${settings.appPhone.replace(/\s/g, "")}`,
                                            className: "flex items-center gap-2 hover:text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Call02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Call02Icon"], {
                                                    size: 15,
                                                    className: "shrink-0 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                settings.appPhone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this),
                                        settings.appAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-gray-500 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                    size: 15,
                                                    className: "shrink-0 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                settings.appAddress
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        sections.map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-white text-xs font-black uppercase tracking-widest mb-4",
                                        children: sec.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/public/PublicFooter.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2.5",
                                        children: sec.links && sec.links.map((link)=>{
                                            var _link_href, _link_href1;
                                            const isExternal = link.isExternal || ((_link_href = link.href) === null || _link_href === void 0 ? void 0 : _link_href.startsWith("http://")) || ((_link_href1 = link.href) === null || _link_href1 === void 0 ? void 0 : _link_href1.startsWith("https://"));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: isExternal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "text-sm font-medium text-gray-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-sm font-medium text-gray-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 25
                                                }, this)
                                            }, link.id || link.label + link.href, false, {
                                                fileName: "[project]/src/components/public/PublicFooter.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/public/PublicFooter.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, sec.id || sec.title, true, {
                                fileName: "[project]/src/components/public/PublicFooter.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/public/PublicFooter.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-800/80 bg-[#05070C]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 text-center sm:text-left",
                            children: copyrightText
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400",
                            children: bottomLinks.map((link)=>{
                                var _link_href, _link_href1;
                                const isExternal = link.isExternal || ((_link_href = link.href) === null || _link_href === void 0 ? void 0 : _link_href.startsWith("http://")) || ((_link_href1 = link.href) === null || _link_href1 === void 0 ? void 0 : _link_href1.startsWith("https://"));
                                return isExternal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "hover:text-white transition-colors",
                                    children: link.label
                                }, link.id || link.label, false, {
                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "hover:text-white transition-colors",
                                    children: link.label
                                }, link.id || link.label, false, {
                                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PublicFooter.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/public/PublicFooter.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/public/PublicFooter.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/public/PublicFooter.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(PublicFooter, "7o1GbIVAvJHPY7QXhrvryA4Bfnw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSiteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteSettings"]
    ];
});
_c = PublicFooter;
var _c;
__turbopack_context__.k.register(_c, "PublicFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(public)/database/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DatabasePublicPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.mjs [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.mjs [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderInput$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-input.mjs [app-client] (ecmascript) <export default as FolderInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key.mjs [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.mjs [app-client] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.mjs [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TerminalSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-terminal.mjs [app-client] (ecmascript) <export default as TerminalSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2f$LandingNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing/LandingNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$PublicFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/PublicFooter.tsx [app-client] (ecmascript)");
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
function DatabasePublicPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("install");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [activeCheatsheetCat, setActiveCheatsheetCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [cheatsheetSearch, setCheatsheetSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copiedSnippet, setCopiedSnippet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Theme support
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatabasePublicPage.useEffect": ()=>{
            setMounted(true);
        }
    }["DatabasePublicPage.useEffect"], []);
    const isDark = mounted ? resolvedTheme === "dark" || theme === "dark" : false;
    const toggleTheme = ()=>{
        setTheme(isDark ? "light" : "dark");
    };
    const copyToClipboard = (text, id)=>{
        navigator.clipboard.writeText(text);
        setCopiedSnippet(id);
        setTimeout(()=>setCopiedSnippet(null), 2000);
    };
    const codeSnippets = {
        install: `# ── Option 1: Automated Linux Production Installer (Recommended) ──
git clone https://github.com/pingdart/ClusterDB.git pingdartdb
cd pingdartdb
chmod +x install.sh
sudo ./install.sh

# The automated installer prompts for security configuration:
# 1. Administrator Email: admin@example.com (used for registration & node alerts)
# 2. Database Root Username: admin
# 3. Root Password: [masked entry via stty]
# 4. Security PIN: 4-8 digits (e.g. 80181) for credential encryption

# ── Machine-Bound Encrypted Vault (/etc/pingdartdb/credentials.enc) ──
# - AES-256-CBC with PBKDF2 (600,000 iterations)
# - Bound to hardware /etc/machine-id (unreadable if copied off-machine)
# - File permissions strictly set to mode 0600 (root:pingdart)

# ── Credential Vault Helper CLI (pingdart-vault) ──
pingdart-vault view     # Decrypt & view credentials in-memory (prompts for PIN)
pingdart-vault verify   # Verify Security PIN validity against the vault
pingdart-vault rotate   # Rotate password or Security PIN

# ── Node.js Cluster Registration Telemetry ──
# Installer sends node telemetry to Node.js backend (https://api.chat.pingdart.com/api/database/install-registration)
# Payload: OS, release, kernel, arch, server IPv4/IPv6, MAC, hostname, machine ID
# NOTE: Passwords and PINs are STRICTLY NEVER transmitted.

# ── Manage PingDartDB via systemd ──
sudo systemctl status pingdartdb   # Check service status & uptime
sudo systemctl start pingdartdb    # Start database engine
sudo systemctl restart pingdartdb  # Restart database engine
sudo journalctl -u pingdartdb -f   # Follow real-time daemon logs

# ── Safe Upgrades & Rollbacks ──
sudo ./upgrade.sh                  # Takes ACID snapshot & rolls back on failure`,
        cli: `# ── PingDartDB MySQL-Style Native CLI Client ──
# Fast, interactive terminal client with table formatting & auth caching

# 1. Start interactive REPL session (prompts for user & password on first run)
pingdart

# 2. Check server cluster status & health probe
pingdart status

# 3. Connect to custom host and port
pingdart -h 127.0.0.1 -P 4650

# 4. Execute single query directly (Batch Mode / Scripts)
pingdart -e "SHOW DATABASES;"
pingdart -e "USE default; SELECT * FROM users;"

# ── Interactive REPL Session Example ──
# $ pingdart
# Connected to http://127.0.0.1:4650
# Username [admin]: admin
# Password: ********
# Authentication successful for user 'admin'.
#
# pingdart> SHOW DATABASES;
# pingdart> USE default;
# pingdart> CREATE TABLE users (id INT PRIMARY KEY, name TEXT);
# pingdart> INSERT INTO users VALUES (1, 'Ravi');
# pingdart> SELECT * FROM users;
# +----+------+
# | id | name |
# +----+------+
# | 1  | Ravi |
# +----+------+
# 1 row in set
#
# pingdart> exit
# Bye`,
        document: `# ── Modern Document NoSQL API (Collections & JSON) ──
# The exact same data can be queried as JSON documents or relational SQL tables!

# 1. Authenticate to receive session UUID token (POST /login)
curl -X POST http://localhost:4650/login \\
  -H "Content-Type: application/json" \\
  -d '{"username": "admin", "password": "admin123"}'

# Response:
# {"status":"success","token":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","error":null}

# 2. Query Collection with Filters & Sorting (POST /document/query)
curl -X POST http://localhost:4650/document/query \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "collection": "customers",
    "where": [
      {
        "field": "city",
        "operator": "==",
        "value": "Hyderabad"
      },
      {
        "field": "status",
        "operator": "==",
        "value": "active"
      }
    ],
    "orderBy": "name",
    "limit": 20,
    "offset": 0
  }'

# Response (Enriched with automatic versioning, timestamps & audit metadata):
# [
#   {
#     "_id": "doc_9f8e7d6c",
#     "_version": 1,
#     "_createdAt": 1729834100,
#     "_updatedAt": 1729834100,
#     "id": 1,
#     "name": "Dr Rao",
#     "city": "Hyderabad",
#     "status": "active"
#   }
# ]`,
        sql: `-- ── MySQL-Compatible Relational SQL (POST /query or CLI) ──

-- 1. Database Operations
CREATE DATABASE ecommerce_prod;
USE ecommerce_prod;

-- 2. User Creation with Host & IP Whitelisting
CREATE USER 'app_svc'@'192.168.1.%' PASSWORD 'SecureAppPass99$';
CREATE USER 'analytics'@'%' PASSWORD 'ReportingSecret!' IP '10.0.0.%';
GRANT ALL ON ecommerce_prod TO 'app_svc'@'192.168.1.%';

-- 3. Table DDL with Typed Columns & Constraints
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  product_name VARCHAR(255),
  amount FLOAT,
  status VARCHAR(50),
  created_at TIMESTAMP
);

-- 4. Fast B-Tree Secondary Indexing
CREATE INDEX idx_orders_status ON orders (status);
CREATE INDEX idx_orders_customer ON orders (customer_id);

-- 5. Data Manipulation (DML)
INSERT INTO orders (id, customer_id, product_name, amount, status)
VALUES (101, 1, 'HNSW Vector Server License', 499.00, 'completed');

SELECT id, product_name, amount 
FROM orders 
WHERE status = 'completed' 
ORDER BY amount DESC 
LIMIT 10;

-- 6. Cost-Based Query Optimizer (CBO) Statistics
ANALYZE TABLE orders;
EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'completed';`,
        ai_vectors: `-- ── First-Class AI Embedding Models & Auto-Generated Vectors ──

-- 1. Register embedding model in database catalog
CREATE EMBEDDING MODEL fast_embed
  TYPE='local'
  DIMENSION=384
  VERSION='1.0';

-- 2. Define table: PingDart derives & indexes vectors automatically!
-- Zero manual vector float arrays or external embedding pipelines needed.
CREATE TABLE medical_knowledge (
  id INT PRIMARY KEY,
  doctor_name VARCHAR(100),
  specialty_bio TEXT,
  embedding VECTOR(384) GENERATED FROM specialty_bio USING fast_embed
);

-- 3. Insert plain text — PingDart automatically derives and indexes vectors
INSERT INTO medical_knowledge (id, doctor_name, specialty_bio)
VALUES (1, 'Dr. Rao', 'Cardiologist with 15 years in minimally invasive heart surgery');

-- 4. Direct natural language semantic search across text columns
SELECT doctor_name, specialty_bio,
       SEMANTIC_MATCH(specialty_bio, 'interventional cardiac specialist') AS score
FROM medical_knowledge
WHERE SEMANTIC_MATCH(specialty_bio, 'interventional cardiac specialist') > 0.40
ORDER BY score DESC
LIMIT 5;

-- 5. Cross-Table Semantic JOINs (Affinity Matching)
SELECT d.doctor_name, h.hospital_name,
       SEMANTIC_MATCH(d.specialty_bio, h.department_focus) AS affinity_score
FROM medical_knowledge d
JOIN hospitals h
  ON SEMANTIC_MATCH(d.specialty_bio, h.department_focus) > 0.45;`,
        cluster: `# ── High-Availability 3-Node Raft Cluster with Sharding ──

# Terminal 1: Launch Seed Leader Node 1
cargo run --release --bin pingdart-core -- \\
  --port 4650 --node-id node-1 --data-dir ./data_node1

# Terminal 2: Launch Follower Node 2 (Joins Node 1)
cargo run --release --bin pingdart-core -- \\
  --port 4651 --node-id node-2 --join 127.0.0.1:4650 --data-dir ./data_node2

# Terminal 3: Launch Follower Node 3 (Joins Node 1)
cargo run --release --bin pingdart-core -- \\
  --port 4652 --node-id node-3 --join 127.0.0.1:4650 --data-dir ./data_node3

# Features Built-In:
# - Automatic Raft leader election (200-400ms timeout)
# - 16-virtual-node consistent hash sharding ring
# - Follower write-forwarding (proxies mutation writes to leader automatically)
# - Distributed scatter-gather Top-K vector queries across all cluster shards
# - Check cluster health: curl http://127.0.0.1:4650/cluster/status`,
        migration: `-- ── Universal Streaming Migration (Zero Schema Friction) ──
-- Ingest live dumps from legacy databases with automatic schema drift handling

-- 1. Ingest MySQL mysqldump SQL dump
MIGRATE FROM 'mysql'
  FILE 'backups/legacy_mysql.sql'
  TO TABLE 'mysql_users'
  SCHEMA_POLICY ADD_MISSING_COLUMNS;

-- 2. Ingest PostgreSQL pg_dump SQL dump
MIGRATE FROM 'postgres'
  FILE 'backups/pg_dump.sql'
  TO TABLE 'pg_billing'
  SCHEMA_POLICY STRICT;

-- 3. Ingest MongoDB Extended JSON with automatic BSON normalization
MIGRATE FROM 'mongodb'
  FILE 'exports/customers.json'
  TO TABLE 'mongo_clients'
  SCHEMA_POLICY ADD_MISSING_COLUMNS;

-- 4. Ingest CSV dataset with inline AI vector generation
MIGRATE FROM 'csv'
  FILE 'datasets/articles.csv'
  TO TABLE 'articles'
  SCHEMA_POLICY ADD_MISSING_COLUMNS
  EMBED content AS embedding DIM 384;

-- 5. Monitor, inspect, or validate migration jobs
SHOW MIGRATION JOBS;
VALIDATE MIGRATION 'job-uuid-1234';`,
        backup: `-- ── Native Protocol Buffers (.pb) Snapshots, ZSTD & PITR ──

-- 1. Export database with dictionary Zstandard compression (3x-5x smaller)
EXPORT DATABASE default TO 'backups/default_2026.pb';

-- 2. Export database with AES-256-GCM Envelope Encryption
EXPORT DATABASE default TO 'backups/default_encrypted.pb'
  ENCRYPTED KEY 'MasterSecretKey2026!';

-- 3. Full cluster export (includes databases, users, roles, and API keys)
EXPORT CLUSTER TO 'backups/cluster_full.pb'
  ENCRYPTED KEY 'ClusterKey!';

-- 4. Restore database from snapshot (verifies SHA-256 checksum first)
IMPORT DATABASE FROM 'backups/default_2026.pb';

-- 5. Point-In-Time Recovery (PITR via REST)
-- Replays CDC commit log to exact millisecond timestamp:
curl -X POST http://localhost:4650/backup/pitr \\
  -H "Content-Type: application/json" \\
  -d '{"token": "ADMIN_TOKEN", "target_timestamp": 1729834120}'`,
        nodejs: `// ── Node.js SDK Driver (Behaves just like the 'mysql' npm package) ──
const pingdart = require('./pingdart');

// 1. Establish connection to PingDartDB instance
const db = pingdart.createConnection({
  host: 'localhost',
  port: 4650,
  user: 'admin',
  password: 'your_password',
  database: 'ecommerce_prod'
});

// 2. Connect and execute SQL queries
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to PingDartDB successfully!");

  // 3. Query records with standard JavaScript arrays/objects
  db.query("SELECT id, product_name, amount FROM orders WHERE status = 'completed'", (err, rows) => {
    if (err) throw err;
    console.log("Found orders:", rows);
  });
});`,
        mcp: `// ── Model Context Protocol (MCP) Integration for AI Agents ──
// Configure in Claude Desktop (~/Library/Application Support/Claude/claude_desktop_config.json)
// or Cursor / Antigravity IDE:
{
  "mcpServers": {
    "pingdart-db": {
      "command": "cargo",
      "args": ["run", "--release", "--bin", "pingdart-mcp"],
      "env": {
        "PINGDART_URL": "http://127.0.0.1:4650",
        "PINGDART_USER": "admin",
        "PINGDART_PASS": "your_secure_password"
      }
    }
  }
}

// 5 Native MCP Tools Exposed to AI Agents:
// 1. sql_query: Execute SQL & DDL statements with Row-Level Security
// 2. semantic_search: Natural language search across unstructured text
// 3. memory_store: Cognitive memory storage (Episodic, Semantic, Working)
// 4. memory_recall: Ranked context retrieval with Ebbinghaus memory decay
// 5. graph_neighbors: Neo4j-style knowledge graph entity traversals`
    };
    const capabilities = [
        {
            category: "ai",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 dark:text-indigo-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 403,
                columnNumber: 13
            }, this),
            title: "Sub-Millisecond HNSW Vector Engine",
            desc: "High-dimensional proximity graph supporting Cosine, Euclidean, and Dot Product ANN search across 384 to 3072 dimensions in sub-millisecond P50.",
            tag: "AI & RAG"
        },
        {
            category: "ai",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-sky-500 dark:text-sky-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 410,
                columnNumber: 13
            }, this),
            title: "First-Class Model Registry & Auto-Embeddings",
            desc: "Define columns using 'VECTOR GENERATED FROM text USING model'. Never manage float vectors or external embedding services manually.",
            tag: "AI Automation"
        },
        {
            category: "ai",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500 dark:text-fuchsia-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 417,
                columnNumber: 13
            }, this),
            title: "Cognitive AI Memory (Ebbinghaus Decay)",
            desc: "Hierarchical memory (Working, Episodic, Semantic, LongTerm) with Ebbinghaus exponential decay ranking and automatic memory consolidation.",
            tag: "Agent Memory"
        },
        {
            category: "ai",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-amber-500 dark:text-amber-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 424,
                columnNumber: 13
            }, this),
            title: "BM25 & Vector Hybrid Search",
            desc: "Combines dense HNSW vector similarity with BM25 inverted keyword search using normalized α-weighted rank fusion.",
            tag: "Hybrid Search"
        },
        {
            category: "ai",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 dark:text-emerald-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 431,
                columnNumber: 13
            }, this),
            title: "Neo4j-Style Labeled Property Graph",
            desc: "Multi-labeled nodes, typed directional relationships (WORKS_AT, KNOWS), and breadth-first search (BFS) shortest-path traversals.",
            tag: "Graph Database"
        },
        {
            category: "ai",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-purple-500 dark:text-purple-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 438,
                columnNumber: 13
            }, this),
            title: "Native Model Context Protocol (MCP)",
            desc: "Built-in JSON-RPC 2.0 stdio MCP server for direct zero-code integration with Claude Desktop, Cursor, Antigravity, and LangChain agents.",
            tag: "AI Protocol"
        },
        {
            category: "engine",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-sky-500 dark:text-sky-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 445,
                columnNumber: 13
            }, this),
            title: "Unified SQL + Document NoSQL",
            desc: "One engine for relational schemas, strict DDL types, and JSON document collections. No need to manage separate Postgres and MongoDB clusters.",
            tag: "Multi-Model"
        },
        {
            category: "engine",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 dark:text-emerald-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 452,
                columnNumber: 13
            }, this),
            title: "Raft Consensus Clustering & Sharding",
            desc: "Multi-node consensus with automatic leader election, 16-virtual-node consistent hash ring, and distributed scatter-gather vector queries.",
            tag: "Clustering"
        },
        {
            category: "engine",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 dark:text-cyan-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 459,
                columnNumber: 13
            }, this),
            title: "Vectorized Columnar Analytics (OLAP)",
            desc: "SIMD-optimized contiguous memory chunk arrays supporting grouped aggregations (COUNT, SUM, AVG, GROUP BY) at 118,700+ rows/sec.",
            tag: "HTAP Engine"
        },
        {
            category: "engine",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-rose-500 dark:text-rose-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 466,
                columnNumber: 13
            }, this),
            title: "Cost-Based Query Optimizer (CBO)",
            desc: "Postgres-grade optimizer using HyperLogLog (HLL) NDV cardinality, typed equi-depth histograms, and calibrated cost weights.",
            tag: "Query Optimizer"
        },
        {
            category: "engine",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-violet-500 dark:text-violet-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 473,
                columnNumber: 13
            }, this),
            title: "OpenTelemetry Tracing & EXPLAIN ANALYZE",
            desc: "Live query execution profiling with recursive PlanNode trees, stage microsecond breakdown, and native OTLP export to Jaeger/Datadog.",
            tag: "Observability"
        },
        {
            category: "security",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-rose-500 dark:text-rose-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 480,
                columnNumber: 13
            }, this),
            title: "Zero-Leak Row-Level Security (RLS)",
            desc: "Injected dynamically into SELECT pipelines using CURRENT_TENANT() and CURRENT_USER() policies for leak-proof multi-tenancy.",
            tag: "Security"
        },
        {
            category: "security",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-500 dark:text-blue-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 487,
                columnNumber: 13
            }, this),
            title: "AES-256-GCM Envelope Encryption",
            desc: "Authenticated encryption at rest using unique 96-bit nonces, PBKDF2/SHA-256 key derivation, and Poly1305 tamper detection.",
            tag: "Encryption"
        },
        {
            category: "security",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-amber-500 dark:text-amber-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 494,
                columnNumber: 13
            }, this),
            title: "Granular RBAC & Revocable API Keys",
            desc: "20 atomic permissions, preloaded roles (SuperAdmin, DataScientist, AppDeveloper), and high-entropy API keys with instant revocation.",
            tag: "Access Control"
        },
        {
            category: "migration",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-amber-500 dark:text-amber-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 501,
                columnNumber: 13
            }, this),
            title: "Universal Migration Framework",
            desc: "Stream live data from PostgreSQL, MySQL, MongoDB, CSV, and JSON with automated schema drift handling and crash checkpoints.",
            tag: "Zero-Friction"
        },
        {
            category: "migration",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-teal-500 dark:text-teal-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 508,
                columnNumber: 13
            }, this),
            title: "Protobuf (.pb) ZSTD Backup & PITR",
            desc: "Canonical Protocol Buffers schema, dictionary Zstandard compression (3x-5x smaller), and CDC commit log Point-In-Time Recovery.",
            tag: "Disaster Recovery"
        },
        {
            category: "migration",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 dark:text-indigo-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 515,
                columnNumber: 13
            }, this),
            title: "Cloud Object Storage Tiering",
            desc: "Async ObjectStore tier supporting AWS S3, Cloudflare R2, MinIO, and Local Filesystem for snapshot offloading and cold archiving.",
            tag: "Storage Tiering"
        },
        {
            category: "engine",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                className: "w-5 h-5 sm:w-6 sm:h-6 text-green-500 dark:text-green-400"
            }, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 522,
                columnNumber: 13
            }, this),
            title: "Cloud-Native Kubernetes Operator",
            desc: "Custom Resource Definition (CRD), HA StatefulSet manifests, pod anti-affinity, and automated Prometheus /metrics endpoint.",
            tag: "Kubernetes"
        }
    ];
    const benchmarks = [
        {
            label: "Point Key Lookup (Indexed)",
            value: "< 0.015 ms",
            compare: "9.45 ms (Full Scan)",
            boost: "630x Faster"
        },
        {
            label: "HNSW Vector ANN Search (P50)",
            value: "0.97 ms",
            compare: "870+ QPS",
            boost: "Sub-millisecond"
        },
        {
            label: "Bulk Ingestion Rate",
            value: "118k+ rows/s",
            compare: "1M rows in 8.4s",
            boost: "SIMD Buffered"
        },
        {
            label: "OLAP Aggregation (1M records)",
            value: "1.28 s",
            compare: "Group By in 0.84s",
            boost: "Vectorized"
        }
    ];
    // Comprehensive command reference list
    const cheatsheetItems = [
        {
            category: "install",
            title: "Install PingDartDB (Linux One-Liner)",
            cmd: "git clone https://github.com/pingdart/ClusterDB.git pingdartdb && cd pingdartdb && chmod +x install.sh && sudo ./install.sh",
            desc: "Compiles binaries, creates dedicated pingdart user, FHS paths, and registers systemd service.",
            scope: "Bash / Root"
        },
        {
            category: "install",
            title: "Check Systemd Service Status",
            cmd: "sudo systemctl status pingdartdb",
            desc: "Inspect daemon uptime, PID, memory consumption, and recent log messages.",
            scope: "Linux Systemd"
        },
        {
            category: "install",
            title: "Start / Stop / Restart Service",
            cmd: "sudo systemctl start pingdartdb\nsudo systemctl stop pingdartdb\nsudo systemctl restart pingdartdb",
            desc: "Cleanly manage the PingDartDB service lifecycle.",
            scope: "Linux Systemd"
        },
        {
            category: "install",
            title: "Live Daemon Journal Logs",
            cmd: "sudo journalctl -u pingdartdb -f",
            desc: "Stream live stdout/stderr logs from the background database engine.",
            scope: "Linux Systemd"
        },
        {
            category: "install",
            title: "Safe Upgrade with Rollback",
            cmd: "cd pingdartdb && git pull origin main && sudo ./upgrade.sh",
            desc: "Takes an ACID snapshot, compiles & verifies health; rolls back automatically on failure.",
            scope: "Bash / Upgrade"
        },
        {
            category: "install",
            title: "Safe Uninstallation",
            cmd: "sudo ./uninstall.sh",
            desc: "Removes systemd services and binaries while preserving data safely by default.",
            scope: "Bash / Root"
        },
        {
            category: "install",
            title: "View Encrypted Vault Credentials",
            cmd: "pingdart-vault view",
            desc: "Decrypts and displays root credentials in-memory using the 4-8 digit Security PIN.",
            scope: "Terminal Vault"
        },
        {
            category: "install",
            title: "Rotate Password or Security PIN",
            cmd: "pingdart-vault rotate",
            desc: "Authenticates with current PIN and re-encrypts the vault with new credentials.",
            scope: "Terminal Vault"
        },
        {
            category: "install",
            title: "Node Registration Telemetry API",
            cmd: "curl -X POST https://api.chat.pingdart.com/api/database/install-registration \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"installation_id\": \"UUID\", \"email\": \"admin@pingdart.com\", \"os_distro\": \"ubuntu\"}'",
            desc: "Central Node.js API registering cluster node OS, IPs, and hardware identity (zero passwords/PINs).",
            scope: "Node.js REST"
        },
        {
            category: "cli",
            title: "Interactive MySQL-Style CLI",
            cmd: "pingdart",
            desc: "Opens interactive REPL session with auto-cached session token and ASCII tabular formatting.",
            scope: "Terminal CLI"
        },
        {
            category: "cli",
            title: "Check Cluster & Node Status",
            cmd: "pingdart status",
            desc: "Displays engine version, leader node ID, active nodes, and storage directory.",
            scope: "Terminal CLI"
        },
        {
            category: "cli",
            title: "Connect to Custom Host & Port",
            cmd: "pingdart -h 127.0.0.1 -P 4650",
            desc: "Specify target remote or local PingDartDB instance endpoint.",
            scope: "Terminal CLI"
        },
        {
            category: "cli",
            title: "Execute SQL Query (Batch Mode)",
            cmd: "pingdart -e \"SHOW DATABASES;\"",
            desc: "Runs query directly in headless scripts or CI/CD pipelines.",
            scope: "Terminal CLI"
        },
        {
            category: "user_security",
            title: "Create User with IP Whitelist",
            cmd: "CREATE USER 'backend'@'192.168.1.%' PASSWORD 'Pass456!';\nCREATE USER developer PASSWORD 'Secret123!' IP '192.168.1.50';",
            desc: "Support for both MySQL 'user'@'host' syntax and explicit IP / subnet whitelist patterns.",
            scope: "SQL DDL"
        },
        {
            category: "user_security",
            title: "Grant Database Privileges",
            cmd: "GRANT ALL ON ecommerce_prod TO 'backend'@'192.168.1.%';\nGRANT READ ON production_db TO reporting_user;",
            desc: "Grant ALL, READ, or WRITE privileges on a designated database catalog.",
            scope: "SQL DDL"
        },
        {
            category: "user_security",
            title: "Update Password & Whitelist",
            cmd: "ALTER USER developer PASSWORD 'NewPass2026!' IP '10.0.0.%';",
            desc: "Atomically update credential password and network access mask.",
            scope: "SQL DDL"
        },
        {
            category: "user_security",
            title: "Revoke / Drop User",
            cmd: "DROP USER 'developer'@'localhost';",
            desc: "Deletes credentials and invalidates active session tokens immediately.",
            scope: "SQL DDL"
        },
        {
            category: "ddl",
            title: "Create & Switch Database Catalog",
            cmd: "CREATE DATABASE analytics;\nUSE analytics;\nSHOW DATABASES;",
            desc: "Namespace multi-tenancy catalogs with instant zero-cost database switching.",
            scope: "SQL DDL"
        },
        {
            category: "ddl",
            title: "Create Table with Strict Types",
            cmd: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(150),\n  balance FLOAT,\n  created_at TIMESTAMP\n);",
            desc: "Define strongly-typed tables. Supports INT, BIGINT, FLOAT, VARCHAR, TEXT, BOOLEAN, TIMESTAMP, VECTOR.",
            scope: "SQL DDL"
        },
        {
            category: "ddl",
            title: "Inspect Schema (DESCRIBE / SHOW)",
            cmd: "SHOW TABLES;\nDESCRIBE users;",
            desc: "List active tables and inspect column datatypes, primary keys, and constraints.",
            scope: "SQL DDL"
        },
        {
            category: "ddl",
            title: "Create Secondary B-Tree Index",
            cmd: "CREATE INDEX idx_users_email ON users (email);",
            desc: "Accelerate point lookups and range scans with B-Tree indexes.",
            scope: "SQL DDL"
        },
        {
            category: "ddl",
            title: "Collect CBO Statistics",
            cmd: "ANALYZE TABLE users;",
            desc: "Computes HyperLogLog NDV cardinality and typed histograms for the Cost-Based Optimizer.",
            scope: "SQL DDL"
        },
        {
            category: "dml",
            title: "Insert Records",
            cmd: "INSERT INTO users (id, name, email, balance) VALUES (1, 'Alice', 'alice@corp.com', 2500.00);",
            desc: "Insert single or multiple rows into relational tables.",
            scope: "SQL DML"
        },
        {
            category: "dml",
            title: "Filter, Sort & Paginate (SELECT)",
            cmd: "SELECT id, name, balance FROM users WHERE balance >= 1000.00 ORDER BY balance DESC LIMIT 10 OFFSET 0;",
            desc: "Standard SELECT projection with WHERE filters, ORDER BY, and LIMIT/OFFSET.",
            scope: "SQL DML"
        },
        {
            category: "dml",
            title: "Update & Delete Records",
            cmd: "UPDATE users SET balance = 3000.00 WHERE id = 1;\nDELETE FROM users WHERE balance < 0;",
            desc: "Mutate records matching predicate conditions.",
            scope: "SQL DML"
        },
        {
            category: "dml",
            title: "EXPLAIN & EXPLAIN ANALYZE",
            cmd: "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'alice@corp.com';",
            desc: "Live query execution profiler displaying recursive PlanNode timings in microseconds.",
            scope: "SQL Profiling"
        },
        {
            category: "document_api",
            title: "Obtain Session Token (REST Login)",
            cmd: "curl -X POST http://localhost:4650/login -H \"Content-Type: application/json\" -d '{\"username\": \"admin\", \"password\": \"admin123\"}'",
            desc: "Returns UUID session token used for subsequent REST calls.",
            scope: "REST HTTP"
        },
        {
            category: "document_api",
            title: "Query Document Collection (POST /document/query)",
            cmd: "curl -X POST http://localhost:4650/document/query -H \"Content-Type: application/json\" -d '{\"token\": \"TOKEN\", \"collection\": \"users\", \"where\": [{\"field\": \"city\", \"operator\": \"==\", \"value\": \"Hyderabad\"}], \"limit\": 20}'",
            desc: "Document NoSQL querying without needing SQL string concatenation.",
            scope: "REST HTTP"
        },
        {
            category: "vectors",
            title: "Register Embedding Model Primitive",
            cmd: "CREATE EMBEDDING MODEL fast_embed TYPE='local' DIMENSION=384 VERSION='1.0';",
            desc: "Register local or remote AI embedding models directly into the database catalog.",
            scope: "AI SQL"
        },
        {
            category: "vectors",
            title: "Auto-Generated Vector Column",
            cmd: "CREATE TABLE docs (\n  id INT PRIMARY KEY,\n  content TEXT,\n  embedding VECTOR(384) GENERATED FROM content USING fast_embed\n);",
            desc: "PingDart automatically derives and indexes vectors on every insert or update.",
            scope: "AI SQL"
        },
        {
            category: "vectors",
            title: "Natural Language Semantic Match",
            cmd: "SELECT content, SEMANTIC_MATCH(content, 'database engine') AS score FROM docs WHERE SEMANTIC_MATCH(content, 'database engine') > 0.40 ORDER BY score DESC;",
            desc: "Sub-millisecond high-dimensional HNSW cosine vector proximity search.",
            scope: "AI SQL"
        },
        {
            category: "cluster",
            title: "Launch Seed Leader Node",
            cmd: "cargo run --release --bin pingdart-core -- --port 4650 --node-id node-1 --data-dir ./data_node1",
            desc: "Starts cluster leader node on port 4650 with local persistent storage.",
            scope: "Cluster Daemon"
        },
        {
            category: "cluster",
            title: "Join Follower Node to Cluster",
            cmd: "cargo run --release --bin pingdart-core -- --port 4651 --node-id node-2 --join 127.0.0.1:4650 --data-dir ./data_node2",
            desc: "Follower joins existing cluster, participates in Raft consensus and hash sharding.",
            scope: "Cluster Daemon"
        },
        {
            category: "backup_migration",
            title: "Export Protobuf (.pb) Backup",
            cmd: "EXPORT DATABASE ecommerce_prod TO 'backups/ecommerce_prod.pb';\nEXPORT DATABASE ecommerce_prod TO 'backups/enc.pb' ENCRYPTED KEY 'SecretKey!';",
            desc: "Canonical Protocol Buffers export with Zstandard compression and optional AES-256-GCM encryption.",
            scope: "Backup SQL"
        },
        {
            category: "backup_migration",
            title: "Import / Restore Database Snapshot",
            cmd: "IMPORT DATABASE FROM 'backups/ecommerce_prod.pb';",
            desc: "Verifies SHA-256 integrity checksum before restoring tables, indexes, and schemas.",
            scope: "Backup SQL"
        },
        {
            category: "backup_migration",
            title: "Universal Migration from MySQL / Postgres",
            cmd: "MIGRATE FROM 'mysql' FILE 'dump.sql' TO TABLE 'mysql_data' SCHEMA_POLICY ADD_MISSING_COLUMNS;\nMIGRATE FROM 'postgres' FILE 'pg_dump.sql' TO TABLE 'pg_data' SCHEMA_POLICY STRICT;",
            desc: "Streams legacy SQL dumps directly into PingDart with automatic schema drift handling.",
            scope: "Migration SQL"
        },
        {
            category: "backup_migration",
            title: "Universal Migration from MongoDB / CSV",
            cmd: "MIGRATE FROM 'mongodb' FILE 'customers.json' TO TABLE 'mongo_clients' SCHEMA_POLICY ADD_MISSING_COLUMNS;\nMIGRATE FROM 'csv' FILE 'data.csv' TO TABLE 'articles' EMBED content AS embedding DIM 384;",
            desc: "Unpacks MongoDB extended JSON or CSV with inline AI vector generation.",
            scope: "Migration SQL"
        }
    ];
    const comparisonRows = [
        {
            feature: "Unified SQL & JSON Documents",
            pingdart: true,
            postgres: "Partial (JSONB)",
            mongo: false,
            pinecone: false
        },
        {
            feature: "Sub-ms HNSW Vector Search",
            pingdart: true,
            postgres: "Slow Ext",
            mongo: "Limited",
            pinecone: true
        },
        {
            feature: "Auto-Generated Text Embeddings",
            pingdart: true,
            postgres: false,
            mongo: false,
            pinecone: false
        },
        {
            feature: "Cross-Table Semantic JOINs",
            pingdart: true,
            postgres: false,
            mongo: false,
            pinecone: false
        },
        {
            feature: "Cognitive AI Memory (Ebbinghaus)",
            pingdart: true,
            postgres: false,
            mongo: false,
            pinecone: false
        },
        {
            feature: "Native Model Context Protocol (MCP)",
            pingdart: true,
            postgres: false,
            mongo: false,
            pinecone: false
        },
        {
            feature: "Raft Consensus Clustering & Sharding",
            pingdart: true,
            postgres: "Complex Setup",
            mongo: "Replica Sets",
            pinecone: "Proprietary"
        },
        {
            feature: "Universal Migration (Postgres/MySQL/Mongo)",
            pingdart: true,
            postgres: false,
            mongo: false,
            pinecone: false
        },
        {
            feature: "Single Self-Contained Binary",
            pingdart: true,
            postgres: false,
            mongo: false,
            pinecone: "SaaS Only"
        }
    ];
    const filteredCapabilities = activeCategory === "all" ? capabilities : capabilities.filter((c)=>c.category === activeCategory);
    const filteredCheatsheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DatabasePublicPage.useMemo[filteredCheatsheet]": ()=>{
            return cheatsheetItems.filter({
                "DatabasePublicPage.useMemo[filteredCheatsheet]": (item)=>{
                    const matchCat = activeCheatsheetCat === "all" || item.category === activeCheatsheetCat;
                    const matchSearch = cheatsheetSearch.trim() === "" || item.title.toLowerCase().includes(cheatsheetSearch.toLowerCase()) || item.cmd.toLowerCase().includes(cheatsheetSearch.toLowerCase()) || item.desc.toLowerCase().includes(cheatsheetSearch.toLowerCase());
                    return matchCat && matchSearch;
                }
            }["DatabasePublicPage.useMemo[filteredCheatsheet]"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DatabasePublicPage.useMemo[filteredCheatsheet]"], [
        activeCheatsheetCat,
        cheatsheetSearch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 selection:bg-sky-500/20 selection:text-sky-700 dark:selection:bg-sky-500/30 dark:selection:text-sky-300 font-sans transition-colors duration-300 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2f$LandingNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingNav"], {}, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 885,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-gradient-to-b from-sky-400/20 via-indigo-400/10 to-transparent dark:from-sky-600/15 dark:via-indigo-600/10 blur-3xl rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 889,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-400/10 dark:bg-emerald-600/10 blur-3xl rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 890,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2/3 -right-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-3xl rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 891,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 888,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center space-y-6 sm:space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 16
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 shadow-xs text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-3.5 h-3.5 text-sky-500 dark:text-sky-400 animate-pulse shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 905,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "v0.5.0-rc1 • Rust Core • MySQL & Document NoSQL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 906,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 899,
                                        columnNumber: 13
                                    }, this),
                                    mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs touch-manipulation cursor-pointer",
                                        title: `Switch to ${isDark ? "Light" : "Dark"} Mode`,
                                        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                    className: "w-3.5 h-3.5 text-amber-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Light"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                    className: "w-3.5 h-3.5 text-slate-600 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Dark"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 911,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 898,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.1
                                },
                                className: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] text-slate-900 dark:text-white",
                                children: [
                                    "The Open-Source ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 937,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent",
                                        children: "Distributed Cluster Database"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 938,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 931,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                className: "text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal px-2 sm:px-0",
                                children: [
                                    "Built from scratch in ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Rust"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 949,
                                        columnNumber: 35
                                    }, this),
                                    ". Unify relational ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "SQL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 949,
                                        columnNumber: 75
                                    }, this),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "NoSQL Documents"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 949,
                                        columnNumber: 97
                                    }, this),
                                    ", sub-millisecond ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "HNSW Vector Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 950,
                                        columnNumber: 29
                                    }, this),
                                    ", ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Raft Consensus Clustering"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 950,
                                        columnNumber: 66
                                    }, this),
                                    ",",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Universal Migrations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 951,
                                        columnNumber: 13
                                    }, this),
                                    ", and native ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Model Context Protocol (MCP)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 951,
                                        columnNumber: 63
                                    }, this),
                                    " in a single, lightweight binary."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 943,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.3
                                },
                                className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-md sm:max-w-none mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#interactive-guide",
                                        className: "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[50px] bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                className: "w-4 h-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 965,
                                                columnNumber: 15
                                            }, this),
                                            " Quick Start & Usage ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4 ml-0.5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 965,
                                                columnNumber: 81
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#commands-cheatsheet",
                                        className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[50px] bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 font-semibold text-sm shadow-xs transition-all hover:bg-slate-100 dark:hover:bg-slate-800 min-h-[44px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TerminalSquare$3e$__["TerminalSquare"], {
                                                className: "w-4 h-4 text-sky-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 972,
                                                columnNumber: 15
                                            }, this),
                                            " Command Manual"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 968,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/pingdart/ClusterDB",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[50px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300 font-semibold text-sm shadow-xs transition-all hover:bg-slate-100 dark:hover:bg-slate-800 min-h-[44px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                                className: "w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 981,
                                                columnNumber: 15
                                            }, this),
                                            " GitHub Repo ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-3.5 h-3.5 text-slate-400 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 981,
                                                columnNumber: 105
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 975,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 955,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-6 sm:pt-12 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto",
                                children: benchmarks.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 sm:p-4 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs backdrop-blur-sm flex flex-col items-center justify-center text-center transition-all hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base sm:text-2xl font-black text-slate-900 dark:text-white leading-tight",
                                                children: b.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 992,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] sm:text-xs text-sky-600 dark:text-sky-400 font-semibold mt-0.5",
                                                children: b.boost
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1",
                                                children: b.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 994,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 988,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 986,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 896,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-10 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2 mb-8 sm:mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest",
                                        children: "Easy 4-Step Onboarding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1003,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white",
                                        children: "From Zero to Clustered in Under 60 Seconds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1002,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-400 transition-all flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-black text-sm flex items-center justify-center",
                                                                children: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1016,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1014,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1",
                                                        children: "One-Line Install"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            "Run ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-sky-600 dark:text-sky-400 font-mono text-[11px]",
                                                                children: "sudo ./install.sh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1020,
                                                                columnNumber: 23
                                                            }, this),
                                                            " on Linux to detect distro, build Rust binaries, and register systemd."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 truncate",
                                                children: "sudo ./install.sh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 transition-all flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-black text-sm flex items-center justify-center",
                                                                children: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1031,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1032,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1030,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1",
                                                        children: "Systemd Daemon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            "Runs natively in background. Inspect status via ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-indigo-600 dark:text-indigo-400 font-mono text-[11px]",
                                                                children: "systemctl status pingdartdb"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 67
                                                            }, this),
                                                            " on port 4650."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 truncate",
                                                children: "sudo systemctl start pingdartdb"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-400 transition-all flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black text-sm flex items-center justify-center",
                                                                children: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1047,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1",
                                                        children: "Connect CLI or REST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            "Launch the native MySQL-style CLI with ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-emerald-600 dark:text-emerald-400 font-mono text-[11px]",
                                                                children: "pingdart"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1052,
                                                                columnNumber: 58
                                                            }, this),
                                                            " or authenticate via ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-emerald-600 dark:text-emerald-400 font-mono text-[11px]",
                                                                children: "POST /login"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1052,
                                                                columnNumber: 173
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 truncate",
                                                children: "pingdart status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1055,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-purple-400 transition-all flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-black text-sm flex items-center justify-center",
                                                                children: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1063,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1064,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1062,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1",
                                                        children: "Query Dual-Engine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1066,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 dark:text-slate-400",
                                                        children: "Query the exact same data using traditional SQL tables or modern NoSQL JSON Document APIs with vectors."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 truncate",
                                                children: "SELECT & /document/query"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1011,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1001,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "interactive-guide",
                        className: "py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest",
                                        children: "Hands-On Interactive Code Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1081,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",
                                        children: "Every Command & Usage at Your Fingertips"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-2xl mx-auto",
                                        children: "Select any workflow below to view production shell commands, SQL statements, and REST payloads."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1080,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-none",
                                children: [
                                    {
                                        id: "install",
                                        label: "Installation & Systemd",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1095,
                                            columnNumber: 71
                                        }, this)
                                    },
                                    {
                                        id: "cli",
                                        label: "MySQL-Style CLI",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 60
                                        }, this)
                                    },
                                    {
                                        id: "document",
                                        label: "Document API (NoSQL)",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1097,
                                            columnNumber: 70
                                        }, this)
                                    },
                                    {
                                        id: "sql",
                                        label: "Relational SQL",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1098,
                                            columnNumber: 59
                                        }, this)
                                    },
                                    {
                                        id: "ai_vectors",
                                        label: "AI & Auto-Vectors",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1099,
                                            columnNumber: 69
                                        }, this)
                                    },
                                    {
                                        id: "cluster",
                                        label: "3-Node Raft Cluster",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1100,
                                            columnNumber: 68
                                        }, this)
                                    },
                                    {
                                        id: "migration",
                                        label: "Universal Migrations",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderInput$3e$__["FolderInput"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1101,
                                            columnNumber: 71
                                        }, this)
                                    },
                                    {
                                        id: "backup",
                                        label: "Backup & PITR",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1102,
                                            columnNumber: 61
                                        }, this)
                                    },
                                    {
                                        id: "nodejs",
                                        label: "Node.js Driver",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1103,
                                            columnNumber: 62
                                        }, this)
                                    },
                                    {
                                        id: "mcp",
                                        label: "AI Agent MCP",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 57
                                        }, this)
                                    }
                                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${activeTab === tab.id ? "bg-sky-500 text-white shadow-md shadow-sky-500/25" : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"}`,
                                        children: [
                                            tab.icon,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1093,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-[10px] bg-[#090d1a] border border-slate-800 shadow-2xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-slate-800 bg-[#060a14]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 sm:gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1125,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 sm:ml-3 text-[11px] sm:text-xs font-mono text-slate-400 truncate max-w-[140px] sm:max-w-none",
                                                        children: activeTab === "sql" || activeTab === "ai_vectors" || activeTab === "migration" || activeTab === "backup" ? "schema.sql" : activeTab === "mcp" ? "claude_desktop_config.json" : activeTab === "nodejs" ? "app.js" : "terminal.sh"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1128,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(codeSnippets[activeTab], activeTab),
                                                className: "inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-[10px] text-[11px] sm:text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all cursor-pointer",
                                                children: copiedSnippet === activeTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1145,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Copied!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1151,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-6 font-mono text-[11px] sm:text-sm text-slate-200 overflow-x-auto leading-relaxed whitespace-pre",
                                        children: codeSnippets[activeTab]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1079,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "commands-cheatsheet",
                        className: "py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest",
                                        children: "Developer Reference Manual"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",
                                        children: "PingDartDB Command Cheat Sheet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-2xl mx-auto",
                                        children: "Search and filter every operational command: Installation, CLI, SQL DDL/DML, Document NoSQL, Vectors, Clustering, and Migrations."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-8 max-w-4xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: cheatsheetSearch,
                                                onChange: (e)=>setCheatsheetSearch(e.target.value),
                                                placeholder: "Search commands (e.g. systemctl, CREATE USER, HNSW, MIGRATE, EXPLAIN ANALYZE)...",
                                                className: "w-full pl-10 pr-4 py-2.5 rounded-[10px] text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 15
                                            }, this),
                                            cheatsheetSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCheatsheetSearch(""),
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                                children: "Clear"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 pb-2 sm:pb-0 scrollbar-none",
                                        children: [
                                            {
                                                id: "all",
                                                label: "All Commands"
                                            },
                                            {
                                                id: "install",
                                                label: "Installation & Systemd"
                                            },
                                            {
                                                id: "cli",
                                                label: "CLI (`pingdart`)"
                                            },
                                            {
                                                id: "user_security",
                                                label: "Users & Security"
                                            },
                                            {
                                                id: "ddl",
                                                label: "Table & DB DDL"
                                            },
                                            {
                                                id: "dml",
                                                label: "SQL Queries (DML)"
                                            },
                                            {
                                                id: "document_api",
                                                label: "Document API"
                                            },
                                            {
                                                id: "vectors",
                                                label: "AI Vectors & RAG"
                                            },
                                            {
                                                id: "cluster",
                                                label: "Raft Clustering"
                                            },
                                            {
                                                id: "backup_migration",
                                                label: "Backup & Migration"
                                            }
                                        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveCheatsheetCat(cat.id),
                                                className: `px-3 py-1.5 rounded-[10px] text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${activeCheatsheetCat === cat.id ? "bg-sky-600 text-white shadow-xs" : "bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,
                                                children: cat.label
                                            }, cat.id, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1212,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: filteredCheatsheet.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-5 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-xs sm:text-sm text-slate-900 dark:text-white",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1235,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono px-2 py-0.5 rounded-[8px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
                                                                children: item.scope
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1238,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1234,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1242,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-[8px] bg-[#070b14] border border-slate-800 p-2.5 sm:p-3 font-mono text-[11px] text-slate-200 overflow-x-auto whitespace-pre group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: item.cmd
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(item.cmd, `cheat-${idx}`),
                                                        className: "absolute right-2 top-2 p-1 rounded-[6px] bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all opacity-80 hover:opacity-100 cursor-pointer",
                                                        title: "Copy command",
                                                        children: copiedSnippet === `cheat-${idx}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3.5 h-3.5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3.5 h-3.5 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1229,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1227,
                                columnNumber: 11
                            }, this),
                            filteredCheatsheet.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12 text-slate-500 dark:text-slate-400 text-sm",
                                children: [
                                    'No commands matching "',
                                    cheatsheetSearch,
                                    '". Try another query or clear the filter.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest",
                                        children: "Core Capabilities & Architecture"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",
                                        children: "Every Database Capability You Need, Built Into One Binary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-2xl mx-auto",
                                        children: "Eliminate sprawling infrastructure stacks. PingDart DB replaces separate databases for SQL, vector embeddings, caching, graphs, and full-text search."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-none",
                                children: [
                                    {
                                        id: "all",
                                        label: "All Capabilities"
                                    },
                                    {
                                        id: "ai",
                                        label: "AI & RAG"
                                    },
                                    {
                                        id: "engine",
                                        label: "Clustering & OLAP"
                                    },
                                    {
                                        id: "security",
                                        label: "Security & RLS"
                                    },
                                    {
                                        id: "migration",
                                        label: "Migrations & Backup"
                                    }
                                ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(cat.id),
                                        className: `px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[10px] text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${activeCategory === cat.id ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs" : "bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,
                                        children: cat.label
                                    }, cat.id, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1296,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6",
                                children: filteredCapabilities.map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative p-4 sm:p-6 rounded-[10px] bg-white dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 transition-all hover:bg-slate-50/70 dark:hover:bg-slate-900/80 sm:hover:-translate-y-1 shadow-xs hover:shadow-md dark:shadow-md dark:shadow-black/40 flex flex-col justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3 sm:mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 sm:p-2.5 rounded-[10px] bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 group-hover:scale-105 transition-transform",
                                                            children: cap.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1317,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[10px] bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60",
                                                            children: cap.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1320,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1316,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors",
                                                    children: cap.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal",
                                                    children: cap.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1311,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest",
                                        children: "Why PingDart DB?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",
                                        children: "PingDart DB vs Traditional Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1342,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-2xl mx-auto",
                                        children: "Replace a complex, expensive patchwork of 4+ disconnected databases with one consolidated, high-throughput Rust engine."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:hidden flex items-center justify-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "👉 Swipe horizontally to compare platforms"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                    lineNumber: 1352,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-[10px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xs -mx-4 sm:mx-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left border-collapse text-xs sm:text-sm min-w-[600px] sm:min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 sm:py-4 px-3.5 sm:px-6 font-bold text-slate-900 dark:text-white sticky left-0 bg-slate-50 dark:bg-slate-900/95 z-10",
                                                        children: "Capability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1359,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 sm:py-4 px-3 sm:px-6 font-bold text-sky-600 dark:text-sky-400",
                                                        children: "PingDart DB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "PostgreSQL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "MongoDB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-600 dark:text-slate-400",
                                                        children: "Pinecone / Vectors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1363,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1358,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-200 dark:divide-slate-800/80 font-normal",
                                            children: comparisonRows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 sm:py-3.5 px-3.5 sm:px-6 font-medium text-slate-800 dark:text-slate-200 sticky left-0 bg-white dark:bg-[#060a14] z-10 border-r border-slate-100 dark:border-slate-800/60 sm:border-r-0",
                                                            children: row.feature
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1369,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 sm:py-3.5 px-3 sm:px-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-[10px] whitespace-nowrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                        lineNumber: 1374,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Native"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1373,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1372,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 sm:py-3.5 px-3 sm:px-6 text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap",
                                                            children: typeof row.postgres === "boolean" ? row.postgres ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-3.5 h-3.5 text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1380,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "w-3.5 h-3.5 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1382,
                                                                columnNumber: 27
                                                            }, this) : row.postgres
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1377,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 sm:py-3.5 px-3 sm:px-6 text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap",
                                                            children: typeof row.mongo === "boolean" ? row.mongo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-3.5 h-3.5 text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1391,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "w-3.5 h-3.5 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1393,
                                                                columnNumber: 27
                                                            }, this) : row.mongo
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1388,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 sm:py-3.5 px-3 sm:px-6 text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap",
                                                            children: typeof row.pinecone === "boolean" ? row.pinecone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-3.5 h-3.5 text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1402,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "w-3.5 h-3.5 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                                lineNumber: 1404,
                                                                columnNumber: 27
                                                            }, this) : row.pinecone
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1399,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1368,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1366,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                    lineNumber: 1356,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest",
                                        children: "Built For Every Workload"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1420,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white",
                                        children: "Who Uses PingDart Cluster DB?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1423,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-2xl mx-auto",
                                        children: "Engineered for engineers, AI researchers, enterprise architects, and self-hosters."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 sm:p-6 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-all hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 sm:space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1435,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1434,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white",
                                                        children: "AI & Agent Developers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
                                                        children: "Store conversational episodes, knowledge vectors, and entities. Plug PingDart directly into Claude Desktop, Cursor, or Antigravity via the native MCP server."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1438,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1433,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800 mt-4 sm:mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] sm:text-xs font-semibold text-sky-600 dark:text-sky-400",
                                                    children: "HNSW, Cognitive Memory, MCP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1432,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 sm:p-6 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-all hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 sm:space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1452,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white",
                                                        children: "Full-Stack & DevOps Teams"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
                                                        children: "Migrate existing Postgres, MySQL, or Mongo setups in one command. Deploy resilient 3-node Raft clusters with automated failover and K8s Operator."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1455,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800 mt-4 sm:mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400",
                                                    children: "Raft HA, Migration, K8s, OTel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1460,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1459,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1449,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 sm:p-6 rounded-[10px] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-all hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 sm:space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "w-5 h-5 sm:w-6 sm:h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                                            lineNumber: 1469,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1468,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-base sm:text-lg font-bold text-slate-900 dark:text-white",
                                                        children: "Enterprise & SaaS Platforms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1471,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
                                                        children: "Cryptographic Row-Level Security, strict tenant QPS/storage quotas, AES-256-GCM envelope encryption at rest, and Point-In-Time Recovery."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1467,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800 mt-4 sm:mt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] sm:text-xs font-semibold text-purple-600 dark:text-purple-400",
                                                    children: "RLS, Multi-Tenancy, PITR, CBO"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1477,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/database/page.tsx",
                                lineNumber: 1431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 sm:p-14 rounded-[10px] bg-gradient-to-b from-sky-50 via-white to-indigo-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 sm:space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex p-2.5 sm:p-3 rounded-[10px] bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        className: "w-6 h-6 sm:w-8 sm:h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/database/page.tsx",
                                        lineNumber: 1489,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                    lineNumber: 1488,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight",
                                    children: "Ready to deploy your first cluster?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                    lineNumber: 1492,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 dark:text-slate-300 text-xs sm:text-lg max-w-2xl mx-auto font-normal px-2 sm:px-0",
                                    children: "PingDart DB is open-source and free to use. Spin up a single node in 10 seconds or cluster multiple servers across regions with Raft."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                    lineNumber: 1496,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-xs sm:max-w-none mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-[50px] bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold text-sm shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]",
                                            children: [
                                                "Access Cloud Console ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1505,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1501,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/pingdart/ClusterDB",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-[50px] bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-xs transition-all min-h-[44px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                                    className: "w-4 h-4 text-slate-500 dark:text-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                                    lineNumber: 1513,
                                                    columnNumber: 17
                                                }, this),
                                                " Star on GitHub"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/database/page.tsx",
                                            lineNumber: 1507,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/database/page.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/database/page.tsx",
                            lineNumber: 1487,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/database/page.tsx",
                        lineNumber: 1486,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 894,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$PublicFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicFooter"], {}, void 0, false, {
                fileName: "[project]/src/app/(public)/database/page.tsx",
                lineNumber: 1520,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/database/page.tsx",
        lineNumber: 884,
        columnNumber: 5
    }, this);
}
_s(DatabasePublicPage, "v0GCw+ilBaqOy4LHVJlibZ2RP2c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = DatabasePublicPage;
var _c;
__turbopack_context__.k.register(_c, "DatabasePublicPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dbca36cc._.js.map