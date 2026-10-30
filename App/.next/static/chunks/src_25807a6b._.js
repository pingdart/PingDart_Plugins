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
"[project]/src/utils/audioTones.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helper to play Conversation Tones (In-Chat incoming/outgoing message sounds)
 * Respects user's notification_settings (conversationTones setting)
 */ __turbopack_context__.s([
    "playConversationTone",
    ()=>playConversationTone
]);
function playConversationTone(type = 'incoming') {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Check user setting from localStorage
        const saved = localStorage.getItem("notification_settings");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.conversationTones === false) {
                return; // Muted by user
            }
        }
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === 'suspended') {
            ctx.resume().catch(()=>{});
        }
        if (type === 'outgoing') {
            // Soft outgoing message tick sound (1200Hz -> 800Hz)
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        } else {
            // Soft incoming message pop sound (880Hz -> 1174Hz)
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1174, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        }
        setTimeout(()=>{
            try {
                ctx.close().catch(()=>{});
            } catch (_) {}
        }, 200);
    } catch (err) {
        console.warn("[audioTones] Could not play conversation tone:", err);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/linkPreview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractClientLinkMetadata",
    ()=>extractClientLinkMetadata,
    "fetchLinkPreview",
    ()=>fetchLinkPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const previewCache = new Map();
function extractClientLinkMetadata(url) {
    if (!url || typeof url !== 'string') return null;
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
        const videoId = ytMatch[1];
        return {
            url,
            title: 'YouTube Video',
            description: 'Watch video on YouTube',
            image: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            domain: 'youtube.com',
            siteName: 'YouTube',
            videoId
        };
    }
    return null;
}
async function fetchLinkPreview(url) {
    if (!url || typeof url !== 'string') return null;
    const cleanUrl = url.trim();
    if (previewCache.has(cleanUrl)) {
        return previewCache.get(cleanUrl);
    }
    // 1. Instant client-side check for YouTube
    const clientMeta = extractClientLinkMetadata(cleanUrl);
    try {
        var _res_data, _res_data1;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/link-preview`, {
            params: {
                url: cleanUrl
            }
        });
        if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.data)) {
            const data = {
                ...clientMeta,
                ...res.data.data
            };
            previewCache.set(cleanUrl, data);
            return data;
        }
    } catch (e) {
        console.warn('[LinkPreview] Failed to fetch server preview:', e);
    }
    if (clientMeta) {
        previewCache.set(cleanUrl, clientMeta);
        return clientMeta;
    }
    // Fallback domain preview
    try {
        const parsed = new URL(cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`);
        const fallbackData = {
            url: cleanUrl,
            title: parsed.hostname.replace(/^www\./, ''),
            domain: parsed.hostname.replace(/^www\./, '')
        };
        previewCache.set(cleanUrl, fallbackData);
        return fallbackData;
    } catch (e) {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * localChatDb.ts
 * Enterprise-grade client-side IndexedDB database for PingDart Chat (WhatsApp/Telegram Architecture).
 * Features:
 *  - 0ms instant local rendering
 *  - Offline Outbox Queue with exponential backoff & multi-tab locking
 *  - Idempotency & TempId -> ServerId reconciliation
 *  - Native Blob media storage
 *  - Offline full-text search
 *  - Storage retention policy
 */ __turbopack_context__.s([
    "clearLocalRoomMessages",
    ()=>clearLocalRoomMessages,
    "deleteLocalMessage",
    ()=>deleteLocalMessage,
    "dequeueOutbox",
    ()=>dequeueOutbox,
    "enqueueOutbox",
    ()=>enqueueOutbox,
    "getChatDb",
    ()=>getChatDb,
    "getGlobalSyncMeta",
    ()=>getGlobalSyncMeta,
    "getLocalMedia",
    ()=>getLocalMedia,
    "getLocalMessages",
    ()=>getLocalMessages,
    "getLocalRooms",
    ()=>getLocalRooms,
    "getLocalStatuses",
    ()=>getLocalStatuses,
    "getPendingOutbox",
    ()=>getPendingOutbox,
    "getSyncMeta",
    ()=>getSyncMeta,
    "incrementOutboxRetry",
    ()=>incrementOutboxRetry,
    "lockOutboxItem",
    ()=>lockOutboxItem,
    "pruneOldMessages",
    ()=>pruneOldMessages,
    "reconcileMessageId",
    ()=>reconcileMessageId,
    "saveGlobalSyncMeta",
    ()=>saveGlobalSyncMeta,
    "saveLocalMedia",
    ()=>saveLocalMedia,
    "saveLocalMessage",
    ()=>saveLocalMessage,
    "saveLocalMessages",
    ()=>saveLocalMessages,
    "saveLocalRooms",
    ()=>saveLocalRooms,
    "saveLocalStatuses",
    ()=>saveLocalStatuses,
    "saveSyncMeta",
    ()=>saveSyncMeta,
    "searchLocalMessages",
    ()=>searchLocalMessages,
    "updateLocalMessageStatus",
    ()=>updateLocalMessageStatus,
    "updateLocalRoomPreview",
    ()=>updateLocalRoomPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
;
const DB_NAME = 'pingdart_local_chat_db';
const DB_VERSION = 3; // v3: normalized 7-store schema & room_seq indexing
// Exponential backoff delays: 5s, 30s, 2m, 10m, 1h
const RETRY_DELAYS = [
    5000,
    30000,
    120000,
    600000,
    3600000
];
function getCurrentUserId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // 1. Direct Zustand storage (pingdart-auth)
        const rawAuth = localStorage.getItem('pingdart-auth');
        if (rawAuth) {
            var _JSON_parse_state, _JSON_parse;
            const u = (_JSON_parse = JSON.parse(rawAuth)) === null || _JSON_parse === void 0 ? void 0 : (_JSON_parse_state = _JSON_parse.state) === null || _JSON_parse_state === void 0 ? void 0 : _JSON_parse_state.user;
            if (u === null || u === void 0 ? void 0 : u.id) return String(u.id);
            if (u === null || u === void 0 ? void 0 : u.email) return String(u.email).replace(/[^a-zA-Z0-9]/g, '_');
        }
    } catch (_) {}
    try {
        const raw = localStorage.getItem('auth-storage');
        if (raw) {
            var _JSON_parse_state1, _JSON_parse1;
            const u = (_JSON_parse1 = JSON.parse(raw)) === null || _JSON_parse1 === void 0 ? void 0 : (_JSON_parse_state1 = _JSON_parse1.state) === null || _JSON_parse_state1 === void 0 ? void 0 : _JSON_parse_state1.user;
            if (u === null || u === void 0 ? void 0 : u.id) return String(u.id);
            if (u === null || u === void 0 ? void 0 : u.email) return String(u.email).replace(/[^a-zA-Z0-9]/g, '_');
        }
    } catch (_) {}
    try {
        const raw = localStorage.getItem('user');
        if (raw) {
            const u = JSON.parse(raw);
            if (u === null || u === void 0 ? void 0 : u.id) return String(u.id);
            if (u === null || u === void 0 ? void 0 : u.email) return String(u.email).replace(/[^a-zA-Z0-9]/g, '_');
        }
    } catch (_) {}
    return 'guest';
}
const dbPromiseMap = new Map();
function getChatDb() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const userId = getCurrentUserId();
    const dbName = `pingdart_local_chat_db_${userId}`;
    if (!dbPromiseMap.has(dbName)) {
        const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(dbName, DB_VERSION, {
            upgrade (db, oldVersion, newVersion, transaction) {
                console.log(`[LocalChatDB] Upgrading database from v${oldVersion} to v${newVersion}`);
                // 1. Messages Store
                let msgStore;
                if (!db.objectStoreNames.contains('messages')) {
                    msgStore = db.createObjectStore('messages', {
                        keyPath: 'id'
                    });
                    msgStore.createIndex('roomId', 'roomId', {
                        unique: false
                    });
                    msgStore.createIndex('senderId', 'senderId', {
                        unique: false
                    });
                    msgStore.createIndex('type', 'type', {
                        unique: false
                    });
                    msgStore.createIndex('status', 'status', {
                        unique: false
                    });
                    msgStore.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                    msgStore.createIndex('updatedAt', 'updatedAt', {
                        unique: false
                    });
                    msgStore.createIndex('isDeleted', 'isDeleted', {
                        unique: false
                    });
                    msgStore.createIndex('room_created', [
                        'roomId',
                        'createdAt'
                    ], {
                        unique: false
                    });
                    msgStore.createIndex('room_seq', [
                        'roomId',
                        'roomSeq'
                    ], {
                        unique: false
                    });
                } else {
                    msgStore = transaction.objectStore('messages');
                    if (!msgStore.indexNames.contains('room_seq')) {
                        msgStore.createIndex('room_seq', [
                            'roomId',
                            'roomSeq'
                        ], {
                            unique: false
                        });
                    }
                }
                // 2. Rooms Store
                if (!db.objectStoreNames.contains('rooms')) {
                    const roomStore = db.createObjectStore('rooms', {
                        keyPath: 'id'
                    });
                    roomStore.createIndex('lastMessageTimestamp', 'lastMessageTimestamp', {
                        unique: false
                    });
                    roomStore.createIndex('unreadCount', 'unreadCount', {
                        unique: false
                    });
                    roomStore.createIndex('type', 'type', {
                        unique: false
                    });
                }
                // 3. Media Files Store
                if (!db.objectStoreNames.contains('media_files')) {
                    const mediaStore = db.createObjectStore('media_files', {
                        keyPath: 'id'
                    });
                    mediaStore.createIndex('messageId', 'messageId', {
                        unique: false
                    });
                    mediaStore.createIndex('roomId', 'roomId', {
                        unique: false
                    });
                    mediaStore.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                }
                if (!db.objectStoreNames.contains('media')) {
                    const legacyMedia = db.createObjectStore('media', {
                        keyPath: 'id'
                    });
                    legacyMedia.createIndex('messageId', 'messageId', {
                        unique: false
                    });
                }
                // 4. Outbox Queue Store
                if (!db.objectStoreNames.contains('outboxQueue')) {
                    const outboxStore = db.createObjectStore('outboxQueue', {
                        keyPath: 'queueId'
                    });
                    outboxStore.createIndex('roomId', 'roomId', {
                        unique: false
                    });
                    outboxStore.createIndex('status', 'status', {
                        unique: false
                    });
                    outboxStore.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                }
                // 5. Sync Meta Store
                if (!db.objectStoreNames.contains('syncMeta')) {
                    db.createObjectStore('syncMeta', {
                        keyPath: 'roomId'
                    });
                }
                if (!db.objectStoreNames.contains('globalSyncMeta')) {
                    db.createObjectStore('globalSyncMeta', {
                        keyPath: 'key'
                    });
                }
                // 6. Message Status Store
                if (!db.objectStoreNames.contains('message_status')) {
                    const statusStore = db.createObjectStore('message_status', {
                        keyPath: 'id'
                    });
                    statusStore.createIndex('messageId', 'messageId', {
                        unique: false
                    });
                }
                // 7. Room Members & Device Stores
                if (!db.objectStoreNames.contains('room_members')) {
                    db.createObjectStore('room_members', {
                        keyPath: [
                            'roomId',
                            'userId'
                        ]
                    });
                }
                if (!db.objectStoreNames.contains('user_devices')) {
                    db.createObjectStore('user_devices', {
                        keyPath: 'deviceId'
                    });
                }
                if (!db.objectStoreNames.contains('room_user_state')) {
                    db.createObjectStore('room_user_state', {
                        keyPath: [
                            'roomId',
                            'userId'
                        ]
                    });
                }
            }
        });
        dbPromiseMap.set(dbName, promise);
    }
    return dbPromiseMap.get(dbName);
}
async function getLocalMessages(roomId, beforeTimestamp, limit = 50) {
    try {
        const db = await getChatDb();
        const range = beforeTimestamp ? IDBKeyRange.bound([
            roomId,
            ''
        ], [
            roomId,
            beforeTimestamp
        ], false, true) : IDBKeyRange.bound([
            roomId,
            ''
        ], [
            roomId,
            '\uffff'
        ], false, false);
        const tx = db.transaction('messages', 'readonly');
        const index = tx.store.index('room_created');
        const results = [];
        let cursor = await index.openCursor(range, 'prev');
        while(cursor && results.length < limit){
            results.push(cursor.value);
            cursor = await cursor.continue();
        }
        return results.reverse();
    } catch (err) {
        console.warn('[LocalChatDB] getLocalMessages fallback error:', err);
        return [];
    }
}
async function saveLocalMessage(roomId, msg) {
    try {
        const db = await getChatDb();
        // Version-aware upsert: only overwrite if incoming version is newer
        const existing = await db.get('messages', String(msg.id));
        var _existing_version, _msg_version;
        if (existing && ((_existing_version = existing.version) !== null && _existing_version !== void 0 ? _existing_version : 1) > ((_msg_version = msg.version) !== null && _msg_version !== void 0 ? _msg_version : 1)) return;
        var _msg_version1, _msg_roomSeq, _msg_globalSeq;
        const cleanMsg = {
            id: String(msg.id),
            roomId: Number(roomId),
            senderId: msg.senderId ? Number(msg.senderId) : undefined,
            senderName: msg.senderName,
            from: msg.from || (msg.senderId ? 'them' : 'me'),
            text: msg.text || '',
            type: msg.type || 'text',
            data: msg.data || null,
            status: msg.status || 'sent',
            time: msg.time || new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }),
            createdAt: msg.createdAt ? new Date(msg.createdAt).toISOString() : new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isDeleted: !!msg.isDeleted,
            version: (_msg_version1 = msg.version) !== null && _msg_version1 !== void 0 ? _msg_version1 : 1,
            roomSeq: (_msg_roomSeq = msg.roomSeq) !== null && _msg_roomSeq !== void 0 ? _msg_roomSeq : 0,
            globalSeq: (_msg_globalSeq = msg.globalSeq) !== null && _msg_globalSeq !== void 0 ? _msg_globalSeq : 0,
            replyTo: msg.replyTo,
            replyToText: msg.replyToText,
            replyToSender: msg.replyToSender,
            linkPreview: msg.linkPreview,
            clientMessageId: msg.clientMessageId
        };
        await db.put('messages', cleanMsg);
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalMessage error:', err);
    }
}
async function saveLocalMessages(roomId, messages) {
    if (!messages || messages.length === 0) return;
    try {
        const db = await getChatDb();
        const tx = db.transaction('messages', 'readwrite');
        const store = tx.store;
        for (const msg of messages){
            // Preserve the explicit 'from' field set by the API processor — do NOT guess from senderId
            const fromVal = msg.from === 'me' ? 'me' : msg.from === 'system' ? 'system' : 'them';
            var _msg_version, _msg_roomSeq, _msg_globalSeq;
            const cleanMsg = {
                id: String(msg.id),
                roomId: Number(roomId),
                senderId: msg.senderId ? Number(msg.senderId) : undefined,
                senderName: msg.senderName,
                from: fromVal,
                text: msg.text || '',
                type: msg.type || 'text',
                data: msg.data || null,
                // Don't overwrite a 'sending'/'failed' status with a blank fallback
                status: msg.status && msg.status !== 'sending' ? msg.status : 'sent',
                time: msg.time || new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }),
                createdAt: msg.createdAt ? new Date(msg.createdAt).toISOString() : new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                isDeleted: !!msg.isDeleted,
                version: (_msg_version = msg.version) !== null && _msg_version !== void 0 ? _msg_version : 1,
                roomSeq: (_msg_roomSeq = msg.roomSeq) !== null && _msg_roomSeq !== void 0 ? _msg_roomSeq : 0,
                globalSeq: (_msg_globalSeq = msg.globalSeq) !== null && _msg_globalSeq !== void 0 ? _msg_globalSeq : 0,
                replyTo: msg.replyTo,
                replyToText: msg.replyToText,
                replyToSender: msg.replyToSender,
                linkPreview: msg.linkPreview,
                clientMessageId: msg.clientMessageId
            };
            store.put(cleanMsg);
        }
        await tx.done;
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalMessages batch error:', err);
    }
}
async function reconcileMessageId(roomId, tempId, serverId, status = 'sent') {
    try {
        const db = await getChatDb();
        const oldKey = String(tempId);
        const newKey = String(serverId);
        const oldMsg = await db.get('messages', oldKey);
        if (oldMsg) {
            const updated = {
                ...oldMsg,
                id: newKey,
                clientMessageId: oldKey,
                status,
                updatedAt: new Date().toISOString()
            };
            const tx = db.transaction('messages', 'readwrite');
            await tx.store.delete(oldKey);
            await tx.store.put(updated);
            await tx.done;
        }
    } catch (err) {
        console.warn('[LocalChatDB] reconcileMessageId error:', err);
    }
}
async function updateLocalMessageStatus(messageId, status) {
    try {
        const db = await getChatDb();
        const msg = await db.get('messages', String(messageId));
        if (msg) {
            msg.status = status;
            msg.updatedAt = new Date().toISOString();
            await db.put('messages', msg);
        }
    } catch (err) {
        console.warn('[LocalChatDB] updateLocalMessageStatus error:', err);
    }
}
async function deleteLocalMessage(messageId, scope = 'all') {
    try {
        const db = await getChatDb();
        const key = String(messageId);
        if (scope === 'all') {
            const msg = await db.get('messages', key);
            if (msg) {
                msg.isDeleted = true;
                msg.text = '🚫 This message was deleted';
                msg.type = 'deleted';
                msg.data = null;
                msg.updatedAt = new Date().toISOString();
                await db.put('messages', msg);
            }
        } else {
            await db.delete('messages', key);
        }
    } catch (err) {
        console.warn('[LocalChatDB] deleteLocalMessage error:', err);
    }
}
async function clearLocalRoomMessages(roomId) {
    try {
        const db = await getChatDb();
        const tx = db.transaction('messages', 'readwrite');
        const index = tx.store.index('roomId');
        for (const targetId of [
            Number(roomId),
            String(roomId)
        ]){
            try {
                let cursor = await index.openCursor(IDBKeyRange.only(targetId));
                while(cursor){
                    await cursor.delete();
                    cursor = await cursor.continue();
                }
            } catch (_) {}
        }
        await tx.done;
    } catch (err) {
        console.warn('[LocalChatDB] clearLocalRoomMessages error:', err);
    }
}
async function searchLocalMessages(query, roomId, limit = 50) {
    if (!query || !query.trim()) return [];
    try {
        const db = await getChatDb();
        const cleanQuery = query.toLowerCase().trim();
        const allMsgs = roomId ? await db.getAllFromIndex('messages', 'roomId', Number(roomId)) : await db.getAll('messages');
        const matches = allMsgs.filter((m)=>{
            if (m.isDeleted || m.type === 'deleted') return false;
            return typeof m.text === 'string' && m.text.toLowerCase().includes(cleanQuery);
        });
        // Sort descending by time
        matches.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        return matches.slice(0, limit);
    } catch (err) {
        console.warn('[LocalChatDB] searchLocalMessages error:', err);
        return [];
    }
}
async function getLocalRooms() {
    try {
        const db = await getChatDb();
        const rooms = await db.getAll('rooms');
        return rooms.map((r)=>({
                ...r,
                isOnline: false
            })).sort((a, b)=>{
            const tA = a.lastMessageTimestamp ? new Date(a.lastMessageTimestamp).getTime() : 0;
            const tB = b.lastMessageTimestamp ? new Date(b.lastMessageTimestamp).getTime() : 0;
            return tB - tA;
        });
    } catch (err) {
        console.warn('[LocalChatDB] getLocalRooms error:', err);
        return [];
    }
}
async function saveLocalRooms(rooms) {
    if (!rooms || rooms.length === 0) return;
    try {
        const db = await getChatDb();
        const tx = db.transaction('rooms', 'readwrite');
        for (const r of rooms){
            if (r && r.id) {
                tx.store.put({
                    id: Number(r.id),
                    name: r.name || r.title || r.subject,
                    sender: r.sender || r.name || r.title || r.subject || 'User',
                    preview: r.preview || '',
                    time: r.time || '',
                    unread: !!r.unread,
                    unreadCount: Number(r.unreadCount) || 0,
                    lastMessageTimestamp: r.lastMessageTimestamp || new Date(),
                    lastMessageId: r.lastMessageId,
                    lastRoomSeq: Number(r.lastRoomSeq) || 0,
                    avatar: r.avatar || r.avatarUrl,
                    avatarUrl: r.avatarUrl || r.avatar,
                    isOnline: !!r.isOnline,
                    isMuted: !!r.isMuted,
                    isLocked: !!r.isLocked,
                    isPinned: !!r.isPinned,
                    isFavorite: !!r.isFavorite,
                    isArchived: !!r.isArchived,
                    type: r.type || 'direct',
                    otherUserId: r.otherUserId ? Number(r.otherUserId) : undefined,
                    subject: r.subject,
                    isMe: !!r.isMe,
                    countryCode: r.countryCode
                });
            }
        }
        await tx.done;
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalRooms error:', err);
    }
}
async function updateLocalRoomPreview(roomId, preview, time = '', isMe = false) {
    try {
        const db = await getChatDb();
        const room = await db.get('rooms', Number(roomId));
        if (room) {
            room.preview = preview;
            room.time = time;
            room.isMe = isMe;
            room.lastMessageTimestamp = new Date().toISOString();
            await db.put('rooms', room);
        }
    } catch (err) {
        console.warn('[LocalChatDB] updateLocalRoomPreview error:', err);
    }
}
async function enqueueOutbox(item) {
    const queueId = `outbox_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    try {
        const db = await getChatDb();
        const record = {
            ...item,
            queueId,
            retryCount: 0,
            status: 'pending',
            nextRetryAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        };
        await db.put('outboxQueue', record);
        return queueId;
    } catch (err) {
        console.warn('[LocalChatDB] enqueueOutbox error:', err);
        return queueId;
    }
}
async function getPendingOutbox() {
    try {
        const db = await getChatDb();
        const all = await db.getAll('outboxQueue');
        const now = Date.now();
        return all.filter((item)=>{
            if (item.status === 'failed') return false;
            // If currently locked as 'sending', check if stale (> 30 seconds)
            if (item.status === 'sending') {
                const lockTime = item.lockedAt ? new Date(item.lockedAt).getTime() : 0;
                if (now - lockTime < 30000) return false; // Active lock held by another tab
            }
            // Check exponential backoff timer
            if (item.nextRetryAt && new Date(item.nextRetryAt).getTime() > now) {
                return false;
            }
            return true;
        });
    } catch (err) {
        console.warn('[LocalChatDB] getPendingOutbox error:', err);
        return [];
    }
}
async function lockOutboxItem(queueId) {
    try {
        const db = await getChatDb();
        const item = await db.get('outboxQueue', queueId);
        if (!item) return false;
        item.status = 'sending';
        item.lockedAt = new Date().toISOString();
        await db.put('outboxQueue', item);
        return true;
    } catch (err) {
        console.warn('[LocalChatDB] lockOutboxItem error:', err);
        return false;
    }
}
async function dequeueOutbox(queueId) {
    try {
        const db = await getChatDb();
        await db.delete('outboxQueue', queueId);
    } catch (err) {
        console.warn('[LocalChatDB] dequeueOutbox error:', err);
    }
}
async function incrementOutboxRetry(queueId) {
    try {
        const db = await getChatDb();
        const item = await db.get('outboxQueue', queueId);
        if (item) {
            const nextCount = (item.retryCount || 0) + 1;
            item.retryCount = nextCount;
            const delayMs = RETRY_DELAYS[Math.min(nextCount - 1, RETRY_DELAYS.length - 1)];
            item.nextRetryAt = new Date(Date.now() + delayMs).toISOString();
            item.status = nextCount >= 5 ? 'failed' : 'pending';
            item.lockedAt = undefined;
            await db.put('outboxQueue', item);
        }
    } catch (err) {
        console.warn('[LocalChatDB] incrementOutboxRetry error:', err);
    }
}
async function saveLocalMedia(item) {
    try {
        const db = await getChatDb();
        await db.put('media', item);
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalMedia error:', err);
    }
}
async function getLocalMedia(messageId) {
    try {
        const db = await getChatDb();
        const tx = db.transaction('media', 'readonly');
        const index = tx.store.index('messageId');
        return await index.get(String(messageId));
    } catch (err) {
        console.warn('[LocalChatDB] getLocalMedia error:', err);
        return undefined;
    }
}
async function pruneOldMessages(maxDays = 180) {
    try {
        const db = await getChatDb();
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - maxDays);
        const cutoffIso = cutoffDate.toISOString();
        const tx = db.transaction('messages', 'readwrite');
        const index = tx.store.index('createdAt');
        const range = IDBKeyRange.upperBound(cutoffIso);
        let count = 0;
        let cursor = await index.openCursor(range);
        while(cursor){
            cursor.delete();
            count++;
            cursor = await cursor.continue();
        }
        await tx.done;
        if (count > 0) {
            console.log(`[LocalChatDB] 🧹 Pruned ${count} old messages older than ${maxDays} days`);
        }
        return count;
    } catch (err) {
        console.warn('[LocalChatDB] pruneOldMessages error:', err);
        return 0;
    }
}
async function getSyncMeta(roomId) {
    try {
        const db = await getChatDb();
        return await db.get('syncMeta', Number(roomId));
    } catch (err) {
        console.warn('[LocalChatDB] getSyncMeta error:', err);
        return undefined;
    }
}
async function saveSyncMeta(roomId, lastRoomSeq) {
    try {
        const db = await getChatDb();
        await db.put('syncMeta', {
            roomId: Number(roomId),
            lastRoomSeq: Number(lastRoomSeq),
            lastSyncedAt: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[LocalChatDB] saveSyncMeta error:', err);
    }
}
async function getGlobalSyncMeta(key = 'main') {
    try {
        const db = await getChatDb();
        return await db.get('globalSyncMeta', key);
    } catch (err) {
        console.warn('[LocalChatDB] getGlobalSyncMeta error:', err);
        return undefined;
    }
}
async function saveGlobalSyncMeta(globalSeq, key = 'main') {
    try {
        const db = await getChatDb();
        await db.put('globalSyncMeta', {
            key,
            globalSeq: Number(globalSeq),
            lastSyncedAt: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[LocalChatDB] saveGlobalSyncMeta error:', err);
    }
}
async function getLocalStatuses() {
    try {
        const db = await getChatDb();
        const meta = await db.get('globalSyncMeta', 'cached_statuses');
        return (meta === null || meta === void 0 ? void 0 : meta.data) || [];
    } catch (err) {
        console.warn('[LocalChatDB] getLocalStatuses error:', err);
        return [];
    }
}
async function saveLocalStatuses(statuses) {
    try {
        const db = await getChatDb();
        await db.put('globalSyncMeta', {
            key: 'cached_statuses',
            data: statuses,
            lastSyncedAt: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalStatuses error:', err);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/meshService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshService",
    ()=>MeshService,
    "default",
    ()=>__TURBOPACK__default__export__,
    "meshService",
    ()=>meshService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
;
// Register native plugin
const PingDartMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerPlugin"])('PingDartMesh');
class MeshService {
    static getInstance() {
        if (!MeshService.instance) {
            MeshService.instance = new MeshService();
        }
        return MeshService.instance;
    }
    isAvailable() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === 'android' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === 'ios');
    }
    async checkPermissions() {
        if (!this.isAvailable()) return false;
        try {
            const res = await PingDartMesh.checkPermissions();
            return res.bluetooth === 'granted';
        } catch (e) {
            return false;
        }
    }
    async requestPermissions() {
        if (!this.isAvailable()) return false;
        try {
            const res = await PingDartMesh.requestPermissions();
            return res.bluetooth === 'granted';
        } catch (e) {
            return false;
        }
    }
    async startMesh(deviceId, requestPermissions = false) {
        if (!this.isAvailable()) {
            return {
                success: false,
                deviceId: '',
                isAdvertising: false,
                isScanning: false
            };
        }
        return await PingDartMesh.startMesh(deviceId ? {
            deviceId,
            requestPermissions
        } : {
            requestPermissions
        });
    }
    async stopMesh() {
        if (!this.isAvailable()) return {
            success: false
        };
        return await PingDartMesh.stopMesh();
    }
    async getStatus() {
        if (!this.isAvailable()) return null;
        return await PingDartMesh.getMeshStatus();
    }
    async getDiscoveredPeers() {
        if (!this.isAvailable()) return [];
        const res = await PingDartMesh.getDiscoveredPeers();
        return res.peers || [];
    }
    /**
   * Sprint 1 Acceptance Testing Helper:
   * Sends a synthetic test packet to a peer's Bluetooth MAC address
   * without requiring any existing chat UI, Signal E2EE, or API connectivity.
   */ async sendTestPacket(targetAddress, receiverId = 'peer_test', payload = 'SYNTHETIC_TEST_PACKET_PINGDART_BLE') {
        if (!this.isAvailable()) {
            return {
                success: false,
                error: 'Mesh not available on this platform'
            };
        }
        return await PingDartMesh.sendTestPacket({
            targetAddress,
            receiverId,
            payload
        });
    }
    async sendPacket(targetAddress, receiverId, payload, messageId, ttl) {
        if (!this.isAvailable()) {
            return {
                success: false,
                error: 'Mesh not available on this platform'
            };
        }
        return await PingDartMesh.sendPacket({
            targetAddress,
            receiverId,
            payload,
            messageId,
            ttl
        });
    }
    async onPeerDiscovered(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('peerDiscovered', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async onPacketReceived(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('packetReceived', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async onPacketSent(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('packetSent', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async onStatusChanged(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('meshStatusChanged', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async removeAllListeners() {
        if (!this.isAvailable()) return;
        for (const handle of this.activeListeners){
            await handle.remove();
        }
        this.activeListeners = [];
        await PingDartMesh.removeAllListeners();
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "activeListeners", []);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MeshService, "instance", void 0);
const meshService = MeshService.getInstance();
const __TURBOPACK__default__export__ = meshService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/meshChatManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "meshChatManager",
    ()=>meshChatManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/meshService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioTones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
;
;
;
;
;
;
class MeshChatManager {
    static getInstance() {
        if (!MeshChatManager.instance) {
            MeshChatManager.instance = new MeshChatManager();
        }
        return MeshChatManager.instance;
    }
    isAvailable() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].isAvailable();
    }
    async hasPermissions() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].checkPermissions();
    }
    async requestPermissions() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].requestPermissions();
    }
    /**
   * Initializes the Mesh service and attaches incoming packet listeners.
   * By default, requestPermissions is false so cold-boot background initialization
   * never prompts the user with the system Nearby Devices dialog.
   */ async init(userId, requestPermissions = false) {
        var _useAuthStore_getState_user;
        if (!this.isAvailable()) return;
        const resolvedUserId = userId ? String(userId) : ((_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id) ? String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user.id) : null;
        this.currentUserId = resolvedUserId;
        if (this.initialized) {
            return;
        }
        try {
            const hasPerms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].checkPermissions();
            if (!hasPerms) {
                if (requestPermissions) {
                    const granted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].requestPermissions();
                    if (!granted) {
                        console.log('[MeshChatManager] Bluetooth permission request dismissed or denied.');
                        return;
                    }
                } else {
                    console.log('[MeshChatManager] Bluetooth permissions not granted. Skipping background auto-start to avoid prompting user.');
                    return;
                }
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].startMesh(resolvedUserId || undefined, requestPermissions);
            if (!res.success) {
                console.log('[MeshChatManager] Mesh engine did not start:', res.error || 'Permission or adapter issue');
                return;
            }
            console.log('[MeshChatManager] Mesh engine started:', res);
            this.initialized = true;
            // Attach peer discovery listener
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].onPeerDiscovered((peer)=>{
                this.cachedPeers.set(peer.address, peer);
                console.log(`[MeshChatManager] 🔍 BLE Peer discovered: ${peer.address} (deviceId: ${peer.deviceId}, RSSI: ${peer.rssi}dBm)`);
            });
            // Attach packet listener
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].onPacketReceived(async (packet)=>{
                await this.handleIncomingPacket(packet);
            });
            console.log('[MeshChatManager] Attached incoming packet and peer discovery listeners successfully');
        } catch (err) {
            console.warn('[MeshChatManager] Error initializing mesh engine:', err);
        }
    }
    async stop() {
        if (!this.isAvailable()) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].stopMesh();
            this.initialized = false;
        } catch (err) {
            console.warn('[MeshChatManager] Error stopping mesh engine:', err);
        }
    }
    /**
   * Attempts to send an offline message via PingDart BLE Mesh.
   * Returns true if sent successfully over BLE, false otherwise.
   */ async sendOfflineMessage(options) {
        if (!this.isAvailable()) {
            return false;
        }
        const { chat, tempId, textToSend, msgText, payload, currentReplyTarget, replyToText, replyToSender, currentLinkPreview } = options;
        try {
            const pluginPeers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].getDiscoveredPeers();
            pluginPeers.forEach((p)=>this.cachedPeers.set(p.address, p));
            const peers = Array.from(this.cachedPeers.values());
            const targetUserIdStr = chat.otherUserId ? String(chat.otherUserId) : '';
            // Find the best peer to send to
            let targetPeer = undefined;
            if (targetUserIdStr) {
                // Look for exact deviceId match or prefix match (as advertiser advertises first 8 chars)
                targetPeer = peers.find((p)=>p.deviceId === targetUserIdStr || p.deviceId.startsWith(targetUserIdStr) || targetUserIdStr.startsWith(p.deviceId));
            }
            // If only 1 peer is discovered in range (typical direct 2-phone physical test), use that peer
            if (!targetPeer && peers.length === 1) {
                targetPeer = peers[0];
            }
            // Fallback: pick the peer with the highest signal strength (RSSI closest to 0)
            if (!targetPeer && peers.length > 0) {
                targetPeer = [
                    ...peers
                ].sort((a, b)=>b.rssi - a.rssi)[0];
            }
            const targetAddress = targetPeer ? targetPeer.address : targetUserIdStr;
            if (!targetAddress) {
                console.warn('[MeshChatManager] No discovered peers available for offline send');
                return false;
            }
            const currentAuthUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            const myId = (currentAuthUser === null || currentAuthUser === void 0 ? void 0 : currentAuthUser.id) ? String(currentAuthUser.id) : this.currentUserId || 'me';
            const myName = (currentAuthUser === null || currentAuthUser === void 0 ? void 0 : currentAuthUser.name) || 'You';
            const meshPayload = JSON.stringify({
                type: 'chat_message',
                roomId: chat.id,
                messageId: String(tempId),
                senderId: myId,
                senderName: myName,
                receiverId: targetUserIdStr,
                text: textToSend,
                preview: msgText,
                createdAt: new Date().toISOString(),
                replyTo: currentReplyTarget ? {
                    id: currentReplyTarget.id,
                    text: replyToText,
                    sender: replyToSender
                } : null,
                linkPreview: currentLinkPreview || null,
                payload
            });
            console.log(`[MeshChatManager] Transmitting offline message over BLE to ${targetAddress} (receiver: ${targetUserIdStr})...`);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].sendPacket(targetAddress, targetUserIdStr || 'peer', meshPayload, String(tempId));
            if (result.success) {
                console.log(`[MeshChatManager] ✅ Offline message transmitted over BLE successfully (id: ${tempId})`);
                return true;
            } else {
                console.warn('[MeshChatManager] ⚠️ BLE packet transmission failed:', result.error);
                return false;
            }
        } catch (err) {
            console.warn('[MeshChatManager] Exception during offline BLE transmission:', err);
            return false;
        }
    }
    /**
   * Internal handler for incoming packets from GATT server.
   */ async handleIncomingPacket(packet) {
        if (!packet || !packet.payload) return;
        try {
            const data = JSON.parse(packet.payload);
            if (data.type === 'chat_message') {
                await this.handleIncomingChatMessage(data, packet);
            } else if (data.type === 'delivery_ack') {
                await this.handleIncomingDeliveryAck(data);
            } else if (data.type === 'read_ack') {
                await this.handleIncomingReadAck(data);
            }
        } catch (e) {
            console.warn('[MeshChatManager] Non-JSON or unsupported mesh packet received:', packet.payload);
        }
    }
    async handleIncomingChatMessage(data, packet) {
        const rawMsgId = data.messageId || data.id || packet.messageId;
        const dedupKey = `${data.roomId}:${rawMsgId}`;
        if (this.processedPacketIds.has(dedupKey)) {
            return;
        }
        this.processedPacketIds.add(dedupKey);
        if (this.processedPacketIds.size > 500) {
            const oldest = this.processedPacketIds.values().next().value;
            if (oldest) this.processedPacketIds.delete(oldest);
        }
        console.log('[MeshChatManager] 📥 Processing incoming offline chat message:', data);
        let rawText = data.text;
        let finalText = rawText;
        // Check for Signal E2EE ciphertext
        if (typeof rawText === 'string' && (rawText.includes('__e2ee') || rawText.includes('_e2ee')) && rawText.startsWith('{')) {
            try {
                const decrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptMessage"](Number(data.senderId), rawText, false, data.roomId, rawMsgId);
                if (decrypted) {
                    try {
                        const parsed = JSON.parse(decrypted);
                        if (parsed && typeof parsed.text === 'string') {
                            finalText = parsed.text;
                        } else {
                            finalText = decrypted;
                        }
                    } catch (e) {
                        finalText = decrypted;
                    }
                }
            } catch (err) {
                console.warn('[MeshChatManager] Error decrypting incoming Signal mesh ciphertext:', err);
            }
        }
        // Resolve target room
        let targetRoomId = Number(data.roomId);
        try {
            const localRooms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalRooms"]();
            const matchedRoom = localRooms.find((r)=>String(r.id) === String(data.roomId) || data.senderId && String(r.otherUserId) === String(data.senderId));
            if (matchedRoom) {
                targetRoomId = matchedRoom.id;
            }
        } catch (_) {}
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        const newMsgObj = {
            id: rawMsgId,
            roomId: targetRoomId,
            from: 'them',
            senderId: Number(data.senderId),
            senderName: data.senderName || 'Peer',
            text: finalText,
            type: data.type || 'text',
            data: {
                isMesh: true,
                ...data.payload || {},
                ...data.replyTo ? {
                    replyToId: data.replyTo.id,
                    replyToText: data.replyTo.text,
                    replyToSender: data.replyTo.sender
                } : {}
            },
            time: timeStr,
            createdAt: data.createdAt || now.toISOString(),
            status: 'delivered'
        };
        // Save to local IndexedDB/SQLite
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](targetRoomId, newMsgObj);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](targetRoomId, finalText, timeStr, false);
        } catch (dbErr) {
            console.warn('[MeshChatManager] Error persisting message to local storage:', dbErr);
        }
        // Dispatch real-time events to active UI components
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('chat:new_message', {
                detail: newMsgObj
            }));
            window.dispatchEvent(new CustomEvent('pingdart:mesh_message_received', {
                detail: newMsgObj
            }));
            window.dispatchEvent(new CustomEvent('room:preview_updated', {
                detail: {
                    roomId: targetRoomId,
                    senderId: data.senderId,
                    preview: finalText,
                    time: timeStr,
                    isMe: false,
                    lastMessageTimestamp: now.toISOString(),
                    unread: true,
                    unreadCount: 1
                }
            }));
        }
        // Play incoming message audio tone
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playConversationTone"])('incoming');
        } catch (_) {}
        // Send delivery ACK back to sender over BLE if address is available
        if (packet.senderAddress && data.senderId) {
            const ackPayload = JSON.stringify({
                type: 'delivery_ack',
                messageId: rawMsgId,
                roomId: targetRoomId
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].sendPacket(packet.senderAddress, String(data.senderId), ackPayload).catch(()=>{});
        }
    }
    async handleIncomingDeliveryAck(data) {
        const messageId = data.messageId;
        if (!messageId) return;
        console.log('[MeshChatManager] 📬 Received BLE delivery ACK for message:', messageId);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](messageId, 'delivered');
        } catch (_) {}
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('chat:messages_delivered', {
                detail: {
                    roomId: data.roomId,
                    messageIds: [
                        messageId
                    ]
                }
            }));
        }
    }
    async handleIncomingReadAck(data) {
        const roomId = data.roomId;
        if (!roomId) return;
        console.log('[MeshChatManager] 👁️ Received BLE read ACK for room:', roomId);
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('chat:messages_read', {
                detail: {
                    roomId: String(roomId),
                    userId: data.readerId
                }
            }));
        }
    }
    /**
   * Transmits a read receipt over BLE Mesh to the peer for this room.
   */ async sendReadReceipt(roomId, targetUserId) {
        if (!this.isAvailable()) return;
        try {
            const peers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].getDiscoveredPeers();
            peers.forEach((p)=>this.cachedPeers.set(p.address, p));
            const targetUserIdStr = targetUserId ? String(targetUserId) : '';
            let targetPeer = targetUserIdStr ? Array.from(this.cachedPeers.values()).find((p)=>p.deviceId === targetUserIdStr || p.deviceId.startsWith(targetUserIdStr) || targetUserIdStr.startsWith(p.deviceId)) : undefined;
            if (!targetPeer && this.cachedPeers.size === 1) {
                targetPeer = Array.from(this.cachedPeers.values())[0];
            }
            if (!targetPeer && peers.length > 0) {
                targetPeer = [
                    ...peers
                ].sort((a, b)=>b.rssi - a.rssi)[0];
            }
            if (!targetPeer) {
                // No offline BLE peer found nearby — skip BLE transmission
                return;
            }
            const targetAddress = targetPeer.address;
            const currentAuthUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            const myId = (currentAuthUser === null || currentAuthUser === void 0 ? void 0 : currentAuthUser.id) ? String(currentAuthUser.id) : this.currentUserId || 'me';
            const readPayload = JSON.stringify({
                type: 'read_ack',
                roomId: String(roomId),
                readerId: myId
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshService"].sendPacket(targetAddress, targetUserIdStr || 'peer', readPayload);
            console.log(`[MeshChatManager] 👁️ Sent BLE read receipt to ${targetAddress} for room ${roomId}`);
        } catch (err) {
            console.warn('[MeshChatManager] Error sending read receipt:', err);
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "initialized", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentUserId", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "processedPacketIds", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cachedPeers", new Map());
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MeshChatManager, "instance", void 0);
const meshChatManager = MeshChatManager.getInstance();
const __TURBOPACK__default__export__ = meshChatManager;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/chat/hooks/useChatHandlers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHighestMessageStatus",
    ()=>getHighestMessageStatus,
    "globalDeliveredReceipts",
    ()=>globalDeliveredReceipts,
    "globalMessageCache",
    ()=>globalMessageCache,
    "globalReadReceipts",
    ()=>globalReadReceipts,
    "useChatHandlers",
    ()=>useChatHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioTones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$linkPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/linkPreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/meshChatManager.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
/**
 * Bounded message cache — keeps at most MAX_CACHED_ROOMS entries so that
 * long sessions on low-memory Android devices don't accumulate stale DOM
 * trees and trigger aggressive GC pauses.
 */ const MAX_CACHED_ROOMS = 20;
class BoundedMessageCache {
    get(key) {
        return this.map.get(key);
    }
    set(key, value) {
        // Re-insert to move to the most-recently-used position
        this.map.delete(key);
        this.map.set(key, value);
        // Evict the oldest entry when over the limit
        if (this.map.size > MAX_CACHED_ROOMS) {
            const oldest = this.map.keys().next().value;
            if (oldest !== undefined) this.map.delete(oldest);
        }
    }
    delete(key) {
        this.map.delete(key);
    }
    clear() {
        this.map.clear();
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "map", new Map());
    }
}
const globalMessageCache = new BoundedMessageCache();
const globalReadReceipts = new Set(); // Tracks message IDs that were marked as read before their HTTP response finished
const globalDeliveredReceipts = new Set(); // Tracks delivery events that arrive before optimistic IDs are reconciled
function getHighestMessageStatus(...statuses) {
    const rank = {
        failed: 0,
        error: 0,
        sending: 1,
        sent: 2,
        delivered: 3,
        read: 4
    };
    return statuses.filter((status)=>Boolean(status)).reduce((highest, status)=>{
        var _rank_status, _rank_highest;
        return ((_rank_status = rank[status]) !== null && _rank_status !== void 0 ? _rank_status : 0) > ((_rank_highest = rank[highest]) !== null && _rank_highest !== void 0 ? _rank_highest : 0) ? status : highest;
    }, 'sent');
}
function useChatHandlers({ chat, socket, message, setMessage, setMessages, textareaRef, isGroupChat, setMentionStartIndex, setMentionQuery, setMentionListVisible, mentionStartIndex, mentionQuery, setReplyTarget, replyTarget, isBulkDelete, selectedMessages, setSelectedMessages, setIsSelectionMode, setDeleteModalOpen, deleteMsgTarget, setDeleteMsgTarget, setForwardMsg, setForwardOpen, setReactions, setShowEmojiPicker, onMessageSent, onRoomUpdated, showAttachmentMenu, setShowAttachmentMenu, selectedFiles, setSelectedFiles, setActiveFileIndex, setFileCaption, setShowCameraModal, setShowContactModal, setShowPollModal, setShowEventModal, setShowMicModal, setShowAudioCallModal, setShowVideoCallModal }) {
    _s();
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTypingActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const messageQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve());
    const [linkPreview, setLinkPreview] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const stopTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatHandlers.useCallback[stopTyping]": ()=>{
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
                typingTimerRef.current = null;
            }
            if (isTypingActiveRef.current) {
                isTypingActiveRef.current = false;
                if (socket && (chat === null || chat === void 0 ? void 0 : chat.id)) {
                    socket.emit('chat:typing', {
                        roomId: chat.id,
                        isTyping: false
                    });
                }
            }
        }
    }["useChatHandlers.useCallback[stopTyping]"], [
        socket,
        chat === null || chat === void 0 ? void 0 : chat.id
    ]);
    const handleInput = (e)=>{
        const val = e.target.value;
        setMessage(val);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
        const urlMatch = val.match(/(https?:\/\/[^\s]+|www\.[^\s]+)/i);
        if (urlMatch) {
            const detectedUrl = urlMatch[0];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$linkPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLinkPreview"])(detectedUrl).then((data)=>{
                if (data) setLinkPreview(data);
            });
        } else {
            setLinkPreview(null);
        }
        if (socket && (chat === null || chat === void 0 ? void 0 : chat.id)) {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            if (val.trim().length > 0) {
                if (!isTypingActiveRef.current) {
                    isTypingActiveRef.current = true;
                    socket.emit('chat:typing', {
                        roomId: chat.id,
                        isTyping: true,
                        username: (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.username) || 'Someone'
                    });
                }
                if (typingTimerRef.current) {
                    clearTimeout(typingTimerRef.current);
                }
                typingTimerRef.current = setTimeout(()=>{
                    stopTyping();
                }, 2500);
            } else {
                stopTyping();
            }
        }
        if (isGroupChat) {
            const cursor = e.target.selectionStart || 0;
            const textBeforeCursor = val.slice(0, cursor);
            const match = textBeforeCursor.match(/(?:^|\s)@([^\s]*)$/);
            if (match) {
                setMentionStartIndex(cursor - match[1].length - 1);
                setMentionQuery(match[1]);
                setMentionListVisible(true);
            } else {
                setMentionListVisible(false);
            }
        }
    };
    const handleMentionSelect = (memberName)=>{
        const beforeMention = message.slice(0, mentionStartIndex);
        const afterMention = message.slice(mentionStartIndex + mentionQuery.length + 1);
        const newMessage = `${beforeMention}@${memberName} ${afterMention}`;
        setMessage(newMessage);
        setMentionListVisible(false);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    const handleReply = (msg)=>{
        var _textareaRef_current;
        setReplyTarget(msg);
        (_textareaRef_current = textareaRef.current) === null || _textareaRef_current === void 0 ? void 0 : _textareaRef_current.focus();
    };
    const handleDeleteMessage = async (scope)=>{
        if (isBulkDelete) {
            const msgsToDelete = [
                ...selectedMessages
            ];
            for (const id of msgsToDelete){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].deleteMessage(id, scope);
                } catch (e) {
                    console.error("Failed to delete message", id, e);
                }
            }
            setMessages((prev)=>{
                let updated;
                if (scope === 'all') {
                    updated = prev.map((m)=>msgsToDelete.includes(m.id) ? {
                            ...m,
                            type: 'deleted',
                            text: '🚫 This message was deleted',
                            data: null
                        } : m);
                } else {
                    updated = prev.filter((m)=>!msgsToDelete.includes(m.id));
                }
                const lastMsg = updated.length > 0 ? updated[updated.length - 1] : null;
                let newPreview = 'No messages yet';
                if (lastMsg) {
                    if (lastMsg.type === 'deleted') newPreview = '🚫 This message was deleted';
                    else if (lastMsg.type === 'text' || lastMsg.type === 'system') newPreview = lastMsg.text || 'No messages yet';
                    else newPreview = lastMsg.type ? `[${lastMsg.type}]` : 'Attachment';
                }
                setTimeout(()=>{
                    onRoomUpdated === null || onRoomUpdated === void 0 ? void 0 : onRoomUpdated(chat.id, {
                        preview: newPreview,
                        time: lastMsg ? lastMsg.time : ''
                    });
                }, 0);
                return updated;
            });
            setSelectedMessages([]);
            setIsSelectionMode(false);
            setDeleteModalOpen(false);
        } else if (deleteMsgTarget) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].deleteMessage(deleteMsgTarget.id, scope);
                setMessages((prev)=>{
                    let updated;
                    if (scope === 'all') {
                        updated = prev.map((m)=>m.id === deleteMsgTarget.id ? {
                                ...m,
                                type: 'deleted',
                                text: '🚫 This message was deleted',
                                data: null
                            } : m);
                    } else {
                        updated = prev.filter((m)=>m.id !== deleteMsgTarget.id);
                    }
                    const lastMsg = updated.length > 0 ? updated[updated.length - 1] : null;
                    let newPreview = 'No messages yet';
                    if (lastMsg) {
                        if (lastMsg.type === 'deleted') newPreview = '🚫 This message was deleted';
                        else if (lastMsg.type === 'text' || lastMsg.type === 'system') newPreview = lastMsg.text || 'No messages yet';
                        else newPreview = lastMsg.type ? `[${lastMsg.type}]` : 'Attachment';
                    }
                    setTimeout(()=>{
                        onRoomUpdated === null || onRoomUpdated === void 0 ? void 0 : onRoomUpdated(chat.id, {
                            preview: newPreview,
                            time: lastMsg ? lastMsg.time : ''
                        });
                    }, 0);
                    return updated;
                });
                setDeleteModalOpen(false);
                setDeleteMsgTarget(null);
            } catch (e) {
                console.error("Failed to delete message", e);
            }
        }
    };
    const handleForward = (msg)=>{
        setForwardMsg(msg);
        setForwardOpen(true);
    };
    const handleReact = async (msg, emoji)=>{
        if (!msg || !msg.id) return;
        // Optimistic update
        setReactions((prev)=>{
            const msgR = {
                ...prev[msg.id] || {}
            };
            msgR[emoji] = (msgR[emoji] || 0) + 1;
            return {
                ...prev,
                [msg.id]: msgR
            };
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].reactMessage(chat.id, msg.id, emoji);
            if (res && res.success && res.data) {
                var _updatedMsg_data;
                const updatedMsg = res.data;
                const serverReactions = (_updatedMsg_data = updatedMsg.data) === null || _updatedMsg_data === void 0 ? void 0 : _updatedMsg_data.reactions;
                if (serverReactions && typeof serverReactions === 'object') {
                    const normalized = {};
                    for (const [em, val] of Object.entries(serverReactions)){
                        const count = Array.isArray(val) ? val.length : typeof val === 'number' ? val : Number(val) || 0;
                        if (count > 0) normalized[em] = count;
                    }
                    setReactions((prev)=>({
                            ...prev,
                            [msg.id]: normalized
                        }));
                }
                // Also update message in messages array and cache
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        var _updatedMsg_data;
                        return String(m.id) === String(msg.id) ? {
                            ...m,
                            data: {
                                ...m.data || {},
                                reactions: (_updatedMsg_data = updatedMsg.data) === null || _updatedMsg_data === void 0 ? void 0 : _updatedMsg_data.reactions
                            }
                        } : m;
                    });
                    globalMessageCache.set(chat.id, next);
                    try {
                        localStorage.setItem(`ping_chat_msgs_${chat.id}`, JSON.stringify(next.slice(-50)));
                    } catch (_) {}
                    return next;
                });
            }
        } catch (e) {
            console.error("React failed:", e);
        }
    };
    const sendMessage = async ()=>{
        var _replyToData_mimetype_split, _replyToData_mimetype;
        if (!message.trim()) return;
        const tempId = Date.now();
        const msgText = message;
        const currentReplyTarget = replyTarget;
        const currentLinkPreview = linkPreview;
        const getReplyPreviewText = (msg)=>{
            var _msg_data, _msg_data1, _msg_data2, _msg_data3;
            if (!msg) return undefined;
            const type = msg.type;
            if (type === "attachment" || type === "image") return ((_msg_data = msg.data) === null || _msg_data === void 0 ? void 0 : _msg_data.caption) ? `📷 ${msg.data.caption}` : "📷 Photo";
            if (type === "video") return ((_msg_data1 = msg.data) === null || _msg_data1 === void 0 ? void 0 : _msg_data1.caption) ? `🎥 ${msg.data.caption}` : "🎥 Video";
            if (type === "voice") return "🎙️ Voice message";
            if (type === "contact") return "👤 Contact";
            if (type === "poll") return `📊 ${((_msg_data2 = msg.data) === null || _msg_data2 === void 0 ? void 0 : _msg_data2.question) || "Poll"}`;
            if (type === "event") return `📅 ${((_msg_data3 = msg.data) === null || _msg_data3 === void 0 ? void 0 : _msg_data3.title) || "Event"}`;
            if (type === "document") return "📄 Document";
            if (type === "call") return "📞 Call";
            if (msg.text && typeof msg.text === "string" && !msg.text.includes('"__e2ee"') && !msg.text.includes('{"__e2ee"')) {
                return msg.text;
            }
            return msg.text || "Message";
        };
        const replyToText = getReplyPreviewText(currentReplyTarget);
        const replyToData = (currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.data) || {};
        const replyToType = (currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.type) || ((_replyToData_mimetype = replyToData.mimetype) === null || _replyToData_mimetype === void 0 ? void 0 : (_replyToData_mimetype_split = _replyToData_mimetype.split('/')) === null || _replyToData_mimetype_split === void 0 ? void 0 : _replyToData_mimetype_split[0]);
        const replyToMediaUrl = replyToData.url || replyToData.fileUrl || (currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.text);
        const replyToMime = replyToData.mimetype || replyToData.mime || '';
        const replyToFileName = replyToData.filename || replyToData.name;
        const replyToSender = currentReplyTarget ? currentReplyTarget.from === "me" || currentReplyTarget.isMe ? "You" : currentReplyTarget.senderName || currentReplyTarget.sender || chat.sender || "User" : undefined;
        setMessages((m)=>{
            const optimisticMsg = {
                id: tempId,
                clientMessageId: String(tempId),
                from: "me",
                text: msgText,
                time: new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                }),
                createdAt: new Date().toISOString(),
                status: "sending",
                replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                replyToText,
                replyToSender,
                linkPreview: currentLinkPreview || undefined,
                data: {
                    ...currentReplyTarget ? {
                        replyToId: currentReplyTarget.id,
                        replyToText,
                        replyToSender,
                        replyToType,
                        replyToMediaUrl,
                        replyToMime,
                        replyToFileName,
                        replyToCaption: replyToData.caption || ''
                    } : {},
                    ...currentLinkPreview ? {
                        linkPreview: currentLinkPreview
                    } : {}
                }
            };
            const next = [
                ...m,
                optimisticMsg
            ];
            globalMessageCache.set(chat.id, next);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), optimisticMsg).catch(()=>{});
            return next;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playConversationTone"])('outgoing');
        setMessage("");
        stopTyping();
        setReplyTarget(null);
        setLinkPreview(null);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
        setShowEmojiPicker(false);
        // A mobile tap normally blurs the textarea before the send handler runs.
        // Restore focus after React swaps the send button back to the mic button.
        if ("TURBOPACK compile-time truthy", 1) {
            window.requestAnimationFrame(()=>{
                var _textareaRef_current;
                (_textareaRef_current = textareaRef.current) === null || _textareaRef_current === void 0 ? void 0 : _textareaRef_current.focus({
                    preventScroll: true
                });
            });
        }
        messageQueueRef.current = messageQueueRef.current.then(async ()=>{
            let textToSend = msgText;
            if (!isGroupChat && chat.otherUserId) {
                let encrypted = null;
                try {
                    encrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptMessage"](chat.otherUserId, msgText);
                } catch (e) {
                //console.error('[E2EE] Encryption failed:', e);
                }
                if (!encrypted) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].isAvailable()) {
                        console.warn(`[E2EE] Initial Signal session not yet established with recipient ${chat.otherUserId} while offline. Proceeding with Mesh direct transport.`);
                        textToSend = msgText;
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to send secure message — E2EE encryption failed.");
                        console.error(`[E2EE] Encryption failed for recipient ${chat.otherUserId}. Aborting send.`);
                        setMessages((m)=>{
                            const next = m.map((msg)=>msg.id === tempId ? {
                                    ...msg,
                                    status: 'failed'
                                } : msg);
                            globalMessageCache.set(chat.id, next);
                            return next;
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](tempId, 'failed').catch(()=>{});
                        return;
                    }
                } else {
                    textToSend = encrypted;
                }
            }
            const isEncrypted = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEncryptedPayload"](textToSend);
            const payload = {
                clientMessageId: String(tempId),
                ...currentReplyTarget ? {
                    replyToId: currentReplyTarget.id,
                    replyToText,
                    replyToSender,
                    replyToType,
                    replyToMediaUrl,
                    replyToMime,
                    replyToFileName,
                    replyToCaption: replyToData.caption || ''
                } : {},
                ...currentLinkPreview ? {
                    linkPreview: currentLinkPreview
                } : {},
                pushPreview: msgText,
                otherUserId: chat.otherUserId
            };
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, textToSend, 'text', payload);
                if (res.success) {
                    var _res_data, _res_data1, _res_data2, _res_data3;
                    const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                    const serverId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                    const messageId = String(serverId);
                    const finalStatus = getHighestMessageStatus(apiStatus, globalReadReceipts.has(messageId) ? 'read' : undefined, globalDeliveredReceipts.has(messageId) ? 'delivered' : undefined);
                    globalReadReceipts.delete(messageId);
                    globalDeliveredReceipts.delete(messageId);
                    const now = new Date();
                    const timeStr2 = now.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    setMessages((m)=>{
                        const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(serverId));
                        if (alreadyHasServerId) {
                            // Preserve stronger delivery/read state if the socket event raced the HTTP response.
                            const next = m.filter((msg)=>msg.id !== tempId).map((msg)=>String(msg.id) === String(serverId) ? {
                                    ...msg,
                                    status: getHighestMessageStatus(msg.status, finalStatus)
                                } : msg);
                            globalMessageCache.set(chat.id, next);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](serverId, finalStatus).catch(()=>{});
                            return next;
                        }
                        const next = m.map((msg)=>{
                            var _res_data;
                            return msg.id === tempId ? {
                                ...msg,
                                id: serverId,
                                clientMessageId: String(tempId),
                                status: finalStatus,
                                replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                                replyToText,
                                replyToSender,
                                data: {
                                    ...((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || {},
                                    ...currentReplyTarget ? {
                                        replyToId: currentReplyTarget.id,
                                        replyToText,
                                        replyToSender
                                    } : {}
                                }
                            } : msg;
                        });
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    // Reconcile tempId → serverId in IndexedDB (removes stale 'sending' record)
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileMessageId"](Number(chat.id), tempId, serverId, finalStatus).catch(()=>{});
                    // Also persist full message details so next load shows correct data
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), {
                        id: serverId,
                        roomId: Number(chat.id),
                        text: msgText,
                        from: 'me',
                        type: 'text',
                        time: timeStr2,
                        createdAt: now.toISOString(),
                        status: finalStatus,
                        replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                        replyToText,
                        replyToSender,
                        linkPreview: currentLinkPreview || undefined,
                        data: {
                            ...((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.data) || {},
                            ...currentReplyTarget ? {
                                replyToId: currentReplyTarget.id,
                                replyToText,
                                replyToSender
                            } : {}
                        }
                    }).catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](chat.id, msgText, ((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.id) || tempId);
                    const timeStr = new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    const nowIso = new Date().toISOString();
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](Number(chat.id), msgText, timeStr, true).catch(()=>{});
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('room:preview_updated', {
                            detail: {
                                roomId: Number(chat.id),
                                preview: msgText,
                                time: timeStr,
                                isMe: true,
                                status: finalStatus,
                                lastMessageTimestamp: nowIso
                            }
                        }));
                    }
                    if (onMessageSent) {
                        var _res_data4;
                        onMessageSent(msgText, timeStr, finalStatus, ((_res_data4 = res.data) === null || _res_data4 === void 0 ? void 0 : _res_data4.id) || tempId);
                    }
                    if (onRoomUpdated) {
                        onRoomUpdated(chat.id, {
                            preview: msgText,
                            time: timeStr,
                            isMe: true,
                            status: finalStatus,
                            lastMessageTimestamp: nowIso,
                            bumpToTop: true
                        });
                    }
                }
            } catch (err) {
                console.warn("Network error sending message, checking PingDart Mesh transport:", err);
                let sentViaMesh = false;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].isAvailable()) {
                    try {
                        sentViaMesh = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].sendOfflineMessage({
                            chat,
                            tempId,
                            textToSend,
                            msgText,
                            payload,
                            currentReplyTarget,
                            replyToText,
                            replyToSender,
                            currentLinkPreview
                        });
                    } catch (meshErr) {
                        console.warn('[useChatHandlers] Mesh send error:', meshErr);
                    }
                }
                if (sentViaMesh) {
                    const now = new Date();
                    const timeStr2 = now.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    setMessages((m)=>{
                        const next = m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                status: 'sent',
                                data: {
                                    ...msg.data || {},
                                    isMesh: true
                                }
                            } : msg);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](tempId, 'sent').catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), {
                        id: tempId,
                        roomId: Number(chat.id),
                        text: msgText,
                        from: 'me',
                        type: 'text',
                        time: timeStr2,
                        createdAt: now.toISOString(),
                        status: 'sent',
                        replyTo: currentReplyTarget === null || currentReplyTarget === void 0 ? void 0 : currentReplyTarget.id,
                        replyToText,
                        replyToSender,
                        linkPreview: currentLinkPreview || undefined,
                        data: {
                            isMesh: true,
                            ...currentReplyTarget ? {
                                replyToId: currentReplyTarget.id,
                                replyToText,
                                replyToSender
                            } : {}
                        }
                    }).catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](chat.id, msgText, tempId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](Number(chat.id), msgText, timeStr2, true).catch(()=>{});
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('room:preview_updated', {
                            detail: {
                                roomId: Number(chat.id),
                                preview: msgText,
                                time: timeStr2,
                                isMe: true,
                                status: 'sent',
                                lastMessageTimestamp: now.toISOString()
                            }
                        }));
                    }
                    if (onMessageSent) {
                        onMessageSent(msgText, timeStr2, 'sent', tempId);
                    }
                    if (onRoomUpdated) {
                        onRoomUpdated(chat.id, {
                            preview: msgText,
                            time: timeStr2,
                            isMe: true,
                            status: 'sent',
                            lastMessageTimestamp: now.toISOString(),
                            bumpToTop: true
                        });
                    }
                } else {
                    // Standard fail-safe outbox fallback when offline and mesh peer not in range
                    setMessages((m)=>{
                        const next = m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                status: 'failed'
                            } : msg);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](tempId, 'failed').catch(()=>{});
                    // Enqueue for retry when back online
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueOutbox"]({
                        roomId: Number(chat.id),
                        tempId,
                        text: msgText,
                        type: 'text',
                        payload
                    }).catch(()=>{});
                }
            }
        });
    };
    const handleAttachment = ()=>{
        setShowAttachmentMenu(!showAttachmentMenu);
    };
    const onFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);
            setSelectedFiles((prev)=>{
                if (prev.length > 0) return [
                    ...prev,
                    ...newFiles
                ];
                setActiveFileIndex(0);
                return newFiles;
            });
            setFileCaption("");
            setShowAttachmentMenu(false);
        }
        if (e.target) {
            e.target.value = '';
        }
    };
    const handleSendAttachment = async (caption)=>{
        if (selectedFiles.length === 0) return;
        const files = [
            ...selectedFiles
        ];
        setSelectedFiles([]);
        setFileCaption("");
        setActiveFileIndex(0);
        for (const file of files){
            const tempId = Date.now() + Math.floor(Math.random() * 1000);
            const fileUrl = URL.createObjectURL(file);
            const isVideo = file.type.startsWith('video/');
            const isImage = file.type.startsWith('image/');
            const isAudio = file.type.startsWith('audio/');
            const msgType = isImage ? "image" : isVideo ? "video" : isAudio ? "audio" : "document";
            setMessages((m)=>{
                const next = [
                    ...m,
                    {
                        id: tempId,
                        clientMessageId: String(tempId),
                        from: "me",
                        type: msgType,
                        text: fileUrl,
                        uploadProgress: 0,
                        data: {
                            filename: file.name,
                            size: file.size,
                            mimetype: file.type,
                            caption,
                            uploadProgress: 0,
                            attachments: [
                                {
                                    name: file.name,
                                    type: file.type,
                                    size: file.size,
                                    url: fileUrl
                                }
                            ]
                        },
                        time: new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        }),
                        createdAt: new Date().toISOString(),
                        status: "sending"
                    }
                ];
                globalMessageCache.set(chat.id, next);
                return next;
            });
            try {
                const handleProgress = (percent)=>{
                    setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                uploadProgress: percent,
                                data: {
                                    ...msg.data,
                                    uploadProgress: percent
                                }
                            } : msg));
                };
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendAttachment(chat.id, file, caption, undefined, undefined, undefined, undefined, handleProgress, String(tempId));
                if (res.success) {
                    var _res_data, _res_data1, _res_data2, _res_data3, _res_data4, _res_data5;
                    const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                    const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                    const finalType = ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.type) || msgType;
                    const finalText = ((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.text) || ((_res_data4 = res.data) === null || _res_data4 === void 0 ? void 0 : _res_data4.fileUrl) || fileUrl;
                    const serverData = ((_res_data5 = res.data) === null || _res_data5 === void 0 ? void 0 : _res_data5.data) || {};
                    const finalData = {
                        filename: file.name,
                        size: file.size,
                        mimetype: file.type,
                        caption,
                        ...serverData,
                        attachments: [
                            {
                                name: file.name,
                                type: file.type,
                                size: file.size,
                                url: finalText
                            }
                        ]
                    };
                    setMessages((m)=>{
                        const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                        if (alreadyHasServerId) {
                            const next = m.filter((msg)=>msg.id !== tempId);
                            globalMessageCache.set(chat.id, next);
                            return next;
                        }
                        const next = m.map((msg)=>msg.id === tempId ? {
                                ...msg,
                                id: finalId,
                                clientMessageId: String(tempId),
                                type: finalType,
                                text: finalText,
                                status: apiStatus,
                                data: finalData
                            } : msg);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    });
                    const timeStr = new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    // Reconcile tempId -> finalId in IndexedDB and persist attachment locally
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileMessageId"](Number(chat.id), tempId, finalId, apiStatus).catch(()=>{});
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), {
                        id: finalId,
                        roomId: Number(chat.id),
                        text: finalText,
                        from: 'me',
                        type: finalType,
                        time: timeStr,
                        createdAt: new Date().toISOString(),
                        status: apiStatus,
                        data: finalData
                    }).catch(()=>{});
                    const previewText = caption || (isImage ? '📷 Photo' : isVideo ? '🎥 Video' : isAudio ? '🎵 Audio' : `📄 ${file.name}`);
                    if (onMessageSent) onMessageSent(previewText, timeStr, apiStatus, finalId);
                    if (onRoomUpdated) onRoomUpdated(chat.id, {
                        preview: previewText,
                        time: timeStr,
                        isMe: true,
                        status: apiStatus,
                        lastMessageTimestamp: new Date().toISOString(),
                        bumpToTop: true
                    });
                }
            } catch (err) {
                console.error("Error sending attachment:", err);
                setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            status: "error"
                        } : msg));
            }
        }
    };
    const handleCameraCapture = (file)=>{
        setSelectedFiles([
            file
        ]);
        setActiveFileIndex(0);
        setShowCameraModal(false);
    };
    const handleSendContact = async (contacts)=>{
        setShowContactModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "contact",
                    data: contacts,
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, '', 'contact', {
                contacts,
                clientMessageId: String(tempId)
            }, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus
                        } : msg);
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent("👤 Contact", timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: "👤 Contact",
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending contact:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleSendPoll = async (pollData)=>{
        setShowPollModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "poll",
                    data: pollData,
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, pollData.question || '', 'poll', {
                ...pollData,
                clientMessageId: String(tempId)
            }, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus
                        } : msg);
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent(`📊 Poll: ${pollData.question}`, timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: `📊 Poll: ${pollData.question}`,
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending poll:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleSendEvent = async (eventData)=>{
        setShowEventModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "event",
                    data: eventData,
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(chat.id, eventData.title || '', 'event', {
                ...eventData,
                clientMessageId: String(tempId)
            }, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus
                        } : msg);
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent(`📅 Event: ${eventData.title}`, timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: `📅 Event: ${eventData.title}`,
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending event:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleSendVoice = async (file, duration)=>{
        setShowMicModal(false);
        const tempId = Date.now();
        setMessages((m)=>{
            const next = [
                ...m,
                {
                    id: tempId,
                    clientMessageId: String(tempId),
                    from: "me",
                    type: "voice",
                    data: {
                        file,
                        duration,
                        url: URL.createObjectURL(file)
                    },
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sending"
                }
            ];
            globalMessageCache.set(chat.id, next);
            return next;
        });
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendAttachment(chat.id, file, '', 'voice', undefined, undefined, undefined, undefined, String(tempId));
            if (res.success) {
                var _res_data, _res_data1;
                const apiStatus = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) || "sent";
                const finalId = ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.id) || tempId;
                setMessages((m)=>{
                    const alreadyHasServerId = m.some((msg)=>String(msg.id) === String(finalId));
                    if (alreadyHasServerId) {
                        const next = m.filter((msg)=>msg.id !== tempId);
                        globalMessageCache.set(chat.id, next);
                        return next;
                    }
                    const next = m.map((msg)=>{
                        var _res_data, _msg_data;
                        return msg.id === tempId ? {
                            ...msg,
                            id: finalId,
                            clientMessageId: String(tempId),
                            status: apiStatus,
                            data: {
                                ...msg.data,
                                url: ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.fileUrl) || ((_msg_data = msg.data) === null || _msg_data === void 0 ? void 0 : _msg_data.url)
                            }
                        } : msg;
                    });
                    globalMessageCache.set(chat.id, next);
                    return next;
                });
                const timeStr = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true
                });
                if (onMessageSent) onMessageSent("🎤 Voice message", timeStr, apiStatus, finalId);
                if (onRoomUpdated) onRoomUpdated(chat.id, {
                    preview: "🎤 Voice message",
                    time: timeStr,
                    isMe: true,
                    status: apiStatus,
                    lastMessageTimestamp: new Date().toISOString(),
                    bumpToTop: true
                });
            }
        } catch (err) {
            console.error("Error sending voice message:", err);
            setMessages((m)=>m.map((msg)=>msg.id === tempId ? {
                        ...msg,
                        status: "error"
                    } : msg));
        }
    };
    const handleCallEnd = (callType, duration)=>{
        setMessages((m)=>[
                ...m,
                {
                    id: Date.now(),
                    from: "me",
                    type: "call",
                    data: {
                        callType,
                        duration
                    },
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: "sent"
                }
            ]);
        if (callType === 'audio' && setShowAudioCallModal) setShowAudioCallModal(false);
        if (callType === 'video' && setShowVideoCallModal) setShowVideoCallModal(false);
    };
    return {
        handleInput,
        handleMentionSelect,
        handleReply,
        handleDeleteMessage,
        handleForward,
        handleReact,
        sendMessage,
        handleAttachment,
        onFileChange,
        handleSendAttachment,
        handleCameraCapture,
        handleSendContact,
        handleSendPoll,
        handleSendEvent,
        handleSendVoice,
        handleCallEnd,
        linkPreview,
        onRemoveLinkPreview: ()=>setLinkPreview(null)
    };
}
_s(useChatHandlers, "aa7D7Jj/4670q1dQkKRWSqbSMJo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_25807a6b._.js.map