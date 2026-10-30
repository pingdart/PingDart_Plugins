(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/biometrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateBiometric",
    ()=>authenticateBiometric,
    "deleteBiometricLoginCredentials",
    ()=>deleteBiometricLoginCredentials,
    "getBiometricLoginCredentials",
    ()=>getBiometricLoginCredentials,
    "getSavedLoginUser",
    ()=>getSavedLoginUser,
    "isBiometricLoginEnabled",
    ()=>isBiometricLoginEnabled,
    "isBiometricsAvailable",
    ()=>isBiometricsAvailable,
    "saveBiometricLoginCredentials",
    ()=>saveBiometricLoginCredentials,
    "setBiometricLoginEnabled",
    ()=>setBiometricLoginEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
async function authenticateBiometric(reason = "Verify fingerprint, Face ID, or device PIN to unlock") {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].isAvailable({
                useFallback: true
            });
            if (result.isAvailable) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].verifyIdentity({
                    reason,
                    title: "PingDart App Lock",
                    subtitle: "Authentication Required",
                    description: reason,
                    useFallback: true,
                    maxAttempts: 3
                });
                return true;
            }
        } catch (err) {
            console.warn("[NativeBiometric] Authentication failed or cancelled:", err);
            return false;
        }
    }
    // Web fallback using WebAuthn (if available)
    if ("object" !== "undefined" && window.PublicKeyCredential && navigator.credentials) {
        try {
            const authPromise = (async ()=>{
                const isAvailable = await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
                if (isAvailable) {
                    const challenge = new Uint8Array(32);
                    window.crypto.getRandomValues(challenge);
                    const userId = new Uint8Array(16);
                    window.crypto.getRandomValues(userId);
                    const credential = await navigator.credentials.create({
                        publicKey: {
                            challenge,
                            rp: {
                                name: "PingDart App Lock"
                            },
                            user: {
                                id: userId,
                                name: "pingdart-app-lock",
                                displayName: "PingDart Device Auth"
                            },
                            pubKeyCredParams: [
                                {
                                    alg: -7,
                                    type: "public-key"
                                }
                            ],
                            timeout: 5000,
                            authenticatorSelection: {
                                authenticatorAttachment: "platform",
                                userVerification: "preferred"
                            }
                        }
                    });
                    return !!credential;
                }
                return true;
            })();
            const timeoutPromise = new Promise((resolve)=>{
                setTimeout(()=>resolve(true), 3500);
            });
            return await Promise.race([
                authPromise,
                timeoutPromise
            ]);
        } catch (err) {
            console.warn("[Biometrics] WebAuthn error or cancelled:", err);
            return false;
        }
    }
    return true;
}
const BIOMETRIC_SERVER_NAME = "pingdart_login";
const BIOMETRIC_ENABLED_KEY = "pingdart_biometric_login_enabled";
const LAST_LOGIN_USER_KEY = "pingdart_saved_login_user";
async function isBiometricsAvailable() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].isAvailable({
                useFallback: true
            });
            return {
                available: Boolean(result === null || result === void 0 ? void 0 : result.isAvailable),
                biometryType: (result === null || result === void 0 ? void 0 : result.biometryType) ? String(result.biometryType) : undefined
            };
        } catch (e) {
            return {
                available: false
            };
        }
    }
    if ("object" !== "undefined" && window.PublicKeyCredential) {
        try {
            const available = await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
            return {
                available: Boolean(available),
                biometryType: "webauthn"
            };
        } catch (e) {
            return {
                available: false
            };
        }
    }
    return {
        available: false
    };
}
function isBiometricLoginEnabled() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(BIOMETRIC_ENABLED_KEY) === "true";
}
function setBiometricLoginEnabled(enabled, username) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (enabled) {
        localStorage.setItem(BIOMETRIC_ENABLED_KEY, "true");
        if (username) {
            localStorage.setItem(LAST_LOGIN_USER_KEY, username);
        }
    } else {
        localStorage.removeItem(BIOMETRIC_ENABLED_KEY);
    }
}
function getSavedLoginUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(LAST_LOGIN_USER_KEY) || "";
}
async function saveBiometricLoginCredentials(username, passwordOrToken) {
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(BIOMETRIC_ENABLED_KEY, "true");
        localStorage.setItem(LAST_LOGIN_USER_KEY, username);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].setCredentials({
                username,
                password: passwordOrToken,
                server: BIOMETRIC_SERVER_NAME
            });
            return true;
        } catch (err) {
            console.warn("[NativeBiometric] Failed to save credentials to keystore:", err);
            return false;
        }
    }
    return true;
}
async function getBiometricLoginCredentials() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            const creds = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].getCredentials({
                server: BIOMETRIC_SERVER_NAME
            });
            if (creds && creds.username) {
                return {
                    username: creds.username,
                    password: creds.password
                };
            }
        } catch (err) {
            console.warn("[NativeBiometric] getCredentials failed or user cancelled:", err);
            return null;
        }
    }
    // Web fallback: verify identity
    const ok = await authenticateBiometric("Sign in to PingDart with Face ID / Biometrics");
    if (ok) {
        const savedUser = getSavedLoginUser();
        if (savedUser) {
            return {
                username: savedUser
            };
        }
    }
    return null;
}
async function deleteBiometricLoginCredentials() {
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem(BIOMETRIC_ENABLED_KEY);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NativeBiometric"].deleteCredentials({
                server: BIOMETRIC_SERVER_NAME
            });
            return true;
        } catch (err) {
            console.warn("[NativeBiometric] Failed to delete credentials:", err);
            return false;
        }
    }
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/capacitor-native-biometric/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! Capacitor: https://capacitorjs.com/ - MIT License */ __turbopack_context__.s([
    "Capacitor",
    ()=>Capacitor,
    "CapacitorException",
    ()=>CapacitorException,
    "CapacitorPlatforms",
    ()=>CapacitorPlatforms,
    "ExceptionCode",
    ()=>ExceptionCode,
    "Plugins",
    ()=>Plugins,
    "WebPlugin",
    ()=>WebPlugin,
    "WebView",
    ()=>WebView,
    "addPlatform",
    ()=>addPlatform,
    "registerPlugin",
    ()=>registerPlugin,
    "registerWebPlugin",
    ()=>registerWebPlugin,
    "setPlatform",
    ()=>setPlatform
]);
const createCapacitorPlatforms = (win)=>{
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', {
        name: 'web'
    });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: {
            name: 'web'
        },
        platforms: defaultPlatformMap
    };
    const addPlatform = (name, platform)=>{
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name)=>{
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win)=>win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */ const CapacitorPlatforms = /*#__PURE__*/ initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable");
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */ const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */ const setPlatform = CapacitorPlatforms.setPlatform;
const legacyRegisterWebPlugin = (cap, webPlugin)=>{
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};
var ExceptionCode;
(function(ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */ ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */ ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code){
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win)=>{
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    } else {
        return 'web';
    }
};
const createCapacitor = (win)=>{
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = cap.Plugins = cap.Plugins || {};
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */ const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = ()=>{
        return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = ()=>getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName)=>{
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName)=>{
        var _a;
        return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h)=>h.name === pluginName);
    };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err)=>win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName)=>{
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {})=>{
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async ()=>{
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
            } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
                jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = await jsImplementations['web']() : jsImplementation = jsImplementations['web'];
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop)=>{
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m)=>prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options)=>cap.nativePromise(pluginName, prop.toString(), options);
                    } else {
                        return (options, callback)=>cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                } else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            } else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop)=>{
            let remove;
            const wrapper = (...args)=>{
                const p = loadPluginImplementation().then((impl)=>{
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    } else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async ()=>remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = ()=>`${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback)=>{
            const call = addListener({
                eventName
            }, callback);
            const remove = async ()=>{
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId
                }, callback);
            };
            const p = new Promise((resolve)=>call.then(()=>resolve({
                        remove
                    })));
            p.remove = async ()=>{
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get (_, prop) {
                switch(prop){
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return ()=>({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            }
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...pluginHeader ? [
                    platform
                ] : []
            ])
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = (filePath)=>filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win)=>win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable");
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */ const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */ const registerWebPlugin = (plugin)=>legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */ class WebPlugin {
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async ()=>this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({
            remove
        });
        Object.defineProperty(p, 'remove', {
            value: async ()=>{
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            }
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for(const listener in this.windowListeners){
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach((listener)=>listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: (event)=>{
                this.notifyListeners(pluginEventName, event);
            }
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
    constructor(config){
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
}
const WebView = /*#__PURE__*/ registerPlugin('WebView');
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/capacitor-native-biometric/dist/esm/definitions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BiometricAuthError",
    ()=>BiometricAuthError,
    "BiometryType",
    ()=>BiometryType
]);
var BiometryType;
(function(BiometryType) {
    // Android, iOS
    BiometryType[BiometryType["NONE"] = 0] = "NONE";
    // iOS
    BiometryType[BiometryType["TOUCH_ID"] = 1] = "TOUCH_ID";
    // iOS
    BiometryType[BiometryType["FACE_ID"] = 2] = "FACE_ID";
    // Android
    BiometryType[BiometryType["FINGERPRINT"] = 3] = "FINGERPRINT";
    // Android
    BiometryType[BiometryType["FACE_AUTHENTICATION"] = 4] = "FACE_AUTHENTICATION";
    // Android
    BiometryType[BiometryType["IRIS_AUTHENTICATION"] = 5] = "IRIS_AUTHENTICATION";
    // Android
    BiometryType[BiometryType["MULTIPLE"] = 6] = "MULTIPLE";
})(BiometryType || (BiometryType = {}));
var BiometricAuthError;
(function(BiometricAuthError) {
    BiometricAuthError[BiometricAuthError["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    BiometricAuthError[BiometricAuthError["BIOMETRICS_UNAVAILABLE"] = 1] = "BIOMETRICS_UNAVAILABLE";
    BiometricAuthError[BiometricAuthError["USER_LOCKOUT"] = 2] = "USER_LOCKOUT";
    BiometricAuthError[BiometricAuthError["BIOMETRICS_NOT_ENROLLED"] = 3] = "BIOMETRICS_NOT_ENROLLED";
    BiometricAuthError[BiometricAuthError["USER_TEMPORARY_LOCKOUT"] = 4] = "USER_TEMPORARY_LOCKOUT";
    BiometricAuthError[BiometricAuthError["AUTHENTICATION_FAILED"] = 10] = "AUTHENTICATION_FAILED";
    BiometricAuthError[BiometricAuthError["APP_CANCEL"] = 11] = "APP_CANCEL";
    BiometricAuthError[BiometricAuthError["INVALID_CONTEXT"] = 12] = "INVALID_CONTEXT";
    BiometricAuthError[BiometricAuthError["NOT_INTERACTIVE"] = 13] = "NOT_INTERACTIVE";
    BiometricAuthError[BiometricAuthError["PASSCODE_NOT_SET"] = 14] = "PASSCODE_NOT_SET";
    BiometricAuthError[BiometricAuthError["SYSTEM_CANCEL"] = 15] = "SYSTEM_CANCEL";
    BiometricAuthError[BiometricAuthError["USER_CANCEL"] = 16] = "USER_CANCEL";
    BiometricAuthError[BiometricAuthError["USER_FALLBACK"] = 17] = "USER_FALLBACK";
})(BiometricAuthError || (BiometricAuthError = {})); //# sourceMappingURL=definitions.js.map
}),
"[project]/node_modules/capacitor-native-biometric/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeBiometric",
    ()=>NativeBiometric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/capacitor-native-biometric/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$dist$2f$esm$2f$definitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/capacitor-native-biometric/dist/esm/definitions.js [app-client] (ecmascript)");
;
const NativeBiometric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$capacitor$2d$native$2d$biometric$2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPlugin"])('NativeBiometric', {
    web: ()=>__turbopack_context__.A("[project]/node_modules/capacitor-native-biometric/dist/esm/web.js [app-client] (ecmascript, async loader)").then((m)=>new m.NativeBiometricWeb())
});
;
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=_4e82c54d._.js.map