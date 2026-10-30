(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/e2ee/keyStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * keyStore.ts
 * Low-level IndexedDB persistence for E2EE keys using the `idb` library.
 * All data stored here is per-user (namespaced by userId).
 */ __turbopack_context__.s([
    "clearAllKeys",
    ()=>clearAllKeys,
    "deletePreKey",
    ()=>deletePreKey,
    "deleteSession",
    ()=>deleteSession,
    "getOrCreateUserMasterKey",
    ()=>getOrCreateUserMasterKey,
    "hasSession",
    ()=>hasSession,
    "loadDhKeyPair",
    ()=>loadDhKeyPair,
    "loadIdentityKeyPair",
    ()=>loadIdentityKeyPair,
    "loadPreKey",
    ()=>loadPreKey,
    "loadRegistrationId",
    ()=>loadRegistrationId,
    "loadRotationMetadata",
    ()=>loadRotationMetadata,
    "loadSession",
    ()=>loadSession,
    "loadSignedPreKey",
    ()=>loadSignedPreKey,
    "loadUserMasterKey",
    ()=>loadUserMasterKey,
    "saveDhKeyPair",
    ()=>saveDhKeyPair,
    "saveIdentityKeyPair",
    ()=>saveIdentityKeyPair,
    "savePreKey",
    ()=>savePreKey,
    "saveRegistrationId",
    ()=>saveRegistrationId,
    "saveRotationMetadata",
    ()=>saveRotationMetadata,
    "saveSession",
    ()=>saveSession,
    "saveSignedPreKey",
    ()=>saveSignedPreKey,
    "saveUserMasterKey",
    ()=>saveUserMasterKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
;
;
const DB_NAME = 'pingdart_e2ee_v2';
const DB_VERSION = 2; // Upgraded to v2 for random userMasterKey & rotationMetadata
const DEBUG_KEYSTORE = false; // Toggle to true for verbose keyStore debugging logs
function logDebug(...args) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
let db = null;
async function getDb() {
    if (db) return db;
    db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(DB_NAME, DB_VERSION, {
        upgrade (database, oldVersion) {
            // Identity Key Pair: { pubKey: ArrayBuffer, privKey: ArrayBuffer }
            if (!database.objectStoreNames.contains('identityKeyPair')) {
                database.createObjectStore('identityKeyPair');
            }
            // Local registration ID (per Signal spec)
            if (!database.objectStoreNames.contains('registrationId')) {
                database.createObjectStore('registrationId');
            }
            // Pre-Keys: indexed by keyId (number)
            if (!database.objectStoreNames.contains('preKeys')) {
                database.createObjectStore('preKeys');
            }
            // Signed Pre-Keys
            if (!database.objectStoreNames.contains('signedPreKeys')) {
                database.createObjectStore('signedPreKeys');
            }
            // Sessions: keyed by address string (e.g. "userId.deviceId")
            if (!database.objectStoreNames.contains('sessions')) {
                database.createObjectStore('sessions');
            }
            // P-256 ECDH key pair for deterministic shared-key encryption (v2)
            if (!database.objectStoreNames.contains('dhKeyPair')) {
                database.createObjectStore('dhKeyPair');
            }
            // Cryptographically random 256-bit AES user master key (v2 migration)
            if (!database.objectStoreNames.contains('userMasterKey')) {
                database.createObjectStore('userMasterKey');
            }
            // Key rotation metadata (v2 migration)
            if (!database.objectStoreNames.contains('rotationMetadata')) {
                database.createObjectStore('rotationMetadata');
            }
        }
    });
    return db;
}
function getPrefix() {
    var _useAuthStore_getState_user;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let userId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
    if (!userId) {
        try {
            const stored = localStorage.getItem('auth-storage');
            if (stored) {
                var _parsed_state_user, _parsed_state;
                const parsed = JSON.parse(stored);
                userId = parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : (_parsed_state_user = _parsed_state.user) === null || _parsed_state_user === void 0 ? void 0 : _parsed_state_user.id;
            }
        } catch (_) {}
    }
    return userId ? `user:${userId}:` : 'anonymous:';
}
async function saveIdentityKeyPair(keyPair) {
    const d = await getDb();
    await d.put('identityKeyPair', keyPair, getPrefix() + 'keyPair');
}
async function loadIdentityKeyPair() {
    const d = await getDb();
    let key = await d.get('identityKeyPair', getPrefix() + 'keyPair');
    if (!key && getPrefix().startsWith('user:')) {
        const anonKey = await d.get('identityKeyPair', 'anonymous:keyPair');
        if (anonKey) {
            logDebug('[E2EE] Migrating anonymous identity key pair to user scope...');
            await d.put('identityKeyPair', anonKey, getPrefix() + 'keyPair');
            key = anonKey;
        }
    }
    return key;
}
async function saveRegistrationId(id) {
    const d = await getDb();
    await d.put('registrationId', id, getPrefix() + 'id');
}
async function loadRegistrationId() {
    const d = await getDb();
    return d.get('registrationId', getPrefix() + 'id');
}
async function savePreKey(keyId, keyPair) {
    const d = await getDb();
    await d.put('preKeys', keyPair, getPrefix() + keyId);
}
async function loadPreKey(keyId) {
    const d = await getDb();
    return d.get('preKeys', getPrefix() + keyId);
}
async function deletePreKey(keyId) {
    const d = await getDb();
    await d.delete('preKeys', getPrefix() + keyId);
}
async function saveSignedPreKey(keyId, keyPair) {
    const d = await getDb();
    await d.put('signedPreKeys', keyPair, getPrefix() + keyId);
}
async function loadSignedPreKey(keyId) {
    const d = await getDb();
    return d.get('signedPreKeys', getPrefix() + keyId);
}
async function saveSession(address, record) {
    const d = await getDb();
    await d.put('sessions', record, getPrefix() + address);
}
async function loadSession(address) {
    const d = await getDb();
    return d.get('sessions', getPrefix() + address);
}
async function deleteSession(address) {
    const d = await getDb();
    await d.delete('sessions', getPrefix() + address);
}
async function hasSession(address) {
    const d = await getDb();
    const val = await d.get('sessions', getPrefix() + address);
    return val !== undefined;
}
async function saveDhKeyPair(pair) {
    const d = await getDb();
    await d.put('dhKeyPair', pair, getPrefix() + 'dhKeyPair');
}
async function loadDhKeyPair() {
    const d = await getDb();
    let pair = await d.get('dhKeyPair', getPrefix() + 'dhKeyPair');
    if (!pair && getPrefix().startsWith('user:')) {
        const anonPair = await d.get('dhKeyPair', 'anonymous:dhKeyPair');
        if (anonPair) {
            logDebug('[E2EE] Migrating anonymous DH key pair to user scope...');
            await d.put('dhKeyPair', anonPair, getPrefix() + 'dhKeyPair');
            pair = anonPair;
        }
    }
    return pair;
}
async function saveUserMasterKey(rawKey) {
    const d = await getDb();
    await d.put('userMasterKey', rawKey, getPrefix() + 'masterKey');
}
async function loadUserMasterKey() {
    const d = await getDb();
    let raw = await d.get('userMasterKey', getPrefix() + 'masterKey');
    if (!raw && getPrefix().startsWith('user:')) {
        const anonRaw = await d.get('userMasterKey', 'anonymous:masterKey');
        if (anonRaw) {
            logDebug('[E2EE] Migrating anonymous master key to user scope...');
            await d.put('userMasterKey', anonRaw, getPrefix() + 'masterKey');
            raw = anonRaw;
        }
    }
    return raw;
}
async function getOrCreateUserMasterKey() {
    let raw = await loadUserMasterKey();
    if (!raw) {
        logDebug('[E2EE] Generating fresh 256-bit cryptographically random master key...');
        const bytes = window.crypto.getRandomValues(new Uint8Array(32));
        raw = bytes.buffer;
        await saveUserMasterKey(raw);
    }
    return window.crypto.subtle.importKey('raw', raw, {
        name: 'AES-GCM'
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function saveRotationMetadata(meta) {
    const d = await getDb();
    await d.put('rotationMetadata', meta, getPrefix() + 'metadata');
}
async function loadRotationMetadata() {
    const d = await getDb();
    return d.get('rotationMetadata', getPrefix() + 'metadata');
}
async function clearAllKeys() {
    var _useAuthStore_getState_user;
    const userId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
    if (!userId || "object" === 'undefined') return;
    const d = await getDb();
    const prefix = `user:${userId}:`;
    const range = window.IDBKeyRange.bound(prefix, prefix + '\uffff');
    const tx = d.transaction([
        'identityKeyPair',
        'registrationId',
        'preKeys',
        'signedPreKeys',
        'sessions',
        'dhKeyPair',
        'userMasterKey',
        'rotationMetadata'
    ], 'readwrite');
    await Promise.all([
        tx.objectStore('identityKeyPair').delete(range),
        tx.objectStore('registrationId').delete(range),
        tx.objectStore('preKeys').delete(range),
        tx.objectStore('signedPreKeys').delete(range),
        tx.objectStore('sessions').delete(range),
        tx.objectStore('dhKeyPair').delete(range),
        tx.objectStore('userMasterKey').delete(range),
        tx.objectStore('rotationMetadata').delete(range)
    ]);
    await tx.done;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/e2ee/signalStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * signalStore.ts
 * Implements the Signal Protocol StorageType interface, backed by IndexedDB
 * (via keyStore.ts). This is the bridge between @privacyresearch/libsignal-protocol-typescript
 * and our persistent storage layer.
 */ __turbopack_context__.s([
    "SignalProtocolStore",
    ()=>SignalProtocolStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/keyStore.ts [app-client] (ecmascript)");
;
;
class SignalProtocolStore {
    // ─────────────── Identity Key ──────────────────────────────────
    async getIdentityKeyPair() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    }
    async getLocalRegistrationId() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
    }
    async saveIdentity(name, key) {
        // Normalize to user ID only (exclude device ID)
        const userId = name.split('.')[0];
        const existing = await this.loadIdentityKey(userId);
        if (existing) {
            // Check if key has changed
            const existingBytes = new Uint8Array(existing);
            const newBytes = new Uint8Array(key);
            if (existingBytes.length !== newBytes.length || existingBytes.some((b, i)=>b !== newBytes[i])) {
                // Key changed — update and signal replacement
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"](`identity:${userId}`, key);
                return true;
            }
            return false;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"](`identity:${userId}`, key);
        return false;
    }
    async isTrustedIdentity(name, key) {
        // Auto-trust new identity keys to support seamless key regeneration/updates
        return true;
    }
    async loadIdentityKey(identifier) {
        const userId = identifier.split('.')[0];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSession"](`identity:${userId}`);
    }
    // ─────────────── Pre-Keys ─────────────────────────────────────
    async loadPreKey(keyId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadPreKey"](Number(keyId));
    }
    async storePreKey(keyId, keyPair) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePreKey"](Number(keyId), keyPair);
    }
    async removePreKey(keyId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePreKey"](Number(keyId));
    }
    // ─────────────── Signed Pre-Keys ──────────────────────────────
    async loadSignedPreKey(keyId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSignedPreKey"](Number(keyId));
    }
    async storeSignedPreKey(keyId, keyPair) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSignedPreKey"](Number(keyId), keyPair);
    }
    async removeSignedPreKey(keyId) {
    // We never delete signed pre-keys (they may be needed for ongoing sessions)
    }
    // ─────────────── Sessions ─────────────────────────────────────
    async loadSession(identifier) {
        const buf = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSession"](`session:${identifier}`);
        if (!buf) return undefined;
        // Convert buffer back to binary string
        let binaryStr = '';
        const bytes = new Uint8Array(buf);
        for(let i = 0; i < bytes.length; i++){
            binaryStr += String.fromCharCode(bytes[i]);
        }
        // Legacy support: if the string stored in IndexedDB is actually a base64 
        // string (e.g. from an older buggy version that used btoa), it will start 
        // with 'eyJ' (base64 for '{"'). We must decode it so libsignal can parse it.
        if (binaryStr.startsWith('eyJ')) {
            try {
                binaryStr = atob(binaryStr);
            } catch (e) {
                console.warn('Failed to decode legacy base64 session', e);
            }
        }
        return binaryStr;
    }
    async storeSession(identifier, record) {
        // record is a binary string, NOT base64
        const bytes = new Uint8Array(record.length);
        for(let i = 0; i < record.length; i++){
            bytes[i] = record.charCodeAt(i);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"](`session:${identifier}`, bytes.buffer);
    }
    async removeSession(identifier) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSession"](`session:${identifier}`);
    }
    async removeAllSessions(identifier) {
        // For now we just remove the specific device 1 session
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSession"](`session:${identifier}.1`);
    }
    constructor(){
        // ─────────────── Direction enum compatibility ─────────────────
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "Direction", {
            SENDING: 1,
            RECEIVING: 2
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * e2eeService.ts
 * High-level E2EE service using the Signal Protocol.
 * ─ Generates and uploads keys on first login
 * ─ Establishes sessions via X3DH
 * ─ Encrypts outgoing messages
 * ─ Decrypts incoming messages
 *
 * Only 1:1 (direct) chats are encrypted.
 * Group chats remain plaintext (Sender Keys not implemented yet).
 */ __turbopack_context__.s([
    "E2EELinkRequiredError",
    ()=>E2EELinkRequiredError,
    "E2EERecoveryRequiredError",
    ()=>E2EERecoveryRequiredError,
    "buildSession",
    ()=>buildSession,
    "changeBackupPassword",
    ()=>changeBackupPassword,
    "clearDhSharedKeyCache",
    ()=>clearDhSharedKeyCache,
    "clearSessionWithUser",
    ()=>clearSessionWithUser,
    "decryptDeviceLinkPayload",
    ()=>decryptDeviceLinkPayload,
    "decryptMessage",
    ()=>decryptMessage,
    "encryptDeviceLinkPayload",
    ()=>encryptDeviceLinkPayload,
    "encryptMessage",
    ()=>encryptMessage,
    "ensureE2EEReady",
    ()=>ensureE2EEReady,
    "exportDeviceKeys",
    ()=>exportDeviceKeys,
    "generateAndSetRecoveryKey",
    ()=>generateAndSetRecoveryKey,
    "generateEphemeralKeys",
    ()=>generateEphemeralKeys,
    "getCachedPreview",
    ()=>getCachedPreview,
    "getSessionRebuildInfo",
    ()=>getSessionRebuildInfo,
    "hasSessionWith",
    ()=>hasSessionWith,
    "importDeviceKeys",
    ()=>importDeviceKeys,
    "initializeKeys",
    ()=>initializeKeys,
    "isE2EEInitialized",
    ()=>isE2EEInitialized,
    "isE2EEReady",
    ()=>isE2EEReady,
    "isEncryptedPayload",
    ()=>isEncryptedPayload,
    "markSessionForRebuild",
    ()=>markSessionForRebuild,
    "resetE2EEState",
    ()=>resetE2EEState,
    "setCachedPreview",
    ()=>setCachedPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$signalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/signalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/keyStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
async function getLibSignal() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const target = ("TURBOPACK compile-time truthy", 1) ? window : "TURBOPACK unreachable";
    if (target && !target.msrCrypto) {
        target.msrCrypto = {};
    }
    if ("TURBOPACK compile-time truthy", 1) {
        window.msrCrypto = target.msrCrypto;
        if (!window.global) {
            window.global = window;
        }
    }
    return await __turbopack_context__.A("[project]/node_modules/@privacyresearch/libsignal-protocol-typescript/lib/index.js [app-client] (ecmascript, async loader)");
}
;
;
;
;
class E2EELinkRequiredError extends Error {
    constructor(){
        super('E2EE keys must be transferred from your primary device via QR code');
        this.name = 'E2EELinkRequiredError';
    }
}
class E2EERecoveryRequiredError extends Error {
    constructor(){
        super('Server key backup decryption failed or missing. Backup recovery password required.');
        this.name = 'E2EERecoveryRequiredError';
    }
}
const DEBUG_E2EE = false; // Toggle to true for verbose E2EE debugging logs
function logDebug(...args) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
// ── Helpers: ArrayBuffer <-> base64 ────────────────────────────
function ab2b64(buf) {
    return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
function isValidBase64(str) {
    if (!str || typeof str !== 'string') return false;
    try {
        // Base64 strings should only contain A-Z, a-z, 0-9, +, /, and = for padding
        if (!/^[A-Za-z0-9+/]*={0,2}$/.test(str)) return false;
        // Check if length is valid (multiple of 4)
        if (str.length % 4 !== 0) return false;
        // Try to decode
        atob(str);
        return true;
    } catch (e) {
        return false;
    }
}
function b642ab(b64) {
    if (!b64 || typeof b64 !== 'string') {
        throw new Error(`[E2EE] Invalid base64 string provided to b642ab: ${b64}`);
    }
    try {
        const binaryStr = atob(b64);
        const bytes = new Uint8Array(binaryStr.length);
        for(let i = 0; i < binaryStr.length; i++){
            bytes[i] = binaryStr.charCodeAt(i);
        }
        return bytes.buffer;
    } catch (e) {
        throw new Error(`[E2EE] Failed to decode base64 string: ${e.message}. Input was: ${b64.substring(0, 20)}...`);
    }
}
// ── Singleton store instance ─────────────────────────────────────
let storeInstance = null;
// Cache for derived ECDH shared keys — TTL-aware to handle peer key rotations
// Entries expire after 5 minutes so stale keys from peer key changes don't persist
const DH_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const dhSharedKeyCache = new Map();
function getStore() {
    if (!storeInstance) storeInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$signalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignalProtocolStore"]();
    return storeInstance;
}
function resetE2EEState() {
    storeInstance = null;
    initPromise = null;
    initResolved = false;
    dhSharedKeyCache.clear();
    sessionNeedsRebuild.clear();
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            var _useAuthStore_getState_user;
            const uid = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
            if (uid) localStorage.removeItem(`e2ee_keys_configured_${uid}`);
        }
    } catch (_) {}
    logDebug('[E2EE] State reset — ready for next user session.');
}
// ── Constants ───────────────────────────────────────────────────
const DEVICE_ID = 1; // We only support single device per user
const SIGNED_PREKEY_ID = 1;
const NUM_ONE_TIME_PREKEYS = 100;
const PREKEY_LOW_WATERMARK = 20;
const sessionNeedsRebuild = new Map();
function markSessionForRebuild(userId, protocol = 'signal', reason = 'Decryption failure') {
    const info = {
        protocol,
        reason,
        timestamp: Date.now()
    };
    sessionNeedsRebuild.set(userId, info);
    console.warn(`[E2EE] Session with user ${userId} marked for rebuild on next send. Protocol: ${protocol}, Reason: ${reason}`);
}
function getSessionRebuildInfo(userId) {
    return sessionNeedsRebuild.get(userId);
}
// ── API helpers (lazy-loaded to avoid circular imports) ──────────
async function getChatApi() {
    const mod = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
    return mod.chatApi;
}
// ── Key Backup (Escrow) Utilities ────────────────────────────────
async function deriveMasterKey(password, salt = 'pingdart_e2ee_salt', iterations = 100000) {
    const encoder = new TextEncoder();
    let saltBuffer;
    if (typeof salt === 'string') {
        saltBuffer = encoder.encode(salt);
    } else {
        saltBuffer = salt;
    }
    const keyMaterial = await window.crypto.subtle.importKey('raw', encoder.encode(password), {
        name: 'PBKDF2'
    }, false, [
        'deriveBits',
        'deriveKey'
    ]);
    return window.crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: saltBuffer,
        iterations: iterations,
        hash: 'SHA-256'
    }, keyMaterial, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function encryptBackup(password, privateKeys) {
    const salt = window.crypto.getRandomValues(new Uint8Array(32));
    const masterKey = await deriveMasterKey(password, salt, 600000);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const data = new TextEncoder().encode(JSON.stringify(privateKeys));
    const ciphertext = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, masterKey, data);
    return JSON.stringify({
        version: 2,
        algorithm: 'AES-256-GCM',
        backupType: 'primary',
        identityVersion: 1,
        dhVersion: 1,
        masterKeyVersion: 1,
        createdAt: Date.now(),
        salt: ab2b64(salt.buffer),
        iv: ab2b64(iv.buffer),
        ciphertext: ab2b64(ciphertext)
    });
}
async function decryptBackup(password, encryptedBackupStr) {
    try {
        const backup = JSON.parse(encryptedBackupStr);
        let masterKey;
        let encryptedData;
        if (backup.version === 2 || backup.version === 1) {
            const saltBuffer = b642ab(backup.salt);
            masterKey = await deriveMasterKey(password, new Uint8Array(saltBuffer), 600000);
            encryptedData = b642ab(backup.ciphertext);
        } else {
            // Legacy V0 backup
            masterKey = await deriveMasterKey(password, 'pingdart_e2ee_salt', 100000);
            encryptedData = b642ab(backup.data);
        }
        const decrypted = await window.crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv: b642ab(backup.iv)
        }, masterKey, encryptedData);
        const restored = JSON.parse(new TextDecoder().decode(decrypted));
        // Clear stale in-memory caches on backup restoration
        dhSharedKeyCache.clear();
        sessionNeedsRebuild.clear();
        return restored;
    } catch (err) {
        //console.warn('[E2EE] Backup decryption failed:', err);
        return null;
    }
}
async function changeBackupPassword(oldPassword, newPassword) {
    var _res_data;
    const api = await getChatApi();
    const res = await api.checkMyKeyBundle();
    if (res.exists && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.encryptedBackup)) {
        const privateKeys = await decryptBackup(oldPassword, res.data.encryptedBackup);
        if (!privateKeys) {
            throw new Error("Failed to decrypt current backup with old password");
        }
        const newEncryptedBackup = await encryptBackup(newPassword, privateKeys);
        await api.updateBackup(newEncryptedBackup);
        return true;
    }
    return false;
}
async function generateAndSetRecoveryKey(currentPassword) {
    const rawKey = window.crypto.getRandomValues(new Uint8Array(32));
    const recoveryKeyHex = Array.from(rawKey).map((b)=>b.toString(16).padStart(2, '0')).join('');
    const success = await changeBackupPassword(currentPassword, recoveryKeyHex);
    if (!success) {
        throw new Error("Failed to set recovery key");
    }
    return recoveryKeyHex;
}
/**
 * Check remaining local and server one-time prekeys and auto-replenish to server if count drops below low-watermark.
 */ async function replenishPrekeysIfNeeded(serverOtkCount) {
    try {
        const store = getStore();
        const { KeyHelper, setWebCrypto } = await getLibSignal();
        setWebCrypto(window.crypto);
        let count = 0;
        for(let i = 1; i <= NUM_ONE_TIME_PREKEYS; i++){
            const pk = await store.loadPreKey(i);
            if (pk) count++;
        }
        const effectiveCount = serverOtkCount !== undefined ? Math.min(count, serverOtkCount) : count;
        if (effectiveCount < PREKEY_LOW_WATERMARK) {
            console.log(`[E2EE] Prekey count low (local: ${count}, server: ${serverOtkCount !== null && serverOtkCount !== void 0 ? serverOtkCount : 'N/A'}, threshold: ${PREKEY_LOW_WATERMARK}). Auto-replenishing to ${NUM_ONE_TIME_PREKEYS}...`);
            const oneTimePreKeys = await Promise.all(Array.from({
                length: NUM_ONE_TIME_PREKEYS
            }, (_, i)=>KeyHelper.generatePreKey(i + 1)));
            for (const otp of oneTimePreKeys){
                await store.storePreKey(otp.keyId, otp.keyPair);
            }
            const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            if (identityKeyPair) {
                const signedPreKey = await KeyHelper.generateSignedPreKey(identityKeyPair, SIGNED_PREKEY_ID);
                await store.storeSignedPreKey(SIGNED_PREKEY_ID, signedPreKey.keyPair);
                const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
                const api = await getChatApi();
                await api.uploadKeyBundle({
                    identityKey: ab2b64(identityKeyPair.pubKey),
                    signedPreKeyId: SIGNED_PREKEY_ID,
                    signedPreKey: ab2b64(signedPreKey.keyPair.pubKey),
                    signedPreKeySignature: ab2b64(signedPreKey.signature),
                    oneTimePreKeys: oneTimePreKeys.map((otp)=>({
                            keyId: otp.keyId,
                            publicKey: ab2b64(otp.keyPair.pubKey)
                        })),
                    dhPublicKey: dhKeyPair ? JSON.stringify(dhKeyPair.pubJwk) : undefined
                });
            //console.log('[E2EE] Prekey pool replenished and uploaded ✓');
            }
        }
    } catch (e) {
    //console.warn('[E2EE] Failed to check/replenish prekeys:', e);
    }
}
// ── Key Generation & Upload ──────────────────────────────────────
/**
 * Generate a full Signal Protocol key bundle and upload public keys to the server.
 * Private keys are saved to IndexedDB only — the server never sees them.
 */ async function generateAndUploadKeys() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { KeyHelper, setWebCrypto } = await getLibSignal();
    // Initialize webcrypto for the Signal library
    setWebCrypto(window.crypto);
    const store = getStore();
    // 1. Generate identity key pair
    const identityKeyPair = await KeyHelper.generateIdentityKeyPair();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveIdentityKeyPair"](identityKeyPair);
    // 2. Registration ID
    const registrationId = KeyHelper.generateRegistrationId();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRegistrationId"](registrationId);
    // 3. Signed Pre-Key
    const signedPreKey = await KeyHelper.generateSignedPreKey(identityKeyPair, SIGNED_PREKEY_ID);
    await store.storeSignedPreKey(SIGNED_PREKEY_ID, signedPreKey.keyPair);
    // 4. One-time Pre-Keys (batch of 10)
    const oneTimePreKeys = await Promise.all(Array.from({
        length: NUM_ONE_TIME_PREKEYS
    }, (_, i)=>KeyHelper.generatePreKey(i + 1)));
    for (const otp of oneTimePreKeys){
        await store.storePreKey(otp.keyId, otp.keyPair);
    }
    // 5. Generate P-256 ECDH key pair for deterministic shared-key encryption (v2)
    const dhKeyPair = await window.crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256'
    }, true, [
        'deriveKey',
        'deriveBits'
    ]);
    const dhPrivRaw = await window.crypto.subtle.exportKey('jwk', dhKeyPair.privateKey);
    const dhPubJwk = await window.crypto.subtle.exportKey('jwk', dhKeyPair.publicKey);
    // Store private key locally (never sent to server)
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDhKeyPair"]({
        privJwk: dhPrivRaw,
        pubJwk: dhPubJwk
    });
    // 6. Get or generate random user master key
    const userMasterKeyObj = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateUserMasterKey"]();
    const rawMasterKey = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadUserMasterKey"]();
    // 7. Encrypt private keys for backup if password is available
    let encryptedBackup;
    const transientPassword = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().transientPassword;
    if (transientPassword && rawMasterKey) {
        const backupPayload = {
            identityKeyPair: {
                pubKey: ab2b64(identityKeyPair.pubKey),
                privKey: ab2b64(identityKeyPair.privKey)
            },
            registrationId,
            dhKeyPair: {
                privJwk: dhPrivRaw,
                pubJwk: dhPubJwk
            },
            // Include master key so Method-1 (senderBody) self-copy decryption works on new devices
            masterKey: ab2b64(rawMasterKey)
        };
        try {
            encryptedBackup = await encryptBackup(transientPassword, backupPayload);
            logDebug('[E2EE] Private keys encrypted for backup ✓');
        } catch (e) {
        //console.error('[E2EE] Failed to encrypt backup:', e);
        }
    }
    // 7. Upload public key bundle to server (includes P-256 ECDH and backup)
    const api = await getChatApi();
    await api.uploadKeyBundle({
        identityKey: ab2b64(identityKeyPair.pubKey),
        signedPreKeyId: SIGNED_PREKEY_ID,
        signedPreKey: ab2b64(signedPreKey.keyPair.pubKey),
        signedPreKeySignature: ab2b64(signedPreKey.signature),
        oneTimePreKeys: oneTimePreKeys.map((otp)=>({
                keyId: otp.keyId,
                publicKey: ab2b64(otp.keyPair.pubKey)
            })),
        dhPublicKey: JSON.stringify(dhPubJwk),
        encryptedBackup
    });
    dhSharedKeyCache.clear();
    logDebug('[E2EE] Keys generated and uploaded (including P-256 ECDH and backup) ✓');
}
/**
 * Re-uploads the existing local identity/DH keys to the server without
 * generating new key material. Use when the server bundle is missing but
 * the device already has a valid identity (e.g. after a server DB reset).
 */ async function reUploadExistingKeys() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { KeyHelper, setWebCrypto } = await getLibSignal();
    setWebCrypto(window.crypto);
    const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    if (!identityKeyPair) {
        //console.warn('[E2EE] reUploadExistingKeys: no local identity key found, falling back to fresh generation.');
        return generateAndUploadKeys();
    }
    const store = getStore();
    var _ref;
    const registrationId = (_ref = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRegistrationId"]()) !== null && _ref !== void 0 ? _ref : KeyHelper.generateRegistrationId();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRegistrationId"](registrationId);
    // Re-generate signed prekey (must be signed with current identity)
    const signedPreKey = await KeyHelper.generateSignedPreKey(identityKeyPair, SIGNED_PREKEY_ID);
    await store.storeSignedPreKey(SIGNED_PREKEY_ID, signedPreKey.keyPair);
    // Re-generate one-time prekeys
    const oneTimePreKeys = await Promise.all(Array.from({
        length: NUM_ONE_TIME_PREKEYS
    }, (_, i)=>KeyHelper.generatePreKey(i + 1)));
    for (const otp of oneTimePreKeys){
        await store.storePreKey(otp.keyId, otp.keyPair);
    }
    // Reuse existing DH key pair if present, otherwise generate a new one
    let dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
    if (!dhKeyPair) {
        // ⚠️ Generating a NEW DH key pair — old messages encrypted with the previous
        // ECDH shared key will become permanently undecryptable after this upload.
        console.warn('[E2EE] ⚠️ No local DH key found — generating NEW DH pair. Messages encrypted with the old key will be undecryptable.');
        const rawDhPair = await window.crypto.subtle.generateKey({
            name: 'ECDH',
            namedCurve: 'P-256'
        }, true, [
            'deriveKey',
            'deriveBits'
        ]);
        const dhPrivJwk = await window.crypto.subtle.exportKey('jwk', rawDhPair.privateKey);
        const dhPubJwk = await window.crypto.subtle.exportKey('jwk', rawDhPair.publicKey);
        dhKeyPair = {
            privJwk: dhPrivJwk,
            pubJwk: dhPubJwk
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDhKeyPair"](dhKeyPair);
    }
    // Rebuild backup if password is available
    let encryptedBackup;
    const transientPassword = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().transientPassword;
    const rawMasterKeyForBackup = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadUserMasterKey"]();
    if (transientPassword) {
        try {
            const backupPayload = {
                identityKeyPair: {
                    pubKey: ab2b64(identityKeyPair.pubKey),
                    privKey: ab2b64(identityKeyPair.privKey)
                },
                registrationId,
                dhKeyPair,
                // Include master key so Method-1 (senderBody) self-copy decryption works on new devices
                masterKey: rawMasterKeyForBackup ? ab2b64(rawMasterKeyForBackup) : undefined
            };
            encryptedBackup = await encryptBackup(transientPassword, backupPayload);
        } catch (e) {
        //console.error('[E2EE] reUploadExistingKeys: backup encryption failed:', e);
        }
    }
    const api = await getChatApi();
    await api.uploadKeyBundle({
        identityKey: ab2b64(identityKeyPair.pubKey),
        signedPreKeyId: SIGNED_PREKEY_ID,
        signedPreKey: ab2b64(signedPreKey.keyPair.pubKey),
        signedPreKeySignature: ab2b64(signedPreKey.signature),
        oneTimePreKeys: oneTimePreKeys.map((otp)=>({
                keyId: otp.keyId,
                publicKey: ab2b64(otp.keyPair.pubKey)
            })),
        dhPublicKey: JSON.stringify(dhKeyPair.pubJwk),
        encryptedBackup
    });
    dhSharedKeyCache.clear();
    logDebug('[E2EE] Existing keys re-uploaded to server (identity preserved) ✓');
}
let initPromise = null;
let initResolved = false;
function isE2EEInitialized() {
    return initResolved;
}
/**
 * Wait until the auth store has a valid user ID.
 * On page reload, Zustand needs a tick to rehydrate from localStorage.
 * Without this, getPrefix() returns 'anonymous:' and keys are not found.
 */ async function waitForAuthUser(timeoutMs = 3000) {
    var _useAuthStore_getState_user;
    const start = Date.now();
    while(!((_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id)){
        if (Date.now() - start > timeoutMs) {
            //console.warn('[E2EE] Timed out waiting for auth user — proceeding with anonymous prefix.');
            return;
        }
        await new Promise((r)=>setTimeout(r, 50));
    }
}
async function initializeKeys() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Deduplicate concurrent calls while init is still running
    if (initPromise && !initResolved) {
        //console.log('[E2EE INIT] Already initializing, waiting...');
        return initPromise;
    }
    // Reset after logout — initResolved was cleared by resetE2EEState()
    if (initResolved) {
        //console.log('[E2EE INIT] Resetting for new session...');
        initPromise = null;
        initResolved = false;
    }
    // Always start with a fresh store for the current user so
    // storeInstance never carries stale data from a previous session.
    storeInstance = null;
    initPromise = (async ()=>{
        try {
            var _res_data, _res_data1;
            //console.log('[E2EE INIT] Starting initialization...');
            // Ensure Zustand has rehydrated the user from localStorage before
            // we attempt any IndexedDB operations keyed by user ID.
            await waitForAuthUser();
            //console.log('[E2EE INIT] Auth user ready');
            if (!window.crypto || !window.crypto.subtle) {
                console.error('[E2EE INIT FATAL] Web Crypto API is not available. This usually means you are accessing the app over an insecure HTTP connection (e.g., http://192.168.x.x) instead of HTTPS or localhost. E2EE will not work.');
                return;
            }
            //console.log('[E2EE INIT] Web Crypto API confirmed available');
            const { setWebCrypto, KeyHelper } = await getLibSignal();
            setWebCrypto(window.crypto);
            const api = await getChatApi();
            //console.log('[E2EE INIT] Checking server for existing key bundle...');
            const res = await api.checkMyKeyBundle();
            // console.log('[E2EE INIT] Server key bundle status:', {
            //   exists: res.exists,
            //   hasEncryptedBackup: !!res.data?.encryptedBackup,
            //   hasDhPublicKey: !!res.data?.dhPublicKey
            // });
            // Step 1: If server has an encrypted backup and transientPassword is available, ALWAYS attempt to restore master keys FIRST.
            const transientPassword = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().transientPassword;
            if (res.exists && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.encryptedBackup) && transientPassword) {
                try {
                    //console.log('[E2EE INIT] Attempting to restore keys from server backup...');
                    const restoredKeys = await decryptBackup(transientPassword, res.data.encryptedBackup);
                    if (restoredKeys) {
                        //console.log('[E2EE INIT] Backup decrypted successfully');
                        const localIdentity = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
                        const localIdentityB64 = localIdentity ? ab2b64(localIdentity.pubKey) : null;
                        const localDhPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
                        // Restore user master key from backup if present
                        if (restoredKeys.masterKey) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUserMasterKey"](b642ab(restoredKeys.masterKey));
                        //console.log('[E2EE INIT] Master key restored from backup ✓');
                        }
                        const isDhMismatchedWithBackup = !localDhPair || !localDhPair.pubJwk || !restoredKeys.dhKeyPair || !restoredKeys.dhKeyPair.pubJwk || localDhPair.pubJwk.x !== restoredKeys.dhKeyPair.pubJwk.x || localDhPair.pubJwk.y !== restoredKeys.dhKeyPair.pubJwk.y;
                        // If local keys don't match backup or are missing, restore master keys from backup
                        if (restoredKeys.identityKeyPair.pubKey !== localIdentityB64 || isDhMismatchedWithBackup) {
                            //console.warn('[E2EE] Local device out of sync — restoring master keys from server backup ✓');
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveIdentityKeyPair"]({
                                pubKey: b642ab(restoredKeys.identityKeyPair.pubKey),
                                privKey: b642ab(restoredKeys.identityKeyPair.privKey)
                            });
                            if (restoredKeys.registrationId) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRegistrationId"](restoredKeys.registrationId);
                            if (restoredKeys.dhKeyPair) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDhKeyPair"](restoredKeys.dhKeyPair);
                            // Restore Signal prekeys matching identity
                            const restoredIdentityKeyPair = {
                                pubKey: b642ab(restoredKeys.identityKeyPair.pubKey),
                                privKey: b642ab(restoredKeys.identityKeyPair.privKey)
                            };
                            const signedPreKey = await KeyHelper.generateSignedPreKey(restoredIdentityKeyPair, SIGNED_PREKEY_ID);
                            const store = getStore();
                            await store.storeSignedPreKey(SIGNED_PREKEY_ID, signedPreKey.keyPair);
                            const oneTimePreKeys = await Promise.all(Array.from({
                                length: NUM_ONE_TIME_PREKEYS
                            }, (_, i)=>KeyHelper.generatePreKey(i + 1)));
                            for (const otp of oneTimePreKeys){
                                await store.storePreKey(otp.keyId, otp.keyPair);
                            }
                            // Re-upload bundle ensuring server public keys match restored master key
                            await api.uploadKeyBundle({
                                identityKey: restoredKeys.identityKeyPair.pubKey,
                                signedPreKeyId: SIGNED_PREKEY_ID,
                                signedPreKey: ab2b64(signedPreKey.keyPair.pubKey),
                                signedPreKeySignature: ab2b64(signedPreKey.signature),
                                oneTimePreKeys: oneTimePreKeys.map((otp)=>({
                                        keyId: otp.keyId,
                                        publicKey: ab2b64(otp.keyPair.pubKey)
                                    })),
                                dhPublicKey: JSON.stringify(restoredKeys.dhKeyPair.pubJwk),
                                encryptedBackup: res.data.encryptedBackup
                            });
                            dhSharedKeyCache.clear();
                            console.log('[E2EE] Master keys successfully restored from server backup ✓');
                            return;
                        }
                    }
                } catch (e) {
                //console.error('[E2EE] Backup sync attempt failed:', e);
                }
            }
            // Step 2: Determine key state and act accordingly
            const existingKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            // console.log('[E2EE INIT] Key state determination:', {
            //   hasLocalKeys: !!existingKeyPair,
            //   hasServerKeys: res.exists
            // });
            if (!existingKeyPair && !res.exists) {
                // Case A: Nothing locally and nothing on server → generate fresh identity
                //console.log('[E2EE INIT] Case A: No local or server keys - generating fresh bundle...');
                await generateAndUploadKeys();
            } else if (existingKeyPair && !res.exists) {
                // Case B: Local keys exist but server bundle is missing → re-upload without touching private keys
                //console.log('[E2EE INIT] Case B: Local keys exist but server missing - re-uploading...');
                await reUploadExistingKeys();
            } else if (existingKeyPair && res.exists) {
                var _res_data2, _res_data3;
                // Case C: Both local keys and server bundle exist → verify DH key sync
                //console.log('[E2EE INIT] Case C: Both local and server keys exist - verifying sync...');
                const localDhPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
                let serverDhPubJwk = null;
                if ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.dhPublicKey) {
                    try {
                        serverDhPubJwk = typeof res.data.dhPublicKey === 'string' ? JSON.parse(res.data.dhPublicKey) : res.data.dhPublicKey;
                    } catch (e) {
                    //console.error('[E2EE INIT] Failed to parse server DH public key:', e);
                    }
                }
                const isDhMismatch = !localDhPair || !localDhPair.pubJwk || !serverDhPubJwk || localDhPair.pubJwk.x !== serverDhPubJwk.x || localDhPair.pubJwk.y !== serverDhPubJwk.y;
                // console.log('[E2EE INIT] Case C - DH sync check:', {
                //   hasLocalDhPair: !!localDhPair,
                //   hasServerDhPubJwk: !!serverDhPubJwk,
                //   isDhMismatch
                // });
                if (isDhMismatch) {
                    //console.warn('[E2EE INIT] Case C: DH key mismatch detected between local device and server. Re-uploading bundle to sync server...');
                    await reUploadExistingKeys();
                } else {
                //console.log('[E2EE INIT] Case C-3: Keys fully synchronized ✓');
                }
                // Auto-replenish prekey pool if count drops below low watermark (checks both local & server count)
                await replenishPrekeysIfNeeded((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.oneTimePreKeysCount);
            } else if (!existingKeyPair && res.exists) {
                // Case D: Server has keys but this device has no local keys
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    // Native mobile: Do NOT auto-generate new keys if server keys exist (would destroy old message history)
                    //console.warn('[E2EE INIT] Case D (Native Mobile): Server has keys but local device has no keys. Prompting recovery screen.');
                    throw new E2EERecoveryRequiredError();
                } else {
                    // Linked device (Web/Desktop): Prompt QR device linking from primary device
                    //console.warn('[E2EE INIT] Case D (Web/Desktop): Server has keys. Prompting QR device linking.');
                    throw new E2EELinkRequiredError();
                }
            }
            // Retroactive backup creation if missing
            if (!((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.encryptedBackup) && transientPassword && existingKeyPair) {
                try {
                    //console.log('[E2EE] Missing backup detected. Creating retroactive backup...');
                    const registrationId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
                    const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
                    const rawMasterKeyRetro = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadUserMasterKey"]();
                    const backupPayload = {
                        identityKeyPair: {
                            pubKey: ab2b64(existingKeyPair.pubKey),
                            privKey: ab2b64(existingKeyPair.privKey)
                        },
                        registrationId,
                        dhKeyPair: dhKeyPair,
                        // Include master key so Method-1 (senderBody) self-copy decryption works on new devices
                        masterKey: rawMasterKeyRetro ? ab2b64(rawMasterKeyRetro) : undefined
                    };
                    const encryptedBackup = await encryptBackup(transientPassword, backupPayload);
                    await api.updateBackup(encryptedBackup);
                //console.log('[E2EE] Retroactive key backup saved to server ✓');
                } catch (e) {
                //console.error('[E2EE] Retroactive key backup failed:', e);
                }
            }
        } catch (err) {
            //console.error('[E2EE] initializeKeys failed:', err);
            initPromise = null;
            initResolved = false;
            throw err;
        }
        initResolved = true;
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                var _useAuthStore_getState_user;
                const uid = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                if (uid) localStorage.setItem(`e2ee_keys_configured_${uid}`, 'true');
            }
        } catch (_) {}
    })();
    return initPromise;
}
async function ensureE2EEReady() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!window.crypto || !window.crypto.subtle) {
        //console.error('[E2EE INIT] Web Crypto API not available', {
        //   hasWindow: !!window,
        //hasCrypto: !!window?.crypto,
        //hasSubtle: !!window?.crypto?.subtle
        //});
        return false;
    }
    try {
        if (initPromise) {
            //console.log('[E2EE INIT] Waiting for pending initialization...');
            await initPromise;
        } else {
            //console.log('[E2EE INIT] Starting fresh initialization...');
            await initializeKeys();
        }
        const identityKey = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
        if (!identityKey) {
            //console.warn('[E2EE INIT] Identity key missing in store, auto-generating local key pair...');
            await generateAndUploadKeys();
        }
        console.log('[E2EE INIT] ✅ E2EE is ready for use');
        return true;
    } catch (err) {
        // console.error('[E2EE INIT FAILED]', {
        //   errorName: err?.name,
        //   errorMessage: err?.message,
        //   errorStack: err?.stack
        // });
        return false;
    }
}
async function buildSession(recipientUserId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    await ensureE2EEReady().catch(()=>{});
    const { SignalProtocolAddress, SessionBuilder, setWebCrypto } = await getLibSignal();
    setWebCrypto(window.crypto);
    const store = getStore();
    const api = await getChatApi();
    // Fetch the recipient's public key bundle
    const res = await api.fetchKeyBundle(recipientUserId);
    if (!res || !res.success || !res.data) {
        console.warn(`[E2EE] No key bundle for user ${recipientUserId} — they may not support E2EE`);
        return false;
    }
    const bundle = res.data;
    // Construct the PreKeyBundle in the format the Signal library expects
    const preKeyBundle = {
        registrationId: 0,
        identityKey: b642ab(bundle.identityKey),
        signedPreKey: {
            keyId: bundle.signedPreKeyId,
            publicKey: b642ab(bundle.signedPreKey),
            signature: b642ab(bundle.signedPreKeySignature)
        }
    };
    if (bundle.oneTimePreKey) {
        preKeyBundle.preKey = {
            keyId: bundle.oneTimePreKey.keyId,
            publicKey: b642ab(bundle.oneTimePreKey.publicKey)
        };
    }
    const address = new SignalProtocolAddress(String(recipientUserId), DEVICE_ID);
    const sessionBuilder = new SessionBuilder(store, address);
    await sessionBuilder.processPreKey(preKeyBundle);
    console.log(`[E2EE] Session established with user ${recipientUserId} ✓`);
    return true;
}
async function hasSessionWith(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSession"](`session:${userId}.${DEVICE_ID}`);
}
async function encryptMessage(recipientUserId, plaintext) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!window.crypto || !window.crypto.subtle) return null;
    await ensureE2EEReady().catch(()=>{});
    try {
        return await _encryptEcdh(recipientUserId, plaintext);
    } catch (err) {
        console.error(`[E2EE] ECDH encryption failed for recipient ${recipientUserId}:`, err);
        throw err;
    }
}
// ── ECDH-based encryption (type: 5) ─────────────────────────────
// Deterministic shared key: ECDH(our_priv, their_pub) → AES-GCM
// No session state — both sides independently derive the same key.
// Eliminates the simultaneous-send session desync bug.
async function _getDhSharedKey(theirUserId, forceRefresh = false) {
    const cached = dhSharedKeyCache.get(theirUserId);
    // Use cache only if not forced, not expired, and promise exists
    if (!forceRefresh && cached && Date.now() - cached.ts < DH_CACHE_TTL_MS) {
        logDebug('[E2EE DH] Using cached shared key for user:', theirUserId);
        return cached.promise;
    }
    if (forceRefresh) {
        logDebug('[E2EE DH] Cache refresh forced for user:', theirUserId);
    }
    const promise = (async ()=>{
        var _res_data;
        logDebug('[E2EE DH] Computing shared key for user:', theirUserId);
        // Load our P-256 private key (auto-generate if missing)
        let ourDhPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
        if (!ourDhPair || !ourDhPair.privJwk) {
            console.warn('[E2EE DH] No local P-256 key pair found — auto-generating fresh local DH key pair...');
            const rawDhPair = await window.crypto.subtle.generateKey({
                name: 'ECDH',
                namedCurve: 'P-256'
            }, true, [
                'deriveKey',
                'deriveBits'
            ]);
            const dhPrivJwk = await window.crypto.subtle.exportKey('jwk', rawDhPair.privateKey);
            const dhPubJwk = await window.crypto.subtle.exportKey('jwk', rawDhPair.publicKey);
            ourDhPair = {
                privJwk: dhPrivJwk,
                pubJwk: dhPubJwk
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDhKeyPair"](ourDhPair);
            // Re-upload key bundle (including identity and signed prekeys) to server
            await reUploadExistingKeys().catch(()=>{});
        }
        logDebug('[E2EE DH] Local DH key pair loaded');
        const ourPrivKey = await window.crypto.subtle.importKey('jwk', ourDhPair.privJwk, {
            name: 'ECDH',
            namedCurve: 'P-256'
        }, false, [
            'deriveBits'
        ]);
        logDebug('[E2EE DH] Local DH private key imported');
        // Fetch their P-256 public key from server
        const api = await getChatApi();
        logDebug('[E2EE DH] Fetching P-256 public key for user', theirUserId, 'from server...');
        let res = await api.fetchDhPublicKey(theirUserId);
        if (!res || !res.success || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.dhPublicKey)) {
            var _bundleRes_data;
            console.warn(`[E2EE DH] fetchDhPublicKey missing for user ${theirUserId}, trying full key bundle...`);
            const bundleRes = await api.fetchKeyBundle(theirUserId);
            if ((bundleRes === null || bundleRes === void 0 ? void 0 : bundleRes.success) && ((_bundleRes_data = bundleRes.data) === null || _bundleRes_data === void 0 ? void 0 : _bundleRes_data.dhPublicKey)) {
                res = {
                    success: true,
                    data: {
                        userId: theirUserId,
                        dhPublicKey: bundleRes.data.dhPublicKey
                    }
                };
            } else {
                throw new Error(`[E2EE DH] CRITICAL: No P-256 DH key available on server for user ${theirUserId}`);
            }
        }
        logDebug('[E2EE DH] Server returned public key for user:', theirUserId);
        const theirPubJwk = typeof res.data.dhPublicKey === 'string' ? JSON.parse(res.data.dhPublicKey) : res.data.dhPublicKey;
        const theirPubKey = await window.crypto.subtle.importKey('jwk', theirPubJwk, {
            name: 'ECDH',
            namedCurve: 'P-256'
        }, false, []);
        logDebug('[E2EE DH] Remote DH public key imported');
        // ECDH → 256-bit shared secret → AES-GCM key
        logDebug('[E2EE DH] Performing ECDH key derivation...');
        const sharedBits = await window.crypto.subtle.deriveBits({
            name: 'ECDH',
            public: theirPubKey
        }, ourPrivKey, 256);
        logDebug('[E2EE DH] ECDH shared secret derived, importing as AES-GCM key...');
        const aesKey = await window.crypto.subtle.importKey('raw', sharedBits, {
            name: 'AES-GCM'
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        logDebug('[E2EE DH] ✅ Shared AES-GCM key ready for user:', theirUserId);
        return aesKey;
        //TURBOPACK unreachable
        ;
    })();
    dhSharedKeyCache.set(theirUserId, {
        promise,
        ts: Date.now()
    });
    return promise.catch((err)=>{
        console.error('[E2EE DH] Shared key derivation failed:', {
            theirUserId,
            errorName: err === null || err === void 0 ? void 0 : err.name,
            errorMessage: err === null || err === void 0 ? void 0 : err.message
        });
        dhSharedKeyCache.delete(theirUserId);
        throw err;
    });
}
async function getUserMasterAesKey(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateUserMasterKey"]();
}
/**
 * Fallback master key derivation for legacy messages encrypted with deterministic keys.
 */ async function getLegacyUserMasterAesKey(userId, email) {
    var _authState_user;
    const authState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
    const userEmail = email || ((_authState_user = authState.user) === null || _authState_user === void 0 ? void 0 : _authState_user.email) || '';
    const seed = `pingdart_master_e2ee_key_v2_${userId}_${userEmail}`;
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey('raw', encoder.encode(seed), {
        name: 'PBKDF2'
    }, false, [
        'deriveBits',
        'deriveKey'
    ]);
    const salt = encoder.encode(`pingdart_e2ee_salt_${userId}`);
    return window.crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256'
    }, keyMaterial, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
/**
 * Derives a per-message AES-256-GCM key from the static ECDH shared key using HKDF-SHA256
 * and a 32-byte per-message random salt.
 */ async function deriveMessageKeyViaHkdf(dhSharedKey, saltBytes) {
    const rawBits = await window.crypto.subtle.exportKey('raw', dhSharedKey);
    const hkdfKeyMaterial = await window.crypto.subtle.importKey('raw', rawBits, {
        name: 'HKDF'
    }, false, [
        'deriveKey'
    ]);
    return window.crypto.subtle.deriveKey({
        name: 'HKDF',
        hash: 'SHA-256',
        salt: saltBytes,
        info: new TextEncoder().encode('pingdart_e2ee_v1_msg_key')
    }, hkdfKeyMaterial, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function _getSenderAesKey(privKey) {
    let keyBytes = new Uint8Array(privKey);
    if (keyBytes.length === 33) {
        keyBytes = keyBytes.subarray(1);
    } else if (keyBytes.length > 32) {
        keyBytes = keyBytes.subarray(0, 32);
    }
    return window.crypto.subtle.importKey('raw', keyBytes, {
        name: 'AES-GCM'
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function _encryptEcdh(recipientUserId, plaintext) {
    const { setWebCrypto } = await getLibSignal();
    setWebCrypto(window.crypto);
    const sharedKey = await _getDhSharedKey(recipientUserId);
    const plaintextBytes = new TextEncoder().encode(plaintext);
    // Generate 32-byte per-message HKDF salt for forward secrecy
    const saltBytes = window.crypto.getRandomValues(new Uint8Array(32));
    const messageKey = await deriveMessageKeyViaHkdf(sharedKey, saltBytes);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const ciphertext = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, messageKey, plaintextBytes);
    // Encrypt a copy for sender self-read (using random user master key)
    let senderIv;
    let senderBody;
    try {
        var _useAuthStore_getState_user;
        const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
        if (currentUserId) {
            const masterKey = await getUserMasterAesKey(currentUserId);
            const sIv = window.crypto.getRandomValues(new Uint8Array(12));
            const sCiphertext = await window.crypto.subtle.encrypt({
                name: 'AES-GCM',
                iv: sIv
            }, masterKey, plaintextBytes);
            senderIv = ab2b64(sIv.buffer);
            senderBody = ab2b64(sCiphertext);
        } else {
            const ourIdentity = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            if (ourIdentity && ourIdentity.privKey) {
                const senderKey = await _getSenderAesKey(ourIdentity.privKey);
                const sIv = window.crypto.getRandomValues(new Uint8Array(12));
                const sCiphertext = await window.crypto.subtle.encrypt({
                    name: 'AES-GCM',
                    iv: sIv
                }, senderKey, plaintextBytes);
                senderIv = ab2b64(sIv.buffer);
                senderBody = ab2b64(sCiphertext);
            }
        }
    } catch (e) {
    //console.warn('[E2EE] senderBody encryption failed:', e);
    }
    return JSON.stringify({
        __e2ee: true,
        version: 1,
        algorithm: 'ECDH-HKDF-AES256-GCM',
        type: 5,
        messageKeyVersion: 1,
        senderKeyVersion: 1,
        createdAt: Date.now(),
        salt: ab2b64(saltBytes.buffer),
        iv: ab2b64(iv.buffer),
        body: ab2b64(ciphertext),
        recipientUserId,
        senderIv,
        senderBody,
        pushPreview: plaintext
    });
}
async function _encryptOnce(recipientUserId, plaintext, isRetry) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const { SignalProtocolAddress, SessionCipher, setWebCrypto } = await getLibSignal();
        setWebCrypto(window.crypto);
        const store = getStore();
        const address = new SignalProtocolAddress(String(recipientUserId), DEVICE_ID);
        // WhatsApp-like: if the session was flagged as broken by the remote peer,
        // silently wipe and rebuild before encrypting — completely transparent to the user.
        if (sessionNeedsRebuild.has(recipientUserId)) {
            console.warn(`[E2EE] Rebuilding broken session with user ${recipientUserId} before send.`);
            sessionNeedsRebuild.delete(recipientUserId);
            await store.removeAllSessions(String(recipientUserId));
            await buildSession(recipientUserId);
        } else {
            // Build session if we don't have one yet
            const sessionExists = await hasSessionWith(recipientUserId);
            if (!sessionExists) {
                const built = await buildSession(recipientUserId);
                if (!built) {
                    throw new Error(`[E2EE] Cannot build session for user ${recipientUserId}. They may not have E2EE keys.`);
                }
            }
        }
        const cipher = new SessionCipher(store, address);
        const plaintextBytes = new TextEncoder().encode(plaintext);
        const encrypted = await cipher.encrypt(plaintextBytes.buffer);
        if (encrypted.body === undefined) {
            throw new Error('[E2EE] Encryption produced an empty or undefined ciphertext body.');
        }
        // Encrypt a copy for the sender using the sender's own identity private key (AES-GCM)
        let senderIv = undefined;
        let senderBody = undefined;
        try {
            const ourIdentity = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
            if (ourIdentity) {
                const key = await window.crypto.subtle.importKey('raw', ourIdentity.privKey, {
                    name: 'AES-GCM'
                }, false, [
                    'encrypt'
                ]);
                const iv = window.crypto.getRandomValues(new Uint8Array(12));
                const encryptedBytes = await window.crypto.subtle.encrypt({
                    name: 'AES-GCM',
                    iv
                }, key, plaintextBytes);
                senderIv = ab2b64(iv.buffer);
                senderBody = ab2b64(encryptedBytes);
            }
        } catch (e) {
        //console.warn('[E2EE] Failed to encrypt copy for sender:', e);
        }
        // Package the result as a JSON string stored in the `text` field
        return JSON.stringify({
            __e2ee: true,
            version: 1,
            algorithm: 'SignalProtocol-V1',
            type: encrypted.type,
            messageKeyVersion: 1,
            senderKeyVersion: 1,
            createdAt: Date.now(),
            body: btoa(encrypted.body),
            senderIv,
            senderBody
        });
    } catch (err) {
        if (!isRetry) {
            // Auto-heal: wipe session, rebuild, and retry once — exactly like WhatsApp.
            //console.warn('[E2EE] Encryption failed, auto-rebuilding session and retrying...');
            try {
                const store = getStore();
                await store.removeAllSessions(String(recipientUserId));
                const rebuilt = await buildSession(recipientUserId);
                if (!rebuilt) {
                    throw new Error(`[E2EE] Cannot rebuild session for user ${recipientUserId}`);
                }
            } catch (rebuildErr) {
                console.warn(`[E2EE] Session rebuild failed during auto-heal: ${rebuildErr.message}`);
                return null;
            }
            return _encryptOnce(recipientUserId, plaintext, true);
        }
        console.warn(`[E2EE] Encryption failed after retry: ${err.message}`);
        return null;
    }
}
function clearDhSharedKeyCache() {
    dhSharedKeyCache.clear();
    console.log('[E2EE] Shared key cache cleared.');
}
async function isE2EEReady() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!window.crypto || !window.crypto.subtle) return false;
    try {
        if (initPromise) await initPromise;
        const key = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
        return !!key;
    } catch (e) {
        return false;
    }
}
async function decryptMessage(senderUserId, encryptedPayload, clearSessionOnFail = false, roomId, messageId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!window.crypto || !window.crypto.subtle) return null;
    // 1. Race condition guard: Ensure E2EE key initialization completes before decrypting
    const isReady = await ensureE2EEReady();
    if (!isReady) {
        console.error('[E2EE FATAL] ensureE2EEReady() returned false - keys not initialized', {
            senderUserId,
            roomId,
            messageId
        });
        return null;
    }
    let payload;
    try {
        payload = typeof encryptedPayload === 'string' ? JSON.parse(encryptedPayload) : encryptedPayload;
    } catch (parseErr) {
        //console.error('[E2EE] Failed to parse encrypted payload:', parseErr);
        return null;
    }
    if (!payload || !payload.__e2ee && !payload._e2ee) {
        //console.warn('[E2EE] Payload missing __e2ee flag', { hasPayload: !!payload });
        return null;
    }
    var _payload_version;
    const payloadVersion = (_payload_version = payload.version) !== null && _payload_version !== void 0 ? _payload_version : 0;
    // Debug: Log payload structure for ECDH messages (type 5)
    if (payload.type === 5) {
        var _payload_iv, _payload_body, _payload_salt;
        logDebug('[E2EE PAYLOAD DEBUG] ECDH Message Structure:', {
            version: payloadVersion,
            algorithm: payload.algorithm,
            type: payload.type,
            ivLength: ((_payload_iv = payload.iv) === null || _payload_iv === void 0 ? void 0 : _payload_iv.length) || 0,
            bodyLength: ((_payload_body = payload.body) === null || _payload_body === void 0 ? void 0 : _payload_body.length) || 0,
            saltLength: ((_payload_salt = payload.salt) === null || _payload_salt === void 0 ? void 0 : _payload_salt.length) || 0,
            hasSenderBody: !!payload.senderBody,
            payloadKeys: Object.keys(payload || {})
        });
    }
    if (payloadVersion > 1) {
        //console.warn('[E2EE] Payload version is unsupported:', payloadVersion);
        return '⚠️ UNSUPPORTED_E2EE_VERSION';
    }
    try {
        var _useAuthStore_getState_user;
        const { setWebCrypto, SignalProtocolAddress, SessionCipher, EncryptionResultMessageType } = await getLibSignal();
        setWebCrypto(window.crypto);
        const store = getStore();
        const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
        const identityKey = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
        const address = new SignalProtocolAddress(String(senderUserId), DEVICE_ID);
        const session = await store.loadSession(address.toString());
        // ⭐ CRITICAL DEBUG LOGGING for troubleshooting mobile decryption failures
        // logDebug('[E2EE DECRYPT ATTEMPT]', {
        //   senderUserId,
        //   roomId,
        //   messageId,
        //   currentUserId,
        //   payloadVersion,
        //   hasIdentityKey: !!identityKey,
        //   hasSession: !!session,
        //   payloadType: payload?.type,
        //   hasPayloadBody: !!payload?.body,
        //   hasPayloadIv: !!payload?.iv,
        //   hasSenderBody: !!payload?.senderBody,
        //   payloadKeys: Object.keys(payload || {})
        // });
        // Debug own messages specifically
        if (senderUserId === currentUserId) {
        // logDebug('[E2EE DECRYPT ATTEMPT - OWN MESSAGE]', {
        //   senderUserId,
        //   messageId,
        //   payloadVersion,
        //   payloadType: payload?.type,
        //   hasSenderBody: !!payload?.senderBody,
        //   hasSenderIv: !!payload?.senderIv,
        //   senderBodyLength: typeof payload?.senderBody === 'string' ? payload.senderBody.length : 0,
        //   senderIvLength: typeof payload?.senderIv === 'string' ? payload.senderIv.length : 0,
        //   hasRegularBody: !!payload?.body,
        //   hasRegularIv: !!payload?.iv,
        //   payloadKeys: Object.keys(payload || {})
        // });
        }
        const isMe = clearSessionOnFail === true || !!(currentUserId && String(senderUserId) === String(currentUserId));
        // Method 1: If senderBody & senderIv are present, try master key / identity key decryption
        if ((isMe || payload.senderBody && payload.senderIv) && payload.senderBody && payload.senderIv) {
            logDebug('[E2EE] Attempting Method 1: Master key decryption (own sent message)', {
                hasSenderBody: !!payload.senderBody,
                hasSenderIv: !!payload.senderIv,
                senderBodyLength: typeof payload.senderBody === 'string' ? payload.senderBody.length : 0,
                senderIvLength: typeof payload.senderIv === 'string' ? payload.senderIv.length : 0
            });
            try {
                if (currentUserId) {
                    const masterKey = await getUserMasterAesKey(currentUserId);
                    logDebug('[E2EE] Master key obtained, attempting AES-GCM decrypt');
                    const decryptedBytes = await window.crypto.subtle.decrypt({
                        name: 'AES-GCM',
                        iv: b642ab(payload.senderIv)
                    }, masterKey, b642ab(payload.senderBody));
                    logDebug('[E2EE] ✅ Method 1 SUCCESS - message decrypted via random master key');
                    return new TextDecoder().decode(decryptedBytes);
                }
            } catch (masterErr) {
                //console.warn('[E2EE] Method 1 random master key failed, attempting legacy master key fallback:', masterErr);
                try {
                    if (currentUserId) {
                        const legacyMasterKey = await getLegacyUserMasterAesKey(currentUserId);
                        const decryptedBytes = await window.crypto.subtle.decrypt({
                            name: 'AES-GCM',
                            iv: b642ab(payload.senderIv)
                        }, legacyMasterKey, b642ab(payload.senderBody));
                        logDebug('[E2EE] ✅ Method 1 LEGACY FALLBACK SUCCESS - message decrypted via legacy master key');
                        return new TextDecoder().decode(decryptedBytes);
                    }
                } catch (legacyErr) {
                //console.warn('[E2EE] Method 1 legacy master key failed:', legacyErr);
                }
                try {
                    if (identityKey && identityKey.privKey) {
                        logDebug('[E2EE] Retrying with identity key derived key');
                        const key = await _getSenderAesKey(identityKey.privKey);
                        const decryptedBytes = await window.crypto.subtle.decrypt({
                            name: 'AES-GCM',
                            iv: b642ab(payload.senderIv)
                        }, key, b642ab(payload.senderBody));
                        logDebug('[E2EE] ✅ Method 1 RETRY SUCCESS - message decrypted via identity key');
                        return new TextDecoder().decode(decryptedBytes);
                    }
                } catch (e) {
                //console.error('[E2EE] Method 1 retry failed, falling through to Method 2/3:', e);
                // Fall through to try other methods instead of returning null
                }
            }
        } else if (isMe && (!payload.senderBody || !payload.senderIv)) {
        // console.warn('[E2EE] Own message but missing senderBody or senderIv - trying other methods', {
        //   hasSenderBody: !!payload.senderBody,
        //     hasSenderIv: !!payload.senderIv,
        //       payloadType: payload?.type,
        //         payloadKeys: Object.keys(payload || {})
        // });
        }
        // Method 2: ── Type 5: ECDH (primary 1:1 method) ──
        if (payload.type === 5) {
            logDebug('[E2EE] Attempting Method 2: ECDH decryption', {
                hasSalt: !!payload.salt,
                isMe
            });
            if (!payload.body || !payload.iv) {
                //console.error('[E2EE] Method 2 FAILED: Missing ECDH ciphertext or IV');
                throw new Error('[E2EE] Missing ECDH ciphertext or IV');
            }
            let targetDhUserId = Number(senderUserId);
            if (isMe || currentUserId && Number(senderUserId) === Number(currentUserId)) {
                targetDhUserId = Number(payload.recipientUserId || payload.otherUserId || (roomId && Number(roomId) !== currentUserId ? Number(roomId) : senderUserId));
            }
            if (currentUserId && targetDhUserId === Number(currentUserId)) {
                targetDhUserId = Number(payload.recipientUserId || payload.otherUserId || roomId || senderUserId);
            }
            try {
                var _payload_iv1, _payload_body1;
                logDebug('[E2EE] Fetching DH shared key...');
                const sharedKey = await _getDhSharedKey(targetDhUserId);
                let decryptionKey = sharedKey;
                if (payload.salt) {
                    // Version 1: derive per-message HKDF key using 32-byte salt
                    const saltBuffer = b642ab(payload.salt);
                    decryptionKey = await deriveMessageKeyViaHkdf(sharedKey, new Uint8Array(saltBuffer));
                }
                // Validate payload structure before attempting decrypt
                if (!payload.iv || !payload.body) {
                    throw new Error(`[E2EE] Missing required fields: iv=${!!payload.iv}, body=${!!payload.body}`);
                }
                // Normalise base64 — pad to a multiple of 4 to accept unpadded / base64url strings
                const padBase64 = (s)=>{
                    const t = s.replace(/-/g, '+').replace(/_/g, '/');
                    return t.padEnd(t.length + (4 - t.length % 4) % 4, '=');
                };
                if (payload.iv && payload.iv.length % 4 !== 0) payload = {
                    ...payload,
                    iv: padBase64(payload.iv)
                };
                if (payload.body && payload.body.length % 4 !== 0) payload = {
                    ...payload,
                    body: padBase64(payload.body)
                };
                // Validate base64 encoding (after normalisation)
                if (!isValidBase64(payload.iv)) {
                    var _payload_iv2;
                    throw new Error(`[E2EE] IV is not valid base64. Length: ${((_payload_iv2 = payload.iv) === null || _payload_iv2 === void 0 ? void 0 : _payload_iv2.length) || 0}, Content: ${String(payload.iv).substring(0, 50)}...`);
                }
                if (!isValidBase64(payload.body)) {
                    var _payload_body2;
                    throw new Error(`[E2EE] Body is not valid base64. Length: ${((_payload_body2 = payload.body) === null || _payload_body2 === void 0 ? void 0 : _payload_body2.length) || 0}, Content: ${String(payload.body).substring(0, 50)}...`);
                }
                logDebug('[E2EE] Attempting AES-GCM decrypt with target key', {
                    hasIv: !!payload.iv,
                    hasBody: !!payload.body,
                    usingSalt: !!payload.salt,
                    ivLength: (_payload_iv1 = payload.iv) === null || _payload_iv1 === void 0 ? void 0 : _payload_iv1.length,
                    bodyLength: (_payload_body1 = payload.body) === null || _payload_body1 === void 0 ? void 0 : _payload_body1.length
                });
                let ivBuffer;
                let bodyBuffer;
                try {
                    ivBuffer = b642ab(payload.iv);
                } catch (e) {
                    throw new Error(`[E2EE] Failed to decode IV from base64: ${e.message}`);
                }
                try {
                    bodyBuffer = b642ab(payload.body);
                } catch (e) {
                    throw new Error(`[E2EE] Failed to decode body from base64: ${e.message}`);
                }
                const decryptedBuffer = await window.crypto.subtle.decrypt({
                    name: 'AES-GCM',
                    iv: ivBuffer
                }, decryptionKey, bodyBuffer);
                logDebug('[E2EE] ✅ Method 2 SUCCESS - message decrypted via ECDH');
                return new TextDecoder().decode(decryptedBuffer);
            } catch (ecdhErr) {
                // console.warn('[E2EE] Method 2 failed:', {
                //   errorName: (ecdhErr as any)?.name,
                //   errorMessage: (ecdhErr as any)?.message,
                //   hasSalt: !!payload.salt
                // });
                // console.warn('[E2EE] Attempting cache refresh...');
                dhSharedKeyCache.delete(targetDhUserId);
                try {
                    // logDebug('[E2EE] Fetching fresh DH public key from server...');
                    const freshSharedKey = await _getDhSharedKey(targetDhUserId, true);
                    let retryDecryptionKey = freshSharedKey;
                    if (payload.salt) {
                        const saltBuffer = b642ab(payload.salt);
                        retryDecryptionKey = await deriveMessageKeyViaHkdf(freshSharedKey, new Uint8Array(saltBuffer));
                    }
                    let retryIvBuffer;
                    let retryBodyBuffer;
                    try {
                        retryIvBuffer = b642ab(payload.iv);
                        retryBodyBuffer = b642ab(payload.body);
                    } catch (e) {
                        ////console.error('[E2EE] Failed to decode payload on retry:', e);
                        throw e;
                    }
                    const decryptedBuffer = await window.crypto.subtle.decrypt({
                        name: 'AES-GCM',
                        iv: retryIvBuffer
                    }, retryDecryptionKey, retryBodyBuffer);
                    logDebug('[E2EE] ✅ Method 2 RETRY SUCCESS - message decrypted with fresh DH key');
                    return new TextDecoder().decode(decryptedBuffer);
                } catch (retryErr) {
                    // console.error('[E2EE] Method 2 retry FAILED (both primary and fresh DH key failed):', {
                    //   errorName: (retryErr as any)?.name,
                    //   errorMessage: (retryErr as any)?.message
                    // });
                    // Fallback: If payload has salt and HKDF failed, try direct sharedKey without HKDF as legacy fallback
                    if (payload.salt) {
                        try {
                            logDebug('[E2EE] Attempting Method 2 legacy fallback: Direct shared key without HKDF...');
                            const freshSharedKey = await _getDhSharedKey(targetDhUserId);
                            const ivBuf = b642ab(payload.iv);
                            const bodyBuf = b642ab(payload.body);
                            const decryptedBuffer = await window.crypto.subtle.decrypt({
                                name: 'AES-GCM',
                                iv: ivBuf
                            }, freshSharedKey, bodyBuf);
                            logDebug('[E2EE] ✅ Method 2 LEGACY HKDF FALLBACK SUCCESS');
                            return new TextDecoder().decode(decryptedBuffer);
                        } catch (fallbackErr) {
                        //console.warn('[E2EE] Method 2 legacy HKDF fallback failed:', fallbackErr);
                        }
                    }
                    throw retryErr;
                }
            }
        }
        // Method 3: Signal ratchet (type 1 or 3)
        logDebug('[E2EE] Attempting Method 3: Signal Protocol ratchet', {
            payloadType: payload === null || payload === void 0 ? void 0 : payload.type
        });
        const cipher = new SessionCipher(store, address);
        let binaryBody = payload.body;
        try {
            binaryBody = atob(payload.body);
        } catch (e) {
            binaryBody = payload.body;
        }
        let decryptedBuffer;
        if (payload.type === 3 /* PreKeyWhisperMessage */ ) {
            // logDebug('[E2EE] Method 3: Decrypting PreKeyWhisperMessage', {
            //   hasSession: !!session,
            //   binaryBodyLength: typeof binaryBody === 'string' ? binaryBody.length : 0,
            //   sessionNeedRebuild: sessionNeedsRebuild.has(senderUserId)
            // });
            decryptedBuffer = await cipher.decryptPreKeyWhisperMessage(binaryBody, 'binary');
            sessionNeedsRebuild.delete(senderUserId);
            logDebug('[E2EE] ✅ Method 3 SUCCESS - PreKeyWhisperMessage decrypted');
        } else {
            // logDebug('[E2EE] Method 3: Decrypting WhisperMessage (type:', payload.type, ')', {
            //   hasSession: !!session,
            //   binaryBodyLength: typeof binaryBody === 'string' ? binaryBody.length : 0,
            //   sessionNeedRebuild: sessionNeedsRebuild.has(senderUserId)
            // });
            decryptedBuffer = await cipher.decryptWhisperMessage(binaryBody, 'binary');
            sessionNeedsRebuild.delete(senderUserId);
            logDebug('[E2EE] ✅ Method 3 SUCCESS - WhisperMessage decrypted');
        }
        return new TextDecoder().decode(decryptedBuffer);
    } catch (err) {
        const payloadType = payload === null || payload === void 0 ? void 0 : payload.type;
        const isEcdh = payloadType === 5;
        const isSignal = payloadType === 3 || payloadType === 1;
        // console.error('[E2EE DECRYPT FAILED - CRITICAL]', {
        //   senderUserId,
        //   roomId,
        //   messageId,
        //   payloadVersion,
        //   payloadType,
        //   isEcdh,
        //   isSignal,
        //   errorName: err?.name,
        //   errorMessage: err?.message || String(err),
        //   errorCode: (err as any)?.code,
        //   payloadStructure: {
        //     type: payload?.type,
        //     version: payload?.version,
        //     algorithm: payload?.algorithm,
        //     hasBody: !!payload?.body,
        //     bodyLength: typeof payload?.body === 'string' ? payload.body.length : 'N/A',
        //     hasIv: !!payload?.iv,
        //     ivLength: typeof payload?.iv === 'string' ? payload.iv.length : 'N/A',
        //     hasSalt: !!payload?.salt,
        //     hasSenderBody: !!payload?.senderBody,
        //     hasSenderIv: !!payload?.senderIv
        //   }
        // });
        dhSharedKeyCache.delete(senderUserId);
        // Only mark session for rebuild if this was a Signal ratchet message (type 1 or 3), NEVER for ECDH (type 5)
        if (isSignal) {
            markSessionForRebuild(senderUserId, 'signal', (err === null || err === void 0 ? void 0 : err.message) || 'Signal ratchet decrypt failure');
        }
        // Fallback: If pushPreview, preview, or text is embedded in the payload, return it rather than showing DECRYPT_FAILED
        if ((payload === null || payload === void 0 ? void 0 : payload.pushPreview) && typeof payload.pushPreview === 'string' && !payload.pushPreview.startsWith('{')) {
            return payload.pushPreview;
        }
        if ((payload === null || payload === void 0 ? void 0 : payload.preview) && typeof payload.preview === 'string' && !payload.preview.startsWith('{')) {
            return payload.preview;
        }
        if ((payload === null || payload === void 0 ? void 0 : payload.text) && typeof payload.text === 'string' && !payload.text.startsWith('{')) {
            return payload.text;
        }
        return '⚠️ DECRYPT_FAILED';
    }
}
function isEncryptedPayload(text) {
    if (!text || !text.startsWith('{')) return false;
    try {
        const obj = JSON.parse(text);
        return obj.__e2ee === true;
    } catch (e) {
        return false;
    }
}
async function clearSessionWithUser(userId) {
    try {
        const store = getStore();
        await store.removeAllSessions(String(userId));
    //console.warn('[E2EE] Cleared session with user', userId);
    } catch (err) {
    //console.error('[E2EE] Failed to clear session with user', userId, 'error:', err);
    }
}
// ── Decrypted Preview Cache ──────────────────────────────────────
// Signal messages can only be decrypted ONCE (ratchet advances).
// We cache the last decrypted plaintext per room so the chat list
// can show the actual message text without re-decrypting.
const _previewCache = new Map();
function setCachedPreview(roomId, text, msgId) {
    _previewCache.set(Number(roomId), {
        text,
        msgId
    });
}
function getCachedPreview(roomId, msgId) {
    const cached = _previewCache.get(Number(roomId));
    if (!cached) return undefined;
    if (msgId !== undefined && String(cached.msgId) !== String(msgId)) {
        return undefined; // Cache miss: the cached preview is for a different/older message
    }
    return cached.text;
}
async function generateEphemeralKeys() {
    const keyPair = await window.crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256'
    }, true, [
        'deriveKey',
        'deriveBits'
    ]);
    const publicKeyRaw = await window.crypto.subtle.exportKey('raw', keyPair.publicKey);
    const publicKeyArray = new Uint8Array(publicKeyRaw);
    const publicKeyBase64 = btoa(String.fromCharCode(...publicKeyArray));
    return {
        keyPair,
        publicKeyBase64
    };
}
/**
 * Derives a shared AES-GCM key from our private ECDH key and their public ECDH key.
 */ async function deriveSharedSecret(privateKey, publicKeyBase64) {
    const binaryString = atob(publicKeyBase64);
    const publicKeyRaw = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++){
        publicKeyRaw[i] = binaryString.charCodeAt(i);
    }
    const importedPublicKey = await window.crypto.subtle.importKey('raw', publicKeyRaw, {
        name: 'ECDH',
        namedCurve: 'P-256'
    }, true, []);
    return window.crypto.subtle.deriveKey({
        name: 'ECDH',
        public: importedPublicKey
    }, privateKey, {
        name: 'AES-GCM',
        length: 256
    }, false, [
        'encrypt',
        'decrypt'
    ]);
}
async function encryptDeviceLinkPayload(theirPublicKeyBase64, authToken, refreshToken, localE2EKeys// Registration object
) {
    // Generate our own ephemeral keys
    const { keyPair, publicKeyBase64 } = await generateEphemeralKeys();
    const sharedKey = await deriveSharedSecret(keyPair.privateKey, theirPublicKeyBase64);
    const payloadObj = {
        authToken,
        refreshToken,
        e2eKeys: localE2EKeys,
        issuedAt: Date.now(),
        expiresAt: Date.now() + 5 * 60 * 1000
    };
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encodedPayload = new TextEncoder().encode(JSON.stringify(payloadObj));
    const encrypted = await window.crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, sharedKey, encodedPayload);
    const ivBase64 = btoa(String.fromCharCode(...iv));
    const encryptedArray = new Uint8Array(encrypted);
    const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray));
    return {
        payload: `${ivBase64}:${encryptedBase64}`,
        senderPublicKeyBase64: publicKeyBase64
    };
}
async function decryptDeviceLinkPayload(ourPrivateKey, theirPublicKeyBase64, encryptedPayload) {
    const sharedKey = await deriveSharedSecret(ourPrivateKey, theirPublicKeyBase64);
    const [ivBase64, dataBase64] = encryptedPayload.split(':');
    const ivBinary = atob(ivBase64);
    const iv = new Uint8Array(ivBinary.length);
    for(let i = 0; i < ivBinary.length; i++){
        iv[i] = ivBinary.charCodeAt(i);
    }
    const dataBinary = atob(dataBase64);
    const encryptedData = new Uint8Array(dataBinary.length);
    for(let i = 0; i < dataBinary.length; i++){
        encryptedData[i] = dataBinary.charCodeAt(i);
    }
    const decrypted = await window.crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, sharedKey, encryptedData);
    const decoded = new TextDecoder().decode(decrypted);
    const payloadObj = JSON.parse(decoded);
    if (payloadObj.expiresAt && Date.now() > payloadObj.expiresAt) {
        throw new Error('QR session expired. Please scan the QR code again.');
    }
    return payloadObj;
}
async function exportDeviceKeys() {
    await ensureE2EEReady().catch(()=>{});
    const identityKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadIdentityKeyPair"]();
    const registrationId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRegistrationId"]();
    const dhKeyPair = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDhKeyPair"]();
    const rawMasterKey = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadUserMasterKey"]();
    if (!identityKeyPair || !registrationId || !dhKeyPair) {
        return null;
    }
    return {
        version: 2,
        identityKeyPair: {
            pubKey: ab2b64(identityKeyPair.pubKey),
            privKey: ab2b64(identityKeyPair.privKey)
        },
        registrationId,
        dhKeyPair: {
            privJwk: dhKeyPair.privJwk,
            pubJwk: dhKeyPair.pubJwk
        },
        masterKey: rawMasterKey ? ab2b64(rawMasterKey) : undefined
    };
}
async function importDeviceKeys(restoredKeys) {
    if (restoredKeys) {
        console.log('[E2EE LINK] Importing device keys, version:', restoredKeys.version || 0);
        if (restoredKeys.identityKeyPair) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveIdentityKeyPair"]({
                pubKey: b642ab(restoredKeys.identityKeyPair.pubKey),
                privKey: b642ab(restoredKeys.identityKeyPair.privKey)
            });
        }
        if (restoredKeys.registrationId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRegistrationId"](restoredKeys.registrationId);
        }
        if (restoredKeys.dhKeyPair) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDhKeyPair"](restoredKeys.dhKeyPair);
        }
        if (restoredKeys.masterKey) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$keyStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUserMasterKey"](b642ab(restoredKeys.masterKey));
        }
        dhSharedKeyCache.clear();
        sessionNeedsRebuild.clear();
        console.log('[E2EE LINK] ✅ Device keys successfully imported from primary device.');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/node_modules/idb/build/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteDB",
    ()=>deleteDB,
    "openDB",
    ()=>openDB,
    "unwrap",
    ()=>unwrap,
    "wrap",
    ()=>wrap
]);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const transactionDoneMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    // This mapping exists in reverseTransformCache but doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function(...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(this.request);
        };
    }
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event)=>{
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event.newVersion, event));
    }
    openPromise.then((db)=>{
        if (terminated) db.addEventListener('close', ()=>terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event)=>blocking(event.oldVersion, event.newVersion, event));
        }
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event));
    }
    return wrap(request).then(()=>undefined);
}
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
const advanceMethodProps = [
    'continue',
    'continuePrimaryKey',
    'advance'
];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get (target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function(...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    }
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor) return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while(cursor){
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore,
        IDBCursor
    ]) || prop === 'iterate' && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore
    ]);
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get (target, prop, receiver) {
            if (isIteratorProp(target, prop)) return iterate;
            return oldTraps.get(target, prop, receiver);
        },
        has (target, prop) {
            return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        }
    }));
;
}),
]);

//# sourceMappingURL=_ab883535._.js.map