module.exports = [
"[project]/src/services/pluginRegistry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pluginApi",
    ()=>pluginApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const pluginApi = {
    // Fetch available App Store catalog
    getCatalog: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/modules/catalog");
        return res.data?.success ? res.data : {
            modules: [],
            installedMap: {}
        };
    },
    // Fetch current user's installed/active modules
    getMyModules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/modules/my-modules");
        return res.data?.success ? res.data.installed || [] : [];
    },
    // Install or activate module
    installModule: async (moduleId, settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/install", {
            moduleId,
            settings
        });
        return res.data;
    },
    // Uninstall or deactivate module
    uninstallModule: async (moduleId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/uninstall", {
            moduleId
        });
        return res.data;
    },
    // Update module settings
    updateSettings: async (moduleId, settings)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/modules/${moduleId}/settings`, {
            settings
        });
        return res.data;
    },
    // Entity records (Appointments, Patients, Treatments, Tables, Prescriptions, etc.)
    getRecords: async (moduleId, entityType, params)=>{
        const query = new URLSearchParams();
        if (params?.chatId) query.set("chatId", params.chatId);
        if (params?.customerId) query.set("customerId", String(params.customerId));
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/modules/${moduleId}/records/${entityType}?${query.toString()}`);
        return res.data?.success ? res.data.records || [] : [];
    },
    createRecord: async (moduleId, entityType, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/modules/${moduleId}/records/${entityType}`, payload);
        return res.data;
    },
    updateRecord: async (moduleId, entityType, recordId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/modules/${moduleId}/records/${entityType}/${recordId}`, {
            data
        });
        return res.data;
    },
    deleteRecord: async (moduleId, entityType, recordId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/modules/${moduleId}/records/${entityType}/${recordId}`);
        return res.data;
    },
    // 3rd-Party Developer Publishing to App Store Portal
    publishModule: async (moduleData)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/modules/publish", moduleData);
        return res.data;
    }
};
}),
"[project]/src/lib/plugins/native/KillSwitchCache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Kill Switch Cache
 * 30-second TTL cache for platform-level emergency kill switches.
 */ __turbopack_context__.s([
    "clearKillSwitchCache",
    ()=>clearKillSwitchCache,
    "isPermissionGloballyEnabled",
    ()=>isPermissionGloballyEnabled
]);
let killSwitchState = {};
let lastFetchedTime = 0;
const CACHE_TTL_MS = 30000; // 30 seconds
async function isPermissionGloballyEnabled(permission, apiUrl = '/api/v1/plugins') {
    const now = Date.now();
    if (now - lastFetchedTime > CACHE_TTL_MS) {
        try {
            const res = await fetch(`${apiUrl}/native/kill-switches`);
            if (res.ok) {
                const json = await res.json();
                if (json.success && json.data) {
                    killSwitchState = json.data;
                    lastFetchedTime = now;
                }
            }
        } catch (e) {
            console.warn('[KillSwitchCache] Failed fetching kill switches:', e);
        }
    }
    // Default to enabled if not found
    return killSwitchState[permission] !== false;
}
function clearKillSwitchCache() {
    lastFetchedTime = 0;
}
}),
"[project]/src/lib/plugins/native/RateLimiter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Rate Limiter
 * Sliding window rate limiter per plugin per native capability.
 */ __turbopack_context__.s([
    "checkRateLimit",
    ()=>checkRateLimit
]);
const DEFAULT_RATE_LIMITS = {
    'native.camera': 10,
    'native.geolocation': 60,
    'native.filesystem': 100,
    'native.push': 5,
    'native.biometrics': 20,
    'native.contacts': 10,
    'native.device': 120,
    'native.haptics': 300
};
// Map key: `${pluginId}:${permission}` -> array of timestamps
const callTimestampsMap = new Map();
function checkRateLimit(pluginId, permission) {
    const limit = DEFAULT_RATE_LIMITS[permission] || 60;
    const windowMs = 60000; // 1 minute
    const now = Date.now();
    const key = `${pluginId}:${permission}`;
    let timestamps = callTimestampsMap.get(key) || [];
    // Filter out timestamps older than window
    timestamps = timestamps.filter((t)=>now - t < windowMs);
    if (timestamps.length >= limit) {
        callTimestampsMap.set(key, timestamps);
        return {
            allowed: false,
            limit,
            remaining: 0
        };
    }
    timestamps.push(now);
    callTimestampsMap.set(key, timestamps);
    return {
        allowed: true,
        limit,
        remaining: limit - timestamps.length
    };
}
}),
"[project]/src/lib/plugins/native/PermissionManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Permission Manager
 * Manages user approval prompts and saves user permission choices ('once', 'always', 'denied').
 */ __turbopack_context__.s([
    "promptUserForPermission",
    ()=>promptUserForPermission,
    "registerPermissionPromptHandler",
    ()=>registerPermissionPromptHandler,
    "saveUserPermissionChoice",
    ()=>saveUserPermissionChoice
]);
let activePromptHandler = null;
function registerPermissionPromptHandler(handler) {
    activePromptHandler = handler;
    return ()=>{
        activePromptHandler = null;
    };
}
async function promptUserForPermission(req) {
    if (!activePromptHandler) {
        console.warn('[PermissionManager] No prompt handler registered! Defaulting to denied.');
        return 'denied';
    }
    return await activePromptHandler(req);
}
async function saveUserPermissionChoice(tenantId, pluginId, permission, granted, apiUrl = '/api/v1/plugins') {
    try {
        await fetch(`${apiUrl}/native/permission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tenantId,
                pluginId,
                permission,
                granted,
                grantedBy: 'user'
            })
        });
    } catch (e) {
        console.warn('[PermissionManager] Failed saving user permission choice:', e);
    }
}
}),
"[project]/src/lib/plugins/native/TenantPolicyEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Tenant Policy Engine
 * Implements 5-level priority chain:
 * 1. Platform Kill Switch
 * 2. Tenant Policy
 * 3. Manifest Permission Declaration
 * 4. User Runtime Approval
 * 5. Native Execution
 */ __turbopack_context__.s([
    "evaluatePolicyChain",
    ()=>evaluatePolicyChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$KillSwitchCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/KillSwitchCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$RateLimiter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/RateLimiter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/PermissionManager.ts [app-ssr] (ecmascript)");
;
;
;
async function evaluatePolicyChain(tenantId, pluginId, pluginName, permission, manifest, apiUrl = '/api/v1/plugins') {
    // ──── Priority 1: Platform Emergency Kill Switch ───────────────────────────
    const globallyEnabled = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$KillSwitchCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPermissionGloballyEnabled"])(permission, apiUrl);
    if (!globallyEnabled) {
        return {
            allowed: false,
            reason: 'kill_switch_blocked',
            message: `Native permission '${permission}' is globally disabled by platform administrators.`
        };
    }
    // ──── Priority 2: Manifest Declaration ──────────────────────────────────────
    if (manifest) {
        const permissions = manifest.permissions || [];
        const hasDeclared = permissions.includes(permission) || permissions.includes(permission.replace('native.', ''));
        if (!hasDeclared) {
            return {
                allowed: false,
                reason: 'manifest_missing',
                message: `Plugin '${pluginName}' did not declare permission '${permission}' in its manifest.json.`
            };
        }
    }
    // ──── Priority 3: Rate Limiter ───────────────────────────────────────────────
    const rate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$RateLimiter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkRateLimit"])(pluginId, permission);
    if (!rate.allowed) {
        return {
            allowed: false,
            reason: 'rate_limited',
            message: `Rate limit exceeded for permission '${permission}'. Allowed: ${rate.limit}/min.`
        };
    }
    // ──── Priority 4: Backend Evaluation (Tenant Policy & User History) ───────
    try {
        const res = await fetch(`${apiUrl}/native/evaluate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tenantId,
                pluginId,
                permission
            })
        });
        if (res.ok) {
            const evalData = await res.json();
            if (!evalData.allowed && evalData.reason === 'tenant_policy_denied') {
                return {
                    allowed: false,
                    reason: 'tenant_policy_denied',
                    message: evalData.message || 'Denied by tenant organization policy.'
                };
            }
            if (evalData.allowed && !evalData.requiresApprovalDialog) {
                return {
                    allowed: true,
                    reason: 'allowed'
                };
            }
        }
    } catch (e) {
        console.warn('[TenantPolicyEngine] Backend eval check failed, falling back to prompt:', e);
    }
    // ──── Priority 5: User Runtime Approval Dialog ─────────────────────────────
    const userChoice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promptUserForPermission"])({
        pluginId,
        pluginName,
        permission,
        actionLabel: getActionLabel(permission)
    });
    if (userChoice === 'denied') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserPermissionChoice"])(tenantId, pluginId, permission, 'denied', apiUrl);
        return {
            allowed: false,
            reason: 'user_denied',
            message: 'User denied permission request.'
        };
    }
    if (userChoice === 'always') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveUserPermissionChoice"])(tenantId, pluginId, permission, 'always', apiUrl);
    }
    return {
        allowed: true,
        reason: 'allowed'
    };
}
function getActionLabel(permission) {
    switch(permission){
        case 'native.camera':
            return '📷 Camera Access';
        case 'native.geolocation':
            return '📍 Location Access';
        case 'native.filesystem':
            return '📂 Filesystem Access';
        case 'native.push':
            return '🔔 Push Notifications';
        case 'native.biometrics':
            return '👆 Biometric Authentication';
        case 'native.contacts':
            return '📇 Contacts Access';
        case 'native.device':
            return '📱 Device Info';
        case 'native.haptics':
            return '📳 Haptics';
        default:
            return `⚡ ${permission}`;
    }
}
}),
"[project]/src/lib/plugins/native/AuditLogger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Audit Logger
 * Flushes native invocation log entries to the backend API for enterprise compliance (HIPAA / GDPR).
 */ __turbopack_context__.s([
    "logNativeCall",
    ()=>logNativeCall
]);
async function logNativeCall(entry, apiUrl = '/api/v1/plugins') {
    try {
        // Sanitize payload (remove huge base64 strings if any)
        const sanitizedPayload = {
            ...entry.payload
        };
        if (sanitizedPayload.base64) sanitizedPayload.base64 = '[base64_truncated]';
        if (sanitizedPayload.data && typeof sanitizedPayload.data === 'string' && sanitizedPayload.data.length > 500) {
            sanitizedPayload.data = sanitizedPayload.data.substring(0, 500) + '...[truncated]';
        }
        await fetch(`${apiUrl}/native/audit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tenantId: entry.tenantId || 'default',
                pluginId: entry.pluginId,
                userId: entry.userId || 'current_user',
                action: entry.action,
                permission: entry.permission,
                payload: sanitizedPayload,
                result: entry.result,
                durationMs: entry.durationMs
            })
        });
    } catch (e) {
        console.warn('[AuditLogger] Failed sending native audit log:', e);
    }
}
}),
"[project]/src/lib/plugins/native/CapabilityDetector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge — Capability Detector
 * Detects device / browser native capabilities dynamically.
 */ __turbopack_context__.s([
    "detectNativeCapabilities",
    ()=>detectNativeCapabilities
]);
function detectNativeCapabilities() {
    const isBrowser = "undefined" !== 'undefined';
    const hasCapacitor = isBrowser && Boolean(window.Capacitor);
    const nav = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
    return {
        camera: hasCapacitor || Boolean(nav.mediaDevices?.getUserMedia),
        geolocation: hasCapacitor || Boolean(nav.geolocation),
        filesystem: hasCapacitor || Boolean(isBrowser && (window.storage || nav.storage || window.indexedDB)),
        push: hasCapacitor || Boolean(isBrowser && 'Notification' in window),
        device: true,
        haptics: hasCapacitor || Boolean(nav.vibrate),
        biometrics: hasCapacitor || Boolean(isBrowser && window.PublicKeyCredential),
        contacts: hasCapacitor || Boolean(nav.contacts),
        bluetooth: hasCapacitor || Boolean(nav.bluetooth),
        nfc: hasCapacitor || Boolean(window.NDEFReader),
        barcode: hasCapacitor || Boolean(window.BarcodeDetector),
        share: hasCapacitor || Boolean(nav.share)
    };
}
}),
"[project]/src/lib/plugins/native/NativeBridgeGateway.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PingDart Native Bridge Gateway
 * Host-side postMessage listener & dispatcher with origin validation, policy evaluation, audit logging, and native API execution.
 */ __turbopack_context__.s([
    "NativeBridgeGateway",
    ()=>NativeBridgeGateway
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$TenantPolicyEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/TenantPolicyEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$AuditLogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/AuditLogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$CapabilityDetector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/CapabilityDetector.ts [app-ssr] (ecmascript)");
;
;
;
class NativeBridgeGateway {
    tenantId;
    pluginId;
    pluginName;
    manifest;
    apiUrl;
    messageListener = null;
    constructor(options){
        this.tenantId = options.tenantId || 'default';
        this.pluginId = options.pluginId;
        this.pluginName = options.pluginName;
        this.manifest = options.manifest;
        this.apiUrl = options.apiUrl || '/api/v1/plugins';
    }
    mount() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    unmount() {
        if ("undefined" !== 'undefined' && this.messageListener) //TURBOPACK unreachable
        ;
    }
    getPermissionKey(apiName) {
        const mainModule = apiName.split('.')[0].toLowerCase();
        switch(mainModule){
            case 'camera':
                return 'native.camera';
            case 'geolocation':
            case 'location':
                return 'native.geolocation';
            case 'filesystem':
            case 'files':
                return 'native.filesystem';
            case 'push':
                return 'native.push';
            case 'biometrics':
            case 'biometric':
                return 'native.biometrics';
            case 'contacts':
                return 'native.contacts';
            case 'device':
                return 'native.device';
            case 'haptics':
                return 'native.haptics';
            default:
                return `native.${mainModule}`;
        }
    }
    async executeNativeMethod(apiName, args) {
        const isCapacitor = "undefined" !== 'undefined' && Boolean(window.Capacitor);
        const cap = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        switch(apiName){
            // ─── Camera ────────────────────────────────────────────────────────────
            case 'camera.getPhoto':
            case 'camera.open':
                if (cap?.Camera) {
                    return await cap.Camera.getPhoto(args || {
                        quality: 90,
                        allowEditing: true
                    });
                }
                // Browser fallback / demo mode
                return {
                    photoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
                    format: 'jpeg',
                    timestamp: Date.now()
                };
            case 'camera.pickImages':
                if (cap?.Camera) return await cap.Camera.pickImages(args);
                return [
                    {
                        photoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
                    }
                ];
            // ─── Geolocation ───────────────────────────────────────────────────────
            case 'geolocation.getCurrentPosition':
            case 'location.current':
                if (cap?.Geolocation) return await cap.Geolocation.getCurrentPosition(args);
                if (typeof navigator !== 'undefined' && navigator.geolocation) {
                    return new Promise((resolve, reject)=>{
                        navigator.geolocation.getCurrentPosition((pos)=>resolve({
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                                accuracy: pos.coords.accuracy,
                                timestamp: pos.timestamp
                            }), (err)=>reject(new Error(err.message)));
                    });
                }
                return {
                    latitude: 37.7749,
                    longitude: -122.4194,
                    accuracy: 10,
                    timestamp: Date.now()
                };
            // ─── Filesystem ────────────────────────────────────────────────────────
            case 'filesystem.readFile':
            case 'files.read':
                if (cap?.Filesystem) return await cap.Filesystem.readFile(args);
                return {
                    data: `[File Content for ${args.path || 'document.pdf'}]`,
                    encoding: 'utf8'
                };
            case 'filesystem.writeFile':
            case 'files.write':
                if (cap?.Filesystem) return await cap.Filesystem.writeFile(args);
                return {
                    path: args.path || 'doc.pdf',
                    bytesWritten: (args.data || '').length,
                    success: true
                };
            case 'filesystem.deleteFile':
            case 'files.delete':
                if (cap?.Filesystem) return await cap.Filesystem.deleteFile(args);
                return {
                    success: true
                };
            // ─── Push Notifications ────────────────────────────────────────────────
            case 'push.register':
                if (cap?.PushNotifications) return await cap.PushNotifications.register();
                return {
                    token: `push_token_${this.pluginId}_${Date.now()}`
                };
            // ─── Device ────────────────────────────────────────────────────────────
            case 'device.getInfo':
                if (cap?.Device) return await cap.Device.getInfo();
                return {
                    platform: 'web',
                    osVersion: '1.0',
                    model: 'Browser',
                    manufacturer: 'Generic'
                };
            // ─── Haptics ───────────────────────────────────────────────────────────
            case 'haptics.impact':
                if (cap?.Haptics) return await cap.Haptics.impact(args);
                if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(50);
                return {
                    success: true
                };
            // ─── Biometrics ────────────────────────────────────────────────────────
            case 'biometrics.authenticate':
            case 'biometric.authenticate':
                if (cap?.Biometric) return await cap.Biometric.authenticate(args);
                return {
                    success: true,
                    timestamp: Date.now()
                };
            // ─── Contacts ──────────────────────────────────────────────────────────
            case 'contacts.getContacts':
            case 'contacts.list':
                if (cap?.Contacts) return await cap.Contacts.getContacts(args);
                return [
                    {
                        id: 'c1',
                        displayName: 'Dr. Sarah Connor',
                        phone: '+1 555-0192'
                    },
                    {
                        id: 'c2',
                        displayName: 'Dr. Marcus Vance',
                        phone: '+1 555-0144'
                    }
                ];
            default:
                throw new Error(`Unsupported native capability method '${apiName}'`);
        }
    }
    respondSuccess(target, targetOrigin, id, result) {
        if (!target) return;
        const origin = targetOrigin && targetOrigin !== 'null' ? targetOrigin : '*';
        target.postMessage({
            id,
            requestId: id,
            type: 'PINGDART_NATIVE_RESPONSE',
            __pingdart_native_result__: id,
            success: true,
            result
        }, origin);
    }
    respondError(target, targetOrigin, id, code, message) {
        if (!target) return;
        const origin = targetOrigin && targetOrigin !== 'null' ? targetOrigin : '*';
        target.postMessage({
            id,
            requestId: id,
            type: 'PINGDART_NATIVE_RESPONSE',
            __pingdart_native_result__: id,
            success: false,
            error: {
                code,
                message
            }
        }, origin);
    }
}
}),
"[project]/src/app/user/components/modules/NativeApprovalDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeApprovalDialog",
    ()=>NativeApprovalDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/PermissionManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NativeApprovalDialog() {
    const [currentRequest, setCurrentRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resolvePromise, setResolvePromise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unbind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$PermissionManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerPermissionPromptHandler"])((req)=>{
            return new Promise((resolve)=>{
                setCurrentRequest(req);
                setResolvePromise(()=>resolve);
            });
        });
        return ()=>unbind();
    }, []);
    if (!currentRequest || !resolvePromise) return null;
    const handleChoice = (choice)=>{
        const resolve = resolvePromise;
        setCurrentRequest(null);
        setResolvePromise(null);
        if (resolve) resolve(choice);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md p-6 bg-white dark:bg-[#1f2937] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 text-slate-900 dark:text-slate-100 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[14px] font-extrabold tracking-wider uppercase text-slate-400 font-mono",
                                    children: "SECURITY PERMISSION REQUEST"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-extrabold text-slate-900 dark:text-white leading-snug",
                                    children: currentRequest.pluginName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: "This plugin is requesting device capability access."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-extrabold text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentRequest.actionLabel
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono",
                            children: currentRequest.permission
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleChoice('always'),
                            className: "w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                " Allow Always"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleChoice('once'),
                                    className: "w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition-all",
                                    children: "Allow Once"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleChoice('denied'),
                                    className: "w-full py-2.5 px-4 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-600 dark:text-rose-400 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        " Deny"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/NativeApprovalDialog.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicModuleRenderer",
    ()=>DynamicModuleRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlusSignIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/pluginRegistry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$NativeBridgeGateway$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/plugins/native/NativeBridgeGateway.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$NativeApprovalDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/NativeApprovalDialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// ─────────────────────────────────────────────────────────────────────────────
// LocalPluginIframe
// pingdart dev compiles the developer's Dashboard.tsx on-the-fly via esbuild
// and serves the result at http://localhost:<sandboxPort>/plugin-ui
// This iframe loads that compiled bundle directly — no mock data, real plugin UI.
// ─────────────────────────────────────────────────────────────────────────────
function LocalPluginIframe({ onBack, pluginName, sandboxPort }) {
    const [iframeKey, setIframeKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const pluginUiUrl = `http://localhost:${sandboxPort}/plugin-ui`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full bg-slate-50 dark:bg-[#111827] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 flex-shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1f2937] flex items-center gap-3 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors",
                        title: "Back",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: "⚡"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-slate-900 dark:text-white truncate",
                                children: pluginName
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex-shrink-0",
                                children: "DEV"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[14px] font-mono text-slate-500 dark:text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    pluginUiUrl
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIframeKey((k)=>k + 1),
                                className: "p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors text-xs font-mono",
                                title: "Hot-reload plugin UI",
                                children: "🔄"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.open(pluginUiUrl, "_blank"),
                                className: "p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors text-xs",
                                title: "Open plugin in new tab",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: pluginUiUrl,
                className: "flex-1 w-full border-0 bg-white",
                title: `${pluginName} — PingDart Dev Sandbox`,
                allow: "clipboard-read; clipboard-write",
                sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            }, iframeKey, false, {
                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function DynamicModuleRenderer({ moduleId, moduleInfo, initialSubTab, onBack }) {
    const [manifest, setManifest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(moduleInfo?.manifestJson || null);
    const [moduleDetails, setModuleDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(moduleInfo || null);
    const [activeScreenId, setActiveScreenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSubTab || "");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Modal State
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // ─── Local dev plugin detection ────────────────────────────────────────────
    // If window.__PINGDART_LOCAL_PLUGIN__ is set (injected by pingdart dev proxy),
    // fetch the real manifest.json from the dev server instead of using the catalog.
    // ────────────────────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const localPlugin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // ─── Normal catalog-based loading ────────────────────────────────────────
        if (!manifest || !moduleDetails) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pluginApi"].getCatalog().then((res)=>{
                const mod = res.modules.find((m)=>m.id === moduleId);
                if (mod) {
                    setModuleDetails(mod);
                    setManifest(mod.manifestJson);
                    if (!activeScreenId && mod.manifestJson?.sidebar?.length) {
                        setActiveScreenId(mod.manifestJson.sidebar[0].id);
                    }
                }
            }).catch(console.warn);
        } else if (!activeScreenId && manifest?.sidebar?.length) {
            setActiveScreenId(manifest.sidebar[0].id);
        }
    }, [
        moduleId,
        manifest
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialSubTab) {
            setActiveScreenId(initialSubTab);
        }
    }, [
        initialSubTab
    ]);
    // Current active screen definition from JSON
    const currentScreen = manifest?.sidebar?.find((s)=>s.id === activeScreenId) || manifest?.sidebar?.[0];
    const entityType = currentScreen?.entityType || currentScreen?.id || "record";
    // Load records for active screen
    const loadScreenRecords = ()=>{
        setIsLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pluginApi"].getRecords(moduleId, entityType).then((data)=>{
            setRecords(data);
            setIsLoading(false);
        }).catch((err)=>{
            console.warn("Failed loading records:", err);
            setIsLoading(false);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Skip records fetch for local dev plugins — they render their own UI
        // and don't have backend DB tables, causing noisy 500 errors.
        const isLocalPlugin = "undefined" !== "undefined" && !!window.__PINGDART_LOCAL_PLUGIN__;
        if (moduleId && entityType && !isLocalPlugin) {
            loadScreenRecords();
        }
    }, [
        moduleId,
        entityType,
        activeScreenId
    ]);
    // Handle Form Submission from JSON Schema
    const handleSubmitRecord = async (e)=>{
        e.preventDefault();
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pluginApi"].createRecord(moduleId, entityType, {
                data: formData
            });
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Record created in ${currentScreen?.label || "module"}! ✓`);
                setIsModalOpen(false);
                setFormData({});
                loadScreenRecords();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(res.error || "Failed to create record.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to create record.");
        }
    };
    // Handle Delete Record
    const handleDeleteRecord = async (recordId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pluginRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pluginApi"].deleteRecord(moduleId, entityType, recordId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Record deleted.");
            loadScreenRecords();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete.");
        }
    };
    const screens = manifest?.sidebar || [];
    const fields = currentScreen?.fields || [];
    const primaryField = fields.find((f)=>f.primary) || fields[0] || {
        name: "title",
        label: "Title"
    };
    const viewType = currentScreen?.viewType || "table";
    const filteredRecords = records.filter((r)=>{
        if (!searchQuery) return true;
        const jsonStr = JSON.stringify(r.data || {}).toLowerCase();
        return jsonStr.includes(searchQuery.toLowerCase());
    });
    // ─── Native Bridge Gateway Initialization ─────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pId = moduleDetails?.id || moduleId;
        const pName = moduleDetails?.name || manifest?.name || `Plugin ${pId}`;
        const gateway = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$plugins$2f$native$2f$NativeBridgeGateway$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeBridgeGateway"]({
            tenantId: 'default',
            pluginId: pId,
            pluginName: pName,
            manifest: manifest
        });
        gateway.mount();
        return ()=>gateway.unmount();
    }, [
        moduleId,
        moduleDetails,
        manifest
    ]);
    // ─── Local dev: render the esbuild-compiled Dashboard.tsx via iframe ─────────
    // pingdart dev compiles Dashboard.tsx and serves it at /plugin-ui
    const localPlugin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$NativeApprovalDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeApprovalDialog"], {}, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-slate-100 overflow-hidden font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1f2937] flex flex-col justify-between flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5",
                                                                children: [
                                                                    "⚡ ",
                                                                    moduleDetails?.name || "Plugin Sandbox"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] text-slate-400 font-mono",
                                                                children: [
                                                                    "v",
                                                                    moduleDetails?.version || "1.0.0",
                                                                    " · Local Dev"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300",
                                                children: "ACTIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "p-3 space-y-1",
                                        children: screens.map((scr)=>{
                                            const isActive = activeScreenId === scr.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveScreenId(scr.id),
                                                className: `w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${isActive ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30 font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: scr.icon || "📊"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: scr.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 21
                                                }, this)
                                            }, scr.id, false, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-t border-slate-100 dark:border-slate-800 text-[14px] text-slate-400 font-mono",
                                children: "PingDart Developer Sandbox Proxy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50 dark:bg-[#111827]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1f2937] px-6 flex items-center justify-between flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-extrabold text-sm text-slate-900 dark:text-white capitalize",
                                        children: [
                                            currentScreen?.label || "Overview",
                                            " Management Panel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-48",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        placeholder: "Search...",
                                                        className: "w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                        size: 14,
                                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setFormData({});
                                                    setIsModalOpen(true);
                                                },
                                                className: "px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, this),
                                                    " + New Record"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6 max-w-[1600px] mx-auto w-full",
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-12 text-center text-xs text-slate-400 font-mono",
                                    children: "Loading dynamic JSON records..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this) : filteredRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-12 text-center bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl",
                                            children: moduleDetails?.icon || "📁"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white",
                                            children: [
                                                "No ",
                                                currentScreen?.label || "Records",
                                                " Found"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 max-w-sm mx-auto",
                                            children: "Create your first record using the action button or receive entries directly through customer chat interactions."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setFormData({});
                                                setIsModalOpen(true);
                                            },
                                            className: "px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-xs",
                                            children: "+ Create First Record"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this) : viewType === "table" ? /* TABLE VIEW RENDERER */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#1f2937] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase text-[14px] tracking-wider",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        fields.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-5 py-3.5",
                                                                children: f.label
                                                            }, idx, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 25
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-5 py-3.5 text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-100 dark:divide-slate-800",
                                                children: filteredRecords.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors",
                                                        children: [
                                                            fields.map((f, idx)=>{
                                                                const val = rec.data?.[f.name];
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-5 py-3.5 font-medium",
                                                                    children: f.type === "badge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[14px] font-black uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600",
                                                                        children: val || "Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 33
                                                                    }, this) : f.type === "currency" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono font-bold text-emerald-600 dark:text-emerald-400",
                                                                        children: val?.startsWith("$") ? val : `$${val || 0}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                        lineNumber: 411,
                                                                        columnNumber: 33
                                                                    }, this) : f.type === "code" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono font-black px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950 text-purple-600 tracking-wider",
                                                                        children: val || "---"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 33
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: idx === 0 ? "font-bold text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300",
                                                                        children: val || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                        lineNumber: 419,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, idx, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 29
                                                                }, this);
                                                            }),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-5 py-3.5 text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteRecord(rec.id),
                                                                    className: "p-1 text-slate-400 hover:text-red-500 transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, rec.id, true, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this) : /* CARD GRID VIEW RENDERER */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: filteredRecords.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 rounded-2xl bg-white dark:bg-[#1f2937] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-sm text-slate-900 dark:text-white",
                                                                    children: rec.data?.[primaryField.name] || `Record #${rec.id}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-400",
                                                                    children: fields[1] && rec.data?.[fields[1].name] ? String(rec.data[fields[1].name]) : "Entity Record"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 23
                                                        }, this),
                                                        fields.find((f)=>f.type === "badge") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[14px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-600",
                                                            children: rec.data?.[fields.find((f)=>f.type === "badge").name] || "Available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-slate-50 dark:bg-slate-800/70 rounded-xl space-y-1.5 text-xs",
                                                    children: fields.filter((f)=>f !== primaryField && f.type !== "badge").map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-400 font-medium",
                                                                    children: [
                                                                        f.label,
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-bold ${f.type === "currency" ? "text-indigo-600 dark:text-indigo-400 font-mono" : "text-slate-800 dark:text-slate-200"}`,
                                                                    children: rec.data?.[f.name] || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[14px] font-mono text-slate-400",
                                                            children: [
                                                                "ID #",
                                                                rec.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteRecord(rec.id),
                                                            className: "p-1 text-slate-400 hover:text-red-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, rec.id, true, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-[#1f2937] rounded-3xl p-6 w-full max-w-md space-y-4 shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-black",
                                                    children: currentScreen?.primaryAction?.label || `+ Add ${currentScreen?.label || "Record"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                                    children: "JSON Schema Form"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmitRecord,
                                            className: "space-y-3",
                                            children: [
                                                fields.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1",
                                                                children: [
                                                                    f.label,
                                                                    " ",
                                                                    f.required && "*"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 23
                                                            }, this),
                                                            f.type === "select" || f.type === "badge" && f.options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: formData[f.name] || "",
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        [f.name]: e.target.value
                                                                    }),
                                                                className: "w-full px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none",
                                                                children: (f.options || [
                                                                    "Option 1",
                                                                    "Option 2"
                                                                ]).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: opt,
                                                                        children: opt
                                                                    }, opt, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                        lineNumber: 513,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 25
                                                            }, this) : f.type === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 3,
                                                                value: formData[f.name] || "",
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        [f.name]: e.target.value
                                                                    }),
                                                                placeholder: `Enter ${f.label.toLowerCase()}...`,
                                                                className: "w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 25
                                                            }, this) : f.type === "date" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formData[f.name] || "",
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        [f.name]: e.target.value
                                                                    }),
                                                                className: "w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: f.type === "number" || f.type === "currency" ? "number" : "text",
                                                                step: f.type === "currency" ? "any" : undefined,
                                                                value: formData[f.name] || "",
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        [f.name]: e.target.value
                                                                    }),
                                                                placeholder: `e.g. ${f.label}`,
                                                                className: "w-full px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setIsModalOpen(false),
                                                            className: "flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: "flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold hover:from-indigo-700 hover:to-purple-700 shadow-md",
                                                            children: "Save Record ✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_3207ef0f._.js.map