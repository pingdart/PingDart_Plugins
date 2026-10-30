(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelsFilterDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_REELS_FILTER",
    ()=>DEFAULT_REELS_FILTER,
    "REELS_FILTERS",
    ()=>REELS_FILTERS,
    "ReelsCameraOverlay",
    ()=>ReelsCameraOverlay,
    "ReelsFilterDrawer",
    ()=>ReelsFilterDrawer,
    "getFilterCssString",
    ()=>getFilterCssString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Video01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Timer01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Timer01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FavouriteIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PaintBoardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PaintBoardIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MagicWand01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MagicWand01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$arStickersRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/arStickersRenderer.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_REELS_FILTER = {
    id: "normal",
    name: "Original",
    brightness: 1,
    contrast: 1,
    saturation: 1,
    hue: 0,
    sepia: 0,
    grayscale: 0,
    iconBg: "bg-slate-700",
    iconType: "camera",
    description: "Natural camera look"
};
const REELS_FILTERS = [
    DEFAULT_REELS_FILTER,
    {
        id: "clear",
        name: "Clear",
        brightness: 1.04,
        contrast: 1.08,
        saturation: 1.08,
        hue: 0,
        sepia: 0,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600",
        iconType: "star",
        description: "Clean micro-contrast & clarity"
    },
    {
        id: "portrait",
        name: "Portrait",
        brightness: 1.06,
        contrast: 1.02,
        saturation: 1.05,
        hue: -2,
        sepia: 0,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-indigo-400 via-blue-500 to-indigo-600",
        iconType: "sun",
        description: "Soft skin tone & radiant glow"
    },
    {
        id: "warm",
        name: "Warm",
        brightness: 1.05,
        contrast: 1.08,
        saturation: 1.12,
        hue: -8,
        sepia: 0.08,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-amber-400 via-orange-500 to-indigo-700",
        iconType: "sun",
        description: "Warm sunset ambient lighting"
    },
    {
        id: "vivid",
        name: "Vivid",
        brightness: 1.02,
        contrast: 1.12,
        saturation: 1.3,
        hue: 0,
        sepia: 0,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600",
        iconType: "sparkles",
        description: "Rich vibrant saturated colors"
    },
    {
        id: "cinematic",
        name: "Cinema",
        brightness: 1.02,
        contrast: 1.18,
        saturation: 1.08,
        hue: 5,
        sepia: 0.08,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-indigo-700 via-blue-700 to-slate-900",
        iconType: "video",
        description: "Hollywood filmic color grade"
    },
    {
        id: "cool",
        name: "Cool Ice",
        brightness: 1.02,
        contrast: 1.08,
        saturation: 1.08,
        hue: 12,
        sepia: 0,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-700",
        iconType: "flash",
        description: "Cool modern blue aesthetic"
    },
    {
        id: "retro",
        name: "Retro 90s",
        brightness: 1.05,
        contrast: 1.05,
        saturation: 1.08,
        hue: -5,
        sepia: 0.22,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-amber-600 via-indigo-800 to-slate-900",
        iconType: "timer",
        description: "Vintage retro analog camera"
    },
    {
        id: "noir",
        name: "Noir",
        brightness: 1,
        contrast: 1.3,
        saturation: 0.8,
        hue: 0,
        sepia: 0,
        grayscale: 1,
        iconBg: "bg-gradient-to-tr from-neutral-700 via-slate-800 to-black",
        iconType: "sparkles",
        description: "High-contrast Black & White"
    },
    {
        id: "dream",
        name: "Dream",
        brightness: 1.08,
        contrast: 0.95,
        saturation: 1.12,
        hue: -8,
        sepia: 0.03,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-indigo-300 via-blue-400 to-indigo-600",
        iconType: "heart",
        description: "Soft dreamy pastel colors"
    },
    {
        id: "teal_orange",
        name: "Teal Cinema",
        brightness: 1.03,
        contrast: 1.15,
        saturation: 1.2,
        hue: 10,
        sepia: 0.02,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-teal-500 via-blue-600 to-indigo-700",
        iconType: "palette",
        description: "Blockbuster teal & orange grade"
    },
    {
        id: "magic",
        name: "Magic Shimmer",
        brightness: 1.08,
        contrast: 1.08,
        saturation: 1.18,
        hue: -5,
        sepia: 0.06,
        grayscale: 0,
        iconBg: "bg-gradient-to-tr from-blue-400 via-indigo-500 to-yellow-500",
        iconType: "magic",
        description: "Soft luminous aura shimmer"
    }
];
function getFilterCssString(filter, intensity = 100, beauty = 0) {
    if (!filter) {
        return "none";
    }
    const amount = Math.max(0, Math.min(100, intensity)) / 100;
    const interpolate = (value, normal = 1)=>{
        return normal + (value - normal) * amount;
    };
    const brightness = interpolate(filter.brightness);
    const contrast = interpolate(filter.contrast);
    const saturation = interpolate(filter.saturation);
    const hue = filter.hue * amount;
    const sepia = filter.sepia * amount;
    const grayscale = filter.grayscale * amount;
    const filters = [
        `brightness(${brightness.toFixed(3)})`,
        `contrast(${contrast.toFixed(3)})`,
        `saturate(${saturation.toFixed(3)})`
    ];
    if (Math.abs(hue) > 0.01) {
        filters.push(`hue-rotate(${hue.toFixed(2)}deg)`);
    }
    if (sepia > 0.001) {
        filters.push(`sepia(${sepia.toFixed(3)})`);
    }
    if (grayscale > 0.001) {
        filters.push(`grayscale(${grayscale.toFixed(3)})`);
    }
    /*
   * Subtle beauty smoothing
   */ if (beauty > 0) {
        const beautyAmount = Math.max(0, Math.min(100, beauty)) / 100;
        const blur = 0.08 + beautyAmount * 0.22;
        const beautyContrast = 1 + beautyAmount * 0.025;
        const beautyBrightness = 1 + beautyAmount * 0.025;
        filters.push(`blur(${blur.toFixed(2)}px)`);
        filters.push(`contrast(${beautyContrast.toFixed(3)})`);
        filters.push(`brightness(${beautyBrightness.toFixed(3)})`);
    }
    return filters.join(" ");
}
function ReelsFilterDrawer({ isOpen, onClose, selectedFilter, onSelectFilter, selectedARSticker = "none", onSelectARSticker, onIntensityChange, onBeautyChange, onGlowChange, onVignetteChange }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("filters");
    const [intensity, setIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [beauty, setBeauty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [glow, setGlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [vignette, setVignette] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    if (!isOpen) {
        return null;
    }
    /* =======================================================
     ICON
  ======================================================= */ const renderIcon = (type, size = 20)=>{
        const common = {
            size,
            className: "text-white"
        };
        switch(type){
            case "star":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                    ...common,
                    className: "text-white fill-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 377,
                    columnNumber: 16
                }, this);
            case "sun":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 380,
                    columnNumber: 16
                }, this);
            case "flash":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 383,
                    columnNumber: 16
                }, this);
            case "video":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video01Icon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 386,
                    columnNumber: 16
                }, this);
            case "timer":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Timer01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer01Icon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 389,
                    columnNumber: 16
                }, this);
            case "heart":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"], {
                    ...common,
                    className: "text-white fill-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 392,
                    columnNumber: 16
                }, this);
            case "palette":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PaintBoardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaintBoardIcon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 395,
                    columnNumber: 16
                }, this);
            case "magic":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MagicWand01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagicWand01Icon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 398,
                    columnNumber: 16
                }, this);
            case "sparkles":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 401,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                    ...common
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                    lineNumber: 404,
                    columnNumber: 16
                }, this);
        }
    };
    /* =======================================================
     HANDLERS
  ======================================================= */ const handleIntensityChange = (event)=>{
        const value = Number(event.target.value);
        setIntensity(value);
        onIntensityChange === null || onIntensityChange === void 0 ? void 0 : onIntensityChange(value);
    };
    const handleBeautyChange = (event)=>{
        const value = Number(event.target.value);
        setBeauty(value);
        onBeautyChange === null || onBeautyChange === void 0 ? void 0 : onBeautyChange(value);
    };
    const handleGlowChange = (event)=>{
        const value = Number(event.target.value);
        setGlow(value);
        onGlowChange === null || onGlowChange === void 0 ? void 0 : onGlowChange(value);
    };
    const handleVignetteChange = (event)=>{
        const value = Number(event.target.value);
        setVignette(value);
        onVignetteChange === null || onVignetteChange === void 0 ? void 0 : onVignetteChange(value);
    };
    /* =======================================================
     RESET
  ======================================================= */ const handleReset = ()=>{
        setIntensity(100);
        setBeauty(0);
        setGlow(0);
        setVignette(0);
        onSelectFilter(DEFAULT_REELS_FILTER);
        onSelectARSticker === null || onSelectARSticker === void 0 ? void 0 : onSelectARSticker("none");
        onIntensityChange === null || onIntensityChange === void 0 ? void 0 : onIntensityChange(100);
        onBeautyChange === null || onBeautyChange === void 0 ? void 0 : onBeautyChange(0);
        onGlowChange === null || onGlowChange === void 0 ? void 0 : onGlowChange(0);
        onVignetteChange === null || onVignetteChange === void 0 ? void 0 : onVignetteChange(0);
    };
    /* =======================================================
     RETURN
  ======================================================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full bg-slate-950/95 backdrop-blur-2xl border border-indigo-500/25 rounded-3xl p-4 flex flex-col gap-3.5 shadow-2xl shadow-indigo-950/60 animate-in slide-in-from-bottom-6 duration-200 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-slate-900/90 border border-indigo-500/20 p-1 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("filters"),
                                className: `px-3 py-1 rounded-xl text-[14px] font-black transition-all cursor-pointer ${activeTab === "filters" ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-indigo-600/30" : "text-white/60 hover:text-white"}`,
                                children: [
                                    "🎨 Shaders (",
                                    REELS_FILTERS.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("ar_masks"),
                                className: `px-3 py-1 rounded-xl text-[14px] font-black transition-all cursor-pointer ${activeTab === "ar_masks" ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-indigo-600/30" : "text-white/60 hover:text-white"}`,
                                children: [
                                    "🎭 AR Masks (",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$arStickersRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AR_STICKERS_LIST"].length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleReset,
                                className: " px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[14px] font-bold text-white/70 hover:text-white transition-all ",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: " px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-90 text-[14px] font-black text-white shadow-md shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer ",
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            activeTab === "filters" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex items-start gap-3 overflow-x-auto no-scrollbar py-1 px-1 ",
                        children: REELS_FILTERS.map((flt)=>{
                            const isSelected = selectedFilter.id === flt.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onSelectFilter(flt),
                                className: " flex flex-col items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer transition-all group min-w-[62px] ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                      relative
                      w-14
                      h-14
                      rounded-2xl
                      ${flt.iconBg}
                      border-2
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-200

                      ${isSelected ? `
                            border-white
                            ring-2
                            ring-indigo-500
                            scale-110
                            shadow-lg
                            shadow-indigo-500/40
                          ` : `
                            border-white/20
                            opacity-70
                            group-hover:opacity-100
                            group-hover:border-white/50
                            group-hover:scale-105
                          `}
                    `,
                                        children: [
                                            renderIcon(flt.iconType, isSelected ? 21 : 19),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-indigo-600 border-2 border-black flex items-center justify-center ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-white font-black",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                                lineNumber: 637,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                        lineNumber: 601,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `
                      text-[9px]
                      whitespace-nowrap
                      transition-colors
                      ${isSelected ? "text-white font-black" : "text-white/50 group-hover:text-white/90 font-bold"}
                    `,
                                        children: flt.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                        lineNumber: 660,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, flt.id, true, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 584,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 569,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " rounded-2xl bg-indigo-950/40 border border-indigo-500/20 px-3.5 py-2 flex items-center justify-between ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-white font-black",
                                        children: selectedFilter.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-white/50 truncate",
                                        children: selectedFilter.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                        lineNumber: 696,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[14px] text-blue-400 font-black",
                                children: [
                                    intensity,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 701,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 679,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSlider, {
                                label: "Intensity",
                                value: intensity,
                                onChange: handleIntensityChange,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                    size: 13,
                                    className: "text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                    lineNumber: 712,
                                    columnNumber: 21
                                }, void 0),
                                min: 0,
                                max: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 708,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSlider, {
                                label: "Beauty",
                                value: beauty,
                                onChange: handleBeautyChange,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"], {
                                    size: 13,
                                    className: "text-indigo-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                    lineNumber: 721,
                                    columnNumber: 21
                                }, void 0),
                                min: 0,
                                max: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 717,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSlider, {
                                label: "Glow",
                                value: glow,
                                onChange: handleGlowChange,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MagicWand01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagicWand01Icon"], {
                                    size: 13,
                                    className: "text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                    lineNumber: 730,
                                    columnNumber: 21
                                }, void 0),
                                min: 0,
                                max: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 726,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSlider, {
                                label: "Vignette",
                                value: vignette,
                                onChange: handleVignetteChange,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                    size: 13,
                                    className: "text-indigo-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                    lineNumber: 739,
                                    columnNumber: 21
                                }, void 0),
                                min: 0,
                                max: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 735,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 707,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* ===================================================
            TAB 2: AR FACE MASKS (MediaPipe Tracked)
        =================================================== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 overflow-x-auto no-scrollbar py-1 px-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$arStickersRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AR_STICKERS_LIST"].map((mask)=>{
                            const isSelected = selectedARSticker === mask.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onSelectARSticker === null || onSelectARSticker === void 0 ? void 0 : onSelectARSticker(mask.id),
                                className: "flex flex-col items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer transition-all group min-w-[66px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative w-14 h-14 rounded-2xl bg-slate-900 border-2 flex items-center justify-center text-2xl transition-all duration-200 ${isSelected ? "border-white ring-2 ring-indigo-500 scale-110 shadow-lg shadow-indigo-500/40 bg-gradient-to-tr from-blue-600/40 to-indigo-700/40" : "border-white/20 opacity-70 group-hover:opacity-100 group-hover:border-white/50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: mask.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                                lineNumber: 766,
                                                columnNumber: 21
                                            }, this),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-indigo-600 border-2 border-black flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-white font-black",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                                lineNumber: 768,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                        lineNumber: 760,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[9px] whitespace-nowrap transition-colors ${isSelected ? "text-white font-black" : "text-white/50 group-hover:text-white/90 font-bold"}`,
                                        children: mask.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                        lineNumber: 774,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, mask.id, true, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 754,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 750,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl bg-indigo-950/40 border border-indigo-500/20 px-3.5 py-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px] text-white font-bold",
                                children: "🎭 Powered by Google MediaPipe 3D Face Tracker"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-blue-400 font-bold",
                                children: "Realtime 60fps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 789,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 785,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                lineNumber: 749,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s(ReelsFilterDrawer, "dsgXJ08UtnM7Lx9n3ZKtLsDFl74=");
_c = ReelsFilterDrawer;
function FilterSlider({ label, value, min, max, icon, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-indigo-400",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 828,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px] font-bold text-white/80",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                                lineNumber: 832,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 827,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] font-black text-blue-400",
                        children: [
                            value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                        lineNumber: 837,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                lineNumber: 826,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                value: value,
                onChange: onChange,
                className: " w-full h-1.5 appearance-none cursor-pointer rounded-full bg-slate-800 accent-indigo-500 "
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                lineNumber: 843,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
        lineNumber: 824,
        columnNumber: 5
    }, this);
}
_c1 = FilterSlider;
function ReelsCameraOverlay({ glow = 0, vignette = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            glow > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute inset-0 pointer-events-none z-10 ",
                style: {
                    background: `
              radial-gradient(
                circle at center,
                rgba(255,255,255,${glow / 100 * 0.12}),
                transparent 65%
              )
            `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                lineNumber: 880,
                columnNumber: 9
            }, this),
            vignette > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute inset-0 pointer-events-none z-20 ",
                style: {
                    background: `
              radial-gradient(
                circle at center,
                transparent 40%,
                rgba(0,0,0,${vignette / 100 * 0.55}) 100%
              )
            `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelsFilterDrawer.tsx",
                lineNumber: 901,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c2 = ReelsCameraOverlay;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ReelsFilterDrawer");
__turbopack_context__.k.register(_c1, "FilterSlider");
__turbopack_context__.k.register(_c2, "ReelsCameraOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelsSoundSelectorModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelsSoundSelectorModal",
    ()=>ReelsSoundSelectorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MusicNote01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MusicNote01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GlobalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/GlobalIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsSoundStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useReelsSoundStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReelsSoundSelectorModal({ isOpen, onClose, selectedSound, onSelectSound }) {
    _s();
    const { sounds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsSoundStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelsSoundStore"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    if (!isOpen) return null;
    const filteredSounds = sounds.filter((snd)=>{
        // Search query match (title, artist, language, category)
        const matchesSearch = snd.title.toLowerCase().includes(searchQuery.toLowerCase()) || snd.artist.toLowerCase().includes(searchQuery.toLowerCase()) || snd.language.toLowerCase().includes(searchQuery.toLowerCase()) || snd.category.toLowerCase().includes(searchQuery.toLowerCase());
        // Language match (Original microphone is always shown)
        const matchesLang = selectedLanguage === "All" || snd.language === selectedLanguage || snd.language === "All" || snd.id === "original_mic";
        // Category match
        const matchesCat = selectedCategory === "All" || snd.category === selectedCategory || snd.id === "original_mic";
        return matchesSearch && matchesLang && matchesCat;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-end animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-slate-950 rounded-t-3xl border-t border-indigo-500/30 p-5 space-y-3.5 max-h-[80vh] flex flex-col overflow-hidden shadow-2xl shadow-indigo-950/80 animate-in slide-in-from-bottom-6 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-indigo-600/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MusicNote01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MusicNote01Icon"], {
                                        size: 18,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-black uppercase tracking-wider text-white",
                                            children: "Audio Studio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[14px] text-white/50",
                                            children: [
                                                filteredSounds.length,
                                                " tracks available in ",
                                                selectedLanguage
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-white/80 hover:text-white active:scale-95 transition-all cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                            size: 16,
                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search by song, artist, language...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full bg-slate-900 border border-indigo-500/20 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 px-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$GlobalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalIcon"], {
                                    size: 13,
                                    className: "text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[14px] font-black uppercase tracking-wider text-white/70",
                                    children: "Select Language"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsSoundStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_LANGUAGES"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setSelectedLanguage(lang),
                                    className: `px-3 py-1 rounded-xl text-[14px] font-bold whitespace-nowrap transition-all cursor-pointer ${selectedLanguage === lang ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md shadow-indigo-600/30 scale-105" : "bg-slate-900/90 text-white/65 border border-indigo-500/15 hover:bg-slate-800 hover:text-white"}`,
                                    children: lang
                                }, lang, false, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 py-0.5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsSoundStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setSelectedCategory(cat),
                            className: `px-2.5 py-0.5 rounded-lg text-[9px] font-bold whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat ? "bg-indigo-600/40 text-blue-300 border border-indigo-400/50" : "bg-slate-900/50 text-white/40 border border-white/5 hover:text-white/70"}`,
                            children: cat === "Trending" ? "🔥 Trending" : cat
                        }, cat, false, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 overflow-y-auto pr-1 flex-1 no-scrollbar min-h-[160px]",
                    children: filteredSounds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-white/50 text-xs flex flex-col items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MusicNote01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MusicNote01Icon"], {
                                size: 28,
                                className: "text-white/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    'No audio tracks found matching "',
                                    searchQuery,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this) : filteredSounds.map((sound)=>{
                        const isSelected = selectedSound === sound.title;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                onSelectSound(sound.title);
                                onClose();
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎵 Audio set: ${sound.title}`);
                            },
                            className: `w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer group active:scale-[0.99] ${isSelected ? "bg-indigo-600/25 border-indigo-500 shadow-md shadow-indigo-600/20 text-white" : "bg-slate-900/80 border-slate-800/80 text-white/80 hover:bg-slate-850 hover:border-indigo-500/30"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${isSelected ? "bg-gradient-to-br from-blue-600 to-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/40" : "bg-slate-800 border-indigo-500/20 text-blue-400 group-hover:bg-slate-750 group-hover:border-indigo-500/40"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MusicNote01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MusicNote01Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                lineNumber: 181,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-xs font-bold text-white truncate",
                                                            children: sound.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 25
                                                        }, this),
                                                        sound.isPopular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.2 rounded-md bg-rose-600/80 text-[8px] font-black text-white uppercase shrink-0",
                                                            children: "HOT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-[14px] text-white/50 mt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate max-w-[120px]",
                                                            children: sound.artist
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1.5 py-0.2 rounded-md bg-slate-800 border border-white/5 text-[8px] font-bold text-indigo-300",
                                                            children: sound.language
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-blue-400 font-mono font-medium",
                                                            children: sound.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 19
                                }, this),
                                isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                    size: 20,
                                    className: "text-blue-400 shrink-0 ml-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-1 rounded-xl bg-white/5 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 text-[14px] font-bold text-white/60 group-hover:text-white transition-all shrink-0 ml-2 shadow-xs",
                                    children: "Select"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                                    lineNumber: 209,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, sound.id, true, {
                            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                            lineNumber: 161,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/reels/ReelsSoundSelectorModal.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ReelsSoundSelectorModal, "rBSsR7uQgICgNk0DSYwb3yHPTYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsSoundStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelsSoundStore"]
    ];
});
_c = ReelsSoundSelectorModal;
var _c;
__turbopack_context__.k.register(_c, "ReelsSoundSelectorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/ReelsCameraStudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelsCameraStudio",
    ()=>ReelsCameraStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MusicNote01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MusicNote01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Timer01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Timer01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlayIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Sun01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeMute01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeMute01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsFilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelsFilterDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsSoundSelectorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelsSoundSelectorModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/faceLandmarkerService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$arStickersRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/arStickersRenderer.ts [app-client] (ecmascript)");
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
const SPEED_OPTIONS = [
    {
        label: "0.5x",
        value: 0.5
    },
    {
        label: "1x",
        value: 1.0
    },
    {
        label: "2x",
        value: 2.0
    },
    {
        label: "3x",
        value: 3.0
    }
];
const DURATION_OPTIONS = [
    15,
    30,
    60
];
// Safe MediaDevices caller
async function safeGetUserMedia(constraints) {
    if ("object" === "undefined" || typeof navigator === "undefined") return null;
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function") {
        try {
            return await navigator.mediaDevices.getUserMedia(constraints);
        } catch (e) {
            return null;
        }
    }
    // Legacy Webkit / Moz fallback
    const nav = navigator;
    const legacyFn = nav.getUserMedia || nav.webkitGetUserMedia || nav.mozGetUserMedia || nav.msGetUserMedia;
    if (legacyFn) {
        return new Promise((resolve)=>{
            legacyFn.call(navigator, constraints, (stream)=>resolve(stream), ()=>resolve(null));
        });
    }
    return null;
}
function ReelsCameraStudio({ isOpen, onClose, onCaptureVideo }) {
    _s();
    const videoPreviewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordedPlaybackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordedChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animFrameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasRequestedPermsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Active Stream state
    const [cameraStream, setCameraStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCameraLoading, setIsCameraLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Camera Settings (Default: Front Camera "user")
    const [facingMode, setFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("user");
    const [isTorchOn, setIsTorchOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasTorch, setHasTorch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSpeed, setSelectedSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.0);
    const [selectedDuration, setSelectedDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    // Filter & AR Mask state
    const [selectedFilter, setSelectedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsFilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REELS_FILTERS"][0]);
    const [selectedARSticker, setSelectedARSticker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [filterIntensity, setFilterIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [filterBeauty, setFilterBeauty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [filterGlow, setFilterGlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [filterVignette, setFilterVignette] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [beautyFilter, setBeautyFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countdownSeconds, setCountdownSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeCountdown, setActiveCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sound selection
    const [soundTitle, setSoundTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Original Sound");
    const [isSoundSelectorOpen, setIsSoundSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // UI Panels (Mutually Exclusive: Opening one closes others)
    const [showFiltersPanel, setShowFiltersPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSpeedPanel, setShowSpeedPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openFiltersPanel = ()=>{
        setShowFiltersPanel(true);
        setShowSpeedPanel(false);
        setIsSoundSelectorOpen(false);
    };
    const toggleSpeedPanel = ()=>{
        setShowSpeedPanel((prev)=>!prev);
        setShowFiltersPanel(false);
        setIsSoundSelectorOpen(false);
    };
    const openSoundSelector = ()=>{
        setIsSoundSelectorOpen(true);
        setShowFiltersPanel(false);
        setShowSpeedPanel(false);
    };
    // Recording State
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordedTime, setRecordedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [recordedBlobUrl, setRecordedBlobUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recordedFile, setRecordedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReviewing, setIsReviewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReviewMuted, setIsReviewMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReviewPlaying, setIsReviewPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Refs for tracking loop to avoid stale closures
    const selectedARStickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedARSticker);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelsCameraStudio.useEffect": ()=>{
            selectedARStickerRef.current = selectedARSticker;
        }
    }["ReelsCameraStudio.useEffect"], [
        selectedARSticker
    ]);
    const facingModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(facingMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelsCameraStudio.useEffect": ()=>{
            facingModeRef.current = facingMode;
        }
    }["ReelsCameraStudio.useEffect"], [
        facingMode
    ]);
    // Stop camera tracks helper
    const stopCameraStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelsCameraStudio.useCallback[stopCameraStream]": ()=>{
            if (animFrameIdRef.current) {
                cancelAnimationFrame(animFrameIdRef.current);
                animFrameIdRef.current = null;
            }
            if (mediaStreamRef.current) {
                mediaStreamRef.current.getTracks().forEach({
                    "ReelsCameraStudio.useCallback[stopCameraStream]": (track)=>{
                        try {
                            track.stop();
                        } catch (e) {}
                    }
                }["ReelsCameraStudio.useCallback[stopCameraStream]"]);
                mediaStreamRef.current = null;
            }
            setCameraStream(null);
        }
    }["ReelsCameraStudio.useCallback[stopCameraStream]"], []);
    // Initialize live camera inside the in-screen viewfinder with natural 1x wide-angle state
    const initCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReelsCameraStudio.useCallback[initCamera]": async ()=>{
            stopCameraStream();
            setIsCameraLoading(true);
            // Check Capacitor permissions once on native platform
            if (!hasRequestedPermsRef.current && "object" !== "undefined") {
                hasRequestedPermsRef.current = true;
                try {
                    const { Capacitor } = await __turbopack_context__.A("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript, async loader)");
                    if (Capacitor.isNativePlatform()) {
                        const { Camera } = await __turbopack_context__.A("[project]/node_modules/@capacitor/camera/dist/esm/index.js [app-client] (ecmascript, async loader)");
                        const perm = await Camera.checkPermissions().catch({
                            "ReelsCameraStudio.useCallback[initCamera]": ()=>null
                        }["ReelsCameraStudio.useCallback[initCamera]"]);
                        if ((perm === null || perm === void 0 ? void 0 : perm.camera) !== "granted") {
                            await Camera.requestPermissions().catch({
                                "ReelsCameraStudio.useCallback[initCamera]": ()=>null
                            }["ReelsCameraStudio.useCallback[initCamera]"]);
                        }
                    }
                } catch (capErr) {
                    console.warn("[CameraStudio] Capacitor camera check notice:", capErr);
                }
            }
            try {
                const getStreamPromise = {
                    "ReelsCameraStudio.useCallback[initCamera].getStreamPromise": async ()=>{
                        const stream1 = await safeGetUserMedia({
                            video: {
                                facingMode: {
                                    ideal: facingMode
                                }
                            },
                            audio: true
                        });
                        if (stream1) return stream1;
                        const stream2 = await safeGetUserMedia({
                            video: {
                                facingMode: {
                                    ideal: facingMode
                                }
                            },
                            audio: false
                        });
                        if (stream2) return stream2;
                        return await safeGetUserMedia({
                            video: true,
                            audio: true
                        });
                    }
                }["ReelsCameraStudio.useCallback[initCamera].getStreamPromise"];
                const timeoutPromise = new Promise({
                    "ReelsCameraStudio.useCallback[initCamera]": (res)=>setTimeout({
                            "ReelsCameraStudio.useCallback[initCamera]": ()=>res(null)
                        }["ReelsCameraStudio.useCallback[initCamera]"], 3000)
                }["ReelsCameraStudio.useCallback[initCamera]"]);
                const stream = await Promise.race([
                    getStreamPromise(),
                    timeoutPromise
                ]);
                if (stream) {
                    mediaStreamRef.current = stream;
                    setCameraStream(stream);
                    setIsCameraLoading(false);
                    const videoTrack = stream.getVideoTracks()[0];
                    if (videoTrack) {
                        const capabilities = videoTrack.getCapabilities ? videoTrack.getCapabilities() : {};
                        setHasTorch(!!capabilities.torch);
                    }
                    return stream;
                }
            } catch (err) {
                console.warn("[CameraStudio] Stream init notice:", err.message);
            }
            setIsCameraLoading(false);
            return null;
        }
    }["ReelsCameraStudio.useCallback[initCamera]"], [
        facingMode,
        stopCameraStream
    ]);
    // Real-time Canvas Render Loop with MediaPipe 3D Face Landmarker Tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelsCameraStudio.useEffect": ()=>{
            if (!cameraStream || isReviewing) return;
            let isRunning = true;
            let landmarker = null;
            // Load MediaPipe FaceLandmarker in background
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$faceLandmarkerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFaceLandmarker"])().then({
                "ReelsCameraStudio.useEffect": (lm)=>{
                    landmarker = lm;
                }
            }["ReelsCameraStudio.useEffect"]);
            const renderLoop = {
                "ReelsCameraStudio.useEffect.renderLoop": ()=>{
                    if (!isRunning) return;
                    const video = videoPreviewRef.current;
                    const canvas = canvasRef.current;
                    if (video && canvas && video.readyState >= 2) {
                        const ctx = canvas.getContext("2d", {
                            willReadFrequently: false
                        });
                        if (ctx) {
                            if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                                canvas.width = video.videoWidth || 720;
                                canvas.height = video.videoHeight || 1280;
                            }
                            const w = canvas.width;
                            const h = canvas.height;
                            ctx.save();
                            ctx.clearRect(0, 0, w, h);
                            // Mirror front camera
                            if (facingModeRef.current === "user") {
                                ctx.translate(w, 0);
                                ctx.scale(-1, 1);
                            }
                            // Draw Camera Frame
                            ctx.drawImage(video, 0, 0, w, h);
                            // Draw MediaPipe AR Face Masks if active
                            if (selectedARStickerRef.current !== "none" && landmarker) {
                                try {
                                    const results = landmarker.detectForVideo(video, performance.now());
                                    if (results && results.faceLandmarks && results.faceLandmarks.length > 0) {
                                        const landmarks = results.faceLandmarks[0];
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$arStickersRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawARSticker"])(ctx, landmarks, selectedARStickerRef.current, w, h, performance.now());
                                    }
                                } catch (e) {}
                            }
                            ctx.restore();
                        }
                    }
                    animFrameIdRef.current = requestAnimationFrame(renderLoop);
                }
            }["ReelsCameraStudio.useEffect.renderLoop"];
            animFrameIdRef.current = requestAnimationFrame(renderLoop);
            return ({
                "ReelsCameraStudio.useEffect": ()=>{
                    isRunning = false;
                    if (animFrameIdRef.current) {
                        cancelAnimationFrame(animFrameIdRef.current);
                        animFrameIdRef.current = null;
                    }
                }
            })["ReelsCameraStudio.useEffect"];
        }
    }["ReelsCameraStudio.useEffect"], [
        cameraStream,
        isReviewing
    ]);
    // Ensure video element plays the live stream inside the viewfinder
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelsCameraStudio.useEffect": ()=>{
            if (videoPreviewRef.current && cameraStream && !isReviewing) {
                videoPreviewRef.current.srcObject = cameraStream;
                videoPreviewRef.current.muted = true;
                videoPreviewRef.current.play().catch({
                    "ReelsCameraStudio.useEffect": (err)=>console.warn("[CameraStudio] In-app video play note:", err.message)
                }["ReelsCameraStudio.useEffect"]);
            }
        }
    }["ReelsCameraStudio.useEffect"], [
        cameraStream,
        isReviewing
    ]);
    // Start in-screen camera when screen opens or facingMode flips
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelsCameraStudio.useEffect": ()=>{
            if (isOpen && !isReviewing) {
                initCamera();
            }
            return ({
                "ReelsCameraStudio.useEffect": ()=>{
                    stopCameraStream();
                }
            })["ReelsCameraStudio.useEffect"];
        }
    }["ReelsCameraStudio.useEffect"], [
        isOpen,
        facingMode
    ]);
    // Handle Torch / Flash toggle
    const toggleTorch = async ()=>{
        if (!mediaStreamRef.current) return;
        const track = mediaStreamRef.current.getVideoTracks()[0];
        if (track) {
            try {
                const nextState = !isTorchOn;
                await track.applyConstraints({
                    advanced: [
                        {
                            torch: nextState
                        }
                    ]
                });
                setIsTorchOn(nextState);
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Torch is not supported on this camera lens");
            }
        }
    };
    // Flip Camera (Front / Back)
    const flipCamera = ()=>{
        setFacingMode((prev)=>prev === "user" ? "environment" : "user");
    };
    // Start in-app recording stream from Canvas + Audio (Bakes AR masks and filters in!)
    const startRecordingStream = async ()=>{
        let recordingStream = null;
        if (canvasRef.current && typeof canvasRef.current.captureStream === "function") {
            try {
                var _this;
                const canvasStream = canvasRef.current.captureStream(30);
                const audioTracks = ((_this = mediaStreamRef.current || cameraStream) === null || _this === void 0 ? void 0 : _this.getAudioTracks()) || [];
                audioTracks.forEach((t)=>canvasStream.addTrack(t));
                recordingStream = canvasStream;
            } catch (e) {
                recordingStream = mediaStreamRef.current || cameraStream;
            }
        } else {
            recordingStream = mediaStreamRef.current || cameraStream;
        }
        if (!recordingStream) return;
        recordedChunksRef.current = [];
        const mimeTypes = [
            "video/mp4",
            "video/webm;codecs=vp9,opus",
            "video/webm;codecs=vp8,opus",
            "video/webm"
        ];
        let chosenMime = "";
        for (const mime of mimeTypes){
            if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime)) {
                chosenMime = mime;
                break;
            }
        }
        try {
            const options = {
                mimeType: chosenMime || undefined,
                videoBitsPerSecond: 8_000_000,
                audioBitsPerSecond: 128_000
            };
            const recorder = new MediaRecorder(recordingStream, options);
            recorder.ondataavailable = (e)=>{
                if (e.data && e.data.size > 0) {
                    recordedChunksRef.current.push(e.data);
                }
            };
            recorder.onstop = ()=>{
                const blob = new Blob(recordedChunksRef.current, {
                    type: chosenMime || "video/mp4"
                });
                const fileExt = chosenMime.includes("mp4") ? "mp4" : "webm";
                const file = new File([
                    blob
                ], `reel_rec_${Date.now()}.${fileExt}`, {
                    type: blob.type
                });
                const url = URL.createObjectURL(blob);
                setRecordedBlobUrl(url);
                setRecordedFile(file);
                setIsReviewing(true);
                setIsRecording(false);
                stopCameraStream();
            };
            recorder.start(250);
            mediaRecorderRef.current = recorder;
            setIsRecording(true);
            setRecordedTime(0);
            // Duration ticker
            let elapsed = 0;
            timerIntervalRef.current = setInterval(()=>{
                elapsed += 1;
                setRecordedTime(elapsed);
                if (elapsed >= selectedDuration) {
                    stopRecording();
                }
            }, 1000);
        } catch (err) {
            console.warn("MediaRecorder error:", err);
        }
    };
    // Trigger recording (with optional countdown)
    const handleRecordClick = async ()=>{
        if (isRecording) {
            stopRecording();
            return;
        }
        if (countdownSeconds > 0) {
            let count = countdownSeconds;
            setActiveCountdown(count);
            const countdownInterval = setInterval(()=>{
                count -= 1;
                if (count <= 0) {
                    clearInterval(countdownInterval);
                    setActiveCountdown(null);
                    startRecordingStream();
                } else {
                    setActiveCountdown(count);
                }
            }, 1000);
        } else {
            await startRecordingStream();
        }
    };
    // Stop recording
    const stopRecording = ()=>{
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            mediaRecorderRef.current.stop();
        }
    };
    // Reset to re-record
    const handleRetake = ()=>{
        if (recordedBlobUrl) {
            URL.revokeObjectURL(recordedBlobUrl);
        }
        setRecordedBlobUrl(null);
        setRecordedFile(null);
        setIsReviewing(false);
        setRecordedTime(0);
        initCamera();
    };
    // Accept and send to upload screen
    const handleAcceptVideo = ()=>{
        if (recordedFile) {
            onCaptureVideo(recordedFile, soundTitle);
            onClose();
        }
    };
    // Direct video file selection from camera/gallery
    const handleVideoSelect = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file && file.type.startsWith("video/")) {
            const url = URL.createObjectURL(file);
            setRecordedBlobUrl(url);
            setRecordedFile(file);
            setIsReviewing(true);
            stopCameraStream();
        } else if (file) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a valid video file");
        }
    };
    if (!isOpen) return null;
    // Compute CSS filter string via ReelsFilterDrawer utility
    const activeCssFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsFilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterCssString"])(selectedFilter, filterIntensity, filterBeauty > 0 ? filterBeauty : beautyFilter ? 50 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[300] bg-black text-white flex flex-col w-full h-full overflow-hidden select-none animate-in fade-in duration-300",
        children: [
            !isReviewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoPreviewRef,
                        autoPlay: true,
                        playsInline: true,
                        muted: true,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        style: {
                            filter: activeCssFilter
                        },
                        className: "absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 553,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsFilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelsCameraOverlay"], {
                        glow: filterGlow,
                        vignette: filterVignette
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this),
                    isCameraLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 backdrop-blur-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 565,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-white uppercase tracking-wider",
                                children: "Starting HD Camera..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 566,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 564,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 right-0 h-1.5 bg-white/20 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 transition-all duration-300 ease-linear",
                            style: {
                                width: `${recordedTime / selectedDuration * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                            lineNumber: 572,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-30 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] px-4 flex items-center justify-between pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all shadow-md cursor-pointer hover:bg-black/70",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openSoundSelector,
                                className: "px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 flex items-center gap-2 text-xs font-bold text-white hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-indigo-950/40 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MusicNote01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MusicNote01Icon"], {
                                        size: 15,
                                        className: "text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate max-w-[130px]",
                                        children: soundTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this),
                            hasTorch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTorch,
                                className: `w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center text-white active:scale-95 transition-all shadow-md cursor-pointer ${isTorchOn ? "bg-amber-400 text-black border-amber-300 shadow-amber-400/30" : "bg-black/50 border-white/20"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                    lineNumber: 611,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 603,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    !showFiltersPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-3 top-20 z-30 flex flex-col items-center gap-4 pointer-events-auto animate-in fade-in duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: flipCamera,
                                className: "flex flex-col items-center gap-1 text-white active:scale-90 transition-transform cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md hover:bg-black/70",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                            lineNumber: 628,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 627,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold drop-shadow-md",
                                        children: "Flip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 630,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 622,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleSpeedPanel,
                                className: "flex flex-col items-center gap-1 text-white active:scale-90 transition-transform cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center shadow-md ${selectedSpeed !== 1.0 ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-indigo-400 text-white shadow-indigo-600/40" : "bg-black/50 border-white/20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-black",
                                            children: [
                                                selectedSpeed,
                                                "x"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                            lineNumber: 645,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold drop-shadow-md",
                                        children: "Speed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 634,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    const next = countdownSeconds === 0 ? 3 : countdownSeconds === 3 ? 10 : 0;
                                    setCountdownSeconds(next);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(next === 0 ? "Timer Off" : `Timer set to ${next}s`);
                                },
                                className: "flex flex-col items-center gap-1 text-white active:scale-90 transition-transform cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center shadow-md ${countdownSeconds > 0 ? "bg-blue-600 border-blue-400 text-white shadow-blue-600/40" : "bg-black/50 border-white/20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Timer01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                            lineNumber: 666,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold drop-shadow-md",
                                        children: countdownSeconds > 0 ? `${countdownSeconds}s` : "Timer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 668,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 651,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openFiltersPanel,
                                className: "flex flex-col items-center gap-1 text-white active:scale-90 transition-transform cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center shadow-md ${selectedFilter.id !== "normal" || selectedARSticker !== "none" ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-indigo-400 shadow-indigo-600/40" : "bg-black/50 border-white/20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                            lineNumber: 685,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 679,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold drop-shadow-md",
                                        children: "Effects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 687,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 674,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setBeautyFilter((p)=>!p);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(!beautyFilter ? "✨ Beauty smoothing enabled" : "Beauty off");
                                },
                                className: "flex flex-col items-center gap-1 text-white active:scale-90 transition-transform cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center shadow-md ${beautyFilter ? "bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 border-indigo-300 shadow-indigo-600/40" : "bg-black/50 border-white/20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Sun01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sun01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                            lineNumber: 705,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 699,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold drop-shadow-md",
                                        children: "Beauty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 707,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 691,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 620,
                        columnNumber: 13
                    }, this),
                    showSpeedPanel && !showFiltersPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-16 z-40 bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-1.5 flex gap-1 animate-in fade-in slide-in-from-right-4 duration-200 shadow-xl shadow-indigo-950/50",
                        children: SPEED_OPTIONS.map((spd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setSelectedSpeed(spd.value);
                                    setShowSpeedPanel(false);
                                },
                                className: `px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${selectedSpeed === spd.value ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm" : "text-white/80 hover:bg-white/15"}`,
                                children: spd.label
                            }, spd.label, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 716,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 714,
                        columnNumber: 13
                    }, this),
                    activeCountdown !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center animate-in zoom-in-50 duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-8xl font-black text-white drop-shadow-2xl animate-ping",
                                children: activeCountdown
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 737,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-white/80 mt-4 uppercase tracking-widest",
                                children: "Get Ready..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 740,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 736,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-30 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] px-4 flex flex-col items-center gap-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsFilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelsFilterDrawer"], {
                                isOpen: showFiltersPanel,
                                onClose: ()=>setShowFiltersPanel(false),
                                selectedFilter: selectedFilter,
                                onSelectFilter: (flt)=>setSelectedFilter(flt),
                                selectedARSticker: selectedARSticker,
                                onSelectARSticker: (stk)=>setSelectedARSticker(stk),
                                onIntensityChange: (val)=>setFilterIntensity(val),
                                onBeautyChange: (val)=>setFilterBeauty(val),
                                onGlowChange: (val)=>setFilterGlow(val),
                                onVignetteChange: (val)=>setFilterVignette(val)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 750,
                                columnNumber: 13
                            }, this),
                            !isRecording && !showFiltersPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-indigo-500/25 rounded-full px-1.5 py-1",
                                children: DURATION_OPTIONS.map((dur)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSelectedDuration(dur),
                                        className: `px-3.5 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedDuration === dur ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs" : "text-white/70 hover:text-white"}`,
                                        children: [
                                            dur,
                                            "s"
                                        ]
                                    }, dur, true, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 767,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 765,
                                columnNumber: 15
                            }, this),
                            isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-mono font-bold animate-pulse shadow-lg shadow-red-600/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-white animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 785,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "00:",
                                            recordedTime.toString().padStart(2, "0"),
                                            " / 00:",
                                            selectedDuration.toString().padStart(2, "0")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 786,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 784,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex items-center justify-between max-w-xs px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col items-center gap-1 text-white active:scale-95 transition-transform cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg hover:bg-white/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                                    size: 22,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-bold",
                                                children: "Gallery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 803,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "video/*",
                                                onChange: handleVideoSelect,
                                                className: "sr-only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 804,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 797,
                                        columnNumber: 15
                                    }, this),
                                    cameraStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleRecordClick,
                                        className: "relative flex items-center justify-center p-2 rounded-full active:scale-95 transition-transform cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isRecording ? "border-red-500 scale-110 shadow-lg shadow-red-500/50" : "border-white/80 hover:border-white"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `transition-all duration-300 ${isRecording ? "w-8 h-8 rounded-md bg-red-600 shadow-md animate-pulse" : "w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-indigo-600 shadow-xl"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 825,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                            lineNumber: 819,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 814,
                                        columnNumber: 17
                                    }, this) : /* Direct Native Hardware Front Camera trigger if stream disconnected */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "relative flex items-center justify-center p-2 rounded-full active:scale-95 transition-transform cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-full border-4 border-white/80 hover:border-white flex items-center justify-center transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-indigo-600 shadow-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                        size: 24,
                                                        className: "text-white animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 836,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "video/*",
                                                capture: "user",
                                                onChange: handleVideoSelect,
                                                className: "sr-only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 841,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 835,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: flipCamera,
                                        disabled: isRecording,
                                        className: "flex flex-col items-center gap-1 text-white active:scale-95 transition-transform disabled:opacity-30 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg hover:bg-white/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                    size: 22,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 858,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-bold",
                                                children: "Flip"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                                lineNumber: 861,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 794,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 747,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this) : /* ════════════════ STAGE 2: POST-RECORDING INSTANT REVIEW ════════════════ */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 w-full h-full flex flex-col justify-between overflow-hidden bg-black animate-in fade-in duration-300",
                children: [
                    recordedBlobUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: recordedPlaybackRef,
                        src: recordedBlobUrl,
                        autoPlay: true,
                        loop: true,
                        muted: isReviewMuted,
                        playsInline: true,
                        onClick: ()=>{
                            if (recordedPlaybackRef.current) {
                                if (isReviewPlaying) {
                                    recordedPlaybackRef.current.pause();
                                    setIsReviewPlaying(false);
                                } else {
                                    recordedPlaybackRef.current.play();
                                    setIsReviewPlaying(true);
                                }
                            }
                        },
                        className: "absolute inset-0 w-full h-full object-cover z-0 cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 875,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-30 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] px-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleRetake,
                                className: "px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                        size: 15,
                                        className: "text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 904,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Retake"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 905,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 899,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-xs font-bold shadow-md",
                                children: [
                                    "🎵 ",
                                    soundTitle
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsReviewMuted((m)=>!m),
                                className: "w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 cursor-pointer shadow-lg",
                                children: isReviewMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeMute01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeMute01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                    lineNumber: 917,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                    lineNumber: 917,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 898,
                        columnNumber: 11
                    }, this),
                    !isReviewPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                size: 28,
                                className: "fill-white ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 925,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                            lineNumber: 924,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 923,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-30 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] px-6 flex items-center justify-between gap-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleRetake,
                                className: "flex-1 py-3.5 rounded-2xl bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold text-xs border border-white/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 937,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Discard & Retake"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 938,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 932,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAcceptVideo,
                                className: "flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-90 active:scale-95 text-white font-black text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Use Video"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 946,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                        lineNumber: 947,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                                lineNumber: 941,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                        lineNumber: 931,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                lineNumber: 871,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsSoundSelectorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelsSoundSelectorModal"], {
                isOpen: isSoundSelectorOpen,
                onClose: ()=>setIsSoundSelectorOpen(false),
                selectedSound: soundTitle,
                onSelectSound: (title)=>setSoundTitle(title)
            }, void 0, false, {
                fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
                lineNumber: 955,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reels/ReelsCameraStudio.tsx",
        lineNumber: 537,
        columnNumber: 5
    }, this);
}
_s(ReelsCameraStudio, "FqLSKA/lDRhFQnATM26NI/RUPRk=");
_c = ReelsCameraStudio;
var _c;
__turbopack_context__.k.register(_c, "ReelsCameraStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reels/UploadReelModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadReelModal",
    ()=>UploadReelModal,
    "UploadReelScreen",
    ()=>UploadReelModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Upload01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Video01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeMute01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeMute01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlayIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RadioIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RadioIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useReelsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsCameraStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reels/ReelsCameraStudio.tsx [app-client] (ecmascript)");
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
const QUICK_TAGS = [
    "#Memories",
    "#Viral",
    "#PingDart",
    "#FYP",
    "#Trending",
    "#Travel"
];
const QUICK_EMOJIS = [
    "🔥",
    "✨",
    "❤️",
    "😂",
    "🚀",
    "🎬",
    "🏖️",
    "🎉"
];
function UploadReelModal({ isOpen, onClose, onSuccess, isEmbedded = false, targetTab, communityId, communityName }) {
    var _user_fullName;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const activeTabName = targetTab || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("tab")) || "Reels";
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { addReel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelsStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Wizard Step: 1 = Choose Video & Sound | 2 = Caption, Cover & Details
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Next-Level Camera Recording Studio Screen
    const [isCameraStudioOpen, setIsCameraStudioOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoPreview, setVideoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reelTitle, setReelTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("For You");
    const [keywords, setKeywords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "#Viral",
        "#Trending",
        "#Reel"
    ]);
    const [keywordInput, setKeywordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [soundTrack, setSoundTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Original Sound");
    const [privacy, setPrivacy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("public");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [autoPostCommunity, setAutoPostCommunity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Community selection & creation state
    const [selectedCommunity, setSelectedCommunity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Public Community Feed");
    const [customCommunityInput, setCustomCommunityInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCustomCommunity, setIsCustomCommunity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userCommunities, setUserCommunities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // OpenStreetMap location search state
    const [locationSuggestions, setLocationSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFetchingLocations, setIsFetchingLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLocationDropdown, setShowLocationDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cover / Thumbnail selector state
    const [generatedThumbnails, setGeneratedThumbnails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedThumbnail, setSelectedThumbnail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const customCoverInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Playback states
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileDetails, setFileDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!isOpen) return null;
    // Extract frame snapshots from video for Instagram-style cover selection
    const extractVideoThumbnails = (videoUrl)=>{
        try {
            const tempVideo = document.createElement("video");
            tempVideo.src = videoUrl;
            tempVideo.crossOrigin = "anonymous";
            tempVideo.preload = "metadata";
            tempVideo.onloadedmetadata = ()=>{
                const duration = tempVideo.duration || 5;
                const timestamps = [
                    0.1,
                    duration * 0.25,
                    duration * 0.5,
                    duration * 0.75,
                    duration * 0.9
                ];
                const frames = [];
                let processed = 0;
                timestamps.forEach((time, index)=>{
                    const snapshotVideo = document.createElement("video");
                    snapshotVideo.src = videoUrl;
                    snapshotVideo.currentTime = time;
                    snapshotVideo.onseeked = ()=>{
                        const canvas = document.createElement("canvas");
                        canvas.width = 180;
                        canvas.height = 320;
                        const ctx = canvas.getContext("2d");
                        if (ctx) {
                            ctx.drawImage(snapshotVideo, 0, 0, canvas.width, canvas.height);
                            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
                            frames[index] = dataUrl;
                        }
                        processed++;
                        if (processed === timestamps.length) {
                            const validFrames = frames.filter(Boolean);
                            setGeneratedThumbnails(validFrames);
                            if (validFrames.length > 0) {
                                setSelectedThumbnail(validFrames[0]);
                            }
                        }
                    };
                });
            };
        } catch (e) {
            console.warn("Thumbnail extraction notice:", e);
        }
    };
    const handleFileSelect = (selectedFile)=>{
        if (!selectedFile.type.startsWith("video/")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a valid video file (MP4, MOV, WebM)");
            return;
        }
        const sizeMb = (selectedFile.size / (1024 * 1024)).toFixed(1);
        if (selectedFile.size > 250 * 1024 * 1024) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Video file must be under 250MB");
            return;
        }
        setFile(selectedFile);
        setFileDetails({
            name: selectedFile.name,
            size: `${sizeMb} MB`
        });
        const previewUrl = URL.createObjectURL(selectedFile);
        setVideoPreview(previewUrl);
        setIsPlaying(true);
        extractVideoThumbnails(previewUrl);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Loaded video: ${selectedFile.name}`);
    };
    const handleInputChange = (e)=>{
        var _e_target_files;
        const selected = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (selected) handleFileSelect(selected);
    };
    const handleCapturedVideoFromStudio = (capturedFile, soundName)=>{
        const sizeMb = (capturedFile.size / (1024 * 1024)).toFixed(1);
        setFile(capturedFile);
        setFileDetails({
            name: capturedFile.name,
            size: `${sizeMb} MB`
        });
        const previewUrl = URL.createObjectURL(capturedFile);
        setVideoPreview(previewUrl);
        if (soundName) setSoundTrack(soundName);
        setIsPlaying(true);
        extractVideoThumbnails(previewUrl);
        setStep(2); // Automatically advance to caption & details!
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🎬 Reel recorded! Add your caption and publish.");
    };
    const handleCustomCoverUpload = (e)=>{
        var _e_target_files;
        const coverFile = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (coverFile && coverFile.type.startsWith("image/")) {
            const coverUrl = URL.createObjectURL(coverFile);
            setSelectedThumbnail(coverUrl);
            setGeneratedThumbnails((prev)=>[
                    coverUrl,
                    ...prev
                ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Custom cover thumbnail updated! 📸");
        }
    };
    const handleAddKeyword = (kw)=>{
        const cleanKw = kw.trim().startsWith("#") ? kw.trim() : `#${kw.trim()}`;
        if (cleanKw && !keywords.includes(cleanKw)) {
            setKeywords((prev)=>[
                    ...prev,
                    cleanKw
                ]);
            setKeywordInput("");
        }
    };
    const handleRemoveKeyword = (kw)=>{
        setKeywords((prev)=>prev.filter((k)=>k !== kw));
    };
    // Debounced OpenStreetMap Nominatim location autocomplete
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadReelModal.useEffect": ()=>{
            if (!location || location.trim().length < 2) {
                setLocationSuggestions([]);
                setShowLocationDropdown(false);
                return;
            }
            const timer = setTimeout({
                "UploadReelModal.useEffect.timer": async ()=>{
                    setIsFetchingLocations(true);
                    try {
                        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location.trim())}&limit=6&addressdetails=1`);
                        if (res.ok) {
                            const data = await res.json();
                            const suggestions = data.map({
                                "UploadReelModal.useEffect.timer.suggestions": (item)=>{
                                    var _item_address, _item_address1, _item_address2, _item_address3, _item_address4, _item_address5;
                                    const parts = [];
                                    const cityName = ((_item_address = item.address) === null || _item_address === void 0 ? void 0 : _item_address.city) || ((_item_address1 = item.address) === null || _item_address1 === void 0 ? void 0 : _item_address1.town) || ((_item_address2 = item.address) === null || _item_address2 === void 0 ? void 0 : _item_address2.village) || ((_item_address3 = item.address) === null || _item_address3 === void 0 ? void 0 : _item_address3.suburb) || item.name;
                                    if (cityName) parts.push(cityName);
                                    if ((_item_address4 = item.address) === null || _item_address4 === void 0 ? void 0 : _item_address4.state) parts.push(item.address.state);
                                    if ((_item_address5 = item.address) === null || _item_address5 === void 0 ? void 0 : _item_address5.country) parts.push(item.address.country);
                                    return parts.length > 0 ? parts.join(", ") : item.display_name;
                                }
                            }["UploadReelModal.useEffect.timer.suggestions"]);
                            const uniqueSuggestions = Array.from(new Set(suggestions));
                            setLocationSuggestions(uniqueSuggestions);
                            setShowLocationDropdown(uniqueSuggestions.length > 0);
                        }
                    } catch (e) {
                        console.warn("OpenStreetMap location search notice:", e);
                    } finally{
                        setIsFetchingLocations(false);
                    }
                }
            }["UploadReelModal.useEffect.timer"], 350);
            return ({
                "UploadReelModal.useEffect": ()=>clearTimeout(timer)
            })["UploadReelModal.useEffect"];
        }
    }["UploadReelModal.useEffect"], [
        location
    ]);
    // Fetch logged-in user's owned / admin communities & rooms
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadReelModal.useEffect": ()=>{
            const fetchUserCommunities = {
                "UploadReelModal.useEffect.fetchUserCommunities": async ()=>{
                    try {
                        const { api } = await __turbopack_context__.A("[project]/src/services/api.ts [app-client] (ecmascript, async loader)");
                        let rawRooms = [];
                        try {
                            var _res_data;
                            const res = await api.get("/chat");
                            if (res.data && Array.isArray(res.data)) {
                                rawRooms = res.data;
                            } else if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) && Array.isArray(res.data.data)) {
                                rawRooms = res.data.data;
                            }
                        } catch (e) {
                            const res2 = await api.get("/rooms");
                            if (res2.data && Array.isArray(res2.data)) {
                                rawRooms = res2.data;
                            }
                        }
                        const adminComms = rawRooms.filter({
                            "UploadReelModal.useEffect.fetchUserCommunities.adminComms": (r)=>{
                                const isCommunityType = r.type === "community" || r.type === "group" || r.type === "channel" || r.isGroup;
                                const isAdminRole = r.role === "admin" || r.role === "owner" || r.role === "creator" || r.isAdmin === true || (user === null || user === void 0 ? void 0 : user.id) && r.createdBy === user.id;
                                return isCommunityType && isAdminRole;
                            }
                        }["UploadReelModal.useEffect.fetchUserCommunities.adminComms"]).map({
                            "UploadReelModal.useEffect.fetchUserCommunities.adminComms": (r)=>({
                                    id: r.id,
                                    name: r.sender || r.name || r.title || "Community",
                                    avatarUrl: r.avatarUrl || r.avatar || r.bannerUrl || "/logo.png",
                                    isAdmin: true
                                })
                        }["UploadReelModal.useEffect.fetchUserCommunities.adminComms"]);
                        if (adminComms.length > 0) {
                            setUserCommunities(adminComms);
                            localStorage.setItem("ping_user_communities", JSON.stringify(adminComms));
                            if (!communityName) {
                                setSelectedCommunity(adminComms[0].name);
                                setIsCustomCommunity(false);
                            }
                        } else {
                            setIsCustomCommunity(true);
                        }
                    } catch (err) {
                        console.warn("User communities fetch notice:", err);
                    }
                }
            }["UploadReelModal.useEffect.fetchUserCommunities"];
            fetchUserCommunities();
        }
    }["UploadReelModal.useEffect"], [
        communityName,
        user === null || user === void 0 ? void 0 : user.id
    ]);
    const handleRemoveVideo = ()=>{
        setFile(null);
        setVideoPreview(null);
        setFileDetails(null);
    };
    const togglePlayPause = ()=>{
        if (!videoElementRef.current) return;
        if (isPlaying) {
            videoElementRef.current.pause();
            setIsPlaying(false);
        } else {
            videoElementRef.current.play();
            setIsPlaying(true);
        }
    };
    const toggleMute = ()=>{
        if (!videoElementRef.current) return;
        videoElementRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };
    const handlePublishReel = async ()=>{
        if (!file && !videoPreview) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select or record a video first");
            setStep(1);
            return;
        }
        setIsUploading(true);
        const loadingToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Uploading and publishing your reel...");
        try {
            var _user_email;
            const creatorName = (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split("@")[0]) || "You";
            const creatorAvatar = (user === null || user === void 0 ? void 0 : user.avatar) || "/logo.png";
            const finalCaption = caption.trim() || "Live Reel Memory ✨";
            const targetCommObj = userCommunities.find((c)=>c.name === selectedCommunity);
            const targetCommunityId = communityId || (targetCommObj === null || targetCommObj === void 0 ? void 0 : targetCommObj.id);
            const targetCommunityName = isCustomCommunity && customCommunityInput.trim() ? customCommunityInput.trim() : communityName || selectedCommunity || "Public Community Feed";
            const newReelItem = {
                id: `reel_${Date.now()}`,
                userName: creatorName,
                userAvatar: creatorAvatar,
                videoUrl: videoPreview || "",
                posterUrl: selectedThumbnail || generatedThumbnails[0] || creatorAvatar || "/logo.png",
                thumbnailUrl: selectedThumbnail || generatedThumbnails[0] || creatorAvatar || "/logo.png",
                caption: finalCaption,
                likes: 0,
                comments: 0,
                shares: 0,
                views: "0",
                viewCount: 0,
                songName: soundTrack || `Original Sound • ${creatorName}`,
                isUserUploaded: true,
                source: "user",
                addedBy: creatorName,
                status: "active",
                location: location || "Global",
                communityName: targetCommunityName !== "Public Community Feed" ? targetCommunityName : undefined,
                communityAvatar: (targetCommObj === null || targetCommObj === void 0 ? void 0 : targetCommObj.avatarUrl) || undefined,
                reach: 0,
                addedAt: new Date().toISOString()
            };
            // 1. Add Reel to Backend & Zustand Store
            await addReel(newReelItem, file);
            // 2. Auto-post to Public / Selected Community Feed
            if ((autoPostCommunity || activeTabName === "Communities") && "object" !== "undefined") {
                if (targetCommunityId && file) {
                    try {
                        const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                        const res = await chatApi.sendAttachment(Number(targetCommunityId), file, finalCaption, "reel", reelTitle || finalCaption, finalCaption, location);
                        if (res && (res.success || res.data)) {
                            const postedMsg = res.data || res;
                            window.dispatchEvent(new CustomEvent("community_post_created", {
                                detail: postedMsg
                            }));
                        }
                    } catch (err) {
                        console.warn("Community reel upload notice:", err);
                    }
                }
                const communityPost = {
                    id: `comm_post_${Date.now()}`,
                    roomId: targetCommunityId ? Number(targetCommunityId) : undefined,
                    text: finalCaption,
                    type: "reel",
                    mediaUrl: newReelItem.videoUrl,
                    data: {
                        fileUrl: newReelItem.videoUrl,
                        mediaUrl: newReelItem.videoUrl,
                        title: reelTitle || caption || "New Reel Shared",
                        description: finalCaption,
                        location: location || undefined
                    },
                    title: reelTitle || caption || "New Reel Shared",
                    description: finalCaption,
                    location: location || undefined,
                    createdAt: new Date().toISOString(),
                    sender: {
                        fullName: creatorName,
                        email: (user === null || user === void 0 ? void 0 : user.email) || "",
                        avatar: creatorAvatar
                    },
                    Room: {
                        id: targetCommunityId || undefined,
                        name: targetCommunityName,
                        avatarUrl: (targetCommObj === null || targetCommObj === void 0 ? void 0 : targetCommObj.avatarUrl) || "/logo.png"
                    }
                };
                window.dispatchEvent(new CustomEvent("community_post_created", {
                    detail: communityPost
                }));
                try {
                    const cached = JSON.parse(localStorage.getItem("ping_community_posts") || "[]");
                    cached.unshift(communityPost);
                    localStorage.setItem("ping_community_posts", JSON.stringify(cached.slice(0, 50)));
                } catch (e) {}
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingToast);
            if (activeTabName === "Communities") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🎉 Reel published under Communities live!");
                if (onSuccess) onSuccess(newReelItem);
                handleRemoveVideo();
                setCaption("");
                setStep(1);
                onClose();
            } else if (autoPostCommunity) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🎉 Reel published live to Communities!", {
                    action: {
                        label: "View in Communities ➔",
                        onClick: ()=>router.push("/user?tab=Communities")
                    }
                });
                if (onSuccess) onSuccess(newReelItem);
                handleRemoveVideo();
                setCaption("");
                setStep(1);
                onClose();
                setTimeout(()=>{
                    router.push("/user?tab=Communities");
                }, 300);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🎉 Reel published live!");
                if (onSuccess) onSuccess(newReelItem);
                handleRemoveVideo();
                setCaption("");
                setStep(1);
                onClose();
            }
        } catch (err) {
            console.error("Failed to publish reel:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(loadingToast);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to publish reel. Please check your connection.");
        } finally{
            setIsUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isEmbedded ? "relative w-full h-full min-h-[580px] bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white flex flex-col overflow-hidden select-none animate-in fade-in duration-200 border border-slate-200/80 dark:border-slate-800/80 shadow-lg" : "fixed inset-0 z-[250] bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white flex flex-col w-full h-full overflow-hidden select-none animate-in fade-in duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111c24] shrink-0 sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>step === 2 ? setStep(1) : onClose(),
                                                className: "p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                                title: "Back",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-black text-slate-900 dark:text-white tracking-tight",
                                                children: step === 1 ? "Step 1: Choose Video" : "Step 2: Caption & Publish"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>videoPreview || file ? setStep(2) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Please pick or record a video first"),
                                            disabled: !videoPreview && !file,
                                            className: "px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs shadow-sm shadow-indigo-600/20 flex items-center gap-1 transition-all disabled:opacity-40 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Next: Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handlePublishReel,
                                            disabled: isUploading,
                                            className: "px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs shadow-sm shadow-indigo-600/20 flex items-center gap-1 transition-all disabled:opacity-40 cursor-pointer",
                                            children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                lineNumber: 523,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Publish Reel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-slate-50/60 dark:bg-slate-900/60 px-4 py-2.5 flex items-center justify-center gap-3 select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStep(1),
                                        className: `px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${step === 1 ? "bg-indigo-600 text-white shadow-xs" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`,
                                        children: "1. Select Video"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 dark:text-slate-600 text-xs font-bold",
                                        children: "➔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (videoPreview || file) setStep(2);
                                            else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Please pick or record a video first");
                                        },
                                        className: `px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${step === 2 ? "bg-indigo-600 text-white shadow-xs" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`,
                                        children: "2. Caption & Share"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                        lineNumber: 550,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 w-full overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#f8fafc] dark:bg-[#0b141a] flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full ${isEmbedded ? "max-w-2xl lg:max-w-4xl" : "max-w-xl"} transition-all duration-300`,
                            children: [
                                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 my-auto min-h-[calc(100vh-250px)] flex flex-col justify-center animate-in fade-in slide-in-from-left-2 duration-200",
                                    children: [
                                        videoPreview ? /* 9:16 Vertical Video Preview */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-[340px] aspect-[9/16] max-h-[480px] rounded-3xl overflow-hidden bg-black border border-slate-300 dark:border-slate-800 shadow-xl relative flex flex-col items-center justify-center group mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    ref: videoElementRef,
                                                    src: videoPreview,
                                                    className: "w-full h-full object-contain mx-auto cursor-pointer",
                                                    autoPlay: true,
                                                    loop: true,
                                                    muted: isMuted,
                                                    playsInline: true,
                                                    onClick: togglePlayPause
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 21
                                                }, this),
                                                !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: togglePlayPause,
                                                    className: "absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                            size: 24,
                                                            className: "fill-white ml-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[14px] font-bold border border-white/20 flex items-center gap-1.5 shadow-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video01Icon"], {
                                                                    size: 12,
                                                                    className: "text-indigo-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 25
                                                                }, this),
                                                                (fileDetails === null || fileDetails === void 0 ? void 0 : fileDetails.size) || "Video Ready"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: toggleMute,
                                                            className: "w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 cursor-pointer hover:bg-black/80 transition-colors",
                                                            children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeMute01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeMute01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 36
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 600,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-20 pointer-events-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex-1 py-2.5 px-3 rounded-xl bg-black/75 backdrop-blur-md hover:bg-black/90 text-white text-xs font-bold border border-white/20 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Change Video"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 619,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "video/*",
                                                                    onChange: handleInputChange,
                                                                    className: "sr-only"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleRemoveVideo,
                                                            className: "w-10 h-10 rounded-xl bg-rose-600/90 backdrop-blur-md hover:bg-rose-600 text-white flex items-center justify-center cursor-pointer active:scale-95 transition-all shadow-xs",
                                                            title: "Remove Video",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                            lineNumber: 576,
                                            columnNumber: 19
                                        }, this) : /* Ultra-Premium Video Dropzone */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "w-full min-h-[320px] rounded-3xl border-2 border-dashed border-indigo-300/80 dark:border-indigo-700/60 hover:border-indigo-500 dark:hover:border-indigo-500 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 dark:from-[#111927] dark:via-[#0f172a] dark:to-[#1a1c2e] p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group shadow-sm hover:shadow-indigo-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                    size: 28
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 645,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0f172a] flex items-center justify-center shadow-xs",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                                    size: 10,
                                                                    className: "text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-extrabold text-slate-900 dark:text-white mb-1",
                                                        children: "Choose Video from Device"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 font-medium max-w-sm mb-4 leading-relaxed",
                                                        children: "Pick a video file from your phone or computer gallery, or record live using the studio camera"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 flex-wrap justify-center mb-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-[14px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs",
                                                                children: "MP4, MOV, WebM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-[14px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs",
                                                                children: "Max 250MB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 665,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-[14px] font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 shadow-2xs",
                                                                children: "9:16 Vertical Preferred"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "video/*",
                                                        onChange: handleInputChange,
                                                        className: "sr-only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center justify-center gap-3 w-full max-w-md pt-1 pointer-events-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `${isNative ? "flex-1" : "w-full max-w-xs"} py-3 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 cursor-pointer active:scale-95 transition-all`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                                                        size: 16,
                                                                        className: "text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Select Video File"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "video/*",
                                                                        onChange: handleInputChange,
                                                                        className: "sr-only"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 25
                                                            }, this),
                                                            isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setIsCameraStudioOpen(true);
                                                                },
                                                                className: "flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 cursor-pointer active:scale-95 transition-all",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                                                        size: 16,
                                                                        className: "text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Record Studio"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 703,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                lineNumber: 641,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                            lineNumber: 640,
                                            columnNumber: 19
                                        }, this),
                                        !isEmbedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-2 shadow-2xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RadioIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioIcon"], {
                                                                    size: 16,
                                                                    className: "text-indigo-600 dark:text-indigo-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Audio Track / Sound"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 717,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 715,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[14px] font-bold text-slate-400",
                                                            children: "Optional"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 719,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: soundTrack,
                                                    onChange: (e)=>setSoundTrack(e.target.value),
                                                    placeholder: "e.g. Original Sound • You",
                                                    className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                            lineNumber: 713,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                if (!videoPreview && !file) {
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select or record a video first");
                                                    return;
                                                }
                                                setStep(2);
                                            },
                                            disabled: !videoPreview && !file,
                                            className: "w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-[0.99] text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-40 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Continue to Details & Publish"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                            lineNumber: 732,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this),
                                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 pt-2 pb-10 animate-in fade-in slide-in-from-right-2 duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `grid ${isEmbedded ? "grid-cols-1 md:grid-cols-12 gap-6" : "grid-cols-1 gap-5"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${isEmbedded ? "md:col-span-5" : "w-full"} space-y-4`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full max-w-[300px] aspect-[9/16] max-h-[420px] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black border-2 border-indigo-500/30 dark:border-indigo-500/50 shadow-2xl relative flex items-center justify-center mx-auto group select-none transition-all",
                                                        children: [
                                                            selectedThumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: selectedThumbnail,
                                                                alt: "Reel Cover Preview",
                                                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 25
                                                            }, this) : videoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                ref: videoElementRef,
                                                                src: videoPreview,
                                                                className: "w-full h-full object-contain mx-auto cursor-pointer group-hover:scale-105 transition-transform duration-500",
                                                                autoPlay: true,
                                                                loop: true,
                                                                muted: isMuted,
                                                                playsInline: true,
                                                                onClick: togglePlayPause
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-white text-xs font-bold",
                                                                children: "No Video Selected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 781,
                                                                columnNumber: 25
                                                            }, this),
                                                            !isPlaying && videoPreview && !selectedThumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: togglePlayPause,
                                                                className: "absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                                                        size: 20,
                                                                        className: "fill-white ml-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 790,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 785,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[14px] font-bold border border-white/20 flex items-center gap-1.5 shadow-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video01Icon"], {
                                                                                size: 12,
                                                                                className: "text-indigo-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 798,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            selectedThumbnail ? "Cover Image Active" : "Live Video Preview"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 797,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-2 py-0.5 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-wider shadow-xs",
                                                                                children: category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 803,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            videoPreview && !selectedThumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: toggleMute,
                                                                                className: "w-7 h-7 rounded-full bg-black/65 backdrop-blur-md text-white flex items-center justify-center border border-white/20 cursor-pointer hover:bg-black/80 transition-colors",
                                                                                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeMute01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeMute01Icon"], {
                                                                                    size: 13
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 812,
                                                                                    columnNumber: 42
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                                                                    size: 13
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 812,
                                                                                    columnNumber: 67
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 807,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-3.5 left-3.5 right-3.5 text-white z-20 pointer-events-none space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-0.5 shrink-0 shadow-xs",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: (user === null || user === void 0 ? void 0 : user.avatar) || "/logo.png",
                                                                                    alt: "Avatar",
                                                                                    className: "w-full h-full rounded-full object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 825,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 824,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-bold text-white truncate drop-shadow-sm",
                                                                                children: [
                                                                                    "@",
                                                                                    (user === null || user === void 0 ? void 0 : (_user_fullName = user.fullName) === null || _user_fullName === void 0 ? void 0 : _user_fullName.toLowerCase().replace(/\s+/g, "")) || "you"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 831,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 823,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-xs font-extrabold line-clamp-2 leading-snug text-white drop-shadow-md",
                                                                        children: reelTitle || caption || "Your Reel Caption Preview..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 836,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 pt-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[14px] font-bold text-indigo-200 bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1",
                                                                                children: [
                                                                                    "🎵 ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "truncate max-w-[120px]",
                                                                                        children: soundTrack
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 842,
                                                                                        columnNumber: 32
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 841,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[14px] font-bold text-slate-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1",
                                                                                children: [
                                                                                    "📍 ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "truncate max-w-[80px]",
                                                                                        children: location
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 846,
                                                                                        columnNumber: 34
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 845,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-3 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                                                size: 14,
                                                                                className: "text-indigo-600 dark:text-indigo-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 857,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Reel Cover / Thumbnail"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 858,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            var _customCoverInputRef_current;
                                                                            return (_customCoverInputRef_current = customCoverInputRef.current) === null || _customCoverInputRef_current === void 0 ? void 0 : _customCoverInputRef_current.click();
                                                                        },
                                                                        className: "text-[14px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer",
                                                                        children: "+ Custom Image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 855,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar",
                                                                children: generatedThumbnails.map((thumb, idx)=>{
                                                                    const isSelected = selectedThumbnail === thumb;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setSelectedThumbnail(thumb),
                                                                        className: `w-14 h-20 rounded-xl overflow-hidden border-2 shrink-0 relative transition-all cursor-pointer ${isSelected ? "border-indigo-600 ring-2 ring-indigo-500/30 scale-105 shadow-md" : "border-slate-200 dark:border-slate-700 opacity-70 hover:opacity-100"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: thumb,
                                                                                alt: `Frame ${idx}`,
                                                                                className: "w-full h-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 883,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[8px] font-bold",
                                                                                children: "✓"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 885,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 874,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: customCoverInputRef,
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleCustomCoverUpload,
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 894,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 854,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setStep(1),
                                                        className: "w-full py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer transition-colors shadow-2xs",
                                                        children: "← Change Video File"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                lineNumber: 759,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${isEmbedded ? "md:col-span-7" : "w-full"} space-y-4`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-2 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 block",
                                                                children: "Reel Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: reelTitle,
                                                                onChange: (e)=>setReelTitle(e.target.value),
                                                                placeholder: "e.g. Epic Sunset Memory 🌅",
                                                                className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 920,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 916,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-2 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 block",
                                                                children: "Category / Feed Mood"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 flex-wrap",
                                                                children: [
                                                                    "For You",
                                                                    "Trending",
                                                                    "Romantic",
                                                                    "Comedy & Memes",
                                                                    "Dance & Beats",
                                                                    "Gym & Motivation",
                                                                    "Peace & Nature"
                                                                ].map((cat)=>{
                                                                    const isSelected = category === cat;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setCategory(cat),
                                                                        className: `px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 ${isSelected ? "bg-indigo-600 text-white shadow-xs" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                                                        children: cat
                                                                    }, cat, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 938,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 934,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-3 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-xs font-extrabold text-slate-800 dark:text-slate-200",
                                                                        children: "Caption & Description"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 957,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[14px] text-slate-400 font-mono",
                                                                        children: [
                                                                            caption.length,
                                                                            "/1000"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 960,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 3,
                                                                value: caption,
                                                                onChange: (e)=>setCaption(e.target.value),
                                                                maxLength: 1000,
                                                                placeholder: "Write a caption, tag friends... ✨",
                                                                className: "w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 965,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar",
                                                                children: QUICK_EMOJIS.map((emoji, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setCaption((prev)=>prev + emoji),
                                                                        className: "w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm flex items-center justify-center shrink-0 cursor-pointer transition-colors active:scale-95",
                                                                        children: emoji
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 977,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1.5 pt-1",
                                                                children: QUICK_TAGS.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            if (!caption.includes(tag)) {
                                                                                setCaption((prev)=>prev ? `${prev} ${tag}` : tag);
                                                                            }
                                                                        },
                                                                        className: `px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-all active:scale-95 ${caption.includes(tag) ? "bg-indigo-600 text-white shadow-2xs" : "bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-700"}`,
                                                                        children: tag
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 991,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-3 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 block",
                                                                children: "Search Keywords & Tags"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: keywordInput,
                                                                        onChange: (e)=>setKeywordInput(e.target.value),
                                                                        onKeyDown: (e)=>{
                                                                            if (e.key === "Enter") {
                                                                                e.preventDefault();
                                                                                handleAddKeyword(keywordInput);
                                                                            }
                                                                        },
                                                                        placeholder: "Add keyword (e.g. #travel)...",
                                                                        className: "flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1017,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleAddKeyword(keywordInput),
                                                                        className: "px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer transition-colors",
                                                                        children: "+ Add Tag"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1030,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1016,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1.5",
                                                                children: keywords.map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-[11px] font-bold",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: kw
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1046,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleRemoveKeyword(kw),
                                                                                className: "w-3.5 h-3.5 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800 flex items-center justify-center text-[14px] cursor-pointer",
                                                                                children: "✕"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1047,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, kw, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1042,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1040,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 21
                                                    }, this),
                                                    (()=>{
                                                        const activeComm = userCommunities.find((c)=>c.name === selectedCommunity);
                                                        const activeCommLogo = isCustomCommunity ? "/logo.png" : (activeComm === null || activeComm === void 0 ? void 0 : activeComm.avatarUrl) || "/logo.png";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-r from-indigo-50/80 via-white to-blue-50/80 dark:from-indigo-950/40 dark:via-[#111c24] dark:to-blue-950/40 border border-indigo-200/80 dark:border-indigo-800/80 rounded-2xl p-4 space-y-3 shadow-2xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs border border-indigo-300 dark:border-indigo-700 overflow-hidden",
                                                                                    children: activeCommLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        src: activeCommLogo,
                                                                                        alt: "Community Logo",
                                                                                        className: "w-full h-full object-cover",
                                                                                        onError: (e)=>{
                                                                                            e.target.src = "/logo.png";
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 1072,
                                                                                        columnNumber: 35
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                                                                        size: 18
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 1081,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 1070,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "text-xs font-extrabold text-slate-900 dark:text-white",
                                                                                            children: "Post to Community Feed"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                            lineNumber: 1085,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[14px] text-slate-500 dark:text-slate-400 font-medium",
                                                                                            children: "Select or create a community to share your Reel"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                            lineNumber: 1088,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 1084,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1069,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: autoPostCommunity,
                                                                            onChange: (e)=>setAutoPostCommunity(e.target.checked),
                                                                            className: "w-4 h-4 accent-indigo-600 cursor-pointer rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1094,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 1068,
                                                                    columnNumber: 27
                                                                }, this),
                                                                autoPostCommunity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-2 border-t border-indigo-100 dark:border-indigo-900/50 space-y-2.5 animate-in fade-in duration-150",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 block",
                                                                            children: "Target Community / Group:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1105,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: isCustomCommunity ? "custom" : selectedCommunity,
                                                                            onChange: (e)=>{
                                                                                if (e.target.value === "custom") {
                                                                                    setIsCustomCommunity(true);
                                                                                } else {
                                                                                    setIsCustomCommunity(false);
                                                                                    setSelectedCommunity(e.target.value);
                                                                                }
                                                                            },
                                                                            className: "w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-extrabold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer shadow-2xs",
                                                                            children: [
                                                                                userCommunities.map((comm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: comm.name,
                                                                                        children: [
                                                                                            "👑 ",
                                                                                            comm.name,
                                                                                            " (Admin)"
                                                                                        ]
                                                                                    }, comm.id, true, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 1123,
                                                                                        columnNumber: 35
                                                                                    }, this)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "custom",
                                                                                    children: "➕ Create New Community..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 1129,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1109,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        !isCustomCommunity && activeComm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2.5 p-2 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 animate-in fade-in duration-150",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-7 h-7 rounded-lg overflow-hidden border border-indigo-200 dark:border-indigo-800 shrink-0",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        src: activeComm.avatarUrl || "/logo.png",
                                                                                        alt: activeComm.name,
                                                                                        className: "w-full h-full object-cover",
                                                                                        onError: (e)=>{
                                                                                            e.target.src = "/logo.png";
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 1136,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 1135,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 truncate flex-1",
                                                                                    children: activeComm.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 1145,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[14px] font-black shrink-0",
                                                                                    children: "👑 Admin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                    lineNumber: 1148,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1134,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        isCustomCommunity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 pt-1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: customCommunityInput,
                                                                                onChange: (e)=>setCustomCommunityInput(e.target.value),
                                                                                placeholder: "Type new community name (e.g. Cyberpunk Gaming)...",
                                                                                className: "flex-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-700 text-xs font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1157,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1156,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 1104,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                            lineNumber: 1067,
                                                            columnNumber: 25
                                                        }, this);
                                                    })(),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-2 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-extrabold text-slate-800 dark:text-slate-200 block",
                                                                children: "Audience Privacy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1174,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-3 gap-2",
                                                                children: [
                                                                    {
                                                                        id: "public",
                                                                        label: "Public",
                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"]
                                                                    },
                                                                    {
                                                                        id: "friends",
                                                                        label: "Friends",
                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"]
                                                                    },
                                                                    {
                                                                        id: "private",
                                                                        label: "Private",
                                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"]
                                                                    }
                                                                ].map((item)=>{
                                                                    const isSelected = privacy === item.id;
                                                                    const Icon = item.icon;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setPrivacy(item.id),
                                                                        className: `p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 active:scale-95 ${isSelected ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600 font-extrabold shadow-2xs" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1195,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs",
                                                                                children: item.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1196,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, item.id, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1186,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1177,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 space-y-2 shadow-2xs relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                                                size: 16,
                                                                                className: "text-indigo-600 dark:text-indigo-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1207,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Location Tag (OpenStreetMap)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1208,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1206,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    isFetchingLocations && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3.5 h-3.5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: location,
                                                                        onChange: (e)=>{
                                                                            setLocation(e.target.value);
                                                                            setShowLocationDropdown(true);
                                                                        },
                                                                        onFocus: ()=>{
                                                                            if (locationSuggestions.length > 0) setShowLocationDropdown(true);
                                                                        },
                                                                        placeholder: "Search location (e.g. Hyderabad, London, Tokyo)...",
                                                                        className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1216,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    showLocationDropdown && locationSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 max-h-48 overflow-y-auto animate-in fade-in duration-150",
                                                                        children: locationSuggestions.map((place, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>{
                                                                                    setLocation(place);
                                                                                    setShowLocationDropdown(false);
                                                                                },
                                                                                className: "w-full text-left px-3.5 py-2.5 hover:bg-indigo-50 dark:hover:bg-slate-800/80 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 cursor-pointer transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                                                        size: 14,
                                                                                        className: "text-indigo-500 shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 1243,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "truncate",
                                                                                        children: place
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                        lineNumber: 1244,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                                lineNumber: 1234,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                        lineNumber: 1232,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1215,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setStep(1),
                                                                className: "flex-1 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700 cursor-pointer shadow-2xs transition-all active:scale-95",
                                                                children: "← Back"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handlePublishReel,
                                                                disabled: isUploading,
                                                                className: "flex-2 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-[0.99] text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-40 cursor-pointer",
                                                                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                    lineNumber: 1269,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1272,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Publish Reel Live"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                            lineNumber: 1273,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                                lineNumber: 1262,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                                lineNumber: 913,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                    lineNumber: 753,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: "video/*",
                                    onChange: handleInputChange,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: cameraInputRef,
                                    type: "file",
                                    accept: "video/*",
                                    capture: "user",
                                    onChange: handleInputChange,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                                    lineNumber: 1295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                lineNumber: 480,
                columnNumber: 7
            }, this),
            isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reels$2f$ReelsCameraStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelsCameraStudio"], {
                isOpen: isCameraStudioOpen,
                onClose: ()=>setIsCameraStudioOpen(false),
                onCaptureVideo: handleCapturedVideoFromStudio
            }, void 0, false, {
                fileName: "[project]/src/components/reels/UploadReelModal.tsx",
                lineNumber: 1310,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(UploadReelModal, "AsdU+06ICqCC9ZeSX1/w2IQTSl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useReelsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = UploadReelModal;
;
var _c;
__turbopack_context__.k.register(_c, "UploadReelModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_9224dcda._.js.map