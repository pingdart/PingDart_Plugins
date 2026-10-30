(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperPluginStudio",
    ()=>DeveloperPluginStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Upload01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/pluginRegistry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PRESET_TEMPLATES = {
    mod_bikerental: {
        id: "mod_bikerental",
        name: "Bike & Scooter Rental OS",
        category: "Automotive & Rentals",
        icon: "🛵",
        version: "1.0.0",
        isFree: true,
        priceMonthly: 0,
        currency: "USD",
        description: "Fleet inventory manager, hourly/daily rental rates, security deposit ledger, and in-chat bike booking with key handover OTP.",
        manifestJson: {
            sidebar: [
                {
                    id: "fleet",
                    label: "Bike Fleet Inventory",
                    icon: "Motorbike",
                    viewType: "cards",
                    entityType: "bike",
                    fields: [
                        {
                            name: "name",
                            label: "Vehicle Model",
                            type: "text",
                            primary: true,
                            required: true
                        },
                        {
                            name: "plate",
                            label: "Plate Number",
                            type: "text"
                        },
                        {
                            name: "rate",
                            label: "Daily Rate ($)",
                            type: "currency",
                            required: true
                        },
                        {
                            name: "deposit",
                            label: "Deposit ($)",
                            type: "currency"
                        },
                        {
                            name: "status",
                            label: "Status",
                            type: "badge",
                            options: [
                                "Available",
                                "Rented",
                                "Maintenance"
                            ]
                        }
                    ]
                },
                {
                    id: "bookings",
                    label: "Rental Bookings",
                    icon: "Calendar",
                    viewType: "table",
                    entityType: "booking",
                    fields: [
                        {
                            name: "customerName",
                            label: "Customer Name",
                            type: "text",
                            primary: true,
                            required: true
                        },
                        {
                            name: "bikeName",
                            label: "Vehicle",
                            type: "text"
                        },
                        {
                            name: "pickupDate",
                            label: "Pickup Date",
                            type: "date"
                        },
                        {
                            name: "returnDate",
                            label: "Return Date",
                            type: "date"
                        },
                        {
                            name: "phone",
                            label: "Phone",
                            type: "text"
                        },
                        {
                            name: "otp",
                            label: "Handover OTP",
                            type: "code"
                        },
                        {
                            name: "status",
                            label: "Status",
                            type: "badge",
                            options: [
                                "Active",
                                "Returned",
                                "Pending"
                            ]
                        }
                    ]
                },
                {
                    id: "deposits",
                    label: "Security Deposits",
                    icon: "ShieldCheck",
                    viewType: "table",
                    entityType: "deposit",
                    fields: [
                        {
                            name: "customerName",
                            label: "Customer",
                            type: "text",
                            primary: true
                        },
                        {
                            name: "amount",
                            label: "Deposit Amount",
                            type: "currency"
                        },
                        {
                            name: "method",
                            label: "Payment Method",
                            type: "text"
                        },
                        {
                            name: "status",
                            label: "Status",
                            type: "badge",
                            options: [
                                "Held",
                                "Refunded",
                                "Deducted"
                            ]
                        }
                    ]
                }
            ],
            inChatWidgets: [
                {
                    id: "send_catalog",
                    label: "Share Bike Catalog Card",
                    icon: "Motorbike"
                },
                {
                    id: "request_license",
                    label: "Request Driving License",
                    icon: "IdCard"
                },
                {
                    id: "issue_otp",
                    label: "Issue Handover OTP",
                    icon: "Key"
                }
            ],
            hooks: {
                keywords: [
                    "rent bike",
                    "scooter",
                    "hire",
                    "motorcycle"
                ]
            }
        }
    },
    mod_gym: {
        id: "mod_gym",
        name: "Gym & Fitness Studio OS",
        category: "Fitness & Sports",
        icon: "🏋️",
        version: "1.0.0",
        isFree: false,
        priceMonthly: 14.99,
        currency: "USD",
        description: "Member subscriptions, daily workout batches, personal trainer schedules, and in-chat pass generation.",
        manifestJson: {
            sidebar: [
                {
                    id: "members",
                    label: "Active Members",
                    icon: "UserGroup",
                    viewType: "table",
                    entityType: "member",
                    fields: [
                        {
                            name: "name",
                            label: "Member Full Name",
                            type: "text",
                            primary: true,
                            required: true
                        },
                        {
                            name: "plan",
                            label: "Membership Plan",
                            type: "badge",
                            options: [
                                "Monthly",
                                "Quarterly",
                                "Annual VIP"
                            ]
                        },
                        {
                            name: "expiryDate",
                            label: "Expiry Date",
                            type: "date"
                        },
                        {
                            name: "phone",
                            label: "Phone",
                            type: "text"
                        },
                        {
                            name: "status",
                            label: "Status",
                            type: "badge",
                            options: [
                                "Active",
                                "Expired",
                                "Frozen"
                            ]
                        }
                    ]
                },
                {
                    id: "classes",
                    label: "Workout Classes & Trainers",
                    icon: "Calendar",
                    viewType: "cards",
                    entityType: "class",
                    fields: [
                        {
                            name: "title",
                            label: "Class Name",
                            type: "text",
                            primary: true
                        },
                        {
                            name: "trainer",
                            label: "Trainer Name",
                            type: "text"
                        },
                        {
                            name: "time",
                            label: "Class Time",
                            type: "text"
                        },
                        {
                            name: "capacity",
                            label: "Max Slots",
                            type: "number"
                        }
                    ]
                }
            ],
            inChatWidgets: [
                {
                    id: "send_pass",
                    label: "Send Digital Gym Pass",
                    icon: "QrCode"
                },
                {
                    id: "book_class",
                    label: "Book Workout Slot",
                    icon: "Calendar"
                }
            ],
            hooks: {
                keywords: [
                    "gym membership",
                    "workout",
                    "trainer",
                    "fitness pass"
                ]
            }
        }
    },
    mod_laundry: {
        id: "mod_laundry",
        name: "Laundry & Dry Cleaning OS",
        category: "Services",
        icon: "🧺",
        version: "1.0.0",
        isFree: true,
        priceMonthly: 0,
        currency: "USD",
        description: "Order pickup/delivery tracker, garment tagging, wash status updates, and digital laundry bill generator.",
        manifestJson: {
            sidebar: [
                {
                    id: "orders",
                    label: "Laundry Orders",
                    icon: "ShoppingBag",
                    viewType: "table",
                    entityType: "order",
                    fields: [
                        {
                            name: "orderNo",
                            label: "Order #",
                            type: "code",
                            primary: true
                        },
                        {
                            name: "customerName",
                            label: "Customer",
                            type: "text",
                            required: true
                        },
                        {
                            name: "itemsCount",
                            label: "Garment Count",
                            type: "number"
                        },
                        {
                            name: "totalAmount",
                            label: "Total Bill",
                            type: "currency"
                        },
                        {
                            name: "status",
                            label: "Wash Status",
                            type: "badge",
                            options: [
                                "Received",
                                "Washing",
                                "Ironing",
                                "Ready for Delivery",
                                "Delivered"
                            ]
                        }
                    ]
                }
            ],
            inChatWidgets: [
                {
                    id: "send_laundry_bill",
                    label: "Send Wash Bill & Status",
                    icon: "Receipt"
                }
            ],
            hooks: {
                keywords: [
                    "laundry",
                    "dry clean",
                    "wash clothes",
                    "ironing"
                ]
            }
        }
    }
};
function DeveloperPluginStudio({ onBack, onPublished }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("builder");
    const [editorMode, setEditorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("visual");
    // Selected Model Data
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mod_bikerental");
    const [moduleId, setModuleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mod_bikerental");
    const [moduleName, setModuleName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Bike & Scooter Rental OS");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Automotive & Rentals");
    const [iconEmoji, setIconEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("🛵");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Fleet inventory manager, hourly/daily rental rates, security deposit ledger, and in-chat bike booking with key handover OTP.");
    const [isFree, setIsFree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [priceMonthly, setPriceMonthly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1.0.0");
    const [rawJsonCode, setRawJsonCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(PRESET_TEMPLATES.mod_bikerental, null, 2));
    // Admin Screens
    const [adminScreens, setAdminScreens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PRESET_TEMPLATES.mod_bikerental.manifestJson.sidebar);
    const [newScreenLabel, setNewScreenLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // In-Chat Widgets
    const [inChatWidgets, setInChatWidgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PRESET_TEMPLATES.mod_bikerental.manifestJson.inChatWidgets);
    const [newWidgetLabel, setNewWidgetLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Bot Trigger Keywords
    const [keywords, setKeywords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PRESET_TEMPLATES.mod_bikerental.manifestJson.hooks.keywords.join(", "));
    // Simulator Data
    const [simRecords, setSimRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: "Royal Enfield Classic 350",
            rate: "$25/day",
            deposit: "$50",
            status: "Available",
            plate: "MH-12-AB-9821"
        },
        {
            id: 2,
            name: "Honda Activa 6G Scooter",
            rate: "$12/day",
            deposit: "$30",
            status: "Rented",
            plate: "MH-12-CD-4102"
        },
        {
            id: 3,
            name: "Yamaha MT-15 Sports",
            rate: "$22/day",
            deposit: "$50",
            status: "Available",
            plate: "MH-12-EF-1934"
        }
    ]);
    const [simNewName, setSimNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [simNewRate, setSimNewRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("$20/day");
    // Chat Simulator State
    const [simChatMessages, setSimChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            sender: "customer",
            text: "Hi! Do you have any bikes available for rent this weekend?"
        },
        {
            sender: "bot",
            isInteractiveCard: true,
            cardType: "fleet_catalog",
            title: "🛵 Available Bikes & Scooters for Rent"
        }
    ]);
    const [simSelectedItem, setSimSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [simBookSuccess, setSimBookSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [simInputText, setSimInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load Preset Template
    const handleLoadTemplate = (tplKey)=>{
        var _tpl_manifestJson_hooks;
        const tpl = PRESET_TEMPLATES[tplKey];
        if (!tpl) return;
        setSelectedTemplate(tplKey);
        setModuleId(tpl.id);
        setModuleName(tpl.name);
        setCategory(tpl.category);
        setIconEmoji(tpl.icon);
        setDescription(tpl.description);
        setIsFree(tpl.isFree);
        setPriceMonthly(String(tpl.priceMonthly));
        setVersion(tpl.version);
        setAdminScreens(tpl.manifestJson.sidebar || []);
        setInChatWidgets(tpl.manifestJson.inChatWidgets || []);
        setKeywords((((_tpl_manifestJson_hooks = tpl.manifestJson.hooks) === null || _tpl_manifestJson_hooks === void 0 ? void 0 : _tpl_manifestJson_hooks.keywords) || []).join(", "));
        setRawJsonCode(JSON.stringify(tpl, null, 2));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Loaded "${tpl.name}" JSON Template!`);
    };
    // Sync Visual fields into JSON Code
    const syncStateToJson = ()=>{
        const fullObj = {
            id: moduleId,
            name: moduleName,
            category,
            icon: iconEmoji,
            version,
            isFree,
            priceMonthly: isFree ? 0 : parseFloat(priceMonthly) || 0,
            currency: "USD",
            description,
            manifestJson: {
                sidebar: adminScreens,
                inChatWidgets,
                hooks: {
                    keywords: keywords.split(",").map((k)=>k.trim())
                }
            }
        };
        setRawJsonCode(JSON.stringify(fullObj, null, 2));
    };
    // Apply JSON Code into Visual state
    const handleApplyJson = ()=>{
        try {
            var _parsed_manifestJson, _parsed_manifestJson1, _parsed_manifestJson_hooks, _parsed_manifestJson2;
            const parsed = JSON.parse(rawJsonCode);
            if (parsed.id) setModuleId(parsed.id);
            if (parsed.name) setModuleName(parsed.name);
            if (parsed.category) setCategory(parsed.category);
            if (parsed.icon) setIconEmoji(parsed.icon);
            if (parsed.version) setVersion(parsed.version);
            if (parsed.description) setDescription(parsed.description);
            if (parsed.isFree !== undefined) setIsFree(parsed.isFree);
            if (parsed.priceMonthly !== undefined) setPriceMonthly(String(parsed.priceMonthly));
            if ((_parsed_manifestJson = parsed.manifestJson) === null || _parsed_manifestJson === void 0 ? void 0 : _parsed_manifestJson.sidebar) setAdminScreens(parsed.manifestJson.sidebar);
            if ((_parsed_manifestJson1 = parsed.manifestJson) === null || _parsed_manifestJson1 === void 0 ? void 0 : _parsed_manifestJson1.inChatWidgets) setInChatWidgets(parsed.manifestJson.inChatWidgets);
            if ((_parsed_manifestJson2 = parsed.manifestJson) === null || _parsed_manifestJson2 === void 0 ? void 0 : (_parsed_manifestJson_hooks = _parsed_manifestJson2.hooks) === null || _parsed_manifestJson_hooks === void 0 ? void 0 : _parsed_manifestJson_hooks.keywords) {
                setKeywords(parsed.manifestJson.hooks.keywords.join(", "));
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("JSON Schema validated & applied to UI successfully! ✓");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`JSON Parse Error: ${err.message}`);
        }
    };
    // Add Screen
    const handleAddScreen = ()=>{
        if (!newScreenLabel.trim()) return;
        const id = newScreenLabel.toLowerCase().replace(/[^a-z0-9]/g, "_");
        setAdminScreens([
            ...adminScreens,
            {
                id,
                label: newScreenLabel.trim(),
                icon: "Folder",
                viewType: "table",
                entityType: id,
                fields: [
                    {
                        name: "title",
                        label: "Title",
                        type: "text",
                        primary: true
                    },
                    {
                        name: "status",
                        label: "Status",
                        type: "badge",
                        options: [
                            "Active",
                            "Pending",
                            "Closed"
                        ]
                    }
                ]
            }
        ]);
        setNewScreenLabel("");
        syncStateToJson();
    };
    // Remove Screen
    const handleRemoveScreen = (idx)=>{
        setAdminScreens(adminScreens.filter((_, i)=>i !== idx));
        syncStateToJson();
    };
    // Add Widget
    const handleAddWidget = ()=>{
        if (!newWidgetLabel.trim()) return;
        const id = newWidgetLabel.toLowerCase().replace(/[^a-z0-9]/g, "_");
        setInChatWidgets([
            ...inChatWidgets,
            {
                id,
                label: newWidgetLabel.trim(),
                icon: "Zap"
            }
        ]);
        setNewWidgetLabel("");
        syncStateToJson();
    };
    // Simulator Add Record
    const handleSimAddRecord = (e)=>{
        e.preventDefault();
        if (!simNewName.trim()) return;
        setSimRecords([
            ...simRecords,
            {
                id: Date.now(),
                name: simNewName,
                rate: simNewRate,
                deposit: "$40",
                status: "Available",
                plate: `MH-12-XX-${Math.floor(1000 + Math.random() * 9000)}`
            }
        ]);
        setSimNewName("");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Record added to simulator!");
    };
    // Customer Chat Simulator Send
    const handleSimSendMessage = (e)=>{
        e.preventDefault();
        if (!simInputText.trim()) return;
        const userMsg = simInputText;
        setSimChatMessages((prev)=>[
                ...prev,
                {
                    sender: "customer",
                    text: userMsg
                }
            ]);
        setSimInputText("");
        setTimeout(()=>{
            setSimChatMessages((prev)=>[
                    ...prev,
                    {
                        sender: "bot",
                        isInteractiveCard: true,
                        cardType: "fleet_catalog",
                        title: `${iconEmoji} Available ${moduleName} Services`
                    }
                ]);
        }, 600);
    };
    // 1-Click Publish to Portal
    const handlePublishToPortal = async ()=>{
        let finalPayload;
        try {
            if (editorMode === "json") {
                finalPayload = JSON.parse(rawJsonCode);
            } else {
                finalPayload = {
                    id: moduleId,
                    name: moduleName,
                    category,
                    icon: iconEmoji,
                    version,
                    isFree,
                    priceMonthly: isFree ? 0 : parseFloat(priceMonthly) || 0,
                    currency: "USD",
                    description,
                    manifestJson: {
                        sidebar: adminScreens,
                        inChatWidgets,
                        hooks: {
                            keywords: keywords.split(",").map((k)=>k.trim())
                        }
                    }
                };
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Invalid JSON: ${err.message}`);
            return;
        }
        if (!finalPayload.id || !finalPayload.name) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Module ID and Name are required.");
            return;
        }
        setIsPublishing(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginApi"].publishModule(finalPayload);
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎉 Plugin "${finalPayload.name}" published to PingDart App Store!`);
                if (onPublished) onPublished(finalPayload.id);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.error || "Failed to publish plugin.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Publish error.");
        } finally{
            setIsPublishing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-slate-100 overflow-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-800 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🛠️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 452,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-black tracking-tight",
                                                children: "Pure JSON Plugin Developer Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 453,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
                                                children: "100% JSON-Driven Engine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 451,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: "Define sidebar, topbar, screens, forms, linking, and in-chat actions completely in JSON — zero custom code needed."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] font-bold text-slate-400 pl-2",
                                        children: "Template:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedTemplate,
                                        onChange: (e)=>handleLoadTemplate(e.target.value),
                                        className: "text-xs font-bold bg-transparent outline-none pr-2 text-indigo-600 dark:text-indigo-400 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mod_bikerental",
                                                children: "🛵 Bike & Scooter Rental"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mod_gym",
                                                children: "🏋️ Gym & Fitness Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mod_laundry",
                                                children: "🧺 Laundry & Dry Clean"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(activeTab === "builder" ? "preview" : "builder"),
                                className: `px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === "preview" ? "bg-purple-600 text-white shadow-md shadow-purple-500/20" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    activeTab === "preview" ? "Edit JSON" : "Live Dual-Side Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePublishToPortal,
                                disabled: isPublishing,
                                className: "px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs rounded-xl shadow-md shadow-emerald-500/20 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    isPublishing ? "Publishing..." : "🚀 Publish to App Store"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            activeTab === "builder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-2 bg-white/80 dark:bg-[#1f2937]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    syncStateToJson();
                                    setEditorMode("visual");
                                },
                                className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${editorMode === "visual" ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: "🎨 Visual Designer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    syncStateToJson();
                                    setEditorMode("json");
                                },
                                className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${editorMode === "json" ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, this),
                                    " 📄 Pure JSON Code Editor"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this),
                    editorMode === "json" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleApplyJson,
                        className: "px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs",
                        children: "Validate & Apply JSON ✓"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 530,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                lineNumber: 501,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6 max-w-[1600px] mx-auto w-full",
                children: [
                    activeTab === "builder" && editorMode === "json" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono font-bold text-slate-400 uppercase tracking-wider",
                                        children: "manifest.json (Define sidebar, topbar, screens, forms, linking, & in-chat widgets)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            navigator.clipboard.writeText(rawJsonCode);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("JSON copied to clipboard!");
                                        },
                                        className: "text-xs font-bold text-indigo-600 hover:underline",
                                        children: "Copy JSON"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: 22,
                                value: rawJsonCode,
                                onChange: (e)=>setRawJsonCode(e.target.value),
                                className: "w-full p-4 font-mono text-xs rounded-2xl bg-slate-900 text-emerald-400 border border-slate-800 outline-none resize-none leading-relaxed shadow-inner",
                                spellCheck: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-slate-500",
                                        children: [
                                            "Tip: Modify any screen label, field names, or types in JSON and click ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Validate & Apply JSON"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 570,
                                                columnNumber: 87
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleApplyJson,
                                        className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md",
                                        children: "Apply JSON to Studio ✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 568,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this),
                    activeTab === "builder" && editorMode === "visual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: "⚙️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 588,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm",
                                                children: "1. Plugin Identity & Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 589,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 587,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                        children: "Module ID *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: moduleId,
                                                        onChange: (e)=>{
                                                            setModuleId(e.target.value);
                                                            syncStateToJson();
                                                        },
                                                        className: "w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                        children: "Plugin Name *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: moduleName,
                                                        onChange: (e)=>{
                                                            setModuleName(e.target.value);
                                                            syncStateToJson();
                                                        },
                                                        className: "w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                                children: "Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: category,
                                                                onChange: (e)=>{
                                                                    setCategory(e.target.value);
                                                                    syncStateToJson();
                                                                },
                                                                className: "w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Automotive & Rentals"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 630,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Healthcare"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 631,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Beauty & Wellness"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Food & Dining"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 633,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Education"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 634,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Real Estate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Fitness & Sports"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Services"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 622,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                                children: "Icon Emoji"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: iconEmoji,
                                                                onChange: (e)=>{
                                                                    setIconEmoji(e.target.value);
                                                                    syncStateToJson();
                                                                },
                                                                className: "w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 642,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: 3,
                                                        value: description,
                                                        onChange: (e)=>{
                                                            setDescription(e.target.value);
                                                            syncStateToJson();
                                                        },
                                                        className: "w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none resize-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold",
                                                                children: "Pricing Model"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            setIsFree(true);
                                                                            syncStateToJson();
                                                                        },
                                                                        className: `px-3 py-1 rounded-lg text-xs font-bold ${isFree ? "bg-emerald-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600"}`,
                                                                        children: "Free"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 671,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            setIsFree(false);
                                                                            syncStateToJson();
                                                                        },
                                                                        className: `px-3 py-1 rounded-lg text-xs font-bold ${!isFree ? "bg-purple-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600"}`,
                                                                        children: "Paid Tier"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 19
                                                    }, this),
                                                    !isFree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 pt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-slate-400",
                                                                children: "Price / Month ($):"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: priceMonthly,
                                                                onChange: (e)=>{
                                                                    setPriceMonthly(e.target.value);
                                                                    syncStateToJson();
                                                                },
                                                                className: "w-full px-3 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: "📊"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 717,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm",
                                                children: "2. Admin Screens (Sidebar Injections)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 716,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: adminScreens.map((scr, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600",
                                                                children: [
                                                                    "Screen ",
                                                                    idx + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold",
                                                                children: scr.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRemoveScreen(idx),
                                                        className: "p-1 text-slate-400 hover:text-red-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 723,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 721,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newScreenLabel,
                                                onChange: (e)=>setNewScreenLabel(e.target.value),
                                                placeholder: "e.g. Maintenance & GPS",
                                                className: "flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 738,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleAddScreen,
                                                className: "px-3.5 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-indigo-700",
                                                children: "+ Add Screen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 715,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 758,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-sm",
                                                children: "3. In-Chat Customer Widgets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 759,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 757,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: inChatWidgets.map((w, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-pink-50 dark:bg-pink-950 text-pink-600",
                                                                children: "Card"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 766,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold",
                                                                children: w.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setInChatWidgets(inChatWidgets.filter((_, i)=>i !== idx));
                                                            syncStateToJson();
                                                        },
                                                        className: "p-1 text-slate-400 hover:text-red-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 764,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 762,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newWidgetLabel,
                                                onChange: (e)=>setNewWidgetLabel(e.target.value),
                                                placeholder: "e.g. Digital Agreement PDF",
                                                className: "flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 782,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleAddWidget,
                                                className: "px-3.5 py-2 bg-pink-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-pink-700",
                                                children: "+ Add Card"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 789,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 781,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                children: "Bot Trigger Keywords (Comma Separated)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: keywords,
                                                onChange: (e)=>{
                                                    setKeywords(e.target.value);
                                                    syncStateToJson();
                                                },
                                                placeholder: "rent bike, scooter, hire",
                                                className: "w-full px-3 py-2 text-xs font-mono rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 802,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 798,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 756,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, this),
                    activeTab === "preview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-200 dark:border-purple-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: iconEmoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 822,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-extrabold text-sm text-purple-900 dark:text-purple-200",
                                                        children: [
                                                            "Live Dual-Side Preview: ",
                                                            moduleName,
                                                            " (JSON-Driven Engine)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-purple-700 dark:text-purple-300",
                                                        children: "Left: Business Admin Dashboard. Right: Customer In-Chat Interactive Card Simulation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 827,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 823,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black uppercase px-3 py-1 rounded-full bg-purple-600 text-white shadow-xs",
                                        children: "Real-Time Simulator"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 832,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 820,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg",
                                                                children: "💼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-black text-sm",
                                                                        children: "Business Admin Workspace"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-slate-400",
                                                                        children: "Injected Left Sidebar Dashboard"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 845,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1.5",
                                                        children: adminScreens.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[14px] font-bold px-2 py-1 rounded-lg ${i === 0 ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`,
                                                                children: s.label
                                                            }, i, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSimAddRecord,
                                                className: "p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        value: simNewName,
                                                        onChange: (e)=>setSimNewName(e.target.value),
                                                        placeholder: "+ New Vehicle / Product Name",
                                                        className: "flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none font-bold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 862,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: simNewRate,
                                                        onChange: (e)=>setSimNewRate(e.target.value),
                                                        placeholder: "$20/day",
                                                        className: "w-24 px-2 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none font-bold text-center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 870,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "px-3.5 py-1.5 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-xs",
                                                        children: "+ Add"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 861,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 max-h-[380px] overflow-y-auto",
                                                children: simRecords.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/70 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "font-bold text-xs text-slate-900 dark:text-white",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 889,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-slate-400 font-mono",
                                                                        children: [
                                                                            item.plate,
                                                                            " • Dep: ",
                                                                            item.deposit
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 888,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded-lg",
                                                                        children: item.rate
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 895,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[14px] font-black uppercase px-2 py-0.5 rounded-md ${item.status === "Available" ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700" : "bg-amber-100 dark:bg-amber-950 text-amber-700"}`,
                                                                        children: item.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 898,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 894,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 882,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 839,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col h-[520px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg",
                                                                children: "💬"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 916,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-black text-sm",
                                                                        children: "Customer Chat Simulation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 918,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-emerald-600 font-bold",
                                                                        children: "100% In-Chat Interaction (Zero App Install)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                        lineNumber: 919,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px] font-black px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700",
                                                        children: "Live Chat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 914,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 overflow-y-auto py-3 space-y-3",
                                                children: simChatMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex ${msg.sender === "customer" ? "justify-end" : "justify-start"}`,
                                                        children: msg.sender === "customer" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-indigo-600 text-white rounded-2xl rounded-tr-xs px-3.5 py-2 text-xs max-w-[80%] shadow-sm",
                                                            children: msg.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                            lineNumber: 931,
                                                            columnNumber: 25
                                                        }, this) : msg.isInteractiveCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-900/60 rounded-2xl rounded-tl-xs p-3.5 max-w-[90%] space-y-3 shadow-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-black text-purple-700 dark:text-purple-300 flex items-center gap-1.5",
                                                                            children: [
                                                                                iconEmoji,
                                                                                " ",
                                                                                msg.title
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 937,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] font-bold uppercase px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700",
                                                                            children: "Direct In-Chat Booking"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 940,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                    lineNumber: 936,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1.5",
                                                                    children: simRecords.slice(0, 2).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${(simSelectedItem === null || simSelectedItem === void 0 ? void 0 : simSelectedItem.id) === b.id ? "bg-purple-100/80 dark:bg-purple-950 border-purple-500 shadow-xs" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-purple-300"}`,
                                                                            onClick: ()=>setSimSelectedItem(b),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "font-bold text-xs",
                                                                                            children: b.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                            lineNumber: 956,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[14px] text-slate-400 font-mono",
                                                                                            children: [
                                                                                                b.rate,
                                                                                                " • Deposit ",
                                                                                                b.deposit
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                            lineNumber: 957,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                    lineNumber: 955,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: `px-2.5 py-1 rounded-lg text-[14px] font-bold ${(simSelectedItem === null || simSelectedItem === void 0 ? void 0 : simSelectedItem.id) === b.id ? "bg-purple-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-purple-600"}`,
                                                                                    children: (simSelectedItem === null || simSelectedItem === void 0 ? void 0 : simSelectedItem.id) === b.id ? "Selected ✓" : "Select"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                    lineNumber: 959,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, b.id, true, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 947,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                    lineNumber: 945,
                                                                    columnNumber: 27
                                                                }, this),
                                                                simSelectedItem && !simBookSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-2 border-t border-purple-200/60 dark:border-purple-900/60 space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] font-bold text-slate-600 dark:text-slate-300",
                                                                            children: [
                                                                                "📅 Booking: ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: simSelectedItem.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                    lineNumber: 975,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 974,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>{
                                                                                setSimBookSuccess(true);
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Simulated booking confirmed with OTP!");
                                                                            },
                                                                            className: "w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-md",
                                                                            children: "💳 Confirm & Reserve in Chat ➔"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 977,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 29
                                                                }, this),
                                                                simBookSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                    lineNumber: 993,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                " Booking Confirmed! #RES-9412"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 992,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] text-emerald-800 dark:text-emerald-200",
                                                                            children: [
                                                                                "Security OTP: ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    className: "font-mono text-sm bg-white dark:bg-emerald-900 px-1.5 py-0.5 rounded",
                                                                                    children: "8 2 1 4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                                    lineNumber: 996,
                                                                                    columnNumber: 47
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                            lineNumber: 995,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                                    lineNumber: 991,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-xs px-3.5 py-2 text-xs max-w-[80%]",
                                                            children: msg.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 927,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSimSendMessage,
                                                className: "pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: simInputText,
                                                        onChange: (e)=>setSimInputText(e.target.value),
                                                        placeholder: "Type customer message (e.g. 'rent bike')...",
                                                        className: "flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                        lineNumber: 913,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                                lineNumber: 837,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                        lineNumber: 819,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
                lineNumber: 541,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx",
        lineNumber: 443,
        columnNumber: 5
    }, this);
}
_s(DeveloperPluginStudio, "Z4gST5T27QR5w4m1f95bAiIXWAs=");
_c = DeveloperPluginStudio;
var _c;
__turbopack_context__.k.register(_c, "DeveloperPluginStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleMarketplaceScreen",
    ()=>ModuleMarketplaceScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlusSignIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ShoppingBag01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ShoppingBag01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/pluginRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$marketplace$2f$DeveloperPluginStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/marketplace/DeveloperPluginStudio.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CATEGORIES = [
    "All Categories",
    "Automotive & Rentals",
    "Healthcare",
    "Beauty & Wellness",
    "Food & Dining",
    "Education",
    "Real Estate",
    "Retail & E-Commerce"
];
const MODULE_ICONS = {
    mod_bikerental: "🛵",
    mod_clinic: "🩺",
    mod_hms: "🏥",
    mod_salon: "💇‍♀️",
    mod_restaurant: "🍽️",
    mod_academy: "🎓",
    mod_realestate: "🏢",
    mod_retail: "🛒",
    mod_auto: "🚗"
};
function ModuleMarketplaceScreen({ onBack, onOpenModule, onModulesChanged }) {
    _s();
    const [isStudioOpen, setIsStudioOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modules, setModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [installedMap, setInstalledMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Categories");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [processingId, setProcessingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadCatalog = ()=>{
        setIsLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginApi"].getCatalog().then((res)=>{
            setModules(res.modules || []);
            setInstalledMap(res.installedMap || {});
        }).catch((err)=>{
            console.warn("[Marketplace] load error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load plugin marketplace.");
        }).finally(()=>setIsLoading(false));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleMarketplaceScreen.useEffect": ()=>{
            loadCatalog();
        }
    }["ModuleMarketplaceScreen.useEffect"], []);
    const handleInstall = async (mod)=>{
        setProcessingId(mod.id);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginApi"].installModule(mod.id);
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎉 ${mod.name} activated successfully! Sidebar updated.`);
                loadCatalog();
                if (onModulesChanged) onModulesChanged();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((res === null || res === void 0 ? void 0 : res.error) || "Failed to install module.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Error activating module.");
        } finally{
            setProcessingId(null);
        }
    };
    const handleUninstall = async (mod)=>{
        setProcessingId(mod.id);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluginApi"].uninstallModule(mod.id);
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${mod.name} deactivated.`);
                loadCatalog();
                if (onModulesChanged) onModulesChanged();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to deactivate.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error deactivating module.");
        } finally{
            setProcessingId(null);
        }
    };
    const filteredModules = modules.filter((m)=>{
        const matchesCategory = selectedCategory === "All Categories" || m.category === selectedCategory;
        const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.description && m.description.toLowerCase().includes(searchQuery.toLowerCase()) || m.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    if (isStudioOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$marketplace$2f$DeveloperPluginStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperPluginStudio"], {
            onBack: ()=>setIsStudioOpen(false),
            onPublished: (modId)=>{
                setIsStudioOpen(false);
                loadCatalog();
                if (onModulesChanged) onModulesChanged();
            }
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-slate-100 overflow-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-800 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-black tracking-tight flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                        className: "text-indigo-600 dark:text-indigo-400",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Business App Store & Industry Modules"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800",
                                                children: "WordPress-Style Plugin Engine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: "Install industry operating systems to inject dedicated dashboards, in-chat widgets, and workflows into your PingDart."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search HMS, Clinic, Salon, Bikes...",
                                        className: "w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 15,
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsStudioOpen(true),
                                className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs rounded-xl shadow-md shadow-purple-500/20 flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    " 🛠️ Developer Studio (+ Create Plugin)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-6 py-2.5 bg-white/80 dark:bg-[#1f2937]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shrink-0 overflow-x-auto scrollbar-none",
                children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedCategory(cat),
                        className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${selectedCategory === cat ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold text-slate-400 animate-pulse",
                        children: "Loading Business Modules Catalog..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this) : filteredModules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-12 text-center bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3 max-w-md mx-auto my-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ShoppingBag01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShoppingBag01Icon"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm font-bold text-slate-800 dark:text-white",
                            children: "No Modules Found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: "Try selecting another category or clear your search term."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1600px] mx-auto",
                    children: filteredModules.map((mod)=>{
                        var _mod_manifestJson;
                        const installed = installedMap[mod.id];
                        const isInstalledActive = installed && installed.isActive;
                        const isProcessing = processingId === mod.id;
                        const emojiIcon = MODULE_ICONS[mod.id] || "🏢";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-5 bg-white dark:bg-[#1f2937] ${isInstalledActive ? "border-indigo-500/80 dark:border-indigo-600 shadow-lg shadow-indigo-500/10" : "border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-2xl shadow-xs",
                                                            children: emojiIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-sm font-black text-slate-900 dark:text-white leading-tight",
                                                                    children: mod.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-bold text-indigo-600 dark:text-indigo-400",
                                                                    children: [
                                                                        mod.category,
                                                                        " • v",
                                                                        mod.version
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 23
                                                }, this),
                                                mod.isFree ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300",
                                                    children: "FREE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] font-black uppercase px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
                                                    children: [
                                                        "$",
                                                        mod.priceMonthly,
                                                        "/mo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                            lineNumber: 232,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed",
                                            children: mod.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                            lineNumber: 259,
                                            columnNumber: 21
                                        }, this),
                                        ((_mod_manifestJson = mod.manifestJson) === null || _mod_manifestJson === void 0 ? void 0 : _mod_manifestJson.sidebar) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] font-bold uppercase tracking-wider text-slate-400",
                                                    children: "Included Screens:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: mod.manifestJson.sidebar.map((sb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[14px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
                                                            children: [
                                                                "• ",
                                                                sb.label
                                                            ]
                                                        }, sb.id, true, {
                                                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                            lineNumber: 265,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                    lineNumber: 231,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2",
                                    children: isInstalledActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onOpenModule && onOpenModule(mod.id),
                                                className: "flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 27
                                                    }, this),
                                                    " Active (Open Workspace)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                lineNumber: 287,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: isProcessing,
                                                onClick: ()=>handleUninstall(mod),
                                                title: "Deactivate Module",
                                                className: "p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                lineNumber: 294,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 286,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: isProcessing,
                                        onClick: ()=>handleInstall(mod),
                                        className: "w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/20 flex items-center justify-center gap-1.5 transition-all disabled:opacity-50",
                                        children: isProcessing ? "Activating..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 29
                                                }, this),
                                                " Install & Activate Plugin"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                        lineNumber: 305,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                                    lineNumber: 284,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, mod.id, true, {
                            fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                            lineNumber: 223,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/marketplace/ModuleMarketplaceScreen.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(ModuleMarketplaceScreen, "jUZ4sAGaFKHAtblt0vR9kvyyOiw=");
_c = ModuleMarketplaceScreen;
var _c;
__turbopack_context__.k.register(_c, "ModuleMarketplaceScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_marketplace_48f97d91._.js.map