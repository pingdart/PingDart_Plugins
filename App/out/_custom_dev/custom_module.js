/* PingDart Developer Custom Module Dev Bundle */
window.__PD_CUSTOM_MODULES__ = window.__PD_CUSTOM_MODULES__ || {};

/* File: CustomScreen.tsx */
(function(){
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomScreen;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
function CustomScreen() {
    const [items, setItems] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [newItemName, setNewItemName] = (0, react_1.useState)('');
    const fetchItems = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/v1/plugins/custom/items');
            if (res.ok) {
                const json = await res.json();
                setItems(json.data || []);
            }
        }
        catch (_) {
            // Offline / fallback mock data
            setItems([
                { id: 1, name: 'Sample Plugin Item 1', code: 'ITM-001', status: 'active' },
                { id: 2, name: 'Sample Plugin Item 2', code: 'ITM-002', status: 'pending' },
            ]);
        }
        finally {
            setLoading(false);
        }
    };
    (0, react_1.useEffect)(() => {
        fetchItems();
    }, []);
    return (react_1.default.createElement("div", { className: "p-6 max-w-6xl mx-auto space-y-6" },
        react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex items-center gap-3" },
                    react_1.default.createElement("div", { className: "p-2.5 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-md" },
                        react_1.default.createElement(lucide_react_1.Blocks, { className: "w-6 h-6" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white" }, "Custom Developer Plugin"),
                        react_1.default.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Extend PingDart with custom frontend components & backend APIs")))),
            react_1.default.createElement("div", { className: "flex items-center gap-3" },
                react_1.default.createElement("button", { onClick: fetchItems, disabled: loading, className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition" },
                    react_1.default.createElement(lucide_react_1.RefreshCw, { className: `w-4 h-4 ${loading ? 'animate-spin' : ''}` }),
                    "Refresh"))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4" },
            react_1.default.createElement("div", { className: "p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center gap-4" },
                react_1.default.createElement("div", { className: "p-3 rounded-lg bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400" },
                    react_1.default.createElement(lucide_react_1.CheckCircle, { className: "w-5 h-5" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "text-xs text-gray-500 dark:text-gray-400" }, "Plugin Status"),
                    react_1.default.createElement("div", { className: "text-base font-semibold text-gray-900 dark:text-white" }, "Active & Ready"))),
            react_1.default.createElement("div", { className: "p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center gap-4" },
                react_1.default.createElement("div", { className: "p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400" },
                    react_1.default.createElement(lucide_react_1.Database, { className: "w-5 h-5" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "text-xs text-gray-500 dark:text-gray-400" }, "Database Binding"),
                    react_1.default.createElement("div", { className: "text-base font-semibold text-gray-900 dark:text-white" }, "custom_items"))),
            react_1.default.createElement("div", { className: "p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center gap-4" },
                react_1.default.createElement("div", { className: "p-3 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400" },
                    react_1.default.createElement(lucide_react_1.Server, { className: "w-5 h-5" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "text-xs text-gray-500 dark:text-gray-400" }, "Backend Endpoint"),
                    react_1.default.createElement("div", { className: "text-base font-semibold text-gray-900 dark:text-white" }, "/api/v1/plugins/custom")))),
        react_1.default.createElement("div", { className: "rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 space-y-4" },
            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                    react_1.default.createElement(lucide_react_1.Package, { className: "w-5 h-5 text-indigo-500" }),
                    react_1.default.createElement("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white" }, "Plugin Data Records")),
                react_1.default.createElement("span", { className: "text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium" },
                    items.length,
                    " records")),
            react_1.default.createElement("div", { className: "divide-y divide-gray-100 dark:divide-gray-800" }, items.map((item, idx) => (react_1.default.createElement("div", { key: item.id || idx, className: "py-3 flex items-center justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "font-medium text-gray-900 dark:text-white" }, item.name || item.code),
                    react_1.default.createElement("div", { className: "text-xs text-gray-500" },
                        item.code,
                        " \u2022 Table: custom_items")),
                react_1.default.createElement("span", { className: "text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" }, item.status || 'Active'))))))));
}

})();

/* File: index.ts */
(function(){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomScreen = void 0;
__exportStar(require("./manifest"), exports);
var CustomScreen_1 = require("./CustomScreen");
Object.defineProperty(exports, "CustomScreen", { enumerable: true, get: function () { return CustomScreen_1.default; } });

})();

/* File: manifest.ts */
(function(){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customManifest = void 0;
const dynamic_1 = require("next/dynamic");
const moduleRegistry_1 = require("@/core/module-loader/moduleRegistry");
const CustomScreen = (0, dynamic_1.default)(() => import('./CustomScreen'), { ssr: false });
exports.customManifest = {
    id: 'custom',
    displayName: 'Custom Plugin',
    version: '1.0.0',
    minPlatformVersion: '1.0.0',
    compatibility: ['1.x'],
    dependencies: [],
    allowedEvents: ['custom.created', 'custom.updated'],
    description: 'Custom developer plugin for PingDart platform.',
    icon: 'Blocks',
    basePath: '/portal/apps/custom',
    permissions: [
        { id: 'custom.view', name: 'View Custom Plugin', defaultRoles: ['admin', 'member'] },
        { id: 'custom.manage', name: 'Manage Custom Plugin', defaultRoles: ['admin'] },
    ],
    menus: [
        { title: 'Overview', path: '', icon: 'LayoutDashboard' },
        { title: 'Items', path: 'items', icon: 'Package' },
    ],
    routesList: ['', 'items'],
    DefaultScreen: CustomScreen,
    routes: {
        '': CustomScreen,
        'items': CustomScreen,
    }
};
moduleRegistry_1.default.register(exports.customManifest);
exports.default = exports.customManifest;

})();
